const express = require('express');
const app = express();
app.use(express.json());
app.post('/users', (req, res) => {
  const newUser = req.body;
  // Missing error handling if req.body is empty or invalid
  db.createUser(newUser, (err, result) => {
    if (err) {
      // Missing proper error handling and response
      console.error(err);
      res.status(500).send('Internal Server Error');
    } else {
      res.status(201).json(result);
    }
  });
});