package io.course.controller;

import io.course.entity.Course;
import io.course.implementation.CourseService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

@Slf4j
@RestController("/courses")
@CrossOrigin()
public class CourseController {
    private final CourseService courseService;

    public CourseController(CourseService courseService) {
        this.courseService = courseService;
    }

    @GetMapping("/courses/getall")
    public Iterable<Course> getCourse() {
        return courseService.getAllCourses();
    }



    @GetMapping("/{id}")
    public Course getByID(@PathVariable String id) {
        return courseService.getCourseById(id);
    }

    @PostMapping("/courses/add")
    public Course add(@RequestBody Course c) {
        return courseService.addCourse(c);

    }

    @DeleteMapping("/courses/{courseId}")
    public void remove(@PathVariable("courseId") String id) {
        courseService.deleteCourse(id);
    }
}
