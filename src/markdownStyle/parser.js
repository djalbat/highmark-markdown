"use strict";

import { CommonParser } from "occam-parsers";

import bnf from "./bnf";
import MarkdownStyleNode from "../node/markdownStyle";
import markdownStyleNodeMap from "../map/node/markdownStyle";

import { setNonTerminalNodes } from "../utilities/parser";

const nodeMap = markdownStyleNodeMap;  ///

export default class MarkdownStyleParser extends CommonParser {
  static bnf = bnf;

  static nodeMap = nodeMap;

  static fromBNF(Class, bnf) {
    if (bnf === undefined) {
      bnf = Class;  ///

      Class = MarkdownStyleParser; ///
    }

    const { nodeMap } = Class,
          markdownStyleParser = CommonParser.fromBNF(Class, bnf),
          DefaultNonTerminalNode = MarkdownStyleNode;  ///

    setNonTerminalNodes(markdownStyleParser, nodeMap, DefaultNonTerminalNode);

    return markdownStyleParser;
  }

  static fromRules(Class, rules) {
    if (rules === undefined) {
      rules = Class;  ///

      Class = MarkdownStyleParser; ///
    }

    const { nodeMap } = Class,
          markdownStyleParser = CommonParser.fromRules(Class, rules),
          DefaultNonTerminalNode = MarkdownStyleNode;  ///

    setNonTerminalNodes(markdownStyleParser, nodeMap, DefaultNonTerminalNode);

    return markdownStyleParser;
  }

  static fromNothing(Class) {
    if (Class === undefined) {
      Class = MarkdownStyleParser; ///
    }

    const { nodeMap } = Class,
          markdownStyleParser = CommonParser.fromNothing(Class),
          DefaultNonTerminalNode = MarkdownStyleNode;  ///

    setNonTerminalNodes(markdownStyleParser, nodeMap, DefaultNonTerminalNode);

    return markdownStyleParser;
  }
}
