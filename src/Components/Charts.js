import React, { Component } from "react";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import { MDBRow, MDBCol, MDBCard, MDBContainer } from "mdbreact";
import { motion } from "framer-motion/dist/framer-motion";
import { useTranslation } from "react-i18next";

const options = {
  title: {
    text: "U.S Solar Employment Growth by Job Category, 2010-2020 ",
    align: "left",
  },

  subtitle: {
    text: 'Source: <a href="https://irecusa.org/programs/solar-jobs-census/" target="_blank">IREC</a>',
    align: "left",
  },

  yAxis: {
    title: {
      text: "Number of Employees",
    },
  },

  xAxis: {
    accessibility: {
      rangeDescription: "Range: 2010 to 2020",
    },
  },

  legend: {
    layout: "vertical",
    align: "right",
    verticalAlign: "middle",
  },

  plotOptions: {
    series: {
      label: {
        connectorAllowed: false,
      },
      pointStart: 2010,
    },
  },

  series: [
    {
      name: "Installation & Developers",
      data: [
        43934, 48656, 65165, 81827, 112143, 142383, 171533, 165174, 155157,
        161454, 154610,
      ],
    },
    {
      name: "Manufacturing",
      data: [
        24916, 37941, 29742, 29851, 32490, 30282, 38121, 36885, 33726, 34243,
        31050,
      ],
    },
    {
      name: "Sales & Distribution",
      data: [
        11744, 30000, 16005, 19771, 20185, 24377, 32147, 30912, 29243, 29213,
        25663,
      ],
    },
    {
      name: "Operations & Maintenance",
      data: [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        11164,
        11218,
        10077,
      ],
    },
    {
      name: "Other",
      data: [
        21908, 5548, 8105, 11248, 8989, 11816, 18274, 17300, 13053, 11906,
        10073,
      ],
    },
  ],

  responsive: {
    rules: [
      {
        condition: {
          maxWidth: 500,
        },
        chartOptions: {
          legend: {
            layout: "horizontal",
            align: "center",
            verticalAlign: "bottom",
          },
        },
      },
    ],
  },
};

