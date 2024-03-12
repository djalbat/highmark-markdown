"use strict";

const entries = [
  {
    "escaped": "^\\\\[^\\s]"
  },
  {
    "exclamation-mark-open-square-bracket": "^!\\["
  },
  {
    "close-square-bracket-colon": "^\\]:"
  },
  {
    "open-square-bracket-caret": "^\\[\\^"
  },
  {
    "close-square-bracket": "^\\]"
  },
  {
    "open-square-bracket": "^\\["
  },
  {
    "triple-asterisk": "^\\*\\*\\*"
  },
  {
    "double-asterisk": "^\\*\\*"
  },
  {
    "single-asterisk": "^\\*"
  },
  {
    "quadruple-hash": "^####"
  },
  {
    "triple-hash": "^###"
  },
  {
    "double-hash": "^##"
  },
  {
    "single-hash": "^#"
  },
  {
    "vertical-bar": "^\\|"
  },
  {
    "many-dashes": "^-{4,}"
  },
  {
    "dashes": "^-{2,3}"
  },
  {
    "backticks": "^```"
  },
  {
    "backtick": "^`"
  },
  {
    "number": "^[1-9][0-9]*"
  },
  {
    "path": "^\\/(?:[a-z]+\\/)*(?:[a-z\\-]+(?:\\.[a-z]+)?)?"
  },
  {
    "domain": "^[a-z\\-]+(?:\\.[a-z\\-]+)+"
  },
  {
    "protocol": "^[a-z]+:\\/\\/"
  },
  {
    "identifier": "^[a-z]+(?:-[a-z]+)*"
  },
  {
    "word": "^\\w+"
  },
  {
    "special": "^\\.\\.\\.|\\.|\\?|\\(|\\)|\\^|\\/|-|@|,|!|;|:|`|'|\""
  },
  {
    "unassigned": "^[^\\s]+"
  }
];

export default entries;
