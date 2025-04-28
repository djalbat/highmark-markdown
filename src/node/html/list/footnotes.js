"use strict";

import HTMLNode from "../../../node/html";

import { START_ATTRIBUTE_NAME } from "../../../attributeNames";

export default class FootnotesListHTMLNode extends HTMLNode {
  attributeName(context) {
    const attributeName = START_ATTRIBUTE_NAME;

    return attributeName;
  }

  attributeValue(context) {
    const attributeValue = this.start;  ///

    return attributeValue;
  }

  static tagName = "ol";

  static className = "footnotes";

  static fromNothing() { return HTMLNode.fromNothing(FootnotesListHTMLNode); }

  static fromOuterNode(outerNode) { return HTMLNode.fromOuterNode(FootnotesListHTMLNode, outerNode); }
}

// "use strict";
//
// import MarkdownNode from "../../../node/markdown";
//
// import { FOOTNOTES_LIST_RULE_NAME } from "../../../ruleNames";
//
// export default class FootnotesListMarkdownNode extends MarkdownNode {
//   constructor(ruleName, childNodes, opacity, precedence, domElement, start) {
//     super(ruleName, childNodes, opacity, precedence, domElement);
//
//     this.start = start;
//   }
//
//   getStart() {
//     return this.start;
//   }
//
//   clone() { return super.clone(this.start); }
//
//   static fromDOMElement(domElement) {
//     const ruleName = FOOTNOTES_LIST_RULE_NAME,
//       childNodes = [],
//       opacity = null,
//       start = null,
//       footnotesListMarkdownNode = MarkdownNode.fromRuleNameChildNodesAndOpacity(FootnotesListMarkdownNode, ruleName, childNodes, opacity, start);
//
//     footnotesListMarkdownNode.setDOMElement(domElement);
//
//     return footnotesListMarkdownNode;
//   }
//
//   static fromFootnotesItemReplacementsAndStart(footnotesItemReplacements, start) {
//     const ruleName = FOOTNOTES_LIST_RULE_NAME,
//       childNodes = footnotesItemReplacements.map((footnotesItemReplacement) => {
//         const footnotesItemReplacementMode = footnotesItemReplacement.getFootnotesItemMarkdownNode(),
//           childNode = footnotesItemReplacementMode; ///
//
//         return childNode;
//       }),
//       opacity = null,
//       footnotesListMarkdownNode = MarkdownNode.fromRuleNameChildNodesAndOpacity(FootnotesListMarkdownNode, ruleName, childNodes, opacity, start);
//
//     return footnotesListMarkdownNode;
//   }
// }
