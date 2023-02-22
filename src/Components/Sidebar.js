import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MDBIcon } from "mdbreact";
import { useTranslation } from "react-i18next";
import Draggable from "react-draggable";

function Sidebar() {
  const [sideBarClose, setSideBarClose] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();

  function handleSidebarOpen() {
    setSideBarClose(false);
  }

  function handleSidebarClose() {
    setSideBarClose(true);
  }

  function handleDarkMode() {
    setDarkMode((prev) => !prev);
    if (!darkMode) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  }

  if (darkMode) {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }

  useEffect(() => {
    if (localStorage.getItem("theme") == "dark") {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
  }, []);

  useEffect(() => {
    if (!sideBarClose) {
      document.body.classList.add("shift-right");
    } else {
      document.body.classList.remove("shift-right");
    }
  }, [sideBarClose]);

  function logoutBtn() {
    document.body.classList.remove("shift-right");
  }

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    document.body.dir = i18n.dir();
  };

  function handleLang(e) {
    changeLanguage(e.target.value);
  }

  return (
    <div className="sidebar-group">
      <Draggable>
        <select
          className="select-lang"
          onClick={handleLang}
          name="cars"
          id="cars"
        >
          <option value="" className="switcher">Switch</option>
          <option value="en">English</option>
          <option value="fr">French</option>
          <option value="sp">Spanish</option>
          <option value="ar" className="arabic">
            Arabic
          </option>
        </select>
      </Draggable>

      <nav
        onMouseEnter={handleSidebarOpen}
        onMouseLeave={handleSidebarClose}
        className={`sidebar ${sideBarClose && "close"}`}
      >
        <header>
          <div className="image-text">
            <div className="text logo-text">
              <span className="name">{t("Monty Mobile")}</span>
            </div>
          </div>
        </header>

        <div className="menu-bar">
          <div className="menu">
            <ul className="menu-links">
              <li className="nav-link">
                <Link className="a" to={"/Dashboard"}>
                  <i className="fa-solid fa-bars bx bx-home-alt icon"></i>
                  <span className="text nav-text">{t("Dashboard")}</span>
                </Link>
              </li>

              <li className="nav-link">
                <Link className="a" to={"/charts"}>
                  <i className="fa-solid fa-chart-simple bx bx-bar-chart-alt-2 icon"></i>

                  <span className="text nav-text">{t("Charts")}</span>
                </Link>
              </li>
              <li className="nav-link">
                <Link className="a" to={"/Table"}>
                  <i className="fa-solid fa-table bx bx-bell icon"></i>

                  <span className="text nav-text">{t("Table")}</span>
                </Link>
              </li>
              <li className="nav-link">
                <Link className="a" to={"/Dash2"}>
                  <MDBIcon icon="columns" className="icon" />
                  <span className="text nav-text">{t("Accounts")}</span>
                </Link>
              </li>
              <li className="nav-link">
                <Link className="a" to={"/contact"}>
                  <MDBIcon icon="comment-dots" className="icon" />
                  <span className="text nav-text">{t("Contact-us")}</span>
                </Link>
              </li>
              <li className="nav-link">
                <Link className="a" to={"/card"}>
                  <MDBIcon icon="id-card" className="icon" />
                  <span className="text nav-text">{t("Cards")}</span>
                </Link>
              </li>
            </ul>
          </div>

          <div className="bottom-content">
            <li className="nav-link">
              <Link onClick={logoutBtn} className="a" to={"/"}>
                <i className="fa-solid fa-arrow-up-from-bracket bx bx-log-out icon"></i>
                <span className="text nav-text">{t("Logout")}</span>
              </Link>
            </li>

            <li className="mode">
              <div className="sun-moon">
                <i className="bx bx-moon icon moon"></i>
                <i className="bx bx-sun icon sun"></i>
              </div>
              <span className="mode-text text">
                {darkMode ? t("Dark Mode") : t("Light Mode")}
              </span>

              <div className="toggle-switch" onClick={handleDarkMode}>
                <span className="switch"></span>
              </div>
            </li>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Sidebar;
