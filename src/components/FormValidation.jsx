import React, { useState } from 'react'

function FormValidation({userData, setUserData}) {
    const [formData, setFormData] = useState([]);
    const [errors, setErrors] = useState({
        name: false,
        email: false
    })
    const handleSubmit = (e) => {
        e.preventDefault();
        if(userData.name === '') {
            setErrors({...errors, name: true});
            setUserData({name: '', email: ''})
        } 
        if(userData.email === '') {
            setErrors({...errors, email: true});
            setUserData({name: '', email: ''})
        }
        if(errors.name || errors.email) {
            alert('Please fill the details in name and email field')
        } else {
            setFormData([...formData, userData]);
            setUserData({name: '', email: ''})
        }
    }
    console.log('The submitted data: ', formData)
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type='text' placeholder='Enter your name' value={userData.name} onChange={(e) => setUserData({...userData, name: e.target.value})}/>
            <input type='text' placeholder='Enter your email' value={userData.email} onChange={(e) => setUserData({...userData, email: e.target.value})}/>
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default FormValidation