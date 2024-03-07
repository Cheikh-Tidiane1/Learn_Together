const Answer = require("../models/Answer");

exports.createAnswer = (req, res, next) => {
  delete req.body._id;
  const answer = new Answer({
    ...req.body,
  });

  answer
    .save()
    .then(() => res.status(201).json({ message: "Réponse Ok " }))
    .catch((error) => res.status(500).json({ error }));
};
