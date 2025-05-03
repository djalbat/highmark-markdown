"use strict";

import { arrayUtilities } from "necessary";

import HTMLNode from "../../node/html";
import LineHTMLTransform from "../../transform/html/line";
import FootnoteHTMLTransform from "../../transform/html/footnote";
import FootnoteItemHTMLTransform from "../../transform/html/footnoteItem";
import FootnotesListHTMLTransform from "../../transform/html/footnotesList";
import FootnotesDirectiveHTMLTransform from "../../transform/html/footnotesDirective";

import { footnoteHTMLNodesFromNode, footnoteLinkHTMLNodesFromNode, footnotesDirectiveHTMLNodeFromNode } from "../../utilities/html";

const { filter } = arrayUtilities;

export default class DivisionHTMLNode extends HTMLNode {
  className(context) { return this.outerNode.className(context); }

  resolve(context) {
    const footnoteHTMLNodes = this.getFootnoteHTMLNodes(),
          footnoteHTMLTransforms = footnoteHTMLTransformsFromFootnoteHTMLNodes(footnoteHTMLNodes);

    footnoteHTMLTransforms.forEach((footnoteHTMLTransform) => {
      footnoteHTMLTransform.remove();
    });

    const footnotesDirectiveHTMLNode = this.getFootnotesDirectiveHTMLNode();

    if (footnotesDirectiveHTMLNode === null) {
      return;
    }

    const footnotesDirectiveHTMLTransform = FootnotesDirectiveHTMLTransform.fromFootnotesDirectiveHTMLNode(footnotesDirectiveHTMLNode);

    footnotesDirectiveHTMLTransform.remove();

    const footnoteHTMLTransformsLength = footnoteHTMLTransforms.length;

    if (footnoteHTMLTransformsLength === 0) {
      return;
    }

    const node = this,  ///
          footnoteLinkHTMLNodes = footnoteLinkHTMLNodesFromNode(node);

    filterAndSortFootnoteHTMLTransforms(footnoteHTMLTransforms, footnoteLinkHTMLNodes, context);

    const start = 1,
          divisionHTMLNode = this,  ///
          lineHTMLTransforms = lineHTMLTransformsFromFootnoteHTMLTransforms(footnoteHTMLTransforms),
          footnoteItemHTMLTransforms = footnoteItemHTMLTransformsFromLineHTMLTransforms(lineHTMLTransforms),
          footnotesListHTMLTransform = FootnotesListHTMLTransform.fromStartAndFootnoteItemHTMLTransforms(start, footnoteItemHTMLTransforms);

    footnotesListHTMLTransform.appendToDivisionHTMLNode(divisionHTMLNode);
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

  static tagName = "div";

  static className = null;

  static fromNothing() { return HTMLNode.fromNothing(DivisionHTMLNode); }

  static fromOuterNode(outerNode) { return HTMLNode.fromOuterNode(DivisionHTMLNode, outerNode); }
}

function filterAndSortFootnoteHTMLTransforms(footnoteHTMLTransforms, footnoteLinkHTMLNodes, context) {
  const identifiers = identifiersFromFootnoteLinkHTMLNodes(footnoteLinkHTMLNodes, context);

  filter(footnoteHTMLTransforms, (footnoteHTMLTransform) => {
    const identifier = footnoteHTMLTransform.identifier(context),
          identifiersIncludesIdentifier = identifiers.includes(identifier);

    if (identifiersIncludesIdentifier) {
      return true;
    }
  });

  footnoteHTMLTransforms.sort((footnoteHTMLTransformA, footnoteHTMLTransformsB) => {
    const footnoteHTMLTransformAIdentifier = footnoteHTMLTransformA.identifier(context),
          footnoteHTMLTransformBIdentifier = footnoteHTMLTransformsB.identifier(context),
          identifierA = footnoteHTMLTransformAIdentifier, ///
          identifierB = footnoteHTMLTransformBIdentifier, ///
          indexA = identifiers.indexOf(identifierA),
          indexB = identifiers.indexOf(identifierB),
          difference = (indexA - indexB);

    return difference;
  });
}

function identifiersFromFootnoteLinkHTMLNodes(footnoteLinkHTMLNodes, context) {
  const identifiers = footnoteLinkHTMLNodes.map((footnoteHTMLNode) => {
    const identifier = footnoteHTMLNode.identifier(context);

    return identifier;
  });

  return identifiers;
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

// getPageNumber() {
//   let pageNumber = null;
//
//   const pageNumberDirectiveMarkdownNode = this.findPageNumberDirectiveMarkdownNode();
//
//   if (pageNumberDirectiveMarkdownNode !== null) {
//     pageNumber = pageNumberDirectiveMarkdownNode.getPageNumber();
//   }
//
//   return pageNumber;
// }
//
// setPageNumber(pageNumber) {
//   const pageNumberDirectiveMarkdownNode = this.findPageNumberDirectiveMarkdownNode();
//
//   if (pageNumberDirectiveMarkdownNode !== null) {
//     pageNumberDirectiveMarkdownNode.setPageNumber(pageNumber);
//   }
// }
//
// paginate(markdownNodes, context) {
//   const footnotesDirectiveDivisionTransform = this.removeDivisionMarkdownNode(FootnotesDirectiveDivisionTransform, context),
//         pageNumberDirectiveDivisionTransform = this.removeDivisionMarkdownNode(PageNumberDirectiveDivisionTransform, context),
//         subDivisionTransforms = [
//           footnotesDirectiveDivisionTransform,
//           pageNumberDirectiveDivisionTransform
//         ];
//
//   filter(subDivisionTransforms, (subDivisionTransform) => {
//     if (subDivisionTransform !== null) {
//       return true;
//     }
//   });
//
//   const { linesPerPage } = context,
//         paginatedChildNodes = [];
//
//   let { pageNumber } = context,
//       totalLines = 0;
//
//   this.forEachChildNode((childNode) => {
//     const lines = childNode.lines(context);
//
//     if ((totalLines + lines) > linesPerPage) {
//       paginateDivisionMarkdownNode(paginatedChildNodes, subDivisionTransforms, this.divisionClassName, markdownNodes, pageNumber, context);
//
//       pageNumber++;
//
//       totalLines = 0;
//
//       clear(paginatedChildNodes);
//     }
//
//     const paginatedChildNode = childNode;  ///
//
//     paginatedChildNodes.push(paginatedChildNode);
//
//     totalLines += lines;
//   });
//
//   if (totalLines > 0) {
//     paginateDivisionMarkdownNode(paginatedChildNodes, subDivisionTransforms, this.divisionClassName, markdownNodes, pageNumber, context);
//
//     pageNumber++;
//   }
//
//   Object.assign(context, {
//     pageNumber
//   });
// }
//
// createIndex(divisionMarkdownNodes, context) {
//   let indexCreated = false;
//
//   const indexDirectiveDivisionTransform = this.findDivisionTransform(IndexDirectiveDivisionTransform, context);
//
//   if (indexDirectiveDivisionTransform !== null) {
//     const divisionMarkdownNode = this,  ///
//           indexTransform = IndexTransform.fromDivisionMarkdownNodesAndDivisionMarkdownNode(divisionMarkdownNodes, divisionMarkdownNode, context);
//
//     if (indexTransform !== null) {
//       indexTransform.replaceIndexDirectiveSubdivisionTransform(indexDirectiveDivisionTransform, divisionMarkdownNode, context);
//
//       indexCreated = true;
//     }
//   }
//
//   return indexCreated;
// }
//
// createContents(divisionMarkdownNodes, context) {
//   let contentsCreated = false;
//
//   const contentsDirectiveDivisionTransform = this.findDivisionTransform(ContentsDirectiveDivisionTransform, context);
//
//   if (contentsDirectiveDivisionTransform !== null) {
//     const divisionMarkdownNode = this,  ///
//           contentsListTransform = ContentsListTransform.fromDivisionMarkdownNodesAndDivisionMarkdownNode(divisionMarkdownNodes, divisionMarkdownNode, context);
//
//     if (contentsListTransform !== null) {
//       contentsListTransform.replaceContentsDirectiveSubdivisionTransform(contentsDirectiveDivisionTransform, divisionMarkdownNode, context);
//
//       contentsCreated = true;
//     }
//   }
//
//   return contentsCreated;
// }
//
// prepareFootnotes(footnoteTransformMap, context) {
//   const footnoteDivisionTransforms = this.removeDivisionMarkdownNodes(FootnoteDivisionTransform, context);
//
//   footnoteDivisionTransforms.forEach((footnoteDivisionTransform) => {
//     const footnoteTransform = FootnoteTransform.fromFootnoteDivisionTransform(footnoteDivisionTransform),
//           identifier = footnoteDivisionTransform.identifier(context);
//
//     footnoteTransformMap[identifier] = footnoteTransform;
//   });
// }
//
// findPageNumberDirectiveMarkdownNode() {
//   let pageNumberDirectiveMarkdownNode = null;
//
//   const subDivisionMarkdownNodes = this.findDivisionMarkdownNodes();
//
//   subDivisionMarkdownNodes.some((subDivisionMarkdownNode) => {
//     const node = subDivisionMarkdownNode; ///
//
//     pageNumberDirectiveMarkdownNode = pageNumberDirectiveMarkdownNodeFromNode(node);
//
//     if (pageNumberDirectiveMarkdownNode !== null) {
//       return true;
//     }
//   });
//
//   return pageNumberDirectiveMarkdownNode;
// }

// function paginateDivisionMarkdownNode(paginatedChildNodes, subDivisionTransforms, divisionClassName, markdownNodes, pageNumber, context) {
//   let markdownNode;
//
//   const indexAnchorTransform = IndexAnchorTransform.fromPageNumber(pageNumber, context),
//         divisionMarkdownNode = DivisionMarkdownNode.fromPaginatedChildNodesDivisionTransformsAndDivisionClassName(paginatedChildNodes, subDivisionTransforms, divisionClassName, context),
//         anchorMarkdownNode = indexAnchorTransform.getAnchorMarkdownNode();
//
//   divisionMarkdownNode.setPageNumber(pageNumber);
//
//   markdownNode = anchorMarkdownNode;  ///
//
//   markdownNodes.push(markdownNode);
//
//   markdownNode = divisionMarkdownNode; ///
//
//   markdownNodes.push(markdownNode);
// }
