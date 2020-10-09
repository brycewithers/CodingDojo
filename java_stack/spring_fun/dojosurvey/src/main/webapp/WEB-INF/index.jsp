<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>

<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Dojo Survey Index</title>
</head>
<body>
	<form action="" method="POST">
    	<label>Your Name: <input type="text" name="name"></label><br>
    	<label>Dojo Location:</label><select name="dojo">
    	<option>Seattle</option>
    	<option>San Jose</option>
    	<option>Boise</option>
    	<option>Burbank</option>
    	<option>Chicago</option>
    	<option>Arlington</option>
    	</select><br>
    	<label>Favorite Language:</label><select name="lang">
    	<option>Javascript</option>
    	<option>Python</option>
    	<option>Java</option>
    	<option>C#</option>
    	</select><br>
    	<label>Comment (optional):</label><br>
		<textarea name="comment"></textarea><br>
		
		<input type="submit" value="Submit">
	</form>
</body>
</html>