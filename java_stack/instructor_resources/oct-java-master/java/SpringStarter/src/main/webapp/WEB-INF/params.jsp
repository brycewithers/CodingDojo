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
	<h1>This is your param: <c:out value="${input}"></c:out></h1>
	<p>${input}</p>
	
	<p>This is an unsanitized string: ${example}</p>
	<p>This is a sanitized string: <c:out value="${example}"></c:out></p>
</body>
</html>