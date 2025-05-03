"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

import { EMPTY_STRING } from "../constants";

class XMP extends Element {
  update(divisionHTMLNode, context) {
    const indent = null,
          html = divisionHTMLNode.asHTML(indent, context);

    this.html(html);
  }

  clear() {
    const html = EMPTY_STRING;

    this.html(html);
  }

  parentContext() {
    const clearXMP = this.clear.bind(this), ///
          updateXMP = this.update.bind(this);  ///

    return ({
      clearXMP,
      updateXMP
    });
  }

  static tagName = "xmp";
}

export default withStyle(XMP)`

  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  font-size: 1.2rem;
  line-height: 1.5rem;
  font-family: monospace;
  
`;
