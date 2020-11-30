import React from "react"
import {VictoryLine} from "victory"
import "./styles.css"
const data = [
    {}
  ];

export default function Chart(){

    return  <VictoryLine data = {data}
      x="quarter"
      y="earnings"/>
}