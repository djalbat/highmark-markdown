"use strict";

import { CommonParser } from "occam-parsers";

import bnf from "./bnf";

export default class MarkdownStyleParser extends CommonParser {
  static bnf = bnf;

  static fromBNF(bnf) { return CommonParser.fromBNF(MarkdownStyleParser, bnf); }

  static fromRules(rules) { return CommonParser.fromRules(MarkdownStyleParser, rules); }

  static fromNothing() { return CommonParser.fromNothing(MarkdownStyleParser); }
}
