<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ page isErrorPage="true" %>   
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>

<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Add Song</title>
</head>
<body>
	<div>
		<a href="/dashboard">Dashboard</a>
		
		<form:form action="/process" method="post" modelAttribute="song">
		
		    <p>
		        <form:label path="title">Title: </form:label>
		        <form:errors path="title"/>
		        <form:input path="title"/>
		    </p>
		    <p>
		        <form:label path="artist">Artist: </form:label>
		        <form:errors path="artist"/>
		        <form:input path="artist"/>
		    </p>
		    <p>
		        <form:label path="rating">Rating: </form:label>
		        <form:errors path="rating"/>
		        <form:select path="rating">
		        	<form:option value="1">1</form:option>
		        	<form:option value="2">2</form:option>
		        	<form:option value="3">3</form:option>
		        	<form:option value="4">4</form:option>
		        	<form:option value="5">5</form:option>
		        	<form:option value="6">6</form:option>
		        	<form:option value="7">7</form:option>
		        	<form:option value="8">8</form:option>
		        	<form:option value="9">9</form:option>
		        	<form:option value="10">10</form:option>
		        </form:select>
		    </p>
	   
		    <input type="submit" value="Add Song"/>
		    
		</form:form>
	</div>
</body>
</html>