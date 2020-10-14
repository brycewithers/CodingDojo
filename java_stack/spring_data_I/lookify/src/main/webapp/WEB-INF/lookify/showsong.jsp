<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title><c:out value="${song.title}: Details"></c:out></title>
</head>
<body>
	<div>
		<a href="/dashboard">Dashboard</a>
		<p>Title: <c:out value="${song.title}"/></p>
		<p>Artist: <c:out value="${song.artist}"/></p>
		<p>Rating (1-10): <c:out value="${song.rating}"/></p>
		<a href="/delete/<c:out value="${song.id}"/>">Delete</a>
	</div>
</body>
</html>