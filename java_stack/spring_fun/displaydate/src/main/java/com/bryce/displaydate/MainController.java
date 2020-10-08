package com.bryce.displaydate;

import java.util.Date;
import org.springframework.ui.Model;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/")
public class MainController {
	@RequestMapping("/")
	public String index() {
		return "index.jsp";
	}
	
	@RequestMapping("/date")
	public String displayDate(Model model) {
		model.addAttribute("current", new Date());
		return "displaydate.jsp";
	}
	
	@RequestMapping("/time")
	public String displayTime(Model model) {
		model.addAttribute("current", new Date());
		return "displaytime.jsp";
	}
}
