"use strict";

import { LINE_RULE_NAME,
         COMMA_RULE_NAME,
         IMAGE_RULE_NAME,
         TABLE_RULE_NAME,
         ERROR_RULE_NAME,
         ANCHOR_RULE_NAME,
         DIVISION_RULE_NAME,
         FOOTNOTE_RULE_NAME,
         NONSENSE_RULE_NAME,
         REFERENCE_RULE_NAME,
         PARAGRAPH_RULE_NAME,
         HYPERLINK_RULE_NAME,
         INDEX_LIST_RULE_NAME,
         INDEX_ITEM_RULE_NAME,
         INDEX_LINK_RULE_NAME,
         TABLE_CELL_RULE_NAME,
         TABLE_HEAD_RULE_NAME,
         TABLE_BODY_RULE_NAME,
         BLOCK_LINE_RULE_NAME,
         CLASS_NAME_RULE_NAME,
         PLAIN_TEXT_RULE_NAME,
         EMAIL_LINK_RULE_NAME,
         DIRECTIVES_RULE_NAME,
         END_OF_LINE_RULE_NAME,
         INLINE_TEXT_RULE_NAME,
         STRONG_TEXT_RULE_NAME,
         SUB_DIVISION_RULE_NAME,
         ORDERED_LIST_RULE_NAME,
         INDEX_HEADING_RULE_NAME,
         BLOCK_LISTING_RULE_NAME,
         CONTENTS_LINK_RULE_NAME,
         CONTENTS_ITEM_RULE_NAME,
         CONTENTS_LIST_RULE_NAME,
         FOOTNOTE_LINK_RULE_NAME,
         TABLE_HEAD_ROW_RULE_NAME,
         TABLE_BODY_ROW_RULE_NAME,
         INLINE_LISTING_RULE_NAME,
         UNORDERED_LIST_RULE_NAME,
         FOOTNOTES_ITEM_RULE_NAME,
         FOOTNOTES_LIST_RULE_NAME,
         TABLE_HEAD_CELL_RULE_NAME,
         TABLE_BODY_CELL_RULE_NAME,
         EMPHASISED_TEXT_RULE_NAME,
         PRIMARY_HEADING_RULE_NAME,
         INDEX_DIRECTIVE_RULE_NAME,
         EMBED_DIRECTIVE_RULE_NAME,
         EMPTY_TABLE_CELL_RULE_NAME,
         TERTIARY_HEADING_RULE_NAME,
         IGNORE_DIRECTIVE_RULE_NAME,
         ORDERED_LIST_ITEM_RULE_NAME,
         BLOCK_LISTING_END_RULE_NAME,
         SECONDARY_HEADING_RULE_NAME,
         INCLUDE_DIRECTIVE_RULE_NAME,
         QUATERNARY_HEADING_RULE_NAME,
         CONTENTS_DIRECTIVE_RULE_NAME,
         BLOCK_LISTING_START_RULE_NAME,
         UNORDERED_LIST_ITEM_RULE_NAME,
         FOOTNOTES_DIRECTIVE_RULE_NAME,
         PAGE_NUMBER_DIRECTIVE_RULE_NAME,
         STRONGLY_EMPHASISED_TEXT_RULE_NAME } from "./ruleNames";

const elementMap = {
  [LINE_RULE_NAME]: {
    tagName: "span",
    className: "line"
  },
  [COMMA_RULE_NAME]: {
    tagName: null,
    className: null
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
  [DIVISION_RULE_NAME]: {
    tagName: "div",
    className: null
  },
  [FOOTNOTE_RULE_NAME]: {
    tagName: null,
    className: null
  },
  [NONSENSE_RULE_NAME]: {
    tagName: null,
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
    className: "hyperlink"
  },
  [INDEX_LIST_RULE_NAME] : {
    tagName: "ul",
    className: "index"
  },
  [INDEX_ITEM_RULE_NAME] : {
    tagName: "li",
    className: "index"
  },
  [INDEX_LINK_RULE_NAME] : {
    tagName: "a",
    className: "index"
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
  [BLOCK_LINE_RULE_NAME]: {
    tagName: "span",
    className: "block-line"
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
    className: "email-link"
  },
  [DIRECTIVES_RULE_NAME]: {
    tagName: null,
    className: null
  },
  [END_OF_LINE_RULE_NAME]: {
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
  [INDEX_HEADING_RULE_NAME]: {
    tagName: "h3",
    className: "index"
  },
  [BLOCK_LISTING_RULE_NAME]: {
    tagName: "pre",
    className: "block"
  },
  [CONTENTS_LINK_RULE_NAME]: {
    tagName: "a",
    className: "contents-link"
  },
  [CONTENTS_ITEM_RULE_NAME]: {
    tagName: "li",
    className: "contents"
  },
  [CONTENTS_LIST_RULE_NAME]: {
    tagName: "ul",
    className: "contents"
  },
  [FOOTNOTE_LINK_RULE_NAME]: {
    tagName: "a",
    className: "footnote-link"
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
    tagName: "code",
    className: "inline"
  },
  [UNORDERED_LIST_RULE_NAME]: {
    tagName: "ul",
    className: null
  },
  [FOOTNOTES_ITEM_RULE_NAME]: {
    tagName: "li",
    className: "footnotes"
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
  [EMPHASISED_TEXT_RULE_NAME]: {
    tagName: "em",
    className: null
  },
  [PRIMARY_HEADING_RULE_NAME]: {
    tagName: "h1",
    className: null
  },
  [INDEX_DIRECTIVE_RULE_NAME]: {
    tagName: null,
    className: null
  },
  [EMBED_DIRECTIVE_RULE_NAME]: {
    tagName: null,
    className: null
  },
  [EMPTY_TABLE_CELL_RULE_NAME]: {
    tagName: null,
    className: null
  },
  [TERTIARY_HEADING_RULE_NAME]: {
    tagName: "h3",
    className: null
  },
  [IGNORE_DIRECTIVE_RULE_NAME]: {
    tagName: null,
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
  [INCLUDE_DIRECTIVE_RULE_NAME]: {
    tagName: null,
    className: null
  },
  [QUATERNARY_HEADING_RULE_NAME]: {
    tagName: "h4",
    className: null
  },
  [CONTENTS_DIRECTIVE_RULE_NAME]: {
    tagName: null,
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
  [FOOTNOTES_DIRECTIVE_RULE_NAME]: {
    tagName: null,
    className: null
  },
  [PAGE_NUMBER_DIRECTIVE_RULE_NAME]: {
    tagName: "span",
    className: "page-number"
  },
  [STRONGLY_EMPHASISED_TEXT_RULE_NAME]: {
    tagName: "em",
    className: null
  }
};

export default elementMap;
