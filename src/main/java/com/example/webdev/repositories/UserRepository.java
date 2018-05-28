package com.example.webdev.repositories;


import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.example.webdev.modals.User;

public interface UserRepository 
	extends CrudRepository<User, Integer>{
	@Query("Select u from User u where "
			+ "u.username=:username AND "
			+ "u.password=:password")
	Iterable<User> findUserByCredentials(
			@Param("username") String username,
			@Param("password") String password);
}
