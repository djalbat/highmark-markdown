"use strict";

import withStyle from "easy-with-style";  ///

import Textarea from "../textarea";

class CSSTextarea extends Textarea {
  setCSS(css) {
    const value = css;  ///

    this.setValue(value);
  }

  parentContext() {
    const setCSS = this.setCSS.bind(this);

    return ({
      setCSS
    });
  }

  static defaultProperties = {
    readOnly: true,
    className: "css",
    spellCheck: "false"
  };
}

export default withStyle(CSSTextarea)`

  height: 12rem;
  
`;
