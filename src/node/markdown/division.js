"use strict";

import { arrayUtilities } from "necessary";

import MarkdownNode from "../../node/markdown";
import ContentsListMarkdownNode from "../../node/markdown/contentsList";
import FootnotesListMarkdownNode from "../../node/markdown/footnotesList";

import { renumberLinkMarkdownNodes } from "../../utilities/footnotes";
import { replaceNode, replaceTokens } from "../../utilities/replace";
import { ignoreMarkdownNodeFromNode, headingMarkdownNodesFromNode, contentsMarkdownNodeFromNode, footnotesMarkdownNodesFromNode } from "../../utilities/query";

const { filter } = arrayUtilities;

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

  isIgnored() {
    const node = this,
          ignoreMarkdownNode = ignoreMarkdownNodeFromNode(node),
          ignored = (ignoreMarkdownNode !== null);

    return ignored;
  }

  findParentNode(childNode, node = this) {
    let parentNode = null;

    const nodeNonTerminalNode = node.isNonTerminalNode();

    if (nodeNonTerminalNode) {
      const nonTerminalNode = node, ///
            childNodes = nonTerminalNode.getChildNodes(),
            index = childNodes.indexOf(childNode);

      if (index !== -1) {
        parentNode = node;  ///
      } else {
        const nodes = childNodes; ///

        nodes.some((node) => {
          parentNode = this.findParentNode(childNode, node);

          if (parentNode !== null) {
            return true;
          }
        });
      }
    }

    return parentNode;
  }

  createContents(context) {
    let contentsCreated = false;

    const node = this,  ///
          contentsMarkdownNode = contentsMarkdownNodeFromNode(node);

    if (contentsMarkdownNode !== null) {
      const divisionMarkdownNode = this,  ///
            headingMarkdownNodes = headingMarkdownNodesFromDivisionMarkdownNodeAndContentsMarkdownNode(divisionMarkdownNode, contentsMarkdownNode, context),
            headingMarkdownNodesLength = headingMarkdownNodes.length;

      if (headingMarkdownNodesLength === 0) {
        return;
      }

      const { tokens } = context,
            contentsListMarkdownNode = ContentsListMarkdownNode.fromHeadingMarkdownNodes(headingMarkdownNodes, context),
            contentsListMarkdownNodeTokens = contentsListMarkdownNode.getTokens(),
            childNode = contentsMarkdownNode,  ///
            parentNode = this.findParentNode(childNode),
            replacedNode = contentsMarkdownNode, ///
            replacementNode = contentsListMarkdownNode,  ///
            replacementTokens = contentsListMarkdownNodeTokens; ///

      replaceNode(replacementNode, replacedNode, parentNode);

      replaceTokens(replacementTokens, replacedNode, tokens);

      contentsCreated = true;
    }

    return contentsCreated;
  }

  createFootnotes(context) {
    const node = this,  ///
          footnotesMarkdownNodes = footnotesMarkdownNodesFromNode(node);

    footnotesMarkdownNodes.forEach((footnotesMarkdownNode) => {
      let childNode,
          parentNode;

      childNode = footnotesMarkdownNode;  ///

      parentNode = this.findParentNode(childNode);

      const subDivisionMarkdownNode = parentNode;  ///

      childNode = subDivisionMarkdownNode;  ///

      parentNode = this.findParentNode(childNode);

      const divisionMarkdownNode = parentNode,  ///
            footnotesListMarkdownNode = FootnotesListMarkdownNode.fromDivisionMarkdownNode(divisionMarkdownNode, context);

      if (footnotesListMarkdownNode !== null) {
        childNode = footnotesListMarkdownNode;  ///

        divisionMarkdownNode.appendChildNode(childNode);

        renumberLinkMarkdownNodes(divisionMarkdownNode, footnotesListMarkdownNode, context)
      }
    });
  }

  createFootnotesListMarkdownNode(context) {
    const divisionMarkdownNode = this,  ///
          footnotesListMarkdownNode = FootnotesListMarkdownNode.fromDivisionMarkdownNode(divisionMarkdownNode, context);

    return footnotesListMarkdownNode;
  }

  removeFootnotesListMarkdownNode(footnotesListMarkdownNode) {
    const childNode = footnotesListMarkdownNode;  ///

    this.removeChildNode(childNode);
  }

  clone() { return super.clone(this.divisionClassName); }

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) {
    const divisionClassName = null,
          divisionMarkdownNode = MarkdownNode.fromRuleNameChildNodesAndOpacity(DivisionMarkdownNode, ruleName, childNodes, opacity, divisionClassName);

    return divisionMarkdownNode;
  }
}

function headingMarkdownNodesFromDivisionMarkdownNodeAndContentsMarkdownNode(divisionMarkdownNode, contentsMarkdownNode, context) {
  const headingMarkdownNodes = [],
        minimumPosition = contentsMarkdownNode.minimumPosition(context),
        maximumLevel = contentsMarkdownNode.maximumLevel(context),
        node = divisionMarkdownNode;  ///

  headingMarkdownNodesFromNode(node, headingMarkdownNodes);

  filter(headingMarkdownNodes, (headingMarkdownNode) => {
    const position = headingMarkdownNode.position(context);

    if (position > minimumPosition) {
      return true;
    }
  });

  let { divisionMarkdownNodes } = context;

  const index = divisionMarkdownNodes.indexOf(divisionMarkdownNode),
        start = index + 1;

  divisionMarkdownNodes = divisionMarkdownNodes.slice(start); ///

  divisionMarkdownNodes.forEach((divisionMarkdownNode) => {
    const node = divisionMarkdownNode;  ///

    headingMarkdownNodesFromNode(node, headingMarkdownNodes);
  });

  filter(headingMarkdownNodes, (headingMarkdownNode) => {
    const level = headingMarkdownNode.getLevel();

    if (level <= maximumLevel) {
      return true;
    }
  });

  return headingMarkdownNodes;
}