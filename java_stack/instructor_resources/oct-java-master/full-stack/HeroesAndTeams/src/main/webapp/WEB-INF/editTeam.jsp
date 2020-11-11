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
	<form:form action="/edit-team/${team.id}" method="POST" modelAttribute="team">
		<div>
			<form:errors path="team.*"></form:errors>
		</div>
		<div>
			<form:label path="name"></form:label>
			<form:input path="name"></form:input>
		</div>
		<div>
			<button type="submit">Edit team!</button>
		</div>
	
	</form:form>
</body>
</html>