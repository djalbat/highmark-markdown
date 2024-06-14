"use strict";

import { arrayUtilities } from "necessary";

import Replacement from "../../replacement";
import MarkdownNode from "../../node/markdown";
import ContentsListMarkdownNode from "../../node/markdown/contentsList";
import FootnotesListMarkdownNode from "../../node/markdown/footnotesList";

import { EMPTY_STRING } from "../../constants";
import { DIVISION_RULE_NAME } from "../../ruleNames";
import { renumberLinkMarkdownNodes } from "../../utilities/footnotes";
import { removeNode, removeTokens, replaceNode, replaceNodes, replaceTokens } from "../../utilities/node";
import { footnoteMarkdownNodsFromNode,
         headingMarkdownNodesFromNode,
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

  paginate(context) {
    const { linesPerPage } = context,
          childNodes = this.getChildNodes(),
          paginatedChildNodes = [],
          divisionMarkdownNodes = [],
          subDivisionReplacements = this.removeSubdivisionMarkdownNodes(pageNumberDirectiveMarkdownNodeFromNode, context);

    let totalLines = 0;

    childNodes.forEach((childNode) => {
      const lines = childNode.lines(context),
            paginatedChildNode = childNode;  ///

      totalLines += lines;

      paginatedChildNodes.push(paginatedChildNode);

      if (totalLines > linesPerPage) {
        const divisionMarkdownNode = DivisionMarkdownNode.fromSubdivisionReplacementsPagincatedChildNodesAndDivisionClassName(subDivisionReplacements, paginatedChildNodes, this.divisionClassName, context);

        divisionMarkdownNodes.push(divisionMarkdownNode);

        clear(paginatedChildNodes);

        totalLines = 0;
      }
    });

    if (totalLines > 0) {
      const divisionMarkdownNode = DivisionMarkdownNode.fromSubdivisionReplacementsPagincatedChildNodesAndDivisionClassName(subDivisionReplacements, paginatedChildNodes, this.divisionClassName, context);

      divisionMarkdownNodes.push(divisionMarkdownNode);
    }

    return divisionMarkdownNodes;
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

  createFootnotes(footnoteReplacements, context) {
    if (footnoteReplacements === null) {
      return;
    }

    const divisionMarkdownNode = this,  ///
          footnotesListMarkdownNode = FootnotesListMarkdownNode.fromFootnoteReplacementsAndDivisionMarkdownNode(footnoteReplacements, divisionMarkdownNode, context);

    if (footnotesListMarkdownNode === null) {
      return;
    }

    const node = footnotesListMarkdownNode, ///
          replacement = Replacement.fromNode(node, context);

    replacement.appendTo(divisionMarkdownNode, context);

    renumberLinkMarkdownNodes(divisionMarkdownNode, footnotesListMarkdownNode, context)
  }

  prepareFootnotes(context) {
    let subdivisionReplacements;

    subdivisionReplacements = this.removeSubdivisionMarkdownNodes(footnoteMarkdownNodsFromNode, context);

    let footnoteReplacements = subdivisionReplacements.map((subdivisionReplacement) => {
      const node = subdivisionReplacement.getNode(),
            footnoteMarkdownNode = footnoteMarkdownNodsFromNode(node),
            descendentNode = footnoteMarkdownNode,  ///
            footnoteReplacement = subdivisionReplacement.contract(descendentNode);

      return footnoteReplacement;
    });

    subdivisionReplacements = this.removeSubdivisionMarkdownNodes(footnotesDirectiveMarkdownNodeFromNode, context);

    const subdivisionReplacementsLength = subdivisionReplacements.length;

    if (subdivisionReplacementsLength === 0) {
      footnoteReplacements = null;
    }

    return footnoteReplacements;
  }

  resolveEmbeddings(context) {
    const node = this,  ///
          embedDirectiveMarkdownNodes = embedDirectiveMarkdownNodesFromNode(node);

    embedDirectiveMarkdownNodes.map((embedDirectiveMarkdownNode) => {
      const replacement = embedDirectiveMarkdownNode.replacement(context);

      if (replacement !== null) {
        let tokens;

        tokens = replacement.getTokens();

        const childNodes = replacement.getChildNodes(),
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

  removeSubdivisionMarkdownNodes(markdownNodeFromNode, context) {
    const { tokens } = context,
          node = this,  ///
          parentNode = this,  ///
          subDivisionMarkdownNodes = subDivisionMarkdownNodesFromNode(node),
          subDivisionReplacements = subDivisionMarkdownNodes.reduce((subDivisionReplacements, subDivisionMarkdownNode) => {
            const node = subDivisionMarkdownNode, ///
                  markdownNode = markdownNodeFromNode(node);

            if (markdownNode !== null) {
              const removedNode = subDivisionMarkdownNode,  ///
                    subDivisionReplacement = Replacement.fromNode(subDivisionMarkdownNode, context);

              subDivisionReplacements.push(subDivisionReplacement);

              removeTokens(removedNode, tokens);

              removeNode(removedNode, parentNode);
            }

            return subDivisionReplacements;
          }, []);

    return subDivisionReplacements;
  }

  createFootnotesListMarkdownNode(context) {
    const divisionMarkdownNode = this,  ///
          footnotesListMarkdownNode = FootnotesListMarkdownNode.fromDivisionMarkdownNode(divisionMarkdownNode, context);

    return footnotesListMarkdownNode;
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

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) {
    const divisionClassName = null,
          divisionMarkdownNode = MarkdownNode.fromRuleNameChildNodesAndOpacity(DivisionMarkdownNode, ruleName, childNodes, opacity, divisionClassName);

    return divisionMarkdownNode;
  }

  static fromSubdivisionReplacementsPagincatedChildNodesAndDivisionClassName(subDivisionReplacements, paginatedChildNodes, divisionClassName, context) {
    const ruleName = DIVISION_RULE_NAME,
          childNodes = [
            ...paginatedChildNodes
          ],
          opacity = null,
          divisionMarkdownNode = MarkdownNode.fromRuleNameChildNodesAndOpacity(DivisionMarkdownNode, ruleName, childNodes, opacity, divisionClassName);

    subDivisionReplacements.some((subDivisionReplacement) => {
      subDivisionReplacement.appendTo(divisionMarkdownNode, context);

      return true;  ///
    });

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