// Styles
import "./MenuDrawer.scss";

// React
import { useState } from "react";

// MUI
import { Button } from "@mui/base/Button";
import Drawer from "@mui/joy/Drawer";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import Divider from "@mui/joy/ListDivider";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import ListItemButton from "@mui/joy/ListItemButton";
import ModalClose from "@mui/joy/ModalClose";

// Icons
import { ReactComponent as Burger } from "../../assets/images/burger-menu.svg";
import { ReactComponent as Challenge } from "../../assets/images/challenge.svg";
import { ReactComponent as Create } from "../../assets/images/create.svg";
import { ReactComponent as Profile } from "../../assets/images/profile.svg";
import { ReactComponent as Settings } from "../../assets/images/settings.svg";
import { ReactComponent as Info } from "../../assets/images/info.svg";
import { ReactComponent as Logout } from "../../assets/images/logout.svg";

// Component for burger menu modal drawer pages
function MenuDrawer() {
  const [open, setOpen] = useState(false);

  const mainNav = [
    {
      name: "Challenges",
      icon: <Challenge className="menu__nav-item-icon" />,
    },
    {
      name: "Creations",
      icon: <Challenge className="menu__nav-item-icon" />,
    },
    {
      name: "Make Something",
      icon: <Create className="menu__nav-item-icon" />,
    },
    {
      name: "Profile",
      icon: <Profile className="menu__nav-item-icon" />,
    },
    {
      name: "Settings",
      icon: <Settings className="menu__nav-item-icon" />,
    },
  ];

  // Renders to page
  return (
    <section className="menu">
      <Button variant="outlined" color="neutral" onClick={() => setOpen(true)}>
        <Burger className="menu__icon" />
      </Button>
      <Drawer
        className="menu__drawer"
        open={open}
        onClose={() => setOpen(false)}
      >
        <ModalClose />
        <div className="menu__nav">
            <List component="nav" className="menu__top-nav" >
            {mainNav.map((nav) => (
                <ListItem key={nav.name} className="menu__nav-item">
                <ListItemButton
                    sx={{
                    padding: "1rem 0.75rem",
                    }}
                >
                    <ListItemDecorator>{nav.icon}</ListItemDecorator>
                    <p className="menu__nav-item-text">{nav.name}</p>
                </ListItemButton>
                </ListItem>
            ))}
            </List>
            <div className="menu__footer">
                <div className="menu__bottom-nav">
                    <List component="div" orientation="horizontal">
                    {["Terms", "Privacy"].map((text) => (
                        <ListItem key={text}>
                            <ListItemButton>{text}</ListItemButton>
                        </ListItem>
                    ))}
                    </List>
                    <List component="div" orientation="horizontal">
                    {[<Info className="menu__nav-item-icon" />, <Logout className="menu__nav-item-icon" />].map((text) => (
                        <ListItem key={text}>
                            <ListItemButton>{text}</ListItemButton>
                        </ListItem>
                    ))}
                    </List>
                </div>
                <div className="menu__copyright">
                        &copy; Stephanie Hall
                </div>
            </div>
        </div>
      </Drawer>
    </section>
  );
}

export default MenuDrawer;
