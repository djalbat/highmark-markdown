"use strict";

import MarkdownNode from "../../node/markdown";
import ContentsItemMarkdownNode from "../../node/markdown/contentsItem";

import { nestNodes } from "../../utilities/contents";
import { CONTENTS_LIST_RULE_NAME } from "../../ruleNames";

export default class ContentsListMarkdownNode extends MarkdownNode {
  // getTokens(tokens = []) {
  //   const childNodes = this.getChildNodes(),
  //         contentsItemMarkdownNodes = childNodes;  ///
  //
  //   contentsItemMarkdownNodes.forEach((contentsItemMarkdownNode) => {
  //     contentsItemMarkdownNode.getTokens(tokens);
  //   });
  //
  //   return tokens;
  // }

  static fromHeadingMarkdownNodes(headingMarkdownNodes, context) {
    const nestedHeadingMarkdownNodes = nestedHeadingMarkdownNodesFromHeadingMarkdownNodes(headingMarkdownNodes),  ///
          contentsItemReplacements = contentsItemReplacementsFromNestedHeadingMarkdownNodes(nestedHeadingMarkdownNodes, context),
          ruleName = CONTENTS_LIST_RULE_NAME,
          childNodes = [],
          opacity = null,
          contentsListMarkdownNode = MarkdownNode.fromRuleNameChildNodesAndOpacity(ContentsListMarkdownNode, ruleName, childNodes, opacity);

    contentsItemReplacements.forEach((contentsItemReplacement) => {
      const parentNode = contentsListMarkdownNode;  ///

      contentsItemReplacement.appendTo(parentNode, context);
    });

    return contentsListMarkdownNode;
  }

  static fromNestedHeadingMarkdownNodes(nestedHeadingMarkdownNodes, context) {
    const contentsItemReplacements = contentsItemReplacementsFromNestedHeadingMarkdownNodes(nestedHeadingMarkdownNodes, context),
          ruleName = CONTENTS_LIST_RULE_NAME,
          childNodes = [],
          opacity = null,
          contentsListMarkdownNode = MarkdownNode.fromRuleNameChildNodesAndOpacity(ContentsListMarkdownNode, ruleName, childNodes, opacity);

    contentsItemReplacements.forEach((contentsItemReplacement) => {
      const parentNode = contentsListMarkdownNode;  ///

      contentsItemReplacement.appendTo(parentNode, context);
    });

    return contentsListMarkdownNode;
  }
}

// function childNodesFromNestedHeadingMarkdownNodes(nestedHeadingMarkdownNodes, context) {
//   const childNodes = nestedHeadingMarkdownNodes.map((nestedHeadingMarkdownNode) => {
//     const contentsItemMarkdownNode = ContentsItemMarkdownNode.fromContentsListMarkdownNodeAndNestedHeadingMarkdownNode(ContentsListMarkdownNode, nestedHeadingMarkdownNode, context),
//           childNode = contentsItemMarkdownNode; ///
//
//     return childNode;
//   });
//
//   return childNodes;
// }

function nestedHeadingMarkdownNodesFromHeadingMarkdownNodes(headingMarkdownNodes) {
  const nodes = headingMarkdownNodes, ///
        nestedNode = nestNodes(nodes),
        childNestedNodes = nestedNode.getChildNestedNodes(),
        nestedHeadingMarkdownNodes = childNestedNodes;  ///

  return nestedHeadingMarkdownNodes;
}

function contentsItemReplacementsFromNestedHeadingMarkdownNodes(nestedHeadingMarkdownNodes) {
  // const contentsItemReplacements = nestedHeadingMarkdownNodes.map((nestedHeadingMarkdownNode) => {
  //   const contentsItemMarkdownNode = ContentsItemMarkdownNode.fromContentsListMarkdownNodeAndNestedHeadingMarkdownNode(ContentsListMarkdownNode, nestedHeadingMarkdownNode, context),
  //           childNode = contentsItemMarkdownNode; ///
  //
  //   return childNode;
  // });
  //
  // return childNodes;
}
