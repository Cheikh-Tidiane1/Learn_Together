const express = require("express");
const router = express.Router();
const chapterCtrl = require("../controllers/chapter");
const multer = require("../middleware/multer-config");
const auth = require("../middleware/auth");

router.post("/uploadVideo", auth, multer, chapterCtrl.createChapter);
router.delete("/:id",auth, chapterCtrl.deleteChapter);
router.put("/:id",auth, chapterCtrl.modifyChapter);
router.get("/",auth, chapterCtrl.getAllChapter);
router.get("/:id",auth, chapterCtrl.getOneChapter);

module.exports = router;
