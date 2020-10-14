<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Lookify Dashboard</title>
</head>
<body>
	<div>
		<div>
			<a href="/songs/new">Add New</a>
			<a href="/search/top10">Top Songs</a>
			<form action="/search" method="post">
				<input class="form" type="submit" value="Search Artists">
				<input class="form" type="search" name="artist" placeholder="Artist">
			</form>
		</div>
		<table>
		    <thead>
		        <tr>
		            <th scope="col">Title</th>
		            <th scope="col">Rating</th>
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
	</div>
</body>
</html>