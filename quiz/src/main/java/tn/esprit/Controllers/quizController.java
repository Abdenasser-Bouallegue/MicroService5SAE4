package tn.esprit.Controllers;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;
import tn.esprit.entities.Quiz;
import tn.esprit.services.QuizService;

import java.util.List;


@RestController
@RequestMapping("/quiz")
@AllArgsConstructor
@Slf4j
public class quizController {


    private QuizService quizService;
//http://localhost:8091/quiz/all
    @GetMapping("/all")
    public List<Quiz> getAllQuizzes() {
        return quizService.getAllQuizzes();
    }
//http://localhost:8091/quiz/add
    @GetMapping("/get/{quizId}")
    public Quiz getQuizById(@PathVariable Long quizId) {
        return this.quizService.getQuizById(quizId);

    }

    @PostMapping("/add")
    public Quiz createQuiz(@RequestBody Quiz quiz) {
        return this.quizService.saveQuiz(quiz);
    }

    // Endpoint to update an existing quiz
    @PutMapping("/update/{quizId}")
    public Quiz updateQuiz(@PathVariable Long quizId, @RequestBody Quiz updatedQuiz) {
           return quizService.updateQuiz(updatedQuiz);
    }
    @DeleteMapping("/delete/{quizId}")
    public void deleteQuiz(@PathVariable Long quizId) {
        this.quizService.deleteQuiz(quizId);

    }





}
