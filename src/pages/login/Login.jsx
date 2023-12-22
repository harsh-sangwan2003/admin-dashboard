import React, { useState } from 'react'
import './Login.scss'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebase';
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const [error, setError] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleLogin = (e) => {

    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then(userCredentials => {

        const user = userCredentials.user;
        console.log(user);
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
        {error && <span>Wrong email or password!</span>}
      </form>
    </div>
  )
}

export default Login
