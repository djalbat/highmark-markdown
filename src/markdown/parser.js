"use strict";

import bnf from "./bnf";
import nodeMap from "../nodeMap";
import CommonParser from "../common/parser";

import { setNonTerminalNodes } from "../utilities/parser";

export default class MarkdownParser extends CommonParser {
  static bnf = bnf;

  static nodeMap = nodeMap;

  static fromBNF(Class, bnf) {
    if (bnf === undefined) {
      bnf = Class;  ///

      Class = MarkdownParser; ///
    }

    const { nodeMap } = Class,
          markdownParser = CommonParser.fromBNF(Class, bnf);

    setNonTerminalNodes(markdownParser, nodeMap);

    return markdownParser;
  }

  static fromRules(Class, rules) {
    if (rules === undefined) {
      rules = Class;  ///

      Class = MarkdownParser; ///
    }

    const { nodeMap } = Class,
          markdownParser = CommonParser.fromRules(Class, rules);

    setNonTerminalNodes(markdownParser, nodeMap);

    return markdownParser;
  }

  static fromNothing(Class) {
    if (Class === undefined) {
      Class = MarkdownParser; ///
    }

    const { nodeMap } = Class,
          markdownParser = CommonParser.fromNothing(Class);

    setNonTerminalNodes(markdownParser, nodeMap);

    return markdownParser;
  }
}
