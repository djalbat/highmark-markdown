"use strict";

import HTMLTransform from "../../transform/html"

export default class FootnotesListHTMLTransform extends HTMLTransform {
  static fromFootnoteHTMLTransforms(footnotesItemHTMLTransforms, context) {

    debugger

    // footnotesItemHTMLTransforms.forEach((footnotesItemHTMLTransform) => {
    //   footnotesItemHTMLTransform.getTokens(tokens);
    // });
    //
    // const footnotesListHTMLTransform = HTMLTransform.fromNodeAndTokens(FootnotesListHTMLTransform, node, tokens);
    //
    // return footnotesListHTMLTransform;
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
//   footnotesItemHTMLTransforms = [];
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
//       const footnotesItemHTMLTransform = FootnotesItemHTMLTransform.fromFootnoteHTMLTransformAndIdentifier(footnoteHTMLTransform, identifier, context);
//
//       footnotesItemHTMLTransforms.push(footnotesItemHTMLTransform);
//
//       footnoteHTMLTransform.setNumber(number);
//
//       number++;
//     }
//   }
// });
//
// const footnotesListHTMLNode = FootnotesListHTMLNode.fromFootnotesItemHTMLTransformsAndStart(footnotesItemHTMLTransforms, start),
//   node = footnotesListHTMLNode, ///
//   tokens = [];
