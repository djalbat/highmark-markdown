"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

class PreviewDiv extends Element {
  getParentDOMElement() {
    const domElement = this.getDOMElement(),
          parentDOMElement = domElement;  ///

    return parentDOMElement;
  }

  clear() {
    let divisionHTMLNode;

    divisionHTMLNode = this.getDivisionHTMLNode();

    if (divisionHTMLNode !== null) {
      const parentDOMElement = this.getParentDOMElement();

      divisionHTMLNode.unmount(parentDOMElement);

      divisionHTMLNode = null;

      this.setDivisionHTMLNode(divisionHTMLNode);
    }
  }

  update(divisionHTMLNode, context) {
    this.clear();

    const parentDOMElement = this.getParentDOMElement(),
          siblingDOMElement = null;

    divisionHTMLNode.mount(parentDOMElement, siblingDOMElement, context);

    this.setDivisionHTMLNode(divisionHTMLNode);
  }

  getDivisionHTMLNode() {
    const { divisionHTMLNode } = this.getState();

    return divisionHTMLNode;
  }

  setDivisionHTMLNode(divisionHTMLNode) {
    this.updateState({
      divisionHTMLNode
    });
  }

  setInitialState() {
    const divisionHTMLNode = null;

    this.setState({
      divisionHTMLNode
    });
  }

  parentContext() {
    const context = this.getContext(),
          clearPreviewDiv = this.clear.bind(this), ///
          updatePreviewDiv = this.update.bind(this);  ///

    return ({
      ...context,
      clearPreviewDiv,
      updatePreviewDiv
    });
  }

  initialise() {
    this.setInitialState();
  }

  static tagName = "div";

  static defaultProperties = {
    className: "preview"
  };
}

export default withStyle(PreviewDiv)`

  width: 100%;
  height: 100%;
  display: flex;
  overflow: scroll;
  position: absolute;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;  

`;
