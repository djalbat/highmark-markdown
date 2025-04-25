"use strict";

import {Node, nodeUtilities} from "occam-dom";
import { arrayUtilities } from "necessary";

import queries from "../../queries";
import HTMLNode from "../../node/html";
import htmlNodeMap from "../../map/node/html";

const { push } = arrayUtilities,
      { topmostNodeFromOuterNodes } = nodeUtilities;

export default class TopmostHTMLNode extends HTMLNode {
  mount(parentDOMElement, siblingDOMElement, context) {
    this.childNodes.forEach((childNode) => {
      childNode.mount(parentDOMElement, siblingDOMElement, context);
    });
  }

  unmount(parentDOMElement, context) {
    this.childNodes.forEach((childNode) => {
      childNode.unmount(parentDOMElement, context);
    });
  }

  asHTML(context) {
    let html;

    const indent = null,
          childNodesHTML = this.childNodesAsHTML(indent, context);

    html = childNodesHTML;  ///

    return html;
  }

  asPlainText(context) {
    let plainText;

    const childNodesPlainText = this.childNodesAsPlainText(context);

    plainText = childNodesPlainText;  ///

    return plainText;
  }

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
