import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from './SignIn';
import SignUp from './Signup';
import ProductView from './ProductView';
import Product from './Product'; // If you have a Product page, otherwise you can remove this
import Search from './Search'

import 'bootstrap/dist/css/bootstrap.css'; // Optional if you want to use Bootstrap

function App() {
  return (
    <Router>
      <Routes>
        {/* Route for the SignIn page */}
        <Route path="/" element={<SignIn />} />

        {/* Route for the SignUp page */}
        <Route path="/signup" element={<SignUp />} />

        {/* Route for the Product page */}
        <Route path="/product" element={<Product />} />
        <Route path="/productview" element={<ProductView />} />

        <Route path="/Search" element={<Search />} />
      </Routes>
    </Router>
  );
}

export default App;

