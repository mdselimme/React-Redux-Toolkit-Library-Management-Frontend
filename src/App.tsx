import { Outlet } from "react-router";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <>
      <h1 className="bg-green-400">Hello From Library Management System</h1>
      <Navbar />
      <Outlet />
    </>
  );
};

export default App;
