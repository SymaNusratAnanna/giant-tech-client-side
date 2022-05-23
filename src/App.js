
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


function App() {
  return (
    <div>



<Navbar></Navbar>

     <Routes>
       <Route path="/" element={<Home></Home>}></Route>
       <Route path="/blogs" element={<Blog></Blog>}></Route>
       <Route path="/tools" element={<Tools></Tools>}></Route>
       <Route path="/myportfolio" element={<MyPortfolio></MyPortfolio>}></Route>
       <Route path="/review" element={<Review></Review>}></Route>
       <Route path="/businesssummery" element={<BusinessSummery></BusinessSummery>}></Route>
       <Route path="/login" element={<Login></Login>}></Route>
       <Route path="/signup" element={<Signup></Signup>}></Route>
       
     </Routes>
    </div>
  );
}

export default App;
