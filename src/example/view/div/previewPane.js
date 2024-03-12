"use strict";

import withStyle from "easy-with-style";

import { Element } from "easy";

class PreviewPaneDiv extends Element {
  update(node, tokens) {
    let previousNode;

    previousNode = this.getPreviousNode();

    if (previousNode !== null) {
      this.unmount(previousNode);
    }

    if (node !== null) {
      const context = {
              tokens
            };

      node.createDOMElement(context);

      this.mount(node);
    }

    previousNode = node;  ///

    this.setPreviousNode(previousNode);
  }

  getPreviousNode() {
    const { previousNode } = this.getState();

    return previousNode;
  }

  setPreviousNode(previousNode) {
    this.updateState({
      previousNode
    });
  }

  setInitialState() {
    const previousNode = null;

    this.setState({
      previousNode
    });
  }

  parentContext() {
    const updatePreviewPaneDiv = this.update.bind(this);

    return ({
      updatePreviewPaneDiv
    });
  }

  initialise() {
    this.setInitialState();
  }

  static tagName = "div";

  static defaultProperties = {
    className: "preview-pane"
  };
}

export default withStyle(PreviewPaneDiv)`

  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 1px solid darkgrey;
  overflow: scroll;
  position: absolute;
  font-size: 16pt;
  
`;
