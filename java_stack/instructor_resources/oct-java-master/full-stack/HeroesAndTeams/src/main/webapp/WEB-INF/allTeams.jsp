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


	<c:forEach items="${teams}" var="team">
		<hr>
		<p>name: <c:out value="${team.name}"></c:out>
		<p>id: <c:out value="${team.id}"></c:out>
		<c:forEach items="${team.getHeroes()}" var="hero">
			<p>name: <c:out value="${hero.name}"></c:out></p>
			<p>id: <c:out value="${hero.id}"></c:out></p>
		</c:forEach>
	</c:forEach>
</body>
</html>