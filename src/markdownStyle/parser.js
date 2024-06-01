"use strict";

import bnf from "./bnf";
import CommonParser from "../common/parser";

export default class MarkdownStyleParser extends CommonParser {
  static bnf = bnf;

  static fromNothing() { return CommonParser.fromNothing(MarkdownStyleParser); }

  static fromBNF(bnf) { return CommonParser.fromBNF(MarkdownStyleParser, bnf); }

  static fromRules(rules) { return CommonParser.fromRules(MarkdownStyleParser, rules); }
}
