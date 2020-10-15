<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>

<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%> 
              
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Profile Page</title>
</head>
<body>
	<div class="container">
	    <div>
	        <div>
	            <div>
	                <h1><c:out value="${person.firstName} ${person.lastName}" /></h1>
	            </div>
	            <div>
	                <div>License Number: </div>
	                <div><c:out value="${license.number}" /></div>
	            </div>
	            <div>
	                <div>State: </div>
	                <div><c:out value="${license.state}" /></div>
	            </div>
	            <div>
	                <div>Expiration Date: </div>
	                <div><fmt:formatDate type="date" value="${license.expirationDate}" /></div>
	            </div>
	        </div>
	    </div>
	</div>
</body>
</html>