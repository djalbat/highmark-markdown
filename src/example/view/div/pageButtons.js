"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

import PageButton from "../button/page";

import { PAGE_UPDATE_CUSTOM_EVENT_TYPE } from "../../customEventTypes";

class PageButtonsDiv extends Element {
  pageButtonClickHandler = (event, element) => {
    const pageButton = element, ///
          index = pageButton.getIndex(),
          customEventType = PAGE_UPDATE_CUSTOM_EVENT_TYPE;

    this.callCustomHandlers(customEventType, event, element, index);
  }

  unmountPageButtons() {
    const pageButtons = this.getPageButtons();

    pageButtons.forEach((pageButton) => {
      this.unmount(pageButton);
    });
  }

  mountPageButtons(length) {
    const pageButtons = [];

    for (let index = 0; index < length; index++) {
      const pageButton =

        <PageButton index={index} onClick={this.pageButtonClickHandler} />

      ;

      pageButtons.push(pageButton);
    }

    pageButtons.forEach((pageButton) => {
      this.mount(pageButton);
    });
  }

  getPageButtons() {
    const pageButtonChildElements = this.getChildElements("button.page"),
      pageButtons = pageButtonChildElements;  ///

    return pageButtons;
  }

  update(length, index) {
    if (index === undefined) {
      index = length; ///

      length = null;
    }

    if (length !== null) {
      this.unmountPageButtons();

      this.mountPageButtons(length);
    }

    const pageButtons = this.getPageButtons(),
          currentIndex = index; ///

    pageButtons.forEach((pageButton, index) => {
      (index === currentIndex) ?
        pageButton.disable() :
          pageButton.enable();
    });
  }

  clear() {
    this.unmountPageButtons();
  }

  parentContext() {
    const clearPageButtonsDiv = this.clear.bind(this),  ///
          updatePageButtonsDiv = this.update.bind(this); ///

    return ({
      clearPageButtonsDiv,
      updatePageButtonsDiv
    });
  }

  static tagName = "div";

  static defaultProperties = {
    className: "page-buttons"
  };
}

export default withStyle(PageButtonsDiv)`

  top: 7rem;
  right: 3rem;
  z-index: 1;
  position: absolute;
  
`;
