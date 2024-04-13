"use strict";

import { LINK_RULE_NAME,
         LINE_RULE_NAME,
         IMAGE_RULE_NAME,
         TABLE_RULE_NAME,
         ERROR_RULE_NAME,
         ANCHOR_RULE_NAME,
         IMPORT_RULE_NAME,
         CONTENTS_RULE_NAME,
         FOOTNOTE_RULE_NAME,
         DIVISION_RULE_NAME,
         REFERENCE_RULE_NAME,
         PARAGRAPH_RULE_NAME,
         HYPERLINK_RULE_NAME,
         LINE_BREAK_RULE_NAME,
         TABLE_CELL_RULE_NAME,
         TABLE_HEAD_RULE_NAME,
         TABLE_BODY_RULE_NAME,
         BLOCK_TEXT_RULE_NAME,
         CLASS_NAME_RULE_NAME,
         PLAIN_TEXT_RULE_NAME,
         EMAIL_LINK_RULE_NAME,
         END_OF_LINE_RULE_NAME,
         MARKED_TEXT_RULE_NAME,
         INLINE_TEXT_RULE_NAME,
         STRONG_TEXT_RULE_NAME,
         SUB_DIVISION_RULE_NAME,
         ORDERED_LIST_RULE_NAME,
         BLOCK_LISTING_RULE_NAME,
         CONTENTS_ITEM_RULE_NAME,
         CONTENTS_LIST_RULE_NAME,
         FOOTNOTE_ITEM_RULE_NAME,
         TABLE_HEAD_ROW_RULE_NAME,
         TABLE_BODY_ROW_RULE_NAME,
         INLINE_LISTING_RULE_NAME,
         UNORDERED_LIST_RULE_NAME,
         FOOTNOTES_LIST_RULE_NAME,
         TABLE_HEAD_CELL_RULE_NAME,
         TABLE_BODY_CELL_RULE_NAME,
         TABLE_SEPARATOR_RULE_NAME,
         EMPHASISED_TEXT_RULE_NAME,
         PRIMARY_HEADING_RULE_NAME,
         TERTIARY_HEADING_RULE_NAME,
         ORDERED_LIST_ITEM_RULE_NAME,
         BLOCK_LISTING_END_RULE_NAME,
         SECONDARY_HEADING_RULE_NAME,
         QUATERNARY_HEADING_RULE_NAME,
         BLOCK_LISTING_START_RULE_NAME,
         UNORDERED_LIST_ITEM_RULE_NAME,
         STRONGLY_EMPHASISED_TEXT_RULE_NAME } from "./ruleNames";

