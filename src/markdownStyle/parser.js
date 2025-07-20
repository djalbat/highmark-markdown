"use strict";

import { CommonParser } from "occam-parsers";

import bnf from "./bnf";
import MarkdownStyleNOde from "../node/markdownStyle";
import markdownStyleNonTerminalNodeMap from "../map/nonTerminalNode/markdownStyle";

const NonTerminalNodeMap = markdownStyleNonTerminalNodeMap,  ///
      defaultNonTerminalNode = MarkdownStyleNOde;  ///

export default class MarkdownStyleParser extends CommonParser {
  static bnf = bnf;

  static NonTerminalNodeMap = NonTerminalNodeMap;

  static defaultNonTerminalNode = defaultNonTerminalNode;

  static fromBNF(bnf) { return CommonParser.fromBNF(MarkdownStyleParser, bnf); }

  static fromRules(rules) { return CommonParser.fromRules(MarkdownStyleParser, rules); }

  static fromNothing() { return CommonParser.fromNothing(MarkdownStyleParser); }
}
