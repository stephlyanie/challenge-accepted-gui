import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ReactComponent as Logo } from "../../assets/logo/logoipsum-235.svg";
import "./Header.scss";

function Header() {
  // Variables that handle acive state of nav buttons
  const [isChallenges, setIsChallenges] = useState();
  const [isCreations, setIsCreations] = useState();
  const [isProfile, setIsProfile] = useState();
  const [isCreate, setIsCreate] = useState();

  useEffect(() => {
    const currentPath = window.location.pathname;

    // Sets className of active nav button on site load
    if (currentPath === "/challenges" || currentPath === "/") {
      // Sets challenges nav button active
      setIsChallenges(true);
      setIsCreations(false);
      setIsProfile(false);
      setIsCreate(false);
    } else if (currentPath === "/creations") {
      // Sets creations nav button active
      setIsChallenges(false);
      setIsCreations(true);
      setIsProfile(false);
      setIsCreate(false);
    } else if (currentPath === "/profile" || "/profile:id") {
      // Sets profile nav button active
      setIsChallenges(false);
      setIsCreations(false);
      setIsProfile(true);
      setIsCreate(false);
    } else if (currentPath === "/create") {
      // Sets create nav button active
      setIsChallenges(false);
      setIsCreations(false);
      setIsProfile(false);
      setIsCreate(true);
    }
  }, []);

  // Handles avtive nav button on click
  const handleChallengesClick = () => {
    // Sets challenges nav button active
    if (!isChallenges) {
      setIsChallenges(true);
      setIsCreations(false);
      setIsProfile(false);
      setIsCreate(false);
    }
  };

  const handleCreationsClick = () => {
    // Sets creations nav button active
    if (!isCreations) {
      setIsChallenges(false);
      setIsCreations(true);
      setIsProfile(false);
      setIsCreate(false);
    }
  };

  const handleProfileClick = () => {
    // Sets profile nav button active
    if (!isProfile) {
      setIsChallenges(false);
      setIsCreations(false);
      setIsProfile(true);
      setIsCreate(false);
    }
  };

  const handleCreateClick = () => {
    // Sets create nav button active
    if (!isCreate) {
      setIsChallenges(false);
      setIsCreations(false);
      setIsProfile(false);
      setIsCreate(true);
    }
  };

  return (
    <section className="site-header">
      <section className="site-header__logo">
        <Link to="/" onClick={handleChallengesClick}>
          <Logo />
        </Link>
      </section>
      <section className="site-header__nav">
        <nav className="site-header__nav-links">
          <ul className="site-header__nav-list">
            <Link
              to="/challenges"
              // Sets className of challenges nav button if isChallenges true/false
              className={
                isChallenges
                  ? "site-header__nav-link site-header__nav-link--active"
                  : "site-header__nav-link"
              }
              onClick={handleChallengesClick}
            >
              <li>Challenges</li>
            </Link>
            <Link
              to="/creations"
              // Sets className of creations nav button if isCreations true/false
              className={
                isCreations
                  ? "site-header__nav-link site-header__nav-link--active"
                  : "site-header__nav-link"
              }
              onClick={handleCreationsClick}
            >
              <li>Creations</li>
            </Link>
            <Link
              to="/profile"
              // Sets className of profile nav button if isProfile true/false
              className={
                isProfile
                  ? "site-header__nav-link site-header__nav-link--active"
                  : "site-header__nav-link"
              }
              onClick={handleProfileClick}
            >
              <li>Profile</li>
            </Link>
            <Link
              to="/create"
              // Sets className of create nav button if isCreate true/false
              className={
                isCreate
                  ? "site-header__nav-link site-header__nav-link--active"
                  : "site-header__nav-link"
              }
              onClick={handleCreateClick}
            >
              <li>Create Something</li>
            </Link>
          </ul>
        </nav>
        <section className="site-header__profile"></section>
      </section>
    </section>
  );
}

export default Header;
