import React, { useRef, useState, useLayoutEffect} from "react";
import AppBar from "../AppBar";
import Button from "../Button";
import CodeEditor from "../CodeEditor";
import ResizableContainer from "../ResizableContainer";


export default function Main() {
  const refContainer = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(Number);
  const [shouldUpdateHeight, setShouldUpdateHeight] = useState(false);
  const [styleObject, setStyleObject] = useState({});
  const [mouseY, setMouseY] = useState(0);

  const handleMouseDown = () => setShouldUpdateHeight(true);
  const handleMouseUp = () => setShouldUpdateHeight(false);
  
  // Well, this sucks. Shouldn't be "any" no need using Typescript if I'm doing this....
  const handleMouseMove = (event: any) => {
    if (shouldUpdateHeight) {
      setMouseY(event.movementY);
      setHeight((prevHeight) => prevHeight - mouseY);
      setStyleObject({ height: height });
    }
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
      <CodeEditor mouseMove={handleMouseMove}
      mouseUp={handleMouseUp}/>
      <ResizableContainer domRef={refContainer} mouseDown={handleMouseDown} mouseUp={handleMouseUp} styleObject={styleObject} />
      <AppBar>
        <Button />
      </AppBar>
    </div>
  );
}
