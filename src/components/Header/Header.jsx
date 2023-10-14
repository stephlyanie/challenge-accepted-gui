// Styles
import "./Header.scss";

// React Router Dom
import { Link, useNavigate } from "react-router-dom";

// MUI
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import ListItemButton from "@mui/joy/ListItemButton";

// Icons
import { ReactComponent as Challenge } from "../../assets/images/challenge.svg";
import { ReactComponent as Create } from "../../assets/images/create.svg";
import { ReactComponent as Profile } from "../../assets/images/profile.svg";
import { ReactComponent as Settings } from "../../assets/images/settings.svg";
import { ReactComponent as Info } from "../../assets/images/info.svg";
import { ReactComponent as Logout } from "../../assets/images/logout.svg";

// Components
import { ReactComponent as Logo } from "../../assets/logo/logoipsum-235.svg";
import Search from "../Search/Search";

// Header component for all pages
function Header() {
  const navigate = useNavigate();

  const mainNav = [
    {
      name: "Challenges",
      icon: <Challenge className="menu__nav-item-icon" />,
      url: "/challenges",
    },
    {
      name: "Creations",
      icon: <Challenge className="menu__nav-item-icon" />,
      url: "/creations",
    },
    {
      name: "Make Something",
      icon: <Create className="menu__nav-item-icon" />,
      url: "/create",
    },
    {
      name: "Profile",
      icon: <Profile className="menu__nav-item-icon" />,
      url: "/profile",
    },
    {
      name: "Settings",
      icon: <Settings className="menu__nav-item-icon" />,
      url: "/profile/settings",
    },
  ];

  const footerNav = [
    {
      name: "Terms",
      url: "/terms",
    },
    {
      name: "Privacy",
      url: "/privacy",
    },
  ];

  const footerNavIcons = [
    {
      name: <Info className="menu__nav-bottom-icon" />,
      url: "/help",
    },
    {
      name: <Logout className="menu__nav-bottom-icon" />,
      url: "/logout",
    },
  ];

  //Renders to page
  return (
    <header className="site-header">
      {/* Logo Component */}
      <section className="site-header__logo">
        <Link to="/">
          <Logo />
        </Link>
      </section>

      {/* Nav Component */}
      {/* <section className="site-header__nav">
      <div className="menu__nav"> */}
      <Search classExtension={"tablet"} />
      <List component="nav" className="site-header__nav" disablePadding>
        {mainNav.map((nav) => (
          <ListItem key={nav.name} className="site-header__nav-item">
            <ListItemButton
              sx={{
                padding: "0.5rem 0",
              }}
              onClick={() => {
                navigate(`${nav.url}`);
              }}
            >
              <ListItemDecorator>{nav.icon}</ListItemDecorator>
              <p className="site-header__nav-item-text">{nav.name}</p>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      
      <div className="site-header__footer">
        {/* Footer Text */}
        <div className="site-header__footer-nav">
          <List component="div" orientation="horizontal" disablePadding>
            {footerNav.map((nav) => (
              <ListItem
                key={nav.name}
              >
                <ListItemButton
                  className="site-header__footer-nav-text"
                  sx={{
                    fontSize: "0.75rem",
                    padding: "0.5rem 0.5rem 0.5rem 0",
                  }}
                  onClick={() => {
                    navigate(`${nav.url}`);
                  }}
                >
                  {nav.name}
                </ListItemButton>
              </ListItem>
            ))}
          </List>

          {/* Footer Icons */}
          <List
            component="div"
            orientation="horizontal"
            className="site-header__footer-icons"
            sx={{
              flexGrow: 0,
            }}
            disablePadding
          >
            {footerNavIcons.map((nav) => (
              <ListItem key={nav.name}>
                <ListItemButton
                  onClick={() => {
                    navigate(`${nav.url}`);
                  }}
                  sx={{
                    padding: 0,
                  }}
                >
                  {nav.name}
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </div>
        <div className="site-header__footer-copyright">
          &copy; Stephanie Hall
        </div>
      </div>
      {/* </div>
      </section> */}
    </header>
  );
}

export default Header;
