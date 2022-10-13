import React from 'react'

const SignFormInput = ({label, placeholder, id, type, value, onChange}) => {
  return (
    <div className="form-floating mb-3">
        <input 
          type={type} 
          className="form-control" 
          id={id} 
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        <label htmlFor={id}>{label}</label>
    </div>
  )
}

export default SignFormInput;
