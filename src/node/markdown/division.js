"use strict";

import { arrayUtilities } from "necessary";

import MarkdownNode from "../../node/markdown";
import IndexTransform from "../../transform/index";
import FootnoteTransform from "../../transform/footnote";
import IndexAnchorTransform from "../../transform/indexAnchor";
import ContentsListTransform from "../../transform/contentsList";
import FootnotesListTransform from "../../transform/footnotesList";
import FootnoteSubDivisionTransform from "../../transform/subDivision/footnote";
import IndexDirectiveSubDivisionTransform from "../../transform/subDivision/indexDirective";
import ContentsDirectiveSubDivisionTransform from "../../transform/subDivision/contentsDirective";
import FootnotesDirectiveSubDivisionTransform from "../../transform/subDivision/footnotesDirective";
import PageNumberDirectiveSubDivisionTransform from "../../transform/subDivision/pageNumberDirective";

import { DIVISION_RULE_NAME } from "../../ruleNames";
import { renumberFootnoteLinkMarkdownNodes } from "../../utilities/footnotes";
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

  isDivisionMarkdownNode() {
    const divisionMarkdownNode = true;

    return divisionMarkdownNode;
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

  getPageNumber() {
    let pageNumber = null;

    const pageNumberDirectiveMarkdownNode = this.findPageNumberDirectiveMarkdownNode();

    if (pageNumberDirectiveMarkdownNode !== null) {
      pageNumber = pageNumberDirectiveMarkdownNode.getPageNumber();
    }

    return pageNumber;
  }

  setPageNumber(pageNumber) {
    const pageNumberDirectiveMarkdownNode = this.findPageNumberDirectiveMarkdownNode();

    if (pageNumberDirectiveMarkdownNode !== null) {
      pageNumberDirectiveMarkdownNode.setPageNumber(pageNumber);
    }
  }

  paginate(markdownNodes, context) {
    const footnotesDirectiveSubDivisionTransform = this.removeSubDivisionMarkdownNode(FootnotesDirectiveSubDivisionTransform, context),
          pageNumberDirectiveSubDivisionTransform = this.removeSubDivisionMarkdownNode(PageNumberDirectiveSubDivisionTransform, context),
          subDivisionTransforms = [
            footnotesDirectiveSubDivisionTransform,
            pageNumberDirectiveSubDivisionTransform
          ];

    filter(subDivisionTransforms, (subDivisionTransform) => {
      if (subDivisionTransform !== null) {
        return true;
      }
    });

    const { linesPerPage } = context,
          paginatedChildNodes = [];

    let { pageNumber } = context,
        totalLines = 0;

    this.forEachChildNode((childNode) => {
      const lines = childNode.lines(context);

      if ((totalLines + lines) > linesPerPage) {
        paginateDivisionMarkdownNode(paginatedChildNodes, subDivisionTransforms, this.divisionClassName, markdownNodes, pageNumber, context);

        pageNumber++;

        totalLines = 0;

        clear(paginatedChildNodes);
      }

      const paginatedChildNode = childNode;  ///

      paginatedChildNodes.push(paginatedChildNode);

      totalLines += lines;
    });

    if (totalLines > 0) {
      paginateDivisionMarkdownNode(paginatedChildNodes, subDivisionTransforms, this.divisionClassName, markdownNodes, pageNumber, context);

      pageNumber++;
    }

    Object.assign(context, {
      pageNumber
    });
  }

  createIndex(divisionMarkdownNodes, context) {
    let indexCreated = false;

    const indexDirectiveSubDivisionTransform = this.findSubDivisionTransform(IndexDirectiveSubDivisionTransform, context);

    if (indexDirectiveSubDivisionTransform !== null) {
      const divisionMarkdownNode = this,  ///
            indexTransform = IndexTransform.fromDivisionMarkdownNodesAndDivisionMarkdownNode(divisionMarkdownNodes, divisionMarkdownNode, context);

      if (indexTransform !== null) {
        indexTransform.replaceIndexDirectiveSubdivisionTransform(indexDirectiveSubDivisionTransform, divisionMarkdownNode, context);

        indexCreated = true;
      }
    }

    return indexCreated;
  }

  createContents(divisionMarkdownNodes, context) {
    let contentsCreated = false;

    const contentsDirectiveSubDivisionTransform = this.findSubDivisionTransform(ContentsDirectiveSubDivisionTransform, context);

    if (contentsDirectiveSubDivisionTransform !== null) {
      const divisionMarkdownNode = this,  ///
            contentsListTransform = ContentsListTransform.fromDivisionMarkdownNodesAndDivisionMarkdownNode(divisionMarkdownNodes, divisionMarkdownNode, context);

      if (contentsListTransform !== null) {
        contentsListTransform.replaceContentsDirectiveSubdivisionTransform(contentsDirectiveSubDivisionTransform, divisionMarkdownNode, context);

        contentsCreated = true;
      }
    }

    return contentsCreated;
  }

  createFootnotes(footnoteTransformMap, context) {
    const footnotesDirectiveSubDivisionTransform = this.findSubDivisionTransform(FootnotesDirectiveSubDivisionTransform, context);

    if (footnotesDirectiveSubDivisionTransform !== null) {
      const divisionMarkdownNode = this,  ///
            footnotesListSubDivisionTransform = FootnotesListTransform.fromDivisionMarkdownNodeAndFootnoteTransformMap(divisionMarkdownNode, footnoteTransformMap, context);

      if (footnotesListSubDivisionTransform !== null) {
        footnotesListSubDivisionTransform.replaceFootnotesDirectiveSubDivisionTransform(footnotesDirectiveSubDivisionTransform, divisionMarkdownNode, context);
      }

      renumberFootnoteLinkMarkdownNodes(divisionMarkdownNode, footnoteTransformMap, context);
    }
  }

  prepareFootnotes(footnoteTransformMap, context) {
    const footnoteSubDivisionTransforms = this.removeSubDivisionMarkdownNodes(FootnoteSubDivisionTransform, context);

    footnoteSubDivisionTransforms.forEach((footnoteSubDivisionTransform) => {
      const footnoteTransform = FootnoteTransform.fromFootnoteSubDivisionTransform(footnoteSubDivisionTransform),
            identifier = footnoteSubDivisionTransform.identifier(context);

      footnoteTransformMap[identifier] = footnoteTransform;
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

  findSubDivisionTransform(SubDivisionTransform, context) {
    let subDivisionTransform = null;

    const subDivisionMarkdownNodes = this.findSubDivisionMarkdownNodes();

    subDivisionMarkdownNodes.some((subDivisionMarkdownNode) => {
      subDivisionTransform = SubDivisionTransform.fromSubDivisionMarkdownNode(subDivisionMarkdownNode, context);

      if (subDivisionTransform !== null) {
        return true;
      }
    });

    return subDivisionTransform;
  }

  findSubDivisionTransforms(SubDivisionTransform, context) {
    const subDivisionMarkdownNodes = this.findSubDivisionMarkdownNodes(),
          subDivisionTransforms = subDivisionMarkdownNodes.reduce((subDivisionTransforms, subDivisionMarkdownNode) => {
            const subDivisionTransform = SubDivisionTransform.fromSubDivisionMarkdownNode(subDivisionMarkdownNode, context);

            if (subDivisionTransform !== null) {
              subDivisionTransforms.push(subDivisionTransform);
            }

            return subDivisionTransforms;
          }, []);

    return subDivisionTransforms;
  }

  findSubDivisionMarkdownNodes() {
    const node = this,  ///
          subDivisionMarkdownNodes = subDivisionMarkdownNodesFromNode(node);

    return subDivisionMarkdownNodes;
  }

  findPageNumberDirectiveMarkdownNode() {
    let pageNumberDirectiveMarkdownNode = null;

    const subDivisionMarkdownNodes = this.findSubDivisionMarkdownNodes();

    subDivisionMarkdownNodes.some((subDivisionMarkdownNode) => {
      const node = subDivisionMarkdownNode; ///

      pageNumberDirectiveMarkdownNode = pageNumberDirectiveMarkdownNodeFromNode(node);

      if (pageNumberDirectiveMarkdownNode !== null) {
        return true;
      }
    });

    return pageNumberDirectiveMarkdownNode;
  }

  removeSubDivisionMarkdownNode(SubDivisionTransform, context) {
    const divisionMarkdownNode = this,  //
          subDivisionTransform = this.findSubDivisionTransform(SubDivisionTransform, context);

    if (subDivisionTransform !== null) {
      subDivisionTransform.removeFromDivisionMarkdownNode(divisionMarkdownNode, context);
    }

    return subDivisionTransform;
  }

  removeSubDivisionMarkdownNodes(SubDivisionTransform, context) {
    const divisionMarkdownNode = this,  //
          subDivisionTransforms = this.findSubDivisionTransforms(SubDivisionTransform, context);

    subDivisionTransforms.forEach((subDivisionTransform) => {
      subDivisionTransform.removeFromDivisionMarkdownNode(divisionMarkdownNode, context);
    });

    return subDivisionTransforms;
  }

  createFootnotesListTransform(footnoteTransformMap, context) {
    const footnoteSubDivisionTransforms = this.findSubDivisionTransforms(FootnoteSubDivisionTransform, context);

    footnoteSubDivisionTransforms.forEach((footnoteSubDivisionTransform) => {
      const footnoteTransform = FootnoteTransform.fromFootnoteSubDivisionTransform(footnoteSubDivisionTransform),
            identifier = footnoteSubDivisionTransform.identifier(context);

      footnoteTransformMap[identifier] = footnoteTransform;
    });

    const divisionMarkdownNode = this,  ///
          footnotesListSubDivisionTransform = FootnotesListTransform.fromDivisionMarkdownNodeAndFootnoteTransformMap(divisionMarkdownNode, footnoteTransformMap, context);

    return footnotesListSubDivisionTransform;
  }

  clone() { return super.clone(this.divisionClassName); }

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) {
    const divisionClassName = null,
          divisionMarkdownNode = MarkdownNode.fromRuleNameChildNodesAndOpacity(DivisionMarkdownNode, ruleName, childNodes, opacity, divisionClassName);

    return divisionMarkdownNode;
  }

  static fromPaginatedChildNodesSubDivisionTransformsAndDivisionClassName(paginatedChildNodes, subDivisionTransforms, divisionClassName, context) {
    const ruleName = DIVISION_RULE_NAME,
          childNodes = [
            ...paginatedChildNodes
          ],
          opacity = null,
          divisionMarkdownNode = DivisionMarkdownNode.fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity);

    divisionMarkdownNode.setDivisionClassName(divisionClassName);

    subDivisionTransforms.forEach((subDivisionTransform) => {
      subDivisionTransform = subDivisionTransform.clone();  ///

      subDivisionTransform.appendToDivisionMarkdownNode(divisionMarkdownNode, context);
    });

    return divisionMarkdownNode;
  }
}

function paginateDivisionMarkdownNode(paginatedChildNodes, subDivisionTransforms, divisionClassName, markdownNodes, pageNumber, context) {
  let markdownNode;

  const indexAnchorTransform = IndexAnchorTransform.fromPageNumber(pageNumber, context),
        divisionMarkdownNode = DivisionMarkdownNode.fromPaginatedChildNodesSubDivisionTransformsAndDivisionClassName(paginatedChildNodes, subDivisionTransforms, divisionClassName, context),
        anchorMarkdownNode = indexAnchorTransform.getAnchorMarkdownNode();

  divisionMarkdownNode.setPageNumber(pageNumber);

  markdownNode = anchorMarkdownNode;  ///

  markdownNodes.push(markdownNode);

  markdownNode = divisionMarkdownNode; ///

  markdownNodes.push(markdownNode);
}