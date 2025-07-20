"use strict";

import { CommonParser } from "occam-parsers";

import bnf from "./bnf";
import MarkdownNOde from "../node/markdown";
import markdownNonTerminalNodeMap from "../map/nonTerminalNode/markdown";

const NonTerminalNodeMap = markdownNonTerminalNodeMap,  ///
      defaultNonTerminalNode = MarkdownNOde;  ///

export default class MarkdownParser extends CommonParser {
  static bnf = bnf;

  static NonTerminalNodeMap = NonTerminalNodeMap;

  static defaultNonTerminalNode = defaultNonTerminalNode;

  static fromBNF(bnf) { return CommonParser.fromBNF(MarkdownParser, bnf); }

  static fromRules(rules) { return CommonParser.fromRules(MarkdownParser, rules); }

  static fromNothing() { return CommonParser.fromNothing(MarkdownParser); }
}
