"use strict";

import TabButton from "../../button/tab";

export default class CSSTabButton extends TabButton {
  childElements() {
    return "CSS";
  }

  parentContext() {
    const enableCSSTabButton = this.enable.bind(this), ///
          disableCSSTabButton = this.disable.bind(this); ///

    return ({
      enableCSSTabButton,
      disableCSSTabButton
    });
  }

  static defaultProperties = {
    className: "css"
  }
}
