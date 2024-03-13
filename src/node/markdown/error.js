"use strict";

import { arrayUtilities } from "necessary";

import MarkdownNode from "../../node/markdown";
import {EMPTY_STRING} from "../../constants";

const { first } = arrayUtilities;

export default class ErrorMarkdownNode extends MarkdownNode {
  asHTML(indent, context) {
    indent = this.adjustIndent(indent);

    const childNodesHTML = this.childNodesAsHTML(indent, context),
          startingTag = this.startingTag(context),
          closingTag = this.closingTag(context),
          html = `${indent}${startingTag}${childNodesHTML}${closingTag}
`;

    return html;
  }

  createDOMElement(context) {
    const domElement = super.createDOMElement(context),
          content = this.getContent(context),
          textContent = content;  ///

    Object.assign(domElement, {
      textContent
    });

    return domElement;
  }

  childNodesAsHTML(indent, context) {
    const content = this.getContent(context),
          childNodesHTML = content; ///

    return childNodesHTML;
  }

  createChildNodeDOMElements(context) {
    ///
  }

  getContent(context) {
    const childNodes = this.getChildNodes(),
          firstChildNode = first(childNodes),
          terminalNode = firstChildNode,  ///
          content = terminalNode.getContent();

    return content;
  }

  static fromRuleNameChildNodesAndAmbiguous(ruleName, childNodes, ambiguous) { return MarkdownNode.fromRuleNameChildNodesAndAmbiguous(ErrorMarkdownNode, ruleName, childNodes, ambiguous); }
}