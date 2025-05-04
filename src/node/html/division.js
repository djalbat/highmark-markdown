"use strict";

import { arrayUtilities } from "necessary";

import HTMLNode from "../../node/html";
import HTMLTransform from "../../transform/html";
import FootnoteHTMLNode from "../../node/html/footnote";
import LineHTMLTransform from "../../transform/html/line";
import FootnoteHTMLTransform from "../../transform/html/footnote";
import PageNumberHTMLTransform from "../../transform/html/pageNumber";
import FootnoteItemHTMLTransform from "../../transform/html/footnoteItem";
import FootnoteLinkHTMLTransform from "../../transform/html/footnoteLink";
import FootnotesListHTMLTransform from "../../transform/html/footnotesList";
import NestedFootnoteLinkHTMLTransform from "../../transform/html/nestedFootnoteLink";
import FootnotesDirectiveHTMLTransform from "../../transform/html/directive/footnotes";
import PageNumberDirectiveHTMLTransform from "../../transform/html/directive/pageNumber";

import { DIVISION_RULE_NAME } from "../../ruleNames";
import { DEFAULT_MAXIMUM_PAGE_LINES } from "../../constants";
import { htmlNodesFromNode,
         footnoteHTMLNodesFromNode,
         footnoteLinkHTMLNodesFromNode,
         footnotesDirectiveHTMLNodeFromNode,
         nestedFootnoteLinkHTMLNodesFromNode,
         pageNumberDirectiveHTMLNodeFromNode } from "../../utilities/html";

const { backwardsForEach } = arrayUtilities;

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

function groupHTMLNodes(htmlNodes) {
  const groupedHTMLNodesArray = [];

  let groupedHTMLNodes = [];

  htmlNodes.forEach((htmlNode) => {
    const htmlNodeFootnoteHTMLNode = (htmlNode instanceof FootnoteHTMLNode);

    if (!htmlNodeFootnoteHTMLNode) {
      const groupedHTMLNodeLength = groupedHTMLNodes.length;

      if (groupedHTMLNodeLength > 0) {
        groupedHTMLNodesArray.push(groupedHTMLNodes);

        groupedHTMLNodes = [];
      }
    }

    const groupedHTMLNode = htmlNode; ///

    groupedHTMLNodes.push(groupedHTMLNode);
  });

  const groupedHTMLNodeLength = groupedHTMLNodes.length;

  if (groupedHTMLNodeLength) {
    groupedHTMLNodesArray.push(groupedHTMLNodes);
  }

  return groupedHTMLNodesArray;
}

function removeHTMLNodes(node) {
  const htmlNodes = htmlNodesFromNode(node);

  htmlNodes.forEach((htmlNode) => {
    const htmlTransform = HTMLTransform.fromHTNLNOde(htmlNode);

    htmlTransform.remove();
  });

  return htmlNodes;
}

function removeFootnoteHTMLNodes(footnoteHTMLNodes) {
  const footnoteHTMLTransforms = footnoteHTMLTransformsFromFootnoteHTMLNodes(footnoteHTMLNodes);

  footnoteHTMLTransforms.forEach((footnoteHTMLTransform) => {
    footnoteHTMLTransform.remove();
  });

  return footnoteHTMLTransforms;
}

function paginateGroupedHTMLNodes(groupedHTMLNodesArray, context) {
  const paginatedHTMLNodesArray = [];

  const { maximumPageLines = DEFAULT_MAXIMUM_PAGE_LINES } = context;

  let pageLines = 0,
      paginatedHTMLNodes = [];

  groupedHTMLNodesArray.forEach((groupedHTMLNodes) => {
    const groupLines = groupedHTMLNodes.reduce((groupLines, groupedHTMLNode) => {
      const lines = groupedHTMLNode.lines(context);

      groupLines += lines;

      return groupLines;
    }, 0);

    const paginatedHTMLNodesLength = paginatedHTMLNodes.length;

    if (paginatedHTMLNodesLength > 0) {
      if (pageLines + groupLines > maximumPageLines) {
        paginatedHTMLNodesArray.push(paginatedHTMLNodes);

        pageLines = 0;

        paginatedHTMLNodes = [];
      }
    }

    paginatedHTMLNodes.push(...groupedHTMLNodes);

    pageLines += groupLines;
  });

  const paginatedHTMLNodesLength = paginatedHTMLNodes.length;

  if (paginatedHTMLNodesLength) {
    paginatedHTMLNodesArray.push(paginatedHTMLNodes);
  }

  return paginatedHTMLNodesArray;
}

function reorderFootnoteHTMLNodes(footnoteLinkHTMLNodes, footnoteHTMLTransforms, context) {
  const footnoteLinkHTMLTransforms = footnoteLinkHTMLTransformsFromFootnoteLinkHTMLNodes(footnoteLinkHTMLNodes);

  backwardsForEach(footnoteLinkHTMLTransforms, (footnoteLinkHTMLTransform) => {
    const identifier = footnoteLinkHTMLTransform.identifier(context),
          footnoteHTMLTransform = footnoteHTMLTransforms.find((footnoteHTMLTransform) => {
            const identifierMatches = footnoteHTMLTransform.matchIdentifier(identifier, context);

            if (identifierMatches) {
              return true;
            }
          }) || null;

    if (footnoteHTMLTransform !== null) {
      footnoteHTMLTransform.addAfterFootnoteLinkHTMLTransform(footnoteLinkHTMLTransform);
    }
  });
}

