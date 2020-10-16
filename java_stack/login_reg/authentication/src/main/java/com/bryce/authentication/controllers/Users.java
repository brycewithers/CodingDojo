package com.bryce.authentication.controllers;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import com.bryce.authentication.models.User;
import com.bryce.authentication.services.UserService;
import com.bryce.authentication.validator.UserValidator;

@Controller
public class Users {
	private final UserService userService;
    private final UserValidator userValidator;
    
    
    public UserController(UserService userService, UserValidator userValidator) {
        this.userService = userService;
        this.userValidator = userValidator;
    }
    
    @RequestMapping("/registration")
    public String registerForm(@ModelAttribute("user") User user) {
        return "registrationPage.jsp";
    }
    
    @RequestMapping("/login")
    public String login() {
        return "loginPage.jsp";
    }
    
    @RequestMapping(value="/registration", method=RequestMethod.POST)
    public String registerUser(@Valid @ModelAttribute("user") User user, BindingResult result, HttpSession session) {
        // if result has errors, return the registration page
    	userValidator.validate(user, result);
    	if(result.hasErrors()) {
    		return "registrationPage.jsp";
    	} else {
    		// else, save the user in the database, save the user id in session, and redirect them to the /home route
    		userService.registerUser(user);
    		session.setAttribute("userId", user.getId());
    		return "redirect:/home";
    	}
    }
    
    @RequestMapping(value="/login", method=RequestMethod.POST)
    public String loginUser(@RequestParam("email") String email, @RequestParam("password") String password, Model model, HttpSession session) {
    	// if the user is authenticated, save their user id in session
    	if (userService.authenticateUser(email, password)) {
    		session.setAttribute("userId", userService.findByEmail(email).getId());
    		return "redirect:/home";
    	}
        // else, add error messages and return the login page
    	model.addAttribute("error", "Email or password is incorrect");
    	return "loginPage.jsp";
    }
    
    @RequestMapping("/home")
    public String home(HttpSession session, Model model) {
        // get user from session, save them in the model and return the home page
    	User user = userService.findUserById((Long) session.getAttribute("userId"));
    	model.addAttribute("user", user);
    	return "homePage.jsp";
    }
    
    @RequestMapping("/logout")
    public String logout(HttpSession session) {
        // invalidate session
    	session.invalidate();
        // redirect to login page
    	return "redirect:/login";
    }
}
