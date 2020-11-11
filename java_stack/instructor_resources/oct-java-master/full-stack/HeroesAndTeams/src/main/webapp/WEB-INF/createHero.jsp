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
	<form:form action="/create-hero" method="POST" modelAttribute="hero">
		<div>
			<p>Name:</p>
			<form:label path="name"></form:label>
			<form:errors path="name"></form:errors>
			<form:input path="name"></form:input>
		</div>
		<div>
			<p>Power:</p>
			<form:label path="power"></form:label>
			<form:errors path="power"></form:errors>
			<form:input path="power"></form:input>
		</div>
		<div>
			<p>Team:</p>
			<form:label path="team"></form:label>
			<form:errors path="team"></form:errors>
			<form:select path="team">
				<option value="" disabled selected>Select a team!</option>
				<c:forEach items="${teams}" var="team">
					<form:option value="${team.id}">
						<c:out value="${team.name}"></c:out>
					</form:option>
				</c:forEach>
			</form:select>
		</div>
		<div>
			<button type="submit">Create hero!</button>
		</div>
	
	
	</form:form>
</body>
</html>