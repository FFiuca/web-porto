import React from 'react';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';

import logo from './logo.svg';

import './App.css';


//page
import Dashboard from './components/pages/Dashboard';
import HIS from './components/pages/HIS';
import TicTacToe from './components/pages/TicTacToe';
import Membership from './components/pages/Membership';
import Catalog from './components/pages/Catalog';
import ECommerce from './components/pages/ECommerce';


function App() {
  return (
    <React.Fragment>
      <i className="bi bi-list mobile-nav-toggle d-lg-none"></i>
      <Router>
        <Routes>
          <Route exact path="/" element={<Dashboard />} />

          {/* Page */}
          <Route path="/his" element={<HIS></HIS>}></Route>
          <Route path="/catalog" element={<Catalog />} ></Route>
          <Route path="/membership" element={<Membership />} ></Route>
          <Route path="/tictactoe" element={<TicTacToe />} />
          <Route path="/ecommerce" element={<ECommerce />}></Route>
        </Routes>

      </Router>
      

      { console.log(`%PUBLIC_URL%`) }
    </React.Fragment>
  );
}

export default App;
