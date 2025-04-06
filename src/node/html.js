"use strict";

import { Node } from "occam-dom";

import elementMap from "../elementMap";

import { EMPTY_STRING, DOUBLE_SPACE } from "../constants";

export default class HTMLNode extends Node {
  getRuleName() {
    let ruleName;

    const outerNode = this.getOuterNode(),
          nonTerminalNode = outerNode;  ///

    ruleName = nonTerminalNode.getRuleName();

    return ruleName;
  }

  tagName(context) {
    let tagName;

    const ruleName = this.getRuleName();

    const element = elementMap[ruleName];

    ({ tagName } = element);

    return tagName;
  }

  className(context) {
    let className;

    const ruleName = this.getRuleName();

    const element = elementMap[ruleName];

    ({ className } = element);

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

  attributeName(context) {
    const attributeName = null;

    return attributeName;
  }

  attributeValue(context) {
    const attributeValue = null;

    return attributeValue;
  }

  adjustIndent(indent) {
    indent = (indent === null) ?
               EMPTY_STRING :
                `${DOUBLE_SPACE}${indent}`;

    return indent;
  }

  asHTML(indent, context) {
    if (context === undefined) {
      context = indent; ///

      indent = EMPTY_STRING;
    }

    let html;

    const tagName = this.tagName(context);

    if (tagName === null) {
      const childNodesHTML = this.childNodesAsHTML(indent, context);

      html = childNodesHTML;  ///
    } else {
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

  childNodesAsHTML(indent, context) {
    const childNodesHTML = this.reduceChildNode((childNodesHTML, childNode) => {
      const childNodeHTML = childNode.asHTML(indent, context);

      if (childNodeHTML !== null) {
        childNodesHTML = (childNodesHTML === null) ?
                           childNodeHTML :  ///
                            `${childNodesHTML}${childNodeHTML}`;
      }

      return childNodesHTML;
    }, null);

    return childNodesHTML;
  }

  static fromNothing(Class) {
    if (Class === undefined) {
      Class = HTMLNode; ///
    }

    const node = Node.fromNothing(Class);

    return node;
  }

  static fromOuterNode(Class, outerNode) {
    if (outerNode === undefined) {
      outerNode = Class;  ///

      Class = HTMLNode; ///
    }

    const node = Node.fromOuterNode(Class, outerNode);

    return node;
  }
}
