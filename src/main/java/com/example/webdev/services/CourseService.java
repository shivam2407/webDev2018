package com.example.webdev.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.webdev.modals.Course;
import com.example.webdev.repositories.CourseRepository;

@RestController
@CrossOrigin(origins = "*",maxAge = 3600)
public class CourseService {
	
	@Autowired
	CourseRepository courseRepository;

	@GetMapping("/api/course")
	public Iterable<Course> findAllCourses() {
		return courseRepository.findAll(); 
	}

}
