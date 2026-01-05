
import { useCart } from "./CartContext"
import Navbar from './Navbar'
import { MdDelete } from "react-icons/md"
import { GoPlus } from "react-icons/go"
import { FiMinus } from "react-icons/fi"
import Button from './Button'

const Cart = () => {
  const {
    cartItems,
    removeFromCart,
    increaseQty,
    decreaseQty
  } = useCart()

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.qty,
    0
  )

  return (
    <div>
      <Navbar />

      <div className="w-11/12 mx-auto pt-24">
        
        {/* Title */}
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold uppercase">
            Your Cart
          </h1>

          {cartItems.length === 0 && (
            <p className="mt-20 text-gray-400 text-xl">
              Your cart is empty
            </p>
          )}
        </div>

        {/* Cart Items */}
        {cartItems.map(item => (
          <div
            key={item.id}
            className="
              flex flex-col sm:flex-row
              gap-5
              border-b pb-6 mb-6
            "
          >
            {/* Image */}
            <img
              src={item.img}
              alt=""
              className="
                w-full sm:w-[120px]
                h-[200px] sm:h-[120px]
                object-cover
              "
            />

            {/* Info */}
            <div className="flex flex-col sm:flex-row justify-between w-full gap-6">
              
              {/* Title */}
              <div>
                <h2 className="text-lg sm:text-xl font-semibold">
                  {item.productName}
                </h2>
                <p className="text-gray-400 mt-2">
                  {item.style}
                </p>
              </div>

              {/* Quantity */}
              <div className="flex items-center gap-3">
                <FiMinus
                  onClick={() => decreaseQty(item.id)}
                  className="cursor-pointer bg-gray-300 w-9 h-8 p-1"
                />

                <span className="w-8 text-center">
                  {item.qty}
                </span>

                <GoPlus
                  onClick={() => increaseQty(item.id)}
                  className="cursor-pointer bg-gray-300 w-9 h-8 p-1"
                />
              </div>

              {/* Price */}
              <p className="font-semibold text-lg">
                ${(item.price * item.qty).toFixed(2)}
              </p>

              {/* Delete */}
              <button
                onClick={() => removeFromCart(item.id)}
                className="hover:text-red-500"
              >
                <MdDelete className="text-2xl" />
              </button>
            </div>
          </div>
        ))}

        {/* Subtotal */}
        {cartItems.length > 0 && (
          <div className="flex flex-col items-end mt-12 gap-8">
            <div className="
              w-full sm:w-[60%] lg:w-[25vw]
              border p-6
            ">
              <div className="flex justify-between text-xl font-bold">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
            </div>

            <Button text="Checkout" />
          </div>
        )}

      </div>
    </div>
  )
}

export default Cart
