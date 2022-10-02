import React from 'react'
import SignForm from '../../components/SignForm';
import SignFormButton from '../../components/SignFormButton/SignFormButton';
import SignFormCheck from '../../components/SignFormCheck/SignFormCheck';
import SignFormHeader from '../../components/SignFormHeader/SignFormHeader';
import SignFormInput from '../../components/SignFormInput/SignFormInput';

const Login = () => {
  return (
    <SignForm>
      <SignFormHeader title={'Sign In'} />
      <SignFormInput 
        type={'email'}
        id={'floatingInput'}
        placeholder={'name@example.com'}
        label={'Email address'}
      />
      <SignFormInput 
        type={'password'}
        id={'floatingPassword'}
        placeholder={'Password'}
        label={'Password'}
      />
      {/* <SignFormCheck /> */}
      <SignFormButton
        type={'submit'}
        label={'Sign In'}
      />
      <p className="text-center mb-0">Don't have an Account? <a href="/register">Sign Up</a></p>
    </SignForm>
  )
}

export default Login;
