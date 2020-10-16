<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ page isErrorPage="true" %> 

<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>New Ninja</title>
</head>
<body>
	<div class="container">
		<h1>New Ninja</h1>
		<form:form action="/ninjas/new" method="post" modelAttribute="ninja">
			<form:select path="dojo" name="dojo" id="dojo">
	    		<c:forEach items="${dojos}" var="dojo">
	    			<option value="${dojo.id}"><c:out value="${dojo.name}"></c:out></option>
	    		</c:forEach>
	    	</form:select>
	    	
	    	<form:label path="firstName">First Name: </form:label>
			<form:errors path ="firstName"/>
			<form:input path="firstName" type="text"/>
			
			<form:label path="lastName">Last Name: </form:label>
			<form:errors path ="lastName"/>
			<form:input path="lastName" type="text"/>
			
			<form:label path="age">Age: </form:label>
			<form:errors path ="age"/>
			<form:input path="age" type="number"/>
			
			<input type="submit" value="Create"/>
		</form:form>
	</div>
</body>
</html>