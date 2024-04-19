"use strict";

import { arrayUtilities } from "necessary";

import MarkdownNode from "../../node/markdown";
import ContentsListMarkdownNode from "../../node/markdown/contentsList";
import FootnotesListMarkdownNode from "../../node/markdown/footnotesList";

import { nestNodes } from "../../utilities/contents";
import { replaceTokens } from "../../utilities/tokens";
import { renumberLinkMarkdownNodes } from "../../utilities/footnotes";
import { contentsMarkdownNodeFromNode, headingMarkdownNodesFromNode } from "../../utilities/query";

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
    const node = this,  ///
          contentsMarkdownNode = contentsMarkdownNodeFromNode(node);

    if (contentsMarkdownNode === null) {
      return;
    }

    const headingMarkdownNodes = headingMarkdownNodesFromNode(node),
          minimumPosition = contentsMarkdownNode.minimumPosition(context),
          maximumLevel = contentsMarkdownNode.maximumLevel(context);

    filter(headingMarkdownNodes, (headingMarkdownNode) => {
      const level = headingMarkdownNode.getLevel(),
            position = headingMarkdownNode.position(context);

      if ((level <= maximumLevel) && (position > minimumPosition)) {
        return true;
      }
    });

    const headingMarkdownNodesLength = headingMarkdownNodes.length;

    if (headingMarkdownNodesLength === 0) {
      return;
    }

    const nodes = headingMarkdownNodes, ///
          nestedNode = nestNodes(nodes),
          childNestedNodes = nestedNode.getChildNestedNodes(),
          replacementTokens = [],
          nestedHeadingMarkdownNodes = childNestedNodes;  ///

    Object.assign(context, {
      replacementTokens
    });

    const contentsListMarkdownNode = ContentsListMarkdownNode.fromNestedHeadingMarkdownNodes(nestedHeadingMarkdownNodes, context),
          childNode = contentsMarkdownNode,  ///
          parentNode = this.findParentNode(childNode),
          replacedChildNode = contentsMarkdownNode,  ///
          replacementChildNode = contentsListMarkdownNode; ///

    parentNode.replaceChildNode(replacedChildNode, replacementChildNode);

    replaceTokens(replacedChildNode, replacementTokens, context);

    delete context.replacementTokens;
  }

  createFootnotes(context) {
    const footnotesListMarkdownNode = this.createFootnotesListMarkdownNode(context);

    if (footnotesListMarkdownNode !== null) {
      const childNode = footnotesListMarkdownNode,  ///
            divisionMarkdownNode = this;  ///

      this.addChildNode(childNode);

      renumberLinkMarkdownNodes(divisionMarkdownNode, footnotesListMarkdownNode, context)
    }

    return footnotesListMarkdownNode;
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
