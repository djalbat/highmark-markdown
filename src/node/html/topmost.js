"use strict";

import HTMLNode from "../../node/html";
import DivisionHTMLTransform from "../../transform/html/division";
import ContentsListHTMLTransform from "../../transform/html/list/contents";
import ContentsDirectiveHTMLTransform from "../../transform/html/directive/contents";

import { HTML_RULE_NAME } from "../../ruleNames";
import { divisionHTMLNodesFromNode, contentsDirectiveHTMLNodeFromNode } from "../../utilities/html";

export default class TopmostHTMLNode extends HTMLNode {
  resolve(context) {
    this.paginate(context);

    this.addContents(context);
  }

  paginate(context) {
    let divisionHTMLNodes,
        divisionHTMLTransforms;

    divisionHTMLNodes = this.getDivisionHTMLNodes();

    divisionHTMLTransforms = divisionHTMLTransformsFromDivisionHTMLNodes(divisionHTMLNodes);

    divisionHTMLNodes = [];

    let pageNumber;

    pageNumber = 1;

    Object.assign(context, {
      pageNumber
    });

    divisionHTMLTransforms.forEach((divisionHTMLTransform) => {
      divisionHTMLTransform.remove();

      divisionHTMLTransform.resolve(divisionHTMLNodes, context);
    });

    delete context.pageNumber;

    divisionHTMLTransforms = divisionHTMLTransformsFromDivisionHTMLNodes(divisionHTMLNodes);

    const topmostHTMLNode = this; ///

    divisionHTMLTransforms.forEach((divisionHTMLTransform) => {
      divisionHTMLTransform.appendToTopmostHTMLNode(topmostHTMLNode);
    });
  }

  addContents(context) {
    const node = this,  ///
          contentsDirectiveHTMLTransform = removeContentsDirectiveHTMLNode(node);

    if (contentsDirectiveHTMLTransform === null) {
      return;
    }

    const topmostHTMLNOde = this, ///
          contentsListHTMLTransform = ContentsListHTMLTransform.fromTopmostHTMLNode(topmostHTMLNOde, context);

    contentsListHTMLTransform.replaceContentsDirectiveHTMLTransform(contentsDirectiveHTMLTransform);
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

export function removeContentsDirectiveHTMLNode(node) {
  let contentsDirectiveHTMLTransform = null;

  const contentsDirectiveHTMLNode = contentsDirectiveHTMLNodeFromNode(node);

  if (contentsDirectiveHTMLNode !== null) {
    contentsDirectiveHTMLTransform = ContentsDirectiveHTMLTransform.fromContentsDirectiveHTMLNode(contentsDirectiveHTMLNode);
  }

  return contentsDirectiveHTMLTransform;
}
