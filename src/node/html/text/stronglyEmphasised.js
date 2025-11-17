"use strict";

import HTMLNode from "../../../node/html";
import tagNameMap from "../../../map/tagName";

import { EMPTY_STRING } from "../../../constants";
import { STRONG_TEXT_MARKDOWN_RULE_NAME } from "../../../ruleNames/markdown";
import { remove, insertAfter, insertAfterwards, insertBeforehand } from "../../../utilities/dom";

export default class StronglyEmphasisedTextHTMLNode extends HTMLNode {
  createChildDOMElement(context) {
    let domElement;

    const tagName = tagNameMap[STRONG_TEXT_MARKDOWN_RULE_NAME],
          plainText = this.childNodesAsPlainText(context),
          content = plainText,  ///
          textNode = document.createTextNode(content);

    domElement = document.createElement(tagName);

    const parentDOMElement = domElement;  ///

    domElement = textNode; ///

    insertAfterwards(domElement, parentDOMElement);

    domElement = parentDOMElement;  ///

    return domElement;
  }

  adjustIndent(indent) {
    indent = null;

    return indent;
  }

  mount(parentDOMElement, siblingDOMElement, context) {
    let domElement;

    domElement = this.createDOMElement(context);

    this.setDOMElement(domElement);

    (siblingDOMElement !== null) ?
      insertAfter(domElement, parentDOMElement, siblingDOMElement) :
        insertBeforehand(domElement, siblingDOMElement);

    parentDOMElement = domElement; ///

    const childDOMElement = this.createChildDOMElement(context);

    domElement = childDOMElement; ///

    insertAfterwards(domElement, parentDOMElement);

    domElement = this.getDOMElement();

    siblingDOMElement = domElement; ///

    return siblingDOMElement;
  }

  unmount(parentDOMElement) {
    let domElement;

    domElement = this.getDOMElement();

    {
      const parentDOMElement = domElement, ///
            firstChild = parentDOMElement.firstChild;

      domElement = firstChild;  ///

      remove(domElement, parentDOMElement);
    }

    domElement = this.getDOMElement();

    remove(domElement, parentDOMElement);

    this.resetDOMElement();
  }

  childNodesAsHTML(indent, context) {
    let childNodesHTML;

    indent = this.adjustIndent(indent);

    childNodesHTML = super.childNodesAsHTML(indent, context);

    const startingTag = `<${strongTextTagName}>`,
          closingTag = `</${strongTextTagName}>`,
          html = `${startingTag}${childNodesHTML}${closingTag}`;

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
