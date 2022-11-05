import './App.css';
import { BrowserRouter,Routes, Route } from 'react-router-dom'  
import Login from './Components/Login';
import Dashboard from './Components/Elements/Dashboard';
import UserRegister from './Components/UserRegister';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={ <Login />}/>
        <Route path='/sign-in' element = { <Login />} ></Route>
        <Route path='/sign-up' element = { <UserRegister />} ></Route>
        <Route path='/dashboard' element = { <Dashboard />} ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
