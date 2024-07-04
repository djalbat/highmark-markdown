"use strict";

import { arrayUtilities } from "necessary";

import MarkdownNode from "../../node/markdown";

import { ALT_ATTRIBUTE_NAME, SRC_ATTRIBUTE_NAME} from "../../attributeNames";

const { second, secondLast } = arrayUtilities;

export default class ImageMarkdownNode extends MarkdownNode {
  alt(context) {
    const childNodes = this.getChildNodes(),
          secondChildNode = second(childNodes),
          inlineTextMarkdownNode = secondChildNode,  ///
          inlineTextMarkdownNodeContent = inlineTextMarkdownNode.content(context),
          alt = inlineTextMarkdownNodeContent; ///

    return alt;
  }

  src(context) {
    const { pathToURL = null } = context,
          childNodes = this.getChildNodes(),
          secondLastChildNode = secondLast(childNodes),
          pathTerminalNode = secondLastChildNode,  ///
          pathTerminalNodeContent = pathTerminalNode.getContent(),
          path = pathTerminalNodeContent, ///
          src = (pathToURL === null) ?
                  path : ///
                    pathToURL(path); ///

    return src;
  }

  asHTML(indent, context) {
    indent = this.adjustIndent(indent);

    const selfClosingTag = this.selfClosingTag(context),
          html = (indent === null) ?
                   selfClosingTag :  ///
                     `${indent}${selfClosingTag}
`;

    return html;
  }

  createDOMElement(context) {
    const tagName = this.tagName(context),
          domElement = document.createElement(tagName),
          attributeNames = this.attributeNames(context),
          attributeValues = this.attributeValues(context);

    attributeNames.forEach((attributeName, index) => {
      const attributeValue = attributeValues[index];

      domElement.setAttribute(attributeName, attributeValue);
    });

    return domElement;
  }

  selfClosingTag(context) {
    const tagName = this.tagName(context),
          attributeNames = this.attributeNames(context),
          attributeValues = this.attributeValues(context),
          attributesHTML = attributeNames.reduce((attributesHML, attributeName, index) => {
            const attributeValue = attributeValues[index];

            attributesHML = (attributesHML === null) ?
                             `${attributeName}="${attributeValue}"` :
                               `${attributesHML} ${attributeName}="${attributeValue}"`;

            return attributesHML;

          }, null),
          selfClosingTag = `<${tagName} ${attributesHTML}/>`;

    return selfClosingTag;
  }

  attributeNames(context) {
    const attributeNames = [
      ALT_ATTRIBUTE_NAME,
      SRC_ATTRIBUTE_NAME
    ];

    return attributeNames;
  }

  attributeValues(context) {
    const alt = this.alt(context),
          src = this.src(context),
          attributeValues = [
            alt,
            src
          ];

    return attributeValues;
  }

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(ImageMarkdownNode, ruleName, childNodes, opacity); }
}
