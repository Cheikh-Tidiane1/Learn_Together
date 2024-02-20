const Chapter = require("../models/Chapter");

exports.createChapter = (req, res, next) => {
  delete req.body._id;

  const chapter = new Chapter({
    ...req.body,
  });
  chapter
    .save()
    .then(() => res.status(201).json({ message: "Chapitre enregistré" }))
    .catch((error) => res.status(500).json({ error }));
};

exports.deleteChapter = (req, res, next) => {
  Chapter.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: "Chapitre supprimé" }))
    .catch((error) => res.status(400).json({ error }));
};

exports.getAllChapter = (req, res, next) => {
  Chapter.find()
    .then((chapter) => res.status(200).json({ chapter }))
    .catch((error) => res.status(400).json({ error }));
};

exports.getOneChapter = (req, res, next) => {

    Chapter.findOne({_id: req.params.id})
    .then((chapter) => res.status(200).json({ chapter }))
    .catch((error) => res.status(400).json({ error }));
}

exports.modifyChapter = (req, res , next) => {
    Chapter.updateOne({_id: req.params.id},{...req.body, _id: req.params.id})
    .then(() => res.status(200).json({ message: "Chapitre modifié" }))
    .catch((error) => res.status(400).json({ error }));
}
