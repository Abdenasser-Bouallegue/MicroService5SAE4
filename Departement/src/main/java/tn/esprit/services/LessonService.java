package tn.esprit.services;

import tn.esprit.entities.Lesson;

import java.util.List;

public interface LessonService {



    List<Lesson> getAllLessons();
    Lesson getLesson(Long idLesson);
    Lesson createLesson(Lesson lesson);
    void deleteLesson(Long idLesson);
   Lesson updateLesson(Long idLesson, Lesson lesson);

}
