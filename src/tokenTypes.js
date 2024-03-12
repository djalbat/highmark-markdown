"use strict";

export const WORD_TOKEN_TYPE = "word";
export const PATH_TOKEN_TYPE = "path";
export const DOMAIN_TOKEN_TYPE = "domain";
export const NUMBER_TOKEN_TYPE = "number";
export const DASHES_TOKEN_TYPE = "dashes";
export const ESCAPED_TOKEN_TYPE = "escaped";
export const SPECIAL_TOKEN_TYPE = "special";
export const PROTOCOL_TOKEN_TYPE = "protocol";
export const BACKTICK_TOKEN_TYPE = "backtick";
export const BACKTICKS_TOKEN_TYPE = "backticks";
export const IDENTIFIER_TOKEN_TYPE = "identifier";
export const UNASSIGNED_TOKEN_TYPE = "unassigned";
export const MANY_DASHES_TOKEN_TYPE = "many-dashes";
export const SINGLE_HASH_TOKEN_TYPE = "single-hash";
export const DOUBLE_HASH_TOKEN_TYPE = "double-hash";
export const TRIPLE_HASH_TOKEN_TYPE = "triple-hash";
export const VERTICAL_BAR_TOKEN_TYPE = "vertical-bar";
export const QUADRUPLE_HASH_TOKEN_TYPE = "quadruple-hash";
export const SINGLE_ASTERISK_TOKEN_TYPE = "single-asterisk";
export const DOUBLE_ASTERISK_TOKEN_TYPE = "double-asterisk";
export const TRIPLE_ASTERISK_TOKEN_TYPE = "triple-asterisk";
export const OPEN_SQUARE_BRACKET_TOKEN_TYPE = "open-square-bracket";
export const CLOSE_SQUARE_BRACKET_TOKEN_TYPE = "close-square-bracket";
export const OPEN_SQUARE_BRACKET_CARET_TOKEN_TYPE = "open-square-bracket-caret";
export const CLOSE_SQUARE_BRACKET_COLON_TOKEN_TYPE = "close-square-bracket-colon";
export const EXCLAMATION_MARK_OPEN_SQUARE_BRACKET_TOKEN_TYPE = "exclamation-mark-open-square-bracket";

const tokenTypes = {
  WORD_TOKEN_TYPE,
  PATH_TOKEN_TYPE,
  DOMAIN_TOKEN_TYPE,
  NUMBER_TOKEN_TYPE,
  DASHES_TOKEN_TYPE,
  ESCAPED_TOKEN_TYPE,
  SPECIAL_TOKEN_TYPE,
  PROTOCOL_TOKEN_TYPE,
  BACKTICK_TOKEN_TYPE,
  BACKTICKS_TOKEN_TYPE,
  IDENTIFIER_TOKEN_TYPE,
  UNASSIGNED_TOKEN_TYPE,
  MANY_DASHES_TOKEN_TYPE,
  SINGLE_HASH_TOKEN_TYPE,
  DOUBLE_HASH_TOKEN_TYPE,
  TRIPLE_HASH_TOKEN_TYPE,
  VERTICAL_BAR_TOKEN_TYPE,
  QUADRUPLE_HASH_TOKEN_TYPE,
  SINGLE_ASTERISK_TOKEN_TYPE,
  DOUBLE_ASTERISK_TOKEN_TYPE,
  TRIPLE_ASTERISK_TOKEN_TYPE,
  OPEN_SQUARE_BRACKET_TOKEN_TYPE,
  CLOSE_SQUARE_BRACKET_TOKEN_TYPE,
  OPEN_SQUARE_BRACKET_CARET_TOKEN_TYPE,
  CLOSE_SQUARE_BRACKET_COLON_TOKEN_TYPE,
  EXCLAMATION_MARK_OPEN_SQUARE_BRACKET_TOKEN_TYPE
};

export default tokenTypes;
