"use strict";

import { Query } from "occam-query";

import { nodesFromNodeAndQuery } from "../utilities/query";

const ruleSetCSSNodesQuery = Query.fromExpressionString("/*/ruleSet"),
      selectorCSSNodesQuery = Query.fromExpressionString("/selectors/selector"),
      selectorsCSSNodesQuery = Query.fromExpressionString("/selectorsList/selectors"),
      nestedRuleSetCSSNodesQuery = Query.fromExpressionString("/*//ruleSet"),
      selectorsListCSSNodesQuery = Query.fromExpressionString("/*//ruleSet/selectorsList"); ///

export function ruleSetCSSNodesFromNode(node, ruleSetCSSNodes = []) {
  nodesFromNodeAndQuery(node, ruleSetCSSNodesQuery, ruleSetCSSNodes);

  return ruleSetCSSNodes;
}

export function selectorCSSNodesFromNode(node, selectorCSSNodes = []) {
  nodesFromNodeAndQuery(node, selectorCSSNodesQuery, selectorCSSNodes);

  return selectorCSSNodes;
}

export function selectorsCSSNodesFromNode(node, selectorsCSSNodes = []) {
  nodesFromNodeAndQuery(node, selectorsCSSNodesQuery, selectorsCSSNodes);

  return selectorsCSSNodes;
}

export function nestedRuleSetCSSNodesFromNode(node, nestedRuleSetCSSNodes = []) {
  nodesFromNodeAndQuery(node, nestedRuleSetCSSNodesQuery, nestedRuleSetCSSNodes);

  return nestedRuleSetCSSNodes;
}

export function selectorsListCSSNodesFromNode(node, selectorsListCSSNodes = []) {
  nodesFromNodeAndQuery(node, selectorsListCSSNodesQuery, selectorsListCSSNodes);

  return selectorsListCSSNodes;
}

export default {
  ruleSetCSSNodesFromNode,
  selectorCSSNodesFromNode,
  selectorsCSSNodesFromNode,
  selectorsListCSSNodesFromNode
};
