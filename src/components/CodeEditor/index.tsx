import React from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-json5";
import "./styles.css";


/* I'm not sure of this choice. Wrapping up the AceEditor component into another one seems
 like a dumb call. Passing the onChange function as a prop is not that different from just calling 
 AceEditor itself on the main component. However, as of now I think this fits my earlier decisions
 of using the Main component just as a Parent so state can be lifted up to, nevertheless, it's dumb*/
export default function CodeEditor(props: any) {
    
  return (
      <AceEditor
        width="100%"
        height={props.height}
        mode="json5"
        theme=""
        fontSize={16}
        onChange={props.change}
      />
      
  );
}
