"use strict";

import withStyle from "easy-with-style";  ///

import Textarea from "../textarea";

import { EMPTY_STRING } from "../../constants";

class PlainTextTextarea extends Textarea {
  setPlainText(plainText) {
    const value = plainText;  ///

    this.setValue(value);
  }

  clear() {
    const plainText = EMPTY_STRING;

    this.setPlainText(plainText);
  }

  update(plainText) {
    this.setPlainText(plainText);
  }

  parentContext() {
    const clearPlainTextTextarea = this.clear.bind(this), ///
          updatePlainTextTextarea = this.update.bind(this);

    return ({
      clearPlainTextTextarea,
      updatePlainTextTextarea
    });
  }

  static defaultProperties = {
    readOnly: true,
    className: "plain-text"
  };
}

export default withStyle(PlainTextTextarea)`

  width: 100%;
  height: 24rem;
  
`;