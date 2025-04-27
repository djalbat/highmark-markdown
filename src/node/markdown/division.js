"use strict";

import MarkdownNode from "../../node/markdown";
import IgnoreDirectiveMarkdownTransform from "../../transform/markdown/directive/ignore";

import { ignoreDirectiveMarkdownNodeFromNode, subDivisionMarkdownNodesFromNode, includeDirectiveMarkdownNodesFromNode } from "../../utilities/markdown";

export default class DivisionMarkdownNode extends MarkdownNode {
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
  //
  // findDivisionTransform(DivisionTransform, context) {
  //   let subDivisionTransform = null;
  //
  //   const subDivisionMarkdownNodes = this.findDivisionMarkdownNodes();
  //
  //   subDivisionMarkdownNodes.some((subDivisionMarkdownNode) => {
  //     subDivisionTransform = DivisionTransform.fromDivisionMarkdownNode(subDivisionMarkdownNode, context);
  //
  //     if (subDivisionTransform !== null) {
  //       return true;
  //     }
  //   });
  //
  //   return subDivisionTransform;
  // }
  //
  // findDivisionTransforms(DivisionTransform, context) {
  //   const subDivisionMarkdownNodes = this.findDivisionMarkdownNodes(),
  //         subDivisionTransforms = subDivisionMarkdownNodes.reduce((subDivisionTransforms, subDivisionMarkdownNode) => {
  //           const subDivisionTransform = DivisionTransform.fromDivisionMarkdownNode(subDivisionMarkdownNode, context);
  //
  //           if (subDivisionTransform !== null) {
  //             subDivisionTransforms.push(subDivisionTransform);
  //           }
  //
  //           return subDivisionTransforms;
  //         }, []);
  //
  //   return subDivisionTransforms;
  // }
  //
  // findPageNumberDirectiveMarkdownNode() {
  //   let pageNumberDirectiveMarkdownNode = null;
  //
  //   const subDivisionMarkdownNodes = this.findDivisionMarkdownNodes();
  //
  //   subDivisionMarkdownNodes.some((subDivisionMarkdownNode) => {
  //     const node = subDivisionMarkdownNode; ///
  //
  //     pageNumberDirectiveMarkdownNode = pageNumberDirectiveMarkdownNodeFromNode(node);
  //
  //     if (pageNumberDirectiveMarkdownNode !== null) {
  //       return true;
  //     }
  //   });
  //
  //   return pageNumberDirectiveMarkdownNode;
  // }
  //
  // removeSubDivisionMarkdownNode(subDivisionMarkdownNode) {
  //   const childNode = subDivisionMarkdownNode;  ///
  //
  //   this.removeChildNode(childNode);
  // }
  //
  // createFootnotesListTransform(footnoteTransformMap, context) {
  //   const footnoteDivisionTransforms = this.findDivisionTransforms(FootnoteDivisionTransform, context);
  //
  //   footnoteDivisionTransforms.forEach((footnoteDivisionTransform) => {
  //     const footnoteTransform = FootnoteTransform.fromFootnoteDivisionTransform(footnoteDivisionTransform),
  //           identifier = footnoteDivisionTransform.identifier(context);
  //
  //     footnoteTransformMap[identifier] = footnoteTransform;
  //   });
  //
  //   const divisionMarkdownNode = this,  ///
  //         footnotesListDivisionTransform = FootnotesListTransform.fromDivisionMarkdownNodeAndFootnoteTransformMap(divisionMarkdownNode, footnoteTransformMap, context);
  //
  //   return footnotesListDivisionTransform;
  // }

  constructor(ruleName, parentNode, childNodes, opacity, precedence, divisionClassName) {
    super(ruleName, parentNode, childNodes, opacity, precedence);

    this.divisionClassName = divisionClassName;
  }

  getDivisionClassName() {
    return this.divisionClassName;
  }

  setDivisionClassName(divisionClassName) {
    this.divisionClassName = divisionClassName;
  }

