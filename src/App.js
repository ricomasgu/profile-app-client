import { Routes, Route } from 'react-router-dom'

import SignUp from './components/SignUp';
import Login from './components/Login';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={ <HomePage /> } />
        <Route path='/signup' element={ <SignUp /> } />
        <Route path='/login' element={ <Login /> } />
      </Routes>
    </div>
  );
}

export default App;
