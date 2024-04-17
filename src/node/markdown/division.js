"use strict";

import MarkdownNode from "../../node/markdown";
import ContentsListMarkdownNode from "../../node/markdown/contentsList";
import FootnotesListMarkdownNode from "../../node/markdown/footnotesList";

import { replaceTokens } from "../../utilities/tokens";
import { contentsMarkdownNodeFromNode } from "../../utilities/query";

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
    const node = this,  ///
          contentsMarkdownNode = contentsMarkdownNodeFromNode(node);

    if (contentsMarkdownNode === null) {
      return;
    }

    const replacementTokens = [];

    Object.assign(context, {
      replacementTokens
    });

    const divisionMarkdownNode = this,  ///
          contentsListMarkdownNode = ContentsListMarkdownNode.fromDivisionMarkdownNodeAndContentsMarkdownNode(divisionMarkdownNode, contentsMarkdownNode, context);

    if (contentsListMarkdownNode !== null) {
      const childNode = contentsMarkdownNode,  ///
            parentNode = this.findParentNode(childNode),
            replacedChildNode = contentsMarkdownNode,  ///
            replacementChildNode = contentsListMarkdownNode; ///

      parentNode.replaceChildNode(replacedChildNode, replacementChildNode);

      replaceTokens(replacedChildNode, replacementTokens, context);
    }

    delete context.replacementTokens;
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

  createFootnotes(context) {
    const footnotesListMarkdownNode = this.createFootnotesListMarkdownNode(context);

    if (footnotesListMarkdownNode !== null) {
      const childNode = footnotesListMarkdownNode;  ///

      this.addChildNode(childNode);
    }

    return footnotesListMarkdownNode;
  }

  removeFootnotesListMarkdownNode(footnotesListMarkdownNode) {
    const childNode = footnotesListMarkdownNode;  ///

    this.removeChildNode(childNode);
  }

  createFootnotesListMarkdownNode(context) {
    const divisionMarkdownNode = this,  ///
          footnotesListMarkdownNode = FootnotesListMarkdownNode.fromDivisionMarkdownNode(divisionMarkdownNode, context);

    return footnotesListMarkdownNode;
  }

  clone() { return super.clone(this.divisionClassName); }

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) {
    const divisionClassName = null,
          divisionMarkdownNode = MarkdownNode.fromRuleNameChildNodesAndOpacity(DivisionMarkdownNode, ruleName, childNodes, opacity, divisionClassName);

    return divisionMarkdownNode;
  }
}
