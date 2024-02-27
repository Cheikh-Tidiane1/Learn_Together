const QuestionType = require("../models/QuestionType");

exports.createQuestionType = (req, res, next) => {
  delete req.body._id;
  const questionType = new QuestionType({
    ...req.body,
  });

  questionType
    .save()
    .then(() => res.status(201).json({ message: "Question" }))
    .catch((error) => res.status(500).json({ error }));
};
