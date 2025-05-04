"use strict";

import { arrayUtilities } from "necessary";

import HTMLTransform from "../transform/html";
import FootnoteHTMLNode from "../node/html/footnote";
import LineHTMLTransform from "../transform/html/line";
import FootnoteHTMLTransform from "../transform/html/footnote";
import FootnoteItemHTMLTransform from "../transform/html/footnoteItem";
import FootnoteLinkHTMLTransform from "../transform/html/footnoteLink";
import NestedFootnoteLinkHTMLTransform from "../transform/html/nestedFootnoteLink";
import FootnotesDirectiveHTMLTransform from "../transform/html/directive/footnotes";
import PageNumberDirectiveHTMLTransform from "../transform/html/directive/pageNumber";

import { DEFAULT_MAXIMUM_PAGE_LINES } from "../constants";
import { htmlNodesFromNode, nestedFootnoteLinkHTMLNodesFromNode, pageNumberDirectiveHTMLNodeFromNode } from "../utilities/html";

const { backwardsForEach } = arrayUtilities;

export function groupHTMLNodes(htmlNodes) {
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

export function removeHTMLNodes(node) {
  const htmlNodes = htmlNodesFromNode(node);

  htmlNodes.forEach((htmlNode) => {
    const htmlTransform = HTMLTransform.fromHTNLNOde(htmlNode);

    htmlTransform.remove();
  });

  return htmlNodes;
}

export function removeFootnoteHTMLNodes(footnoteHTMLNodes) {
  const footnoteHTMLTransforms = footnoteHTMLTransformsFromFootnoteHTMLNodes(footnoteHTMLNodes);

  footnoteHTMLTransforms.forEach((footnoteHTMLTransform) => {
    footnoteHTMLTransform.remove();
  });

  return footnoteHTMLTransforms;
}

export function paginateGroupedHTMLNodes(groupedHTMLNodesArray, context) {
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

export function reorderFootnoteHTMLNodes(footnoteLinkHTMLNodes, footnoteHTMLTransforms, context) {
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

export function numberFootnoteLinkHTMLNodes(footnoteHTMLNodes, footnoteLinkHTMLNodes, identifierMap, context) {
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

export function removeFootnotesDirectiveHTMLNode(footnotesDirectiveHTMLNode) {
  const footnotesDirectiveHTMLTransform = FootnotesDirectiveHTMLTransform.fromFootnotesDirectiveHTMLNode(footnotesDirectiveHTMLNode);

  footnotesDirectiveHTMLTransform.remove();
}

export function removePageNumberDirectiveHTMLNode(node) {
  let pageNumbers = false;

  const pageNumberDirectiveHTMLNode = pageNumberDirectiveHTMLNodeFromNode(node);

  if (pageNumberDirectiveHTMLNode !== null) {
    const pageNumberDirectiveHTNLTransform = PageNumberDirectiveHTMLTransform.fromPageNumberDirectiveHTMLNode(pageNumberDirectiveHTMLNode);

    pageNumberDirectiveHTNLTransform.remove();

    pageNumbers = true;
  }

  return pageNumbers;
}

export function removeNestedFootnoteLinkHTMLNodes(node) {
  const nestedFootnoteLinkHTMLNodes = nestedFootnoteLinkHTMLNodesFromNode(node),
        nestedFootnoteLinkHTMLTransforms = nestedFootnoteLinkHTMLTransformsFromNestedFootnoteLinkHTMLNodes(nestedFootnoteLinkHTMLNodes);

  nestedFootnoteLinkHTMLTransforms.forEach((nestedFootnoteLinkHTMLTransform) => {
    nestedFootnoteLinkHTMLTransform.remove();
  });
}

export function lineHTMLTransformsFromFootnoteHTMLTransforms(footnoteHTMLTransforms) {
  const lineHTMLTransforms = footnoteHTMLTransforms.map((footnoteHTMLTransform) => {
    const lineHTMLTransform = LineHTMLTransform.fromFootnoteHTMLTransform(footnoteHTMLTransform);

    return lineHTMLTransform;
  });

  return lineHTMLTransforms;
}

export function footnoteItemHTMLTransformsFromLineHTMLTransforms(lineHTMLTransforms, identifierMap, start) {
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

function footnoteHTMLTransformsFromFootnoteHTMLNodes(footnoteHTMLNodes) {
  const footnoteHTMLTransforms = footnoteHTMLNodes.map((footnoteHTMLNode) => {
    const footnoteHTMLTransform = FootnoteHTMLTransform.fromFootnoteHTMLNode(footnoteHTMLNode);

    return footnoteHTMLTransform;
  });

  return footnoteHTMLTransforms;
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
