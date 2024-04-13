"use strict";

import { arrayUtilities } from "necessary";

import MarkdownNode from "../../node/markdown";

const { filter } = arrayUtilities;

import { nestNodes } from "../../utilities/tree";
import { headingMarkdownNodesFromNode, contentsMarkdownNodeFromNode } from "../../utilities/query";
// import FootnotesListMarkdownNode from "../../node/markdown/footnotesList";

// import { renumberLinkMarkdownNodes, renumberLinkMarkdownNodesHTML, appendFootnotesListMarkdownNodeHTML } from "../../utilities/footnotes";

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
    const divisionMarkdownNode = this,  ///
          headingMarkdownNodes = headingMarkdownNodesFromDivisionMarkdownNode(divisionMarkdownNode, context),
          headingMarkdownNodesLength = headingMarkdownNodes.length;

    if (headingMarkdownNodesLength === 0) {
      return;
    }

    const nodes = headingMarkdownNodes, ///
          levels = headingMarkdownNodes.map((headingMarkdownNode) => {
            const level = headingMarkdownNode.level(context);

            return level;
          }),
          nestedNodes = nestNodes(nodes, levels);

    debugger
  }

  createFootnotes(context) {

  }

  recreateFootnotes(context) {

  }

  // childNodesAsHTML(indent, context) {
  //   const divisionMarkdownNode = this,  ///
  //         contentsListMarkdownNode = ContentsListMarkdownNode.fromDivisionMarkdownNode(divisionMarkdownNode, context),
  //         footnotesListMarkdownNode = FootnotesListMarkdownNode.fromDivisionMarkdownNode(divisionMarkdownNode, context);
  //
  //   let childNodesHTML = super.childNodesAsHTML(indent, context);
  //
  //   if (contentsListMarkdownNode !== null) {
  //     childNodesHTML = replaceContentsMarkdownNodeHTML(childNodesHTML, divisionMarkdownNode, contentsListMarkdownNode, context);
  //   }
  //
  //   if (footnotesListMarkdownNode !== null) {
  //     childNodesHTML = renumberLinkMarkdownNodesHTML(childNodesHTML, divisionMarkdownNode, footnotesListMarkdownNode, context);
  //
  //     childNodesHTML = appendFootnotesListMarkdownNodeHTML(childNodesHTML, footnotesListMarkdownNode, indent, context);
  //   }
  //
  //   return childNodesHTML;
  // }

  // createChildNodeDOMElements(context) {
  //   const divisionMarkdownNode = this,  ///
  //         footnotesListMarkdownNode = FootnotesListMarkdownNode.fromDivisionMarkdownNode(divisionMarkdownNode, context);
  //
  //   super.createChildNodeDOMElements(context);
  //
  //   if (footnotesListMarkdownNode !== null) {
  //     const footnotesListMarkdownNodeDOMElement = footnotesListMarkdownNode.createDOMElement(context),
  //           childNodeDOMElement = footnotesListMarkdownNodeDOMElement;  ///
  //
  //     this.insertDOMElement(childNodeDOMElement);
  //
  //     renumberLinkMarkdownNodes(divisionMarkdownNode, footnotesListMarkdownNode, context);
  //   }
  // }

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) {
    const divisionClassName = null,
          divisionMarkdownNode = MarkdownNode.fromRuleNameChildNodesAndOpacity(DivisionMarkdownNode, ruleName, childNodes, opacity, divisionClassName);

    return divisionMarkdownNode;
  }
}

function headingMarkdownNodesFromDivisionMarkdownNode(divisionMarkdownNode, context) {
  let headingMarkdownNodes = [];

  const node = divisionMarkdownNode,  ///
        contentsMarkdownNode = contentsMarkdownNodeFromNode(node);

  if (contentsMarkdownNode !== null) {
    const maximumLevel = contentsMarkdownNode.maximumLevel(context);

    headingMarkdownNodesFromNode(node, headingMarkdownNodes);

    filter(headingMarkdownNodes, (headingMarkdownNode) => {
      const level = headingMarkdownNode.level(context);

      if (level <= maximumLevel) {
        return true;
      }
    });
  }

  return headingMarkdownNodes;
}
