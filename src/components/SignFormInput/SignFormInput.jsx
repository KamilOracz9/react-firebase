import React from 'react'

const SignFormInput = ({label, placeholder, id, type}) => {
  return (
    <div className="form-floating mb-3">
        <input type={type} className="form-control" id={id} placeholder={placeholder}/>
        <label htmlFor={id}>{label}</label>
    </div>
  )
}

export default SignFormInput;
