"use strict";

import { arrayUtilities } from "necessary";

import MarkdownNode from "../../node/markdown";
import ReplacementNodeAndTokens from "../../replacementNodeAndTokens";
import ContentsListMarkdownNode from "../../node/markdown/contentsList";
import FootnotesListMarkdownNode from "../../node/markdown/footnotesList";

import { EMPTY_STRING } from "../../constants";
import { DIVISION_RULE_NAME } from "../../ruleNames";
import { renumberLinkMarkdownNodes } from "../../utilities/footnotes";
import { removeNode, removeTokens, replaceNode, replaceNodes, replaceTokens } from "../../utilities/replace";
import { headingMarkdownNodesFromNode,
         subDivisionMarkdownNodesFromNode,
         embedDirectiveMarkdownNodesFromNode,
         ignoreDirectiveMarkdownNodeFromNode,
         contentsDirectiveMarkdownNodeFromNode,
         footnotesDirectiveMarkdownNodeFromNode,
         pageNumberDirectiveMarkdownNodeFromNode } from "../../utilities/query";

const { clear, filter } = arrayUtilities;

export default class DivisionMarkdownNode extends MarkdownNode {
  constructor(ruleName, childNodes, precedence, opacity, domElement, divisionClassName) {
    super(ruleName, childNodes, precedence, opacity, domElement);

    this.divisionClassName = divisionClassName;
  }

  getDivisionClassName() {
    return this.divisionClassName;
  }

  setDivisionClassName(divisionClassName) {
    this.divisionClassName = divisionClassName;
  }

  className(context) {
    const className = this.divisionClassName; ///

    return className;
  }

  isIgnored() {
    const node = this,
          ignoreDirectiveMarkdownNode = ignoreDirectiveMarkdownNodeFromNode(node),
          ignored = (ignoreDirectiveMarkdownNode !== null);

    return ignored;
  }

  findParentNode(childNode, node = this) {
    let parentNode = null;

    const nodeNonTerminalNode = node.isNonTerminalNode();

    if (nodeNonTerminalNode) {
      const nonTerminalNode = node, ///
            childNodes = nonTerminalNode.getChildNodes(),
            index = childNodes.indexOf(childNode);

      if (index !== -1) {
        parentNode = node;  ///
      } else {
        const nodes = childNodes; ///

        nodes.some((node) => {
          parentNode = this.findParentNode(childNode, node);

          if (parentNode !== null) {
            return true;
          }
        });
      }
    }

    return parentNode;
  }

  paginate(pageDivisionMarkdownNodes, context) {
    const { linesPerPage } = context,
          pageChildNodes = [],
          childNodes = this.getChildNodes(),
          footnotesDirectiveReplacementNodeAndTokens = this.removeFootnotesSubdivisionMarkdownNode(context),
          pageNumberDirectiveReplacementNodeAndTokens = this.removePageNumberSubdivisionMarkdownNode(context);

    let pageLines = 0;

    childNodes.forEach((childNode) => {
      const pageChildNode = childNode,  ///
            lines = pageChildNode.lines(context);

      pageLines += lines;

      pageChildNodes.push(pageChildNode);

      if (pageLines > linesPerPage) {
        const childNodes = [  ///
                ...pageChildNodes
              ],
              divisionMarkdownNode = DivisionMarkdownNode.fromChildNodesAndDivisionClassName(childNodes, this.divisionClassName),
              pageDivisionMarkdownNode = divisionMarkdownNode;  ///

        if (footnotesDirectiveReplacementNodeAndTokens !== null) {
          footnotesDirectiveReplacementNodeAndTokens.appendTo(pageDivisionMarkdownNode, context);
        }

        if (pageNumberDirectiveReplacementNodeAndTokens !== null) {
          pageNumberDirectiveReplacementNodeAndTokens.appendTo(pageDivisionMarkdownNode, context);
        }

        pageDivisionMarkdownNodes.push(pageDivisionMarkdownNode);

        clear(pageChildNodes);

        pageLines = 0;
      }
    });

    if (pageLines > 0) {
      const childNodes = [  ///
              ...pageChildNodes
            ],
            divisionMarkdownNode = DivisionMarkdownNode.fromChildNodesAndDivisionClassName(childNodes, this.divisionClassName),
            pageDivisionMarkdownNode = divisionMarkdownNode;  ///

      if (footnotesDirectiveReplacementNodeAndTokens !== null) {
        footnotesDirectiveReplacementNodeAndTokens.appendTo(pageDivisionMarkdownNode, context);
      }

      if (pageNumberDirectiveReplacementNodeAndTokens !== null) {
        pageNumberDirectiveReplacementNodeAndTokens.appendTo(pageDivisionMarkdownNode, context);
      }

      pageDivisionMarkdownNodes.push(pageDivisionMarkdownNode);
    }
  }

