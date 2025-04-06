"use strict";

import { arrayUtilities } from "necessary";

import MarkdownNode from "../../node/markdown";

import { EMPTY_STRING } from "../../constants";

const { second } = arrayUtilities;

export default class FootnoteLinkMarkdownNode extends MarkdownNode {
  constructor(ruleName, childNodes, opacity, precedence, domElement, number) {
    super(ruleName, childNodes, opacity, precedence, domElement);

    this.number = number;
  }

  getNumber() {
    return this.number;
  }

  setNumber(number) {
    this.number = number;
  }

  content(context) {
    const content = (this.number !== null) ?
                      this.number :
                        EMPTY_STRING;

    return content;
  }

  identifier(context) {
    const identifier = this.fromFirstChildNode((firstChildNode) => {
      const linkTerminalNode = firstChildNode,  ///
            identifier = identifierFromLinkTerminalNode(linkTerminalNode);

      return identifier;
    });

    return identifier;
  }

  clear() {
    if (this.domElement === null) {
      return;
    }

    const { lastChild = null } = this.domElement;

    if (lastChild !== null) {
      const domElement = lastChild,  ///
            parentDOMElement = this.domElement;

      parentDOMElement.removeChild(domElement);
    }
  }

  update(context) {
    if (this.domElement === null) {
      return;
    }

    const content = this.content(context);

    if (content !== EMPTY_STRING) {
      const textNode  = document.createTextNode(content),
            domElement = textNode,  ///
            parentDOMElement = this.domElement; ///

      parentDOMElement.appendChild(domElement);
    }
  }

  renumber(number, context) {
    this.setNumber(number);

    this.clear();

    this.update(context);
  }

  clone() { return super.clone(this.number); }

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) {
    const number = null,
          footnoteLinkMarkdownNode = MarkdownNode.fromRuleNameChildNodesAndOpacity(FootnoteLinkMarkdownNode, ruleName, childNodes, opacity, number);

    return footnoteLinkMarkdownNode;
  }
}

function identifierFromLinkTerminalNode(linkTerminalNode) {
  const content = linkTerminalNode.getContent(),
        matches = content.match(/\[\^([^\]]+)]/),
        secondMatch = second(matches),
        identifier = secondMatch; ///

  return identifier;
}