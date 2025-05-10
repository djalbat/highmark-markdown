"use strict";

import withStyle from "easy-with-style";  ///

import ParseTreeTextarea from "../../textarea/parseTree";

class CSSParseTreeTextarea extends ParseTreeTextarea {
  parentContext() {
    const showCSSParseTreeTextarea = this.show.bind(this), ///
          hideCSSParseTreeTextarea = this.hide.bind(this), ///
          clearCSSParseTreeTextarea = this.clear.bind(this), ///
          updateCSSParseTreeTextarea = this.update.bind(this); ///

    return ({
      showCSSParseTreeTextarea,
      hideCSSParseTreeTextarea,
      clearCSSParseTreeTextarea,
      updateCSSParseTreeTextarea
    });
  }

  static defaultProperties = {
    className: "css"
  };
}

export default withStyle(CSSParseTreeTextarea)`

  margin-top: 1rem;
  height: 48rem;
  
`;
