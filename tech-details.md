# Технические детали

* Платформа: foundryvtt (для игры достаточно браузера) и discord (инструмент для голосового чата пока не окончательный, см. ниже).

* Планирую активно использовать нейросетки: 
  * llm типа chatgpt для помощи в ветвлении сюжета (со старта), 
  * stable diffusion для генерации портретов поголовно всех нпс (низкий приоритет, это на будущее: зависит от соотн-я время-результат, альтернатива без нейросетки - PortraitWorks), 
  * распознавание речи (формирование стенограммы из аудиозаписи игры, предупреждаю, что звук будет записываться с этой целью; высокий приоритет): предварительно буду записывать через OBS и потом транскрибировать через Whisper.

## Транскрибация через Whisper

Windows:
* Скачать и установить Python
* Скачать и установить FFmpeg: https://github.com/BtbN/FFmpeg-Builds/releases \
Убедиться, что путь к его бинарникам находится в PATH
* Установить PyTorch: https://pytorch.org \
Секция "Install PyTorch"
* Установить Whisper: `pip install -U openai-whisper`

Затем запуск через `whisper <путь-к-файлу>`