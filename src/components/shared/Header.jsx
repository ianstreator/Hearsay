import { Link } from "react-router-dom";
import Logo from "../../Logo.svg";

function Header() {
  return (
    <div>
      <section className="hero is-primary is-small">
        <div className="hero-head">
          <nav className="navbar">
            <div className="container">
              <div className="navbar-brand">
                <Link to={"/"} className="navbar-item">
                  <img src={Logo} alt="Logo" />
                </Link>
                <span className="navbar-burger" data-target="navbarMenuHeroA">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              </div>
              <div id="navbarMenuHeroA" className="navbar-menu">
                <div className="navbar-end p-2">
                  <Link
                    to={"/polling"}
                    className="button is-primary is-inverted is-outlined is-medium m-2"
                  >
                    Polling
                  </Link>
                  <Link
                    to={"/personal"}
                    className="button is-primary is-inverted is-outlined is-medium m-2"
                  >
                    Personal
                  </Link>
                  <Link
                    to={"/communal"}
                    className="button is-primary is-inverted is-outlined is-medium m-2"
                  >
                    Communal
                  </Link>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </section>
    </div>
  );
}

export default Header;
