import React, { MouseEvent } from "react";
import "./styles.css";

interface IButton{
  onClick: any
}

export default function Button(props: IButton) {
  return <button onClick={props.onClick}>GENERATE CHART</button>;
}
