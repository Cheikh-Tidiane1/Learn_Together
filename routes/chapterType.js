const express = require("express");
const router = express.Router();
const ChapterTCtrl = require("../controllers/chapterType");

router.post("/", ChapterTCtrl.createChapterType);
router.get("/", ChapterTCtrl.getAllChapterType);
router.get("/:id", ChapterTCtrl.getOneChapterType);
router.put("/:id", ChapterTCtrl.modifyChapterType);
router.delete("/:id", ChapterTCtrl.deleteChapterType);

module.exports = router;