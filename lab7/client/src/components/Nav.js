import React from "react";
import { useKeycloak } from "@react-keycloak/web";
import { Link } from "react-router-dom";

const Nav = () => {
  const { keycloak, initialized } = useKeycloak();

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">My Reac App</a>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products">
                Products
              </Link>
            </li>
            <li className="nav-item">
              {!keycloak.authenticated && (
                <button
                  type="button"
                  className="btn"
                  onClick={() => {
                    return keycloak.login()
                  }
                  }
                >
                  Login
                </button>
              )}

              {!!keycloak.authenticated && (
                <button
                  type="button"
                  className="btn "
                  onClick={() => keycloak.logout()}
                >
                  Logout ({keycloak.tokenParsed.preferred_username})
                </button>
              )}
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Nav;