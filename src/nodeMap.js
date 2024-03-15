"use strict";

import URLMarkdownNode from "./node/markdown/url";
import TextMarkdownNode from "./node/markdown/text";
import LinkMarkdownNode from "./node/markdown/link";
import LineMarkdownNode from "./node/markdown/line";
import ImageMarkdownNode from "./node/markdown/image";
import TableMarkdownNode from "./node/markdown/table";
import ErrorMarkdownNode from "./node/markdown/error";
import AnchorMarkdownNode from "./node/markdown/anchor";
import DocumentMarkdownNode from "./node/markdown/document";
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
import EndOfLineMarkdownNode from "./node/markdown/endOfLine";
import InlineTextMarkdownNode from "./node/markdown/inlineText";
import StrongTextMarkdownNode from "./node/markdown/strongText";
import OrderedListMarkdownNode from "./node/markdown/orderedList";
import BlockListingMarkdownNode from "./node/markdown/blockListing";
import FootnoteItemMarkdownNode from "./node/markdown/footnoteItem";
import TableHeadRowMarkdownNode from "./node/markdown/tableHeadRow";
import TableBodyRowMarkdownNode from "./node/markdown/tableBodyRow";
import InlineListingMarkdownNode from "./node/markdown/inlineListing";
import VerticalSpaceMarkdownNode from "./node/markdown/verticalSpace";
import UnorderedListMarkdownNode from "./node/markdown/unorderedList";
import FootnotesListMarkdownNode from "./node/markdown/footnotesList";
import TableHeadCellMarkdownNode from "./node/markdown/tableHeadCell";
import TableBodyCellMarkdownNode from "./node/markdown/tableBodyCell";
import TableSeparatorMarkdownNode from "./node/markdown/tableSeparator";
import EmphasisedTextMarkdownNode from "./node/markdown/emphasisedText";
import PrimaryHeadingMarkdownNode from "./node/markdown/primaryHeading";
import EmptyTableCellMarkdownNode from "./node/markdown/emptyTableCell";
import TertiaryHeadingMarkdownNode from "./node/markdown/tertiaryHeading";
import OrderedListItemMarkdownNode from "./node/markdown/orderedListItem";
import BlockListingEndMarkdownNode from "./node/markdown/blockListingEnd";
import SecondaryHeadingMarkdownNode from "./node/markdown/secondaryHeading";
import QuaternaryHeadingMarkdownNode from "./node/markdown/quaternaryHeading";
import BlockListingStartMarkdownNode from "./node/markdown/blockListingStart";
import UnorderedListItemMarkdownNode from "./node/markdown/unorderedListItem";
import StronglyEmphasisedTextMarkdownNode from "./node/markdown/stronglyEmphasisedText";

import { URL_RULE_NAME,
         TEXT_RULE_NAME,
         LINK_RULE_NAME,
         LINE_RULE_NAME,
         IMAGE_RULE_NAME,
         TABLE_RULE_NAME,
         ERROR_RULE_NAME,
         ANCHOR_RULE_NAME,
         DOCUMENT_RULE_NAME,
         FOOTNOTE_RULE_NAME,
         REFERENCE_RULE_NAME,
         PARAGRAPH_RULE_NAME,
         HYPERLINK_RULE_NAME,
         LINE_BREAK_RULE_NAME,
         TABLE_CELL_RULE_NAME,
         TABLE_HEAD_RULE_NAME,
         TABLE_BODY_RULE_NAME,
         BLOCK_TEXT_RULE_NAME,
         CLASS_NAME_RULE_NAME,
         END_OF_LINE_RULE_NAME,
         INLINE_TEXT_RULE_NAME,
         STRONG_TEXT_RULE_NAME,
         ORDERED_LIST_RULE_NAME,
         BLOCK_LISTING_RULE_NAME,
         FOOTNOTE_ITEM_RULE_NAME,
         TABLE_HEAD_ROW_RULE_NAME,
         TABLE_BODY_ROW_RULE_NAME,
         INLINE_LISTING_RULE_NAME,
         VERTICAL_SPACE_RULE_NAME,
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
  [URL_RULE_NAME]: URLMarkdownNode,
  [TEXT_RULE_NAME]: TextMarkdownNode,
  [LINK_RULE_NAME]: LinkMarkdownNode,
  [LINE_RULE_NAME]: LineMarkdownNode,
  [IMAGE_RULE_NAME]: ImageMarkdownNode,
  [TABLE_RULE_NAME]: TableMarkdownNode,
  [ERROR_RULE_NAME]: ErrorMarkdownNode,
  [ANCHOR_RULE_NAME]: AnchorMarkdownNode,
  [DOCUMENT_RULE_NAME]: DocumentMarkdownNode,
  [FOOTNOTE_RULE_NAME]: FootnoteMarkdownNode,
  [REFERENCE_RULE_NAME]: ReferenceMarkdownNode,
  [PARAGRAPH_RULE_NAME]: ParagraphMarkdownNode,
  [HYPERLINK_RULE_NAME]: HyperlinkMarkdownNode,
  [LINE_BREAK_RULE_NAME]: LineBreakMarkdownNode,
  [TABLE_CELL_RULE_NAME]: TableCellMarkdownNode,
  [TABLE_HEAD_RULE_NAME]: TableHeadMarkdownNode,
  [TABLE_BODY_RULE_NAME]: TableBodyMarkdownNode,
  [BLOCK_TEXT_RULE_NAME]: BlockTextMarkdownNode,
  [CLASS_NAME_RULE_NAME]: ClassNameMarkdownNode,
  [END_OF_LINE_RULE_NAME]: EndOfLineMarkdownNode,
  [INLINE_TEXT_RULE_NAME]: InlineTextMarkdownNode,
  [STRONG_TEXT_RULE_NAME]: StrongTextMarkdownNode,
  [ORDERED_LIST_RULE_NAME]: OrderedListMarkdownNode,
  [BLOCK_LISTING_RULE_NAME]: BlockListingMarkdownNode,
  [FOOTNOTE_ITEM_RULE_NAME]: FootnoteItemMarkdownNode,
  [TABLE_HEAD_ROW_RULE_NAME]: TableHeadRowMarkdownNode,
  [TABLE_BODY_ROW_RULE_NAME]: TableBodyRowMarkdownNode,
  [INLINE_LISTING_RULE_NAME]: InlineListingMarkdownNode,
  [VERTICAL_SPACE_RULE_NAME]: VerticalSpaceMarkdownNode,
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
