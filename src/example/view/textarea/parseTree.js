"use strict";

import withStyle from "easy-with-style";  ///

import Textarea from "../textarea";

import { EMPTY_STRING } from "../../constants";

class ParseTreeTextarea extends Textarea {
  update(parseTree) {
    const parseTreeString = parseTree.asString(),
          value = parseTreeString;  ///

    this.setValue(value);
  }

  clear() {
    const value = EMPTY_STRING;

    this.setValue(value);
  }

  static defaultProperties = {
    readOnly: true,
    className: "parse-tree",
    spellCheck: "false"
  };
}

export default withStyle(ParseTreeTextarea)`

  height: 48rem;
  
`;
