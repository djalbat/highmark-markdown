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
    "path": "^\\/(?:[a-z\\-]+\\/)*(?:[a-z\\-]+(?:\\.[a-z\\-]+)?)?"
  },
  {
    "domain": "^[a-z\\-]+(?:\\.[a-z\\-]+)+"
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
    "special": "^\\.\\.\\.|\\.|\\?|\\(|\\)|!\\[|\\[\\^|\\]:|\\[|\\]|\\^|\\/|-|@|,|!|;|:|`|'|\""
  },
  {
    "unassigned": "^[^\\s]+"
  }
];

export default entries;
