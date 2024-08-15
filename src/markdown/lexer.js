"use strict";

import { CommonLexer, WhitespaceToken, EndOfLineSignificantToken } from "occam-lexers";

import entries from "./entries";

export default class MarkdownLexer extends CommonLexer {
  static entries = entries;

  static EndOfLineToken = EndOfLineSignificantToken;  ///

  static WhitespaceToken = WhitespaceToken;

  static EndOfLineCommentToken = null;

  static SingleLineCommentToken = null;

  static RegularExpressionToken = null;

  static EndOfMultiLineCommentToken = null;

  static StartOfMultiLineCommentToken = null;

  static MiddleOfMultiLineCommentToken = null;

  static SinglyQuotedStringLiteralToken = null;

  static DoublyQuotedStringLiteralToken = null;

  static fromRules(Class, rules) {
    if (rules === undefined) {
      rules = Class;  ///

      Class = MarkdownLexer;  ///
    }

    const markdownLexer = CommonLexer.fromRules(Class, rules);

    return markdownLexer;
  }

  static fromEntries(Class, entries) {
    if (entries === undefined) {
      entries = Class;  ///

      Class = MarkdownLexer;  ///
    }

    const markdownLexer = CommonLexer.fromEntries(Class, entries);

    return markdownLexer;
  }

  static fromNothing(Class) {
    if (Class === undefined) {
      Class = MarkdownLexer;  ///
    }

    const markdownLexer = CommonLexer.fromNothing(Class);

    return markdownLexer;
  }
}
