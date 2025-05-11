"use strict";

import withStyle from "easy-with-style";  ///

import Textarea from "../textarea";
import {EMPTY_STRING} from "../../constants";

class CSSTextarea extends Textarea {
  setCSS(css) {
    const value = css;  ///

    this.setValue(value);
  }

  clearCSS() {
    const css = EMPTY_STRING;

    this.setCSS(css);
  }

  parentContext() {
    const setCSS = this.setCSS.bind(this),
          clearCSS = this.clearCSS.bind(this);

    return ({
      setCSS,
      clearCSS
    });
  }

  static defaultProperties = {
    readOnly: true,
    className: "css",
    spellCheck: "false"
  };
}

export default withStyle(CSSTextarea)`

  height: 100%;
  
`;
