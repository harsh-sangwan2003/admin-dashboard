import React, { useContext, useState } from 'react'
import './Login.scss'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebase';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

const Login = () => {

  const [error, setError] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { dispatch } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogin = (e) => {

    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then(userCredentials => {

        const user = userCredentials.user;
        dispatch({ type: "LOGIN", payload: user });
        navigate("/");
      })
      .catch(err => {

        setError(err);
      })

  }

  return (
    <div className='login'>
      <form action="">
        <input type="email" placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type='submit' onClick={handleLogin}>Login</button>
        <span>Don't have an account? <Link to="/register">Register</Link></span>
        {error && <span>Wrong email or password!</span>}
      </form>
    </div>
  )
}

export default Login
