"use strict";

import { nodeUtilities} from "occam-dom";
import { arrayUtilities } from "necessary";

import queries from "../../queries";
import HTMLNode from "../../node/html";
import htmlNodeMap from "../../map/node/html";

const { push } = arrayUtilities,
      { topmostNodeFromOuterNodes } = nodeUtilities;

export default class TopmostHTMLNode extends HTMLNode {
  adjustIndent(indent) {
    return indent;
  }

  asString() {
    const { tagName } = this.constructor,
          string = tagName; ///

    return string;
  }

  static tagName = "html";

  static className = null;

  static fromNothing() { return HTMLNode.fromNothing(TopmostHTMLNode); }

  static fromDivisionMarkdownNode(divisionMarkdownNode) {
    const node = divisionMarkdownNode,  ///
          nodes = nodesFromNodeAndQueries(node, queries),
          topmostHTMLNode = topmostNodeFromOuterNodes(ClassFromOuterNode, nodes);

    return topmostHTMLNode;
  }
}

function ClassFromOuterNode(outerNode) {
  let Class;

  if (outerNode === null) {
    Class = TopmostHTMLNode;  ///
  } else {
    const nonTerminalNode = outerNode,  ///
      ruleName = nonTerminalNode.getRuleName();

    Class = htmlNodeMap[ruleName] || HTMLNode;
  }

  return Class;
}

function nodesFromNodeAndQueries(node, queries) {
  const nodes = [];

  queries.forEach((query) => {
    const queryNodes = query.execute(node);

    push(nodes, queryNodes);
  });

  return nodes;
}
