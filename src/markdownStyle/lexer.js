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

  static fromRules(Class, rules) {
    if (rules === undefined) {
      rules = Class;  ///

      Class = MarkdownStyleLexer;  ///
    }

    const markdownStyleLexer = CommonLexer.fromRules(Class, rules);

    return markdownStyleLexer;
  }

  static fromEntries(Class, entries) {
    if (entries === undefined) {
      entries = Class;  ///

      Class = MarkdownStyleLexer;  ///
    }

    const markdownStyleLexer = CommonLexer.fromEntries(Class, entries);

    return markdownStyleLexer;
  }

  static fromNothing(Class) {
    if (Class === undefined) {
      Class = MarkdownStyleLexer;  ///
    }

    const markdownStyleLexer = CommonLexer.fromNothing(Class);

    return markdownStyleLexer;
  }
}
