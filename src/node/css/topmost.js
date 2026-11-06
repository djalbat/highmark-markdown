"use strict";

import CSSNode from "../../node/css";
import RuleSetCSSTransform from "../../transform/css/ruleSet";

import { EMPTY_STRING } from "../../constants";
import { ruleSetCSSNodesFromNode, nestedRuleSetCSSNodesFromNode } from "../../utilities/css";
import { CSS_MARKDOWN_STYLE_RULE_NAME,
         VERBATIM_MARKDOWN_STYLE_RULE_NAME,
         RULE_SET_MARKDOWN_STYLE_RULE_NAME,
         DECLARATION_MARKDOWN_STYLE_RULE_NAME } from "../../ruleNames/markdownStyle";

export default class TopmostCSSNode extends CSSNode {
  getRuleName() {
    const ruleNme = CSS_MARKDOWN_STYLE_RULE_NAME;

    return ruleNme;
  }

  getDeclarationCSSNodes() {
    const markdownStyleRuleName = DECLARATION_MARKDOWN_STYLE_RULE_NAME,
          cssNodes = this.getCSSNodesByMarkdownStyleRuleName(markdownStyleRuleName),
          declarationCSSNodes = cssNodes; ///

    return declarationCSSNodes;
  }

  getVerbatimCSSNodes() {
    const markdownStyleRuleName = VERBATIM_MARKDOWN_STYLE_RULE_NAME,
          cssNodes = this.getCSSNodesByMarkdownStyleRuleName(markdownStyleRuleName),
          verbatimSSNodes = cssNodes; ///

    return verbatimSSNodes;
  }

  getRuleSetCSSNodes() {
    const markdownStyleRuleName = RULE_SET_MARKDOWN_STYLE_RULE_NAME,
          cssNodes = this.getCSSNodesByMarkdownStyleRuleName(markdownStyleRuleName),
          ruleSetCSSNodes = cssNodes; ///

    return ruleSetCSSNodes;
  }

  getCSSNodesByMarkdownStyleRuleName(markdownStyleRuleName) {
    const cssNodes = this.filterChildNode((childNode) => {
      const cssNode = childNode,  ///
            markdownStyleRuleNameMatches = cssNode.matchMarkdownStyleRuleName(markdownStyleRuleName);

      if (markdownStyleRuleNameMatches) {
        return true;
      }
    });

    return cssNodes;
  }

  resolve(context) {
    this.resolveSelectors(context);

    this.flatten(context);
  }

  resolveSelectors(context) {
    const node = this,  ///
          ruleSetCSSNodes = ruleSetCSSNodesFromNode(node),
          ancestorsSelectorsCSSNodes = null;

    ruleSetCSSNodes.forEach((ruleSetCSSNode) => {
      ruleSetCSSNode.resolveSelectors(ancestorsSelectorsCSSNodes, context);
    });
  }

  flatten(context) {
    const node = this,  ///
          topmostCSSNode = this,  ///
          nestedRuleSetCSSNodes = nestedRuleSetCSSNodesFromNode(node);

    nestedRuleSetCSSNodes.forEach((nestedRuleSetCSSNode) => {
      const ruleSetCSSNode = nestedRuleSetCSSNode,  ///
            ruleSetCSSTransform = RuleSetCSSTransform.fromRuleSetCSSNode(ruleSetCSSNode);

      ruleSetCSSTransform.remove();

      ruleSetCSSTransform.appendToTopmostCSSNode(topmostCSSNode);
    });
  }

  asCSS(context) {
    let css = EMPTY_STRING;

    const { cssSelectorsString } = context,
          verbatimCSSNodes = this.getVerbatimCSSNodes(),
          declarationCSSNodes = this.getDeclarationCSSNodes(),
          verbatimCSSNodesLength = verbatimCSSNodes.length,
          declarationCSSNodesLength = declarationCSSNodes.length;

    if ((verbatimCSSNodesLength > 0) || (declarationCSSNodesLength > 0)) {
      css = `${cssSelectorsString} {`;

      css = cssNodesAsCSS(declarationCSSNodes, css, context);

      css = cssNodesAsCSS(verbatimCSSNodes, css, context);

      css = `${css}
}`;
    }

    const ruleSetCSSNodes = this.getRuleSetCSSNodes();

    css = cssNodesAsCSS(ruleSetCSSNodes, css, context);

    return css;
  }

  static fromNothing() { return CSSNode.fromNothing(TopmostCSSNode); }

  static fromOuterNode(outerNode) { return CSSNode.fromOuterNode(TopmostCSSNode, outerNode); }
}

function cssNodesAsCSS(cssNodes, css, context) {
  cssNodes.forEach((cssNode) => {
    const cssNodeCSS = cssNode.asCSS(context);

    css = `${css}
${cssNodeCSS}`;
  });

  return css;
}
