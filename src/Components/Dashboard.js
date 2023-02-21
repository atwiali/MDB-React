import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import Drag from "./Drag";
import Drop from "./Drop";
import { motion } from "framer-motion/dist/framer-motion";
import DashCharts from "./DashCharts";
import Draggable from "react-draggable";
import { useTranslation } from "react-i18next";
function Dashboard() {
  const location = useLocation();
  const [email, setEmail] = useState(
    new URLSearchParams(location.search).get("email")
  );
  const name = email ? email.substring(0, email.indexOf("@")) : "User";

  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    document.body.dir = i18n.dir();
  };
  function handleLang(e) {
    changeLanguage(e.target.value);
  }

  return (
    <motion.div
      initial={{ y: -800, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="dash-body"
    >
      <MDBContainer className="dash-charts">
        <h1 className="dash-h1">
          {t("Dashboard")} | {t("Welcome")} {name.toLocaleUpperCase()}
        </h1>
        <div className="row">
          <Draggable>
            {/*  <!-- Earnings (Monthly) Card Example --> */}
            <div className="col-xl-3 col-md-6 mb-4  ">
              <div className="card custom-border-left-blue shadow h-100 py-2 dash-card ">
                <div className="card-body ">
                  <div className="row no-gutters align-items-center ">
                    <div className="col mr-2 ">
                      <div className="text-xs font-weight-bold text-primary text-uppercase mb-1 dash-e">
                        {t("Earnings")} ({t("Monthly")})
                      </div>
                      <div className="h5 mb-0 font-weight-bold text-gray-800 dash-num ">
                        $40,000
                      </div>
                    </div>
                    <div className="col-auto">
                      <i className="fas fa-calendar fa-2x text-gray-300 dash-icon"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Draggable>
          <Draggable>
            {/*  <!-- Earnings (Monthly) Card Example --> */}
            <div className="col-xl-3 col-md-6 mb-4">
              <div className="card custom-border-left-green shadow h-100 py-2 dash-card">
                <div className="card-body">
                  <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                      <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                        {t("Earnings")} ({t("Annual")})
                      </div>
                      <div className="h5 mb-0 font-weight-bold text-gray-800 dash-num">
                        $215,000
                      </div>
                    </div>
                    <div className="col-auto">
                      <i className="fas fa-dollar-sign fa-2x text-gray-300 dash-icon"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Draggable>
          <Draggable>
            {/*  <!-- Earnings (Monthly) Card Example --> */}
            <div className="col-xl-3 col-md-6 mb-4">
              <div className="card custom-border-left-cyan shadow h-100 py-2 dash-card">
                <div className="card-body">
                  <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                      <div className="text-xs font-weight-bold text-info text-uppercase mb-1">
                        {t("Tasks")}
                      </div>
                      <div className="row no-gutters align-items-center">
                        <div className="col-auto">
                          <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800 dash-num">
                            &nbsp;&nbsp;80%
                          </div>
                        </div>
                        <div className="col">
                          <div className="progress progress-sm mr-2">
                            <div
                              style={{
                                width: "80%",
                              }}
                              className="progress-bar bg-info a1"
                              role="progressbar"
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-auto">
                      <i className="fas fa-clipboard-list fa-2x text-gray-300 dash-icon"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Draggable>
          <Draggable>
            {/*  <!-- Pending Requests Card Example --> */}

            <div className="col-xl-3 col-md-6 mb-4">
              <div className="card custom-border-left-orange shadow h-100 py-2 dash-card">
                <div className="card-body">
                  <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                      <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                        {t("Pending Requests")}
                      </div>
                      <div className="h5 mb-0 font-weight-bold text-gray-800 dash-num">
                        18
                      </div>
                    </div>
                    <div className="col-auto">
                      <i className="fas fa-comments fa-2x text-gray-300 dash-icon"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Draggable>
        </div>
        <MDBRow className="double-dash">
          <MDBCol className="dash-drag1">
            <Drag email={email} />
          </MDBCol>
          <MDBCol className="dash-drag2">
            <Drop />
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <DashCharts email={email} />
        </MDBRow>
      </MDBContainer>
      <br />
      <br />
    </motion.div>
  );
}

export default Dashboard;
