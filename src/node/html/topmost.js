"use strict";

import HTMLNode from "../../node/html";

import { HTML_RULE_NAME } from "../../ruleNames";
import { divisionHTMLNodesFromNode } from "../../utilities/html";

export default class TopmostHTMLNode extends HTMLNode {
  resolve() {
    const divisionHTMLNodes = this.getDivisionHTMLNodes();

    divisionHTMLNodes.forEach((divisionHTMLNode) => {
      divisionHTMLNode.resolve();
    });
  }

  adjustIndent(indent) {
    return indent;
  }

  getRuleName() {
    const ruleName = HTML_RULE_NAME;

    return ruleName;
  }

  getDivisionHTMLNodes() {
    const node = this,  ///
          divisionHTMLNodes = divisionHTMLNodesFromNode(node);

    return divisionHTMLNodes;
  }

  getDivisionHTMLNodeAt(index) {
    const divisionHTMLNodes = this.getDivisionHTMLNodes(),
          divisionHTMLNode = divisionHTMLNodes[index] || null;

    return divisionHTMLNode;
  }

  static tagName = "html";

  static className = null;

  static fromNothing() { return HTMLNode.fromNothing(TopmostHTMLNode); }
}
