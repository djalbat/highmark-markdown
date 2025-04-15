"use strict";

import HTMLNode from "../../../node/html";
import tagNameMap from "../../../map/tagName";

import { EMPTY_STRING } from "../../../constants";
import { STRONG_TEXT_RULE_NAME } from "../../../ruleNames";

export default class StronglyEmphasisedTextHTMLNode extends HTMLNode {
  createChildDOMElement(context) {
    let domElement;

    const tagName = tagNameMap[STRONG_TEXT_RULE_NAME],
          plainText = this.childNodesAsPlainText(context),
          content = plainText,  ///
          textNode = document.createTextNode(content);

    domElement = document.createElement(tagName);

    const parentDOMElement = domElement;  ///

    domElement = textNode; ///

    parentDOMElement.appendChild(domElement);

    domElement = parentDOMElement;  ///

    return domElement;
  }

  mount(parentDOMElement, siblingDOMElement, context) {
    this.domElement = this.createDOMElement(context);

    parentDOMElement.insertBefore(this.domElement, siblingDOMElement);

    const childDOMElement = this.createChildDOMElement(context),
          domElement = childDOMElement; ///

    parentDOMElement = this.domElement;

    siblingDOMElement = null;

    parentDOMElement.insertBefore(domElement, siblingDOMElement);

  }

  unmount(parentDOMElement, context) {
    {
      const parentDOMElement = this.domElement,
            firstChild = parentDOMElement.firstChild,
            domElement = firstChild;  ///

      parentDOMElement.removeChild(domElement)
    }

    parentDOMElement.removeChild(this.domElement);

    this.domElement = null;
  }

  childNodesAsHTML(indent, context) {
    let childNodesHTML;

    indent = this.adjustIndent(indent);

    childNodesHTML = super.childNodesAsHTML(indent, context);

    const startingTag = `<${strongTextTagName}>`,
          closingTag = `</${strongTextTagName}>`,
          html = `${indent}${startingTag}
${childNodesHTML}${indent}${closingTag}
`;

    childNodesHTML = html;  ///

    return childNodesHTML;
  }

  childNodesAsPlainText(context) {
    const childNodesPlainText = this.reduceChildNode((childNodesPlainText, childNode) => {
      const childNodePlainText = childNode.asPlainText(context);

      childNodesPlainText = `${childNodesPlainText}${childNodePlainText}`;

      return childNodesPlainText;
    }, EMPTY_STRING);

    return childNodesPlainText;
  }

  static tagName = "em";

  static className = null;

  static fromNothing() { return HTMLNode.fromNothing(StronglyEmphasisedTextHTMLNode); }

  static fromOuterNode(outerNode) { return HTMLNode.fromOuterNode(StronglyEmphasisedTextHTMLNode, outerNode); }
}
