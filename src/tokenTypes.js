"use strict";

export const URL_TOKEN_TYPE = "url";
export const WORD_TOKEN_TYPE = "word";
export const PATH_TOKEN_TYPE = "path";
export const LINK_TOKEN_TYPE = "link";
export const MARKER_TOKEN_TYPE = "marker";
export const DASHES_TOKEN_TYPE = "dashes";
export const HASHES_TOKEN_TYPE = "hashes";
export const NUMBER_TOKEN_TYPE = "number";
export const SPECIAL_TOKEN_TYPE = "special";
export const ESCAPED_TOKEN_TYPE = "escaped";
export const REFERENCE_TOKEN_TYPE = "reference";
export const ASTERISKS_TOKEN_TYPE = "asterisks";
export const BACKTICKS_TOKEN_TYPE = "backticks";
export const IDENTIFIER_TOKEN_TYPE = "identifier";
export const UNASSIGNED_TOKEN_TYPE = "unassigned";
export const VERTICAL_BAR_TOKEN_TYPE = "vertical-bar";
export const EMAIL_ADDRESS_TOKEN_TYPE = "email-address";
export const BACKTICKED_LITERAL_TOKEN_TYPE = "backticked-literal";

const tokenTypes = {
  URL_TOKEN_TYPE,
  WORD_TOKEN_TYPE,
  PATH_TOKEN_TYPE,
  LINK_TOKEN_TYPE,
  MARKER_TOKEN_TYPE,
  DASHES_TOKEN_TYPE,
  HASHES_TOKEN_TYPE,
  NUMBER_TOKEN_TYPE,
  SPECIAL_TOKEN_TYPE,
  ESCAPED_TOKEN_TYPE,
  REFERENCE_TOKEN_TYPE,
  ASTERISKS_TOKEN_TYPE,
  BACKTICKS_TOKEN_TYPE,
  IDENTIFIER_TOKEN_TYPE,
  UNASSIGNED_TOKEN_TYPE,
  VERTICAL_BAR_TOKEN_TYPE,
  EMAIL_ADDRESS_TOKEN_TYPE,
  BACKTICKED_LITERAL_TOKEN_TYPE
};

export default tokenTypes;
