"use strict";

import { arrayUtilities } from "necessary";

import MarkdownNode from "../../node/markdown";
import FootnoteReplacement from "../../replacement/footnote";
import ContentsListReplacement from "../../replacement/contentsList";
import FootnotesListReplacement from "../../replacement/footnotesList";
import FootnoteSubDivisionReplacement from "../../replacement/subDivision/footnote";
import FootnotesDirectiveSubDivisionReplacement from "../../replacement/subDivision/footnotesDirective";
import PageNumberDirectiveSubDivisionReplacement from "../../replacement/subDivision/pageNumberDirective";

import { EMPTY_STRING } from "../../constants";
import { DIVISION_RULE_NAME } from "../../ruleNames";
import { subDivisionMarkdownNodesFromNode,
         embedDirectiveMarkdownNodesFromNode,
         ignoreDirectiveMarkdownNodeFromNode,
         contentsDirectiveMarkdownNodeFromNode,
         pageNumberDirectiveMarkdownNodeFromNode } from "../../utilities/query";

const { clear } = arrayUtilities;

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
          pageNumberDirectiveSubDivisionReplacement = this.removeSubDivisionMarkdownNode(PageNumberDirectiveSubDivisionReplacement, context);

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
            contentsListReplacement = ContentsListReplacement.fromDivisionMarkdownNode(divisionMarkdownNode, context);

      if (contentsListReplacement !== null) {
        contentsListReplacement.replaceContentsDirectiveMarkdownNode(contentsDirectiveMarkdownNode, divisionMarkdownNode, context);

        contentsCreated = true;
      }
    }

    return contentsCreated;
  }

  createFootnotes(footnoteReplacements, context) {
    if (footnoteReplacements !== null) {
      const divisionMarkdownNode = this,  ///
            footnotesListReplacement = FootnotesListReplacement.fromFootnoteReplacementsAndDivisionMarkdownNode(footnoteReplacements, divisionMarkdownNode, context);

      if (footnotesListReplacement !== null) {
        footnotesListReplacement.appendToDivisionMarkdownNode(divisionMarkdownNode, context);
      }
    }
  }

  prepareFootnotes(context) {
    const footnoteSubDivisionReplacements = this.removeSubDivisionMarkdownNodes(FootnoteSubDivisionReplacement, context);

    let footnoteReplacements = footnoteSubDivisionReplacements.map((footnoteSubDivisionReplacement) => {
      const footnoteReplacement = FootnoteReplacement.fromFootnoteSubDivisionReplacement(footnoteSubDivisionReplacement);

      return footnoteReplacement;
    });

    const footnotesDirectiveSubDivisionReplacement = this.removeSubDivisionMarkdownNode(FootnotesDirectiveSubDivisionReplacement, context);

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

  removeSubDivisionMarkdownNode(SubDivisionReplacement, context) {
    let subDivisionReplacement = null;

    const node = this,  ///
          subDivisionMarkdownNodes = subDivisionMarkdownNodesFromNode(node);

    subDivisionMarkdownNodes.some((subDivisionMarkdownNode) => {
      subDivisionReplacement = SubDivisionReplacement.fromSubDivisionMarkdownNode(subDivisionMarkdownNode, context);

      if (subDivisionReplacement !== null) {
        const divisionMarkdownNode = this;  ///

        subDivisionReplacement.removeFromDivisionMarkdownNode(divisionMarkdownNode, context);

        return true;
      }
    });

    return subDivisionReplacement;
  }

  removeSubDivisionMarkdownNodes(SubDivisionReplacement, context) {
    const node = this,  ///
          subDivisionMarkdownNodes = subDivisionMarkdownNodesFromNode(node),
          subDivisionReplacements = subDivisionMarkdownNodes.reduce((subDivisionReplacements, subDivisionMarkdownNode) => {
            const subDivisionReplacement = SubDivisionReplacement.fromSubDivisionMarkdownNode(subDivisionMarkdownNode, context);

            if (subDivisionReplacement !== null) {
              const divisionMarkdownNode = this;  ///

              subDivisionReplacement.removeFromDivisionMarkdownNode(divisionMarkdownNode, context);

              subDivisionReplacements.push(subDivisionReplacement);
            }

            return subDivisionReplacements;
          }, []);

    return subDivisionReplacements;
  }

  createFootnotesListMarkdownNode(context) {
    // const divisionMarkdownNode = this,  ///
    //       footnotesListMarkdownNode = FootnotesListMarkdownNode.fromDivisionMarkdownNode(divisionMarkdownNode, context);
    //
    // return footnotesListMarkdownNode;
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
