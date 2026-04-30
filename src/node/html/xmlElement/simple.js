"use strict";

import XmLElementHTMLNode from "../../../node/html/xmlElement";

import { EMPTY_STRING } from "../../../constants";

export default class SimpleXMLElementHTMLNode extends XmLElementHTMLNode {
  asHTML(indent, context) {
    let html;

    const jsx = this.isJSX(context);

    if (jsx) {
      html = EMPTY_STRING
    } else {
      indent = this.adjustIndent(indent);

      const selfClosingTag = this.selfClosingTag(context);

      html = (indent === null) ?
               `${selfClosingTag}` :
                 `${indent}${selfClosingTag}
`;
    }

    return html;
  }

  static fromNothing() { return XmLElementHTMLNode.fromNothing(SimpleXMLElementHTMLNode); }

  static fromOuterNode(outerNode) { return XmLElementHTMLNode.fromOuterNode(SimpleXMLElementHTMLNode, outerNode); }
}
