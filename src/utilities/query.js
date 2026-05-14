"use strict";

import { Query } from "occam-query";
import { nodeUtilities } from "occam-dom";
import { arrayUtilities } from "necessary";

const { push } = arrayUtilities,
      { topmostNodeFromOuterNodes } = nodeUtilities;

export function nodeQuery(expression) {
  const query = Query.fromExpressionString(expression);

  return function(node) {
    const nodes = query.execute(node);

    node = nodes.shift() || null; ///

    return node;
  }
}

export function nodesQuery(expression) {
  const query = Query.fromExpressionString(expression);

  return function(node) {
    const nodes = query.execute(node);

    return nodes;
  }
}

export function nodeFromNodeAndQuery(node, query) {
  const queryNodes = query.execute(node),
        queryNode = queryNodes.shift() || null;

  node = queryNode;  ///

  return node;
}

export function nodesFromNodeAndQuery(node, query, nodes = []) {
  const queryNodes = query.execute(node);

  push(nodes, queryNodes);

  return nodes;
}

export function nodesFromNodeAndQueries(node, queries, nodes = []) {
  queries.forEach((query) => {
    const queryNodes = query.execute(node);

    push(nodes, queryNodes);
  });

  return nodes;
}

export function topmostNodeFromNodeAndQueries(node, queries, ClassFromOuterNode) {
  let topmostNode = null;

  if (node !== null) {
    const nodes = nodesFromNodeAndQueries(node, queries),
          outerNodes = nodes; ///

    topmostNode = topmostNodeFromOuterNodes(outerNodes, ClassFromOuterNode);
  }

  return topmostNode;
}
