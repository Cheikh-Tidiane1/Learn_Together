const express = require("express");
const router = express.Router();
const chapterCtrl = require("../controllers/chapter");

router.post("/", chapterCtrl.createChapter);
router.delete("/:id", chapterCtrl.deleteChapter);
router.put("/:id", chapterCtrl.modifyChapter);
router.get("/", chapterCtrl.getAllChapter);
router.get("/:id", chapterCtrl.getOneChapter);

module.exports = router;
