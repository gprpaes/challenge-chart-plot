import React, { useRef, useState, useLayoutEffect, MouseEvent } from "react";
import AppBar from "../AppBar";
import Button from "../Button";
import CodeEditor from "../CodeEditor";
import ResizableContainer from "../ResizableContainer";
import Chart from "../Chart";

export default function Main() {
  const refContainer = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(Number);
  const [shouldUpdateHeight, setShouldUpdateHeight] = useState(false);
  const [styleObject, setStyleObject] = useState({});
  const [mouseY, setMouseY] = useState(0);
  const [dataInput, setDataInput] = useState<String>();
  const [parsedData, setParsedData] = useState<Object[]>();

  const handleMouseDown = () => setShouldUpdateHeight(true);
  const handleMouseUp = () => setShouldUpdateHeight(false);

  const handleMouseMove = (event: React.MouseEvent) => {
    if (shouldUpdateHeight) {
      setMouseY(event.movementY);
      setHeight((prevHeight) => prevHeight - mouseY);
      setStyleObject({ height: height });
    }
  };

  const commitChart = () =>{
    setParsedData(dataInput?.split('\n'))
    console.log(parsedData)
  }

  const handleDataInput = (value: String,  test: any) => {
    setDataInput(value);
  };

  useLayoutEffect(() => {
    setHeight(refContainer.current!.clientHeight);
  }, []);

  return (
    <div
      className="container"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      style={{ cursor: shouldUpdateHeight ? "ns-resize" : "default" }}
    >
      <AppBar>Guilherme's Challenge</AppBar>
      <CodeEditor change={handleDataInput} />
      <ResizableContainer
        domRef={refContainer}
        mouseDown={handleMouseDown}
        mouseUp={handleMouseUp}
        styleObject={styleObject}
      >
        <Chart mouseMove={handleMouseMove} mouseUp={handleMouseUp} />
      </ResizableContainer>
      <AppBar>
        <Button onClick={commitChart}/>
      </AppBar>
    </div>
  );
}
