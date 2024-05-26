"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

import { KEY_UP_CUSTOM_EVENT_TYPE } from "../../customEventTypes";

class ContainerDiv extends Element {
  keyUpHandler = (event, element) => {
    const customEventType = KEY_UP_CUSTOM_EVENT_TYPE;

    this.callCustomHandlers(customEventType, event, element);
  }

  static tagName = "div";

  static defaultProperties = {
    className: "container"
  };
}

export default withStyle(ContainerDiv)`

  border: 1px solid black;
  display: flex;
  padding: 1rem;
  border-top: 0;
  align-items: stretch;
  flex-direction: column;
  
`;
