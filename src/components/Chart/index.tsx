import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import "./styles.css";
const data = [
  { quarter: 0, earnings: 1.4 },
  { quarter: 0, earnings: 1.4 },
  { quarter: 1, earnings: 1.5 },
  { quarter: 1, earnings: 1.5 },
];
const data2 = [
  { quarter: 0, earnings: 0.1 },
  { quarter: 0, earnings: 2.2 },
  { quarter: 1, earnings: 1.5 },
  { quarter: 1, earnings: 1.5 },
];
const data3 = [
  { quarter: 0, earnings: 0.1 },
  { quarter: 0, earnings: 1.1 },
  { quarter: 1, earnings: 1.5 },
  { quarter: 1, earnings: 1.2 },
];

interface IChart {
  mouseUp: any;
  mouseMove: any;
  data: JSON[];
}

const options: Highcharts.Options = {
  title: {
    text: "",
  },
  chart:{
    height: 320,
    className: "chart"
  },
  xAxis: {
    categories: [],
    tickmarkPlacement: "on",
  },
  yAxis: {
    labels: { enabled: false },
    title:{text: null}
  },

  plotOptions: {
    series: {
      label: {
        connectorAllowed: false,
      },
      marker: {
        symbol: "circle",
        radius: 7,
        lineWidth: 1,
      },
    },
  },
  credits: {
    enabled: false,
  },
  legend: {
    layout: "vertical",
    itemStyle: {
      textTransform: "capitalize",
    },
    align: "right",
    itemDistance: 100,
    verticalAlign: "top",
  },
  series: [
    {
      type: "line",
      data: [1, 2, 3],
    },
    {
      type: "line",
      data: [0, 1, 5],
    },
  ],
};

export default function Chart(props: IChart) {
  return (
    <div>
    <HighchartsReact reflow={false} highcharts={Highcharts} options={options} />
    </div>
    
  );
}
