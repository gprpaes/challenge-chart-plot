import React, { useRef, useState, useLayoutEffect, useEffect } from "react";
import AppBar from "../AppBar";
import Button from "../Button";
import CodeEditor from "../CodeEditor";
import ResizableContainer from "../ResizableContainer";
import Chart from "../Chart";
import { options } from "../Chart/options";
import JSON5 from "json5";
import { shazam } from "../Chart/utils";


export default function Main() {
  const refContainer = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(Number);
  const [shouldUpdateHeight, setShouldUpdateHeight] = useState(false);
  const [styleObject, setStyleObject] = useState({});
  const [mouseY, setMouseY] = useState(0);
  const [dataInput, setDataInput] = useState<String>();
  const [splittedData, setSplittedData] = useState<string[]>();
  const [parsedData, setParsedData] = useState<JSON[]>([]);
  const [chartOptions, setChartOptions] = useState<any>(options);
  const [shouldUpdateChart, setShouldUpdateChart] = useState<any>(false);

  const handleMouseDown = () => setShouldUpdateHeight(true);
  const handleMouseUp = () => setShouldUpdateHeight(false);

  const handleMouseMove = (event: React.MouseEvent) => {
    if (shouldUpdateHeight) {
      setMouseY(event.movementY);
      setHeight((prevHeight) => prevHeight - mouseY);
      setStyleObject({ height });
    }
  };

  const commitChart = () =>
    dataInput ? setSplittedData(dataInput!.split("\n")) : null;

  useEffect(() => {
    if (splittedData) {
      for (let line of splittedData)
        try {
          setParsedData((oldData) => [...oldData, JSON5.parse(line)]);
        } catch (err) {
          setParsedData([])
          throw (`Erro ao processar o evento ${err}`);
          
        }
    }
  }, [splittedData]);

  useEffect(() => {
    if (parsedData.length > 0)
      shazam(parsedData, options).then((ret) => setShouldUpdateChart(true));
  }, [parsedData]);

  useLayoutEffect(() => {
    setChartOptions(options);
    return function cleanup() {
      setShouldUpdateChart(false);
    };
  }, [shouldUpdateChart]);

  const handleDataInput = (value: String) => setDataInput(value);

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
        <Chart
          mouseMove={handleMouseMove}
          mouseUp={handleMouseUp}
          data={parsedData}
          options={chartOptions}
        />
      </ResizableContainer>
      <AppBar>
        <Button onClick={commitChart} />
      </AppBar>
    </div>
  );
}
