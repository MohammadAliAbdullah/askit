const express = require('express');
const bodyParser = require('body-parser')
const app = express();
// Make sure you place body-parser before your CRUD handlers!
app.use(bodyParser.urlencoded({ extended: true }))
import { MongoClient } from 'mongodb';
const MongoClient = require('mongodb').MongoClient
// Enable command monitoring for debugging
const client = new MongoClient('mongodb://localhost:27017', { monitorCommands: true });

client.on('commandStarted', started => console.log(started));
client.db().collection('pets');
await client.insertOne({ name: 'spot', kind: 'dog' });

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
  // Note: __dirname is the current directory you're in. Try logging it and see what you get!
  // Mine was '/Users/zellwk/Projects/demo-repos/crud-express-mongo' for this app.
})

app.post('/quotes', (req, res) => {
  console.log(req.body)
})

app.listen(4000, function () {
  console.log('listening on 4000')
})



