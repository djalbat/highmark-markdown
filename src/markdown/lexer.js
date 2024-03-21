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

  static fromNothing() { return CommonLexer.fromNothing(MarkdownLexer); }

  static fromRules(rules) { return CommonLexer.fromRules(MarkdownLexer, rules); }

  static fromEntries(entries) { return CommonLexer.fromEntries(MarkdownLexer, entries); }
}
