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
	<h2>Submitted Info</h2>
	<p>Name: <c:out value="${name}"/></p>
	<p>Dojo Location: <c:out value="${dojo}"/></p>
	<p>Favorite Language: <c:out value="${lang}"/></p>
	<p>Comment: <c:out value="${comment}"/></p>
	
	<a href="/">Go Back</a>
</body>
</html>