import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import "./styles.css";

interface IChart {
  mouseUp: any;
  mouseMove: any;
  data: JSON[];
  options: Highcharts.Options
}



export default function Chart(props: IChart) {
  return (
    <div>
    <HighchartsReact highcharts={Highcharts} options={props.options}  updateArgs={[true, true, true]} />
    </div>
    
  );
}
