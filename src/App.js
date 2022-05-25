
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Blog from './Pages/Home/Blog';
import Tools from './Pages/Home/Tools';
import MyPortfolio   from './Pages/Home/MyPortfolio';
import Review from './Pages/Home/Review';
import BusinessSummery from  './Pages/Home/BusinessSummery';
import Navbar from './Pages/Home/Navbar';
import Login from './Pages/Login/Login';
import Signup from './Pages/Login/Signup';
import RequredAuth from './Pages/Login/RequredAuth';
import ToolsDetails from './Pages/Home/ToolsDetails';
import AddTool from './Pages/AddTool/AddTool';
import ManageTools from './Pages/AddTool/ManageTools/ManageTools';
import BuyProduct from './Pages/AddTool/BuyingProduct/BuyProduct';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyOrders from './Pages/Dashboard/MyOrders';
import AddaReview from './Pages/Dashboard/AddaReview';
import Notfound from './Pages/Notfound';


function App() {
  return (
    <div>



<Navbar></Navbar>

     <Routes>
       <Route path="/" element={<Home></Home>}></Route>
       <Route path="/tool/:toolId" element={<ToolsDetails></ToolsDetails>}></Route>
       
       <Route path="/blogs" element={<Blog></Blog>}></Route>
       <Route path="/tools" element={<RequredAuth><Tools></Tools></RequredAuth>}></Route>
       <Route path="/managetools" element={<RequredAuth><ManageTools></ManageTools></RequredAuth>}></Route>
       <Route path="/addtool" element={<RequredAuth><AddTool></AddTool></RequredAuth>}></Route>
       <Route path="/dashboard" element={<RequredAuth><Dashboard></Dashboard></RequredAuth>} >
          <Route index element={<MyOrders></MyOrders>}></Route>
          <Route path="addreview" element={<AddaReview></AddaReview>} ></Route>
          
          
        </Route>
          
       <Route path="/myportfolio" element={<MyPortfolio></MyPortfolio>}></Route>
       <Route path="/review" element={<Review></Review>}></Route>
       <Route path="/businesssummery" element={<BusinessSummery></BusinessSummery>}></Route>

       <Route path="/login" element={<Login></Login>}></Route>
       <Route path="/signup" element={<Signup></Signup>}></Route>
       <Route path="/buyproduct" element={<BuyProduct></BuyProduct>}></Route>
       <Route path="*" element={<Notfound></Notfound>}></Route>
       
       
     </Routes>
    </div>
  );
}

export default App;
