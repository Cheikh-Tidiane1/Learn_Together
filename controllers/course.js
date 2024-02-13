const Course = require("../models/Course");

exports.createCourse = (req, res, next) => {
  delete req.body._id;
  const course = new Course({
    ...req.body,
  });
  course
    .save()
    .then(() => res.status(201).json({ message: "Cours crée" }))
    .catch((error) => res.status(400).json({ error }));
};

exports.getOneCourse = (req, res, next) => {
  Course.findOne({ _id: req.params.id })
    .then((course) => res.status(200).json(course))
    .catch((error) => res.status(404).json({ error }));
};

exports.getAllCourse = (req, res, next) => {
  Course.find()
    .then((course) => res.status(200).json(course))
    .catch((error) => res.status(400).json({ error }));
};

exports.modifyCourse = (req, res, next) => {
  Course.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
    .then(() => res.status(200).json({ message: "Cours modifié !" }))
    .catch((error) => res.status(400).json({ error }));
};

exports.deleteCourse = (req, res, next) => {
  Course.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: "Cours supprimé" }))
    .catch((error) => res.status(400).json({ error }));
};
