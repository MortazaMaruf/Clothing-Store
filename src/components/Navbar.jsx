
import Logo from '../Images/logo.png'
import { Link, NavLink } from "react-router-dom"
import { MdFavoriteBorder } from "react-icons/md"
import { LuShoppingCart } from "react-icons/lu"
import { CiUser } from "react-icons/ci"
import { IoMenu } from "react-icons/io5"
import Search from './Search'
import { useCart } from './CartContext'
import { useState } from 'react'

const Navbar = () => {
  const { cartItems } = useCart()
  const [open, setOpen] = useState(false)

  const cartCount = cartItems.reduce(
    (total, item) => total + item.qty,
    0
  )

  const isActive = ({ isActive }) =>
    isActive ? "text-gray-400" : ""

  return (
    <div className="border-b border-black fixed w-full z-[100] bg-white">
      <section className="w-11/12 mx-auto py-3">

        {/* TOP BAR */}
        <div className="flex items-center justify-between">

          {/* Left: Menu + Logo */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden text-2xl"
            >
              <IoMenu />
            </button>

            <img
              src={Logo}
              alt="logo"
              onClick={() => (window.location.href = "/")}
              className="cursor-pointer text-2xl"
            />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex gap-10 font-semibold text-lg">
            <NavLink to="/" className={isActive}>Home</NavLink>
            <NavLink to="/collections" className={isActive}>Collections</NavLink>
            <NavLink to="/new" className={isActive}>New</NavLink>
          </nav>

          {/* Desktop Search */}
          <div className="hidden lg:block">
            <Search />
          </div>

          {/* Icons */}
          <nav className="flex gap-6 text-xl">
            <Link to="/favourite"><MdFavoriteBorder /></Link>

            <Link to="/cart" className="relative">
              <LuShoppingCart />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-black text-white text-xs px-2 rounded-full">
                  {cartCount}
                </span>
              )}
            </Link>

            <Link to="/user"><CiUser /></Link>
          </nav>
        </div>

        {/* MOBILE MENU */}
        {open && (
          <div className="lg:hidden mt-5 space-y-5">

            <Search />

            <nav className="flex flex-col gap-4 font-semibold text-lg">
              <NavLink onClick={() => setOpen(false)} to="/" className={isActive}>Home</NavLink>
              <NavLink onClick={() => setOpen(false)} to="/collections" className={isActive}>Collections</NavLink>
              <NavLink onClick={() => setOpen(false)} to="/new" className={isActive}>New</NavLink>
            </nav>
          </div>
        )}

      </section>
    </div>
  )
}

export default Navbar
