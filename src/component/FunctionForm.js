import React, { useState } from 'react';
import '../App.css'

function FunctionForm () {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function handleName(e) {
        setName(e.target.value)
    }

    function handleEmail(e) {
        setEmail(e.target.value)
    }

    function handlePassword(e) {
        setPassword(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        console.log(name);
        console.log(email);
        console.log(password);
        setName("")
        setEmail("")
        setPassword("")
    }

    return (
        <div>
            <div className="container">
                <form onSubmit={(e)=>handleSubmit(e)}>
                    <div className="user-details">
                        <div className="input-box">
                            <label className="details" htmlFor="name">Full Name</label>
                            <input id="name" type="text" name="name" value={name} placeholder="Enter Your Full Name" onChange={(e)=>handleName(e)} />
                        </div>
                        
                        <div className="input-box">
                            <label className="details" htmlFor="email">Email</label>
                            <input id="email" type="email" name="email" value={email} placeholder="Enter Your Email" onChange={(e)=>handleEmail(e)} />
                        </div>

                        <div className="input-box">
                            <label className="details" htmlFor="pswd">Password</label>
                            <input id="pswd" type="password" name="password" value={password} placeholder="Enter Your Password" onChange={(e)=>handlePassword(e)} />
                        </div>
                    </div>

                    <div className="button">
                        <input type="submit" />
                    </div>
                </form>
            </div>

            <div className="shape-body">
            <div className="shape"></div>
            </div>
        </div>
    )
}

export default FunctionForm;