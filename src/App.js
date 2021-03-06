import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import AllCourses from './components/AllCourses/AllCourses';
import Banner from './components/Banner/Banner';
import Contact from './components/Contact/Contact';
import Courses from './components/Courses/Courses';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Header></Header>
      
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/courses' element={<AllCourses></AllCourses>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
