const express = require("express");
const router = express.Router();
const questionTypeCtrl = require("../controllers/QuestionType");
const auth = require("../middleware/auth");

router.post("/", auth, questionTypeCtrl.createQuestionType);
router.get("/", auth, questionTypeCtrl.getAllQuestionType);
router.get("/:id", auth, questionTypeCtrl.getOneQuestionType);
router.put("/:id", auth, questionTypeCtrl.modifyQuestionType);
router.delete("/:id", auth, questionTypeCtrl.deleteQuestionType);


module.exports = router ;