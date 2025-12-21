import Logo from '../Images/logo.png'
import { Link } from "react-router-dom";
import { MdFavoriteBorder } from "react-icons/md";
import { LuShoppingCart } from "react-icons/lu";
import { CiUser } from "react-icons/ci";
import Search from './Search';
import { useCart } from './CartContext';
const Navbar = () => {
    
      const { cartItems } = useCart();

  // total qty calculate
  const cartCount = cartItems.reduce(
    (total, item) => total + item.qty,
    0
  );
  const relaodPage = ()=> {
    window.location.href="/";
  }
  return (

    <div className='border-b-2 border-b-black fixed w-screen z-100 bg-white'>
      <section className='header my-2 w-11/12 mx-auto'>
        <div className='flex items-center justify-between'>

          <img src={Logo} alt="logo"
          onClick={relaodPage}
          className='cursor-pointer'
          />

          <nav className='flex gap-10 font-semibold text-lg'>
            <Link to="/">Home</Link>
            <Link to="/collections">Collections</Link>
            <Link to="/new">New</Link>
          </nav>

          <Search />

          <nav className='flex gap-10 text-xl'>
            <Link to="/favourite"><MdFavoriteBorder/></Link>
            <Link to="/cart">
           
            <div className='flex items-center relative gap-2 justify-center'>
             <LuShoppingCart/>
             {cartCount > 0 && (
        <span className="absolute -top-2 -right-2 bg-black text-white text-xs px-2 rounded-full">
          {cartCount}
        </span>
      )}
           </div>
           
            </Link>
            <Link to="/user"><CiUser/></Link>
          </nav>

        </div>
      </section>
    </div>
  );
};

export default Navbar;
