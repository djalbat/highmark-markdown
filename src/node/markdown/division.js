"use strict";

import { arrayUtilities } from "necessary";

import MarkdownNode from "../../node/markdown";
import FootnoteReplacement from "../../replacement/footnote";
import FootnotesListReplacement from "../../replacement/footnotesList";
import ContentsListMarkdownNode from "../../node/markdown/contentsList";
import FootnotesListMarkdownNode from "../../node/markdown/footnotesList";
import FootnoteSubDivisionReplacement from "../../replacement/subDivision/footnote";
import FootnotesDirectiveSubDivisionReplacement from "../../replacement/subDivision/footnotesDirective";
import PageNumberDirectiveSubDivisionReplacement from "../../replacement/subDivision/pageNumberDirective";

import { EMPTY_STRING } from "../../constants";
import { DIVISION_RULE_NAME } from "../../ruleNames";
import { replaceNode, replaceTokens } from "../../utilities/node";
import { headingMarkdownNodesFromNode,
         subDivisionMarkdownNodesFromNode,
         embedDirectiveMarkdownNodesFromNode,
         ignoreDirectiveMarkdownNodeFromNode,
         contentsDirectiveMarkdownNodeFromNode,
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
          pageNumberDirectiveSubDivisionReplacement = this.removePageNumberDirectiveSubDivisionMarkdownNode(context);

    let totalLines = 0;

    childNodes.forEach((childNode) => {
      const lines = childNode.lines(context),
            paginatedChildNode = childNode;  ///

      totalLines += lines;

      paginatedChildNodes.push(paginatedChildNode);

      if (totalLines > linesPerPage) {
        const divisionMarkdownNode = DivisionMarkdownNode.fromPageNumberDirectiveSubDivisionReplacementPaginatedChildNodesAndDivisionClassName(pageNumberDirectiveSubDivisionReplacement, paginatedChildNodes, this.divisionClassName, context);

        divisionMarkdownNodes.push(divisionMarkdownNode);

        clear(paginatedChildNodes);

        totalLines = 0;
      }
    });

    if (totalLines > 0) {
      const divisionMarkdownNode = DivisionMarkdownNode.fromPageNumberDirectiveSubDivisionReplacementPaginatedChildNodesAndDivisionClassName(pageNumberDirectiveSubDivisionReplacement, paginatedChildNodes, this.divisionClassName, context);

      divisionMarkdownNodes.push(divisionMarkdownNode);
    }

    return divisionMarkdownNodes;
  }

  setPageNumber(pageNumber) {
    const node = this,
          pageNumberDirective = pageNumberDirectiveMarkdownNodeFromNode(node);

    if (pageNumberDirective !== null) {
      pageNumberDirective.setPageNumber(pageNumber);
    }
  }

  createContents(divisionMarkdownNodes, context) {
    let contentsCreated = false;

    const node = this,  ///
          contentsDirectiveMarkdownNode = contentsDirectiveMarkdownNodeFromNode(node);

    if (contentsDirectiveMarkdownNode !== null) {
      const divisionMarkdownNode = this,  ///
            headingMarkdownNodes = headingMarkdownNodesFromDivisionMarkdownNodesAndDivisionMarkdownNode(divisionMarkdownNodes, divisionMarkdownNode, context),
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
          footnotesListReplacement = FootnotesListReplacement.fromFootnoteReplacementsAndDivisionMarkdownNode(footnoteReplacements, divisionMarkdownNode, context);

    if (footnotesListReplacement === null) {
      return;
    }

    footnotesListReplacement.appendToDivisionMarkdownNode(divisionMarkdownNode, context);
  }

  prepareFootnotes(context) {
    const footnoteSubDivisionReplacements = this.removeFootnoteSubDivisionMarkdownNodes(context);

    let footnoteReplacements = footnoteSubDivisionReplacements.map((footnoteSubDivisionReplacement) => {
      const footnoteReplacement = FootnoteReplacement.fromFootnoteSubDivisionReplacement(footnoteSubDivisionReplacement);

      return footnoteReplacement;
    });

    const footnotesDirectiveSubDivisionReplacement = this.removeFootnotesDirectiveSubDivisionMarkdownNode(context);

    if (footnotesDirectiveSubDivisionReplacement === null) {
      footnoteReplacements = null;
    }

    return footnoteReplacements;
  }

  resolveEmbeddings(context) {
    const node = this,  ///
          embedDirectiveMarkdownNodes = embedDirectiveMarkdownNodesFromNode(node);

    embedDirectiveMarkdownNodes.map((embedDirectiveMarkdownNode) => {
      const importedReplacement = embedDirectiveMarkdownNode.import(context);

      if (importedReplacement !== null) {
        const childNode = embedDirectiveMarkdownNode,  ///
              parentNode = this.findParentNode(childNode);

        importedReplacement.replaceEmbedDirectiveMarkdownNode(embedDirectiveMarkdownNode, parentNode, context);
      }
    });
  }

  createFootnotesListMarkdownNode(context) {
    const divisionMarkdownNode = this,  ///
          footnotesListMarkdownNode = FootnotesListMarkdownNode.fromDivisionMarkdownNode(divisionMarkdownNode, context);

    return footnotesListMarkdownNode;
  }

  removeFootnoteSubDivisionMarkdownNodes(context) {
    const node = this,  ///
          subDivisionMarkdownNodes = subDivisionMarkdownNodesFromNode(node),
          footnoteSubDivisionReplacements = subDivisionMarkdownNodes.reduce((footnoteSubDivisionReplacements, subDivisionMarkdownNode) => {
            const footnoteSubDivisionReplacement = FootnoteSubDivisionReplacement.fromSubDivisionMarkdownNode(subDivisionMarkdownNode, context);

            if (footnoteSubDivisionReplacement !== null) {
              const divisionMarkdownNode = this;  ///

              footnoteSubDivisionReplacement.removeFromDivisionMarkdownNode(divisionMarkdownNode, context);

              footnoteSubDivisionReplacements.push(footnoteSubDivisionReplacement);
            }

            return footnoteSubDivisionReplacements;
          }, []);

    return footnoteSubDivisionReplacements;
  }

  removeFootnotesDirectiveSubDivisionMarkdownNode(context) {
    let footnotesDirectiveSubDivisionReplacement = null;

    const node = this,  ///
          subDivisionMarkdownNodes = subDivisionMarkdownNodesFromNode(node);

    subDivisionMarkdownNodes.some((subDivisionMarkdownNode) => {
      footnotesDirectiveSubDivisionReplacement = FootnotesDirectiveSubDivisionReplacement.fromSubDivisionMarkdownNode(subDivisionMarkdownNode, context);

      if (footnotesDirectiveSubDivisionReplacement !== null) {
        const divisionMarkdownNode = this;  ///

        footnotesDirectiveSubDivisionReplacement.removeFromDivisionMarkdownNode(divisionMarkdownNode, context);

        return true;
      }
    });

    return footnotesDirectiveSubDivisionReplacement;
  }

  removePageNumberDirectiveSubDivisionMarkdownNode(context) {
    let pageNumberDirectiveSubDivisionReplacement = null;

    const node = this,  ///
          subDivisionMarkdownNodes = subDivisionMarkdownNodesFromNode(node);

    subDivisionMarkdownNodes.some((subDivisionMarkdownNode) => {
      pageNumberDirectiveSubDivisionReplacement = PageNumberDirectiveSubDivisionReplacement.fromSubDivisionMarkdownNode(subDivisionMarkdownNode, context);

      if (pageNumberDirectiveSubDivisionReplacement !== null) {
        const divisionMarkdownNode = this;  ///

        pageNumberDirectiveSubDivisionReplacement.removeFromDivisionMarkdownNode(divisionMarkdownNode, context);

        return true;
      }
    });

    return pageNumberDirectiveSubDivisionReplacement;
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

  static fromPageNumberDirectiveSubDivisionReplacementPaginatedChildNodesAndDivisionClassName(pageNumberDirectiveSubDivisionReplacement, paginatedChildNodes, divisionClassName, context) {
    const ruleName = DIVISION_RULE_NAME,
          childNodes = [
            ...paginatedChildNodes
          ],
          opacity = null,
          divisionMarkdownNode = MarkdownNode.fromRuleNameChildNodesAndOpacity(DivisionMarkdownNode, ruleName, childNodes, opacity, divisionClassName);

    if (pageNumberDirectiveSubDivisionReplacement !== null) {
      pageNumberDirectiveSubDivisionReplacement = pageNumberDirectiveSubDivisionReplacement.clone();  ///

      pageNumberDirectiveSubDivisionReplacement.appendToDivisionMarkdownNode(divisionMarkdownNode, context);
    }

    return divisionMarkdownNode;
  }
}

function headingMarkdownNodesFromDivisionMarkdownNodesAndDivisionMarkdownNode(divisionMarkdownNodes, divisionMarkdownNode, context) {
  const headingMarkdownNodes = [],
        index = divisionMarkdownNodes.indexOf(divisionMarkdownNode),
        start = index + 1;

  divisionMarkdownNodes = divisionMarkdownNodes.slice(start); ///

  divisionMarkdownNodes.forEach((divisionMarkdownNode) => {
    const node = divisionMarkdownNode;  ///

    headingMarkdownNodesFromNode(node, headingMarkdownNodes);
  });

  filter(headingMarkdownNodes, (headingMarkdownNode) => {
    const { contentsDepth } = context,
          depth = headingMarkdownNode.getDepth();

    if (depth <= contentsDepth) {
      return true;
    }
  });

  return headingMarkdownNodes;
}