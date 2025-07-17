"use strict";

import MarkdownNode from "../node/markdown"
import MarkdownParser from "../markdown/parser";
import markdownNodeMap from "../map/node/markdown";
import MarkdownStyleNode from "../node/markdownStyle";
import MarkdownStyleParser from "../markdownStyle/parser";
import markdownStyleNodeMap from "../map/node/markdownStyle";

import { setNonTerminalNodes } from "../utilities/parser";

export function markdownParserFromNothing() {
  const markdownParser = MarkdownParser.fromNothing(),
        parser = markdownParser,  ///
        nodeMap = markdownNodeMap,  ///
        DefaultNonTerminalNode = MarkdownNode;  ///

  setNonTerminalNodes(parser, nodeMap, DefaultNonTerminalNode);

  return markdownParser;
}

export function markdownStyleParserFromNothing() {
  const markdownStyleParser = MarkdownStyleParser.fromNothing(),
        parser = markdownStyleParser,  ///
        nodeMap = markdownStyleNodeMap,  ///
        DefaultNonTerminalNode = MarkdownStyleNode;  ///

  setNonTerminalNodes(parser, nodeMap, DefaultNonTerminalNode);

  return markdownStyleParser;
}

export default {
  markdownParserFromNothing,
  markdownStyleParserFromNothing
};
