
import React from "react";
import { Routes, Route } from "react-router-dom";
// import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import OrderSummary from "./components/OrderSummary";
import NoMatch from "./components/NoMatch";
import Products from "./components/Products";
import FeaturedProducts from "./components/FeaturedProducts";
import NewProducts from "./components/NewProducts";
import  User from "./components/User";
import UserDetails from "./components/UserDetails";
import Admin from "./components/Admin";

// const LazyAbout = React.lazy(()=> import  from ('./components/About'))



function App() {
  return (
        <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="about" element={<React.Suspense fallback='Loading.....'></React.Suspense>}/>
        <Route path="order-summary" element={<OrderSummary />}/>

        <Route path="products" element={<Products />}>
        {/* <Route index element={<FeaturedProducts/>}/> */}
        <Route path="featured" element={<FeaturedProducts />}/>
        <Route path="new" element={<NewProducts />}/>
        
        </Route>
        <Route path='users' element={<User/>}>
        <Route  path=':userId' element={<UserDetails/>}/>

        <Route path='admin' element={<Admin/>}/>
        </Route>

        <Route path="*" element={<NoMatch />}>
          {" "} </Route>

      </Routes>
    </>
  );
}

export default App;
