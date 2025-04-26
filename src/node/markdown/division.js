"use strict";

import { arrayUtilities } from "necessary";

import MarkdownNode from "../../node/markdown";
import IndexTransform from "../../transform/index";
import FootnoteTransform from "../../transform/footnote";
import IndexAnchorTransform from "../../transform/indexAnchor";
import ContentsListTransform from "../../transform/contentsList";
import FootnotesListTransform from "../../transform/footnotesList";
import FootnoteDivisionTransform from "../../transform/subDivision/footnote";
import EmbedDirectivesDivisionTransform from "../../transform/subDivision/embedDirectives";
import IncludeDirectivesDivisionTransform from "../../transform/subDivision/includeDirectives";
import IndexDirectiveDivisionTransform from "../../transform/subDivision/indexDirective";
import ContentsDirectiveDivisionTransform from "../../transform/subDivision/contentsDirective";
import FootnotesDirectiveDivisionTransform from "../../transform/subDivision/footnotesDirective";
import PageNumberDirectiveDivisionTransform from "../../transform/subDivision/pageNumberDirective";

import { DIVISION_RULE_NAME } from "../../ruleNames";
import { renumberFootnoteLinkMarkdownNodes } from "../../utilities/footnotes";
import { subDivisionMarkdownNodesFromNode, ignoreDirectiveMarkdownNodeFromNode, pageNumberDirectiveMarkdownNodeFromNode } from "../../utilities/query";

const { clear, filter } = arrayUtilities;

export default class DivisionMarkdownNode extends MarkdownNode {
  resolveIncludes(context) {
    const divisionMarkdownNode = this, ///
          includeDirectivesDivisionTransform = IncludeDirectivesDivisionTransform.fromDivisionMarkdownNode(divisionMarkdownNode, context);

    if (includeDirectivesDivisionTransform !== null) {
      includeDirectivesDivisionTransform.removeDivisionMarkdownNode(divisionMarkdownNode, context);
    }
  }

