const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const coursCtrl = require("../controllers/course");

router.post("/", auth, coursCtrl.createCourse);
router.get("/:id", auth, coursCtrl.getOneCourse);
router.get("/", auth, coursCtrl.getAllCourse);
router.delete("/:id", auth, coursCtrl.deleteCourse);
router.put("/:id", auth, coursCtrl.modifyCourse);

module.exports = router;
