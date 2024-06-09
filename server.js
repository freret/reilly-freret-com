const express = require('express');
const favicon = require('express-favicon');
const mqtt = require('mqtt');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();

function authentication(req, res, next) {
  const authheader = req.headers.authorization;
  console.log(req.headers);

  if (!authheader) {
    let err = new Error('You are not authenticated!');
    res.setHeader('WWW-Authenticate', 'Basic');
    err.status = 401;
    return next(err)
  }

  const auth = new Buffer.from(authheader.split(' ')[1],
    'base64').toString().split(':');
  const user = auth[0];
  const pass = auth[1];

  if (user == 'admin' && pass == 'admin') {

    // If Authorized user
    next();
  } else {
    let err = new Error('You are not authenticated!');
    res.setHeader('WWW-Authenticate', 'Basic');
    err.status = 401;
    return next(err);
  }

}

app.use(favicon(__dirname + '/build/favicon.ico'));
// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));
app.use(express.json())

const mqttClient = mqtt.connect('tls://d7ad67d5cbb14999894675743d50e0e6.s1.eu.hivemq.cloud:8883', { username: "rf_test", password: "Test1234", rejectUnauthorized: false });
app.get('/messaging', authentication, function (req, res) {
  // console.log(mqttClient.connected);
  // const message = req.query.message || 'Hello from Node.js';
  // mqttClient.publish('testTopic', message);
  // res.send(`Message sent: ${message}`);
  // return res.send()
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

app.post('/sendMessage', authentication, function (req, res) {
  console.log(mqttClient.connected);
  // console.log(req)
  console.log(req.body)
  const message = req.body.message || "no message";
  mqttClient.publish('testTopic', message);
  return res.send(`Message sent: ${message}`);
})

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port);