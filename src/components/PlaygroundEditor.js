'use client'

import Editor from "@monaco-editor/react"
import { useRef } from "react";
import { useCodeStore, useUserStore } from "../modules/store/Codes";
import { useState, useEffect } from "react";
import { Button, Text } from "@chakra-ui/react";
import { postCode, getUser } from "../modules/fetching/code"

const PlaygroundEditor = () => {
  const { code, setCode } = useCodeStore();
  const { user, setUser } = useUserStore();

  const [isLoading, setIsLoading] = useState(true);
  const editorRef = useRef(null);

  const handleEditorDidMount = (editor, monaco) => {
    editorRef.current = editor;
  };

  const getEditorValue = () => {
    return editorRef.current.getValue()
  };

  const handleUpdateCode = async () => {
    const updatedCode = await postCode(getEditorValue());
    console.log(updatedCode.data)
    setCode(updatedCode.data);
    setIsLoading(false);
  };

  const handleGet = async () => {
    const res = await getUser();
    console.log(res)
    setUser(res);
  }
    

  return (
    <>
      <Editor
        height="50vh"
        width="100%"
        defaultLanguage="javascript"
        defaultValue={code}
        theme="vs-dark"
        onMount={handleEditorDidMount}
      />
      <Button onClick={handleUpdateCode}>
        {code && code.length > 0 && code.map((li) => (
          <span key={li}>{li}</span>
        ))}
      </Button>
      <Button onClick={handleGet} >{user}</Button>
    </>
  );
};

export default PlaygroundEditor;