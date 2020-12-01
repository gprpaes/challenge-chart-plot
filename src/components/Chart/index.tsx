import React from "react"
import {VictoryLine, VictoryContainer} from "victory"
import "./styles.css"
const data = [
    {}
  ];

export default function Chart(){

    return  (
        <VictoryContainer>
            <VictoryLine data = {data}
      x="quarter"
      y="earnings"/>
        </VictoryContainer>
    )
}