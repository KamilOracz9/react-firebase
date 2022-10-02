import React, { useMemo, useState } from 'react'

const Table = ({data}) => {
    const renderRows = useMemo(() => {
        return (
            <>
                {data.map((item, index) => (
                    <Row key={index} item={item}/>
                ))}
            </>
        );
    }, [data]);

    const renderHeaders = useMemo(() => (
        <tr className="text-white">
            <th scope="col"><input className="form-check-input" type="checkbox"/></th>
            {Object.keys(data[0]).map((key, index) => (
                <th scope="col" key={index}>{key}</th>
            ))}
        </tr>
    ), [data]);

    return (
        <div className="container-fluid pt-4 px-0">
                    <div className="bg-secondary text-center rounded p-4">
                        <div className="d-flex align-items-center justify-content-between mb-4">
                            <h6 className="mb-0">Recent Salse</h6>
                            <a href="">Show All</a>
                        </div>
                        <div className="table-responsive">
                            <table className="table text-start align-middle table-bordered table-hover mb-0">
                                <thead>
                                    {renderHeaders}
                                </thead>
                                <tbody>
                                    {renderRows}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
    )
}

const Row = ({item}) => {
    return (
        <tr>
            <td><input className="form-check-input" type="checkbox"/></td>
            {Object.keys(item).map((key, index) => (
                <td key={index}>{item[key]}</td>
            ))}
            <td><a className="btn btn-sm btn-primary" href="">Detail</a></td>
        </tr>
    )
}

export default Table;
