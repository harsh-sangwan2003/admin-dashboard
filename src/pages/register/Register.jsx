import React, { useContext, useState } from 'react'
import './Register.scss'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebase';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

const Login = () => {

    const [error, setError] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { dispatch } = useContext(AuthContext);

    const navigate = useNavigate();

    const handleRegister = (e) => {

        e.preventDefault();

        createUserWithEmailAndPassword(auth, email, password)
            .then(userCredentials => {

                const user = userCredentials.user;
                dispatch({ type: "REGISTER", payload: user });
                navigate("/");
            })
            .catch(err => {

                setError(err);
            })

    }

    return (
        <div className='register'>
            <form action="">
                <input type="email" placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type='submit' onClick={handleRegister}>Register</button>
                <span>Already have an account? <Link to="/login">Login</Link></span>
                {error && <span>Wrong email or password!</span>}
            </form>
        </div>
    )
}

export default Login
