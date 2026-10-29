import { IoClose } from "react-icons/io5";
export default function SideBar({ showCart, setShowCart }) {
  return (
    <div
      className={`bg-white w-96 h-[100%] fixed right-0 top-0 shadow-2xl ${
        showCart
          ? "translate-x-0 duration-500"
          : "translate-x-full duration-500"
      } `}
    >
      <div className="flex justify-between items-center px-2">
        <p>Add Cart</p>
        <IoClose
          className="text-2xl cursor-pointer"
          onClick={() => setShowCart(false)}
        />
      </div>
    </div>
  );
}
