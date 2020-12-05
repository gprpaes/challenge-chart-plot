import React from "react";
import {
  VictoryLine,
  VictoryContainer,
  VictoryChart,
  VictoryTheme,
} from "victory";
import "./styles.css";
const data = [{}];

interface IChart{
  mouseUp: any;
  mouseMove: any;
  data: JSON[]
}

export default function Chart(props: any) {
  return (
    <VictoryChart
      theme={VictoryTheme.material}
      height={300}
      width={800}
      events={[
        {
          childName: "all",
          target: "parent",
          eventHandlers: {
            onMouseUp: () => props.mouseUp,
            onMouseMove: () => props.mouseMove,
          },
        },
      ]}
    >
      <VictoryLine data={data} x="quarter" y="earnings" />
    </VictoryChart>
  );
}
