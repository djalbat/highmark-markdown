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
  border: 1px solid black;
  padding: 1rem;
  font-size: 2rem;
  background: transparent;  
  font-family: serif;

  font-weight: bold;
  border-top-width: 1px;
  border-bottom-width: 0;
  
  :enabled {
    font-weight: normal;
    border-top-width: 0;
    border-bottom-width: 1px;
  }
  
`;
