const express =  require("express");
const router = express.Router();
const quizController =  require("../controllers/quizController")

router.post("/", quizController.createQuiz);
router.get("/", quizController.getAllQuiz);
router.get("/:id", quizController.getOneQuiz);
router.put("/:id", quizController.modifyQuiz);
router.delete("/:id", quizController.deleteQuiz);

