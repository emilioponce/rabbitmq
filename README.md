# rabbitmq testing using javascript

0. Init your project with `git clone https://github.com/emilioponce/rabbitmq.git`.

1. First, download RabbitMQ Server from the official web: https://www.rabbitmq.com/
In debian/ubuntu by default we have an old version installed. For this reason, probably it's better to download & install the *.deb* version.
RabbitMQ Server is running automatically since its installed, and we can start/stop it as a regular service.

2. Then `npm install` to install amqplib dependency. In our case we use RabbitMQ's Callback API package (default one uses promises).

3. Finally execute *send.js* and *receive.js* in two different terminals (as you can imagine, *receive.js* first), in order to see how *send.js* sends a message and *receive.js* receives it.
`node send.js` & `node receive.js`
