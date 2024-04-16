"use strict";

import MarkdownNode from "../../node/markdown";
import ContentsListMarkdownNode from "../../node/markdown/contentsList";
import FootnotesListMarkdownNode from "../../node/markdown/footnotesList";

import { replaceTokens } from "../../utilities/tokens";

export default class DivisionMarkdownNode extends MarkdownNode {
  constructor(ruleName, childNodes, precedence, opacity, domElement, divisionClassName) {
    super(ruleName, childNodes, precedence, opacity, domElement);

    this.divisionClassName = divisionClassName;
  }

  getDivisionClassName() {
    return this.divisionClassName;
  }

  setDivisionClassName(divisionClassName) {
    this.divisionClassName = divisionClassName;
  }

  className(context) {
    const className = this.divisionClassName; ///

    return className;
  }

  createContents(context) {
    const replacementTokens = [],
          divisionMarkdownNode = this;

    let replacedChildNode = null,
        replacementChildNode = null;

    Object.assign(context, {
      replacementTokens,
      replacedChildNode,
      replacementChildNode
    });

    ContentsListMarkdownNode.fromDivisionMarkdownNode(divisionMarkdownNode, context);

    ({ replacementChildNode, replacedChildNode } = context);

    if ((replacementChildNode !== null) && (replacedChildNode !== null)) {
      const childNode = replacedChildNode,  ///
            parentNode = this.findParentNode(childNode);

      parentNode.replaceChildNode(replacedChildNode, replacementChildNode);

      replaceTokens(replacedChildNode, replacementTokens, context);
    }

    delete context.replacementTokens;
    delete context.replacedChildNode;
    delete context.replacementChildNode;
  }

  createFootnotes(context) {
    const divisionMarkdownNode = this;  ///

    let replacementChildNode = null;

    Object.assign(context, {
      replacementChildNode
    });

    FootnotesListMarkdownNode.fromDivisionMarkdownNode(divisionMarkdownNode, context);

    ({ replacementChildNode = null } = context);

    if (replacementChildNode !== null) {
      const childNode = replacementChildNode,  ///
            parentNode = this;  ///

      parentNode.addChildNode(childNode);
    }
  }

  findParentNode(childNode, node = this) {
    let parentNode = null

    const nodeNonTerminalNode = node.isNonTerminalNode();

    if (nodeNonTerminalNode) {
      const nonTerminalNode = node, ///
            childNodes = nonTerminalNode.getChildNodes(),
            index = childNodes.indexOf(childNode);

      if (index !== -1) {
        parentNode = node;  ///
      } else {
        childNodes.some((childNode) => {
          const node = childNode; ///

          parentNode = this.findParentNode(childNode, node);

          if (parentNode !== null) {
            return true;
          }
        });
      }
    }

    return parentNode;
  }

  clone() { return super.clone(this.divisionClassName); }

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) {
    const divisionClassName = null,
          divisionMarkdownNode = MarkdownNode.fromRuleNameChildNodesAndOpacity(DivisionMarkdownNode, ruleName, childNodes, opacity, divisionClassName);

    return divisionMarkdownNode;
  }
}
