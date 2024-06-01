"use strict";

import LineMarkdownNode from "./node/markdown/line";
import LinkMarkdownNode from "./node/markdown/link";
import ImageMarkdownNode from "./node/markdown/image";
import TableMarkdownNode from "./node/markdown/table";
import ErrorMarkdownNode from "./node/markdown/error";
import AnchorMarkdownNode from "./node/markdown/anchor";
import DivisionMarkdownNode from "./node/markdown/division";
import FootnoteMarkdownNode from "./node/markdown/footnote";
import ReferenceMarkdownNode from "./node/markdown/reference";
import ParagraphMarkdownNode from "./node/markdown/paragraph";
import HyperlinkMarkdownNode from "./node/markdown/hyperlink";
import TableCellMarkdownNode from "./node/markdown/tableCell";
import TableHeadMarkdownNode from "./node/markdown/tableHead";
import TableBodyMarkdownNode from "./node/markdown/tableBody";
import BlockTextMarkdownNode from "./node/markdown/blockText";
import ClassNameMarkdownNode from "./node/markdown/className";
import PlainTextMarkdownNode from "./node/markdown/plainText";
import EmailLinkMarkdownNode from "./node/markdown/emailLink";
import EndOfLineMarkdownNode from "./node/markdown/endOfLine";
import DirectivesMarkdownNode from "./node/markdown/directives";
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
import VerticalSpaceMarkdownNode from "./node/markdown/verticalSpace";
import TableHeadCellMarkdownNode from "./node/markdown/tableHeadCell";
import TableBodyCellMarkdownNode from "./node/markdown/tableBodyCell";
import EmphasisedTextMarkdownNode from "./node/markdown/emphasisedText";
import PrimaryHeadingMarkdownNode from "./node/markdown/heading/primary";
import EmptyTableCellMarkdownNode from "./node/markdown/emptyTableCell";
import EmbedDirectiveMarkdownNode from "./node/markdown/directive/embee";
import TertiaryHeadingMarkdownNode from "./node/markdown/heading/tertiary";
import OrderedListItemMarkdownNode from "./node/markdown/listItem/ordered";
import BlockListingEndMarkdownNode from "./node/markdown/blockListingEnd";
import IgnoreDirectiveMarkdownNode from "./node/markdown/directive/ignore";
import SecondaryHeadingMarkdownNode from "./node/markdown/heading/secondary";
import IncludeDirectiveMarkdownNode from "./node/markdown/directive/include";
import QuaternaryHeadingMarkdownNode from "./node/markdown/heading/quaternary";
import BlockListingStartMarkdownNode from "./node/markdown/blockListingStart";
import UnorderedListItemMarkdownNode from "./node/markdown/listItem/unordered";
import ContentsDirectiveMarkdownNode from "./node/markdown/directive/contents";
import FootnotesDirectiveMarkdownNode from "./node/markdown/directive/footnotes";
import StronglyEmphasisedTextMarkdownNode from "./node/markdown/stronglyEmphasisedText";

import { LINE_RULE_NAME,
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
         BLOCK_TEXT_RULE_NAME,
         CLASS_NAME_RULE_NAME,
         PLAIN_TEXT_RULE_NAME,
         EMAIL_LINK_RULE_NAME,
         DIRECTIVES_RULE_NAME,
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
         STRONGLY_EMPHASISED_TEXT_RULE_NAME } from "./ruleNames";

const nodeMap = {
  [LINE_RULE_NAME]: LineMarkdownNode,
  [LINK_RULE_NAME]: LinkMarkdownNode,
  [IMAGE_RULE_NAME]: ImageMarkdownNode,
  [TABLE_RULE_NAME]: TableMarkdownNode,
  [ERROR_RULE_NAME]: ErrorMarkdownNode,
  [ANCHOR_RULE_NAME]: AnchorMarkdownNode,
  [DIVISION_RULE_NAME]: DivisionMarkdownNode,
  [FOOTNOTE_RULE_NAME]: FootnoteMarkdownNode,
  [REFERENCE_RULE_NAME]: ReferenceMarkdownNode,
  [PARAGRAPH_RULE_NAME]: ParagraphMarkdownNode,
  [HYPERLINK_RULE_NAME]: HyperlinkMarkdownNode,
  [TABLE_CELL_RULE_NAME]: TableCellMarkdownNode,
  [TABLE_HEAD_RULE_NAME]: TableHeadMarkdownNode,
  [TABLE_BODY_RULE_NAME]: TableBodyMarkdownNode,
  [BLOCK_TEXT_RULE_NAME]: BlockTextMarkdownNode,
  [CLASS_NAME_RULE_NAME]: ClassNameMarkdownNode,
  [PLAIN_TEXT_RULE_NAME]: PlainTextMarkdownNode,
  [EMAIL_LINK_RULE_NAME]: EmailLinkMarkdownNode,
  [DIRECTIVES_RULE_NAME]: DirectivesMarkdownNode,
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
  [VERTICAL_SPACE_RULE_NAME]: VerticalSpaceMarkdownNode,
  [TABLE_HEAD_CELL_RULE_NAME]: TableHeadCellMarkdownNode,
  [TABLE_BODY_CELL_RULE_NAME]: TableBodyCellMarkdownNode,
  [EMPHASISED_TEXT_RULE_NAME]: EmphasisedTextMarkdownNode,
  [PRIMARY_HEADING_RULE_NAME]: PrimaryHeadingMarkdownNode,
  [EMBED_DIRECTIVE_RULE_NAME]: EmbedDirectiveMarkdownNode,
  [EMPTY_TABLE_CELL_RULE_NAME]: EmptyTableCellMarkdownNode,
  [TERTIARY_HEADING_RULE_NAME]: TertiaryHeadingMarkdownNode,
  [IGNORE_DIRECTIVE_RULE_NAME]: IgnoreDirectiveMarkdownNode,
  [ORDERED_LIST_ITEM_RULE_NAME]: OrderedListItemMarkdownNode,
  [BLOCK_LISTING_END_RULE_NAME]: BlockListingEndMarkdownNode,
  [SECONDARY_HEADING_RULE_NAME]: SecondaryHeadingMarkdownNode,
  [INCLUDE_DIRECTIVE_RULE_NAME]: IncludeDirectiveMarkdownNode,
  [QUATERNARY_HEADING_RULE_NAME]: QuaternaryHeadingMarkdownNode,
  [CONTENTS_DIRECTIVE_RULE_NAME]: ContentsDirectiveMarkdownNode,
  [BLOCK_LISTING_START_RULE_NAME]: BlockListingStartMarkdownNode,
  [UNORDERED_LIST_ITEM_RULE_NAME]: UnorderedListItemMarkdownNode,
  [FOOTNOTES_DIRECTIVE_RULE_NAME]: FootnotesDirectiveMarkdownNode,
  [STRONGLY_EMPHASISED_TEXT_RULE_NAME]: StronglyEmphasisedTextMarkdownNode
};

export default nodeMap;
