import { Link } from "react-router";

const NotFound = () => {
  return (
    <div>
      <h1>404 Not found page</h1>
      <Link to={"/"}>Go to Home</Link>
    </div>
  );
};

export default NotFound;
