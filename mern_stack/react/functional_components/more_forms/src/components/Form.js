import React, {useState} from 'react';

const Form = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState(""); 
    const [email, setEmail] = useState(""); 
    const [password, setPassword] = useState(""); 
    const [confirm, setConfirm] = useState("");

    const [isFirstNameValid, setIsFirstNameValid] = useState(true);
    const [isLastNameValid, setIsLastNameValid] = useState(true);
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [isPasswordValid, setIsPasswordValid] = useState(true);
    const [isConfirmValid, setIsConfirmValid] = useState(true);

    const firstErr = "First name has to be at least 2 characters";
    const lastErr = "Last name has to be at least 2 characters";
    const emailErr = "Email name has to be at least 5 characters";
    const passwordErr = "Password name has to be at least 8 characters";
    const confirmErr = "Passwords do not match!";


    const handleFirst = (event) => {
        const newFirst = event.target.value
        setFirstName(newFirst);

        if (newFirst.length < 2 && newFirst.length !== 0){
            setIsFirstNameValid(false);
        }
        else{
            setIsFirstNameValid(true);
        }
    }

    const handleLast = (event) => {
        const newLast = event.target.value
        setLastName(newLast);

        if (newLast.length < 2 && newLast.length !== 0){
            setIsLastNameValid(false);
        }
        else{
            setIsLastNameValid(true);
        }
    }

    const handleEmail = (event) => {
        const newEmail = event.target.value
        setEmail(newEmail);

        if (newEmail.length < 2 && newEmail.length !== 0){
            setIsEmailValid(false);
        }
        else{
            setIsEmailValid(true);
        }
    }

    const handlePassword = (event) => {
        const newPassword = event.target.value
        setPassword(newPassword);

        if (newPassword.length < 2 && setPassword.length !== 0){
            setIsPasswordValid(false);
        }
        else{
            setIsPasswordValid(true);
        }
    }

    const handleConfirm = (event) => {
        const newConfirm = event.target.value
        setConfirm(newConfirm);

        if (newConfirm.length < 2 && newConfirm.length !== 0){
            setIsConfirmValid(false);
        }
        else{
            setIsConfirmValid(true);
        }
    }

    return(

        <div>
            <form>
                <div>
                    <label htmlFor="firstName">First Name</label>
                    <input onChange={handleFirst} type="text" name="firstName"></input>
                    {!isFirstNameValid && <span style={{ color: "red" }}>{firstErr}</span>}
                </div>
                <div>
                    <label htmlFor="lastName">Last Name</label>
                    <input onChange={handleLast} type="text" name="lastName"></input>            
                    {!isLastNameValid && <span style={{ color: "red" }}>{lastErr}</span>}    
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input onChange={handleEmail} type="text" name="email"></input>   
                    {!isEmailValid && <span style={{ color: "red" }}>{emailErr}</span>}         
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input onChange={handlePassword} type="password" name="password"></input>    
                    {!isPasswordValid && <span style={{ color: "red" }}>{passwordErr}</span>}        
                </div>
                <div>
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input onChange={handleConfirm} type="password" name="confirmPassword"></input>  
                    {!isConfirmValid && <span style={{ color: "red" }}>{confirmErr}</span>}          
                </div>
            </form>

            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
            <p>Confirm Password: {confirm}</p>
        </div>
    );
};

export default Form;