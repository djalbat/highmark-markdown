"use strict";

import TabButton from "../../button/tab";

export default class HTMLTabButton extends TabButton {
  childElements() {
    return "HTML";
  }

  parentContext() {
    const enableHTMLTabButton = this.enable.bind(this), ///
          disableHTMLTabButton = this.disable.bind(this); ///

    return ({
      enableHTMLTabButton,
      disableHTMLTabButton
    });
  }

  static defaultProperties = {
    className: "html"
  }
}
