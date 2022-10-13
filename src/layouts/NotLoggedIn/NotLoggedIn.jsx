import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import { NotLoggedInNavigation } from '../../navigations';

const NotLoggedIn = () => {
  return (
    <BrowserRouter>
        <NotLoggedInNavigation />
    </BrowserRouter>
  )
}

export default NotLoggedIn;