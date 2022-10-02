import React from 'react'

const SimpleTile = ({icon, label, value}) => {
    return (
        <div className="col-sm-6 col-xl-3">
            <div className="bg-secondary rounded d-flex align-items-center justify-content-between p-4">
                <i className={`fa ${icon} fa-3x text-primary`} ></i>
                <div className="ms-3">
                    <p className="mb-2">{label}</p>
                    <h6 className="mb-0">{value}</h6>
                </div>
            </div>
        </div>
    )
}

export default SimpleTile;
