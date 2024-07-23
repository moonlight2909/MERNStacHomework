import React, { useState } from 'react'
import Axios from 'axios'
import { useNavigate } from 'react-router-dom'
import './Signup.css'
export default function Signup() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [error, setError] = useState("")
    const navigate = useNavigate()
    function handleSubmit(e) {
        e.preventDefault()
        if (!username || !email || !password) {
            setError("Please fill all fields")
            return;
        }
        Axios.post("http://localhost:3000/auth/signup", {
            username,
            email,
            password
        }).then((response) => {
            if (response.data.status) {
                navigate("/login")
            }
        }).catch(() => {
            setError("Internal error occured, please try again.")
        })
    }
    return (
        <div className="signup-container">
            <h2>SignUp</h2>
            <form onSubmit={handleSubmit} className="signup-form">
                <div className="form-group">
                    <label htmlFor="username">Username: </label>
                    <input type="text" placeholder="Username"
                        value={username} onChange={(e) => { setUsername(e.target.value) }} className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email: </label>
                    <input type="email" placeholder="Email"
                        value={email} onChange={(e) => { setEmail(e.target.value) }} className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password: </label>
                    <input type="password" placeholder="Password"
                        value={password} onChange={(e) => { setPassword(e.target.value) }} className="form-control" />
                </div>
                <button type='submit' className="signup-button">SignUp</button>
                <div className="login-redirect">
                    <p>Already have an account?</p>
                    <button onClick={() => navigate("/login")} className="login-button">Login</button>
                </div>
                {error && <p className="error-message">{error}</p>}
            </form>
        </div>
    );
}
