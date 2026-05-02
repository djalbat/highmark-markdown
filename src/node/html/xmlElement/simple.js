"use strict";

import XmLElementHTMLNode from "../../../node/html/xmlElement";

export default class SimpleXMLElementHTMLNode extends XmLElementHTMLNode {
  asHTML(indent, context) {
    let html;

    indent = this.adjustIndent(indent);

    const selfClosingTag = this.selfClosingTag(context);

    html = (indent === null) ?
             `${selfClosingTag}` :
               `${indent}${selfClosingTag}
`;

    return html;
  }

  static fromNothing() { return XmLElementHTMLNode.fromNothing(SimpleXMLElementHTMLNode); }

  static fromOuterNode(outerNode) { return XmLElementHTMLNode.fromOuterNode(SimpleXMLElementHTMLNode, outerNode); }
}
