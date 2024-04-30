import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [name, setName] = useState('')
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    setName(user)
  }, []);

  const logout = () => {
    localStorage.removeItem('user');
    window.location.href = "/login";
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-primary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            MERN Dashboard
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to={'/'}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={'/products'}>
                  Products
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to={"/contact"}
                  className="nav-link "
                  aria-disabled="true"
                >
                  Contact
                </Link>
              </li>
            </ul>
            <form class="d-flex" role="search">

              <li
                style={{ marginRight: "60px", listStyle: "none" }}
                className="nav-item dropdown"
              >
                <a
                  className="nav-link dropdown-toggle mx-3"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {name}
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a onClick={(e) => logout()} class="dropdown-item" href="#">
                      Logout
                    </a>
                  </li>
                </ul>
              </li>
            </form>

          </div>

        </div>
      </nav>
    </>
  );
}
