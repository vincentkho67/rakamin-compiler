'use client';
import React, { useRef } from 'react';
import AssignmentEditor from '../../components/AssignmentEditor';
import postCode from '../../modules/fetching/code';

export default function Home() {
  const editorRef = useRef(null);

  const handleEditorDidMount = (editor, monaco) => {
    editorRef.current = editor;
  };

  const getEditorValue = () => {
    return editorRef.current.getValue()
  };

  return (
    <>
      <div>
        <AssignmentEditor onMount={handleEditorDidMount} />
      </div>
      <button onClick={postCode({getEditorValue})}>Get Editor Value</button>
    </>
  )
}
