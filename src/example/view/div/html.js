"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

import XMP from "../xmp";

class HTMLDiv extends Element {
  childElements() {
    return (

      <XMP/>

    );
  }

  static tagName = "div";

  static defaultProperties = {
    className: "html"
  };
}

export default withStyle(HTMLDiv)`

  height: 100%;
  border: 1px solid darkgrey;
  overflow: scroll;
  position: relative;
  
`;
