"use strict";

import { CommonParser } from "occam-parsers";

import bnf from "./bnf";
import MarkdownNode from "../node/markdown";
import markdownNodeMap from "../map/node/markdown";

import { setNonTerminalNodes } from "../utilities/parser";

const nodeMap = markdownNodeMap;  ///

export default class MarkdownParser extends CommonParser {
  static bnf = bnf;

  static nodeMap = nodeMap;

  static fromBNF(Class, bnf) {
    if (bnf === undefined) {
      bnf = Class;  ///

      Class = MarkdownParser; ///
    }

    const { nodeMap } = Class,
          markdownParser = CommonParser.fromBNF(Class, bnf),
          DefaultNonTerminalNode = MarkdownNode;  ///

    setNonTerminalNodes(markdownParser, nodeMap, DefaultNonTerminalNode);

    return markdownParser;
  }

  static fromRules(Class, rules) {
    if (rules === undefined) {
      rules = Class;  ///

      Class = MarkdownParser; ///
    }

    const { nodeMap } = Class,
          markdownParser = CommonParser.fromRules(Class, rules),
          DefaultNonTerminalNode = MarkdownNode;  ///

    setNonTerminalNodes(markdownParser, nodeMap, DefaultNonTerminalNode);

    return markdownParser;
  }

  static fromNothing(Class) {
    if (Class === undefined) {
      Class = MarkdownParser; ///
    }

    const { nodeMap } = Class,
          markdownParser = CommonParser.fromNothing(Class),
          DefaultNonTerminalNode = MarkdownNode;  ///

    setNonTerminalNodes(markdownParser, nodeMap, DefaultNonTerminalNode);

    return markdownParser;
  }
}
