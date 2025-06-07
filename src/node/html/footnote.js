"use strict";

import HTMLNode from "../../node/html";
import {EMPTY_STRING} from "../../constants";

export default class FootnoteHTMLNode extends HTMLNode {
  getParagraphHTMLNode() {
    const paragraphHTMLNode = this.fromSecondChildNode((secondChildNode) => {
      const paragraphHTMLNode = secondChildNode;  ///

      return paragraphHTMLNode;
    });

    return paragraphHTMLNode;
  }

  matchIdentifier(identifier, context) {
    const identifierA = identifier; ///

    identifier = this.identifier(context);

    const identifierB = identifier, ///
          identifierMatches = (identifierA === identifierB);

    return identifierMatches;
  }

  identifier(context) {
    const markdownNode = this.getMarkdownNode(),
          identifier = markdownNode.identifier(context);

    return identifier;
  }

  mount(parentDOMElement, siblingDOMElement, context) {
    return siblingDOMElement;
  }

  unmount(parentDOMElement) {
    ///
  }

  asHTML(indent, context) {
    const html = EMPTY_STRING;

    return html;
  }

  asPlainText(context) {
    const plainText = EMPTY_STRING;

    return plainText;
  }

  static fromNothing() { return HTMLNode.fromNothing(FootnoteHTMLNode); }

  static fromOuterNode(outerNode) { return HTMLNode.fromOuterNode(FootnoteHTMLNode, outerNode); }
}
