"use strict";

import { CommonParser } from "occam-parsers";

import bnf from "./bnf";
import MarkdownNode from "../node/markdown";
import markdownNodeMap from "../map/node/markdown";

import { setNonTerminalNodes } from "../utilities/parser";

const nodeMap = markdownNodeMap;  ///

export default class MarkdownParser extends CommonParser {
  static bnf = bnf;

  static fromBNF(bnf) {
    const markdownParser = CommonParser.fromBNF(MarkdownParser, bnf),
          DefaultNonTerminalNode = MarkdownNode;  ///

    setNonTerminalNodes(markdownParser, nodeMap, DefaultNonTerminalNode);

    return markdownParser;
  }

  static fromRules(rules) {
    const markdownParser = CommonParser.fromRules(MarkdownParser, rules),
          DefaultNonTerminalNode = MarkdownNode;  ///

    setNonTerminalNodes(markdownParser, nodeMap, DefaultNonTerminalNode);

    return markdownParser;
  }

  static fromNothing() {
    const markdownParser = CommonParser.fromNothing(MarkdownParser),
          DefaultNonTerminalNode = MarkdownNode;  ///

    setNonTerminalNodes(markdownParser, nodeMap, DefaultNonTerminalNode);

    return markdownParser;
  }
}
