import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Collections from "./components/Collections";
import New from "./components/New";
import Fav from "./components/Fav";
import Cart from "./components/Cart";
import User from "./components/User";
import Button from "./components/Button";
import SeeMore from "./components/SeeMore";



function App() {
  
  
  return (

     <Router>
     

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/new" element={<New />} />
          <Route path="/favourite" element={<Fav />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/user" element={<User />} />
           <Route path="/" element={<Button />} />
           <Route path="/" element={<SeeMore />} />
        </Routes>
      </main>
    </Router>
 
  );
}

export default App;

