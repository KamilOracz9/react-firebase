import React from 'react'

const SignFormHeader = ({title}) => {
  return (
    <div className="d-flex align-items-center justify-content-between mb-3">
        <a href="index.html" className="">
            <h3 className="text-primary"><i className="fa fa-user-edit me-2"></i>DarkPan</h3>
        </a>
        <h3>{title}</h3>
    </div>
  )
}

export default SignFormHeader;
