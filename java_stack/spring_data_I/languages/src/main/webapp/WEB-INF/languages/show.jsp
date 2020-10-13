<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title><c:out value="${language.name}"/></title>
</head>
<body>
	<div>
		<a href="/languages">Dashboard</a>
		<p><c:out value="${language.name}"/></p>
		<p><c:out value="${language.creator}"/></p>
		<p><c:out value="${language.currentVersion}"/></p>
		<a href="/languages/<c:out value="${language.id}/edit"/>">Edit</a>
		<a href="/languages/<c:out value="${language.id}/delete"/>">Delete</a>
	</div>
</body>
</html>