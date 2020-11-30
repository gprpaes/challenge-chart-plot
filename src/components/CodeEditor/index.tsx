import React from "react";
import AceEditor from "react-ace";
 
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-twilight";
import "./styles.css"
 
interface ICodeEditor{
    mouseUp: any
    mouseMove: any
}

export default function CodeEditor(props: ICodeEditor) { 
return (
  <AceEditor
    width='100%'
    mode="javascript"
    theme="twilight"
    editorProps={{ $blockScrolling: false, onMouseUp: props.mouseUp, onMouseMove: props.mouseMove }}
  />
);

}