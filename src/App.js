import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import MobileNavigation from './Components/MobileNavigation/MobileNavigation';
import Home from './Pages/Home/Home';
import SingleBlogPage from './Pages/SingleBlogPage/SingleBlogPage';

function App() {
  return (
    <div className="myTechSite">
        <BrowserRouter>
          
          <MobileNavigation/>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/:id' element={<SingleBlogPage/>}></Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
