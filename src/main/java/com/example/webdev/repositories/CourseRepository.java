package com.example.webdev.repositories;

import org.springframework.data.repository.CrudRepository;
import com.example.webdev.modals.Course;


public interface CourseRepository extends CrudRepository<Course,Integer>{

}
