"use strict";

import CSSTextarea from "../../textarea/css";
import ContainerDiv from "../../div/container";

export default class CSSContainerDiv extends ContainerDiv {
  childElements() {
    return (

      <CSSTextarea/>

    );
  }

  parentContext() {
    const context = this.getContext(),
          showCSSContainerDiv = this.show.bind(this),  ///
          hideCSSContainerDiv = this.hide.bind(this);  ///

    return ({
      ...context,
      showCSSContainerDiv,
      hideCSSContainerDiv
    });
  }

  static defaultProperties = {
    className: "css"
  };
}
