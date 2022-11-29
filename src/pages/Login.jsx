import '../css/Telas.css';
import { useState } from 'react';
import { CheckofLoginService } from '../services/CheckofLoginService';
import { Button } from '@mui/material';
import { TextField, Alert } from '@mui/material';

function Login({ log }) {
  const [email, setEmail] = useState('eve.holt@reqres.in');
  const [password, setPassword] = useState('cityslicka');
  const [errorLogin, setErrorLogin] = useState(false);
  async function login() {
    const req = await CheckofLoginService({
      url: 'https://reqres.in/api/login',
      body: {
        email: email,
        password: password,
      },
      headers: {
        'Content-type': 'application/json',
      },
    });
    const { token } = req;
    if (!token) {
      errorLogin == false && setErrorLogin(!false);
      localStorage.clear();
      return false;
    }
    localStorage.setItem('token', token);
    localStorage.setItem('password', password);
    localStorage.setItem('email', email);
    window.location = '/list';
  }

  return (
    <main className="Container">
      <div className="Container--grid">
        <h1>Login</h1>
        <TextField
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          label="Email"
          variant="outlined"
        />
        <TextField
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          label="Password"
          variant="outlined"
        />
        <Button
          onClick={login}
          variant="contained"
        >
          Login
        </Button>
        {errorLogin == true && (
          <Alert severity="error">Usuário ou senha incorreta!</Alert>
        )}
      </div>
    </main>
  );
}

export default Login;
