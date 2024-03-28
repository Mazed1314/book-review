import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";
const Root = () => {
  return (
    <div className=" md:px-12">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
