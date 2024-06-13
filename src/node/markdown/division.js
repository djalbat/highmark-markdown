"use strict";

import { arrayUtilities } from "necessary";

import MarkdownNode from "../../node/markdown";
import ContentsListMarkdownNode from "../../node/markdown/contentsList";
import FootnotesListMarkdownNode from "../../node/markdown/footnotesList";

import { EMPTY_STRING } from "../../constants";
import { renumberLinkMarkdownNodes } from "../../utilities/footnotes";
import { replaceNode, replaceNodes, replaceTokens } from "../../utilities/replace";
import { headingMarkdownNodesFromNode,
         embedDirectiveMarkdownNodesFromNode,
         ignoreDirectiveMarkdownNodeFromNode,
         contentsDirectiveMarkdownNodeFromNode,
         footnotesDirectiveMarkdownNodeFromNode,
         pageNumberDirectiveMarkdownNodeFromNode } from "../../utilities/query";

const { filter } = arrayUtilities;

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

  hasPageNumber() {
    const node = this,
          pageNumberDirectiveMarkdownNode = pageNumberDirectiveMarkdownNodeFromNode(node),
          pageNumber = (pageNumberDirectiveMarkdownNode !== null);

    return pageNumber;
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
    const { linesPerPage = null } = context;

    if (linesPerPage === null) {
      return;
    }

    const childNodes = this.getChildNodes();

    childNodes.forEach((childNode) => {
      const lines = childNode.lines(context);

    });
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

  removeFootnotesListMarkdownNode(footnotesListMarkdownNode) {
    const childNode = footnotesListMarkdownNode;  ///

    this.removeChildNode(childNode);
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