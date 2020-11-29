import React, { useRef, useState, useEffect } from "react";
import "./styles.css";
export default function Main(props: any) {
  const refContainer = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(Number);
  const [currentHeight, setCurrentHeight] = useState(Number);
  const [shouldUpdateHeight, setShouldUpdateHeight] = useState(false);
  const [styleObject, setStyleObject] = useState({});
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  useEffect(() => {
    setHeight(refContainer.current!.clientHeight);
    console.log(refContainer.current!);
  }, []);

  return (
    <div className="box">
      <div
        ref={refContainer}
        style={styleObject}
        onMouseDown={() => {
          setShouldUpdateHeight(true);
        }}
        onMouseUp={() => {
          setShouldUpdateHeight(false);
        }}
        onMouseMove={(e) => {
          if (shouldUpdateHeight) {
            setMouseX(e.clientX);
            setMouseY(e.clientY);
          }
        }}
        className="resizable-stuff"
      >
        <div className="stuff"><p style={{alignSelf: 'center', justifySelf: 'center'}}>PUTA QUE PARIU</p></div>
        Update Height?: {shouldUpdateHeight.toString()}
        Coordinates: {mouseX} {mouseY}
      </div>
    </div>
  );
}
