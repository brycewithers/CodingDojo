<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ page isErrorPage="true" %>   
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>

<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Edit <c:out value="${language.name}"/></title>
</head>
<body>
	<div>
		<a href="/languages/<c:out value="${language.id}/delete"/>">Delete</a>
		| <a href="/languages">Dashboard</a>
	</div>
	<div>
		<form:form action="/languages/${language.id}" method="post" modelAttribute="language">
			<input type="hidden" name="_method" value="put">
			<p>
		        <form:label path="name">Name</form:label>
		        <form:errors path="name"/>
		        <form:input path="name"/>
		    </p>
		    <p>
		        <form:label path="creator">Creator</form:label>
		        <form:errors path="creator"/>
		        <form:input path="creator"/>
		    </p>
		    <p>
		        <form:label path="currentVersion">Version</form:label>
		        <form:errors path="currentVersion"/>
		        <form:input path="currentVersion"/>
		    </p>
	   
		    <input type="submit" value="Submit"/>
		</form:form>
	</div>
</body>
</html>