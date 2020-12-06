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
  options: Highcharts.Options
}



export default function Chart(props: IChart) {
  return (
    <div>
    <HighchartsReact reflow={false} highcharts={Highcharts} options={props.options} />
    </div>
    
  );
}
