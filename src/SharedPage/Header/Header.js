import React from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaUserCircle } from 'react-icons/fa';

const Header = () => {
    return (
        <div className='bg-gray-600 mb-1'>
           <div className="navbar w-11/12 mx-auto ">
  <div className="flex-1 ">
    <Link to='/' className="font-bold text-white  text-xl">Product Brand</Link>
  </div>
  <div className="">
    <div className="form-control mx-2 hidden lg:block">
      <input type="text" placeholder="Search" className="input input-bordered w-96 h-10 " />
    </div>
    <ul className=' lg:flex hidden lg:block mr-5'>
        <li className='ml-5 font-bold text-white'><Link to='/home'>Home</Link></li>
        <li className='ml-5 font-bold text-white'><Link to='/about'>Aboute</Link></li>
        <li className='ml-5 font-bold text-white'><Link to='/Dashboard'>Dashboard</Link></li>
        
    </ul>
    {/* <div className="form-control mx-2 hidden lg:block">
      <input type="text" placeholder="Search" className="input input-bordered" />
    </div> */}
    
    <div className='ml-10 hidden lg:block'>
       <span ><FaUserCircle  className='h-6 w-6 text-[#F33059]'/></span>
    </div>

    <div className="dropdown block lg:hidden dropdown-end">
      <label tabIndex={0} className="btn btn-ghost">
        <div className="rounded-full">
          <FaBars className='h-6 w-6 text-white'/>
        </div>
      </label>
      <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
        <li><Link to='/home'>Home</Link></li>
        <li><Link to='/home'>Service</Link></li>
        <li><Link to='/home'>Blog</Link></li>
      </ul>
    </div>
  </div>
</div>
        </div>
    );
};

export default Header;