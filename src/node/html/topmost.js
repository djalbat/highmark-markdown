"use strict";

import HTMLNode from "../../node/html";
import IndexHTMLTransform from "../../transform/html/index";
import DivisionHTMLTransform from "../../transform/html/division";
import ContentsListHTMLTransform from "../../transform/html/list/contents";
import IndexDirectiveHTMLTransform from "../../transform/html/directive/index";
import ContentsDirectiveHTMLTransform from "../../transform/html/directive/contents";

import { HTML_MARKDOWN_RULE_NAME } from "../../ruleNames/markdown";
import { divisionHTMLNodesFromNode, indexDirectiveHTMLNodeFromNode, contentsDirectiveHTMLNodeFromNode } from "../../utilities/html";

export default class TopmostHTMLNode extends HTMLNode {
  mount(parentDOMElement, siblingDOMElement, context) {
    this.childNodes.forEach((childNode) => {
      siblingDOMElement = childNode.mount(parentDOMElement, siblingDOMElement, context);
    });

    return siblingDOMElement;
  }

  unmount(parentDOMElement) {
    this.childNodes.forEach((childNode) => {
      childNode.unmount(parentDOMElement);
    });
  }

  resolve(context) {
    this.paginate(context);

    this.addContents(context);

    this.addIndex(context);
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

  addIndex(context) {
    const node = this,  ///
          indexDirectiveHTMLNode = indexDirectiveHTMLNodeFromNode(node);

    if (indexDirectiveHTMLNode === null) {
      return;
    }

    const divisionHTMLNodes = this.getDivisionHTMLNodes(),
          indexDirectiveHTMLTransform = IndexDirectiveHTMLTransform.fromIndexDirectiveHTMLNode(indexDirectiveHTMLNode),
          indexHTMLTransform = IndexHTMLTransform.fromIndexDirectiveHTMLTransformAndDivisionHTMLNodes(indexDirectiveHTMLTransform, divisionHTMLNodes, context);

    (indexHTMLTransform !== null) ?
      indexHTMLTransform.replaceIndexDirectiveHTMLTransform(indexDirectiveHTMLTransform) :
        indexDirectiveHTMLTransform.remove();
  }

  addContents(context) {
    const node = this,  ///
          contentsDirectiveHTMLNode = contentsDirectiveHTMLNodeFromNode(node);

    if (contentsDirectiveHTMLNode === null) {
      return;
    }

    const topmostHTMLNode = this, ///
          contentsDirectiveHTMLTransform = ContentsDirectiveHTMLTransform.fromContentsDirectiveHTMLNode(contentsDirectiveHTMLNode),
          contentsListHTMLTransform = ContentsListHTMLTransform.fromContentsDirectiveHTMLTransformAndTopmostHTMLNode(contentsDirectiveHTMLTransform, topmostHTMLNode, context);

    (contentsListHTMLTransform !== null) ?
      contentsListHTMLTransform.replaceContentsDirectiveHTMLTransform(contentsDirectiveHTMLTransform) :
        contentsDirectiveHTMLTransform.remove();
  }

  adjustIndent(indent) {
    return indent;
  }

  getRuleName() {
    const ruleName = HTML_MARKDOWN_RULE_NAME;

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
