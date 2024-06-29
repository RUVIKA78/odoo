import React, { useState } from 'react'

const Login = () => {
    const [formData, setFormData] = useState(
        {
            email: "email",
            password: "password",
        }
    )

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
        console.log(e);

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
//token function we need to change as per requirement
                storeToken(data.token)
                setFormData({
                    email: "", password: ""
                })
               
                // navigate('/')
            }
            
        }
        catch (error) {
            console.log(error);

        }

    }
  return (
      <div className='flex flex-col h-screen w-full justify-start items-center'>
          <h1 className='text-3xl font-semibold m-3 '>Login Form</h1>
          <form action="" onSubmit={handleSubmit}>
              <div>
                  <label htmlFor="email">Email</label>
                  <input type="email" name="email" onChange={handleChange} />
              </div>
              <div>
                  <label htmlFor="password">Password</label>
                  <input type="password" name="password" onChange={handleChange}/>
              </div>
          </form>
    </div>
  )
}

export default Login