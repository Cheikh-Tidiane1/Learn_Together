const express = require("express");
const router = express.Router();
const questionCtrl = require("../controllers/questionController");
const auth = require("../middleware/auth");

router.post("/", auth, questionCtrl.createQuestion);
router.get("/", auth, questionCtrl.getAllQuestion);
router.get("/:id", auth, questionCtrl.getOneQuestion);
router.put("/:id", auth, questionCtrl.modifyQuestion);
router.delete("/:id", auth, questionCtrl.deleteQuestion);

module.exports = router;
