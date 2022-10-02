import React, { useMemo, useState } from 'react'
import userImage from '../../assets/img/user.jpg';

const Messages = () => {
    const [messages, setMessages] = useState([
        {
            author: 'Jhon Doe',
            time: '15 minutes ago',
            message: 'Short message goes here...',
        },
        {
            author: 'Jhon Doe',
            time: '15 minutes ago',
            message: 'Short message goes here...',
        },
        {
            author: 'Jhon Doe',
            time: '15 minutes ago',
            message: 'Short message goes here...',
        },
        {
            author: 'Jhon Doe',
            time: '15 minutes ago',
            message: 'Short message goes here...',
        },
    ]);

    const renderMessages = useMemo(() => (
        <>
            {messages.map((item, index) => (
                <div key={index} className="d-flex align-items-center border-bottom py-3">
                    <img className="rounded-circle flex-shrink-0" src={userImage} alt="" style={{width: '40px', height: '40px'}}/>
                    <div className="w-100 ms-3">
                        <div className="d-flex w-100 justify-content-between">
                            <h6 className="mb-0">{item.author}</h6>
                            <small>{item.time}</small>
                        </div>
                        <span>{item.message}</span>
                    </div>
                </div>
            ))}
        </>
    ), [messages]);
    
  return (
    <div className="col-sm-12 col-md-6 col-xl-4">
        <div className="h-100 bg-secondary rounded p-4">
            <div className="d-flex align-items-center justify-content-between mb-2">
                <h6 className="mb-0">Messages</h6>
                <a href="">Show All</a>
            </div>
            {renderMessages}            
        </div>
    </div>
  )
}

export default Messages;
