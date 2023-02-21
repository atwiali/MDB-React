import { MDBCard } from "mdbreact";
import React, { useState, useEffect } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";

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
      // colors: pieColors,
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

const options = {
  title: {
    text: "U.S Solar Employment Growth by Job Category, 2010-2020",
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
  chart: {
    events: {
      load: function () {
        // set up the updating of the chart each second
        var series = this.series[0];
        setInterval(function () {
          var x = new Date().getTime(), // current time
            y = Math.round(Math.random() * 100);
          series.addPoint([x, y], true, true);
        }, 1000);
      },
    },
  },

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
        // generate an array of random data
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

const finalSpaceCharacters = [
  {
    id: "chart1",
    option: location,
  },
  {
    id: "chart2",
    option: chart,
  },
  {
    id: "chart3",
    option: options,
  },
  {
    id: "chart4",
    option: values,
  },
  {
    id: "chart5",
    option: data,
  },
  {
    id: "chart6",
    option: branch,
  },
];

function App({ email }) {
  const [characters, updateCharacters] = useState(finalSpaceCharacters);

  const [user, setUser] = useState({});
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem(email));
    if (data) {
      setUser(data);
      if (data?.charts && data.charts.length > 0) {
        updateCharacters(data.charts);
      }
    }
  }, []);
  function handleOnDragEnd(result) {
    if (!result.destination) return;

    const items = Array.from(characters);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    updateCharacters(items);

    user.charts = items;
    localStorage.setItem(email, JSON.stringify(user));
  }

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="note">
        {(provided) => (
          <div
            className="note-custom"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {characters.map((item, index) => {
              return (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided) => (
                    <div
                      className="note-border "
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      size="6"
                    >
                      <MDBCard>
                        <HighchartsReact
                          highcharts={Highcharts}
                          options={item.option}
                        />
                      </MDBCard>
                    </div>
                  )}
                </Draggable>
              );
            })}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}

export default App;
