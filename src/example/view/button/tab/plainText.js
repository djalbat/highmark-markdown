"use strict";

import TabButton from "../../button/tab";

export default class PlainTextTabButton extends TabButton {
  childElements() {
    return "PlainText";
  }

  parentContext() {
    const enablePlainTextTabButton = this.enable.bind(this), ///
          disablePlainTextTabButton = this.disable.bind(this); ///

    return ({
      enablePlainTextTabButton,
      disablePlainTextTabButton
    });
  }

  static defaultProperties = {
    className: "plainText"
  }
}
