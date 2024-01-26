import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Cart from "./Pages/Cart";
import Orders from "./Pages/Orders";
import CustomPC from "./Pages/CustomPC";
import Signup from "./Pages/Signup";
import ViewProduct from "./Pages/ViewProduct";
import ViewGamingCategory from "./Pages/ViewGamingCategory";
import ViewOfficeCategory from "./Pages/ViewOfficeCategory";
import AdminDashboard from "./Pages/AdminDashboard";

function App() {
  const [cartItems, setCartItems] = useState([]);

  // Function to get the total number of items in the cart
  const getCartItemCount = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <Router>
      <div>
        {/* Pass the cartItemCount to the Navbar */}
        <Navbar cartItemCount={getCartItemCount()} />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Pass the cartItems and setCartItems to the Cart component */}
          <Route
            path="/cart"
            element={<Cart cartItems={cartItems} setCartItems={setCartItems} />}
          />
          <Route path="/orders" element={<Orders />} />
          <Route path="/custom" element={<CustomPC />} />
          <Route path="/viewproduct" element={<ViewProduct />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* Route for viewing products in the office category */}
          <Route path="/officecategory" element={<ViewOfficeCategory />} />

          {/* Route for viewing products in the gaming category */}
          <Route path="/gamingcategory" element={<ViewGamingCategory />} />

          {/* Route for viewing a specific product */}
          <Route path="/product/:id" element={<ViewProduct />} />

          {/* Add more routes for other components as needed */}
          
          {/* Route for Admin Dashboard */}
          <Route path="/admindashboard" element={<AdminDashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
