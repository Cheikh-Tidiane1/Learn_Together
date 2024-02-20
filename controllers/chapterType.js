const ChapterType = require("../models/ChapterType");

exports.createChapterType = (req, res, next) => {
  delete req.body._id;

  const chapterType = new ChapterType({
    ...req.body,
  });
  chapterType
    .save()
    .then(() => res.status(201).json({ message: "Chapitre cré" }))
    .catch((error) => res.status(500).json({ error }));
};

exports.deleteChapterType = (req, res, next) => {
  ChapterType.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: "Chapitre supprimé" }))
    .catch((error) => res.status(400).json({ error }));
};

exports.getAllChapterType = (req, res, next) => {
  ChapterType.find()
    .then((chapterType) => res.status(200).json(chapterType))
    .catch((error) => res.status(400).json({ error }));
};

exports.getOneChapterType = (req, res, next) => {
  ChapterType.findOne({ _id: req.params.id })
    .then((chapterType) => res.status(200).json(chapterType))
    .catch((error) => res.status(400).json({ error }));
};

exports.modifyChapterType = (req, res, next) => {
  ChapterType.updateOne(
    { _id: req.params.id },
    { ...req.body, _id: req.params.id }
  )
    .then(() => res.status(200).json({ message: "Chapitre modifié !" }))
    .catch((error) => res.status(400).json({ error }));
};
