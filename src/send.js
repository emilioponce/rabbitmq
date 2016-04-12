#!/usr/bin/env node

var amqp = require('amqplib/callback_api');

amqp.connect('amqp://localhost', function(err, conn) {

// channel created, with a queue. Sending message to the queue
  conn.createChannel(function(err, channel) {
    var queueID = 'mainQueue';
    var message = 'Winona Rider de joven';
    channel.assertQueue(queueID, {durable: false});
    channel.sendToQueue(queueID, new Buffer(message));
    console.log('Message [%s] sended', message);
  });

  // closed connection and exit process after 500ms
  setTimeout(
    function() { conn.close(); process.exit(0) },
    500);

  });
