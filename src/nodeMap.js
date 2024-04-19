"use strict";

import LinkMarkdownNode from "./node/markdown/link";
import LineMarkdownNode from "./node/markdown/line";
import ImageMarkdownNode from "./node/markdown/image";
import TableMarkdownNode from "./node/markdown/table";
import ErrorMarkdownNode from "./node/markdown/error";
import AnchorMarkdownNode from "./node/markdown/anchor";
import MarkerMarkdownNode from "./node/markdown/marker";
import BulletMarkdownNode from "./node/markdown/bullet";
import ImportMarkdownNode from "./node/markdown/import";
import ImportsMarkdownNode from "./node/markdown/imports";
import ContentsMarkdownNode from "./node/markdown/contents";
import DivisionMarkdownNode from "./node/markdown/division";
import FootnoteMarkdownNode from "./node/markdown/footnote";
import ReferenceMarkdownNode from "./node/markdown/reference";
import ParagraphMarkdownNode from "./node/markdown/paragraph";
import HyperlinkMarkdownNode from "./node/markdown/hyperlink";
import LineBreakMarkdownNode from "./node/markdown/lineBreak";
import TableCellMarkdownNode from "./node/markdown/tableCell";
import TableHeadMarkdownNode from "./node/markdown/tableHead";
import TableBodyMarkdownNode from "./node/markdown/tableBody";
import BlockTextMarkdownNode from "./node/markdown/blockText";
import ClassNameMarkdownNode from "./node/markdown/className";
import PlainTextMarkdownNode from "./node/markdown/plainText";
import EmailLinkMarkdownNode from "./node/markdown/emailLink";
import EndOfLineMarkdownNode from "./node/markdown/endOfLine";
import MarkedTextMarkdownNode from "./node/markdown/markedText";
import InlineTextMarkdownNode from "./node/markdown/inlineText";
import StrongTextMarkdownNode from "./node/markdown/strongText";
import SubDivisionMarkdownNode from "./node/markdown/subDivision";
import OrderedListMarkdownNode from "./node/markdown/orderedList";
import BlockListingMarkdownNode from "./node/markdown/blockListing";
import FootnoteItemMarkdownNode from "./node/markdown/footnoteItem";
import TableHeadRowMarkdownNode from "./node/markdown/tableHeadRow";
import TableBodyRowMarkdownNode from "./node/markdown/tableBodyRow";
import InlineListingMarkdownNode from "./node/markdown/inlineListing";
import UnorderedListMarkdownNode from "./node/markdown/unorderedList";
import FootnotesListMarkdownNode from "./node/markdown/footnotesList";
import TableHeadCellMarkdownNode from "./node/markdown/tableHeadCell";
import TableBodyCellMarkdownNode from "./node/markdown/tableBodyCell";
import TableSeparatorMarkdownNode from "./node/markdown/tableSeparator";
import EmphasisedTextMarkdownNode from "./node/markdown/emphasisedText";
import PrimaryHeadingMarkdownNode from "./node/markdown/heading/primary";
import EmptyTableCellMarkdownNode from "./node/markdown/emptyTableCell";
import TertiaryHeadingMarkdownNode from "./node/markdown/heading/tertiary";
import OrderedListItemMarkdownNode from "./node/markdown/orderedListItem";
import BlockListingEndMarkdownNode from "./node/markdown/blockListingEnd";
import SecondaryHeadingMarkdownNode from "./node/markdown/heading/secondary";
import QuaternaryHeadingMarkdownNode from "./node/markdown/heading/quaternary";
import BlockListingStartMarkdownNode from "./node/markdown/blockListingStart";
import UnorderedListItemMarkdownNode from "./node/markdown/unorderedListItem";
import StronglyEmphasisedTextMarkdownNode from "./node/markdown/stronglyEmphasisedText";

import { LINK_RULE_NAME,
         LINE_RULE_NAME,
         IMAGE_RULE_NAME,
         TABLE_RULE_NAME,
         ERROR_RULE_NAME,
         ANCHOR_RULE_NAME,
         MARKER_RULE_NAME,
         BULLET_RULE_NAME,
         IMPORT_RULE_NAME,
         IMPORTS_RULE_NAME,
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
         EMPTY_TABLE_CELL_RULE_NAME,
         TERTIARY_HEADING_RULE_NAME,
         ORDERED_LIST_ITEM_RULE_NAME,
         BLOCK_LISTING_END_RULE_NAME,
         SECONDARY_HEADING_RULE_NAME,
         QUATERNARY_HEADING_RULE_NAME,
         BLOCK_LISTING_START_RULE_NAME,
         UNORDERED_LIST_ITEM_RULE_NAME,
         STRONGLY_EMPHASISED_TEXT_RULE_NAME } from "./ruleNames";

