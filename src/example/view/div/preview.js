"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

import PageButtonsDiv from "../div/pageButtons";

class PreviewDiv extends Element {
  getParentDOMElement() {
    const domElement = this.getDOMElement(),
          parentDOMElement = domElement;  ///

    return parentDOMElement;
  }

  clear() {
    let markdownNode;

    markdownNode = this.getMarkdownNode();

    if (markdownNode !== null) {
      const parentDOMElement = this.getParentDOMElement();

      markdownNode.unmount(parentDOMElement);

      markdownNode = null;

      this.setMarkdownNode(markdownNode);
    }
  }

  update(markdownNode, context) {
    this.clear();

    const parentDOMElement = this.getParentDOMElement(),
          siblingDOMElement = null;

    markdownNode.mount(parentDOMElement, siblingDOMElement, context);

    this.setMarkdownNode(markdownNode);
  }

  getMarkdownNode() {
    const { markdownNode } = this.getState();

    return markdownNode;
  }

  setMarkdownNode(markdownNode) {
    this.updateState({
      markdownNode
    });
  }

  setInitialState() {
    const markdownNode = null;

    this.setState({
      markdownNode
    });
  }

  childElements() {
    const { onCustomPageUpdate } = this.properties,
          pageUpdateCustomHandler = onCustomPageUpdate; ///

    return (

      <PageButtonsDiv onCustomPageUpdate={pageUpdateCustomHandler} />

    );
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

  static ignoredProperties = [
    "onCustomPageUpdate"
  ];

  static defaultProperties = {
    className: "preview"
  };
}

export default withStyle(PreviewDiv)`

  height: 100%;
  overflow: scroll;
  position: relative;
  
`;
