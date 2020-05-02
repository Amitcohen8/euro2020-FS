import React, {useEffect,useState} from 'react';

import {Redirect, useHistory} from 'react-router-dom'


import './Login.scss'
import axios from 'axios'



const Login = () => {
const [state,setState] = useState({email:"",password:""})
const [redirect,setRedirect] = useState(false)
const history = useHistory()

const handleChange = (e) => {
    const {name,value} = e.target

    setState({...state,[name]:value})

}
const handleSubmit = (e)=>{
    e.preventDefault()
    fetch('http://localhost:9000/users/login', {
        method: 'POST',
        body: JSON.stringify(state),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(res => {
        console.log('1',res.status)
        if (res.status === 200) {
          
          history.push('/playerform');
        } else {
          const error = new Error(res.error);
          throw error;
        }
      })
      .catch(err => {
        console.error(err);
        alert('Error logging in please try again');
      });
    // setRedirect(true)
}
// const login = ()=>{
//     axios.post('http://localhost:9000/users/login',{
//         "email":"amitcohen8@gmail.com",
//         "password":"pitush222"
//     }).then(res=>console.log('%%%%',res)).catch(e=>console.log(e))
// }

useEffect(() => {
//    login()
}, [])


    return (
        <div className="login-page">
            <form onSubmit={handleSubmit} className="login-form">
                <input type="email" placeholder="email" name="email" value={state.email} onChange={(e)=>{handleChange(e)}} required/>
                <br/>
                
                <input type="password" placeholder="password" name="password" value={state.password} onChange={(e)=>{handleChange(e)}} required/>
                <br/>
                <input type="submit" value="Submit"/>
              
                <p>{state.email}</p>
                <p>{state.password}</p>
            </form>
    </div>
      
    )
}

export default Login
