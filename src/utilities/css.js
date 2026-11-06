"use strict";

import { Query } from "occam-query";
import { queryUtilities } from "occam-query";

const { nodesFromNodeAndQuery } = queryUtilities;

const ruleSetCSSNodesQuery = Query.fromExpressionString("/*/ruleSet"),
      selectorsCSSNodesQuery = Query.fromExpressionString("/selectorsList/selectors"),
      nestedRuleSetCSSNodesQuery = Query.fromExpressionString("/*//ruleSet"); ///

export function ruleSetCSSNodesFromNode(node, ruleSetCSSNodes = []) {
  nodesFromNodeAndQuery(node, ruleSetCSSNodesQuery, ruleSetCSSNodes);

  return ruleSetCSSNodes;
}

export function selectorsCSSNodesFromNode(node, selectorsCSSNodes = []) {
  nodesFromNodeAndQuery(node, selectorsCSSNodesQuery, selectorsCSSNodes);

  return selectorsCSSNodes;
}

export function nestedRuleSetCSSNodesFromNode(node, nestedRuleSetCSSNodes = []) {
  nodesFromNodeAndQuery(node, nestedRuleSetCSSNodesQuery, nestedRuleSetCSSNodes);

  return nestedRuleSetCSSNodes;
}

export default {
  ruleSetCSSNodesFromNode,
  selectorsCSSNodesFromNode
};
