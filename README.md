# rabbitmq testing with javascript

0. Init your project with `npm init`.
1. First, download RabbitMQ Server from the official web: https://www.rabbitmq.com/
In debian/ubuntu by default we have an old version installed. For this reason, probably it's better to download & install the *.deb* version. RabbitMQ Server is running automatically since its installed, and we can start/stop it as a regular service.

2. Then, install nodejs dependency. In our case we use RabbitMQ's Callback API package (default one uses promises).
`npm install --save amqplib`

3. Execute *send.js* and *receive.js* in two diferent terminals (*receive.js* first), in order to see how *send.js* sends a message and *receive.js* receive's it.
`node send.js` & `node receive.js`
