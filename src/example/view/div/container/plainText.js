"use strict";

import ContainerDiv from "../../div/container";
import PlainTextTextarea from "../../textarea/plainText";

export default class PlainTextContainerDiv extends ContainerDiv {
  childElements() {
    return (

      <PlainTextTextarea/>

    );
  }

  parentContext() {
    const context = this.getContext(),
          showPlainTextContainerDiv = this.show.bind(this),  ///
          hidePlainTextContainerDiv = this.hide.bind(this);  ///

    return ({
      ...context,
      showPlainTextContainerDiv,
      hidePlainTextContainerDiv
    });
  }

  static defaultProperties = {
    className: "plain-text"
  };
}
