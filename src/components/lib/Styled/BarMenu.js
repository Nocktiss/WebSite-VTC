import React, { useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ThemeProvider } from "styled-components";
import styled from "styled-components";
// Utils
import {
  RT_HOME,
  RT_PRICE,
  RT_SERVICE,
  RT_RESERVATION,
  RT_CONTACT,
} from "../../../config/_constants";
// Custom components
import { theme } from "../../../theme";
import { Navbar } from "react-bootstrap";

const styles = {
  navBack: {
    backgroundColor: "#222",
    borderRadius: "0px 40px 0px 40px",
    padding: "3px",
  },
};

const Navigation = styled.header`
  width: 100%;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 0;

  a {
    transition: all 0.6s;
    color: white;
    font-size: 1em;
    font-weight: bold;
    letter-spacing: 0.2rem;
  }
  a:hover {
    opacity: 1;
    color: #d4af37;
  }
  }

  nav {
    ul {
      display: flex;
      justify-content: space-between;
      list-style: none;
    }
    li {
      margin: 0 5px;
      justify-content: space-between;
      font-size: 1em;
    }
    a {
      font-size: 1em;
      text-decoration: none;
      outline: none !important;
    }
  }
  .nav .ulMenu {
    margin: 0;
    padding: 0;
    list-style: none;
    overflow: hidden;
  }

  @media (min-width: 845px) {
    .nav li {
      float: left;
    }
    .nav li {
      padding: 15px 25px;
    }
    .nav {
      clear: both;
      float: left;
      max-height: none;
      overflow: hidden;
    }
  }
  @media (max-width: 857px) {
    .ulMenu, .nav {
      display: none;
    }
  }
`;

const BarMenu = () => {
  const { t } = useTranslation();

  return (
    <ThemeProvider theme={theme}>
      <Navigation>
        <nav className="nav">
          <Navbar style={styles.navBack} variant="dark">
            <ul className="ulMenu">
              <NavLink to={RT_HOME}>
                <li>{t("menu.home")}</li>
              </NavLink>
              <NavLink to={RT_SERVICE}>
                <li>{t("menu.service")}</li>
              </NavLink>
              <NavLink to={RT_PRICE}>
                <li>{t("menu.price")}</li>
              </NavLink>
              <NavLink to={RT_RESERVATION}>
                <li>{t("menu.reservations")}</li>
              </NavLink>
              <NavLink to={RT_CONTACT}>
                <li>{t("menu.contact_us")}</li>
              </NavLink>
            </ul>
          </Navbar>
        </nav>
      </Navigation>
    </ThemeProvider>
  );
};

export default BarMenu;
