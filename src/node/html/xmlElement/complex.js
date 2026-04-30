"use strict";

import XMLElementHTMLNode from "../../../node/html/xmlElement";

export default class ComplexXMLElementHTMLNode extends XMLElementHTMLNode {
  asHTML(indent, context) {
    let html;

    indent = this.adjustIndent(indent);

    const childNodesHTML = this.childNodesAsHTML(indent, context),
          startingTag = this.startingTag(context),
          closingTag = this.closingTag(context);

      html = (indent === null) ?
              `${startingTag}${childNodesHTML}${closingTag}` :
                `${indent}${startingTag}
${childNodesHTML}${indent}${closingTag}
`;

    return html;
  }

  static fromNothing() { return XMLElementHTMLNode.fromNothing(ComplexXMLElementHTMLNode); }

  static fromOuterNode(outerNode) { return XMLElementHTMLNode.fromOuterNode(ComplexXMLElementHTMLNode, outerNode); }
}
