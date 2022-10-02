import React from 'react'

const SignForm = ({children}) => {
  return (
    <div className="container-fluid position-relative d-flex p-0">
        <div className="container-fluid">
            <div className="row h-100 align-items-center justify-content-center" style={{minHeight: '100vh'}}>
                <div className="col-12 col-sm-8 col-md-6 col-lg-5 col-xl-4">
                    <div className="bg-secondary rounded p-4 p-sm-5 my-4 mx-3">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SignForm;
