import React, { useState } from 'react'
import {useDispatch} from 'react-redux';
import { Link } from 'react-router-dom';
import SignForm from '../../components/SignForm';
import SignFormButton from '../../components/SignFormButton/SignFormButton';
import SignFormCheck from '../../components/SignFormCheck/SignFormCheck';
import SignFormHeader from '../../components/SignFormHeader/SignFormHeader';
import SignFormInput from '../../components/SignFormInput/SignFormInput';
import {SIGN_IN} from '../../store/constants/security';

const Login = () => {
  const dispatch = useDispatch();

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const signIn = () => {
    dispatch({type: SIGN_IN, payload: {login, password}});
  }

  return (
    <SignForm>
      <SignFormHeader title={'Sign In'} />
      <SignFormInput 
        type={'email'}
        id={'floatingInput'}
        placeholder={'name@example.com'}
        label={'Email address'}
        value={login}
        onChange={(event) => setLogin(event.target.value)}
      />
      <SignFormInput 
        type={'password'}
        id={'floatingPassword'}
        placeholder={'Password'}
        label={'Password'}
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <SignFormButton
        type={'submit'}
        label={'Sign In'}
        onClick={signIn}
      />
      <p className="text-center mb-0">Don't have an Account? <Link to="/register">Sign Up</Link></p>
    </SignForm>
  )
}

export default Login;
