'use client'

import Editor from "@monaco-editor/react"
import { useRef } from "react";
import { useCodeStore, useUserStore } from "../modules/store/Codes";
import { Box, Button, Text } from "@chakra-ui/react";
import { postCode, getUser } from "../modules/fetching/code"

const PlaygroundEditor = () => {
  const { code, setCode } = useCodeStore();
  const { user, setUser } = useUserStore();

  const editorRef = useRef(null);

  const handleEditorDidMount = (editor, monaco) => {
    editorRef.current = editor;
  };

  const getEditorValue = () => {
    return editorRef.current.getValue()
  };

  const handleUpdateCode = async () => {
    const updatedCode = await postCode(getEditorValue());
    setCode(updatedCode.data);
  };

  const handleGet = async () => {
    const res = await getUser();
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
        Run code
      </Button>
      <Button onClick={handleGet} >{user}</Button>
      <Box>
        {code}
      </Box>
    </>
  );
};

export default PlaygroundEditor;