import React from 'react'
import SignForm from '../../components/SignForm';
import SignFormButton from '../../components/SignFormButton/SignFormButton';
import SignFormHeader from '../../components/SignFormHeader/SignFormHeader';
import SignFormInput from '../../components/SignFormInput/SignFormInput';

const Register = () => {
    return (
        <SignForm>
            <SignFormHeader title={'Sign Up'} />
            <SignFormInput 
                type={'text'}
                id={'floatingText'}
                placeholder={'jhondoe'}
                label={'Username'}
            />
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
                type="submit"
                label="Sign Up"
            />
            <p className="text-center mb-0">Already have an Account? <a href="/login">Sign In</a></p>
        </SignForm>
    )
}

export default Register;