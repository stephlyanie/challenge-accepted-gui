import { Link, NavLink } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/logo/logoipsum-235.svg";
import "./Header.scss";

// Header component for all pages
function Header() {
  //Renders to page
  return (
    <section className="site-header">
      {/* Logo Component */}
      <section className="site-header__logo">
        <Link to="/">
          <Logo />
        </Link>
      </section>

      {/* Site Nav Component */}
      <section className="site-header__nav">
        <nav className="site-header__nav-links">
          {/* // Sets navLink classnames based on pending or active or neither */}

          {/* Challenges */}
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

          {/* Creations */}
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

          {/* Profile Placeholder to username = brains */}
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

          {/* Create something page allows to select creating a challenge or a creation */}
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

        {/* Placeholder for profile */}
        <section className="site-header__profile"></section>
      </section>
    </section>
  );
}

export default Header;
