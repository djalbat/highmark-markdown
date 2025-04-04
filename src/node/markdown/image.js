"use strict";

import MarkdownNode from "../../node/markdown";

import { ALT_ATTRIBUTE_NAME, SRC_ATTRIBUTE_NAME} from "../../attributeNames";

export default class ImageMarkdownNode extends MarkdownNode {
  alt(context) {
    const alt = this.fromSecondChildNode((secondChildNode) => {
      const inlineTextMarkdownNode = secondChildNode,  ///
            inlineTextMarkdownNodeContent = inlineTextMarkdownNode.content(context),
            alt = inlineTextMarkdownNodeContent; ///

      return alt;
    });

    return alt;
  }

  src(context) {
    const { pathToURL = null } = context,
          src = this.fromSecondLastChildNode((secondLastChildNode) => {
            const pathMarkdownNode = secondLastChildNode,  ///
                  pathMarkdownNodeContent = pathMarkdownNode.getContent(),
                  path = pathMarkdownNodeContent, ///
                  src = (pathToURL === null) ?
                           path :  ///
                             pathToURL(path);

            return src;
          });

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
