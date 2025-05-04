"use strict";

import { arrayUtilities } from "necessary";

import HTMLNode from "../../node/html";
import HTMLTransform from "../../transform/html";
import FootnoteHTMLNode from "../../node/html/footnote";
import LineHTMLTransform from "../../transform/html/line";
import FootnoteHTMLTransform from "../../transform/html/footnote";
import FootnoteItemHTMLTransform from "../../transform/html/footnoteItem";
import FootnoteLinkHTMLTransform from "../../transform/html/footnoteLink";
import FootnotesListHTMLTransform from "../../transform/html/footnotesList";
import FootnotesDirectiveHTMLTransform from "../../transform/html/footnotesDirective";
import NestedFootnoteLinkHTMLTransform from "../../transform/html/nestedFootnoteLink";

import { DIVISION_RULE_NAME } from "../../ruleNames";
import { DEFAULT_MAXIMUM_PAGE_LINES } from "../../constants";
import { htmlNodesFromNode, footnoteHTMLNodesFromNode, footnoteLinkHTMLNodesFromNode, footnotesDirectiveHTMLNodeFromNode, nestedFootnoteLinkHTMLNodesFromNode } from "../../utilities/html";

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

  resolve(divisionHTMLNodes, context) {
    const node = this,  ///
          nestedFootnoteLinkHTMLNodes = nestedFootnoteLinkHTMLNodesFromNode(node);

    removeNestedFootnoteLinkHTMLNodes(nestedFootnoteLinkHTMLNodes);

    const footnoteHTMLNodes = this.getFootnoteHTMLNodes(),
          footnoteHTMLTransforms = removeFootnoteHTMLNodes(footnoteHTMLNodes),
          footnotesDirectiveHTMLNode = this.getFootnotesDirectiveHTMLNode();

    if (footnotesDirectiveHTMLNode !== null) {
      removeFootnotesDirectiveHTMLNode(footnotesDirectiveHTMLNode);

      const footnoteLinkHTMLNodes = footnoteLinkHTMLNodesFromNode(node);

      reorderFootnoteHTMLNodes(footnoteLinkHTMLNodes, footnoteHTMLTransforms, context);
    }

    const htmlNodes = htmlNodesFromNode(node);

    removeHTMLNodes(htmlNodes);

    const groupedHTMLNodesArray = groupHTMLNodes(htmlNodes),
          paginatedHTMLNodesArray = paginateGroupedHTMLNodes(groupedHTMLNodesArray, context);

    let start = 1;

    paginatedHTMLNodesArray.forEach((paginatedHTMLNodes) => {
      const divisionHTMLNode = DivisionHTMLNode.fromPaginatedHTMLNodes(paginatedHTMLNodes);

      start = divisionHTMLNode.resolveFootnotes(start, context);

      divisionHTMLNodes.push(divisionHTMLNode);
    });
  }

  resolveFootnotes(start, context) {
    const node = this,  ///
          previousStart = start,  ///
          footnoteHTMLNodes = footnoteHTMLNodesFromNode(node),
          footnoteLinkHTMLNodes = footnoteLinkHTMLNodesFromNode(node),
          footnoteHTMLTransforms = removeFootnoteHTMLNodes(footnoteHTMLNodes);

    // start = filterAndSortFootnoteHTMLTransforms(footnoteHTMLTransforms, footnoteLinkHTMLNodes, start, context);

    const latestStart = start,  ///
          lineHTMLTransforms = lineHTMLTransformsFromFootnoteHTMLTransforms(footnoteHTMLTransforms),
          footnoteItemHTMLTransforms = footnoteItemHTMLTransformsFromLineHTMLTransforms(lineHTMLTransforms);

    start = previousStart;  ///

    const divisionHTMLNode = this,  ///
          footnotesListHTMLTransform = FootnotesListHTMLTransform.fromStartAndFootnoteItemHTMLTransforms(start, footnoteItemHTMLTransforms);

    footnotesListHTMLTransform.appendToDivisionHTMLNode(divisionHTMLNode);

    start = latestStart;  ///

    return start;
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

function removeHTMLNodes(htmlNodes) {
  htmlNodes.forEach((htmlNode) => {
    const htmlTransform = HTMLTransform.fromHTNLNOde(htmlNode);

    htmlTransform.remove();
  });
}

function removeFootnoteHTMLNodes(footnoteHTMLNodes) {
  const footnoteHTMLTransforms = footnoteHTMLTransformsFromFootnoteHTMLNodes(footnoteHTMLNodes);

  footnoteHTMLTransforms.forEach((footnoteHTMLTransform) => {
    footnoteHTMLTransform.remove();
  });

  return footnoteHTMLTransforms;
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

function removeFootnotesDirectiveHTMLNode(footnotesDirectiveHTMLNode) {
  const footnotesDirectiveHTMLTransform = FootnotesDirectiveHTMLTransform.fromFootnotesDirectiveHTMLNode(footnotesDirectiveHTMLNode);

  footnotesDirectiveHTMLTransform.remove();
}

function removeNestedFootnoteLinkHTMLNodes(nestedFootnoteLinkHTMLNodes) {
  const nestedFootnoteLinkHTMLTransforms = nestedFootnoteLinkHTMLTransformsFromNestedFootnoteLinkHTMLNodes(nestedFootnoteLinkHTMLNodes);

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

function footnoteItemHTMLTransformsFromLineHTMLTransforms(lineHTMLTransforms) {
  const footnoteItemHTMLTransforms = lineHTMLTransforms.map((lineHTMLTransform) => {
    const identifier = null,
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
