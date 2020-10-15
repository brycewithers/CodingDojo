<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ page isErrorPage="true" %>  

<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>New License</title>
</head>
<body>
	<div class="container">
		<h1>New License</h1>
		<form:form action="/licenses" method="post" modelAttribute="license">
		
			<p>
		        <form:label path="person">Person: </form:label>
		        <form:errors path="person"/>
		        <form:select path="person">
	               	<c:forEach items="${persons}" var="person">
	                   	<form:option value="${person.id}"><c:out value="${person.firstName} ${person.lastName }"></c:out></form:option>
	                </c:forEach>
	            </form:select>
		    </p>
		    <p>
		        <form:label path="state">State: </form:label>
		        <form:errors path="state"/>
		        <form:input path="state"/>
		    </p>
		    <p>
		        <form:label path="expirationDate">Expiration Date: </form:label>
		        <form:errors path="expirationDate"/>
		        <form:input path="expirationDate" type="date"/>
		    </p>
	   
		    <input type="submit" value="Create"/>
		</form:form>
	</div>
</body>
</html>