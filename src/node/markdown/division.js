"use strict";

import MarkdownNode from "../../node/markdown";
import ContentsListMarkdownNode from "../../node/markdown/contentsList";
import FootnotesListMarkdownNode from "../../node/markdown/footnotesList";

import { replaceTokens } from "../../utilities/tokens";
import { parentNodeFromNodeAndChildNode } from "../../utilities/node";

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

    Object.assign(context, {
      replacementTokens
    });

    ContentsListMarkdownNode.fromDivisionMarkdownNode(divisionMarkdownNode, context);

    const { replacementChildNode = null, replacedChildNode = null } = context;

    if ((replacementChildNode !== null) && (replacedChildNode !== null)) {
      const node = this,  ///
            childNode = replacedChildNode,  ///
            parentNode = parentNodeFromNodeAndChildNode(node, childNode);

      parentNode.replaceChildNode(replacedChildNode, replacementChildNode);

      replaceTokens(replacedChildNode, replacementTokens, context);
    }

    delete context.replacementTokens;
    delete context.replacedChildNode;
    delete context.replacementChildNode;
  }

  createFootnotes(context) {
    const replacementTokens = [],
          divisionMarkdownNode = this;  ///

    Object.assign(context, {
      replacementTokens
    });

    FootnotesListMarkdownNode.fromDivisionMarkdownNode(divisionMarkdownNode, context);

    const { replacementChildNode = null } = context;

    if (replacementChildNode !== null) {
      const childNode = replacementChildNode,  ///
            parentNode = this;  ///

      parentNode.addChildNode(childNode);
    }
  }

  clone() {
    debugger
  }

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) {
    const divisionClassName = null,
          divisionMarkdownNode = MarkdownNode.fromRuleNameChildNodesAndOpacity(DivisionMarkdownNode, ruleName, childNodes, opacity, divisionClassName);

    return divisionMarkdownNode;
  }
}
