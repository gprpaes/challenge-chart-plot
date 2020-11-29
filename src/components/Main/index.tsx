import React, { useRef, useState, useEffect } from "react";
import "./styles.css";

export default function Main(props: any) {
  const refContainer = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(Number);
  const [currentHeight, setCurrentHeight] = useState(Number);
  const [shouldUpdateHeight, setShouldUpdateHeight] = useState(false);
  const [styleObject, setStyleObject] = useState({});
  const [mouseY, setMouseY] = useState(0);

  const handleMouseDown = (event: any) => {setShouldUpdateHeight(true); setCurrentHeight(event.pageY)};
  const handleMouseUp = () => setShouldUpdateHeight(false);
  // TODO find the correct type for event
  const handleMouseMove = (event: any) => {
    setMouseY(event.movementY)
    if(shouldUpdateHeight){
      console.log('offsset', mouseY)
      setCurrentHeight(prevHeight => prevHeight - mouseY)
      setStyleObject({height: currentHeight })
    } 
  }

  useEffect(() => {
    setHeight(refContainer.current!.clientHeight);
    console.log(refContainer.current!);
  }, []);

  return (
    <div className="box" onMouseMove={handleMouseMove} onMouseUp={handleMouseUp} >
      <div ref={refContainer} style={styleObject} className="resizable-stuff" >
        <div className="stuff" onMouseDown={handleMouseDown}>
          <button className="test"  style={{ alignSelf: "center", justifySelf: "center"}} >
            PUTA QUE PARIU
          </button>
        </div>
       <p>Initial Height: {height}</p>
       <p>Update Height?: {shouldUpdateHeight.toString()}</p>
        <p>Coordinates: {mouseY}</p>
      </div>
    </div>
  );
}

