import React from 'react'

const SignFormCheck = () => {
  return (
    <div className="d-flex align-items-center justify-content-between mb-4">
        <div className="form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
        </div>
        <a href="">Forgot Password</a>
    </div>
  )
}

export default SignFormCheck;