"use strict";

import HTMLTransform from "../../transform/html";
import FootnotesListHTMLNode from "../../node/html/list/footnotes";

export default class FootnotesListHTMLTransform extends HTMLTransform {
  appendToDivisionHTMLNode(divisionHTMLNode) {
    const parentHTMLNode = divisionHTMLNode;

    this.appendTo(parentHTMLNode);
  }

  static fromFootnoteItemHTMLTransforms(footnoteItemHTMLTransforms) {
    const footnotesListHTMLNode = FootnotesListHTMLNode.fromFootnoteItemHTMLTransforms(footnoteItemHTMLTransforms),
          htmlNode = footnotesListHTMLNode, ///
          footnotesListHTMLTransform = HTMLTransform.fromHTNLNOde(FootnotesListHTMLTransform, htmlNode);

    return footnotesListHTMLTransform;
  }
}

// function startFromFootnoteHTMLTransformMap(footnoteHTMLTransformMap) {
//   const footnoteHTMLTransforms = Object.values(footnoteHTMLTransformMap),  ///
//         numberedFootnoteHTMLTransforms = footnoteHTMLTransforms.filter((footnoteHTMLTransform) => {
//           const footnoteHTMLTransformNumbered = footnoteHTMLTransform.isNumbered();
//
//           if (footnoteHTMLTransformNumbered) {
//             return true;
//           }
//         }),
//         numberedFootnoteHTMLTransformsLength = numberedFootnoteHTMLTransforms.length,
//         start = numberedFootnoteHTMLTransformsLength + 1;
//
//   return start;
// }

// const node = divisionHTMLNode,  ///
//   start = 0,
//   footnoteLinkHTMLNodes = footnoteLinkHTMLNodesFromNode(node),
//   footnoteItemHTMLTransforms = [];
//
// let number = start;
//
// footnoteLinkHTMLNodes.forEach((footnoteLinkHTMLNode) => {
//   const identifier = footnoteLinkHTMLNode.identifier(context),
//     footnoteHTMLTransform = footnoteHTMLTransformMap[identifier] || null;
//
//   if (footnoteHTMLTransform !== null) {
//     const footnoteHTMLTransformUnnumbered = footnoteHTMLTransform.isUnnumbered();
//
//     if (footnoteHTMLTransformUnnumbered) {
//       const footnoteItemHTMLTransform = FootnoteItemHTMLTransform.fromFootnoteHTMLTransformAndIdentifier(footnoteHTMLTransform, identifier, context);
//
//       footnoteItemHTMLTransforms.push(footnoteItemHTMLTransform);
//
//       footnoteHTMLTransform.setNumber(number);
//
//       number++;
//     }
//   }
// });
//
// const footnotesListHTMLNode = FootnotesListHTMLNode.fromFootnoteItemHTMLTransformsAndStart(footnoteItemHTMLTransforms, start),
//   node = footnotesListHTMLNode, ///
//   tokens = [];
