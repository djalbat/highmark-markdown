"use strict";

import MarkdownNode from "../../node/markdown";
import FootnotesListMarkdownNode from "../../node/markdown/footnotesList";

import { renumberLinkMarkdownNodes, renumberLinkMarkdownNodesHTML } from "../../utilities/link";

export default class DivisionMarkdownNode extends MarkdownNode {
  constructor(ruleName, childNodes, precedence, opacity, domElement, className) {
    super(ruleName, childNodes, precedence, opacity, domElement);

    this.className = className;
  }

  getClassName() {
    return this.className;
  }

  adjustIndent(indent) {
    return indent;
  }

  className(context) {
    return this.className;
  }

  asHTML(indent, context) {
    const { divisionClassName = null } = context;

    this.className = divisionClassName; ///

    const html = super.asHTML(indent, context);

    return html;
  }

  childNodesAsHTML(indent, context) {
    const divisionMarkdownNode = this,  ///
          footnotesListMarkdownNode = FootnotesListMarkdownNode.fromDivisionMarkdownNode(divisionMarkdownNode, context);

    let childNodesHTML = super.childNodesAsHTML(indent, context);

    if (footnotesListMarkdownNode !== null) {
      const footnotesListMarkdownNodeHTML = footnotesListMarkdownNode.asHTML(indent, context);

      childNodesHTML = `${childNodesHTML}${footnotesListMarkdownNodeHTML}`;

      childNodesHTML = renumberLinkMarkdownNodesHTML(childNodesHTML, divisionMarkdownNode, footnotesListMarkdownNode, context);
    }

    return childNodesHTML;
  }

  createChildNodeDOMElements(context) {
    const divisionMarkdownNode = this,  ///
          footnotesListMarkdownNode = FootnotesListMarkdownNode.fromDivisionMarkdownNode(divisionMarkdownNode, context);

    super.createChildNodeDOMElements(context);

    if (footnotesListMarkdownNode !== null) {
      const footnotesListMarkdownNodeDOMElement = footnotesListMarkdownNode.createDOMElement(context),
            childNodeDOMElement = footnotesListMarkdownNodeDOMElement;  ///

      this.insertDOMElement(childNodeDOMElement);

      renumberLinkMarkdownNodes(divisionMarkdownNode, footnotesListMarkdownNode, context);
    }
  }

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) {
    const className = null,
          divisionMarkdownNode = MarkdownNode.fromRuleNameChildNodesAndOpacity(DivisionMarkdownNode, ruleName, childNodes, opacity, className);

    return divisionMarkdownNode;
  }
}

