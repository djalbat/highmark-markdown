"use strict";

import HTMLNode from "../../node/html";
import DivisionHTMLTransform from "../../transform/html/division";

import { HTML_RULE_NAME } from "../../ruleNames";
import { divisionHTMLNodesFromNode } from "../../utilities/html";

export default class TopmostHTMLNode extends HTMLNode {
  resolve(context) {
    let divisionHTMLNodes,
        divisionHTMLTransforms;

    divisionHTMLNodes = this.getDivisionHTMLNodes();

    divisionHTMLTransforms = divisionHTMLTransformsFromDivisionHTMLNodes(divisionHTMLNodes);

    divisionHTMLNodes = [];

    let pageNumber = 1;

    divisionHTMLTransforms.forEach((divisionHTMLTransform) => {
      divisionHTMLTransform.remove();

      pageNumber = divisionHTMLTransform.resolve(divisionHTMLNodes, pageNumber, context);
    });

    divisionHTMLTransforms = divisionHTMLTransformsFromDivisionHTMLNodes(divisionHTMLNodes);

    const topmostHTMLNode = this; ///

    divisionHTMLTransforms.forEach((divisionHTMLTransform) => {
      divisionHTMLTransform.appendToTopmostHTMLNode(topmostHTMLNode);
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

function divisionHTMLTransformsFromDivisionHTMLNodes(divisionHTMLNodes) {
  const divisionHTMLTransforms = divisionHTMLNodes.map((divisionHTMLNode) => {
    const divisionHTMLTransform = DivisionHTMLTransform.fromDivisionHTMLNode(divisionHTMLNode);

    return divisionHTMLTransform;
  });

  return divisionHTMLTransforms;
}
