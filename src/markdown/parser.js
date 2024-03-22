"use strict";

import { CommonParser } from "occam-parsers";

import bnf from "./bnf";
import nodeMap from "../nodeMap";

import { setNonTerminalNodes } from "../utilities/node";

export default class MarkdownParser extends CommonParser {
  static bnf = bnf;

  static nodeMap = nodeMap;

  static fromNothing(Class) {
    if (Class === undefined) {
      Class = MarkdownParser; ///
    }

    const { nodeMap } = Class,
          markdownParser = CommonParser.fromNothing(MarkdownParser);

    setNonTerminalNodes(markdownParser, nodeMap);

    return markdownParser;
  }

  static fromBNF(Class, bnf) {
    if (bnf === undefined) {
      bnf = Class;  ///

      Class = MarkdownParser; ///
    }

    const { nodeMap } = Class,
          markdownParser = CommonParser.fromBNF(MarkdownParser, bnf);

    setNonTerminalNodes(markdownParser, nodeMap);

    return markdownParser;
  }

  static fromRules(Class, rules) {
    if (rules === undefined) {
      rules = Class;  ///

      Class = MarkdownParser; ///
    }

    const { nodeMap } = Class,
          markdownParser = CommonParser.fromRules(MarkdownParser, rules);

    setNonTerminalNodes(markdownParser, nodeMap);

    return markdownParser;
  }
}
