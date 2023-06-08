import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import jwtDecode from 'jwt-decode';

import Navigation from './components/common/Navigation/Navigation';
import Footer from './components/common/Footer/Footer';
import HomePage from './pages/Home/HomePage';
import OrderPage from './pages/Order/OrderPage';
import LoginPage from './pages/Login/LoginPage';
import AdminPage from './pages/Admin/AdminPage';
import SaladDetails from './components/order/SaladDetails';
import CartPage from './pages/Cart/CartPage';

import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('');
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState(null);
  const [isAdmin, setIsAdmin] = useState(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const decodedToken = jwtDecode(token);
      return decodedToken.isAdmin;
    }
    return false;
  });
  const [userId, setUserId] = useState(null);
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (token) {
      const decodedToken = jwtDecode(token);
      const username = decodedToken.name;
      const email = decodedToken.username;
      const id = decodedToken.id;
      const adminFlag = decodedToken.isAdmin;

      if (adminFlag) {
        setIsAdmin(true);
      }

      setUser(username);
      setEmail(email);
      setUserId(id);
    } else {
      setUser(null);
    }
  }, [token]);

  return (
    <div className="App">
      <Router>
        {currentPage !== 'login' && <Navigation user={user} isAdmin={isAdmin} />}
        <Routes>
          <Route path="/login" element={<LoginPage setCurrentPage={setCurrentPage} />} />
          <Route exact path="/" element={<HomePage />} />
          <Route path="/order" element={<OrderPage />} />
          <Route path="/dashboard" element={<AdminPage isAdmin={isAdmin} />} />
          <Route path="/showSalad/:saladId" element={<SaladDetails />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