  createContents(context) {
    let contentsCreated = false;

    const node = this,  ///
          contentsDirectiveMarkdownNode = contentsDirectiveMarkdownNodeFromNode(node);

    if (contentsDirectiveMarkdownNode !== null) {
      const divisionMarkdownNode = this,  ///
            headingMarkdownNodes = headingMarkdownNodesFromDivisionMarkdownNodeAndContentsDirectiveMarkdownNode(divisionMarkdownNode, contentsDirectiveMarkdownNode, context),
            headingMarkdownNodesLength = headingMarkdownNodes.length;

      if (headingMarkdownNodesLength === 0) {
        return;
      }

      const { tokens } = context,
            contentsListMarkdownNode = ContentsListMarkdownNode.fromHeadingMarkdownNodes(headingMarkdownNodes, context),
            contentsListMarkdownNodeTokens = contentsListMarkdownNode.getTokens(),
            childNode = contentsDirectiveMarkdownNode,  ///
            parentNode = this.findParentNode(childNode),
            replacedNode = contentsDirectiveMarkdownNode, ///
            replacementNode = contentsListMarkdownNode,  ///
            replacementTokens = contentsListMarkdownNodeTokens; ///

      replaceNode(replacementNode, replacedNode, parentNode);

      replaceTokens(replacementTokens, replacedNode, tokens);

      contentsCreated = true;
    }

    return contentsCreated;
  }

  createFootnotes(context) {
    const node = this,  ///
          footnotesDirectiveMarkdownNode = footnotesDirectiveMarkdownNodeFromNode(node);

    if (footnotesDirectiveMarkdownNode !== null) {
      const divisionMarkdownNode = this,  ///
            footnotesListMarkdownNode = FootnotesListMarkdownNode.fromDivisionMarkdownNode(divisionMarkdownNode, context);

      if (footnotesListMarkdownNode !== null) {
        const childNode = footnotesListMarkdownNode;  ///

        divisionMarkdownNode.appendChildNode(childNode);

        renumberLinkMarkdownNodes(divisionMarkdownNode, footnotesListMarkdownNode, context)
      }
    }
  }

  resolveEmbeddings(context) {
    const node = this,  ///
          embedDirectiveMarkdownNodes = embedDirectiveMarkdownNodesFromNode(node);

    embedDirectiveMarkdownNodes.map((embedDirectiveMarkdownNode) => {
      const replacementNodeAndTokens = embedDirectiveMarkdownNode.replacementNodeAndTokens(context);

      if (replacementNodeAndTokens !== null) {
        let tokens;

        tokens = replacementNodeAndTokens.getTokens();

        const childNodes = replacementNodeAndTokens.getChildNodes(),
              replacementNodes = childNodes, ///
              replacementTokens = tokens; ///

        ({ tokens } = context);

        const childNode = embedDirectiveMarkdownNode,  ///
              parentNode = this.findParentNode(childNode),
              replacedNode = embedDirectiveMarkdownNode; ///

        replaceNodes(replacementNodes, replacedNode, parentNode);

        replaceTokens(replacementTokens, replacedNode, tokens);
      }
    });
  }

