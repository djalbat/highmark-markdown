"use strict";

const entries = [
  {
    "escaped": "^\\\\[^\\s]"
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
    "many-dashes": "^-{3,}"
  },
  {
    "two-dashes": "^--"
  },
  {
    "single-dash": "^-"
  },
  {
    "vertical-bar": "^\\|"
  },
  {
    "backticks": "^```"
  },
  {
    "backticked-literal": "^`(?:\\\\[^\\s]|[^`\\\\\\r\\n])*`"
  },
  {
    "number": "^[1-9][0-9]*"
  },
  {
    "email-address": "^[a-z0-9\\-_]+(?:\\.[a-z0-9\\-_]+)*@[a-z0-9\\-_]+(?:\\.[a-z0-9\\-_]+)+"
  },
  {
    "url": "^[a-z]+:\\/\\/[a-z\\-]+(?:\\.[a-z\\-]+)+(?:\\/(?:[A-Za-z0-9\\-_]|%..)*)*(?:\\.(?:[A-Za-z0-9\\-_]|%..)+)?"
  },
  {
    "path": "^[a-z0-9\\-_]+(?:\\/[a-z0-9\\-_]+)*\\.[a-z0-9\\-_]+"
  },
  {
    "identifier": "^[a-z]+(?:-[a-z]+)*"
  },
  {
    "word": "^\\w+"
  },
  {
    "special": "^\\.\\.\\.|\\.|\\?|\\(|\\)|!\\[|\\[\\^|\\]:|\\[|\\]|\\^|\\/|@|,|!|;|:|`|'|\""
  },
  {
    "unassigned": "^[^\\s]+"
  }
];

export default entries;
