const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

require('dotenv').config();

const app = express();

const meetupModel = require('./models');

const {
  addItemToDB,
  getAllItemsFromDB,
} = require('./data-layer')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// API calls
app.get('/api/map', (req, res) => {
  res.send('hello');
});

app.post('/api/addItem', (req, res) => {
  // displays in the terminal
  console.log('adding Item', req.body);
  // toDoList.push(req.body.post);
  addItemToDB(req.body).then(() => res.send('Item added!'));
});

app.get('/api/getMeetups', (req, res) => {
  console.log('getting meetups', req.body);
  getAllItemsFromDB().then((Response) => res.send(Response));
});

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));

  // Handle React routing, return all requests to React app
  app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

let server;

const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const { DATABASE_URL } = require('./config');

const connectMongo = mongoose.connect.bind(mongoose);
const startNodeServer = port =>
  new Promise((resolve, reject) => {
    server = app
      .listen(port, () => {
        console.log(`Your app is listening on port ${port}`);
        resolve();
      })
      .on('error', (err) => {
        reject(err);
      });
  });
const disconnectMongo = mongoose.disconnect.bind(mongoose);

function runServer(
  databaseUrl = DATABASE_URL,
  port = process.env.PORT || 7000,
) {
  // console.log(databaseUrl);
  return connectMongo(databaseUrl, {
    useNewUrlParser: true,
  })
    .then(startNodeServer(port))
    .catch((e) => {
      disconnectMongo();
      throw e;
    });
}

const closeNodeServer = () =>
  new Promise((resolve, reject) => {
    console.log('Closing server');
    server.close(err => (err ? reject(err) : resolve()));
  });

const closeServer = () => disconnectMongo().then(closeNodeServer);

if (require.main === module) {
  runServer().catch(err => console.error(err));
}

module.exports = {
  runServer,
  closeServer,
};



