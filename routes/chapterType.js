const express = require("express");
const router = express.Router();
const ChapterTCtrl = require("../controllers/chapterType");
const auth = require("../middleware/auth");

router.post("/",auth, ChapterTCtrl.createChapterType);
router.get("/",auth, ChapterTCtrl.getAllChapterType);
router.get("/:id",auth, ChapterTCtrl.getOneChapterType);
router.put("/:id",auth, ChapterTCtrl.modifyChapterType);
router.delete("/:id",auth, ChapterTCtrl.deleteChapterType);

module.exports = router;