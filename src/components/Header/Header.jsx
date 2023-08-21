import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ReactComponent as Logo } from "../../assets/logo/logoipsum-235.svg";
import "./Header.scss";

function Header() {
    return (
        <section className="site-header">
            <section className="site-header__logo">
                <Logo />
            </section>
            <section className="site-header__nav">
                <nav className="site-header__nav-links">
                    <ul className="site-header__nav-list">
                        <li className="site-header__nav-link site-header__nav-link--active">Challenges</li>
                        <li className="site-header__nav-link">Creations</li>
                    </ul>
                </nav>
                <section className="site-header__profile">

                </section>
            </section>
        </section>
    )
}

export default Header;
