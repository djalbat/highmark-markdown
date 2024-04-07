"use strict";

import MarkdownNode from "../../node/markdown";
import FootnotesListMarkdownNode from "../../node/markdown/footnotesList";

import { renumberLinkMarkdownNodes, renumberLinkMarkdownNodesHTML } from "../../utilities/link";

export default class DivisionMarkdownNode extends MarkdownNode {
  constructor(ruleName, childNodes, precedence, opacity, domElement, divisionClassName) {
    super(ruleName, childNodes, precedence, opacity, domElement);

    this.divisionClassName = divisionClassName;
  }

  getDivisionClassName() {
    return this.divisionClassName;
  }

  adjustIndent(indent) {
    return indent;
  }

  className(context) {
    const className = this.divisionClassName; ///

    return className;
  }

  asHTML(indent, context) {
    const { divisionClassName = null } = context;

    this.divisionClassName = divisionClassName; ///

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
    const divisionClassName = null,
          divisionMarkdownNode = MarkdownNode.fromRuleNameChildNodesAndOpacity(DivisionMarkdownNode, ruleName, childNodes, opacity, divisionClassName);

    return divisionMarkdownNode;
  }
}

