import { NavLink } from "react-router";

const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded py-16 px-10">
      <nav className="grid grid-flow-col gap-4">
        <NavLink
          to={"/"}
          className="link link-hover text-base font-medium text-[#023047]"
        >
          home
        </NavLink>
        <NavLink
          to={"/books"}
          className="link link-hover text-base font-medium text-[#023047]"
        >
          all books
        </NavLink>
        <NavLink
          to={"/create-book"}
          className="link link-hover text-base font-medium text-[#023047]"
        >
          add book
        </NavLink>
        <NavLink
          to={"/borrow-summary"}
          className="link link-hover text-base font-medium text-[#023047]"
        >
          borrow summary
        </NavLink>
      </nav>
      <nav>
        <div className="grid grid-flow-row gap-4">
          <h3 className="text-lg font-semibold text-[#023047]">Address:</h3>
          <p className="text-base font-medium text-[#219EBC]">
            Mirpur DOSH, Mirpur, Dhaka - 1210
          </p>
          <h3 className="text-lg font-semibold text-[#023047]">Email:</h3>
          <p className="text-base font-medium text-[#219EBC]">
            <a href="mailto:shelfand@swap.com">shelfand@swap.com</a>
          </p>
        </div>
      </nav>
      <aside>
        <p className="text-base font-medium text-[#023047]">
          Copyright © {new Date().getFullYear()} - All right reserved by
          Shelf&Swap Ltd.
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