const nodeMap = {
  [LINK_RULE_NAME]: LinkMarkdownNode,
  [LINE_RULE_NAME]: LineMarkdownNode,
  [IMAGE_RULE_NAME]: ImageMarkdownNode,
  [TABLE_RULE_NAME]: TableMarkdownNode,
  [ERROR_RULE_NAME]: ErrorMarkdownNode,
  [ANCHOR_RULE_NAME]: AnchorMarkdownNode,
  [MARKER_RULE_NAME]: MarkerMarkdownNode,
  [BULLET_RULE_NAME]: BulletMarkdownNode,
  [IMPORT_RULE_NAME]: ImportMarkdownNode,
  [IMPORTS_RULE_NAME]: ImportsMarkdownNode,
  [CONTENTS_RULE_NAME]: ContentsMarkdownNode,
  [FOOTNOTE_RULE_NAME]: FootnoteMarkdownNode,
  [DIVISION_RULE_NAME]: DivisionMarkdownNode,
  [REFERENCE_RULE_NAME]: ReferenceMarkdownNode,
  [PARAGRAPH_RULE_NAME]: ParagraphMarkdownNode,
  [HYPERLINK_RULE_NAME]: HyperlinkMarkdownNode,
  [LINE_BREAK_RULE_NAME]: LineBreakMarkdownNode,
  [TABLE_CELL_RULE_NAME]: TableCellMarkdownNode,
  [TABLE_HEAD_RULE_NAME]: TableHeadMarkdownNode,
  [TABLE_BODY_RULE_NAME]: TableBodyMarkdownNode,
  [BLOCK_TEXT_RULE_NAME]: BlockTextMarkdownNode,
  [CLASS_NAME_RULE_NAME]: ClassNameMarkdownNode,
  [PLAIN_TEXT_RULE_NAME]: PlainTextMarkdownNode,
  [EMAIL_LINK_RULE_NAME]: EmailLinkMarkdownNode,
  [END_OF_LINE_RULE_NAME]: EndOfLineMarkdownNode,
  [MARKED_TEXT_RULE_NAME]: MarkedTextMarkdownNode,
  [INLINE_TEXT_RULE_NAME]: InlineTextMarkdownNode,
  [STRONG_TEXT_RULE_NAME]: StrongTextMarkdownNode,
  [SUB_DIVISION_RULE_NAME]: SubDivisionMarkdownNode,
  [ORDERED_LIST_RULE_NAME]: OrderedListMarkdownNode,
  [BLOCK_LISTING_RULE_NAME]: BlockListingMarkdownNode,
  [FOOTNOTE_ITEM_RULE_NAME]: FootnoteItemMarkdownNode,
  [TABLE_HEAD_ROW_RULE_NAME]: TableHeadRowMarkdownNode,
  [TABLE_BODY_ROW_RULE_NAME]: TableBodyRowMarkdownNode,
  [INLINE_LISTING_RULE_NAME]: InlineListingMarkdownNode,
  [UNORDERED_LIST_RULE_NAME]: UnorderedListMarkdownNode,
  [FOOTNOTES_LIST_RULE_NAME]: FootnotesListMarkdownNode,
  [TABLE_HEAD_CELL_RULE_NAME]: TableHeadCellMarkdownNode,
  [TABLE_BODY_CELL_RULE_NAME]: TableBodyCellMarkdownNode,
  [TABLE_SEPARATOR_RULE_NAME]: TableSeparatorMarkdownNode,
  [EMPHASISED_TEXT_RULE_NAME]: EmphasisedTextMarkdownNode,
  [PRIMARY_HEADING_RULE_NAME]: PrimaryHeadingMarkdownNode,
  [EMPTY_TABLE_CELL_RULE_NAME]: EmptyTableCellMarkdownNode,
  [TERTIARY_HEADING_RULE_NAME]: TertiaryHeadingMarkdownNode,
  [ORDERED_LIST_ITEM_RULE_NAME]: OrderedListItemMarkdownNode,
  [BLOCK_LISTING_END_RULE_NAME]: BlockListingEndMarkdownNode,
  [SECONDARY_HEADING_RULE_NAME]: SecondaryHeadingMarkdownNode,
  [QUATERNARY_HEADING_RULE_NAME]: QuaternaryHeadingMarkdownNode,
  [BLOCK_LISTING_START_RULE_NAME]: BlockListingStartMarkdownNode,
  [UNORDERED_LIST_ITEM_RULE_NAME]: UnorderedListItemMarkdownNode,
  [STRONGLY_EMPHASISED_TEXT_RULE_NAME]: StronglyEmphasisedTextMarkdownNode
};

export default nodeMap;
