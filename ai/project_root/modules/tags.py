import json
from collections import defaultdict

def extract_tags_with_timecodes(json_path, output_json_path):
    """
    Создает новый JSON файл с тегами объектов и временными интервалами их появления.
    """
    with open(json_path, 'r', encoding='utf-8') as f:
        data = json.load(f)

    tag_timecodes = defaultdict(list)

    # Проходим по каждому сегменту
    for segment in data:
        description = segment['description']
        start_time = segment['start']
        end_time = segment['end']

        # Извлекаем объекты из описания
        # Предположим, что объекты описаны после слова "Объекты:"
        if "Объекты:" in description:
            objects = description.split("Объекты:")[1].strip()
            if objects:
                # Разделяем объекты по запятой
                object_list = [obj.strip() for obj in objects.split(",")]

                # Добавляем временные интервалы для каждого объекта
                for obj in object_list:
                    tag_timecodes[f'#{obj}'].append({
                        "start": start_time,
                        "end": end_time
                    })

    # Формируем новый JSON формат
    result = []
    for tag, timecodes in tag_timecodes.items():
        result.append({
            "tagName": tag,
            "timeCodes": timecodes
        })

    # Сохраняем новый JSON файл
    with open(output_json_path, 'w', encoding='utf-8') as f:
        json.dump(result, f, ensure_ascii=False, indent=4)

    print(f"Новый JSON файл сохранен в {output_json_path}")

# Пример использования
if __name__ == "__main__":
    input_json_path = "./output/final_results.json"
    output_json_path = "./output/tagged_results.json"
    extract_tags_with_timecodes(input_json_path, output_json_path)
