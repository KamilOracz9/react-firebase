import React from 'react'

const SignFormButton = ({type, label}) => {
  return (
    <button type={type} className="btn btn-primary py-3 w-100 mb-4">{label}</button>
  )
}

export default SignFormButton;