import React, { useRef, useState, useEffect } from "react";
import "./styles.css";
export default function Main(props: any) {
  const refContainer = useRef<HTMLDivElement>(null)
  const [height, setHeight] = useState<Number>()

  useEffect(()=>{
    setHeight(refContainer.current!.clientHeight)
    console.log(refContainer.current!.clientHeight)
  }, [])

return <div ref={refContainer}className="box" style={{ height: props.color }}>Current Height:{height}px</div>;
}
