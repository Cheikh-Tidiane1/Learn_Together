const Question = require("../models/Question");

exports.createQuestion = (req, res, next) => {
  delete req.body._id;
  const question = new Question({
    ...req.body,
  });

  question
    .save()
    .then(() => res.status(201).json({ message: "Question crée" }))
    .catch((error) => res.status(500).json({ error }));
};

exports.deleteQuestion = (req, res, next) => {
  Question.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: "Question supprimé" }))
    .catch((error) => res.status(400).json({ error }));
};

exports.getAllQuestion = (req, res, next) => {
  Question.find()
    .then((Question) => res.status(200).json(Question))
    .catch((error) => res.status(400).json({ error }));
};

exports.getOneQuestion = (req, res, next) => {
  Question.findOne({ _id: req.params.id })
    .then((Question) => res.status(200).json(Question))
    .catch((error) => res.status(400).json({ error }));
};

exports.modifyQuestion = (req, res, next) => {
  Question.updateOne(
    { _id: req.params.id },
    { ...req.body, _id: req.params.id }
  )
    .then(() => res.status(200).json({ message: "Question modifié !" }))
    .catch((error) => res.status(400).json({ error }));
};
