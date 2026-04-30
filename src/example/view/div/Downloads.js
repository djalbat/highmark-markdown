"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

class DownloadsDiv extends Element {
  didMount() {
    const { fileName } = this.properties;

    console.log(fileName);
  }

  childElements() {
    return (

      <p>
        Downloads
      </p>

    );
  }

  static tagName = "div";

  static defaultProperties = {
    name: "DownloadsDiv",
    className: "downloads"
  };
}

export default withStyle(DownloadsDiv)`

  background: red;
  
`;