const ruleNameToHTMLMap = {
  [LINK_RULE_NAME]: {
    tagName: "a",
    className: "link"
  },
  [LINE_RULE_NAME]: {
    tagName: "span",
    className: "line"
  },
  [IMAGE_RULE_NAME]: {
    tagName: "img",
    className: null
  },
  [TABLE_RULE_NAME]: {
    tagName: "table",
    className: null
  },
  [ERROR_RULE_NAME]: {
    tagName: "span",
    className: "error"
  },
  [ANCHOR_RULE_NAME]: {
    tagName: "a",
    className: "anchor"
  },
  [IMPORT_RULE_NAME]: {
    tagName: null,
    className: null
  },
  [CONTENTS_RULE_NAME]: {
    tagName: "a",
    className: "contents"
  },
  [FOOTNOTE_RULE_NAME]: {
    tagName: null,
    className: null
  },
  [DIVISION_RULE_NAME]: {
    tagName: "div",
    className: null
  },
  [REFERENCE_RULE_NAME]: {
    tagName: null,
    className: null
  },
  [PARAGRAPH_RULE_NAME]: {
    tagName: "p",
    className: null
  },
  [HYPERLINK_RULE_NAME]: {
    tagName: "a",
    className: null
  },
  [LINE_BREAK_RULE_NAME]: {
    tagName: "br",
    className: null
  },
  [TABLE_CELL_RULE_NAME]: {
    tagName: null,
    className: null
  },
  [TABLE_HEAD_RULE_NAME]: {
    tagName: "thead",
    className: null
  },
  [TABLE_BODY_RULE_NAME]: {
    tagName: "tbody",
    className: null
  },
  [BLOCK_TEXT_RULE_NAME]: {
    tagName: null,
    className: null
  },
  [CLASS_NAME_RULE_NAME]: {
    tagName: null,
    className: null
  },
  [PLAIN_TEXT_RULE_NAME]: {
    tagName: null,
    className: null
  },
  [EMAIL_LINK_RULE_NAME]: {
    tagName: "a",
    className: "email"
  },
  [END_OF_LINE_RULE_NAME]: {
    tagName: null,
    className: null
  },
  [MARKED_TEXT_RULE_NAME]: {
    tagName: null,
    className: null
  },
  [INLINE_TEXT_RULE_NAME]: {
    tagName: null,
    className: null
  },
  [STRONG_TEXT_RULE_NAME]: {
    tagName: "strong",
    className: null
  },
  [SUB_DIVISION_RULE_NAME]: {
    tagName: null,
    className: null
  },
  [ORDERED_LIST_RULE_NAME]: {
    tagName: "ol",
    className: null
  },
  [BLOCK_LISTING_RULE_NAME]: {
    tagName: "pre",
    className: "block"
  },
  [CONTENTS_ITEM_RULE_NAME]: {
    tagName: "li",
    className: "contents"
  },
  [CONTENTS_LIST_RULE_NAME]: {
    tagName: "ul",
    className: "contents"
  },
  [FOOTNOTE_ITEM_RULE_NAME]: {
    tagName: "li",
    className: "footnote"
  },
  [TABLE_HEAD_ROW_RULE_NAME]: {
    tagName: "tr",
    className: null
  },
  [TABLE_BODY_ROW_RULE_NAME]: {
    tagName: "tr",
    className: null
  },
  [INLINE_LISTING_RULE_NAME]: {
    tagName: "pre",
    className: "inline"
  },
  [UNORDERED_LIST_RULE_NAME]: {
    tagName: "ul",
    className: null
  },
  [FOOTNOTES_LIST_RULE_NAME]: {
    tagName: "ol",
    className: "footnotes"
  },
  [TABLE_HEAD_CELL_RULE_NAME]: {
    tagName: "th",
    className: null
  },
  [TABLE_BODY_CELL_RULE_NAME]: {
    tagName: "td",
    className: null
  },
  [TABLE_SEPARATOR_RULE_NAME]: {
    tagName: null,
    className: null
  },
  [EMPHASISED_TEXT_RULE_NAME]: {
    tagName: "em",
    className: null
  },
  [PRIMARY_HEADING_RULE_NAME]: {
    tagName: "h1",
    className: null
  },
  [TERTIARY_HEADING_RULE_NAME]: {
    tagName: "h3",
    className: null
  },
  [ORDERED_LIST_ITEM_RULE_NAME]: {
    tagName: "li",
    className: null
  },
  [BLOCK_LISTING_END_RULE_NAME]: {
    tagName: null,
    className: null
  },
  [SECONDARY_HEADING_RULE_NAME]: {
    tagName: "h2",
    className: null
  },
  [QUATERNARY_HEADING_RULE_NAME]: {
    tagName: "h4",
    className: null
  },
  [BLOCK_LISTING_START_RULE_NAME]: {
    tagName: null,
    className: null
  },
  [UNORDERED_LIST_ITEM_RULE_NAME]: {
    tagName: "li",
    className: null
  },
  [STRONGLY_EMPHASISED_TEXT_RULE_NAME]: {
    tagName: "em",
    className: null
  }
};

export default ruleNameToHTMLMap;
