import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Footer from '../../SharedPage/Footer/Footer';
import Header from '../../SharedPage/Header/Header';

const Dashboard = () => {
    return (
        
        <div>
            <Header />
            <div className="drawer drawer-mobile">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
   
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
    <Outlet></Outlet>
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
      <li><Link to='/Dashboard/allProduct'>All Product</Link></li>
      <li><Link to='/Dashboard/addProduct'>Add Product</Link></li>
      
    </ul>
  
  </div>
</div>
            <Footer />
        </div>
    );
};

export default Dashboard;