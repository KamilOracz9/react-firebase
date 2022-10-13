import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import SignForm from '../../components/SignForm';
import SignFormButton from '../../components/SignFormButton/SignFormButton';
import SignFormHeader from '../../components/SignFormHeader/SignFormHeader';
import SignFormInput from '../../components/SignFormInput/SignFormInput';
import { SIGN_UP } from '../../store/constants/security';

const Register = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();

    const signUp = () => {
        dispatch({type: SIGN_UP, payload: {login, password}});
    }

    return (
        <SignForm>
            <SignFormHeader title={'Sign Up'} />
            <SignFormInput 
                type={'text'}
                id={'floatingText'}
                placeholder={'jhondoe'}
                label={'Username'}
                onChange={(event) => setLogin(event.target.value)}
            />
            <SignFormInput 
                type={'password'}
                id={'floatingPassword'}
                placeholder={'Password'}
                label={'Password'}
                onChange={(event) => setPassword(event.target.value)}
            />
            {/* <SignFormCheck /> */}
            <SignFormButton 
                type="submit"
                label="Sign Up"
                onClick={signUp}
            />
            <p className="text-center mb-0">Already have an Account? <Link to="/login">Sign In</Link></p>
        </SignForm>
    )
}

export default Register;