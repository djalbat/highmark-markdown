"use strict";

import withStyle from "easy-with-style";  ///

import ParseTreeTextarea from "../../textarea/parseTree";

class HTMLParseTreeTextarea extends ParseTreeTextarea {
  parentContext() {
    const showHTMLParseTreeTextarea = this.show.bind(this), ///
          hideHTMLParseTreeTextarea = this.hide.bind(this), ///
          clearHTMLParseTreeTextarea = this.clear.bind(this), ///
          updateHTMLParseTreeTextarea = this.update.bind(this); ///

    return ({
      showHTMLParseTreeTextarea,
      hideHTMLParseTreeTextarea,
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
  height: 48rem;
  
`;
