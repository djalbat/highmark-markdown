"use strict";

import withStyle from "easy-with-style";  ///

import ParseTreeTextarea from "../../textarea/parseTree";

class HTMLParseTreeTextarea extends ParseTreeTextarea {
  parentContext() {
    const clearHTMLParseTreeTextarea = this.clear.bind(this), ///
          updateHTMLParseTreeTextarea = this.update.bind(this); ///

    return ({
      clearHTMLParseTreeTextarea,
      updateHTMLParseTreeTextarea
    });
  }

  static defaultProperties = {
    className: "html"
  };
}

export default withStyle(HTMLParseTreeTextarea)`

  margin-top: 1rem;
  height: 32rem;
  
`;
