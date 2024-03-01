const Quiz = require("../models/Quiz")


exports.createQuiz = (req, res, next) => {
    delete req.body._id;
    const quiz = new Quiz({
      ...req.body,
    });
  
    quiz
      .save()
      .then(() => res.status(201).json({ message: "Question " }))
      .catch((error) => res.status(500).json({ error }));
  };
  
  exports.deleteQuiz = (req, res, next) => {
    Quiz.deleteOne({ _id: req.params.id })
      .then(() => res.status(200).json({ message: "Question supprimé" }))
      .catch((error) => res.status(400).json({ error }));
  };
  
  exports.getAllQuiz = (req, res, next) => {
    Quiz.find()
      .then((quiz) => res.status(200).json(quiz))
      .catch((error) => res.status(400).json({ error }));
  };
  
  exports.getOneQuiz = (req, res, next) => {
    Quiz.findOne({ _id: req.params.id })
      .then((quiz) => res.status(200).json(quiz))
      .catch((error) => res.status(400).json({ error }));
  };
  
  exports.modifyQuiz = (req, res, next) => {
    Quiz.updateOne(
      { _id: req.params.id },
      { ...req.body, _id: req.params.id }
    )
      .then(() => res.status(200).json({ message: "Question modifié !" }))
      .catch((error) => res.status(400).json({ error }));
  };
  