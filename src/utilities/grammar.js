"use strict";

import { nodeUtilities } from "occam-dom";

import CSSNode from "../node/css";
import HTMLNode from "../node/html";
import cssNodeMap from "../map/node/css";
import htmlNodeMap from "../map/node/html";
import TopmostCSSNode from "../node/css/topmost";
import markdownQueries from "../queries/markdown";
import TopmostHTMLNode from "../node/html/topmost";
import markdownStyleQueries from "../queries/markdownStyle";

import { nodesFromNodeAndQueries } from "../utilities/query";
import { markdownLexerFromNothing, markdownStyleLexerFromNothing } from "../utilities/lexers";
import { markdownParserFromNothing, markdownStyleParserFromNothing } from "../utilities/parsers";

const { topmostNodeFromOuterNodes } = nodeUtilities;

const markdownLexer = markdownLexerFromNothing(),
      markdownParser = markdownParserFromNothing(),
      markdownStyleLexer = markdownStyleLexerFromNothing(),
      markdownStyleParser = markdownStyleParserFromNothing();

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

  return node;
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

export function topmostCSSNodeFromMarkdownStyleNode(markdownStyleNode, ClassFromOuterNode = CSSClassFromMarkdownStyleNode) {
  const node = markdownStyleNode,  ///
        queries = markdownStyleQueries, ///
        nodes = nodesFromNodeAndQueries(node, queries),
        outerNodes = nodes, ///
        topmostNode = topmostNodeFromOuterNodes(ClassFromOuterNode, outerNodes),
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
  markdownNodeFromTokens,
  tokensFromMarkdownStyle,
  HTMLClassFromMarkdownNode,
  markdownStyleNodeFromTokens,
  CSSClassFromMarkdownStyleNode,
  topmostHTMLNodeFromMarkdownNode,
  topmostCSSNodeFromMarkdownStyleNode,
  cssFromMarkdownStyleAndSelectorsString
};
