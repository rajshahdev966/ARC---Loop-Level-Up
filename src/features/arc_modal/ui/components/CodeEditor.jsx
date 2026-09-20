import { Editor } from "@monaco-editor/react";
import React from "react";

const CodeEditor = ({updateCurrentApproach, currentApproach}) => {
  return (
    <div className="h-[500px]">
      <Editor
        height="100%"
        language={currentApproach?.language}
        theme="vs-dark"
        value={currentApproach?.code}
        onChange={(value) => updateCurrentApproach({ code: value || "" })}
        options={{
          fontSize: 14,
          fontFamily: "JetBrains Mono, monospace",
          minimap: { enabled: true },
          padding: { top: 16 },
          smoothScrolling: true,
          cursorBlinking: "smooth",
          scrollBeyondLastLine: false,
          automaticLayout: true,
          lineNumbers: "on",
          roundedSelection: false,
        }}
      />
    </div>
  );
};

export default CodeEditor;
