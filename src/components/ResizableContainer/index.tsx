import React, {Ref} from "react";
import './styles.css'

interface IResizableContainer {
  mouseUp: any; // I'm ashamed of doing this
  mouseDown: any; // and this
  styleObject: Object;
  domRef: Ref<HTMLDivElement>;
}

export default function ResizableContainer(props: IResizableContainer) {
  return (
    <div className="box" onMouseUp={props.mouseUp}>
      <div
        ref={props.domRef}
        style={props.styleObject}
        className="resizable-stuff"
      >
        <div
          className="edge-container"
          onMouseDown={props.mouseDown}
          onMouseUp={props.mouseUp}
        >
          <div className="resize-button">
            <span className="resize-button-inside" />
          </div>
        </div>
      </div>
    </div>
  );
}
