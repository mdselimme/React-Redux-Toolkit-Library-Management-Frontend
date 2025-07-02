import { Outlet } from "react-router";
import Navbar from "./components/Navbar/Navbar";
import { useGetAllBooksQuery } from "./redux/services/booksServices";

const App = () => {
  const { data, error, isLoading } = useGetAllBooksQuery();

  console.log(data, error, isLoading);

  return (
    <>
      <h1 className="bg-green-400">Hello From Library Management System</h1>
      <Navbar />
      <Outlet />
    </>
  );
};

export default App;
