"use strict";

import withStyle from "easy-with-style";

import { Element } from "easy";

import { EMPTY_STRING } from "../constants";

class XMP extends Element {
  clear() {
    const html = EMPTY_STRING;

    this.html(html);
  }

  parentContext() {
    const xmpHTML = this.html.bind(this),  ///
          clearXMP = this.clear.bind(this); ///

    return ({
      xmpHTML,
      clearXMP
    });
  }

  static tagName = "xmp";
}

export default withStyle(XMP)`

  width: 100%;  
  border: 1px solid darkgrey;
  padding: 0.25rem;
  overflow: scroll;
  font-size: 1.2rem;
  line-height: 1.5rem;
  font-family: monospace;
  
`;
