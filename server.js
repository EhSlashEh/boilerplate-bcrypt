'use strict';
const express     = require('express');
const bodyParser  = require('body-parser');
const fccTesting  = require('./freeCodeCamp/fcctesting.js');
const bcrypt      = require('bcrypt'); // Require bcrypt
const app         = express();

fccTesting(app);

const saltRounds = 12;
const myPlaintextPassword = 'sUperpassw0rd!';
const someOtherPlaintextPassword = 'pass123';


//START_ASYNC -do not remove notes, place code between correct pair of notes.

bcrypt.hash(myPlaintextPassword, saltRounds, (err, hash) => {
    if (err) {
      console.error(err);
    } else {
      // Store hash in your db
      console.log(`Hashed password: ${hash}`);
  
      // Compare the plaintext password with the hashed password
      bcrypt.compare(myPlaintextPassword, hash, (err, res) => {
        if (err) {
          console.error(err);
        } else {
          console.log(`Password match: ${res}`); // res == true or false
        }
      });
    }
  });
  
  bcrypt.hash('passw0rd!', 13, (err, hash) => {
    if (err) {
      console.error(err);
    } else {
      console.log(`Hashed 'passw0rd!': ${hash}`);
      bcrypt.compare('passw0rd!', hash, (err, res) => {
        if (err) {
          console.error(err);
        } else {
          console.log(res); // true
        }
      });
    }
  });

//END_ASYNC

//START_SYNC

//END_SYNC





























const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Listening on port:", PORT)
});
