"use strict";

import { NonTerminalNode } from "occam-parsers";

import elementMap from "../elementMap";
import nodeMixins from "../mixins/node";
import elementMixins from "../mixins/element";

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
    const element = elementMap[this.ruleName];

    const { tagName } = element;

    return tagName;
  }

  className(context) {
    const element = elementMap[this.ruleName];

    const { className } = element;

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

  isDivisionMarkdownNode() {
    const divisionMarkdownNode = false;

    return divisionMarkdownNode;
  }

  isPlainTextMarkdownNode() {
    const plainTextMarkdownNode = false;

    return plainTextMarkdownNode;
  }

  lines(context) {
    let lines;

    ({ lines = null } = this.constructor);

    if (lines === null) {
      const childNodes = this.getChildNodes();

      lines = childNodes.reduce((lines, childNode) => {
        const childNodeMarkdownNode = (childNode instanceof MarkdownNode);

        if (childNodeMarkdownNode) {
          const markdownNode = childNode, ///
                markdownNodeLines = markdownNode.lines(context);

          lines += markdownNodeLines;
        }

        return lines;
      }, 0);
    }

    return lines;
  }

  mount(parentDOMElement, siblingDOMElement, context) {
    this.domElement = this.createDOMElement(context);

    if (this.domElement !== null) {
      parentDOMElement.insertBefore(this.domElement, siblingDOMElement)

      parentDOMElement = this.domElement; ///

      siblingDOMElement = null;
    }

    this.childNodes.forEach((childNode) => {
      const childNodeMarkdownNode = (childNode instanceof MarkdownNode);

      if (childNodeMarkdownNode) {
        const markdownNode = childNode; ///

        markdownNode.mount(parentDOMElement, siblingDOMElement, context);
      }
    });
  }

  unmount(parentDOMElement, context) {
    if (this.domElement !== null) {
      parentDOMElement.removeChild(this.domElement);

      parentDOMElement = this.domElement; ///

      this.domElement = null;

      return;
    }

    this.childNodes.forEach((childNode) => {
      const childNodeMarkdownNode = (childNode instanceof MarkdownNode);

      if (childNodeMarkdownNode) {
        childNode.unmount(parentDOMElement, context);
      }
    });
  }

  isMounted() {
    const mounted = (this.domElement !== null);

    return mounted;
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
        Object.assign(domElement, {
          className
        });
      }

      if ((attributeName !== null) && (attributeValue !== null)) {
        domElement.setAttribute(attributeName, attributeValue);
      }
    }

    return domElement;
  }

  asHTML(indent, context) {
    let html = null;

    const tagName = this.tagName(context);

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

  asPlainText(context) {
    let plainText = null;

    const tagName = this.tagName(context);

    if (tagName !== null) {
      const childNodesPlainText = this.childNodesAsPlainText(context);

      plainText = childNodesPlainText;  ///
    }

    return plainText;
  }

  childNodesAsHTML(indent, context) {
    const childNodes = this.getChildNodes(),
          childNodesHTML = childNodes.reduce((childNodesHTML, childNode) => {
            const childNodeMarkdownNode = (childNode instanceof MarkdownNode);

            if (childNodeMarkdownNode) {
              const markdownNode = childNode, ///
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

  childNodesAsPlainText(context) {
    const childNodes = this.getChildNodes(),
          childNodesPlainText = childNodes.reduce((childNodesPlainText, childNode) => {
            const childNodeMarkdownNode = (childNode instanceof MarkdownNode);

            if (childNodeMarkdownNode) {
              const markdownNode = childNode, ///
                    markdownNodePlainText = markdownNode.asPlainText(context);

              if (markdownNodePlainText !== null) {
                childNodesPlainText = (childNodesPlainText === null) ?
                                        markdownNodePlainText :  ///
                                         `${childNodesPlainText}
${markdownNodePlainText}`;
              }
            }

            return childNodesPlainText;
          }, null);

    return childNodesPlainText;
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
