"use strict";

import HTMLNode from "../../../node/html";

import { START_ATTRIBUTE_NAME } from "../../../attributeNames";
import { FOOTNOTES_LIST_RULE_NAME } from "../../../ruleNames";

export default class FootnotesListHTMLNode extends HTMLNode {
  attributeName(context) {
    const attributeName = START_ATTRIBUTE_NAME;

    return attributeName;
  }

  attributeValue(context) {
    const attributeValue = this.start;  ///

    return attributeValue;
  }

  asString() {
    const string = FOOTNOTES_LIST_RULE_NAME;  ///

    return string;
  }

  static tagName = "ol";

  static className = "footnotes";

  static fromFootnoteItemHTMLTransforms(footnoteItemHTMLTransforms) {
    const footnoteItemHTMLNodes = footnoteItemHTMLTransforms.map((footnoteItemHTMLTransform) => {
            const footnoteItemHTMLNode = footnoteItemHTMLTransform.getFootnoteItemHTMLNode();

            return footnoteItemHTMLNode;
          }),
          childNodes = footnoteItemHTMLNodes,
          footnotesListHTMLNode = HTMLNode.fromChildNodes(FootnotesListHTMLNode, childNodes);

    return footnotesListHTMLNode;
  }
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
//   static fromFootnoteItemReplacementsAndStart(footnoteItemReplacements, start) {
//     const ruleName = FOOTNOTES_LIST_RULE_NAME,
//       childNodes = footnoteItemReplacements.map((footnoteItemReplacement) => {
//         const footnoteItemReplacementMode = footnoteItemReplacement.getFootnoteItemMarkdownNode(),
//           childNode = footnoteItemReplacementMode; ///
//
//         return childNode;
//       }),
//       opacity = null,
//       footnotesListMarkdownNode = MarkdownNode.fromRuleNameChildNodesAndOpacity(FootnotesListMarkdownNode, ruleName, childNodes, opacity, start);
//
//     return footnotesListMarkdownNode;
//   }
// }
