"use strict";

import TextHTMLNode from "../../../node/html/text";

export default class XMLTextHTMLNode extends TextHTMLNode {
  static tagName = null;

  static className = null;

  text(context) {
    let text = super.text(context);

    text = `${text}
`;

    return text;
  }

  static fromNothing() { return TextHTMLNode.fromNothing(XMLTextHTMLNode); }

  static fromOuterNode(outerNode) { return TextHTMLNode.fromOuterNode(XMLTextHTMLNode, outerNode); }
}
