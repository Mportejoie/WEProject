const jwt = require('jsonwebtoken');
const secretKey = 'e2c2909ad127ca0adb977cfd7760dff4983d33bc2f341de2742ebc16b9e40680fd857cc929e563a9127706e633ae52cd0e9053c367cc19360f37b9f887da9099';

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Access denied' });
  }

  jwt.verify(token, secretKey, (err, user) => {
    if (err) {
      return res.status(403).json({ error: 'Invalid token' });
    }

    req.user = user;
    next();
  });
}

module.exports = authenticateToken;
