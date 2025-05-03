"use strict";

import MarkdownNode from "../../node/markdown";
import SubDivisionMarkdownTransform from "../../transform/markdown/subDivision";
import IgnoreDirectiveMarkdownTransform from "../../transform/markdown/directive/ignore";

import { ignoreDirectiveMarkdownNodeFromNode, subDivisionMarkdownNodesFromNode, includeDirectiveMarkdownNodesFromNode } from "../../utilities/markdown";

export default class DivisionMarkdownNode extends MarkdownNode {
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

    ignoreDirectiveMarkdownTransform.remove(context);
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
        const subDivisionMarkdownTransform = SubDivisionMarkdownTransform.fromSubDivisionMarkdownNode(subDivisionMarkdownNode)

        subDivisionMarkdownTransform.remove(context);
      }
    });
  }

  getSubDivisionMarkdownNodes() {
    const node = this,
          subDivisionMarkdownNodes = subDivisionMarkdownNodesFromNode(node);

    return subDivisionMarkdownNodes;
  }

  removeSubDivisionMarkdownNode(subDivisionMarkdownNode) {
    const node = this,  ///
          childNode = subDivisionMarkdownNode;  ///

    node.removeChildNode(childNode);
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
