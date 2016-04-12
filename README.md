# rabbitmq

First download RabbitMQ Server from the web. In debian/ubuntu by default we have an old version installed. For this reason probably it's better to download & install the *.deb* version. RabbitMQ Server is running automatically since its installed. We can start/stop it as a service.

Then install nodejs dependency, in our case RabbitMQ Callback API package (the default one uses promises).

node install

Execute send.js and recieve.js in two diferent terminals (recieve first), in order to see how send.js sends a message and recieve.js recieve's it.
