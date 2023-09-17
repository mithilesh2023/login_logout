import React from 'react'

const Register = () => {
  return (
    <>
        <form action=''>
            <h2>Registration Form</h2>
            <input type="text" placeholder='Enter Your Name' />
            <input type="email" placeholder='Enter Your Email' />
            <input type="password" placeholder='Enter Your Password' />
            <button>Submit</button>
            <span>If already registered,please <a href="#">login</a></span>
        </form>
    </>
  )
}

export default Register