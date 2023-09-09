const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { User } = require('./models/user'); 
const { authenticateToken, generateAccessToken } = require('./auth');

const app = express();



app.get('/posts', authenticateToken, (req, res) => {
});


const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
