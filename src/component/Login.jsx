import React from 'react'

const Login = () => {
  return (
    <>
       <form action=''>
            <h2>Login Form</h2>
            <input type="text" placeholder='Enter Your Name' />
            <input type="password" placeholder='Enter Your Password' />
            <button>Submit</button>
            <span>first register,please <a href="#">Register</a></span>
        </form>
    </>
  )
}

export default Login