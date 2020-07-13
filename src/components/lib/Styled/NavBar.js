import React, { useState, useRef } from "react";
import { ThemeProvider } from "styled-components";
import { NavLink, Link } from "react-router-dom";
import FocusLock from "react-focus-lock";

import { RT_HOME, RT_PRICE, RT_SERVICE } from "../../../config/_constants";
import { useTranslation } from "react-i18next";

import styled from "styled-components";
import { Menu, Burger } from "./BurgerMenu";
import { GlobalStyles } from "../../../global";
import { theme } from "../../../theme";
// import { slide as Menu } from "react-burger-menu";

const Navigation = styled.header`
  width: 100%;
  border-bottom: 10px solid #222;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 100px 0;
  height: 140px;
  margin-bottom: 60px;
  background: #f8f8f8;

  .logo a {
    padding-top: 45px;
    display: flex;
    flex-direction: column;
    clear: both;
    padding-bottom: 30px;
    text-decoration: none;
  }

  a {
    color: #222;
    opacity: 0.55;
    transition: all 0.6s;
    color: #222;
    font-size: 1em;
  }
  a:hover {
    opacity: 1;
  }

  nav {
    ul {
      display: flex;
      justify-content: space-between;
      list-style: none;
    }
    li {
      margin: 0 15px;
      justify-content: space-between;
      font-size: 1em;
    }
    a {
      font-size: 1em;
      text-decoration: none;
      outline: none !important;
      .active {
        color: tomato;
      }
    }
    a.active {
      color: #222;
    }
  }
  .nav .ulMenu {
    margin: 0;
    padding: 0;
    list-style: none;
    overflow: hidden;
  }

  @media only screen and (max-width: 800px) {
    padding: 0px;
    .logo {
      padding-left: 20px;
      padding-top: 0px !important;
    }
  }

  @media (min-width: 768px) {
    .nav li {
      float: left;
    }
    .nav li {
      padding: 20px 30px;
    }
    .nav {
      clear: both;
      float: left;
      max-height: none;
      overflow: hidden;
    }
    .nav .burger {
      display: none;
    }
  }
  @media (max-width: 768px) {
    .ulMenu {
      display: none;
    }
  }
`;

const NavBar = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const node = useRef();
  const menuId = "main-menu";

  return (
    <ThemeProvider theme={theme}>
      <Navigation>
        <div className="logo">
          <Link to="/">
            <p>{t("name_title")}</p>
          </Link>
        </div>
        <nav className="nav">
          <ul className="ulMenu">
            <NavLink activeClassName="active" to={RT_HOME}>
              <li>{t("menu.home")}</li>
            </NavLink>
            <NavLink activeClassName="active" to={RT_SERVICE}>
              <li>{t("menu.service")}</li>
            </NavLink>
            <NavLink activeClassName="active" to={RT_PRICE}>
              <li>{t("menu.price")}</li>
            </NavLink>
          </ul>
          <GlobalStyles />
          <div ref={node}>
            <FocusLock className="burger" disabled={!open}>
              <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
              <Menu open={open} setOpen={setOpen} id={menuId} />
            </FocusLock>
          </div>
        </nav>
      </Navigation>
    </ThemeProvider>
  );
};

export default NavBar;
