import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

import './Login.scss';




const Login = () => {
  const [state, setState] = useState({ email: "", password: "" })
  const history = useHistory()

  const handleChange = (e) => {
    const { name, value } = e.target

    setState({ ...state, [name]: value })

  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post(
        'http://localhost:9000/users/login',
        state,
      )
      if (response.status === 200) {
        localStorage.setItem('myToken', response.data.token);
        localStorage.setItem('myEmail',response.data.email)
        history.push('/app');
      } else {
        const error = new Error(response.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
      alert('Error logging in please try again');
    };

  }


  useEffect(() => {
    //    login()
  }, [])


  return (
    <div className="login-page">
      <form onSubmit={handleSubmit} className="login-form">
        <input type="email" placeholder="email" name="email" value={state.email} onChange={(e) => { handleChange(e) }} required />
        <br />
        <input type="password" placeholder="password" name="password" value={state.password} onChange={(e) => { handleChange(e) }} required />
        <br />
        <input type="submit" value="Submit" />
      </form>
      <div></div>
    </div>

  )
}

export default Login