const values = {
  chart: {
    zoomType: "x",
  },
  title: {
    text: "USD to EUR exchange rate over time",
    align: "left",
  },
  subtitle: {
    text:
      document.ontouchstart === undefined
        ? "Click and drag in the plot area to zoom in"
        : "Pinch the chart to zoom in",
    align: "left",
  },
  xAxis: {
    type: "datetime",
  },
  yAxis: {
    title: {
      text: "Exchange rate",
    },
  },
  legend: {
    enabled: false,
  },
  plotOptions: {
    area: {
      fillColor: {
        linearGradient: {
          x1: 0,
          y1: 0,
          x2: 0,
          y2: 1,
        },
        stops: [
          [0, Highcharts.getOptions().colors[0]],
          [
            1,
            Highcharts.color(Highcharts.getOptions().colors[0])
              .setOpacity(0)
              .get("rgba"),
          ],
        ],
      },
      marker: {
        radius: 2,
      },
      lineWidth: 1,
      states: {
        hover: {
          lineWidth: 1,
        },
      },
      threshold: null,
    },
  },

  series: [
    {
      name: "Installation & Developers",
      data: [
        43934, 48656, 65165, 81827, 112143, 142383, 171533, 165174, 155157,
        161454, 154610,
      ],
    },
    {
      name: "Other",
      data: [
        21908, 5548, 8105, 11248, 8989, 11816, 18274, 17300, 13053, 11906,
        10073,
      ],
    },
  ],
};
const data = {

  accessibility: {
    enabled: false,
  },

  time: {
    useUTC: false,
  },

  rangeSelector: {
    buttons: [
      {
        count: 1,
        type: "minute",
        text: "1M",
      },
      {
        count: 5,
        type: "minute",
        text: "5M",
      },
      {
        type: "all",
        text: "All",
      },
    ],
    inputEnabled: false,
    selected: 0,
  },

  title: {
    text: "Live random data",
  },

  exporting: {
    enabled: false,
  },

  series: [
    {
      name: "Random data",
      data: (function () {
        var data = [],
          time = new Date().getTime(),
          i;

        for (i = -999; i <= 0; i += 1) {
          data.push([time + i * 1000, Math.round(Math.random() * 100)]);
        }
        return data;
      })(),
    },
  ],
};
const location = {
  chart: {
    type: "pie",
    options3d: {
      enabled: true,
      alpha: 45,
    },
  },
  title: {
    text: "Beijing 2022 gold medals by country",
    align: "left",
  },
  subtitle: {
    text: "3D donut in Highcharts",
    align: "left",
  },
  plotOptions: {
    pie: {
      innerSize: 100,
      depth: 45,
    },
  },
  series: [
    {
      name: "Medals",
      data: [
        ["Norway", 16],
        ["Germany", 12],
        ["USA", 8],
        ["Sweden", 8],
        ["Netherlands", 8],
        ["ROC", 6],
        ["Austria", 7],
        ["Canada", 4],
        ["Japan", 3],
      ],
    },
  ],
};
const chart = {
  chart: {
    plotBackgroundColor: null,
    plotBorderWidth: null,
    plotShadow: false,
    type: "pie",
  },
  title: {
    text: "Browser market shares in February, 2022",
    align: "left",
  },
  tooltip: {
    pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
  },
  accessibility: {
    point: {
      valueSuffix: "%",
    },
  },
  plotOptions: {
    pie: {
      allowPointSelect: true,
      cursor: "pointer",
      dataLabels: {
        enabled: true,
        format: "<b>{point.name}</b><br>{point.percentage:.1f} %",
        distance: -50,
        filter: {
          property: "percentage",
          operator: ">",
          value: 4,
        },
      },
    },
  },
  series: [
    {
      name: "Share",
      data: [
        { name: "Chrome", y: 74.03 },
        { name: "Edge", y: 12.66 },
        { name: "Firefox", y: 4.96 },
        { name: "Safari", y: 2.49 },
        { name: "Internet Explorer", y: 2.31 },
        { name: "Other", y: 3.398 },
      ],
    },
  ],
};
const average = {
  chart: {
    type: "column",
  },
  title: {
    text: "Monthly Average Rainfall",
  },
  subtitle: {
    text: "Source: WorldClimate.com",
  },
  xAxis: {
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    crosshair: true,
  },
  yAxis: {
    min: 0,
    title: {
      text: "Rainfall (mm)",
    },
  },
  tooltip: {
    headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
    pointFormat:
      '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
      '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
    footerFormat: "</table>",
    shared: true,
    useHTML: true,
  },
  plotOptions: {
    column: {
      pointPadding: 0.2,
      borderWidth: 0,
    },
  },
  series: [
    {
      name: "Tokyo",
      data: [
        49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1,
        95.6, 54.4,
      ],
    },
    {
      name: "New York",
      data: [
        83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6,
        92.3,
      ],
    },
    {
      name: "London",
      data: [
        48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3, 51.2,
      ],
    },
    {
      name: "Berlin",
      data: [
        42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8, 51.1,
      ],
    },
  ],
};
const branch = {
  chart: {
    type: "column",
  },
  title: {
    text: "Efficiency Optimization by Branch",
  },
  xAxis: {
    categories: ["Seattle HQ", "San Francisco", "Tokyo"],
  },
  yAxis: [
    {
      min: 0,
      title: {
        text: "Employees",
      },
    },
    {
      title: {
        text: "Profit (millions)",
      },
      opposite: true,
    },
  ],
  legend: {
    shadow: false,
  },
  tooltip: {
    shared: true,
  },
  plotOptions: {
    column: {
      grouping: false,
      shadow: false,
      borderWidth: 0,
    },
  },
  series: [
    {
      name: "Employees",
      color: "rgba(165,170,217,1)",
      data: [150, 73, 20],
      pointPadding: 0.3,
      pointPlacement: -0.2,
    },
    {
      name: "Employees Optimized",
      color: "rgba(126,86,134,.9)",
      data: [140, 90, 40],
      pointPadding: 0.4,
      pointPlacement: -0.2,
    },
    {
      name: "Profit",
      color: "rgba(248,161,63,1)",
      data: [183.6, 178.8, 198.5],
      tooltip: {
        valuePrefix: "$",
        valueSuffix: " M",
      },
      pointPadding: 0.3,
      pointPlacement: 0.2,
      yAxis: 1,
    },
    {
      name: "Profit Optimized",
      color: "rgba(186,60,61,.9)",
      data: [203.6, 198.8, 208.5],
      tooltip: {
        valuePrefix: "$",
        valueSuffix: " M",
      },
      pointPadding: 0.4,
      pointPlacement: 0.2,
      yAxis: 1,
    },
  ],
};
const season = {
  chart: {
    type: "bar",
  },
  title: {
    text: "UEFA CL top scorers by season",
  },
  xAxis: {
    categories: ["2020/21", "2019/20", "2018/19", "2017/18", "2016/17"],
  },
  yAxis: {
    min: 0,
    title: {
      text: "Goals",
    },
  },
  legend: {
    reversed: true,
  },
  plotOptions: {
    series: {
      stacking: "normal",
      dataLabels: {
        enabled: true,
      },
    },
  },
  series: [
    {
      name: "Cristiano Ronaldo",
      data: [4, 4, 6, 15, 12],
    },
    {
      name: "Lionel Messi",
      data: [5, 3, 12, 6, 11],
    },
    {
      name: "Robert Lewandowski",
      data: [5, 15, 8, 5, 8],
    },
  ],
};
const contries = {
  chart: {
    renderTo: "container",
    type: "column",
    options3d: {
      enabled: true,
      alpha: 15,
      beta: 15,
      depth: 50,
      viewDistance: 25,
    },
  },
  xAxis: {
    categories: [
      "Toyota",
      "BMW",
      "Volvo",
      "Audi",
      "Peugeot",
      "Mercedes-Benz",
      "Volkswagen",
      "Polestar",
      "Kia",
      "Nissan",
    ],
  },
  yAxis: {
    title: {
      enabled: false,
    },
  },
  tooltip: {
    headerFormat: "<b>{point.key}</b><br>",
    pointFormat: "Cars sold: {point.y}",
  },
  title: {
    text: "Sold passenger cars in Norway by brand, January 2021",
    align: "left",
  },
  subtitle: {
    text:
      "Source: " +
      '<a href="https://ofv.no/registreringsstatistikk"' +
      'target="_blank">OFV</a>',
    align: "left",
  },
  legend: {
    enabled: false,
  },
  plotOptions: {
    column: {
      depth: 25,
    },
  },
  series: [
    {
      data: [1318, 1073, 1060, 813, 775, 745, 537, 444, 416, 395],
      colorByPoint: true,
    },
  ],
};
function Charts() {
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
      className="charts"
    >
      <MDBContainer>
        <h1 className="chart-h1">{t("Charts")}</h1>
        <MDBRow>
          <MDBCol className="border-charts">
            <MDBCard className="charts-card">
              <HighchartsReact highcharts={Highcharts} options={options} />
            </MDBCard>
          </MDBCol>
        </MDBRow>
        <br />
        <br />
        <MDBRow>
          <MDBCol className="border-charts">
            <MDBCard className="charts-card">
              <HighchartsReact highcharts={Highcharts} options={average} />
            </MDBCard>
          </MDBCol>
        </MDBRow>
        <br />
        <br />
        <MDBRow>
          <MDBCol className="border-charts">
            <MDBCard className="charts-card">
              <HighchartsReact highcharts={Highcharts} options={branch} />
            </MDBCard>
          </MDBCol>
        </MDBRow>
        <br />
        <br />
        <MDBRow>
          <MDBCol className="border-charts">
            <MDBCard className="charts-card">
              <HighchartsReact highcharts={Highcharts} options={data} />
            </MDBCard>
          </MDBCol>
        </MDBRow>
        <br /> <br />
        <MDBRow className="double">
          <MDBCol size="6" className="border-charts">
            <MDBCard className="charts-card">
              <HighchartsReact highcharts={Highcharts} options={location} />
            </MDBCard>
          </MDBCol>
          <MDBCol className="border-charts" size="6">
            <MDBCard className="charts-card">
              <HighchartsReact highcharts={Highcharts} options={chart} />
            </MDBCard>
          </MDBCol>
        </MDBRow>
        <br /> <br />
        <MDBRow className="double">
          <MDBCol className="border-charts" size="6">
            <MDBCard className="charts-card">
              <HighchartsReact highcharts={Highcharts} options={options} />
            </MDBCard>
          </MDBCol>
          <MDBCol className="border-charts" size="6">
            <MDBCard className="charts-card">
              <HighchartsReact highcharts={Highcharts} options={values} />
            </MDBCard>
          </MDBCol>
        </MDBRow>
        <br />
        <br />
        <MDBRow className="double">
          <MDBCol className="border-charts" size="6">
            <MDBCard className="charts-card ">
              <HighchartsReact highcharts={Highcharts} options={season} />
            </MDBCard>
          </MDBCol>
          <MDBCol className="border-charts " size="6">
            <MDBCard className="charts-card">
              <HighchartsReact highcharts={Highcharts} options={contries} />
            </MDBCard>
          </MDBCol>
        </MDBRow>
        <br />
        <br />
      </MDBContainer>
    </motion.div>
  );
}

export default Charts;
