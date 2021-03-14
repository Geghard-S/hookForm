import React from "react";

const Form = (props) => {
    const {inputs, setInputs} = props;

    const onChange = e => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        });
    };
    return(
        <form>
            <label htmlFor="firstName">First Name</label>
            <input onChange={onChange} type="text" name="firstName"/>
            <label htmlFor="lastName">Last Name</label>
            <input onChange={onChange} type="text" name="lastName"/>
            <label htmlFor="email">Email</label>
            <input onChange={onChange} type="text" name="email"/>
            <label htmlFor="password">Password</label>
            <input onChange={onChange} type="text" name="password"/>
            <label htmlFor="passwordConfirm">Password Confirmation</label>
            <input onChange={onChange} type="text" name="passwordConfirm"/>
        </form>
    )

}

export default Form;