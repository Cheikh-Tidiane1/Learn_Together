const QuestionType = require("../models/QuestionType");

exports.createQuestionType = (req, res, next) => {
  delete req.body._id;
  const questionType = new QuestionType({
    ...req.body,
  });

  questionType
    .save()
    .then(() => res.status(201).json({ message: "Question " }))
    .catch((error) => res.status(500).json({ error }));
};

exports.deleteQuestionType = (req, res, next) => {
  QuestionType.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: "Question supprimé" }))
    .catch((error) => res.status(400).json({ error }));
};

exports.getAllQuestionType = (req, res, next) => {
  QuestionType.find()
    .then((QuestionType) => res.status(200).json(QuestionType))
    .catch((error) => res.status(400).json({ error }));
};

exports.getOneQuestionType = (req, res, next) => {
  QuestionType.findOne({ _id: req.params.id })
    .then((QuestionType) => res.status(200).json(QuestionType))
    .catch((error) => res.status(400).json({ error }));
};

exports.modifyQuestionType = (req, res, next) => {
  QuestionType.updateOne(
    { _id: req.params.id },
    { ...req.body, _id: req.params.id }
  )
    .then(() => res.status(200).json({ message: "Question modifié !" }))
    .catch((error) => res.status(400).json({ error }));
};
