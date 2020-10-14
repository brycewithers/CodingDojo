package com.bryce.lookify.controllers;

import java.util.List;

import javax.validation.Valid;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import com.bryce.lookify.models.Song;
import com.bryce.lookify.services.SongService;

@Controller
public class SongController {
    private final SongService songService;
    
    public SongController(SongService songService) {
        this.songService = songService;
    }
    
    // this will send us to our initial landing page
    @RequestMapping("/") // glue this url pattern to the index method and render the index.jsp page
    public String index() {
    	return "lookify/index.jsp";
    }
    
    // this will send us to our main page that shows existing songs and allows us to navigate the app
	@RequestMapping("/dashboard") // glue this url pattern to the dashboard method
	public String dashboard(Model model) { // think about django --> we made a context variable to pass things into it for html purposes
		List<Song> songs = songService.allSongs(); // we are now creating a variable that we call our service to help out with
		model.addAttribute("songs", songs); // we are now populating the context variable 'model' with the info we collected/built in 'songs'
		return "lookify/dashboard.jsp"; // we now will have access to the 'songs' variable in this jsp file! 
	}
	
	@RequestMapping("/songs/{id}") // we are signaling that our url will pass some information --> '{id}'
	public String songs(@PathVariable("id") Long id, Model model) { // model will be declared and populated with a variable/value
		Song song = songService.findSong(id); // the variable name that we will grant our context access to will be song and use our service
		model.addAttribute("song", song); // the result of our service method 'findSong(id)' will be added to our model --> context
		return "lookify/showsong.jsp"; // back to the front end where we will have access to our context variable aka a specific song and its info
	}
	
	@RequestMapping("/songs/new") // glue this url pattern to a method
	public String addNew(@ModelAttribute("song") Song song) { // method 'addNew' uses a model attribute --> "song" Song song 
		return "lookify/newsong.jsp";
	}
	
	@RequestMapping(value="/process", method=RequestMethod.POST) // this is where we will process the form to actually create the new song
	public String process(@Valid @ModelAttribute("song") Song song, BindingResult result) { // same as above code block
	    if (result.hasErrors()) { // if the binded result has any errors --> invalid form field inputs - send the user back and show errors
	        return "lookify/newsong.jsp";
	    }
	    else { // otherwise the info supplied in the form is valid
	        songService.createSong(song); // reference our service file and the create method --> pass it our new song
	        return "redirect:/dashboard"; // redirect the user back to the main page where we show all existing songs
	    }
	}
	
	@PostMapping("/search")
	public String search(@RequestParam("artist") String artist) {
		return "redirect:/search/" + artist;
	}
	
	@RequestMapping("/search/{artist}")
	public String search(@PathVariable("artist") String artist, Model model) {
		List<Song> songs = songService.getSearchSongs(artist);
		model.addAttribute("artist", artist);
		model.addAttribute("songs", songs);
		return "lookify/search.jsp";
	}
	
	@RequestMapping("/search/top10")
	public String topTen(Model model) {
		List<Song> songs = songService.getTopTen();
		model.addAttribute("songs", songs);
		return "lookify/topten.jsp";
	}
	
	@RequestMapping("/delete/{id}")
	public String delete(@PathVariable("id") Long id) {
		songService.deleteSong(id);
		return "redirect:/dashboard";
	}
}