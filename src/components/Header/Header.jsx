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
          <ul className="site-header__nav-list">
            <NavLink
              to="/challenges"
              // Sets className of challenges nav button if isChallenges true/false
              className={({ isActive, isPending }) =>
                isPending
                  ? "site-header__nav-link"
                  : isActive
                  ? "site-header__nav-link site-header__nav-link--active"
                  : "site-header__nav-link"
              }

              // onClick={handleChallengesClick}
            >
              <li>Challenges</li>
            </NavLink>
            <NavLink
              to="/creations"
              // Sets className of creations nav button if isCreations true/false
              className={({ isActive, isPending }) =>
                isPending
                  ? "site-header__nav-link"
                  : isActive
                  ? "site-header__nav-link site-header__nav-link--active"
                  : "site-header__nav-link"
              }
              // onClick={handleCreationsClick}
            >
              <li>Creations</li>
            </NavLink>
            <NavLink
              to="/profile"
              // Sets className of profile nav button if isProfile true/false
              className={({ isActive, isPending }) =>
                isPending
                  ? "site-header__nav-link"
                  : isActive
                  ? "site-header__nav-link site-header__nav-link--active"
                  : "site-header__nav-link"
              }
              // onClick={handleProfileClick}
            >
              <li>Profile</li>
            </NavLink>
            <NavLink
              to="/create"
              // Sets className of create nav button if isCreate true/false
              className={({ isActive, isPending }) =>
                isPending
                  ? "site-header__nav-link"
                  : isActive
                  ? "site-header__nav-link site-header__nav-link--active"
                  : "site-header__nav-link"
              }
              // onClick={handleCreateClick}
            >
              <li>Create Something</li>
            </NavLink>
          </ul>
        </nav>
        <section className="site-header__profile"></section>
      </section>
    </section>
  );
}

export default Header;
