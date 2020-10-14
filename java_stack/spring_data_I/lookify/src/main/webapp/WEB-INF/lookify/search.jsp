<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Search</title>
</head>
<body>
	<div>
		<p>Songs by artist: <c:out value="${artist}"></c:out></p>
		<form action="/search" method="post">
			<input type="search" name="artist" placeholder="Artist">
			<input type="submit" value="New Search">
		</form>
		<a href="/dashboard">Dashboard</a>
	</div>
	<table>
	    <thead>
	        <tr>
	            <th scope="col">Name</th>
	            <th scope="col">rating</th>
	            <th scope="col">actions</th>
	        </tr>
	    </thead>
	    <tbody>
	        <c:forEach items="${songs}" var="song">
	        <tr>
	            <td><a href="songs/<c:out value="${song.id}"/>"><c:out value="${song.title}"/></a></td>
	            <td><c:out value="${song.rating}"/></td>
	            <td><a href="/delete/<c:out value="${song.id}"/>">Delete</a></td>
	        </tr>
	        </c:forEach>
	    </tbody>
	</table>
</body>
</html>