function numberFootnoteLinkHTMLNodes(footnoteHTMLNodes, footnoteLinkHTMLNodes, identifierMap, context) {
  const identifiers = Object.keys(identifierMap),
        identifiersLength = identifiers.length,
        start = identifiersLength + 1;

  footnoteHTMLNodes.forEach((footnoteHTMLNode, index) => {
    const identifier = footnoteHTMLNode.identifier(context),
          number = start + index;

    identifierMap[identifier] = number;
  });

  footnoteLinkHTMLNodes.forEach((footnoteLinkHTMLNode) => {
    const identifier = footnoteLinkHTMLNode.identifier(context),
          number = identifierMap[identifier];

    footnoteLinkHTMLNode.setNumber(number);
  })

  return start;
}

function removeFootnotesDirectiveHTMLNode(footnotesDirectiveHTMLNode) {
  const footnotesDirectiveHTMLTransform = FootnotesDirectiveHTMLTransform.fromFootnotesDirectiveHTMLNode(footnotesDirectiveHTMLNode);

  footnotesDirectiveHTMLTransform.remove();
}

function removePageNumberDirectiveHTMLNode(node) {
  let pageNumbers = false;

  const pageNumberDirectiveHTMLNode = pageNumberDirectiveHTMLNodeFromNode(node);

  if (pageNumberDirectiveHTMLNode !== null) {
    const pageNumberDirectiveHTNLTransform = PageNumberDirectiveHTMLTransform.fromPageNumberDirectiveHTMLNode(pageNumberDirectiveHTMLNode);

    pageNumberDirectiveHTNLTransform.remove();

    pageNumbers = true;
  }

  return pageNumbers;
}

function removeNestedFootnoteLinkHTMLNodes(node) {
  const nestedFootnoteLinkHTMLNodes = nestedFootnoteLinkHTMLNodesFromNode(node),
        nestedFootnoteLinkHTMLTransforms = nestedFootnoteLinkHTMLTransformsFromNestedFootnoteLinkHTMLNodes(nestedFootnoteLinkHTMLNodes);

  nestedFootnoteLinkHTMLTransforms.forEach((nestedFootnoteLinkHTMLTransform) => {
    nestedFootnoteLinkHTMLTransform.remove();
  });
}

function footnoteHTMLTransformsFromFootnoteHTMLNodes(footnoteHTMLNodes) {
  const footnoteHTMLTransforms = footnoteHTMLNodes.map((footnoteHTMLNode) => {
    const footnoteHTMLTransform = FootnoteHTMLTransform.fromFootnoteHTMLNode(footnoteHTMLNode);

    return footnoteHTMLTransform;
  });

  return footnoteHTMLTransforms;
}

function lineHTMLTransformsFromFootnoteHTMLTransforms(footnoteHTMLTransforms) {
  const lineHTMLTransforms = footnoteHTMLTransforms.map((footnoteHTMLTransform) => {
    const lineHTMLTransform = LineHTMLTransform.fromFootnoteHTMLTransform(footnoteHTMLTransform);

    return lineHTMLTransform;
  });

  return lineHTMLTransforms;
}

function footnoteItemHTMLTransformsFromLineHTMLTransforms(lineHTMLTransforms, identifierMap, start) {
  const numbers = Object.values(identifierMap),
        identifiers = Object.keys(identifierMap),
        footnoteItemHTMLTransforms = lineHTMLTransforms.map((lineHTMLTransform, index) => {
          const number = start + index;

          index = numbers.indexOf(number);

          const identifier = identifiers[index],
                footnoteItemHTMLTransform = FootnoteItemHTMLTransform.fromLineTMLTransformAndIdentifier(lineHTMLTransform, identifier);

          return footnoteItemHTMLTransform;
        });

  return footnoteItemHTMLTransforms;
}

function footnoteLinkHTMLTransformsFromFootnoteLinkHTMLNodes(footnoteLinkHTMLNodes) {
  const footnoteLinkHTMLTransforms = footnoteLinkHTMLNodes.map((footnoteLinkHTMLNode) => {
    const footnoteLinkHTMLTransform = FootnoteLinkHTMLTransform.fromFootnoteLinkHTMLNode(footnoteLinkHTMLNode);

    return footnoteLinkHTMLTransform;
  });

  return footnoteLinkHTMLTransforms;
}

function nestedFootnoteLinkHTMLTransformsFromNestedFootnoteLinkHTMLNodes(nestedFootnoteLinkHTMLNodes) {
  const nestedFootnoteLinkHTMLTransforms = nestedFootnoteLinkHTMLNodes.map((nestedFootnoteLinkHTMLNode) => {
    const nestedFootnoteLinkHTMLTransform = NestedFootnoteLinkHTMLTransform.fromNestedFootnoteLinkHTMLNode(nestedFootnoteLinkHTMLNode);

    return nestedFootnoteLinkHTMLTransform;
  });

  return nestedFootnoteLinkHTMLTransforms;
}
