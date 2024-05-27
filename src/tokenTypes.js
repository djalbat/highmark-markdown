"use strict";

export const URL_TOKEN_TYPE = "url";
export const WORD_TOKEN_TYPE = "word";
export const PATH_TOKEN_TYPE = "path";
export const NUMBER_TOKEN_TYPE = "number";
export const SPECIAL_TOKEN_TYPE = "special";
export const ESCAPED_TOKEN_TYPE = "escaped";
export const BACKTICKS_TOKEN_TYPE = "backticks";
export const IDENTIFIER_TOKEN_TYPE = "identifier";
export const UNASSIGNED_TOKEN_TYPE = "unassigned";
export const MANY_DASHES_TOKEN_TYPE = "many-dashes";
export const SINGLE_DASH_TOKEN_TYPE = "single-dash";
export const SINGLE_HASH_TOKEN_TYPE = "single-hash";
export const DOUBLE_HASH_TOKEN_TYPE = "double-hash";
export const TRIPLE_HASH_TOKEN_TYPE = "triple-hash";
export const VERTICAL_BAR_TOKEN_TYPE = "vertical-bar";
export const EMAIL_ADDRESS_TOKEN_TYPE = "email-address";
export const QUADRUPLE_HASH_TOKEN_TYPE = "quadruple-hash";
export const SINGLE_ASTERISK_TOKEN_TYPE = "single-asterisk";
export const DOUBLE_ASTERISK_TOKEN_TYPE = "double-asterisk";
export const TRIPLE_ASTERISK_TOKEN_TYPE = "triple-asterisk";
export const BACKTICKED_LITERAL_TOKEN_TYPE = "backticked-literal";

const tokenTypes = {
  URL_TOKEN_TYPE,
  WORD_TOKEN_TYPE,
  PATH_TOKEN_TYPE,
  NUMBER_TOKEN_TYPE,
  SPECIAL_TOKEN_TYPE,
  ESCAPED_TOKEN_TYPE,
  BACKTICKS_TOKEN_TYPE,
  IDENTIFIER_TOKEN_TYPE,
  UNASSIGNED_TOKEN_TYPE,
  MANY_DASHES_TOKEN_TYPE,
  SINGLE_DASH_TOKEN_TYPE,
  SINGLE_HASH_TOKEN_TYPE,
  DOUBLE_HASH_TOKEN_TYPE,
  TRIPLE_HASH_TOKEN_TYPE,
  VERTICAL_BAR_TOKEN_TYPE,
  EMAIL_ADDRESS_TOKEN_TYPE,
  QUADRUPLE_HASH_TOKEN_TYPE,
  SINGLE_ASTERISK_TOKEN_TYPE,
  DOUBLE_ASTERISK_TOKEN_TYPE,
  TRIPLE_ASTERISK_TOKEN_TYPE,
  BACKTICKED_LITERAL_TOKEN_TYPE
};

export default tokenTypes;
