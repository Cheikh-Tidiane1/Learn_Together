const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, "WAC_TOKEN");
    req.auth = {
      userId: decodedToken.userId,
    };
    next();
  } catch (error) {
    res.status(401).json({ error });
  }
};
