<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ page isErrorPage="true" %>  

<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>New Person</title>
</head>
<body>
	<div class="container">	
		
		<form:form action="/persons" method="post" modelAttribute="person">
		
		    <p>
		        <form:label path="firstName">First Name: </form:label>
		        <form:errors path="firstName"/>
		        <form:input path="firstName"/>
		    </p>
		    <p>
		        <form:label path="lastName">Last Name: </form:label>
		        <form:errors path="lastName"/>
		        <form:input path="lastName"/>
		    </p>
	   
		    <input type="submit" value="Create"/>
		    
		</form:form>
		
	</div>
</body>
</html>