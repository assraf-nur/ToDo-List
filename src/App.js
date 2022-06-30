import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Completed from './Components/Home/Completed';
import Calender from './Components/Home/Calender';

function App() {
  return (
    <div className='container mx-auto'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='home' element={<Home></Home>}></Route>
        <Route path='completed' element={<Completed></Completed>}></Route>
        <Route path='calender' element={<Calender></Calender>}></Route>
      </Routes>
    </div>
  );
}

export default App;
