"use strict";

import { arrayUtilities } from "necessary";

import MarkdownNode from "../../node/markdown";

import { CONTENTS_ITEM_RULE_NAME } from "../../ruleNames";

const { push } = arrayUtilities;

export default class ContentsItemMarkdownNode extends MarkdownNode {
  static fromNestedHeadingMarkdownNodeAndContentsListMarkdownNode(nestedHeadingMarkdownNode, ContentsListMarkdownNode, context) {
    const node = nestedHeadingMarkdownNode.getNode(),
          childNestedNodes = nestedHeadingMarkdownNode.getChildNestedNodes(),
          nestedHeadingMarkdownNodes = childNestedNodes,  ///
          contentsListMarkdownNode = ContentsListMarkdownNode.fromNestedHeadingMarkdownNodes(nestedHeadingMarkdownNodes);

    const ruleName = CONTENTS_ITEM_RULE_NAME,
          childNodes = [];

    if (node !== null) {
      const headingMarkdownNode = node, ///
            headingMarkdownNodeChildNodes = clone(headingMarkdownNode.getChildNodes()); ///

      push(childNodes, headingMarkdownNodeChildNodes);
    }

    if (contentsListMarkdownNode !== null) {
      const childNode = contentsListMarkdownNode; ///

      childNodes.push(childNode);
    }

    const opacity = null,
          contentsItemMarkdownNode = MarkdownNode.fromRuleNameChildNodesAndOpacity(ContentsItemMarkdownNode, ruleName, childNodes, opacity);

    return contentsItemMarkdownNode;
  }
}

function clone(nodes) {
  nodes = nodes.map((node) => { ///
    node = node.clone();  ///

    return node;
  });

  return nodes;
}