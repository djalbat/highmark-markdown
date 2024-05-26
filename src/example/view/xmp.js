"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

import { EMPTY_STRING } from "../constants";

class XMP extends Element {
  update(htmls) {
    htmls = htmls.join(EMPTY_STRING);

    const body = `<body>
${htmls}</body>`,
          html = body;

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

  border: 1px solid darkgrey;
  padding: 0.25rem;
  overflow: scroll;
  font-size: 1.2rem;
  line-height: 1.5rem;
  font-family: monospace;
  
`;
