"use strict";

import HTMLNode from "../../node/html";
import PageNumberHTMLTransform from "../../transform/html/pageNumber";
import FootnotesListHTMLTransform from "../../transform/html/footnotesList";

import { DIVISION_RULE_NAME } from "../../ruleNames";
import { footnoteHTMLNodesFromNode, footnoteLinkHTMLNodesFromNode, footnotesDirectiveHTMLNodeFromNode } from "../../utilities/html";
import { groupHTMLNodes,
         removeHTMLNodes,
         removeFootnoteHTMLNodes,
         paginateGroupedHTMLNodes,
         reorderFootnoteHTMLNodes,
         numberFootnoteLinkHTMLNodes,
         removeFootnotesDirectiveHTMLNode,
         removePageNumberDirectiveHTMLNode,
         removeNestedFootnoteLinkHTMLNodes,
         lineHTMLTransformsFromFootnoteHTMLTransforms,
         footnoteItemHTMLTransformsFromLineHTMLTransforms } from "../../utilities/division";

export default class DivisionHTMLNode extends HTMLNode {
  className(context) {
    const { className } = this.constructor;

    return className;
  }

  getRuleName() {
    const ruleNme = DIVISION_RULE_NAME;

    return ruleNme;
  }

  getFootnoteHTMLNodes() {
    const node = this,  ///
          footnoteHTMLNodes = footnoteHTMLNodesFromNode(node);

    return footnoteHTMLNodes;
  }

  getFootnotesDirectiveHTMLNode() {
    const node = this,  ///
          footnotesDirectiveHTMLNode = footnotesDirectiveHTMLNodeFromNode(node)

    return footnotesDirectiveHTMLNode;
  }

  resolve(divisionHTMLNodes, pageNumber, context) {
    const node = this;

    removeNestedFootnoteLinkHTMLNodes(node);

    const pageNumbers = removePageNumberDirectiveHTMLNode(node),
          footnoteHTMLNodes = this.getFootnoteHTMLNodes(),
          footnoteHTMLTransforms = removeFootnoteHTMLNodes(footnoteHTMLNodes),
          footnotesDirectiveHTMLNode = this.getFootnotesDirectiveHTMLNode();

    if (footnotesDirectiveHTMLNode !== null) {
      removeFootnotesDirectiveHTMLNode(footnotesDirectiveHTMLNode);

      const footnoteLinkHTMLNodes = footnoteLinkHTMLNodesFromNode(node);

      reorderFootnoteHTMLNodes(footnoteLinkHTMLNodes, footnoteHTMLTransforms, context);
    }

    const htmlNodes = removeHTMLNodes(node),
          identifierMap = {},
          groupedHTMLNodesArray = groupHTMLNodes(htmlNodes),
          paginatedHTMLNodesArray = paginateGroupedHTMLNodes(groupedHTMLNodesArray, context);

    paginatedHTMLNodesArray.forEach((paginatedHTMLNodes) => {
      const divisionHTMLNode = DivisionHTMLNode.fromPaginatedHTMLNodes(paginatedHTMLNodes);

      divisionHTMLNode.resolveFootnotes(identifierMap, context);

      if (pageNumbers) {
        const pageNumberHTMLTransform = PageNumberHTMLTransform.fromPageNumber(pageNumber);

        pageNumberHTMLTransform.appendToDivisionHTMLNode(divisionHTMLNode);
      }

      divisionHTMLNodes.push(divisionHTMLNode);

      pageNumber++;
    });

    return pageNumber;
  }

  resolveFootnotes(identifierMap, context) {
    const node = this,  ///
          divisionHTMLNode = node,  ///
          footnoteHTMLNodes = footnoteHTMLNodesFromNode(node),
          footnoteLinkHTMLNodes = footnoteLinkHTMLNodesFromNode(node),
          footnoteHTMLTransforms = removeFootnoteHTMLNodes(footnoteHTMLNodes);

    const start = numberFootnoteLinkHTMLNodes(footnoteHTMLNodes, footnoteLinkHTMLNodes, identifierMap, context),
          lineHTMLTransforms = lineHTMLTransformsFromFootnoteHTMLTransforms(footnoteHTMLTransforms),
          footnoteItemHTMLTransforms = footnoteItemHTMLTransformsFromLineHTMLTransforms(lineHTMLTransforms, identifierMap, start),
          footnotesListHTMLTransform = FootnotesListHTMLTransform.fromStartAndFootnoteItemHTMLTransforms(start, footnoteItemHTMLTransforms);

    footnotesListHTMLTransform.appendToDivisionHTMLNode(divisionHTMLNode);
  }

  asString() {
    const string = DIVISION_RULE_NAME; ///

    return string;
  }

  static tagName = "div";

  static className = null;

  static fromNothing() { return HTMLNode.fromNothing(DivisionHTMLNode); }

  static fromOuterNode(outerNode) { return HTMLNode.fromOuterNode(DivisionHTMLNode, outerNode); }

  static fromPaginatedHTMLNodes(paginatedHTMLNodes) {
    const childNodes = paginatedHTMLNodes,  ///
          divisionHTMLNode = HTMLNode.fromChildNodes(DivisionHTMLNode, childNodes);

    return divisionHTMLNode;
  }
}
