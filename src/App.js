import HomePage from './pages/HomePage';
import React from 'react';
import Account from './components/Account';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import { Breadcrumb } from './components/Breadcrumb';
import ProductDetail from './components/ProductDetail';
// import { BrowserRouter as Router, Route } from "react-router-dom";
import { itemProduct } from './pages/HomePage';
import { ProvideAuth } from './components/Auth/auth';
import { AuthButton, LoginPage, PrivateRoute } from './components/Auth/pages';

function App() {
  return (
    <ProvideAuth>
      <Router>
        {/* <AuthButton/> */}
          {/* <div className='flex text-[14px] justify-center '>
            <p className='ml-[5px]'>
              <Link to='/'>Home</Link>
            </p>
            <p className='ml-[5px]'>
              <Link to='/account'>Account</Link>
            </p>
            <p className='ml-[5px]'>
              <Link to='detail'>Product Detail</Link>
            </p>
          </div> */}
          {/* <Breadcrumb/> */}
         
        <Routes>
          <Route exact path='/' element={< HomePage />}></Route>
          <Route exact path='/account' element={< Account />}></Route>
          <Route path='/products/:productId' element={<ProductDetail/>}></Route>
          <Route path="/protected" element={<PrivateRoute />}/>
          <Route path="/login" element={<LoginPage />} />

        </Routes>
      </Router>
    </ProvideAuth>
  );
}

export default App;
