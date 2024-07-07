"use strict";

const entries = [
  {
    "escaped": "^\\\\[^\\s]"
  },
  {
    "asterisks": "^\\*{2,4}"
  },
  {
    "hashes": "^#{1,4}"
  },
  {
    "dashes": "^-{3,}"
  },
  {
    "bullet": "^\\*"
  },
  {
    "marker": "^[1-9][0-9]*\\."
  },
  {
    "number": "^[1-9][0-9]*"
  },
  {
    "backticks": "^```"
  },
  {
    "vertical-bar": "^\\|"
  },
  {
    "backticked-literal": "^`(?:\\\\[^\\s]|[^`\\\\\\r\\n])*`"
  },
  {
    "email-address": "^[a-z0-9\\-_]+(?:\\.[a-z0-9\\-_]+)*@[a-z0-9\\-_]+(?:\\.[a-z0-9\\-_]+)+"
  },
  {
    "url": "^[a-z]+:\\/\\/(?:localhost|[a-z\\-]+(?:\\.[a-z\\-]+)+)(?::\\d{4})?(?:\\/(?:[A-Za-z0-9\\-_]|%..)*)*(?:\\.(?:[A-Za-z0-9\\-_]|%..)+)?"
  },
  {
    "path": "^[a-z0-9\\-_]+(?:\\/[a-z0-9\\-_]+)*\\.[a-z0-9\\-_]+"
  },
  {
    "reference": "\\[\\^[a-z]+(?:-[a-z]+)*\\]:"
  },
  {
    "link": "\\[\\^[a-z]+(?:-[a-z]+)*\\]"
  },
  {
    "directive": "@[a-z]+([A-Z][a-z]+)*"
  },
  {
    "identifier": "[a-z]+(?:-[a-z]+)*"
  },
  {
    "special": "^\\.\\.\\.|\\.|\\?|\\(|\\)|!\\[|\\[\\^|\\]:|\\[|\\]|\\^|\\/|,|!|;|:|`|'|\""
  },
  {
    "unassigned": "^[^\\s]+"
  }
];

export default entries;
