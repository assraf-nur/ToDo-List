import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Completed from './Components/Home/Completed';
import Calender from './Components/Home/Calender';
import Front from './Components/Home/Front';
import Update from './Components/Home/Update';

function App() {
  return (
    <div className='container mx-auto'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Front></Front>}></Route>
        <Route path='home' element={<Front></Front>}></Route>
        <Route path='completed' element={<Completed></Completed>}></Route>
        <Route path='calender' element={<Calender></Calender>}></Route>
        <Route path='update/:id' element={<Update></Update>}></Route>
      </Routes>
    </div>
  );
}

export default App;
