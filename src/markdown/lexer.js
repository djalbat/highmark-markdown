"use strict";

import { CommonLexer } from "occam-lexers";
import { WhitespaceToken, EndOfLineSignificantToken } from "occam-lexers";

import entries from "./entries";

export default class MarkdownLexer extends CommonLexer {
  static entries = entries;

  static EndOfLineToken = EndOfLineSignificantToken;

  static WhitespaceToken = WhitespaceToken;

  static EndOfLineCommentToken = null;

  static SingleLineCommentToken = null;

  static RegularExpressionToken = null;

  static EndOfMultiLineCommentToken = null;

  static StartOfMultiLineCommentToken = null;

  static MiddleOfMultiLineCommentToken = null;

  static SinglyQuotedStringLiteralToken = null;

  static DoublyQuotedStringLiteralToken = null;

  static fromNothing() { return CommonLexer.fromNothing(MarkdownLexer); }

  static fromRules(rules) { return CommonLexer.fromRules(MarkdownLexer, rules); }

  static fromEntries(entries) { return CommonLexer.fromEntries(MarkdownLexer, entries); }
}
