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
            <a href=""> Home</a>
          </li>
          <li>
            <a href=""> Fixture</a>
          </li>
          <li>
            <a href=""> Teams</a>
          </li>
          <li>
            <a href="">Schedules</a>
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
