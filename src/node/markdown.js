"use strict";

import { NonTerminalNode } from "occam-parsers";

import nodeMixins from "../mixins/node";
import elementMixins from "../mixins/element";
import ruleNameToHTMLMap from "../ruleNameToHTMLMap";

import { EMPTY_STRING } from "../constants";

class MarkdownNode extends NonTerminalNode {
  constructor(ruleName, childNodes, precedence, ambiguous, domElement) {
    super(ruleName, childNodes, precedence, ambiguous);

    this.domElement = domElement;
  }

  getDOMElement() {
    return this.domElement;
  }

  setDOMElement(domElement) {
    this.domElement = domElement;
  }

  getTagName() {
    const html = ruleNameToHTMLMap[this.ruleName],
          { tagName } = html;

    return tagName;
  }

  getClassName() {
    const html = ruleNameToHTMLMap[this.ruleName],
          { className } = html;

    return className;
  }

  setInnerHTML(innerHTML) { this.domElement.innerHTML = innerHTML; }

  attributeName() {
    const attributeName = null;

    return attributeName;
  }

  attributeValue(context) {
    const attributeValue = null;

    return attributeValue;
  }

  asHTML(indent, context) {
    if (context === undefined) {
      context = indent; ///

      indent = EMPTY_STRING;
    }

    const tagName = this.getTagName();

    let html = null;

    if (tagName !== null) {
      indent = this.adjustIndent(indent);

      const childNodesHTML = this.childNodesAsHTML(indent, context);

      if (childNodesHTML !== null) {
        const startingTag = this.startingTag(context),
              closingTag = this.closingTag(context);

        html = (indent === null) ?
                `${startingTag}${childNodesHTML}${closingTag}` :
                  `${indent}${startingTag}
${childNodesHTML}${indent}${closingTag}
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

  closingTag(context) {
    const tagName = this.getTagName(),
          closingTag = `<\\${tagName}>`;

    return closingTag;
  }

  startingTag(context) {
    const tagName = this.getTagName(),
          className = this.getClassName(),
          attributeName = this.attributeName();

    let classHTML = EMPTY_STRING,
        attributeHTML = EMPTY_STRING;

    if (className !== null) {
      classHTML = ` class="${className}"`;
    }

    if (attributeName !== null) {
      const attributeValue = this.attributeValue(context);

      attributeHTML = ` ${attributeName}="${attributeValue}"`;
    }

    const startingTag = `<${tagName}${classHTML}${attributeHTML}>`;

    return startingTag;
  }

  selfClosingTag(context) {
    const tagName = this.getTagName(),
          className = this.getClassName();

    let classHTML = EMPTY_STRING;

    if (className !== null) {
      classHTML = ` class="${className}"`;
    }

    const selfClosingTag = `<${tagName}${classHTML}/>`;

    return selfClosingTag;
  }

  adjustIndent(indent) {
    if (indent !== null) {
      indent = `  ${indent}`;
    }

    return indent;
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

  createDOMElement(context) {
    let domElement = null;

    const tagName = this.getTagName();

    if (tagName !== null) {
      domElement = document.createElement(tagName);

      this.setDOMElement(domElement);

      const className = this.getClassName(),
            attributeName = this.attributeName();

      if (className !== null) {
        Object.assign(domElement, {
          className
        });
      }

      if (attributeName !== null) {
        const attributeValue = this.attributeValue(context);

        domElement.setAttribute(attributeName, attributeValue);
      }

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
          siblingDOMElement = null;

    parentDOMElement.insertBefore(domElement, siblingDOMElement);
  }

  static fromRuleNameChildNodesAndAmbiguous(Class, ruleName, childNodes, ambiguous, ...remainingArguments) {
    const domElement = null,
          markdownNode = NonTerminalNode.fromRuleNameChildNodesAndAmbiguous(Class, ruleName, childNodes, ambiguous, domElement, ...remainingArguments);

    return markdownNode;
  }
}

Object.assign(MarkdownNode.prototype, nodeMixins);
Object.assign(MarkdownNode.prototype, elementMixins);

export default MarkdownNode;
