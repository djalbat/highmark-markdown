"use strict";

import { nodeUtilities } from "occam-dom";

import CSSNode from "../node/css";
import HTMLNode from "../node/html";
import cssNodeMap from "../map/node/css";
import htmlNodeMap from "../map/node/html";
import MarkdownLexer from "../markdown/lexer";
import MarkdownParser from "../markdown/parser";
import TopmostCSSNode from "../node/css/topmost";
import markdownQueries from "../queries/markdown";
import TopmostHTMLNode from "../node/html/topmost";
import MarkdownStyleLexer from "../markdownStyle/lexer";
import MarkdownStyleParser from "../markdownStyle/parser";
import markdownStyleQueries from "../queries/markdownStyle";

import { WEB_TARGET } from "../targets";
import { EMPTY_STRING } from "../constants";
import { nodesFromNodeAndQueries } from "../utilities/query";

const { topmostNodeFromOuterNodes } = nodeUtilities;

const markdownLexer = MarkdownLexer.fromNothing(),
      markdownParser = MarkdownParser.fromNothing(),
      markdownStyleLexer = MarkdownStyleLexer.fromNothing(),
      markdownStyleParser = MarkdownStyleParser.fromNothing();

export function tokensFromMarkdown(markdown) {
  const lexer = markdownLexer, ///
        content = markdown,  ///
        tokens = lexer.tokenise(content);

  return tokens;
}

export function tokensFromMarkdownStyle(markdownStyle) {
  const lexer = markdownStyleLexer, ///
        content = markdownStyle,  ///
        tokens = lexer.tokenise(content);

  return tokens;
}

export function HTMLClassFromMarkdownNode(markdownNode) {
  let Class;

  if (markdownNode === null) {
    Class = TopmostHTMLNode;  ///
  } else {
    const nonTerminalNode = markdownNode,  ///
          ruleName = nonTerminalNode.getRuleName();

    Class = htmlNodeMap[ruleName] || HTMLNode;
  }

  return Class;
}

export function CSSClassFromMarkdownStyleNode(markdownStyleNode) {
  let Class;

  if (markdownStyleNode === null) {
    Class = TopmostCSSNode;  ///
  } else {
    const nonTerminalNode = markdownStyleNode,  ///
          ruleName = nonTerminalNode.getRuleName();

    Class = cssNodeMap[ruleName] || CSSNode;
  }

  return Class;
}

export function documentMarkdownNodeFromTokens(tokens) {
  const parser = markdownParser, ///
        startRule = parser.getStartRule(),
        node = parser.parse(tokens, startRule),
        documentMarkdownNode = node;  ///

  return documentMarkdownNode;
}

export function htmlFromMarkdownOptionsAndImporter(markdown, options, importer) {
  let html = EMPTY_STRING;

  const tokens = tokensFromMarkdown(markdown),
        documentMarkdownNode = documentMarkdownNodeFromTokens(tokens);

  if (documentMarkdownNode !== null) {
    const context = {
            tokens,
            importer,
            ...options
          };

    documentMarkdownNode.resolve(context);

    const topmostHTMLNode = topmostHTMLNodeFromDocumentMarkdownNode(documentMarkdownNode);

    if (topmostHTMLNode !== null) {
      topmostHTMLNode.resolve(context);

      const divisionHTMLNOdes = topmostHTMLNode.getDivisionHTMLNodes();

      divisionHTMLNOdes.forEach((divisionHTMLNOde) => {
        const divisionHTMLNOdeHTML = divisionHTMLNOde.asHTML(context);

        html = `${html}${divisionHTMLNOdeHTML}`;
      });
    }
  }

  return html;
}

export function documentMarkdownStyleNodeFromTokens(tokens) {
  const parser = markdownStyleParser, ///
        startRule = parser.getStartRule(),
        node = parser.parse(tokens, startRule),
        documentMarkdownStyleNode = node; ///

  return documentMarkdownStyleNode;
}

export function topmostHTMLNodeFromDocumentMarkdownNode(documentMarkdownNode, ClassFromOuterNode = HTMLClassFromMarkdownNode) {
  let topmostHTMLNode = null;

  if (documentMarkdownNode !== null) {
    const node = documentMarkdownNode,  ///
          queries = markdownQueries, ///
          nodes = nodesFromNodeAndQueries(node, queries),
          outerNodes = nodes, ///
          topmostNode = topmostNodeFromOuterNodes(ClassFromOuterNode, outerNodes);

    topmostHTMLNode = topmostNode;  ///
  }

  return topmostHTMLNode;
}

export function cssFromMarkdownStyleAndCSSSelectorsString(markdownStyle, cssSelectorsString) {
  let css = EMPTY_STRING;

  const target = WEB_TARGET,
        tokens = tokensFromMarkdownStyle(markdownStyle),
        documentMarkdownStyleNode = documentMarkdownStyleNodeFromTokens(tokens);

  if (documentMarkdownStyleNode !== null) {
    const topmostCSSNode = topmostCSSNodeFromDocumentMarkdownStyleNode(documentMarkdownStyleNode),
          context = {
            target,
            tokens,
            cssSelectorsString
          };

    topmostCSSNode.resolve(context);

    css = topmostCSSNode.asCSS(context);
  }

  return css;
}

export function topmostCSSNodeFromDocumentMarkdownStyleNode(documentMarkdownStyleNode, ClassFromOuterNode = CSSClassFromMarkdownStyleNode) {
  const node = documentMarkdownStyleNode,  ///
        queries = markdownStyleQueries, ///
        nodes = nodesFromNodeAndQueries(node, queries),
        outerNodes = nodes, ///
        topmostNode = topmostNodeFromOuterNodes(ClassFromOuterNode, outerNodes),
        topmostCSSNode = topmostNode;  ///

  return topmostCSSNode;
}

export default {
  tokensFromMarkdown,
  tokensFromMarkdownStyle,
  HTMLClassFromMarkdownNode,
  CSSClassFromMarkdownStyleNode,
  documentMarkdownNodeFromTokens,
  htmlFromMarkdownOptionsAndImporter,
  documentMarkdownStyleNodeFromTokens,
  topmostHTMLNodeFromDocumentMarkdownNode,
  cssFromMarkdownStyleAndCSSSelectorsString,
  topmostCSSNodeFromDocumentMarkdownStyleNode
};
