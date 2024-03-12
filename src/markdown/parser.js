"use strict";

import { CommonParser } from "occam-parsers";

import bnf from "./bnf";
import nodeMap from "../nodeMap";

import { setNonTerminalNodes } from "../utilities/node";

export default class MarkdownParser extends CommonParser {
  static bnf = bnf;

  static fromNothing() {
    const markdownParser = CommonParser.fromNothing(MarkdownParser);

    setNonTerminalNodes(markdownParser, nodeMap);

    return markdownParser;
  }

  static fromBNF(bnf) {
    const markdownParser = CommonParser.fromBNF(MarkdownParser, bnf);

    setNonTerminalNodes(markdownParser, nodeMap);

    return markdownParser;
  }

  static fromRules(rules) {
    const markdownParser = CommonParser.fromRules(MarkdownParser, rules);

    setNonTerminalNodes(markdownParser, nodeMap);

    return markdownParser;
  }
}
