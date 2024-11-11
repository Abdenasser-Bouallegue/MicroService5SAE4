package io.course.implementation;

import io.course.repository.CourseRepository;
import io.course.entity.Course;
import io.course.service.ICourseService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CourseService implements ICourseService {

    private final CourseRepository courseRepository;


    public CourseService(

            CourseRepository courseRepository

    ) {

        this.courseRepository = courseRepository;

    }

    @Override
    public List<Course> getAllCourses() {
        return this.courseRepository.findAll();
    }



    @Override
    public Course getCourseById(String courseId) {
        return courseRepository.findById(courseId).orElseThrow(NullPointerException::new);
    }

    @Override
    public Course addCourse(Course course) {

        return courseRepository.save(course);
    }


    public Course updateCourse(Course course) {
        if (courseRepository.existsById(course.getId())) {
            return courseRepository.save(course);  // Sauvegarder le cours mis à jour
        } else {
            throw new IllegalArgumentException("Course not found");
        }
    }



    @Override
    public int deleteCourse(String courseId) {
        Course course = courseRepository.findById(courseId).orElse(null);
        if (course != null) {
            courseRepository.delete(course);
            return 1;
        }
        return 0;
    }


}