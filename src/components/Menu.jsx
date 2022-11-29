import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Icon from '@mui/material/Icon';
import { useEffect, useState } from 'react';
import { getUserByIdService } from '../services/getUserByIdService';

function Menu() {
  const [user, setUser] = useState({});
  const id = localStorage.getItem('id');
  useEffect(() => {
    const getUserById = async () => {
      const req = await getUserByIdService('https://reqres.in/api/user/' + id);
      if (req) {
        setUser(req);
      }
    };
    if (id) {
      getUserById();
    }
  }, []);
  function template_login() {
    return (
      <>
        <Icon>person</Icon>
        <a
          style={{ color: 'white' }}
          href="/login"
        >
          Login
        </a>
        <Icon>app_registration</Icon>
        <a
          style={{ color: 'white' }}
          href="/register"
        >
          Register
        </a>
      </>
    );
  }

  function template_logout() {
    return (
      <div style={{ display: 'flex', gap: 20, alignItems: 'center' }}>
        <img src={'https://reqres.in/img/faces/7-image.jpg'} />
        <p>{user?.data?.name ?? 'your name'}</p>
        <button
          onClick={() => {
            localStorage.clear();
            window.location = '/login';
          }}
          style={{ background: '#ffff', padding: 11, border: 'none' }}
        >
          Logout
        </button>
      </div>
    );
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar
          variant="dense"
          style={{ display: 'flex', gap: 20, alignItems: 'center' }}
        >
          {!localStorage.token ? template_login() : template_logout()}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default Menu;
