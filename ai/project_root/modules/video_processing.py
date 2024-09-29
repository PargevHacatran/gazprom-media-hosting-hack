import os
import torch
import cv2
import json
from torchvision.models.detection import fasterrcnn_resnet50_fpn


def load_video(video_path, target_size=(640, 480)):
    cap = cv2.VideoCapture(video_path)
    frames = []

    while True:
        ret, frame = cap.read()
        if not ret:
            break
        frame = cv2.resize(frame, target_size)
        frames.append(frame)

    cap.release()
    return frames


def detect_motion_and_objects(frames, object_model, motion_threshold=1.5, segment_duration=7):
    motion_data = []
    prev_gray = None
    frame_interval = segment_duration * 25  # 25 кадров в секунду
    current_segment_start = 0

    for i, frame in enumerate(frames):
        gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)

        if prev_gray is None:
            prev_gray = gray
            continue

        flow = cv2.calcOpticalFlowFarneback(prev_gray, gray, None, 0.5, 3, 15, 3, 5, 1.2, 0)
        mag, ang = cv2.cartToPolar(flow[..., 0], flow[..., 1])
        motion_magnitude = mag.mean()

        if motion_magnitude > motion_threshold:
            objects = detect_objects(frame, object_model)
            object_descriptions = ', '.join([obj['label'] for obj in objects])
            movement_type = classify_movement(motion_magnitude)

            motion_data.append({
                "start": current_segment_start,
                "end": i // frame_interval,
                "description": f"Движение: {movement_type}. Объекты: {object_descriptions}"
            })
            current_segment_start = i + 1

        prev_gray = gray

    return motion_data


def detect_objects(frame, model):
    transform = torch.nn.functional.interpolate
    frame_rgb = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
    tensor_frame = torch.tensor(frame_rgb).permute(2, 0, 1).unsqueeze(0).float() / 255.0

    with torch.no_grad():
        outputs = model(tensor_frame)

    labels = outputs[0]['labels'].cpu().numpy()
    scores = outputs[0]['scores'].cpu().numpy()
    boxes = outputs[0]['boxes'].cpu().numpy()

    objects = []
    for label, score, box in zip(labels, scores, boxes):
        if score > 0.5:
            objects.append({
                'label': COCO_LABELS.get(label, 'неизвестный объект'),
                'box': box.tolist()
            })

    return objects


COCO_LABELS = {
    1: "человек", 2: "велосипед", 3: "автомобиль", 4: "мотоцикл", 5: "самолет",
    6: "автобус", 7: "поезд", 8: "грузовик", 9: "лодка", 10: "светофор",
    # Добавьте остальные объекты
}


def classify_movement(motion_magnitude):
    if motion_magnitude > 5.0:
        return "бег"
    elif motion_magnitude > 2.5:
        return "ходьба"
    else:
        return "незначительное движение"


def process_video(video_path, output_path, config):
    interval = config.get('settings', {}).get('segment_duration', 7)

    frames = load_video(video_path)
    print(f"Количество кадров в видео: {len(frames)}")

    object_model = fasterrcnn_resnet50_fpn(pretrained=True)
    object_model.eval()

    motion_and_object_data = detect_motion_and_objects(frames, object_model, segment_duration=interval)

    if not os.path.exists(os.path.dirname(output_path)):
        os.makedirs(os.path.dirname(output_path))

    with open(output_path, 'w', encoding='utf-8') as f:
        json.dump(motion_and_object_data, f, ensure_ascii=False, indent=4)

    print(f"Анализ завершен, результаты сохранены в {output_path}")
