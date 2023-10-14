import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/logo/logoipsum-235.svg";
import "./MobileHeader.scss";

import MenuDrawer from "../Menus/MenuDrawer";


// Header component for all pages
function MobileHeader() {
  //Renders to page
  return (
    <header className="site-header">
      {/* Drawer Nav Component */}
      <section className="site-header__nav">
        <MenuDrawer />
      </section>

      {/* Logo Component */}
      <section className="site-header__logo">
        <Link to="/">
          <Logo />
        </Link>
      </section>
      
        {/* Placeholder for profile */}
        <img src={require("../../assets/images/PlaceholderLC.png")} alt="placeholder" className="site-header__profile" />
    </header>
  );
}

export default MobileHeader;