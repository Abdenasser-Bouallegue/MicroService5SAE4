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

    @GetMapping("/getLesson/{id}")
    public Lesson getLessonById(@PathVariable Long id) {
        return lessonService.getLessonById(id);
    }

    @PostMapping("/createLesson")
    public Lesson createLesson(@RequestBody Lesson lesson) {
        return lessonService.createLesson(lesson);
    }

    @DeleteMapping("deleteLesson/{id}")
    public void deleteLessonById(@PathVariable Long id) {
        lessonService.deleteLessonById(id);
    }




}
