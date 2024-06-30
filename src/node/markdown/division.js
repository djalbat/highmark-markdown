"use strict";

import { arrayUtilities } from "necessary";

import MarkdownNode from "../../node/markdown";
import IndexReplacement from "../../replacement/index";
import FootnoteReplacement from "../../replacement/footnote";
import IndexAnchorReplacement from "../../replacement/indexAnchor";
import ContentsListReplacement from "../../replacement/contentsList";
import FootnotesListReplacement from "../../replacement/footnotesList";
import FootnoteSubDivisionReplacement from "../../replacement/subDivision/footnote";
import IndexDirectiveSubDivisionReplacement from "../../replacement/subDivision/indexDirective";
import ContentsDirectiveSubDivisionReplacement from "../../replacement/subDivision/contentsDirective";
import FootnotesDirectiveSubDivisionReplacement from "../../replacement/subDivision/footnotesDirective";
import PageNumberDirectiveSubDivisionReplacement from "../../replacement/subDivision/pageNumberDirective";

import { EMPTY_STRING } from "../../constants";
import { renumberFootnoteLinkMarkdownNodes } from "../../utilities/footnotes";
import { subDivisionMarkdownNodesFromNode, ignoreDirectiveMarkdownNodeFromNode, pageNumberDirectiveMarkdownNodeFromNode } from "../../utilities/query";
import {DIVISION_RULE_NAME} from "../../ruleNames";

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

  isDivisionMarkdownNode() {
    const divisionMarkdownNode = true;

    return divisionMarkdownNode;
  }

  getPageNumber() {
    let pageNumber = null;

    const subDivisionMarkdownNodes = this.findSubDivisionMarkdownNodes();

    subDivisionMarkdownNodes.some((subDivisionMarkdownNode) => {
      const node = subDivisionMarkdownNode, ///
            pageNumberDirective = pageNumberDirectiveMarkdownNodeFromNode(node);

      if (pageNumberDirective !== null) {
        pageNumber = pageNumberDirective.getPageNumber();

        return true;
      }
    });

    return pageNumber;
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

  paginate(markdownNodes, context) {
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

    let totalLines = 0,
        pageNumber = 1;

    childNodes.forEach((childNode) => {
      const lines = childNode.lines(context),
            paginatedChildNode = childNode;  ///

      paginatedChildNodes.push(paginatedChildNode);

      totalLines += lines;

      if (totalLines > linesPerPage) {
        paginateDivisionMarkdownNode(paginatedChildNodes, subDivisionReplacements, this.divisionClassName, markdownNodes, pageNumber, context)

        clear(paginatedChildNodes);

        totalLines = 0;

        pageNumber++;
      }
    });

    if (totalLines > 0) {
      paginateDivisionMarkdownNode(paginatedChildNodes, subDivisionReplacements, this.divisionClassName, markdownNodes, pageNumber, context);
    }
  }

  createIndex(divisionMarkdownNodes, context) {
    let indexCreated = false;

    const indexDirectiveSubDivisionReplacement = this.findSubDivisionReplacement(IndexDirectiveSubDivisionReplacement, context);

    if (indexDirectiveSubDivisionReplacement !== null) {
      const divisionMarkdownNode = this,  ///
            indexReplacement = IndexReplacement.fromDivisionMarkdownNodesAndDivisionMarkdownNode(divisionMarkdownNodes, divisionMarkdownNode, context);

      if (indexReplacement !== null) {
        indexReplacement.replaceIndexDirectiveSubdivisionReplacement(indexDirectiveSubDivisionReplacement, divisionMarkdownNode, context);

        indexCreated = true;
      }
    }

    return indexCreated;
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
    const footnotesDirectiveSubDivisionReplacement = this.findSubDivisionReplacement(FootnotesDirectiveSubDivisionReplacement, context);

    if (footnotesDirectiveSubDivisionReplacement !== null) {
      const divisionMarkdownNode = this,  ///
            footnotesListSubDivisionReplacement = FootnotesListReplacement.fromDivisionMarkdownNodeAndFootnoteReplacementMap(divisionMarkdownNode, footnoteReplacementMap, context);

      if (footnotesListSubDivisionReplacement !== null) {
        footnotesListSubDivisionReplacement.replaceFootnotesDirectiveSubDivisionReplacement(footnotesDirectiveSubDivisionReplacement, divisionMarkdownNode, context);
      }

      renumberFootnoteLinkMarkdownNodes(divisionMarkdownNode, footnoteReplacementMap, callback, context);
    }

    function callback(footnoteLinkMarkdownNode) {
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
          footnotesListSubDivisionReplacement = FootnotesListReplacement.fromDivisionMarkdownNodeAndFootnoteReplacementMap(divisionMarkdownNode, footnoteReplacementMap, context);

    return footnotesListSubDivisionReplacement;
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

  static fromPaginatedChildNodesAndSubDivisionReplacements(paginatedChildNodes, subDivisionReplacements, context) {
    const ruleName = DIVISION_RULE_NAME,
          childNodes = [
            ...paginatedChildNodes
          ],
          opacity = null,
          divisionMarkdownNode = DivisionMarkdownNode.fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity);

    subDivisionReplacements.forEach((subDivisionReplacement) => {
      subDivisionReplacement = subDivisionReplacement.clone();  ///

      subDivisionReplacement.appendToDivisionMarkdownNode(divisionMarkdownNode, context);
    });

    return divisionMarkdownNode;
  }
}

function paginateDivisionMarkdownNode(paginatedChildNodes, subDivisionReplacements, divisionClassName, markdownNodes, pageNumber, context) {
  let markdownNode;

  const indexAnchorReplacement = IndexAnchorReplacement.fromPageNumber(pageNumber, context),
        anchorMarkdownNode = indexAnchorReplacement.getAnchorMarkdownNode();

  markdownNode = anchorMarkdownNode;  ///

  markdownNodes.push(markdownNode);

  const divisionMarkdownNode = DivisionMarkdownNode.fromPaginatedChildNodesAndSubDivisionReplacements(paginatedChildNodes, subDivisionReplacements, context);

  divisionMarkdownNode.setDivisionClassName(divisionClassName);

  divisionMarkdownNode.setPageNumber(pageNumber);

  markdownNode = divisionMarkdownNode; ///

  markdownNodes.push(markdownNode);
}