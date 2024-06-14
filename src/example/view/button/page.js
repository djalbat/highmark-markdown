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
  padding: 0.5rem;
  font-size: 1.7rem;
  background: transparent;  
  font-family: serif;
  margin-left: 1rem;
  
  cursor: pointer;
  font-weight: bold;

  [disabled] {
    cursor: auto;
    font-weight: normal;
  }
  
`;
