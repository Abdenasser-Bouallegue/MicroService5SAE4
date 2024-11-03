package io.course.service;

import io.course.entity.Course;

import java.util.List;

public interface ICourseService {
    List<Course> getAllCourses();
    Course getCourseById(String courseId);
    Course addCourse(Course course);
    int deleteCourse(String courseId);


}