  resolveEmbeddings(divisionMarkdownNode, context) {
    const divisionMarkdownNode = this, ///
          embedDirectivesDivisionTransform = EmbedDirectivesDivisionTransform.fromDivisionMarkdownNode(divisionMarkdownNode, context);

    if (embedDirectivesDivisionTransform !== null) {
      const subDivisionMarkdownNodes = embedDirectivesDivisionTransform.replaceDivisionMarkdownNode(divisionMarkdownNode, context);

      subDivisionMarkdownNodes.forEach((subDivisionMarkdownNode) => {
        subDivisionMarkdownNode.resolveEmbeddings(divisionMarkdownNode, context);
      });
    }
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

  // getPageNumber() {
  //   let pageNumber = null;
  //
  //   const pageNumberDirectiveMarkdownNode = this.findPageNumberDirectiveMarkdownNode();
  //
  //   if (pageNumberDirectiveMarkdownNode !== null) {
  //     pageNumber = pageNumberDirectiveMarkdownNode.getPageNumber();
  //   }
  //
  //   return pageNumber;
  // }
  //
  // setPageNumber(pageNumber) {
  //   const pageNumberDirectiveMarkdownNode = this.findPageNumberDirectiveMarkdownNode();
  //
  //   if (pageNumberDirectiveMarkdownNode !== null) {
  //     pageNumberDirectiveMarkdownNode.setPageNumber(pageNumber);
  //   }
  // }
  //
  // paginate(markdownNodes, context) {
  //   const footnotesDirectiveDivisionTransform = this.removeDivisionMarkdownNode(FootnotesDirectiveDivisionTransform, context),
  //         pageNumberDirectiveDivisionTransform = this.removeDivisionMarkdownNode(PageNumberDirectiveDivisionTransform, context),
  //         subDivisionTransforms = [
  //           footnotesDirectiveDivisionTransform,
  //           pageNumberDirectiveDivisionTransform
  //         ];
  //
  //   filter(subDivisionTransforms, (subDivisionTransform) => {
  //     if (subDivisionTransform !== null) {
  //       return true;
  //     }
  //   });
  //
  //   const { linesPerPage } = context,
  //         paginatedChildNodes = [];
  //
  //   let { pageNumber } = context,
  //       totalLines = 0;
  //
  //   this.forEachChildNode((childNode) => {
  //     const lines = childNode.lines(context);
  //
  //     if ((totalLines + lines) > linesPerPage) {
  //       paginateDivisionMarkdownNode(paginatedChildNodes, subDivisionTransforms, this.divisionClassName, markdownNodes, pageNumber, context);
  //
  //       pageNumber++;
  //
  //       totalLines = 0;
  //
  //       clear(paginatedChildNodes);
  //     }
  //
  //     const paginatedChildNode = childNode;  ///
  //
  //     paginatedChildNodes.push(paginatedChildNode);
  //
  //     totalLines += lines;
  //   });
  //
  //   if (totalLines > 0) {
  //     paginateDivisionMarkdownNode(paginatedChildNodes, subDivisionTransforms, this.divisionClassName, markdownNodes, pageNumber, context);
  //
  //     pageNumber++;
  //   }
  //
  //   Object.assign(context, {
  //     pageNumber
  //   });
  // }
  //
  // createIndex(divisionMarkdownNodes, context) {
  //   let indexCreated = false;
  //
  //   const indexDirectiveDivisionTransform = this.findDivisionTransform(IndexDirectiveDivisionTransform, context);
  //
  //   if (indexDirectiveDivisionTransform !== null) {
  //     const divisionMarkdownNode = this,  ///
  //           indexTransform = IndexTransform.fromDivisionMarkdownNodesAndDivisionMarkdownNode(divisionMarkdownNodes, divisionMarkdownNode, context);
  //
  //     if (indexTransform !== null) {
  //       indexTransform.replaceIndexDirectiveSubdivisionTransform(indexDirectiveDivisionTransform, divisionMarkdownNode, context);
  //
  //       indexCreated = true;
  //     }
  //   }
  //
  //   return indexCreated;
  // }
  //
  // createContents(divisionMarkdownNodes, context) {
  //   let contentsCreated = false;
  //
  //   const contentsDirectiveDivisionTransform = this.findDivisionTransform(ContentsDirectiveDivisionTransform, context);
  //
  //   if (contentsDirectiveDivisionTransform !== null) {
  //     const divisionMarkdownNode = this,  ///
  //           contentsListTransform = ContentsListTransform.fromDivisionMarkdownNodesAndDivisionMarkdownNode(divisionMarkdownNodes, divisionMarkdownNode, context);
  //
  //     if (contentsListTransform !== null) {
  //       contentsListTransform.replaceContentsDirectiveSubdivisionTransform(contentsDirectiveDivisionTransform, divisionMarkdownNode, context);
  //
  //       contentsCreated = true;
  //     }
  //   }
  //
  //   return contentsCreated;
  // }
  //
  // createFootnotes(footnoteTransformMap, context) {
  //   const footnotesDirectiveDivisionTransform = this.findDivisionTransform(FootnotesDirectiveDivisionTransform, context);
  //
  //   if (footnotesDirectiveDivisionTransform !== null) {
  //     const divisionMarkdownNode = this,  ///
  //           footnotesListDivisionTransform = FootnotesListTransform.fromDivisionMarkdownNodeAndFootnoteTransformMap(divisionMarkdownNode, footnoteTransformMap, context);
  //
  //     if (footnotesListDivisionTransform !== null) {
  //       footnotesListDivisionTransform.replaceFootnotesDirectiveDivisionTransform(footnotesDirectiveDivisionTransform, divisionMarkdownNode, context);
  //     }
  //
  //     renumberFootnoteLinkMarkdownNodes(divisionMarkdownNode, footnoteTransformMap, context);
  //   }
  // }
  //
  // prepareFootnotes(footnoteTransformMap, context) {
  //   const footnoteDivisionTransforms = this.removeDivisionMarkdownNodes(FootnoteDivisionTransform, context);
  //
  //   footnoteDivisionTransforms.forEach((footnoteDivisionTransform) => {
  //     const footnoteTransform = FootnoteTransform.fromFootnoteDivisionTransform(footnoteDivisionTransform),
  //           identifier = footnoteDivisionTransform.identifier(context);
  //
  //     footnoteTransformMap[identifier] = footnoteTransform;
  //   });
  // }

  findDivisionTransform(DivisionTransform, context) {
    let subDivisionTransform = null;

    const subDivisionMarkdownNodes = this.findDivisionMarkdownNodes();

    subDivisionMarkdownNodes.some((subDivisionMarkdownNode) => {
      subDivisionTransform = DivisionTransform.fromDivisionMarkdownNode(subDivisionMarkdownNode, context);

      if (subDivisionTransform !== null) {
        return true;
      }
    });

    return subDivisionTransform;
  }

  findDivisionTransforms(DivisionTransform, context) {
    const subDivisionMarkdownNodes = this.findDivisionMarkdownNodes(),
          subDivisionTransforms = subDivisionMarkdownNodes.reduce((subDivisionTransforms, subDivisionMarkdownNode) => {
            const subDivisionTransform = DivisionTransform.fromDivisionMarkdownNode(subDivisionMarkdownNode, context);

            if (subDivisionTransform !== null) {
              subDivisionTransforms.push(subDivisionTransform);
            }

            return subDivisionTransforms;
          }, []);

    return subDivisionTransforms;
  }

  findDivisionMarkdownNodes() {
    const node = this,  ///
          subDivisionMarkdownNodes = subDivisionMarkdownNodesFromNode(node);

    return subDivisionMarkdownNodes;
  }

  findPageNumberDirectiveMarkdownNode() {
    let pageNumberDirectiveMarkdownNode = null;

    const subDivisionMarkdownNodes = this.findDivisionMarkdownNodes();

    subDivisionMarkdownNodes.some((subDivisionMarkdownNode) => {
      const node = subDivisionMarkdownNode; ///

      pageNumberDirectiveMarkdownNode = pageNumberDirectiveMarkdownNodeFromNode(node);

      if (pageNumberDirectiveMarkdownNode !== null) {
        return true;
      }
    });

    return pageNumberDirectiveMarkdownNode;
  }

  removeDivisionMarkdownNode(DivisionTransform, context) {
    const divisionMarkdownNode = this,  //
          subDivisionTransform = this.findDivisionTransform(DivisionTransform, context);

    if (subDivisionTransform !== null) {
      subDivisionTransform.removeFromDivisionMarkdownNode(divisionMarkdownNode, context);
    }

    return subDivisionTransform;
  }

  removeDivisionMarkdownNodes(DivisionTransform, context) {
    const divisionMarkdownNode = this,  //
          subDivisionTransforms = this.findDivisionTransforms(DivisionTransform, context);

    subDivisionTransforms.forEach((subDivisionTransform) => {
      subDivisionTransform.removeFromDivisionMarkdownNode(divisionMarkdownNode, context);
    });

    return subDivisionTransforms;
  }

  createFootnotesListTransform(footnoteTransformMap, context) {
    const footnoteDivisionTransforms = this.findDivisionTransforms(FootnoteDivisionTransform, context);

    footnoteDivisionTransforms.forEach((footnoteDivisionTransform) => {
      const footnoteTransform = FootnoteTransform.fromFootnoteDivisionTransform(footnoteDivisionTransform),
            identifier = footnoteDivisionTransform.identifier(context);

      footnoteTransformMap[identifier] = footnoteTransform;
    });

    const divisionMarkdownNode = this,  ///
          footnotesListDivisionTransform = FootnotesListTransform.fromDivisionMarkdownNodeAndFootnoteTransformMap(divisionMarkdownNode, footnoteTransformMap, context);

    return footnotesListDivisionTransform;
  }

  clone() { return super.clone(this.divisionClassName); }

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(DivisionMarkdownNode, ruleName, childNodes, opacity); }
}

function paginateDivisionMarkdownNode(paginatedChildNodes, subDivisionTransforms, divisionClassName, markdownNodes, pageNumber, context) {
  let markdownNode;

  const indexAnchorTransform = IndexAnchorTransform.fromPageNumber(pageNumber, context),
        divisionMarkdownNode = DivisionMarkdownNode.fromPaginatedChildNodesDivisionTransformsAndDivisionClassName(paginatedChildNodes, subDivisionTransforms, divisionClassName, context),
        anchorMarkdownNode = indexAnchorTransform.getAnchorMarkdownNode();

  divisionMarkdownNode.setPageNumber(pageNumber);

  markdownNode = anchorMarkdownNode;  ///

  markdownNodes.push(markdownNode);

  markdownNode = divisionMarkdownNode; ///

  markdownNodes.push(markdownNode);
}