import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'

const Signup = () => {
    const [username, setUsername]  = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const[error,setError] = useState('');
    const navigate = useNavigate();

    const handleSignup = (e) => {
        e.preventDefault();
        
    }
  return (
    <div>Signup</div>
  )
}

export default Signup