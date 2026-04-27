import { Link } from "react-router-dom";
import logo from "../assets/images/National-Honor-Society-Logo.png";

const NavBar = ({ page }) => {
  return (
    <div className="border-bottom shadow-sm">
      <div className="d-flex justify-content-between align-items-center px-3">
        <div className="d-flex align-items-center gap-1">
          <img src={logo} style={{ height: "50px" }} />
          <h1 className="m-0">NHS</h1>
        </div>
        <ul className="nav nav-tabs border-0 ms-auto">
          <li className="nav-item">
            {page === "home" ? (
              <Link
                to="/"
                className="nav-link active py-3 px-4"
                aria-current="page"
              >
                Home
              </Link>
            ) : (
              <Link to="/" className="nav-link py-3 px-4">
                Home
              </Link>
            )}
          </li>
          <li className="nav-item">
            {page === "membership" ? (
              <Link
                to="/membership"
                className="nav-link active py-3 px-4"
                aria-current="page"
              >
                Membership
              </Link>
            ) : (
              <Link to="/membership" className="nav-link py-3 px-4">
                Membership
              </Link>
            )}
          </li>
          <li className="nav-item">
            {page === "calender" ? (
              <Link
                to="/calender"
                className="nav-link active py-3 px-4"
                aria-current="page"
              >
                Calender
              </Link>
            ) : (
              <Link to="/calender" className="nav-link py-3 px-4">
                Calender
              </Link>
            )}
          </li>
          <li className="nav-item">
            {page === "documents" ? (
              <Link
                to="/documents"
                className="nav-link active py-3 px-4"
                aria-current="page"
              >
                Documents
              </Link>
            ) : (
              <Link to="/documents" className="nav-link py-3 px-4">
                Documents
              </Link>
            )}
          </li>
          <li className="nav-item">
            {page === "faqs" ? (
              <Link
                to="/faqs"
                className="nav-link active py-3 px-4"
                aria-current="page"
              >
                FAQs
              </Link>
            ) : (
              <Link to="/faqs" className="nav-link py-3 px-4">
                FAQs
              </Link>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
