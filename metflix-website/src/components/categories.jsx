import { TiThSmallOutline } from "react-icons/ti";
import { MdOutlineFreeBreakfast } from "react-icons/md";
import { TbSoup } from "react-icons/tb";
import { CiBowlNoodles } from "react-icons/ci";
import { MdOutlineFoodBank } from "react-icons/md";
import { GiFullPizza } from "react-icons/gi";
import { FaHamburger } from "react-icons/fa";

const Categories = [
  {
    id: 1,
    name: "All",
    icon: <TiThSmallOutline />,
  },
  {
    id: 2,
    name: "Pakistani",
    icon: <MdOutlineFreeBreakfast />,
  },
  {
    id: 3,
    name: "Italian",
    icon: <TbSoup />,
  },
  {
    id: 4,
    name: "Asian",
    icon: <CiBowlNoodles />,
  },
  {
    id: 5,
    name: "American",
    icon: <MdOutlineFoodBank />,
  },
  {
    id: 6,
    name: "Mexican",
    icon: <GiFullPizza />,
  },
  {
    id: 7,
    name: "Japanese",
    icon: <FaHamburger />,
  },
];

export default Categories;
