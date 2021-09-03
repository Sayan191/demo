import React, { useState } from "react";
import { CopyBlock, dracula,monokaiSublime} from "react-code-blocks";
import { codes } from "./codeblock";

const Codes_Ref = ({name,lang}) => {
  let languageDemo=codes[name];
  let language=lang;
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

export default Codes_Ref;