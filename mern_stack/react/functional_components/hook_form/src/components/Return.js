import React from 'react';

const Return = props => {
    const { firstName, lastName, email, password, confirmPassword } = props.formInfo;

    return(
        <div>
            <h3>Your Information</h3>
            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
            <p>Confirm Password: {confirmPassword}</p>
        </div>
    );
};
export default Return;