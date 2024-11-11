package io.course.controller;

import io.course.entity.Course;
import io.course.implementation.CourseService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/courses") // Définit le préfixe de chemin principal
public class CourseController {
    private final CourseService courseService;

    public CourseController(CourseService courseService) {
        this.courseService = courseService;
    }

    @GetMapping("/getall")
    public Iterable<Course> getCourse() {
        return courseService.getAllCourses();
    }

    @GetMapping("/{id}")
    public Course getByID(@PathVariable String id) {
        return courseService.getCourseById(id);
    }

    @PutMapping("/update/{id}")
    public Course updateCourse(@PathVariable("id") String id, @RequestBody Course course) {
        // Associez l'ID du cours à celui passé dans l'URL
        course.setId(id);
        return courseService.updateCourse(course);
    }


    @PostMapping("/add")
    public Course add(@RequestBody Course c) {
        return courseService.addCourse(c);
    }

    @DeleteMapping("/{courseId}")
    public void remove(@PathVariable("courseId") String id) {
        courseService.deleteCourse(id);
    }
}