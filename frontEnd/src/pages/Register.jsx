import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
    const [formData, setFormData] = useState(
        {
            name: "name",
            email: "email",
            password: "password",
            phoneNo:"phoneNo"
        }
    )


    // const navigate =useNavigate()
    const handleChange = (e) => {

        let name = e.target.name
        let value = e.target.value
    
        setFormData({
          ...formData,
          [name]: value,
        })
    }
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
    
          const response = await fetch('api/endpoint', {
            method: "POST",
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
          })
    
          const data = await response.json()
    
          if (response.ok) {
    
            storeToken(data.token)
    
            setUser({
              name: "", email: "", phoneNo: "", password: ""
    
            })
            // navigate('/login')
          } 
    
        } catch (error) {
          console.log(error);
        }
    
      }
  return (
      <div className='flex flex-col h-screen w-full justify-start items-center'>
                    <h1 className='text-3xl font-semibold m-3 '>Registration Form</h1>

          <form action="" onSubmit={handleSubmit}>
          <div>
                  <label htmlFor="name">Name</label>
                  <input type="name" name="name" onChange={handleChange} />
              </div>
              <div>
                  <label htmlFor="email">Email</label>
                  <input type="email" name="email" onChange={handleChange}/>
              </div>
              <div>
                  <label htmlFor="password">Password</label>
                  <input type="password" name="password" onChange={handleChange}/>
              </div>
              <div>
                  <label htmlFor="phoneNo">Phone No</label>
                  <input type="text" name="phoneNo" onChange={handleChange}/>
        </div>
        
        <p>Already A User? <span className='underline'><Link to='/login'>Login Here</Link></span></p>
          </form>
    </div>
  )
}

export default Register