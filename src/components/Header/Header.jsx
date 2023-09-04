import { Link, NavLink } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/logo/logoipsum-235.svg";
import "./Header.scss";

function Header() {
  return (
    <section className="site-header">
      <section className="site-header__logo">
        <Link to="/">
          <Logo />
        </Link>
      </section>
      <section className="site-header__nav">
        <nav className="site-header__nav-links">
            <NavLink
              to="/challenges"
              className={({ isActive, isPending }) =>
                isPending
                  ? "site-header__nav-link"
                  : isActive
                  ? "site-header__nav-link site-header__nav-link--active"
                  : "site-header__nav-link"
              }
            >
              Challenges
            </NavLink>
            <NavLink
              to="/creations"
              className={({ isActive, isPending }) =>
                isPending
                  ? "site-header__nav-link"
                  : isActive
                  ? "site-header__nav-link site-header__nav-link--active"
                  : "site-header__nav-link"
              }
            >
              Creations
            </NavLink>
            <NavLink
              to="/profile"
              className={({ isActive, isPending }) =>
                isPending
                  ? "site-header__nav-link"
                  : isActive
                  ? "site-header__nav-link site-header__nav-link--active"
                  : "site-header__nav-link"
              }
            >
              Profile
            </NavLink>
            <NavLink
              to="/create"
              className={({ isActive, isPending }) =>
                isPending
                  ? "site-header__nav-link"
                  : isActive
                  ? "site-header__nav-link site-header__nav-link--active"
                  : "site-header__nav-link"
              }
            >
              Create Something
            </NavLink>
        </nav>
        <section className="site-header__profile"></section>
      </section>
    </section>
  );
}

export default Header;
