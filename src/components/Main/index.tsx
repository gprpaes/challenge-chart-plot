import React, { useRef, useState, useEffect } from "react";
import "./styles.css";

export default function Main(props: any) {
  const refContainer = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(Number);
  const [currentHeight, setCurrentHeight] = useState(Number);
  const [shouldUpdateHeight, setShouldUpdateHeight] = useState(false);
  const [styleObject, setStyleObject] = useState({});
  const [mouseY, setMouseY] = useState(0);

  const handleMouseDown = () => setShouldUpdateHeight(true);
  const handleMouseUp = () => setShouldUpdateHeight(false);
  // TODO find the correct type for event
  const handleMouseMove = (event: any) => {
    if(shouldUpdateHeight){
      setMouseY(event.clientY)
      setHeight(mouseY) //FIX THIS
      setStyleObject({height: height})
    } 
  }

  useEffect(() => {
    setHeight(refContainer.current!.clientHeight);
    console.log(refContainer.current!);
  }, []);

  return (
    <div className="box">
      <div ref={refContainer} style={styleObject} className="resizable-stuff">
        <div className="stuff">
          <p onMouseDownCapture={handleMouseDown} onMouseUp={handleMouseUp} onMouseMove={handleMouseMove} style={{ alignSelf: "center", justifySelf: "center", cursor: "ns-resize" }}>
            PUTA QUE PARIU
          </p>
        </div>
       <p>Initial Height: {height}</p>
       <p>Update Height?: {shouldUpdateHeight.toString()}</p>
        <p>Coordinates: {mouseY}</p>
      </div>
    </div>
  );
}
