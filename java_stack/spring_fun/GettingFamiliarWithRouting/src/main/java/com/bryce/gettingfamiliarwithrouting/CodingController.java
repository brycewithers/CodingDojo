package com.bryce.gettingfamiliarwithrouting;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/coding")
public class CodingController {
	
	@RequestMapping("")
	public String hello() {
		return "Hello Coding Dojo!";
	}
	
	@RequestMapping("/python")
	public String pd() {
		return "Python/Django was awesome!";
	}
	
	@RequestMapping("/java")
	public String java() {
		return "Java/Spring is better!";
	}
}
