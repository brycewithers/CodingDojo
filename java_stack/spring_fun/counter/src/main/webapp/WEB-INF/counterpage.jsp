<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>

<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Current visit count</title>
<link rel="stylesheet" type="text/css" href="css/counter.css">
</head>
<body>
	<h2>You have visited <a href="http://localhost:8080">http://localhost:8080 </a><c:out value="${count}"></c:out> times.</h2>
	<h3><a href="http://localhost:8080">Take another visit?</a></h3>
</body>
</html>