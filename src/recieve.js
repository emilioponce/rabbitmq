#!/usr/bin/env node

var amqp = require('amqplib/callback_api');

amqp.connect('amqp://localhost', function(err, conn) {
  conn.createChannel(function(err, ch) {

    // create queue
    var queueID = 'mainQueue';

    ch.assertQueue(queueID, {durable: false});
    console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", queueID);

    ch.consume(queueID, function(msg) {
      console.log(" [x] Received %s", msg.content.toString());
    }, {noAck: true});
  });
});
