import React, { useRef, useState, useLayoutEffect } from "react";
import "./styles.css";

export default function Main(props: any) {
  const refContainer = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(Number);
  const [shouldUpdateHeight, setShouldUpdateHeight] = useState(false);
  const [styleObject, setStyleObject] = useState({});
  const [mouseY, setMouseY] = useState(0);

  const handleMouseDown = (event: any) => setShouldUpdateHeight(true);
  const handleMouseUp = () => setShouldUpdateHeight(false);
  // TODO find the correct type for event
  const handleMouseMove = (event: any) => {
    if (shouldUpdateHeight) {
      setMouseY(event.movementY);
      console.log("offset", mouseY);
      setHeight((prevHeight) => prevHeight - mouseY);
      setStyleObject({ height: height });
    }
  };

  useLayoutEffect(() => {
    setHeight(refContainer.current!.clientHeight);
    console.log(refContainer.current!);
  }, []);

  return (
    <div
      className="box"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <div ref={refContainer} style={styleObject} className="resizable-stuff">
        <div className="stuff" onMouseDown={handleMouseDown}>
          <div className="resize-button">
            <span className="resize-button-inside" />
          </div>
        </div>
      </div>
    </div>
  );
}
