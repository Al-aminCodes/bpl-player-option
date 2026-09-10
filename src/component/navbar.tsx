import { AiFillDollarCircle } from "react-icons/ai";
import logo from "..//assets/logo.png";

interface ICoinType {
  coin: number;
}
const Navber = ({ coin }: ICoinType) => {
  return (
    <nav className="bg-red-100">
      <div className="flex justify-between items-center gap-3 container mx-auto">
        <img src={logo} alt="" />
        <ul className=" hidden md:flex items-center gap-3  ">
          <li>
            <a href="#" className="transition hover:text-green-500">
              {" "}
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="transition hover:text-green-500">
              About
            </a>
          </li>
          <li>
            <a href="#team" className="transition hover:text-green-500">
              {" "}
              Teams
            </a>
          </li>
        </ul>

        <h2 className=" text-2xl font-bold flex items-center gap-1">
          {" "}
          <AiFillDollarCircle />
          {coin}
        </h2>
      </div>
    </nav>
  );
};

export default Navber;
