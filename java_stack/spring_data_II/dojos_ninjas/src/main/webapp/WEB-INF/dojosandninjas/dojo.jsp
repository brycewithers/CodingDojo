<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>

<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Dojo Page</title>
</head>
<body>
	<div class="container">
		<h1><c:out value="${dojo.name}"></c:out> Location Ninjas</h1>
		
		<table>
        	<thead>
        		<tr>
        			<th scope="col">First Name</th>
       		 		<th scope="col">Last Name</th>
        			<th scope="col">Age</th>
        		</tr>
        	</thead>
        	<tbody>
      			<c:forEach items="${dojo.ninjas}" var="ninja">
        			<tr>
        				<td><c:out value="${ninja.firstName }"></c:out></td>
        				<td><c:out value="${ninja.lastName }"></c:out></td>
        				<td><c:out value="${ninja.age }"></c:out></td>
        			</tr>
        		</c:forEach>
        	</tbody>
        </table>
	</div>
</body>
</html>