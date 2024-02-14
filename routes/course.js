const express = require("express");
const router = express.Router();
const coursCtrl = require("../controllers/course");

router.post("/", coursCtrl.createCourse);
router.get("/:id", coursCtrl.getOneCourse);
router.get("/", coursCtrl.getAllCourse);
router.delete("/:id", coursCtrl.deleteCourse);
router.put("/:id", coursCtrl.modifyCourse);

module.exports = router;
