import React, {ReactNode} from "react";
import "./styles.css";

/* Basically the 'top' value does nothing special at all. 
The only reason I  kept it was for readability purposes */

interface IAppBar {
  variant: "top" | "bottom"; 
  children?: ReactNode;
}

export default function AppBar(props: IAppBar) {
  return <div className={`appBar ${props.variant}`}>{props.children}</div>; // this is ugly :(
}
