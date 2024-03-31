"use strict";

import { arrayUtilities } from "necessary";

import MarkdownNode from "../../node/markdown";

import { trim } from "../../utilities/string";
import { HREF_ATTRIBUTE_NAME } from "../../attributeNames";

const { second } = arrayUtilities;

export default class LinkMarkdownNode extends MarkdownNode {
  asHTML(indent, context, number = null) {
    let html;

    indent = this.adjustIndent(indent);

    const childNodesHTML = this.childNodesAsHTML(indent, context, number);

    if (childNodesHTML !== null) {
      const startingTag = this.startingTag(context),
            closingTag = this.closingTag(context);

      html = (indent === null) ?
              `${startingTag}${trim(childNodesHTML)}${closingTag}` :
                `${indent}${startingTag}
${trim(childNodesHTML)}
${indent}${closingTag}
`;
    } else {
      const selfClosingTag = this.selfClosingTag(context);

      html = (indent === null) ?
               selfClosingTag :  ///
`${indent}${selfClosingTag}
`;
    }

    return html;
  }

  createDOMElement(context, number = null) {
    let domElement;

    const tagName = this.tagName(context);

    domElement = document.createElement(tagName);

    this.setDOMElement(domElement);

    const className = this.className(context),
          attributeName = this.attributeName(context);

    Object.assign(domElement, {
      className
    });

    const attributeValue = this.attributeValue(context);

    domElement.setAttribute(attributeName, attributeValue);

    this.createChildNodeDOMElements(context, number);

    return domElement;
  }

  childNodesAsHTML(indent, context, number) {
    const childNodesHTML = (number === null) ?
                             null :
                              `${number}`;

    return childNodesHTML;
  }

  createChildNodeDOMElements(context, number) {
    if (number !== null) {
      const content = `${number}`,
            childNodeDOMElement = document.createTextNode(content);

      this.insertDOMElement(childNodeDOMElement);
    }
  }

  identifier(context) {
    const childNodes = this.getChildNodes(),
          secondChildNode = second(childNodes),
          identifierTerminalNode = secondChildNode,  ///
          identifierTerminalNodeContent = identifierTerminalNode.getContent(),
          identifier = identifierTerminalNodeContent; ///

    return identifier;
  }

  attributeName(context) {
    const attributeName = HREF_ATTRIBUTE_NAME;

    return attributeName;
  }

  attributeValue(context) {
    const identifier = this.identifier(context),
          attributeValue = `#${identifier}`; ///

    return attributeValue;
  }

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(LinkMarkdownNode, ruleName, childNodes, opacity); }
}
