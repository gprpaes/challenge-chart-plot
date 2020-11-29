import React from "react";
import AceEditor from "react-ace";
 
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-twilight";
import "./styles.css"
 
export default function CodeEditor(newValue: any) {

return (
  <AceEditor
    width='100%'
    mode="javascript"
    theme="twilight"
    editorProps={{ $blockScrolling: false }}
  />
);

}