package com.example.brendan.controllers;

import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class MainController {
	
	@RequestMapping("/")
	public String index() {
		return "index.jsp"; // loading jsp
	}
	
	@RequestMapping(path="/login", method=RequestMethod.POST)
	public String login(@RequestParam(value="username") String username,
						@RequestParam(value="password") String password,
						HttpSession session) { // accepting form data
		System.out.println(username);
		System.out.println(password);
		session.setAttribute("username", username);
		session.setAttribute("password", password); // passing data into session
		return "redirect:/result";
	}
	
	@RequestMapping("/result")
	public String results(HttpSession session) {
		System.out.println(session.getAttribute("password")); // reading data from session
		
		if(session.getAttribute("username") == null) { // boolean logic in controllers
			return "redirect:/"; // redirects
		}
		return "results.jsp"; // renders
	}

	@RequestMapping("/params/{str}") // url params
	public String params(@PathVariable String str, Model model) { // Model model for passing data to the jsp
		System.out.println(str);
		model.addAttribute("input", str.toString());
		model.addAttribute("example", "<h1>Hello!</h1>"); // escaping html characters
		return "params.jsp";
	}
	
	
}
