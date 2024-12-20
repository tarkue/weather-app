# Приложение погоды (Artsofte)

## Features
- Приложение написано без использования библиотек и фреймворков
- Приложение валидирует введенным пользователем данные
- Приложение использует fetch, promise api или async/await
- осознанные названия переменных и функций
- длина методов/функций не превышает 25 строк кода
- код структурирован (не линейное исполнение кода)
- отображение доп. информации (сила ветра, время в локации и тд)
- показ разных изображений под разную погоду (если солнечно, то солнце, если дождь, то дождь)
- можно добавлять несколько виджетов с погодой
- используется карта Яндекс
- конфигурация Dockerfile, Docker-compose, nginx.

## Design 
[Изначальный макет от Artsofte](https://www.figma.com/file/IS1D3zWif7Ode5LarG4E0v/Untitled?node-id=0%3A1) пришлось немного переделать, быстренько набросал [новый макет](https://www.figma.com/design/AomqlwIV5GA24V943H2YAp/WEATHER-APP?node-id=0-1&t=LN4jPUvFjhaHU3tv-1)

## Запуск

Изначально в docker-compose указан порт 3000, можете его изменить. 


### Команда запуска
```
docker compose up -d
```