  createFootnotesListMarkdownNode(context) {
    const divisionMarkdownNode = this,  ///
          footnotesListMarkdownNode = FootnotesListMarkdownNode.fromDivisionMarkdownNode(divisionMarkdownNode, context);

    return footnotesListMarkdownNode;
  }

  removeSubdivisionMarkdownNode(markdownNodeFromNode, context) {
    let subdivisionReplacementNodeAndTokens = null;

    const { tokens } = context,
          node = this,  ///
          parentNode = this,  ///
          subDivisionMarkdownNodes = subDivisionMarkdownNodesFromNode(node);

    subDivisionMarkdownNodes.some((subDivisionMarkdownNode) => {
      const node = subDivisionMarkdownNode, ///
            markdownNode = markdownNodeFromNode(node);

      if (markdownNode !== null) {
        const replacementNodeAndTokens = ReplacementNodeAndTokens.fromNode(node, context);

        subdivisionReplacementNodeAndTokens = replacementNodeAndTokens; ///

        const removedNode = subDivisionMarkdownNode;  ///

        removeTokens(removedNode, tokens);

        removeNode(removedNode, parentNode);

        return true;
      }
    });

    return subdivisionReplacementNodeAndTokens;
  }

  removeFootnotesListMarkdownNode(footnotesListMarkdownNode) {
    const childNode = footnotesListMarkdownNode;  ///

    this.removeChildNode(childNode);
  }

  removeFootnotesSubdivisionMarkdownNode(context) {
    const footnotesDirectiveReplacementNodeAndTokens = this.removeSubdivisionMarkdownNode(footnotesDirectiveMarkdownNodeFromNode, context);

    return footnotesDirectiveReplacementNodeAndTokens;
  }

  removePageNumberSubdivisionMarkdownNode(context) {
    const pageNumberDirectiveReplacementNodeAndTokens = this.removeSubdivisionMarkdownNode(pageNumberDirectiveMarkdownNodeFromNode, context);

    return pageNumberDirectiveReplacementNodeAndTokens;
  }

  asHTML(context) {
    let html = null;

    const indent = EMPTY_STRING,
          childNodesHTML = this.childNodesAsHTML(indent, context);

    if (childNodesHTML !== null) {
      const startingTag = this.startingTag(context),
            closingTag = this.closingTag(context);

      html = `${indent}${startingTag}
${childNodesHTML}${indent}${closingTag}
`;
    }

    return html;
  }

  clone() { return super.clone(this.divisionClassName); }

  static fromChildNodesAndDivisionClassName(childNodes, divisionClassName) {
    const ruleName = DIVISION_RULE_NAME,
          opacity = null,
          divisionMarkdownNode = MarkdownNode.fromRuleNameChildNodesAndOpacity(DivisionMarkdownNode, ruleName, childNodes, opacity, divisionClassName);

    return divisionMarkdownNode;
  }

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) {
    const divisionClassName = null,
          divisionMarkdownNode = MarkdownNode.fromRuleNameChildNodesAndOpacity(DivisionMarkdownNode, ruleName, childNodes, opacity, divisionClassName);

    return divisionMarkdownNode;
  }
}

function headingMarkdownNodesFromDivisionMarkdownNodeAndContentsDirectiveMarkdownNode(divisionMarkdownNode, contentsDirectiveMarkdownNode, context) {
  const { contentsDepth } = context,
        headingMarkdownNodes = [];

  let { divisionMarkdownNodes } = context;

  const index = divisionMarkdownNodes.indexOf(divisionMarkdownNode),
        start = index + 1;

  divisionMarkdownNodes = divisionMarkdownNodes.slice(start); ///

  divisionMarkdownNodes.forEach((divisionMarkdownNode) => {
    const node = divisionMarkdownNode;  ///

    headingMarkdownNodesFromNode(node, headingMarkdownNodes);
  });

  filter(headingMarkdownNodes, (headingMarkdownNode) => {
    const depth = headingMarkdownNode.getDepth();

    if (depth <= contentsDepth) {
      return true;
    }
  });

  return headingMarkdownNodes;
}