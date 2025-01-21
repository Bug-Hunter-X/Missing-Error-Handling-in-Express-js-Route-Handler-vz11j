const express = require('express');
const app = express();
app.use(express.json());
app.post('/users', (req, res) => {
  if (!req.body || Object.keys(req.body).length === 0) {
    return res.status(400).json({ error: 'Request body is empty' });
  }
  const newUser = req.body;
  db.createUser(newUser, (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Database error' });
    } else if (!result) {
        return res.status(400).json({ error: 'User creation failed' });
    } else {
      res.status(201).json(result);
    }
  });
});