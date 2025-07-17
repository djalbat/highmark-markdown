"use strict";

import { CommonParser } from "occam-parsers";

import bnf from "./bnf";

export default class MarkdownParser extends CommonParser {
  static bnf = bnf;

  static fromBNF(bnf) { return CommonParser.fromBNF(MarkdownParser, bnf); }

  static fromRules(rules) { return CommonParser.fromRules(MarkdownParser, rules); }

  static fromNothing() { return CommonParser.fromNothing(MarkdownParser); }
}
