"use strict";

import { arrayUtilities } from "necessary";

import MarkdownNode from "../../node/markdown";

import { replaceTokens } from "../../utilities/replace";

const { fourth } = arrayUtilities;

export default class ImportMarkdownNode extends MarkdownNode {
  // resolveImports(parentNode, context) {
  //   let html = null;
  //
  //   const { importer = null } = context;
  //
  //   if (importer !== null) {
  //     const { tokens } = context,
  //           filePath = this.filePath(context);
  //
  //     importer(filePath, context);
  //
  //     const { node: importedNode = null,
  //             tokens: importedTokens = null,
  //             className: divisionClassName = null } = context;
  //
  //     Object.assign(context, {
  //       tokens
  //     });
  //
  //     delete context.node;
  //     delete context.className;
  //
  //     if (importedNode !== null) {
  //       const replacedChildNode = this, ///
  //             replacementTokens = importedTokens, ///
  //             replacementChildNode = importedNode;  ///
  //
  //       parentNode.replaceChildNode(replacedChildNode, replacementChildNode);
  //
  //       replaceTokens(replacedChildNode, replacementTokens, context);
  //
  //       parentNode = this;  ///
  //
  //       const divisionMarkdownNode = importedNode;  ///
  //
  //       divisionMarkdownNode.setDivisionClassName(divisionClassName);
  //
  //       divisionMarkdownNode.resolveImports(parentNode, context);
  //     }
  //   }
  //
  //   return html;
  // }

  filePath(context) {
    const childNodes = this.getChildNodes(),
          fourthChildNode = fourth(childNodes),
          pathTerminalNode  = fourthChildNode, ///
          pathTerminalNodeContent = pathTerminalNode.getContent(),
          filePath = pathTerminalNodeContent; ///

    return filePath;
  }

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(ImportMarkdownNode, ruleName, childNodes, opacity); }
}
