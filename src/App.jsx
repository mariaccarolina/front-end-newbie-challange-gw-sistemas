import Menu from './components/Menu';

import Register from './pages/Register';
import Login from './pages/Login';
import ListUsers from './pages/ListUsers';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route
          path="/register"
          element={<Register />}
        ></Route>
        <Route
          path="/login"
          element={<Login />}
        ></Route>
        <Route
          path="/list"
          element={<ListUsers/>}
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
