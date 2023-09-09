const jwt = require('jsonwebtoken');

// Generating an access token
const generateAccessToken=(user) =>{
  return jwt.sign(user, 'my_signature', { expiresIn: '15m' });
}

// Verify the access token
const authenticateToken=(req, res, next)=> {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (token == null) return res.sendStatus(401);

  jwt.verify(token, 'my_signature', (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

module.exports = { generateAccessToken, authenticateToken };
