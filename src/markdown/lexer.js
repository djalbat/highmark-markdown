"use strict";

import { CommonLexer } from "occam-lexers";
import { WhitespaceToken,
         EndOfLineSignificantToken,
         CStyleSingleLineCommentToken,
         EndOfLineCommentSignificantToken,
         CStyleEndOfMultiLineCommentToken,
         CStyleStartOfMultiLineCommentToken,
         CStyleMiddleOfMultiLineCommentToken } from "occam-lexers";

import entries from "./entries";

export default class MarkdownLexer extends CommonLexer {
  static entries = entries;

  static EndOfLineToken = EndOfLineSignificantToken;  ///

  static WhitespaceToken = WhitespaceToken;

  static EndOfLineCommentToken = EndOfLineCommentSignificantToken;  ///

  static SingleLineCommentToken = CStyleSingleLineCommentToken; ///

  static RegularExpressionToken = null;

  static EndOfMultiLineCommentToken = CStyleEndOfMultiLineCommentToken; ///

  static StartOfMultiLineCommentToken = CStyleStartOfMultiLineCommentToken; ///

  static MiddleOfMultiLineCommentToken = CStyleMiddleOfMultiLineCommentToken; ///

  static SinglyQuotedStringLiteralToken = null;

  static DoublyQuotedStringLiteralToken = null;

  static fromNothing(Class) {
    if (Class === undefined) {
      Class = MarkdownLexer;  ///
    }

    const markdownLexer = CommonLexer.fromNothing(Class);

    return markdownLexer;
  }

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
}
