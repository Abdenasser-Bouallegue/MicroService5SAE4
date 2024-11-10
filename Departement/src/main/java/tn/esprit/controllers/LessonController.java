package tn.esprit.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import tn.esprit.entities.Lesson;
import tn.esprit.services.LessonService;

import java.util.List;


@RestController
@RequestMapping("/lessons")
public class LessonController {


    @Autowired
    private LessonService lessonService;

    @GetMapping("/getAllLessons")
    public List<Lesson> getAllLessons() {
        return lessonService.getAllLessons();
    }

    @GetMapping("getLesson/{idLesson}")
    public Lesson getLessonById(@PathVariable Long idLesson) {
        return lessonService.getLesson(idLesson);
    }

    @PostMapping("/createLesson")
    public Lesson createLesson(@RequestBody Lesson lesson) {
        return lessonService.createLesson(lesson);
    }

    @DeleteMapping("deleteLesson/{idLesson}")
    public void deleteLessonById(@PathVariable Long idLesson) {
        lessonService.deleteLesson(idLesson);
    }

    @PutMapping("updateLesson/{idLesson}")
    public Lesson UpdatSiteRadio(@PathVariable Long idLesson, @RequestBody Lesson lesson) {
        return lessonService.updateLesson(idLesson, lesson);
    }
    @GetMapping("/search")
    public List<Lesson> searchLesson(@RequestParam("text") String text) {
        return lessonService.searchLesson(text);
    }
}
