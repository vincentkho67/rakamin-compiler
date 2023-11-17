'use client'

import Editor from "@monaco-editor/react"
import { useRef } from "react";

const AssignmentEditor = ({ onMount }) => {
  const editorRef = useRef(null);

  const handleEditorDidMount = (editor, monaco) => {
    editorRef.current = editor;
    onMount(editor, monaco);
  };

  return (
    <Editor
      height="50vh"
      width="100%"
      defaultLanguage="javascript"
      defaultValue="// some comment"
      theme="vs-dark"
      onMount={handleEditorDidMount}
    />
  );
};

export default AssignmentEditor;