  isIgnored() {
    const node = this,  ///
          ignoreDirectiveMarkdownNode = ignoreDirectiveMarkdownNodeFromNode(node),
          ignored = (ignoreDirectiveMarkdownNode !== null);

    return ignored;
  }

  className(context) {
    const className = this.divisionClassName; ///

    return className;
  }

  resolveIgnored(topmostMarkdownNode, context) {
    const ignored = this.isIgnored();

    if (!ignored) {
      return;
    }

    const divisionMarkdownNode = this,  ///
          ignoreDirectiveMarkdownTransform = IgnoreDirectiveMarkdownTransform.fromDivisionMarkdownNode(divisionMarkdownNode);

    ignoreDirectiveMarkdownTransform.removeFromTopmostMarkdownNode(topmostMarkdownNode, context);
  }

  resolveIncludes(topmostMarkdownNode, context) {
    const node = this,  ///
          includeDirectiveMarkdownNodes = includeDirectiveMarkdownNodesFromNode(node),
          includeDirectiveMarkdownTransforms = includeDirectiveMarkdownNodes.reduce((includeDirectiveMarkdownTransforms, includeDirectiveMarkdownNode) => {
            const includeDirectiveMarkdownTransform = includeDirectiveMarkdownNode.resolveInclude(context);

            if (includeDirectiveMarkdownTransform !== null) {
              includeDirectiveMarkdownTransforms.push(includeDirectiveMarkdownTransform);
            }

            return includeDirectiveMarkdownTransforms;
          }, []);

    includeDirectiveMarkdownTransforms.forEach((includeDirectiveMarkdownTransform) => {
      const divisionMarkdownNode = includeDirectiveMarkdownTransform.appendToTopmostMarkdownNode(topmostMarkdownNode, context);

      divisionMarkdownNode.resolveIncludes(topmostMarkdownNode, context);
    });
  }

  resolveEmbeddings(context) {
    const divisionMarkdownNode = this;  ///

    this.forEachSubDivisionMarkdownNode((subDivisionMarkdownNode) => {
      const embeddingsResolved = subDivisionMarkdownNode.resolveEmbeddings(divisionMarkdownNode, context);

      if (embeddingsResolved) {
        const subDivisionTransform = SubDivisionTransform.fromSubDivisionMarkdownNode(subDivisionMarkdownNode)

        subDivisionTransform.removeFromDivisionMarkdownNode(divisionMarkdownNode, context);
      }
    });
  }

  getSubDivisionMarkdownNodes() {
    const node = this,
          subDivisionMarkdownNodes = subDivisionMarkdownNodesFromNode(node);

    return subDivisionMarkdownNodes;
  }

  forEachSubDivisionMarkdownNode(callback) {
    const subDivisionMarkdownNodes = this.getSubDivisionMarkdownNodes();

    subDivisionMarkdownNodes.forEach(callback);
  }

  clone() { return super.clone(this.divisionClassName); }

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) {
    const divisionClassName = null,
          divisionMarkdownNode = MarkdownNode.fromRuleNameChildNodesAndOpacity(DivisionMarkdownNode, ruleName, childNodes, opacity, divisionClassName);

    return divisionMarkdownNode;
  }
}

// function paginateDivisionMarkdownNode(paginatedChildNodes, subDivisionTransforms, divisionClassName, markdownNodes, pageNumber, context) {
//   let markdownNode;
//
//   const indexAnchorTransform = IndexAnchorTransform.fromPageNumber(pageNumber, context),
//         divisionMarkdownNode = DivisionMarkdownNode.fromPaginatedChildNodesDivisionTransformsAndDivisionClassName(paginatedChildNodes, subDivisionTransforms, divisionClassName, context),
//         anchorMarkdownNode = indexAnchorTransform.getAnchorMarkdownNode();
//
//   divisionMarkdownNode.setPageNumber(pageNumber);
//
//   markdownNode = anchorMarkdownNode;  ///
//
//   markdownNodes.push(markdownNode);
//
//   markdownNode = divisionMarkdownNode; ///
//
//   markdownNodes.push(markdownNode);
// }