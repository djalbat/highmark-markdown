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
    "many-dashes": "^-{4,}"
  },
  {
    "few-dashes": "^-{2,3}"
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
    "path": "^(?:\\/(?:[A-Za-z_\\-]|%..)+)+\\/?"
  },
  {
    "domain": "^[a-z]+(?:-[a-z]+)*(?:\\.[a-z]+(?:-[a-z]+)*)+"
  },
  {
    "scheme": "^[a-z]+:\\/\\/"
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
