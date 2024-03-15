"use strict";

import withStyle from "easy-with-style";

import { Element } from "easy";

class XMP extends Element {
  parentContext() {
    const xmpHTML = this.html.bind(this);  ///

    return ({
      xmpHTML
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
