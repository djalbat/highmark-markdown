"use strict";

import { nodeUtilities } from "occam-dom";

import CSSNode from "../node/css";
import HTMLNode from "../node/html";
import cssNodeMap from "../map/node/css";
import htmlNodeMap from "../map/node/html";
import MarkdownLexer from "../markdown/lexer";
import MarkdownParser from "../markdown/parser";
import TopmostCSSNode from "../node/css/topmost";
import TopmostHTMLNode from "../node/html/topmost";
import markdownQueries from "../queries/markdown";
import MarkdownStyleLexer from "../markdownStyle/lexer";
import MarkdownStyleParser from "../markdownStyle/parser";
import markdownStyleQueries from "../queries/markdownStyle";

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

export function CSSClassFromOuterNode(outerNode) {
  let Class;

  if (outerNode === null) {
    Class = TopmostCSSNode;  ///
  } else {
    const nonTerminalNode = outerNode,  ///
          ruleName = nonTerminalNode.getRuleName();

    Class = cssNodeMap[ruleName] || CSSNode;
  }

  return Class;
}

export function HTMLClassFromOuterNode(outerNode) {
  let Class;

  if (outerNode === null) {
    Class = TopmostHTMLNode;  ///
  } else {
    const nonTerminalNode = outerNode,  ///
          ruleName = nonTerminalNode.getRuleName();

    Class = htmlNodeMap[ruleName] || HTMLNode;
  }

  return Class;
}

export function markdownNodeFromTokens(tokens) {
  const parser = markdownParser, ///
        startRule = parser.getStartRule(),
        node = parser.parse(tokens, startRule),
        markdownNode = node;  ///

  return node;
}

export function tokensFromMarkdownStyle(markdownStyle) {
  const lexer = markdownStyleLexer, ///
        content = markdownStyle,  ///
        tokens = lexer.tokenise(content);

  return tokens;
}

export function markdownStyleNodeFromTokens(tokens) {
  const parser = markdownStyleParser, ///
        startRule = parser.getStartRule(),
        node = parser.parse(tokens, startRule),
        markdownStyleNode = node; ///

  return markdownStyleNode;
}

export function topmostHTMLNodeFromMarkdownNode(markdownNode) {
  const node = markdownNode,  ///
        queries = markdownQueries, ///
        nodes = nodesFromNodeAndQueries(node, queries),
        outerNodes = nodes, ///
        topmostNode = topmostNodeFromOuterNodes(HTMLClassFromOuterNode, outerNodes),
        topmostHTMLNode = topmostNode;  ///

  return topmostHTMLNode;
}

export function topmostHTMLNodeFromMarkdownNodes(markdownNodes) {
  const nodes = [],
        queries = markdownQueries;  ///

  markdownNodes.forEach((markdownNode) => {
    const node = markdownNode;  ///

    nodesFromNodeAndQueries(node, queries, nodes);
  });

  const outerNodes = nodes, ///
        topmostNode = topmostNodeFromOuterNodes(HTMLClassFromOuterNode, outerNodes),
        topmostHTMLNode = topmostNode;  ///

  return topmostHTMLNode;
}

export function topmostCSSNodeFromMarkdownStyleNode(markdownStyleNode) {
  const node = markdownStyleNode,  ///
        queries = markdownStyleQueries, ///
        nodes = nodesFromNodeAndQueries(node, queries),
        outerNodes = nodes, ///
        topmostNode = topmostNodeFromOuterNodes(CSSClassFromOuterNode, outerNodes),
        topmostCSSNode = topmostNode;  ///

  return topmostCSSNode;
}

export function topmostCSSNodeFromMarkdownStyleNodes(markdownStyleNodes) {
  const nodes = [],
        queries = markdownStyleQueries;  ///

  markdownStyleNodes.forEach((markdownStyleNode) => {
    const node = markdownStyleNode;  ///

    nodesFromNodeAndQueries(node, queries, nodes);
  });

  const outerNodes = nodes, ///
        topmostNode = topmostNodeFromOuterNodes(CSSClassFromOuterNode, outerNodes),
        topmostCSSNode = topmostNode;  ///

  return topmostCSSNode;
}

export function cssFromMarkdownStyleAndSelectorsString(markdownStyle, selectorsString) {
  markdownStyle = `${selectorsString} {
  ${markdownStyle}
}`;

  const tokens = tokensFromMarkdownStyle(markdownStyle),
        markdownStyleNode = markdownStyleNodeFromTokens(tokens),
        topmostCSSNode = topmostCSSNodeFromMarkdownStyleNode(markdownStyleNode),
        context = {
          tokens
        };

  topmostCSSNode.resolve(context);

  const css = topmostCSSNode.asCSS(context);

  return css;
}

export default {
  tokensFromMarkdown,
  CSSClassFromOuterNode,
  HTMLClassFromOuterNode,
  markdownNodeFromTokens,
  tokensFromMarkdownStyle,
  markdownStyleNodeFromTokens,
  topmostHTMLNodeFromMarkdownNode,
  topmostHTMLNodeFromMarkdownNodes,
  topmostCSSNodeFromMarkdownStyleNode,
  topmostCSSNodeFromMarkdownStyleNodes,
  cssFromMarkdownStyleAndSelectorsString
};
