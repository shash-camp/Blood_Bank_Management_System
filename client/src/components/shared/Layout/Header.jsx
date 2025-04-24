// import React from "react";
// import { BiDonateBlood, BiUserCircle } from "react-icons/bi";
// import { useNavigate, useLocation, Link } from "react-router-dom";
// import { useSelector } from "react-redux";
// const Header = () => {
//   const { user } = useSelector((state) => state.auth);
//   const navigate = useNavigate();
//   const location = useLocation();
//   // logout handler
//   const handleLogout = () => {
//     localStorage.clear();
//     alert("Logout Successfully");
//     navigate("/login");
//   };

//   return (
//     <>
//       <nav className="navbar">
//         <div className="container-fluid ">
//           <div className="navbar-brand h1 ">
//             <BiDonateBlood color="red" /> Blood Bank App
//           </div>
//           <ul className="navbar-nav flex-row">
//             <li className="nav-item mx-3">
//               <p className="nav-link">
//                 <BiUserCircle /> Welcome{" "}
//                 {user?.name || user?.hospitalName || user?.organisationName}
//                 &nbsp;
//                 <span className="badge bg-secondary">{user?.role}</span>
//               </p>
//             </li>
//             {location.pathname === "/" ||
//             location.pathname === "/donar" ||
//             location.pathname === "/hospital" ? (
//               <li className="nav-item mx-3">
//                 <Link to="/analytics" className="nav-link">
//                   Analytics
//                 </Link>
//               </li>
//             ) : (
//               <li className="nav-item mx-3">
//                 <Link to="/" className="nav-link">
//                   Home
//                 </Link>
//               </li>
//             )}
//             <li className="nav-item mx-3">
//               <button className="btn btn-danger" onClick={handleLogout}>
//                 Logout
//               </button>
//             </li>
//           </ul>
//         </div>
//       </nav>
//     </>
//   );
// };

// export default Header;

import React from "react";
import { BiDonateBlood, BiUserCircle } from "react-icons/bi";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { useSelector } from "react-redux";// Assuming you have react-redux installed

const Header = () => {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    localStorage.clear();
    alert("Logout Successfully");
    navigate("/login");
  };

  const truncateName = (name) => {
    if (name && name.length > 15) {
      return name.substring(0, 15) + "...";
    }
    return name;
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand h1 text-light">
            <BiDonateBlood color="red" /> Blood Bank App {/* Changed from div to Link for navigation */}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto"> {/* ms-auto to align items to the right */}
              <li className="nav-item mx-2">
                <p className="nav-link">
                  <BiUserCircle /> Welcome{" "}
                  {truncateName(user?.name || user?.hospitalName || user?.organisationName)}
                  &nbsp;
                  <span className="badge bg-secondary">{user?.role}</span>
                </p>
              </li>
              {location.pathname === "/" ||
              location.pathname === "/donar" ||
              location.pathname === "/hospital" ? (
                <li className="nav-item mx-2">
                  <Link to="/analytics" className="nav-link">
                    Analytics
                  </Link>
                </li>
              ) : (
                <li className="nav-item mx-2">
                  <Link to="/" className="nav-link">
                    Home
                  </Link>
                </li>
              )}
              <li className="nav-item mx-2">
                <button className="btn btn-sm btn-light" onClick={handleLogout}>
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;