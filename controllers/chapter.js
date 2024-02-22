const Chapter = require("../models/Chapter");

exports.createChapter = (req, res, next) => {
  
  const chapterObject = JSON.parse(req.body.chapter);
  delete chapterObject._id;
  delete chapterObject._userId;

  const chapter = new Chapter({
    ...chapterObject,
    userId: req.auth.userId,
    videoUrl: `${req.protocol}://${req.get("host")}/public/videos/${
      req.file.filename
    }`,
  });

  chapter
    .save()
    .then(() => {
      res.status(201).json({ message: "Chapitre enregistré !" });
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
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
  Chapter.findOne({ _id: req.params.id })
    .then((chapter) => res.status(200).json({ chapter }))
    .catch((error) => res.status(400).json({ error }));
};

exports.modifyChapter = (req, res, next) => {
  Chapter.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
    .then(() => res.status(200).json({ message: "Chapitre modifié" }))
    .catch((error) => res.status(400).json({ error }));
};
