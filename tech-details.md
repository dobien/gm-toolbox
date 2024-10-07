# Технические детали

* Платформа: foundryvtt и discord.

* Активно использую ChatGPT для помощи в ветвлении сюжета и для генерации иллюстраций.

## Транскрибация через Whisper

Windows:
* Скачать и установить Python
* Скачать и установить FFmpeg: https://github.com/BtbN/FFmpeg-Builds/releases \
Убедиться, что путь к его бинарникам находится в PATH
* Установить PyTorch: https://pytorch.org \
Секция "Install PyTorch"
* Установить Whisper: `pip install -U openai-whisper`

Затем запуск через `whisper <путь-к-файлу>`