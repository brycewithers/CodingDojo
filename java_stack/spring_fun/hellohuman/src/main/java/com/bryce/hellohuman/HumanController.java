package com.bryce.hellohuman;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HumanController {
	
	@RequestMapping("")
	public String index(@RequestParam(value="firstName", required=false) String firstName, @RequestParam(value="lastName", required=false) String lastName) {
		if (firstName == null) {
			firstName = "Human";
		} 
		if (lastName == null) {
			lastName = "";
		}
		return String.format("Hello %s %s! \n Welcome to SpringBoot!", firstName, lastName);
	}
}
