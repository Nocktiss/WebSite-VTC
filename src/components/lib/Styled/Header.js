import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ThemeProvider } from "styled-components";
import styled from "styled-components";
import FocusLock from "react-focus-lock";
// Custom components
import { Menu, Burger } from "./BurgerMenu";
import { GlobalStyles } from "../../../global";
import { theme } from "../../../theme";
import { useOnClickOutside } from "./BurgerMenu/hooks/hooks";

const Navigation = styled.header`
  width: 100%;
  border-bottom: 8px solid #222;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 100px 0;
  background: ${({ theme }) => theme.primaryDark};

  .logo h1 {
    padding-top: 45px;
    display: flex;
    flex-direction: column;
    padding-bottom: 45px;
    text-decoration: none;
    font-weight: bold;
    font-size: 2.5em;
    color: ${({ theme }) => theme.primaryWhite};
  }

  a {
    color: #222;
    opacity: 0.55;
    transition: all 0.6s;
    color: #222;
    font-size: 1em;
    outline: none !important;
  }
  a:hover {
    opacity: 1;
    text-decoration: none;
    outline: none !important;
  }
  .header {
    margin: 0;
    padding: 0;
    list-style: none;
    overflow: hidden;
  }

  @media only screen and (max-width: 800px) {
    padding: 0px;
    .logo {
      padding-left: 0;
      padding-top: 0px !important;
    }
  }

  @media (min-width: 857px) {
    .header {
      float: left;
    }
    .header {
      clear: both;
      float: left;
      max-height: none;
      overflow: hidden;
    }
    .header .burger {
      display: none;
    }
  }
`;

const Header = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const node = useRef();
  const menuId = "main-menu";

  useOnClickOutside(node, () => setOpen(false));

  return (
    <ThemeProvider theme={theme}>
      <Navigation>
        <div className="logo">
          <Link to="/">
            <h1>{t("name_title")}</h1>
          </Link>
        </div>
        <nav className="header">
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

export default Header;
