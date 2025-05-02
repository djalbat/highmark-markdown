"use strict";

import HTMLNode from "../../node/html";
import LineHTMLTransform from "../../transform/html/line";
import FootnoteHTMLTransform from "../../transform/html/footnote";
import FootnotesItemHTMLTransform from "../../transform/html/footnotesItem";
// import FootnotesListHTMLTransform from "../../transform/html/footnotesList";

import { footnoteHTMLNodesFromNode, footnotesDirectiveHTMLNodeFromNode } from "../../utilities/html";

export default class DivisionHTMLNode extends HTMLNode {
  className(context) { return this.outerNode.className(context); }

  resolve(context) {
    const footnoteHTMLNodes = this.getFootnoteHTMLNodes(),
          footnoteHTMLTransforms = footnoteHTMLNodes.map((footnoteHTMLNode) => {
            const footnoteHTMLTransform = FootnoteHTMLTransform.fromFootnoteHTMLNode(footnoteHTMLNode, context);

            return footnoteHTMLTransform;
          }),
          footnoteHTMLTransformsLength = footnoteHTMLTransforms.length;

    if (footnoteHTMLTransformsLength === 0) {
      return;
    }

    const footnotesDirectiveHTMLNode = this.getFootnotesDirectiveHTMLNode();

    if (footnotesDirectiveHTMLNode === null) {
      return;
    }

    const lineHTMLTransforms = footnoteHTMLTransforms.map((footnoteHTMLTransform) => {
      const lineHTMLTransform = LineHTMLTransform.fromFootnoteHTMLTransform(footnoteHTMLTransform, context);

      return lineHTMLTransform;
    });

    footnoteHTMLTransforms.forEach((footnoteHTMLTransform) => {
      // footnoteHTMLTransform.remove(context);
    });


    // const footnotesItemHTMLTransforms = lineHTMLTransforms.map((lineHTMLTransform) => {
    //         const identifier = null,
    //               footnotesItemHTMLTransform = FootnotesItemHTMLTransform.fromParagraphHTMLTransformAndIdentifier(lineHTMLTransform, identifier, context);
    //
    //         return footnotesItemHTMLTransform;
    //       });

    // FootnotesListHTMLTransform.fromFootnotesItemHTMLTransforms(footnotesItemHTMLTransforms, context);



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
// createFootnotes(footnoteTransformMap, context) {
//   const footnotesDirectiveDivisionTransform = this.findDivisionTransform(FootnotesDirectiveDivisionTransform, context);
//
//   if (footnotesDirectiveDivisionTransform !== null) {
//     const divisionMarkdownNode = this,  ///
//           footnotesListDivisionTransform = FootnotesListTransform.fromDivisionMarkdownNodeAndFootnoteTransformMap(divisionMarkdownNode, footnoteTransformMap, context);
//
//     if (footnotesListDivisionTransform !== null) {
//       footnotesListDivisionTransform.replaceFootnotesDirectiveDivisionTransform(footnotesDirectiveDivisionTransform, divisionMarkdownNode, context);
//     }
//
//     renumberFootnoteLinkMarkdownNodes(divisionMarkdownNode, footnoteTransformMap, context);
//   }
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
// findDivisionTransform(DivisionTransform, context) {
//   let subDivisionTransform = null;
//
//   const subDivisionMarkdownNodes = this.findDivisionMarkdownNodes();
//
//   subDivisionMarkdownNodes.some((subDivisionMarkdownNode) => {
//     subDivisionTransform = DivisionTransform.fromDivisionMarkdownNode(subDivisionMarkdownNode, context);
//
//     if (subDivisionTransform !== null) {
//       return true;
//     }
//   });
//
//   return subDivisionTransform;
// }
//
// findDivisionTransforms(DivisionTransform, context) {
//   const subDivisionMarkdownNodes = this.findDivisionMarkdownNodes(),
//         subDivisionTransforms = subDivisionMarkdownNodes.reduce((subDivisionTransforms, subDivisionMarkdownNode) => {
//           const subDivisionTransform = DivisionTransform.fromDivisionMarkdownNode(subDivisionMarkdownNode, context);
//
//           if (subDivisionTransform !== null) {
//             subDivisionTransforms.push(subDivisionTransform);
//           }
//
//           return subDivisionTransforms;
//         }, []);
//
//   return subDivisionTransforms;
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
//
// removeSubDivisionMarkdownNode(subDivisionMarkdownNode) {
//   const childNode = subDivisionMarkdownNode;  ///
//
//   this.removeChildNode(childNode);
// }
//
// createFootnotesListTransform(footnoteTransformMap, context) {
//   const footnoteDivisionTransforms = this.findDivisionTransforms(FootnoteDivisionTransform, context);
//
//   footnoteDivisionTransforms.forEach((footnoteDivisionTransform) => {
//     const footnoteTransform = FootnoteTransform.fromFootnoteDivisionTransform(footnoteDivisionTransform),
//           identifier = footnoteDivisionTransform.identifier(context);
//
//     footnoteTransformMap[identifier] = footnoteTransform;
//   });
//
//   const divisionMarkdownNode = this,  ///
//         footnotesListDivisionTransform = FootnotesListTransform.fromDivisionMarkdownNodeAndFootnoteTransformMap(divisionMarkdownNode, footnoteTransformMap, context);
//
//   return footnotesListDivisionTransform;
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
