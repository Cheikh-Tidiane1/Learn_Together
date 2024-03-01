const express =  require("express");
const router = express.Router();
const quizController =  require("../controllers/quizController")
const auth = require("../middleware/auth")
router.post("/",auth, quizController.createQuiz);
router.get("/",auth, quizController.getAllQuiz);
router.get("/:id",auth, quizController.getOneQuiz);
router.put("/:id",auth, quizController.modifyQuiz);
router.delete("/:id",auth, quizController.deleteQuiz);

module.exports = router ;

