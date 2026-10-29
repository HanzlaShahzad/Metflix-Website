import axios from "axios";
import { useEffect, useState } from "react";
import Categories from "../components/categories.jsx";
import { IoSearchSharp } from "react-icons/io5";
import { MdFastfood, MdShoppingBag } from "react-icons/md";
import SideBar from "../components/sideBar";

export default function Products() {
  const [data, setData] = useState([]);
  const [fil, setFil] = useState([]);
  const [search, setSearch] = useState("");
  const [showCart, setShowCart] = useState(false);

  const api = async () => {
    try {
      const res = await axios.get("https://dummyjson.com/recipes");
      setData(res.data.recipes);
      setFil(res.data.recipes);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    api();
  }, []);

  const handleFilter = (name) => {
    if (name === "All") {
      setData(fil);
    } else {
      let newData = fil.filter((item) => item.cuisine === name);
      setData(newData);
    }
  };

  const getData = data.filter((val) => {
    return val.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <>
      <div className="flex items-center justify-around mt-3">
        <div className="bg-white w-10 text-center  h-10 p-2 rounded-xs shadow-2xl hover:cursor-pointer">
          <MdFastfood className="size-5 text-green-500 " />
        </div>
        <div>
          <IoSearchSharp className="absolute mt-3 ms-2 text-green-500" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            name=""
            id=""
            className=" md:min-w-[600px] h-10 bg-white shadow-2xl rounded-xs ps-9"
            placeholder="Search items..."
          />
        </div>
        <div
          className="bg-white w-10 text-center ms-5 h-10 p-2.5 rounded-xs shadow-2xl hover:cursor-pointer"
          onClick={() => setShowCart(true)}
        >
          <span className="absolute top-3 font-semibold text-xs text-green-500 ms-1 ">
            0
          </span>
          <MdShoppingBag className="size-5 text-green-500" />
        </div>
      </div>
      <div>
        <ul className="flex flex-wrap justify-center gap-4 items-center mt-5">
          {Categories.map((curElem) => {
            return (
              <li
                id={curElem.id}
                key={curElem.id}
                onClick={() => handleFilter(curElem.name)}
                className="bg-white w-22 h-23 shadow-2xl text-green-600 p-1 rounded-xs hover:bg-green-200 duration-200 cursor-pointer transition-all"
              >
                <div className="text-4xl mt-1.5 ms-2">{curElem.icon}</div>
                <div className="text-[11px] ms-2.5 font-bold font-[sans-serif] text-gray-700 mt-[14px]">
                  {curElem.name}
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="shadow-2xl rounded-sm">
        <div className="mt-10 flex flex-wrap items-start justify-center gap-12 ">
          {getData && getData.length > 0 ? (
            getData.map((curElement) => (
              <div
                className="w-60 p-2 pb-5 rounded-sm bg-white hover:border-2 border-green-200"
                key={curElement.id}
                id={curElement.id}
              >
                <img src={curElement.image} alt="" />
                <h1 className="text-[19px] font-bold font-[serif] mt-2">
                  {curElement.name}
                </h1>
                <p className="mt-2 text-green-500 text-xs font-bold flex justify-between">
                  <span>RS {curElement.caloriesPerServing}/-</span>
                  <span>{curElement.cuisine}</span>
                </p>
                <button className="w-[95%] text-white  text-sm font-bold py-1 bg-green-400 rounded-xs flex justify-center mt-3 mx-auto hover:bg-green-300 cursor-pointer">
                  Add to cart
                </button>
              </div>
            ))
          ) : (
            <div className="flex justify-center items-center text-black">
              No product found
            </div>
          )}
        </div>
      </div>
      <SideBar showCart={showCart} setShowCart={setShowCart} />
    </>
  );
}
