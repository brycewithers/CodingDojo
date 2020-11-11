package com.example.books.controllers;

import java.util.List;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.books.models.Book;
import com.example.books.services.BookService;

@RestController
public class MainController {
	
    private final BookService bookService;
    public MainController(BookService bookService){
        this.bookService = bookService;
    }
    
    @RequestMapping("/api/books")
    public List<Book> index(){
    	return bookService.allBooks();
    }
    
    @RequestMapping(value="/api/books", method=RequestMethod.POST)
    public Book update(@RequestParam(value="title") String title, 
    				   @RequestParam(value="description") String desc,
    				   @RequestParam(value="language") String lang,
    				   @RequestParam(value="pages") Integer numOfPages) {
    	Book newBook = new Book(title, desc, lang, numOfPages);
        return bookService.createBook(newBook);
    } 
}
