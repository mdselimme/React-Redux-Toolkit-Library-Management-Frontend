import { Link, NavLink } from "react-router";

const Navbar = () => {
  // Navbar All Link
  const NavbarLink = () => {
    return (
      <>
        <li className="text-balance text-[#023047] font-medium py-2 px-3">
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li className="text-balance text-[#023047] font-medium py-2 px-3">
          <NavLink to={"/allbooks"}>All Books</NavLink>
        </li>
        <li className="text-balance text-[#023047] font-medium py-2 px-3">
          <NavLink to={"/addbook"}>Add Book</NavLink>
        </li>
        <li className="text-balance text-[#023047] font-medium py-2 px-3">
          <NavLink to={"/borrowsummary"}>Borrow Summary</NavLink>
        </li>
      </>
    );
  };

  return (
    <header className="bg-base-100 py-2 shadow-sm">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <NavbarLink />
            </ul>
          </div>
          <Link to={"/"} className="text-4xl font-extrabold text-[#023047]">
            Shelf<span className="text-[#ffb703]">&</span>Swap
          </Link>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <NavbarLink />
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
