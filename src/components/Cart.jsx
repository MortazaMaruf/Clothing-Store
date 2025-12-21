import { useCart } from "./CartContext";
import Navbar from './Navbar';
import { MdDelete } from "react-icons/md";
import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";
import Button from './Button';

const Cart = () => {
  const {
    cartItems,
    removeFromCart,
    increaseQty,
    decreaseQty
  } = useCart();

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );

  return (
    <div>
      <Navbar />

      <div className="w-11/12 mx-auto pt-20">
        <div className="flex items-center justify-center flex-col">
          <h1 className="text-5xl font-bold uppercase my-[5vh]">
            Your Cart
          </h1>

          {cartItems.length === 0 && (
            <span className="text-[10vh] mt-[10vh] text-gray-200">
              Your Cart is empty
            </span>
          )}
        </div>

        {cartItems.map(item => (
          <div key={item.id} className="flex gap-5 mb-6 border-b pb-4">
            <img
              src={item.img}
              className="w-[8vw] h-[8vw] object-cover"
            />

            <div className="flex justify-between w-full">
              <div>
                <h2 className="text-xl font-semibold">
                  {item.productName}
                </h2>
                <h2 className="text-gray-300 mt-5 text-lg">
                  {item.style}
                </h2>
              </div>

              {/* Quantity */}
              <div className="flex items-center gap-3">
                <FiMinus
                  onClick={() => decreaseQty(item.id)}
                  className="text-xl bg-gray-400 w-10 h-8 cursor-pointer"
                />

                <input
                  type="number"
                  value={item.qty}
                  readOnly
                  className="border outline-none text-center w-10 h-8"
                />

                <GoPlus
                  onClick={() => increaseQty(item.id)}
                  className="text-xl bg-gray-400 w-10 h-8 cursor-pointer"
                />
              </div>

              {/* Price auto update */}
              <p className="font-semibold">
                ${(item.price * item.qty).toFixed(2)}
              </p>

              <button
                onClick={() => removeFromCart(item.id)}
                className="hover:text-red-500"
              >
                <MdDelete className="cursor-pointer text-2xl" />
              </button>
            </div>
          </div>
        ))}

        {/* Subtotal */}
        {cartItems.length > 0 && (
          <div className="flex items-end flex-col mt-10">
            <div className="w-[25vw] border p-6">
              <div className="flex justify-between text-xl font-bold">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
            </div>
              <div className="mt-10">
          <Button text={"CheckOut"}/>
        </div>
          </div>
        )}
        
      </div>
    </div>
  );
};

export default Cart;
