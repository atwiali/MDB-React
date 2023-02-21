import React from "react";
import { MDBRow, MDBCol, MDBCard } from "mdbreact";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import Draggable from "react-draggable";
import { motion } from "framer-motion/dist/framer-motion";
import { useTranslation } from "react-i18next";
const contries = {
  title: {
    text: "Social Media Accounts",
    align: "left",
  },
  xAxis: {
    categories: ["Accounts", "Facebook", "Youtube", "Instagram", "Linkedin"],
  },
  series: [
    {
      type: "column",
      name: "Twitter",
      color: " rgba(3,169,244)",
      data: [5437],
      showInLegend: false,
    },
    {
      type: "column",
      name: "Instagram",
      color: " rgba(255,84,63)",
      data: [4743],
      showInLegend: false,
    },
    {
      type: "column",
      name: "Facebook",
      color: " rgba(80,125,210)",
      data: [4200],
      showInLegend: false,
    },
    {
      type: "column",
      name: "Youtube",
      color: " rgba(255,0,0)",
      data: [3707],
      showInLegend: false,
    },
    {
      type: "column",
      name: "Linkedin",
      color: " rgba(72,117,180)",
      data: [3209],
      showInLegend: false,
    },
  ],
};
function Dash2() {
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
      initial={{ scale: 0.1 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5 }}
      className="dash2-body"
    >
      <h1 className="dash2-h1">{t("Accounts")}</h1>
      <MDBRow size="12" className="dash2">
        <Draggable>
          <MDBCol className="dash2-col">
            <a href="https://www.instagram.com/montymobile/">
              <img className="dash2-icon" src="/images/instagram.png" />
            </a>
            <h1 className="h1-dash2">720K</h1>
            <p className="p-dash2">{t("Followers")}</p>
          </MDBCol>
        </Draggable>
        <Draggable>
          <MDBCol className="dash2-col">
            <a href="https://www.youtube.com/user/MontyMobileHub">
              <img className="dash2-icon" src="/images/youtube.png" />
            </a>
            <h1 className="h1-dash2">590K</h1>
            <p className="p-dash2">{t("Followers")}</p>
          </MDBCol>
        </Draggable>
        <Draggable>
          <MDBCol className="dash2-col">
            <a href="https://www.facebook.com/MontyMobile/">
              <img className="dash2-icon" src="/images/facebook.png" />
            </a>
            <h1 className="h1-dash2">652K</h1>
            <p className="p-dash2">{t("Followers")}</p>
          </MDBCol>
        </Draggable>
        <Draggable>
          <MDBCol className="dash2-col">
            <a href="https://twitter.com/monty_mobile_">
              <img className="dash2-icon" src="/images/twitter.png" />
            </a>
            <h1 className="h1-dash2">920K</h1>

            <p className="p-dash2">{t("Followers")}</p>
          </MDBCol>
        </Draggable>
        <Draggable>
          <MDBCol className="dash2-col">
            <a href="https://www.linkedin.com/company/monty-mobile/">
              <img className="dash2-icon" src="/images/linkedin.png" />
            </a>
            <h1 className="h1-dash2">552K</h1>
            <p className="p-dash2">{t("Followers")}</p>
          </MDBCol>
        </Draggable>
      </MDBRow>
      <br /> <br />
      <MDBRow size="12" className="row-chart">
        <MDBCol size="7" className="border-charts">
          <MDBCard className="charts-card">
            <HighchartsReact highcharts={Highcharts} options={contries} />
          </MDBCard>
        </MDBCol>
        <MDBCol size="5" className="col-p">
          <MDBRow className="dash2-row2">
            <Draggable>
              <MDBCol size="4">
                <div className="dash2-col1">
                  <img
                    className="dash2-chart-icon"
                    src="/images/bar-chart.png"
                  />
                </div>
              </MDBCol>
            </Draggable>
            <Draggable>
              <MDBCol size="4">
                <div className="dash2-col2">
                  <img
                    className="dash2-chart-icon"
                    src="/images/bar-graph.png"
                  />
                </div>
              </MDBCol>
            </Draggable>
            <Draggable>
              <MDBCol size="4">
                <div className="dash2-col6">
                  <img className="dash2-chart-icon" src="/images/bar.png" />
                </div>
              </MDBCol>
            </Draggable>
          </MDBRow>
          <br />
          <MDBRow className="dash2-row3">
            <Draggable>
              <MDBCol size="4">
                <div className="dash2-col3">
                  <img className="dash2-chart-icon" src="/images/423786.png" />
                </div>
              </MDBCol>
            </Draggable>
            <Draggable>
              <MDBCol size="4">
                <div className="dash2-col4">
                  <img className="dash2-chart-icon" src="/images/183902.png" />
                </div>
              </MDBCol>
            </Draggable>
            <Draggable>
              <MDBCol size="4">
                <div className="dash2-col5">
                  <img className="dash2-chart-icon" src="/images/growth.png" />
                </div>
              </MDBCol>
            </Draggable>
          </MDBRow>
          <MDBRow className="dash2-row3">
            <Draggable>
              <MDBCol size="4">
                <div className="dash2-col7">
                  <img className="dash2-chart-icon" src="/images/pie.png" />
                </div>
              </MDBCol>
            </Draggable>
            <Draggable>
              <MDBCol size="4">
                <div className="dash2-col8">
                  <img className="dash2-chart-icon" src="/images/line.png" />
                </div>
              </MDBCol>
            </Draggable>
            <Draggable>
              <MDBCol size="4">
                <div className="dash2-col9">
                  <img className="dash2-chart-icon" src="/images/gro.png" />
                </div>
              </MDBCol>
            </Draggable>
          </MDBRow>
        </MDBCol>
      </MDBRow>
      <br /> <br />
      <MDBRow size="12">
        <MDBCol size="7">
          <div className="dash2-col-row1 ">
            <h1 className="dash2-row1-h1">{t("Monty Mobile")}</h1>
            <p className="dash2-row1-p">{t("dash2-p")}</p>
          </div>
        </MDBCol>
        <MDBCol size="5">
          <div className="dash2-col-row2 ">
            <h1 className="dash2-row2-h1"> {t("Why Monty Mobile ?")}</h1>
            <div className="dash2-row1-p">
              <p className="bold">
                {t("1)Quality service through customized solutions")}
              </p>
              {t("dash2-p2")}

              <p className="bold">{t("dash2-p3")}</p>
              {t("dash2-p4")}
            </div>
          </div>
        </MDBCol>
      </MDBRow>
      <br /> <br />
      <MDBRow
        className="map"
        style={{ backgroundImage: "url(/images/Vector.jpg)" }}
      >
        <MDBCol size="6" className="map-data">
          <h1 className="map-h1">{t("Global presence")}</h1>
          <br />
          <br />
          <p>{t("map-p")}</p>
          <br />
          <br />
          <div className="flex">
            <ul>
              <li> {t("Egypt")}</li>
              <li>{t("UK")}</li>
              <li>{t("Fiji")}</li>
              <li>{t("The Gambia")}</li>
              <li>{t("Ethiopia")}</li>
              <li>{t("Indonesia")}</li>
            </ul>
            <ul>
              <li>{t("Iraq")} </li>
              <li> {t("Nigeria")}</li>
              <li>{t("KSA")}</li>
              <li>{t("Vietnam")}</li>
              <li>{t("Philippines")} </li>
              <li>{t("Lebanon")}</li>
            </ul>
            <ul>
              <li>{t("Malaysia")}</li>
              <li>{t("Bangladesh")}</li>
              <li> {t("Pakistan")}</li>
              <li>{t("India")}</li>
              <li>{t("Dubai")}</li>
            </ul>
          </div>
        </MDBCol>
        <div className="overlay"></div>
      </MDBRow>
      <br /> <br />
    </motion.div>
  );
}
export default Dash2;
