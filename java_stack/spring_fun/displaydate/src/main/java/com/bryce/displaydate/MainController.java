package com.bryce.displaydate;

import java.util.Date;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/")
public class MainController {
	@RequestMapping("/")
	public String index() {
		return "index.jsp";
	}
	
	@RequestMapping("/date")
	public String date(Model model) {
		Date curDate = new Date();
		String dateText = String.format("%tA, the %<te of %<tB, %<tY", curDate);
		model.addAttribute("curDate", dateText);
		return "date.jsp";
	}
	
	@RequestMapping("/time")
    public String time(Model model) {
        Date curDate = new Date();
        String curTime = String.format("%tI:%<tM %<Tp", curDate);
        model.addAttribute("curTime", curTime);
        return "time.jsp";
    }
}
