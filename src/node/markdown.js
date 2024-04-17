"use strict";

import { NonTerminalNode } from "occam-parsers";

import nodeMixins from "../mixins/node";
import elementMixins from "../mixins/element";
import ruleNameToHTMLMap from "../ruleNameToHTMLMap";

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

  addChildNode(childNode) {
    const childNodes = this.getChildNodes();

    childNodes.push(childNode);
  }

  removeChildNode(childNode) {
    const childNodes = this.getChildNodes(),
          index = childNodes.indexOf(childNode),
          start = index,  ///
          deleteCount = 1;

    childNodes.splice(start, deleteCount);
  }

  replaceChildNode(replacedChildNode, replacementChildNode) {
    const childNodes = this.getChildNodes(),
          index = childNodes.indexOf(replacedChildNode),
          start = index,  ///
          deleteCount = 1;

    childNodes.splice(start, deleteCount, replacementChildNode);
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
          closingTag = `</${tagName}>`;

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

  resolveImports(parentNode, context) {
    parentNode = this;  ///\

    const childNodes = this.getChildNodes();

    childNodes.forEach((childNode) => {
      const childNodeNonTerminalNode = childNode.isNonTerminalNode();

      if (childNodeNonTerminalNode) {
        const nonTerminalNode = childNode,  ///
              markdownNode = nonTerminalNode; ///

        markdownNode.resolveImports(parentNode, context);
      }
    });
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

  childNodesAsHTML(indent, context) {
    const childNodes = this.getChildNodes(),
          childNodesHTML = childNodes.reduce((childNodesHTML, childNode) => {
            const childNodeNonTerminalNode = childNode.isNonTerminalNode();

            if (childNodeNonTerminalNode) {
              const nonTerminalNode = childNode,  ///
                    markdownNode = nonTerminalNode, ///
                    markdownNodeHTML = markdownNode.asHTML(indent, context);

              if (markdownNodeHTML !== null) {
                childNodesHTML = (childNodesHTML === null) ?
                                   markdownNodeHTML :  ///
                                    `${childNodesHTML}${markdownNodeHTML}`;
              }
            }

            return childNodesHTML;
          }, null);

    return childNodesHTML;
  }

  createChildNodeDOMElements(context) {
    const childNodes = this.getChildNodes();

    childNodes.forEach((childNode) => {
      const childNodeNonTerminalNode = childNode.isNonTerminalNode();

      if (childNodeNonTerminalNode) {
        const nonTerminalNode = childNode,  ///
              markdownNode = nonTerminalNode, ///
              markdownNodeDOMElement = markdownNode.createDOMElement(context);

        if (markdownNodeDOMElement !== null) {
          this.insertDOMElement(markdownNodeDOMElement);
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

  clone(...remainingArguments) { return super.clone(this.domElement, ...remainingArguments); }

  static fromRuleNameChildNodesAndOpacity(Class, ruleName, childNodes, opacity, ...remainingArguments) {
    const domElement = null,
          markdownNode = NonTerminalNode.fromRuleNameChildNodesAndOpacity(Class, ruleName, childNodes, opacity, domElement, ...remainingArguments);

    return markdownNode;
  }
}

Object.assign(MarkdownNode.prototype, nodeMixins);
Object.assign(MarkdownNode.prototype, elementMixins);

export default MarkdownNode;
