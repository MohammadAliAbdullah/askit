require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 7000;

// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// database connection 
const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/islamiFlow';
mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // useFindAndModify: false
})
  .then(() => { console.log('connection successfull') })
  .catch(() => { console.log('connection Failed') })

// listen port 
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
