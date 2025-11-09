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

export function markdownNodeFromTokens(tokens) {
  const parser = markdownParser, ///
        startRule = parser.getStartRule(),
        node = parser.parse(tokens, startRule),
        markdownNode = node;  ///

  return markdownNode;
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

export function markdownStyleNodeFromTokens(tokens) {
  const parser = markdownStyleParser, ///
        startRule = parser.getStartRule(),
        node = parser.parse(tokens, startRule),
        markdownStyleNode = node; ///

  return markdownStyleNode;
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

export function topmostHTMLNodeFromMarkdownNode(markdownNode, ClassFromOuterNode = HTMLClassFromMarkdownNode) {
  const node = markdownNode,  ///
        queries = markdownQueries, ///
        nodes = nodesFromNodeAndQueries(node, queries),
        outerNodes = nodes, ///
        topmostNode = topmostNodeFromOuterNodes(ClassFromOuterNode, outerNodes),
        topmostHTMLNode = topmostNode;  ///

  return topmostHTMLNode;
}

export function htmlFromMarkdownOptionsAndImporter(markdown, options, importer) {
  let html = null;

  const tokens = tokensFromMarkdown(markdown),
        markdownNode = markdownNodeFromTokens(tokens);

  if (markdownNode !== null) {
    const topmostMarkdownNode = markdownNode, ///
          context = {
            tokens,
            importer,
            ...options
          };

    topmostMarkdownNode.resolve(context);

    const topmostHTMLNode = topmostHTMLNodeFromMarkdownNode(markdownNode);

    topmostHTMLNode.resolve(context);

    const divisionHTMLNOde = topmostHTMLNode.getDivisionHTMLNode();

    html = divisionHTMLNOde.asHTML(context);
  }

  return html;
}

export function topmostCSSNodeFromMarkdownStyleNode(markdownStyleNode, ClassFromOuterNode = CSSClassFromMarkdownStyleNode) {
  const node = markdownStyleNode,  ///
        queries = markdownStyleQueries, ///
        nodes = nodesFromNodeAndQueries(node, queries),
        outerNodes = nodes, ///
        topmostNode = topmostNodeFromOuterNodes(ClassFromOuterNode, outerNodes),
        topmostCSSNode = topmostNode;  ///

  return topmostCSSNode;
}

export function cssFromMarkdownStyleAndCSSSelectorsString(markdownStyle, cssSelectorsString) {
  let css = EMPTY_STRING;

  const target = WEB_TARGET,
        tokens = tokensFromMarkdownStyle(markdownStyle),
        markdownStyleNode = markdownStyleNodeFromTokens(tokens);

  if (markdownStyleNode !== null) {
    const topmostCSSNode = topmostCSSNodeFromMarkdownStyleNode(markdownStyleNode),
          context = {
            target,
            tokens
          };

    topmostCSSNode.resolve(context);

    css = topmostCSSNode.asCSS(context);
  }

  css = `${cssSelectorsString} {
${css}
}`;

  return css;
}

export default {
  tokensFromMarkdown,
  markdownNodeFromTokens,
  tokensFromMarkdownStyle,
  HTMLClassFromMarkdownNode,
  markdownStyleNodeFromTokens,
  CSSClassFromMarkdownStyleNode,
  topmostHTMLNodeFromMarkdownNode,
  htmlFromMarkdownOptionsAndImporter,
  topmostCSSNodeFromMarkdownStyleNode,
  cssFromMarkdownStyleAndCSSSelectorsString
};
