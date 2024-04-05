"use strict";

import { NonTerminalNode } from "occam-parsers";

import nodeMixins from "../mixins/node";
import elementMixins from "../mixins/element";
import ruleNameToHTMLMap from "../ruleNameToHTMLMap";

import { trim } from "../utilities/string";
import { EMPTY_STRING } from "../constants";

class MarkdownNode extends NonTerminalNode {
  constructor(ruleName, childNodes, precedence, opacity, domElement) {
    super(ruleName, childNodes, precedence, opacity);

    this.domElement = domElement;
  }

  getDOMElement() {
    return this.domElement;
  }

  setDOMElement(domElement) {
    this.domElement = domElement;
  }

  tagName(context) {
    const { tagName } = ruleNameToHTMLMap[this.ruleName];

    return tagName;
  }

  className(context) {
    const { className } = ruleNameToHTMLMap[this.ruleName];

    return className;
  }

  closingTag(context) {
    const tagName = this.tagName(context),
          closingTag = `<\\${tagName}>`;

    return closingTag;
  }

  startingTag(context) {
    const tagName = this.tagName(context),
          className = this.className(context),
          attributeName = this.attributeName(context),
          attributeValue = this.attributeValue(context),
          classHTML = (className !== null) ?
                       ` class="${className}"` :
                          EMPTY_STRING,
          attributeHTML = ((attributeName !== null) && (attributeValue !== null)) ?
                           ` ${attributeName}="${attributeValue}"` :
                              EMPTY_STRING,
          startingTag = `<${tagName}${classHTML}${attributeHTML}>`;

    return startingTag;
  }

  selfClosingTag(context) {
    const tagName = this.tagName(context),
          className = this.className(context),
          attributeName = this.attributeName(context),
          attributeValue = this.attributeValue(context),
          classHTML = (className !== null) ?
                       ` class="${className}"` :
                          EMPTY_STRING,
          attributeHTML = ((attributeName !== null) && (attributeValue !== null)) ?
                           ` ${attributeName}="${attributeValue}"` :
                              EMPTY_STRING,
          selfClosingTag = `<${tagName}${classHTML}${attributeHTML}/>`;

    return selfClosingTag;
  }

  adjustIndent(indent) {
    if (indent !== null) {
      indent = `  ${indent}`;
    }

    return indent;
  }

  attributeName(context) {
    const attributeName = null;

    return attributeName;
  }

  attributeValue(context) {
    const attributeValue = null;

    return attributeValue;
  }

  childNodesAsHTML(indent, context) {
    const childNodes = this.getChildNodes(),
          childNodesHTML = childNodes.reduce((childNodesHTML, childNode) => {
            const childNodeNonTerminalNode = childNode.isNonTerminalNode();

            if (childNodeNonTerminalNode) {
              const childNodeHTML = childNode.asHTML(indent, context);

              if (childNodeHTML !== null) {
                childNodesHTML = (childNodesHTML === null) ?
                                   childNodeHTML :  ///
                                    `${childNodesHTML}${childNodeHTML}`;
              }
            }

            return childNodesHTML;
          }, null);

    return childNodesHTML;
  }

  asHTML(indent, context) {
    if (context === undefined) {
      context = indent; ///

      indent = EMPTY_STRING;
    }

    const tagName = this.tagName(context);

    let html = null;

    if (tagName !== null) {
      indent = this.adjustIndent(indent);

      const childNodesHTML = this.childNodesAsHTML(indent, context);

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
    }

    return html;
  }

  createDOMElement(context) {
    let domElement = null;

    const tagName = this.tagName(context);

    if (tagName !== null) {
      domElement = document.createElement(tagName);

      const className = this.className(context),
            attributeName = this.attributeName(context),
            attributeValue = this.attributeValue(context);

      if (className !== null) {
        domElement.className = className;
      }

      if ((attributeName !== null) && (attributeValue !== null)) {
        domElement.setAttribute(attributeName, attributeValue);
      }

      this.setDOMElement(domElement);

      this.createChildNodeDOMElements(context);
    }

    return domElement;
  }

  createChildNodeDOMElements(context) {
    const childNodes = this.getChildNodes();

    childNodes.forEach((childNode) => {
      const childNodeNonTerminalNode = childNode.isNonTerminalNode();

      if (childNodeNonTerminalNode) {
        const childNodeDOMElement = childNode.createDOMElement(context);

        if (childNodeDOMElement !== null) {
          this.insertDOMElement(childNodeDOMElement);
        }
      }
    });
  }

  insertDOMElement(domElement) {
    const parentDOMElement = this.domElement,  ///
          siblingDOMElement = null,
          childNodeDOMElement = domElement; ///

    parentDOMElement.insertBefore(childNodeDOMElement, siblingDOMElement);
  }

  static fromRuleNameChildNodesAndOpacity(Class, ruleName, childNodes, opacity, ...remainingArguments) {
    const domElement = null,
          markdownNode = NonTerminalNode.fromRuleNameChildNodesAndOpacity(Class, ruleName, childNodes, opacity, domElement, ...remainingArguments);

    return markdownNode;
  }
}

Object.assign(MarkdownNode.prototype, nodeMixins);
Object.assign(MarkdownNode.prototype, elementMixins);

export default MarkdownNode;
