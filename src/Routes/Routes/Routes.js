import { createBrowserRouter } from "react-router-dom";
import CartDetails from "../../components/CartDetails";
import Dashboard from "../../layout/Dashboard/Dashboard";
import Main from "../../layout/Main/Main";
import About from "../../Pages/About/About";
import AddProduct from "../../Pages/DashBoard/AddProduct/AddProduct";
import AllProduct from "../../Pages/DashBoard/AllProduct/AllProduct";
import DashBoardMain from "../../Pages/DashBoard/DashBoardMain";
import DetailsProduct from "../../Pages/DetailsProduct/DetailsProduct";
import Home from "../../Pages/Home/Home/Home";
import UpdateProduct from "../../Pages/UpdateProduct/UpdateProduct";

export const router = createBrowserRouter([
    {path:'/', element:<Main></Main>, children:[
        {path:'/', element:<Home></Home>},
        {path:'/home', element:<Home></Home>},
        {path:'/ProductDetails/:id', element:<DetailsProduct></DetailsProduct>},
        {path:'/about', element:<About></About>}
       
        
    ]},
    {path:'/Dashboard', element:<Dashboard></Dashboard>, children:[
        {path:'/Dashboard', element:<DashBoardMain></DashBoardMain>},
        {path:'/Dashboard/allProduct', element:<AllProduct></AllProduct>},
        {path:'/Dashboard/addProduct', element:<AddProduct></AddProduct>},
        {path:'/Dashboard/updateProduct/:id', element:<UpdateProduct></UpdateProduct>},
    ]}
])
