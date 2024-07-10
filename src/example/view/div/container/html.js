"use strict";

import HTMLDiv from "../../div/html";
import ContainerDiv from "../../div/container";

export default class HTMLContainerDiv extends ContainerDiv {
  childElements() {
    return ([

      <HTMLDiv/>

    ]);
  }

  parentContext() {
    const context = this.getContext(),
          showHTMLContainerDiv = this.show.bind(this),  ///
          hideHTMLContainerDiv = this.hide.bind(this);  ///

    return ({
      ...context,
      showHTMLContainerDiv,
      hideHTMLContainerDiv
    });
  }

  static defaultProperties = {
    className: "html"
  };
}
