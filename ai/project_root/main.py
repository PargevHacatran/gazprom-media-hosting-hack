import os
from modules.video_processing import process_video
from modules.audio_processing import process_audio
import yt_dlp
import subprocess


def download_video(video_url, output_video_path):
    """
    Скачивает видео с помощью yt-dlp.
    """
    ydl_opts = {
        'outtmpl': output_video_path,
        'format': 'best',
    }

    print(f"Скачиваем видео по ссылке: {video_url}")

    with yt_dlp.YoutubeDL(ydl_opts) as ydl:
        ydl.download([video_url])

    print(f"Видео скачано: {output_video_path}")


def load_config(config_path):
    import yaml
    with open(config_path, 'r') as f:
        config = yaml.safe_load(f)
    return config


def main():
    config_path = "./config.yaml"
    config = load_config(config_path)

    video_url = input("Введите ссылку на видео для обработки: ")
    video_output_path = "./downloaded_videos/video_to_process.mp4"

    # Скачивание видео
    download_video(video_url, video_output_path)

    # Путь для сохранения результатов
    video_output_path = "./downloaded_videos/video_to_process.mp4"
    json_output_path = "./output/results.json"

    # Обработка видео
    process_video(video_output_path, json_output_path, config)

    # Обработка аудио
    process_audio(video_output_path, config, json_output_path)


if __name__ == "__main__":
    main()
