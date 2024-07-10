"use strict";

import withStyle from "easy-with-style";  ///

import { Button } from "easy";

class TabButton extends Button {
  static defaultProperties = {
    className: "tab"
  };
}

export default withStyle(TabButton)`

  color: black;
  cursor: pointer;
  padding: 1rem;
  font-size: 2rem;
  background: transparent;  
  font-family: serif;

  border: 1px solid black;
  font-weight: bold;
  border-bottom: 0;
  
  :enabled {
    border: 0;
    font-weight: normal;
    border-bottom: 1px solid black;
  }
  
`;
