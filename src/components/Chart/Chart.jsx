import React from 'react'

const Chart = ({children, label}) => {
  return (
    <div className="col-sm-12 col-xl-6">
      <div className="bg-secondary text-center rounded p-4">
        <div className="d-flex align-items-center justify-content-between mb-4">
          <h6 className="mb-0">{label}</h6>
            <a href="">Show All</a>
        </div>
        {children}
      </div>
    </div>
  )
}

export default Chart;