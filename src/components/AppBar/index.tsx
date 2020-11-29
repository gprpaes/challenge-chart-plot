import React, {ReactNode} from "react";
import "./styles.css";

interface IAppBar { 
  children?: ReactNode
}

export default function AppBar(props: IAppBar) {
  return <div className={"appBar"}>{props.children}</div>
}
