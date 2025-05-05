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
import {EMPTY_STRING} from "../../constants";

export default class DivisionHTMLNode extends HTMLNode {
  constructor(outerNode, parentNode, childNodes, domElement, divisionClassName) {
    super(outerNode, parentNode, childNodes, domElement);

    this.divisionClassName = divisionClassName;
  }

  getDivisionClassName() {
    return this.divisionClassName;
  }

  className(context) {
    const className = this.divisionClassName; ///

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

    const outerNode = this.getOuterNode(),
          htmlNodes = removeHTMLNodes(node),
          identifierMap = {},
          divisionClassName = outerNode.className(context),
          groupedHTMLNodesArray = groupHTMLNodes(htmlNodes),
          paginatedHTMLNodesArray = paginateGroupedHTMLNodes(groupedHTMLNodesArray, context);

    paginatedHTMLNodesArray.forEach((paginatedHTMLNodes) => {
      const divisionHTMLNode = DivisionHTMLNode.fromPaginatedHTMLNodesAndDivisionClassName(paginatedHTMLNodes, divisionClassName);

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
          footnoteHTMLNodes = footnoteHTMLNodesFromNode(node),
          footnoteHTMLTransforms = removeFootnoteHTMLNodes(footnoteHTMLNodes),
          footnoteHTMLTransformsLength = footnoteHTMLTransforms.length;

    if (footnoteHTMLTransformsLength === 0) {
      return;
    }

    const footnoteLinkHTMLNodes = footnoteLinkHTMLNodesFromNode(node),
          divisionHTMLNode = node,  ///
          start = numberFootnoteLinkHTMLNodes(footnoteHTMLNodes, footnoteLinkHTMLNodes, identifierMap, context),
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

  static fromNothing() {
    const divisionClassName = null,
          divisionHTMLNode = HTMLNode.fromNothing(DivisionHTMLNode, divisionClassName);

    return divisionHTMLNode;
  }

  static fromOuterNode(outerNode) {
    const divisionClassName = null,
          divisionHTMLNode = HTMLNode.fromOuterNode(DivisionHTMLNode, outerNode, divisionClassName);

    return divisionHTMLNode;
  }

  static fromPaginatedHTMLNodesAndDivisionClassName(paginatedHTMLNodes, divisionClassName) {
    const childNodes = paginatedHTMLNodes,  ///
          divisionHTMLNode = HTMLNode.fromChildNodes(DivisionHTMLNode, childNodes, divisionClassName);

    return divisionHTMLNode;
  }
}
