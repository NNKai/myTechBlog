import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { lazy, Suspense } from 'react';
import './App.css';
import Footer from './Components/Footer/Footer';
import MobileNavigation from './Components/MobileNavigation/MobileNavigation';
import Spinner from './Components/Spinner/Spinner';
import AboutUs from './Pages/AboutUs/AboutUs';

const Home = lazy(() => import('./Pages/Home/Home'));
const SingleBlogPage = lazy(() => import('./Pages/SingleBlogPage/SingleBlogPage'))
const CategoryPage = lazy(() => import('./Pages/CategoryPage/CategoryPage'))
const AllReview = lazy(() => import('./Pages/AllReview/AllReview'))

function App() {
  return (
    <div className="myTechSite">
        <BrowserRouter>
          <MobileNavigation/>
          <Suspense fallback={<Spinner/>}>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/:id' element={<SingleBlogPage/>}></Route>
            <Route exact path='/category/:id' element={<CategoryPage/>}></Route>
            <Route path='/reviews' element={<AllReview/>}></Route>
            <Route path='/aboutus' element={<AboutUs/>}></Route>
            
          </Routes>
          </Suspense>
          <Footer/>
        </BrowserRouter>
    </div>
  );
}

export default App;
