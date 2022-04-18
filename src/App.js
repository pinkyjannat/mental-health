
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Header from './Components/Header/Header';
import CheckOut from './Components/CheckOut/CheckOut';
import RequireAuth from './RequireAuth/RequireAuth';
import Signup from './Components/SignUp/SignUp';
import Bio from './Components/Bio/Bio';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
      <Route path="/" element={<Home/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>}/>

        <Route path="/bio" element={<Bio/>}/>
        <Route
            path="/checkout"
            element={
              
                <CheckOut />
              
            }
          />
      </Routes>
      
    </div>
  );
}

export default App;
