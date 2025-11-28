"use strict";

import HTMLNode from "../../node/html";
import IndexHTMLTransform from "../../transform/html/index";
import DivisionHTMLTransform from "../../transform/html/division";
import ContentsListHTMLTransform from "../../transform/html/list/contents";

import { HTML_MARKDOWN_RULE_NAME } from "../../ruleNames/markdown";
import { divisionHTMLNodesFromNode, indexDirectiveHTMLNodeFromNode, contentsDirectiveHTMLNodeFromNode } from "../../utilities/html";

export default class TopmostHTMLNode extends HTMLNode {
  getRuleName() {
    const ruleName = HTML_MARKDOWN_RULE_NAME;

    return ruleName;
  }

  getDivisionHTMLNode() {
    const index = 0,
          divisionHTMLNode = this.getDivisionHTMLNodeAt(index);

    return divisionHTMLNode;
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

  adjustIndent(indent) {
    return indent;
  }

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
    let pageNumber;

    pageNumber = 1;

    Object.assign(context, {
      pageNumber
    });

    const htmlTransforms = [],
          topmostHTMLNode = this,  //
          divisionHTMLNodes = this.getDivisionHTMLNodes(),
          divisionHTMLTransforms = divisionHTMLTransformsFromDivisionHTMLNodes(divisionHTMLNodes);

    divisionHTMLTransforms.forEach((divisionHTMLTransform) => {
      divisionHTMLTransform.paginate(htmlTransforms, context);
    });

    delete context.pageNumber;

    divisionHTMLTransforms.forEach((divisionHTMLTransform) => {
      divisionHTMLTransform.remove();
    });

    htmlTransforms.forEach((htmlTransform) => {
      htmlTransform.appendToTopmostHTMLNode(topmostHTMLNode);
    });
  }

  addIndex(context) {
    const node = this,  ///
          indexDirectiveHTMLNode = indexDirectiveHTMLNodeFromNode(node);

    if (indexDirectiveHTMLNode === null) {
      return;
    }

    const divisionHTMLNodes = this.getDivisionHTMLNodes(),
          indexHTMLTransform = IndexHTMLTransform.fromIndexDirectiveHTMLNodeAndDivisionHTMLNodes(indexDirectiveHTMLNode, divisionHTMLNodes, context);

    if (indexHTMLTransform !== null) {
      indexHTMLTransform.addAfterIndexDirectiveHTMLNode(indexDirectiveHTMLNode);
    }
  }

  addContents(context) {
    const node = this,  ///
          contentsDirectiveHTMLNode = contentsDirectiveHTMLNodeFromNode(node);

    if (contentsDirectiveHTMLNode === null) {
      return;
    }

    const topmostHTMLNode = this, ///
          contentsListHTMLTransform = ContentsListHTMLTransform.fromContentsDirectiveHTMLNodeAndTopmostHTMLNode(contentsDirectiveHTMLNode, topmostHTMLNode, context);

    if (contentsListHTMLTransform !== null) {
      contentsListHTMLTransform.addAfterContentsDirectiveHTMLNode(contentsDirectiveHTMLNode);
    }
  }

  static tagName = "html";

  static className = null;

  static fromNothing() { return HTMLNode.fromNothing(TopmostHTMLNode); }

  static fromChildHTMLNodes(childHTMLNodes) { return HTMLNode.fromChildHTMLNodes(TopmostHTMLNode, childHTMLNodes); }
}

function divisionHTMLTransformsFromDivisionHTMLNodes(divisionHTMLNodes) {
  const divisionHTMLTransforms = divisionHTMLNodes.map((divisionHTMLNode) => {
    const divisionHTMLTransform = DivisionHTMLTransform.fromDivisionHTMLNode(divisionHTMLNode);

    return divisionHTMLTransform;
  });

  return divisionHTMLTransforms;
}
