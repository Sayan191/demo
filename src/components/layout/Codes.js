import React, { useState } from "react";
import { CopyBlock, dracula,monokaiSublime} from "react-code-blocks";
import { sample } from "./components";
import "./css/codes.css";

const Codes = () => {
  let languageDemo=sample["java"];
  let language="java";
  let lineNumbers=true;
  return (
    <div className="container mx-auto p-4">
      <div className="demo">
        <CopyBlock
          language={language}
          text={languageDemo}
          showLineNumbers={lineNumbers}
          theme={monokaiSublime}
          wrapLines={true}
          codeBlock
        />
      </div>
    </div>
    
  );
}

export default Codes;