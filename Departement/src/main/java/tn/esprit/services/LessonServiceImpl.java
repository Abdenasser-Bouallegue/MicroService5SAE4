package tn.esprit.services;

import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tn.esprit.Repositories.LessonRepository;
import tn.esprit.Repositories.RoomRepository;
import tn.esprit.Repositories.TimeslotRepository;
import tn.esprit.entities.Lesson;
import tn.esprit.entities.Room;
import tn.esprit.entities.Timeslot;

import java.util.List;
@Service
public class LessonServiceImpl implements LessonService {
    @Autowired
    private LessonRepository lessonRepository;
    @Autowired
    private TimeslotRepository timeslotRepository;
    @Autowired
    private RoomRepository roomRepository;

    @Override
    public List<Lesson> getAllLessons() {
        return lessonRepository.findAll();
    }

    @Override
    public Lesson getLesson(Long idLesson) {
        return lessonRepository.findById(idLesson)
                .orElseThrow(() -> new EntityNotFoundException("Lesson not found with id: " + idLesson));
    }

    @Override
    public Lesson createLesson(Lesson lesson) {
        return lessonRepository.save(lesson);
    }

    @Override
    public void deleteLesson(Long idLesson) {
        lessonRepository.deleteById(idLesson);
    }

    @Override
    public Lesson updateLesson(Long idLesson, Lesson lesson) {

        Lesson existingLesson = lessonRepository.findById(idLesson)
                .orElseThrow(() -> new EntityNotFoundException("Lesson not found with id: " + idLesson));
        existingLesson.setSubject(lesson.getSubject());
        existingLesson.setTeacher(lesson.getTeacher());
        existingLesson.setStudentGroup(lesson.getStudentGroup());


        if (lesson.getRoom() != null) {
            existingLesson.setRoom(lesson.getRoom());
        }


        if (lesson.getTimeslot() != null) {
            existingLesson.setTimeslot(lesson.getTimeslot());
        }

        return lessonRepository.save(existingLesson);
    }
}