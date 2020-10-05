import React from 'react';

const Form = props => {
    const{inputs, setInputs} = props;
    const formChange = (e) => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value 
        });
    };
    return(
        <form>
            <div>
                <label htmlFor="firstName">First Name</label>
                <input onChange={formChange} type="text" name="firstName"></input>
            </div>
            <div>
                <label htmlFor="lastName">Last Name</label>
                <input onChange={formChange} type="text" name="lastName"></input>                
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input onChange={formChange} type="text" name="email"></input>            
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input onChange={formChange} type="password" name="password"></input>            
            </div>
            <div>
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input onChange={formChange} type="password" name="confirmPassword"></input>            
            </div>
        </form>
    );
};

export default Form;