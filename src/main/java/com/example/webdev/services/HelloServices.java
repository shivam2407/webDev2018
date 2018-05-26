package com.example.webdev.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.webdev.modals.Hello;
import com.example.webdev.repositories.HelloRepository;

@RestController
public class HelloServices {
	@Autowired
	HelloRepository repository;
	@GetMapping("/api/hello")
	public Iterable<Hello> findAllHellos(){
		return repository.findAll();
	}
}
