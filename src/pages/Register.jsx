import '../css/Telas.css';
import { Button } from '@mui/material';
import { TextField, Alert } from '@mui/material';
import { useState } from 'react';
import { RegisterUserService } from '../services/RegisterUserService';
function Register() {
  const [email, setEmail] = useState('eve.holt@reqres.in');
  const [password, setPassword] = useState('cityslicka');
  const [errorRegister, setErrorRegister] = useState(false);

  async function Register() {
    const RegisterUser = await RegisterUserService({
      url: 'https://reqres.in/api/register',
      body: {
        email: email,
        password: password,
      },
    });
    const { id, token } = RegisterUser;
    if (!id && !token) {
      errorRegister == false && setErrorRegister(!false);
      localStorage.clear();
      return false;
    }
    localStorage.setItem('id', id);
    localStorage.setItem('token', token);
    window.location = '/list';
  }
  return (
    <main className="Container">
      <div className="Container--grid">
        <h1>Register</h1>
        <TextField
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          label="Email"
          variant="outlined"
        />
        <TextField
          type={'password'}
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          label="Password"
          variant="outlined"
        />
        <Button
          onClick={Register}
          variant="contained"
        >
          Cadastrar
        </Button>
        {errorRegister == true && (
          <Alert severity="error">Todos os campos são obrigatórios!</Alert>
        )}
      </div>
    </main>
  );
}

export default Register;
