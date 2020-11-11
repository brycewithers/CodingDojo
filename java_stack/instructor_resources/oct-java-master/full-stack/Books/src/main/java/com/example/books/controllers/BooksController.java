package com.example.books.controllers;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.example.books.models.Book;
import com.example.books.services.BookService;

@Controller
public class BooksController {
	
	@Autowired
	private BookService bookService;
	
	@GetMapping("/")
	public String index(@ModelAttribute("book") Book book) {
		return "index.jsp";
	}
	
	@PostMapping("/books")
	public String create(@Valid @ModelAttribute("book") Book book, BindingResult result) {
		if(result.hasErrors()) {
			System.out.println("We got errors!");
			return "index.jsp";
		}
		
		bookService.createBook(book);
		return "redirect:/books";
	}
	
	@GetMapping("/books")
	public String showAll(Model model) {
		model.addAttribute("allBooks", bookService.allBooks());
		return "books.jsp";
	}
	
	// edit
	
	// delete
	
	// show by id
	
	// CRUD (create, read, update, delete)
	
//     other methods removed for brevity
//    @RequestMapping("/books/{id}/edit")
//    public String edit(@PathVariable("id") Long id, Model model) {
//        Book book = bookService.findBook(id);
//        model.addAttribute("book", book);
//        return "/books/edit.jsp";
//    }
//    
//    @RequestMapping(value="/books/{id}", method=RequestMethod.PUT)
//    public String update(@Valid @ModelAttribute("book") Book book, BindingResult result) {
//        if (result.hasErrors()) {
//            return "/books/edit.jsp";
//        } else {
//            bookService.updateBook(book);
//            return "redirect:/books";
//        }
//    }
}