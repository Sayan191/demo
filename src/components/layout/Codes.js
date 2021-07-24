import React, { useState } from "react";
import { CopyBlock, dracula } from "react-code-blocks";
import { sample } from "./components";
import "./css/codes.css";

const Codes = () => {
  let languageDemo=sample["cpp"];
  let language="cpp";
  let lineNumbers=false;
  return (
    <div className="container mx-auto p-4">
      <div className="demo">
        <CopyBlock
          language={language}
          text={languageDemo}
          showLineNumbers={lineNumbers}
          theme={dracula}
          wrapLines={true}
          codeBlock
        />
      </div>
    </div>
  );
}

export default Codes;