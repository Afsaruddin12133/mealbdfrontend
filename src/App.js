import { Route, Routes } from 'react-router-dom';
import './App.css';
import Aboutus from './MealPages/Aboutus/Aboutus';
import Home from './MealPages/Home/Home';
import Notfound from './MealPages/Notfound/Notfound';
import Singin from './MealPages/Singin/Singin';
import Singup from './MealPages/Singup/Singup';
import Footer from './MealSharePages/Footer/Footer';
import Navigation from './MealSharePages/Navigation/Navigation';

function App() {
  return (
    <div>
      <Navigation/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/singin" element={<Singin/>}/>
        <Route path="/singup" element={<Singup/>}/>
        <Route path="/aboutus" element={<Aboutus/>}/>
        <Route path="/*" element={<Notfound/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
