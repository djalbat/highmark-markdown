"use strict";

import { CommonParser } from "occam-parsers";

import bnf from "./bnf";
import MarkdownStyleNode from "../node/markdownStyle";
import markdownStyleNodeMap from "../map/node/markdownStyle";

import { setNonTerminalNodes } from "../utilities/parser";

const nodeMap = markdownStyleNodeMap;  ///

export default class MarkdownStyleParser extends CommonParser {
  static bnf = bnf;

  static fromBNF(bnf) {
    const markdownStyleParser = CommonParser.fromBNF(MarkdownStyleParser, bnf),
          DefaultNonTerminalNode = MarkdownStyleNode;  ///

    setNonTerminalNodes(markdownStyleParser, nodeMap, DefaultNonTerminalNode);

    return markdownStyleParser;
  }

  static fromRules(rules) {
    const markdownStyleParser = CommonParser.fromRules(MarkdownStyleParser, rules),
          DefaultNonTerminalNode = MarkdownStyleNode;  ///

    setNonTerminalNodes(markdownStyleParser, nodeMap, DefaultNonTerminalNode);

    return markdownStyleParser;
  }

  static fromNothing() {
    const markdownStyleParser = CommonParser.fromNothing(MarkdownStyleParser),
          DefaultNonTerminalNode = MarkdownStyleNode;  ///

    setNonTerminalNodes(markdownStyleParser, nodeMap, DefaultNonTerminalNode);

    return markdownStyleParser;
  }
}
