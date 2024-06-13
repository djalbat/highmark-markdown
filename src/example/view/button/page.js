"use strict";

import withStyle from "easy-with-style";  ///

import { Button } from "easy";

class PageButton extends Button {
  getIndex() {
    const { index } = this.properties;

    return index;
  }

  childElements() {
    const index = this.getIndex(),
          childElements = `${index + 1}`;

    return childElements;
  }

  static ignoredProperties = [
    "index"
  ];

  static defaultProperties = {
    className: "page"
  };
}

export default withStyle(PageButton)`

  color: black;
  border: 1px solid black;
  padding: 1rem;
  font-size: 2rem;
  background: transparent;  
  font-family: serif;
  margin-right: 1rem;
  
  cursor: pointer;
  font-weight: normal;

  [disabled] {
    cursor: auto;
    font-weight: bold;
  }
  
`;
