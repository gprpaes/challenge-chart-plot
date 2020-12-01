import React from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-json5"
import "ace-builds/src-noconflict/theme-gruvbox"
import "./styles.css"
import json5 from "json5";
 
/* I'm not sure of this choice. Wrapping up the AceEditor component into another one seems
 like a dumb call. Passing the onChange function as a prop is not that different from just calling 
 AceEditor itself on the main component. However, as of now I think this fits my earlier decisions
 of using the Main component just as a Parent so state can be lifted up to, nevertheless, it's dumb*/
export default function CodeEditor(props: any) {
    
return (    
  <AceEditor
    width="100%"
    mode="json5"
    theme="gruvbox"
    fontSize={14}
    onChange={props.change}
  />
);

}