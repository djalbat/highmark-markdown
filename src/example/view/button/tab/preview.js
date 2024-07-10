"use strict";

import TabButton from "../../button/tab";

export default class PreviewTabButton extends TabButton {
  childElements() {
    return "Preview";
  }

  parentContext() {
    const enablePreviewTabButton = this.enable.bind(this), ///
          disablePreviewTabButton = this.disable.bind(this); ///

    return ({
      enablePreviewTabButton,
      disablePreviewTabButton
    });
  }

  static defaultProperties = {
    className: "preview"
  }
}
