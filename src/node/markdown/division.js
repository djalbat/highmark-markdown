"use strict";

import { arrayUtilities } from "necessary";

import MarkdownNode from "../../node/markdown";
import FootnoteReplacement from "../../replacement/footnote";
import ContentsListReplacement from "../../replacement/contentsList";
import FootnotesListReplacement from "../../replacement/footnotesList";
import FootnoteSubDivisionReplacement from "../../replacement/subDivision/footnote";
import ContentsDirectiveSubDivisionReplacement from "../../replacement/subDivision/contentsDirective";
import FootnotesDirectiveSubDivisionReplacement from "../../replacement/subDivision/footnotesDirective";
import PageNumberDirectiveSubDivisionReplacement from "../../replacement/subDivision/pageNumberDirective";

import { EMPTY_STRING } from "../../constants";
import { DIVISION_RULE_NAME } from "../../ruleNames";
import { renumberLinkMarkdownNodes } from "../../utilities/footnotes";
import { subDivisionMarkdownNodesFromNode, ignoreDirectiveMarkdownNodeFromNode, pageNumberDirectiveMarkdownNodeFromNode } from "../../utilities/query";

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
    const node = this,  ///
          ignoreDirectiveMarkdownNode = ignoreDirectiveMarkdownNodeFromNode(node),
          ignored = (ignoreDirectiveMarkdownNode !== null);

    return ignored;
  }

  paginate(paginatedDivisionMarkdownNodes, context) {
    const footnotesDirectiveSubDivisionReplacement = this.removeSubDivisionMarkdownNode(FootnotesDirectiveSubDivisionReplacement, context),
          pageNumberDirectiveSubDivisionReplacement = this.removeSubDivisionMarkdownNode(PageNumberDirectiveSubDivisionReplacement, context),
          subDivisionReplacements = [
            footnotesDirectiveSubDivisionReplacement,
            pageNumberDirectiveSubDivisionReplacement
          ];

    filter(subDivisionReplacements, (subDivisionReplacement) => {
      if (subDivisionReplacement !== null) {
        return true;
      }
    });

    const { linesPerPage } = context,
          paginatedChildNodes = [],
          childNodes = this.getChildNodes();

    let totalLines = 0;

    childNodes.forEach((childNode) => {
      const lines = childNode.lines(context),
            paginatedChildNode = childNode;  ///

      totalLines += lines;

      paginatedChildNodes.push(paginatedChildNode);

      if (totalLines > linesPerPage) {
        const divisionMarkdownNode = DivisionMarkdownNode.fromPaginatedChildNodesSubDivisionReplacementsAndDivisionClassName(paginatedChildNodes, subDivisionReplacements, this.divisionClassName, context),
              paginatedDivisionMarkdownNode = divisionMarkdownNode; ///

        paginatedDivisionMarkdownNodes.push(paginatedDivisionMarkdownNode);

        clear(paginatedChildNodes);

        totalLines = 0;
      }
    });

    if (totalLines > 0) {
      const divisionMarkdownNode = DivisionMarkdownNode.fromPaginatedChildNodesSubDivisionReplacementsAndDivisionClassName(paginatedChildNodes, subDivisionReplacements, this.divisionClassName, context),
            paginatedDivisionMarkdownNode = divisionMarkdownNode; ///

      paginatedDivisionMarkdownNodes.push(paginatedDivisionMarkdownNode);
    }
  }

  setPageNumber(pageNumber) {
    const subDivisionMarkdownNodes = this.findSubDivisionMarkdownNodes();

    subDivisionMarkdownNodes.some((subDivisionMarkdownNode) => {
      const node = subDivisionMarkdownNode, ///
            pageNumberDirective = pageNumberDirectiveMarkdownNodeFromNode(node);

      if (pageNumberDirective !== null) {
        pageNumberDirective.setPageNumber(pageNumber);

        return true;
      }
    });
  }

  createContents(divisionMarkdownNodes, context) {
    let contentsCreated = false;

    const contentsDirectiveSubDivisionReplacement = this.findSubDivisionReplacement(ContentsDirectiveSubDivisionReplacement, context);

    if (contentsDirectiveSubDivisionReplacement !== null) {
      const divisionMarkdownNode = this,  ///
            contentsListReplacement = ContentsListReplacement.fromDivisionMarkdownNodesAndDivisionMarkdownNode(divisionMarkdownNodes, divisionMarkdownNode, context);

      if (contentsListReplacement !== null) {
        contentsListReplacement.replaceContentsDirectiveSubdivisionReplacement(contentsDirectiveSubDivisionReplacement, divisionMarkdownNode, context);

        contentsCreated = true;
      }
    }

    return contentsCreated;
  }

  createFootnotes(footnoteReplacementMap, context) {
    const footnotesDirectiveSubDivisionReplacement = this.removeSubDivisionMarkdownNode(FootnotesDirectiveSubDivisionReplacement, context);

    if (footnotesDirectiveSubDivisionReplacement !== null) {
      const divisionMarkdownNode = this,  ///
            footnotesListReplacement = FootnotesListReplacement.fromDivisionMarkdownNodeAndFootnoteReplacementMap(divisionMarkdownNode, footnoteReplacementMap, context);

      if (footnotesListReplacement !== null) {
        footnotesListReplacement.appendToDivisionMarkdownNode(divisionMarkdownNode, context);
      }

      renumberLinkMarkdownNodes(divisionMarkdownNode, footnoteReplacementMap, callback, context);
    }

    function callback(linkMarkdownNode) {
      ///
    }
  }

  prepareFootnotes(footnoteReplacementMap, context) {
    const footnoteSubDivisionReplacements = this.removeSubDivisionMarkdownNodes(FootnoteSubDivisionReplacement, context);

    footnoteSubDivisionReplacements.forEach((footnoteSubDivisionReplacement) => {
      const footnoteReplacement = FootnoteReplacement.fromFootnoteSubDivisionReplacement(footnoteSubDivisionReplacement),
            identifier = footnoteSubDivisionReplacement.identifier(context);

      footnoteReplacementMap[identifier] = footnoteReplacement;
    });
  }

  resolveIncludes(context) {
    const divisionMarkdownNode = this,  ///
          subDivisionMarkdownNodes = this.findSubDivisionMarkdownNodes();

    subDivisionMarkdownNodes.forEach((subDivisionMarkdownNode) => {
      subDivisionMarkdownNode.resolveIncludes(divisionMarkdownNode, context);
    });
  }

  resolveEmbeddings(context) {
    const divisionMarkdownNode = this,  ///
          subDivisionMarkdownNodes = this.findSubDivisionMarkdownNodes();

    subDivisionMarkdownNodes.forEach((subDivisionMarkdownNode) => {
      subDivisionMarkdownNode.resolveEmbeddings(divisionMarkdownNode, context);
    });
  }

  findSubDivisionReplacement(SubDivisionReplacement, context) {
    let subDivisionReplacement = null;

    const subDivisionMarkdownNodes = this.findSubDivisionMarkdownNodes();

    subDivisionMarkdownNodes.some((subDivisionMarkdownNode) => {
      subDivisionReplacement = SubDivisionReplacement.fromSubDivisionMarkdownNode(subDivisionMarkdownNode, context);

      if (subDivisionReplacement !== null) {
        return true;
      }
    });

    return subDivisionReplacement;
  }

  findSubDivisionReplacements(SubDivisionReplacement, context) {
    const subDivisionMarkdownNodes = this.findSubDivisionMarkdownNodes(),
          subDivisionReplacements = subDivisionMarkdownNodes.reduce((subDivisionReplacements, subDivisionMarkdownNode) => {
            const subDivisionReplacement = SubDivisionReplacement.fromSubDivisionMarkdownNode(subDivisionMarkdownNode, context);

            if (subDivisionReplacement !== null) {
              subDivisionReplacements.push(subDivisionReplacement);
            }

            return subDivisionReplacements;
          }, []);

    return subDivisionReplacements;
  }

  findSubDivisionMarkdownNodes() {
    const node = this,  ///
          subDivisionMarkdownNodes = subDivisionMarkdownNodesFromNode(node);

    return subDivisionMarkdownNodes;
  }

  removeSubDivisionMarkdownNode(SubDivisionReplacement, context) {
    const divisionMarkdownNode = this,  //
          subDivisionReplacement = this.findSubDivisionReplacement(SubDivisionReplacement, context);

    if (subDivisionReplacement !== null) {
      subDivisionReplacement.removeFromDivisionMarkdownNode(divisionMarkdownNode, context);
    }

    return subDivisionReplacement;
  }

  removeSubDivisionMarkdownNodes(SubDivisionReplacement, context) {
    const divisionMarkdownNode = this,  //
          subDivisionReplacements = this.findSubDivisionReplacements(SubDivisionReplacement, context);

    subDivisionReplacements.forEach((subDivisionReplacement) => {
      subDivisionReplacement.removeFromDivisionMarkdownNode(divisionMarkdownNode, context);
    });

    return subDivisionReplacements;
  }

  createFootnotesListReplacement(footnoteReplacementMap, context) {
    const footnoteSubDivisionReplacements = this.findSubDivisionReplacements(FootnoteSubDivisionReplacement, context);

    footnoteSubDivisionReplacements.forEach((footnoteSubDivisionReplacement) => {
      const footnoteReplacement = FootnoteReplacement.fromFootnoteSubDivisionReplacement(footnoteSubDivisionReplacement),
            identifier = footnoteSubDivisionReplacement.identifier(context);

      footnoteReplacementMap[identifier] = footnoteReplacement;
    });

    const divisionMarkdownNode = this,  ///
          footnotesListReplacement = FootnotesListReplacement.fromDivisionMarkdownNodeAndFootnoteReplacementMap(divisionMarkdownNode, footnoteReplacementMap, context);

    return footnotesListReplacement;
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

  static fromPaginatedChildNodesSubDivisionReplacementsAndDivisionClassName(paginatedChildNodes, subDivisionReplacements, divisionClassName, context) {
    const ruleName = DIVISION_RULE_NAME,
          childNodes = [
            ...paginatedChildNodes
          ],
          opacity = null,
          divisionMarkdownNode = MarkdownNode.fromRuleNameChildNodesAndOpacity(DivisionMarkdownNode, ruleName, childNodes, opacity, divisionClassName);

    subDivisionReplacements.forEach((subDivisionReplacement) => {
      subDivisionReplacement = subDivisionReplacement.clone();  ///

      subDivisionReplacement.appendToDivisionMarkdownNode(divisionMarkdownNode, context);
    });

    return divisionMarkdownNode;
  }
}
