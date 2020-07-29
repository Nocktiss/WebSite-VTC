import React from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { bool } from "prop-types";
// Utils
import {
  RT_HOME,
  RT_SERVICE,
  RT_PRICE,
  RT_RESERVATION,
  RT_CONTACT,
} from "../../../../../config/_constants";
// Custom Components
import { StyledMenu } from "./Menu.styled";

const Menu = ({ open, ...props }) => {
  const { t } = useTranslation();
  const isHidden = open ? true : false;
  const tabIndex = isHidden ? 0 : -1;

  return (
    <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
      <div style={{ marginRight: "50%" }}>
        <h1
          style={{
            fontSize: "30px",
            color: "white",
            paddingBottom: "25px",
          }}
        >
          {t("name_title")}
        </h1>
      </div>
      <NavLink to={RT_HOME} tabIndex={tabIndex}>
        <p>{t("menu.home")}</p>
      </NavLink>
      <NavLink to={RT_SERVICE} tabIndex={tabIndex}>
        <p>{t("menu.service")}</p>
      </NavLink>
      <NavLink to={RT_PRICE} tabIndex={tabIndex}>
        <p>{t("menu.price")}</p>
      </NavLink>
      <NavLink to={RT_RESERVATION} tabIndex={tabIndex}>
        <p>{t("menu.reservations")}</p>
      </NavLink>
      <NavLink to={RT_CONTACT} tabIndex={tabIndex}>
        <p>{t("menu.contact_us")}</p>
      </NavLink>
    </StyledMenu>
  );
};

Menu.propTypes = {
  open: bool.isRequired,
};

export default Menu;
