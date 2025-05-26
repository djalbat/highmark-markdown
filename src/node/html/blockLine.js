"use strict";

import HTMLNode from "../../node/html";

import { insertAfter } from "../../utilities/dom";
import { assignIndexes, deleteIndexes } from "../../utilities/whitespace";
import { EMPTY_STRING, CARRIAGE_RETURN } from "../../constants";

export default class BlockLineHTMLNode extends HTMLNode {
  mount(parentDOMElement, siblingDOMElement, context) {
    const node = this;  ///

    assignIndexes(node, context);

    super.mount(parentDOMElement, siblingDOMElement, context);

    let domElement;

    domElement = this.getDOMElement();

    parentDOMElement = domElement;  ///

    siblingDOMElement = null;

    const content = CARRIAGE_RETURN,
          textNode = document.createTextNode(content);

    domElement = textNode;  ///

    insertAfter(domElement, parentDOMElement, siblingDOMElement);

    deleteIndexes(context);
  }

  unmount(parentDOMElement, context) {
    {
      let domElement;

      domElement = this.getDOMElement();

      const parentDOMElement = domElement,  ///
            lastChild = domElement.lastChild

      domElement = lastChild;  ///

      parentDOMElement.removeChild(domElement);
    }

    super.unmount(parentDOMElement, context);
  }

  asHTML(indent, context) {
    let html;

    const childNodesHTML = this.childNodesAsHTML(indent, context),
          startingTag = this.startingTag(context),
          closingTag = this.closingTag(context);

    html = `${startingTag}${childNodesHTML}${closingTag}
`;

    return html;
  }

  childNodesAsHTML(indent, context) {
    let childNodesHTML;

    const node = this;  ///

    assignIndexes(node, context);

    childNodesHTML = super.childNodesAsHTML(indent, context);

    deleteIndexes(context);

    return childNodesHTML;
  }

  childNodesAsPlainText(context) {
    let childNodesPlainText;

    const node = this;  ///

    assignIndexes(node, context);

    childNodesPlainText = this.reduceChildNode((childNodesPlainText, childNode) => {
      const childNodePlainText = childNode.asPlainText(context);

      childNodesPlainText = `${childNodesPlainText}${childNodePlainText}`;

      return childNodesPlainText;
    }, EMPTY_STRING);

    deleteIndexes(context);

    return childNodesPlainText;
  }

  static lines = 2;

  static tagName = "span";

  static className = "block-line";

  static fromNothing() { return HTMLNode.fromNothing(BlockLineHTMLNode); }

  static fromOuterNode(outerNode) { return HTMLNode.fromOuterNode(BlockLineHTMLNode, outerNode); }
}
