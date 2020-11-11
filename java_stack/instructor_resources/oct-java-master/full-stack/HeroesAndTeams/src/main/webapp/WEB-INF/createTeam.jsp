<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>

	<form:form action="/create-team" method="POST" modelAttribute="team">
		<div>
			<p>Name:</p>
			<form:label path="name"></form:label>
			<form:errors path="name"></form:errors>
			<form:input path="name"></form:input>
		</div>
		<p>
			<button type="submit">Create a team!</button>
		</p>
	
	</form:form>
	
	<c:forEach items="${teams}" var="t">
		<p><c:out value="${t.name }"></c:out></p>
		<p><a href="/edit-team/${t.id}">Edit!</a></p>
		<form action="/delete-team/${t.id}" method="POST">
			<button type="submit">Delete this team!</button>
		</form>
	</c:forEach>
</body>
</html>