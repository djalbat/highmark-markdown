"use strict";

export const LINE_RULE_NAME = "line";
export const LINK_RULE_NAME = "link";
export const IMAGE_RULE_NAME = "image";
export const TABLE_RULE_NAME = "table";
export const ERROR_RULE_NAME = "error";
export const ANCHOR_RULE_NAME = "anchor";
export const DIVISION_RULE_NAME = "division";
export const FOOTNOTE_RULE_NAME = "footnote";
export const REFERENCE_RULE_NAME = "reference";
export const PARAGRAPH_RULE_NAME = "paragraph";
export const HYPERLINK_RULE_NAME = "hyperlink";
export const TABLE_CELL_RULE_NAME = "tableCell";
export const TABLE_HEAD_RULE_NAME = "tableHead";
export const TABLE_BODY_RULE_NAME = "tableBody";
export const BLOCK_LINE_RULE_NAME = "blockLine";
export const CLASS_NAME_RULE_NAME = "className";
export const PLAIN_TEXT_RULE_NAME = "plainText";
export const EMAIL_LINK_RULE_NAME = "emailLink";
export const DIRECTIVES_RULE_NAME = "directives";
export const END_OF_LINE_RULE_NAME = "endOfLine";
export const INLINE_TEXT_RULE_NAME = "inlineText";
export const STRONG_TEXT_RULE_NAME = "strongText";
export const SUB_DIVISION_RULE_NAME = "subDivision";
export const ORDERED_LIST_RULE_NAME = "orderedList";
export const BLOCK_LISTING_RULE_NAME = "blockListing";
export const CONTENTS_LINK_RULE_NAME = "contentsLink";
export const CONTENTS_ITEM_RULE_NAME = "contentsItem";
export const CONTENTS_LIST_RULE_NAME = "contentsList";
export const FOOTNOTE_ITEM_RULE_NAME = "footnoteItem";
export const TABLE_HEAD_ROW_RULE_NAME = "tableHeadRow";
export const TABLE_BODY_ROW_RULE_NAME = "tableBodyRow";
export const INLINE_LISTING_RULE_NAME = "inlineListing";
export const UNORDERED_LIST_RULE_NAME = "unorderedList";
export const FOOTNOTES_LIST_RULE_NAME = "footnotesList";
export const VERTICAL_SPACE_RULE_NAME = "verticalSpace";
export const TABLE_HEAD_CELL_RULE_NAME = "tableHeadCell";
export const TABLE_BODY_CELL_RULE_NAME = "tableBodyCell";
export const EMPHASISED_TEXT_RULE_NAME = "emphasisedText";
export const PRIMARY_HEADING_RULE_NAME = "primaryHeading";
export const EMBED_DIRECTIVE_RULE_NAME = "embedDirective";
export const EMPTY_TABLE_CELL_RULE_NAME = "emptyTableCell";
export const TERTIARY_HEADING_RULE_NAME = "tertiaryHeading";
export const IGNORE_DIRECTIVE_RULE_NAME = "ignoreDirective";
export const ORDERED_LIST_ITEM_RULE_NAME = "orderedListItem";
export const BLOCK_LISTING_END_RULE_NAME = "blockListingEnd";
export const SECONDARY_HEADING_RULE_NAME = "secondaryHeading";
export const INCLUDE_DIRECTIVE_RULE_NAME = "includeDirective";
export const QUATERNARY_HEADING_RULE_NAME = "quaternaryHeading";
export const CONTENTS_DIRECTIVE_RULE_NAME = "contentsDirective";
export const BLOCK_LISTING_START_RULE_NAME = "blockListingStart";
export const UNORDERED_LIST_ITEM_RULE_NAME = "unorderedListItem";
export const FOOTNOTES_DIRECTIVE_RULE_NAME = "footnotesDirective";
export const STRONGLY_EMPHASISED_TEXT_RULE_NAME = "stronglyEmphasisedText";

const ruleNames = {
  LINE_RULE_NAME,
  LINK_RULE_NAME,
  IMAGE_RULE_NAME,
  TABLE_RULE_NAME,
  ERROR_RULE_NAME,
  ANCHOR_RULE_NAME,
  DIVISION_RULE_NAME,
  FOOTNOTE_RULE_NAME,
  REFERENCE_RULE_NAME,
  PARAGRAPH_RULE_NAME,
  HYPERLINK_RULE_NAME,
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
  BLOCK_LISTING_RULE_NAME,
  CONTENTS_LINK_RULE_NAME,
  CONTENTS_ITEM_RULE_NAME,
  CONTENTS_LIST_RULE_NAME,
  FOOTNOTE_ITEM_RULE_NAME,
  TABLE_HEAD_ROW_RULE_NAME,
  TABLE_BODY_ROW_RULE_NAME,
  INLINE_LISTING_RULE_NAME,
  UNORDERED_LIST_RULE_NAME,
  FOOTNOTES_LIST_RULE_NAME,
  VERTICAL_SPACE_RULE_NAME,
  TABLE_HEAD_CELL_RULE_NAME,
  TABLE_BODY_CELL_RULE_NAME,
  EMPHASISED_TEXT_RULE_NAME,
  PRIMARY_HEADING_RULE_NAME,
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
  STRONGLY_EMPHASISED_TEXT_RULE_NAME
};

export default ruleNames;
