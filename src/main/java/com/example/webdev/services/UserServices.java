package com.example.webdev.services;

import java.util.List;
import java.util.Optional;

import javax.servlet.http.HttpSession;

import org.hibernate.annotations.FetchProfile;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.webdev.repositories.UserRepository;
import com.example.webdev.modals.User;

@RestController
public class UserServices {
	
	@Autowired
	UserRepository userRepository;
	
	@GetMapping("/api/user")
	public List<User> findAllUser(){
		return (List<User>)userRepository.findAll();
	}
	
	@PutMapping("api/user")
	public boolean updateUser(@RequestBody User user, HttpSession session) {
		Optional<User> data = userRepository.findById(user.getId());
		if(data.isPresent()) {
			User oldUser = data.get();
			oldUser.setPassword(user.getPassword());
			oldUser.setFirstName(user.getFirstName());
			oldUser.setLastName(user.getLastName());
			oldUser.setEmail(user.getEmail());
			oldUser.setDateOfBirth(user.getDateOfBirth());
			oldUser.setPhone(user.getPhone());
			userRepository.save(oldUser);
			return true;
		}
		return false;
		
	}
	
	@PostMapping("/api/register")
	public User register(@RequestBody User user, HttpSession session) { 
			User newUser = userRepository.save(user);
			session.setAttribute("user", user);
			return newUser;
	}


	@PostMapping("/api/login")
	public List<User> login(@RequestBody User user, HttpSession session) {	
		List<User> userlist = (List<User>) userRepository.findUserByCredentials(user.getUsername(), user.getPassword());
		session.setAttribute("user", userlist.get(0));
		return userlist;
	}
	
	
	@PostMapping("/api/user")
	public User createUser(@RequestBody User user) {
		return userRepository.save(user);
	}
	
	
	@DeleteMapping("/api/user/{userId}")
	public void deleteUser(@PathVariable("userId") int id) {
		userRepository.deleteById(id);
	}
	
	@GetMapping("/api/user/{userId}")
	public User findUserById(@PathVariable("userId") int id) {
		Optional<User> data = userRepository.findById(id);
		if(data.isPresent()) {
			return data.get();
		}
		return null;
	}
	

	@PostMapping("/api/logout")
	public User logout(HttpSession session) {
		return null;
	}

	
}
