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

  setAttribute(name, value) { this.domElement.setAttribute(name, value); }

  asHTML(indent, context) {
    if (context === undefined) {
      context = indent; ///

      indent = EMPTY_STRING;
    }

    let html = null;

    const tagName = this.getTagName(),
          className = this.getClassName();

    if (tagName !== null) {
      indent = this.adjustIndent(indent);

      const childNodesHTML = this.childNodesAsHTML(indent, context);

      if (childNodesHTML === null) {
        const selfClosingTag = (className !== null) ?
                                `<${tagName} class="${className}"/>` :
                                  `<${tagName}/>`;

        html = `${indent}${selfClosingTag}
`;
      } else {
        const startTag = (className !== null) ?
                          `<${tagName} class="${className}">` :
                            `<${tagName}>`,
              endTag = `<\\${tagName}>`;

        html = `${indent}${startTag}
${childNodesHTML}${indent}${endTag}
`;
      }
    }

    return html;
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

  adjustIndent(indent) {
    indent = `  ${indent}`;

    return indent;
  }

  createDOMElement(context) {
    let domElement = null;

    const tagName = this.getTagName();

    if (tagName !== null) {
      domElement = document.createElement(tagName);

      const className = this.getClassName();

      if (className !== null) {
        Object.assign(domElement, {
          className
        });
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
        const domElement = childNode.createDOMElement(context);

        if (domElement !== null) {
          this.insertDOMElement(domElement);
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
