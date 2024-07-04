"use strict";

import { arrayUtilities } from "necessary";

import MarkdownNode from "../../node/markdown";

import { INDEX_PREPEND } from "../../prepends";
import { HREF_ATTRIBUTE_NAME } from "../../attributeNames";

const { first } = arrayUtilities;

export default class IndexLinkMarkdownNode extends MarkdownNode {
  attributeName(context) {
    const attributeName = HREF_ATTRIBUTE_NAME;

    return attributeName;
  }

  attributeValue(context) {
    const content = this.content(context),
          attributeValue = `#${INDEX_PREPEND}-${content}`;

    return attributeValue;
  }

  createDOMElement(context) {
    let domElement;

    const content = this.content(context),
          textNode = document.createTextNode(content);

    domElement = super.createDOMElement(context);

    const parentDOMElement = domElement;  ///

    domElement = textNode; ///

    parentDOMElement.appendChild(domElement);

    domElement = parentDOMElement;  ///

    return domElement;
  }

  asHTML(indent, context) {
    const childNodesHTML = this.childNodesAsHTML(indent, context),
          startingTag = this.startingTag(context),
          closingTag = this.closingTag(context),
          html = `${startingTag}${childNodesHTML}${closingTag}`;

    return html;
  }

  childNodesAsHTML(indent, context) {
    const content = this.content(context),
          childNodesHTML = content; ///

    return childNodesHTML;
  }

  createChildNodeDOMElements(context) {
    const content = this.content(context),
          textNode  = document.createTextNode(content),
          domElement = textNode; ///

    this.addDOMElement(domElement);
  }

  content(context) {
    const childNodes = this.getChildNodes(),
          firstChildNode = first(childNodes),
          terminalNode = firstChildNode,  ///
          content = terminalNode.getContent();

    return content;
  }

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(IndexLinkMarkdownNode, ruleName, childNodes, opacity); }
}
