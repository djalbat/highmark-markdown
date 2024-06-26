"use strict";

import RuleSet from "./ruleSet";

import { nodesQuery } from "../utilities/query";
import { EMPTY_STRING } from "../constants";

const ruleSetNonTerminalNodesQuery = nodesQuery("/*/ruleSet");

export default class RuleSets {
  constructor(array) {
    this.array = array;
  }

  getLength() { return this.array.length; }

  asCSS(selectorsList, outermost = false) {
    let css = EMPTY_STRING;

    const length = this.getLength(),
          selectorsListLength = selectorsList.getLength();

    if ((length > 0) && (selectorsListLength > 0)) {
      css = this.array.reduce((css, ruleSet) => {
        const ruleSetCSS = ruleSet.asCSS(selectorsList, outermost);

        css = (css === null) ?
                ruleSetCSS :  ///
                  `${css}${ruleSetCSS}`;

        return css;
      }, null);
    }

    return css;
  }

  static fromNodeAndTokens(node, tokens) {
    const ruleSetNonTerminalNodes = ruleSetNonTerminalNodesQuery(node),
          array = ruleSetNonTerminalNodes.map((ruleSetNonTerminalNode) => {
            const node = ruleSetNonTerminalNode, ///
                  ruleSet = RuleSet.fromNodeAndTokens(node, tokens, RuleSets);

            return ruleSet;
          }),
          ruleSets = new RuleSets(array);

    return ruleSets;
  }
}
