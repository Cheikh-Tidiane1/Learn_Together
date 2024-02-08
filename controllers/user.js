const bcrypt = require('bcrypt');
const User = require('../models/User');

exports.userSignUp = (req, res, next) => {
  bcrypt
    .hash(req.body.password, 10)
    .then(hash => {
      const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hash,  
        date_creation: new Date()
      });
      user.save()
        .then(() => res.status(201).json({ message: "Utilisateur crée" }))
        .catch((error) => res.status(400).json({ error }));
    })
    .catch((error) => res.status(500).json({ error }));
};
exports.userLogin = (req, res, next) => {};
