import os
import subprocess
import librosa
import numpy as np
import json
import soundfile as sf
from transformers import pipeline

# Транскрибация с Whisper

def transcribe_audio_with_whisper(audio_chunks, sample_rate):
    """
    Транскрибирует аудиофрагменты с помощью Whisper.
    """
    print("Начинаем транскрибацию аудио с помощью Whisper...")

    # Используем модель Whisper для транскрибации
    transcriber = pipeline("automatic-speech-recognition", model="openai/whisper-base")

    transcriptions = []

    for i, chunk in enumerate(audio_chunks):
        file_path = f"./temp_chunk_{i}.wav"
        sf.write(file_path, chunk, sample_rate)

        # Транскрибируем фрагмент
        transcription = transcriber(file_path)["text"]
        transcriptions.append(transcription)

        # Удаляем временный файл после транскрипции
        os.remove(file_path)

    return transcriptions


from transformers import pipeline

def classify_audio_with_vggish(audio_chunks, sample_rate):
    """
    Классифицирует аудиофрагменты с помощью модели для аудио-классификации.
    """
    print("Классификация звуков с помощью модели...")

    # Используем более легкую модель для классификации звуков
    vggish_model = pipeline("audio-classification", model="superb/hubert-base-superb-er")

    sound_classifications = []

    for i, chunk in enumerate(audio_chunks):
        file_path = f"./temp_chunk_{i}.wav"
        sf.write(file_path, chunk, sample_rate)

        # Классифицируем фрагмент
        classification = vggish_model(file_path)
        sound_classifications.append(classification)

        # Удаляем временный файл после классификации
        os.remove(file_path)

    return sound_classifications



# Извлечение аудио
def extract_audio_from_video(video_path, output_audio_path):
    """
    Извлекает аудио из видеофайла с помощью ffmpeg.
    """
    if not os.path.exists(os.path.dirname(output_audio_path)):
        os.makedirs(os.path.dirname(output_audio_path))

    print(f"Извлекаем аудио из видео: {video_path}")

    command = f"ffmpeg -y -i {video_path} -vn {output_audio_path}"
    subprocess.run(command, shell=True, check=True)


# Деление аудио на фрагменты
def split_audio_into_chunks(audio_path, chunk_duration):
    """
    Делит аудиофайл на части заданной длительности.
    """
    print(f"Делим аудио на фрагменты по {chunk_duration} секунд")
    audio, sample_rate = librosa.load(audio_path, sr=None)
    total_duration = librosa.get_duration(y=audio, sr=sample_rate)
    chunks = []

    for i in range(0, int(total_duration), chunk_duration):
        start_sample = i * sample_rate
        end_sample = min((i + chunk_duration) * sample_rate, len(audio))
        chunk = audio[int(start_sample):int(end_sample)]
        chunks.append(chunk)

    return chunks, sample_rate


# Основная функция обработки аудио
def process_audio(video_path, config, json_output_path):
    """
    Основная функция для обработки аудио.
    """
    audio_output_path = "./audio/full_audio.wav"

    # Шаг 1: Извлечение аудио из видео
    extract_audio_from_video(video_path, audio_output_path)

    # Шаг 2: Делим аудио на части для обработки
    audio_chunks, sample_rate = split_audio_into_chunks(audio_output_path, config['settings']['segment_duration'])

    # Шаг 3: Транскрибация аудио с Whisper
    transcriptions = transcribe_audio_with_whisper(audio_chunks, sample_rate)

    # Шаг 4: Классификация аудио с VGGish
    sound_classifications = classify_audio_with_vggish(audio_chunks, sample_rate)

    # Шаг 5: Загрузка видео JSON с результатами и добавление транскрипции и классификации звуков
    with open(json_output_path, 'r', encoding='utf-8') as f:
        video_results = json.load(f)

    # Добавляем транскрипции и классификации звуков
    segment_duration = config['settings']['segment_duration']
    for i, entry in enumerate(video_results):
        entry['start'] = i * segment_duration
        entry['end'] = (i + 1) * segment_duration
        if i < len(transcriptions):
            entry['description'] += f" Транскрибация: {transcriptions[i]}"
        if i < len(sound_classifications):
            entry['description'] += f" Классификация звука: {sound_classifications[i][0]['label']}"

    # Сохранение JSON с добавленными транскрипциями и классификацией
    with open(json_output_path, 'w', encoding='utf-8') as f:
        json.dump(video_results, f, ensure_ascii=False, indent=4)

    print(f"Аудиообработка завершена, результаты добавлены в {json_output_path}")
