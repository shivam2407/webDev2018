package com.example.webdev.repositories;

import org.springframework.data.repository.CrudRepository;

import com.example.webdev.modals.Hello;

public interface HelloRepository extends CrudRepository<Hello, Integer>{

	
}
