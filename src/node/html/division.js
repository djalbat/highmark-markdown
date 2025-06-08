"use strict";

import { arrayUtilities } from "necessary";

import HTMLNode from "../../node/html";
import PageNumberHTMLNode from "../../node/html/pageNumber";
import PageNumberHTMLTransform from "../../transform/html/pageNumber";
import IndexAnchorHTMLTransform from "../../transform/html/indexAnchor";
import FootnoteItemHTMLTransform from "../../transform/html/item/footnote";
import FootnotesListHTMLTransform from "../../transform/html/list/footnotes";

import { DIVISION_MARKDOWN_RULE_NAME } from "../../ruleNames/markdown";
import { groupHTMLNodes, removeHTMLNodes, paginateGroupedHTMLNodes } from "../../utilities/division";
import { footnotesHTMLNodesFromNode,
         footnoteLinkHTMLNodesFromNode,
         footnotesDirectiveHTMLNodeFromNode,
         pageNumberDirectiveHTMLNodeFromNode } from "../../utilities/html";

const { extract } = arrayUtilities;

export default class DivisionHTMLNode extends HTMLNode {
  constructor(outerNode, parentNode, childNodes, domElement, divisionClassName) {
    super(outerNode, parentNode, childNodes, domElement);

    this.divisionClassName = divisionClassName;
  }

  getDivisionClassName() {
    return this.divisionClassName;
  }

  getDivDOMElement() {
    const domElement = this.getDOMElement(),
          divDOMElement = domElement;  ///

    return divDOMElement;
  }

  className(context) {
    const className = this.divisionClassName; ///

    return className;
  }

  getRuleName() {
    const ruleNme = DIVISION_MARKDOWN_RULE_NAME;

    return ruleNme;
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

  paginate(divisionHTMLNodes, context) {
    const node = this,
          footnotesDirectiveHTMLNode = footnotesDirectiveHTMLNodeFromNode(node),
          pageNumberDirectiveHTMLNode = pageNumberDirectiveHTMLNodeFromNode(node);

    const htmlNodes = removeHTMLNodes(node),
          groupedHTMLNodesArray = groupHTMLNodes(htmlNodes),
          paginatedHTMLNodesArray = paginateGroupedHTMLNodes(groupedHTMLNodesArray, context);

    const start = 0,
          outerNode = this.getOuterNode(),
          divisionClassName = outerNode.className(context);

    Object.assign(context, {
      start
    });

    paginatedHTMLNodesArray.forEach((paginatedHTMLNodes) => {
      let pageNumber;

      ({ pageNumber } = context);

      const divisionHTMLNode = DivisionHTMLNode.fromPaginatedHTMLNodesAndDivisionClassName(paginatedHTMLNodes, divisionClassName);

      if (footnotesDirectiveHTMLNode !== null) {
        const footnotesListHTMLTransform  = divisionHTMLNode.resolveFootnotes(context);

        if (footnotesListHTMLTransform !== null) {
          footnotesListHTMLTransform.appendToDivisionHTMLNode(divisionHTMLNode);
        }
      }

      if (pageNumberDirectiveHTMLNode !== null) {
        const pageNumberHTMLTransform = divisionHTMLNode.resolvePageNumber(pageNumber);

        pageNumberHTMLTransform.appendToDivisionHTMLNode(divisionHTMLNode);

        divisionHTMLNode.resolveIndexAnchor(pageNumber);
      }

      divisionHTMLNodes.push(divisionHTMLNode);

      pageNumber++;

      Object.assign(context, {
        pageNumber
      });
    });

    delete context.start;
  }

  resolveFootnotes(context) {
    const node = this,  ///
          footnoteHTMLNodes = footnotesHTMLNodesFromNode(node),
          footnoteLinkHTMLNodes = footnoteLinkHTMLNodesFromNode(node);

    let start;

    ({ start } = context);

    const footnoteItemHTMLTransforms = [];

    let number = start; ///

    footnoteLinkHTMLNodes.forEach((footnoteLinkHTMLNode) => {
      const identifier = footnoteLinkHTMLNode.identifier(context),
            footnoteHTMLNode = extract(footnoteHTMLNodes, (footnoteHTMLNode) => {
              const identifierMatches = footnoteHTMLNode.matchIdentifier(identifier);

              if (identifierMatches) {
                return true;
              }
            }) || null;

      if (footnoteHTMLNode !== null) {
        const paragraphHTMLNode = footnoteHTMLNode.getParagraphHTMLNode(),
              footnoteItemHTMLTransform = FootnoteItemHTMLTransform.fromParagraphHTMLNOdeAndIdentifier(paragraphHTMLNode, identifier)

        footnoteItemHTMLTransforms.push(footnoteItemHTMLTransform);

        footnoteLinkHTMLNode.setNumber(number);

        number++;
      } else {
        footnoteLinkHTMLNode.resetNumber()
      }
    });

    const footnotesListHTMLTransform = FootnotesListHTMLTransform.fromStartAndFootnoteItemHTMLTransforms(start, footnoteItemHTMLTransforms);

    start = number; ///

    Object.assign(context, {
      start
    });

    return footnotesListHTMLTransform;
  }

  resolvePageNumber(pageNumber) {
    const pageNumberHTMLTransform = PageNumberHTMLTransform.fromPageNumber(pageNumber);

    return pageNumberHTMLTransform;
  }

  resolveIndexAnchor(pageNumber) {
    this.fromFirstChildNode((firstChildNode) => {
      const indexAnchorHTMLTransform = IndexAnchorHTMLTransform.fromPageNumber(pageNumber),
            htmlNode = firstChildNode;  ///

      indexAnchorHTMLTransform.appendToHTMLNode(htmlNode);
    });
  }

  asString() {
    const ruleName = this.getRuleName(),
          string = ruleName;  ///

    return string;
  }

  static tagName = "div";

  static className = null;

  static fromNothing() {
    const divisionClassName = null,
          divisionHTMLNode = HTMLNode.fromNothing(DivisionHTMLNode, divisionClassName);

    return divisionHTMLNode;
  }

  static fromOuterNode(outerNode) {
    const divisionMarkdownNode = outerNode, ///
          divisionClassName = divisionMarkdownNode.getDivisionClassName(),
          divisionHTMLNode = HTMLNode.fromOuterNode(DivisionHTMLNode, outerNode, divisionClassName);

    return divisionHTMLNode;
  }

  static fromPaginatedHTMLNodesAndDivisionClassName(paginatedHTMLNodes, divisionClassName) {
    const childHTMLNodes = paginatedHTMLNodes,  ///
          divisionHTMLNode = HTMLNode.fromChildHTMLNodes(DivisionHTMLNode, childHTMLNodes, divisionClassName);

    return divisionHTMLNode;
  }
}
