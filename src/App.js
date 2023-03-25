import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import MobileNavigation from './Components/MobileNavigation/MobileNavigation';
import AllReview from './Pages/AllReview/AllReview';
import CategoryPage from './Pages/CategoryPage/CategoryPage';
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
            <Route exact path='/category/:id' element={<CategoryPage/>}></Route>
            <Route path='/reviews' element={<AllReview/>}></Route>
            
          </Routes>
          <Footer/>
        </BrowserRouter>
    </div>
  );
}

export default App;
