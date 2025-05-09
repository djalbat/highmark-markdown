"use strict";

import HTMLNode from "../../node/html";
import PageNumberHTMLNode from "../../node/html/pageNumber";
import PageNumberHTMLTransform from "../../transform/html/pageNumber";
import IndexAnchorHTMLTransform from "../../transform/html/indexAnchor";
import FootnotesListHTMLTransform from "../../transform/html/list/footnotes";

import { DIVISION_RULE_NAME } from "../../ruleNames";
import { groupHTMLNodes,
         removeHTMLNodes,
         addFootnoteHTMLNodes,
         removeFootnoteHTMLNodes,
         paginateGroupedHTMLNodes,
         numberFootnoteLinkHTMLNodes,
         removeFootnotesDirectiveHTMLNode,
         removePageNumberDirectiveHTMLNode,
         removeNestedFootnoteLinkHTMLNodes,
         lineHTMLTransformsFromFootnoteHTMLTransforms,
         footnoteItemHTMLTransformsFromLineHTMLTransforms } from "../../utilities/division";

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

  resolve(divisionHTMLNodes, context) {
    const node = this;

    removeNestedFootnoteLinkHTMLNodes(node);

    const pageNumberDirectiveHTNLTransform = removePageNumberDirectiveHTMLNode(node),
          footnotesDirectiveHTMLNode = removeFootnotesDirectiveHTMLNode(node),
          footnoteHTMLTransforms = removeFootnoteHTMLNodes(node);

    if (footnotesDirectiveHTMLNode !== null) {
      addFootnoteHTMLNodes(footnoteHTMLTransforms, node, context);
    }

    this.paginate(pageNumberDirectiveHTNLTransform, divisionHTMLNodes, context);
  }

  paginate(pageNumberDirectiveHTNLTransform, divisionHTMLNodes, context) {
    const node = this,  ///
          outerNode = this.getOuterNode(),
          pageNumbers = (pageNumberDirectiveHTNLTransform !== null),
          identifierMap = {},
          divisionClassName = outerNode.className(context);

    const htmlNodes = removeHTMLNodes(node),
          groupedHTMLNodesArray = groupHTMLNodes(htmlNodes),
          paginatedHTMLNodesArray = paginateGroupedHTMLNodes(groupedHTMLNodesArray, context);

    paginatedHTMLNodesArray.forEach((paginatedHTMLNodes) => {
      let pageNumber;

      ({ pageNumber } = context);

      const divisionHTMLNode = DivisionHTMLNode.fromPaginatedHTMLNodesAndDivisionClassName(paginatedHTMLNodes, divisionClassName);

      divisionHTMLNode.resolveFootnotes(identifierMap, context);

      if (pageNumbers) {
        const indexAnchorHTMLTransform = IndexAnchorHTMLTransform.fromPageNumber(pageNumber),
              pageNumberHTMLTransform = PageNumberHTMLTransform.fromPageNumber(pageNumber);

        indexAnchorHTMLTransform.prependToDivisionHTMLNode(divisionHTMLNode);

        pageNumberHTMLTransform.appendToDivisionHTMLNode(divisionHTMLNode);
      }

      divisionHTMLNodes.push(divisionHTMLNode);

      pageNumber++;

      Object.assign(context, {
        pageNumber
      });
    });
  }

  pageNumber() {
    const pageNumber = this.fromFirstLastChildNode((firstLastChildNode) => {
      let pageNumber = null;

      const firstLastChildNodePageNumberHTMLNode = (firstLastChildNode instanceof PageNumberHTMLNode);

      if (firstLastChildNodePageNumberHTMLNode) {
        const pageNumberHTMLNode = firstLastChildNode;  ///

        pageNumber = pageNumberHTMLNode.getPageNumber();
      }

      return pageNumber;
    });

    return pageNumber;
  }

  resolveFootnotes(identifierMap, context) {
    const node = this,  ///
          footnoteHTMLTransforms = removeFootnoteHTMLNodes(node),
          footnoteHTMLTransformsLength = footnoteHTMLTransforms.length;

    if (footnoteHTMLTransformsLength === 0) {
      return;
    }

    const divisionHTMLNode = node,  ///
          start = numberFootnoteLinkHTMLNodes(footnoteHTMLTransforms, identifierMap, node, context),
          lineHTMLTransforms = lineHTMLTransformsFromFootnoteHTMLTransforms(footnoteHTMLTransforms),
          footnoteItemHTMLTransforms = footnoteItemHTMLTransformsFromLineHTMLTransforms(lineHTMLTransforms, identifierMap, start),
          footnotesListHTMLTransform = FootnotesListHTMLTransform.fromStartAndFootnoteItemHTMLTransforms(start, footnoteItemHTMLTransforms);

    footnotesListHTMLTransform.appendToDivisionHTMLNode(divisionHTMLNode);
  }

  asString() {
    const ruleName = this.getRuleName(),
          string = ruleName;  ///

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
