# Получаем и выводим весь список контактов в виде таблицы (console.table)

node index.js --action list
(http://joxi.ru/vAW8WYqT3EZDyr)

# Получаем контакт по id

node index.js --action get --id 5
(http://joxi.ru/KAgV5MDc5kDJL2)

# Добавялем контакт

node index.js --action add --name Mango --email mango@gmail.com --phone 322-22-22
(http://joxi.ru/YmE5gkdsG6YWEm)

# Удаляем контакт

node index.js --action remove --id=3
(http://joxi.ru/J2bzx5oiqEbyk2)
