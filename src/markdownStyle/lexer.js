"use strict";

import { CommonLexer, WhitespaceToken, EndOfLineNonSignificantToken, DoublyQuotedStringLiteralToken } from "occam-lexers";

import entries from "./entries";

export default class MarkdownStyleLexer extends CommonLexer {
  static entries = entries;

  static EndOfLineToken = EndOfLineNonSignificantToken; ///

  static WhitespaceToken = WhitespaceToken;

  static EndOfLineCommentToken = null;

  static SingleLineCommentToken = null;

  static RegularExpressionToken = null;

  static EndOfMultiLineCommentToken = null;

  static StartOfMultiLineCommentToken = null;

  static MiddleOfMultiLineCommentToken = null;

  static SinglyQuotedStringLiteralToken = null;

  static DoublyQuotedStringLiteralToken = DoublyQuotedStringLiteralToken;

  static fromRules(rules) { return CommonLexer.fromRules(MarkdownStyleLexer, rules); }

  static fromEntries(entries) { return CommonLexer.fromEntries(MarkdownStyleLexer, entries); }

  static fromNothing() { return CommonLexer.fromNothing(MarkdownStyleLexer); }
}
