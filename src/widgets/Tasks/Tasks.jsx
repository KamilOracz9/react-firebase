import React, { useState } from 'react'

const Tasks = () => {
    const [tasks, setTasks] = useState([
        {
            body: 'Short task goes here...',
            complete: false,
        },
        {
            body: 'Short task goes here...',
            complete: true,
        },
        {
            body: 'Short task goes here...',
            complete: false,
        },
        {
            body: 'Short task goes here...',
            complete: false,
        },
        {
            body: 'Short task goes here...',
            complete: true,
        },
    ]);

  return (
    <div className="col-sm-12 col-md-6 col-xl-4">
        <div className="h-100 bg-secondary rounded p-4">
            <div className="d-flex align-items-center justify-content-between mb-4">
                <h6 className="mb-0">To Do List</h6>
                <a href="">Show All</a>
            </div>
            <div className="d-flex mb-2">
                <input className="form-control bg-dark border-0" type="text" placeholder="Enter task"/>
                <button type="button" className="btn btn-primary ms-2">Add</button>
            </div>
            {tasks.map((task, index) => (
                <div key={index} className="d-flex align-items-center border-bottom py-2">
                    <input className="form-check-input m-0" type="checkbox" defaultChecked={task.complete}/>
                    <div className="w-100 ms-3">
                        <div className="d-flex w-100 align-items-center justify-content-between">
                            <span>{task.body}</span>
                            <button className="btn btn-sm"><i className="fa fa-times"></i></button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Tasks;