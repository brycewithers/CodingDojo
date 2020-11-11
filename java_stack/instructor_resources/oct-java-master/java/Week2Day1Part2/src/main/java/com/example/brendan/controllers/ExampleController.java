package com.example.brendan.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/home")
public class ExampleController {
	
	@RequestMapping("/example")
	public String home() {
		return "Welcome home, hello world!";
	}

}
