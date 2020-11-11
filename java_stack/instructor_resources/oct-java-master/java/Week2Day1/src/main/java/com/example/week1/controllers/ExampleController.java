package com.example.week1.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class ExampleController {

	@GetMapping("/")
	public String show() {
		return "Hello world!";
	}
	
	
	@RequestMapping("/helloworld")
	public String example() {
		return "Example 2";
	}
	
	
}
