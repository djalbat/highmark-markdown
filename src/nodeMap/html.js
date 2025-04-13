"use strict";

import LineHTMLNode from "../node/html/line";
import ErrorHTMLNode from "../node/html/error";
import ImageHTMLNode from "../node/html/image";
import TableHTMLNode from "../node/html/table";
import AnchorHTMLNode from "../node/html/anchor";
import DivisionHTMLNode from "../node/html/division";
import BlockEndHTMLNode from "../node/html/blockEnd";
import ParagraphHTMLNode from "../node/html/paragraph";
import TableHeadHTMLNode from "../node/html/tableHead";
import TableBodyHTMLNode from "../node/html/tableBody";
import HyperlinkHTMLNode from "../node/html/hyperlink";
import IndexItemHTMLNode from "../node/html/indexItem";
import IndexLinkHTMLNode from "../node/html/indexLink";
import IndexListHTMLNode from "../node/html/indexList";
import EmailLinkHTMLNode from "../node/html/emailLink";
import ClassNameHTMLNode from "../node/html/className";
import BlockLineHTMLNode from "../node/html/blockLine";
import PlainTextHTMLNode from "../node/html/text/plain";
import BlockTextHTMLNode from "../node/html/text/block";
import StrongTextHTMLNode from "../node/html/strongText";
import InlineTextHTMLNode from "../node/html/inlineText";
import BlockHStartHTMLNode from "../node/html/blockStart";
import OrderedItemHTMLNode from "../node/html/item/ordered";
import OrderedListHTMLNode from "../node/html/list/ordered";
import ContentsListHTMLNode from "../node/html/contentsList";
import ContentsLinkHTMLNode from "../node/html/contentsLink";
import BlockListingHTMLNode from "../node/html/blockListing";
import FootnoteLinkHTMLNode from "../node/html/footnoteLink";
import TableBodyCellHTMLNode from "../node/html/tableBodyCell";
import InlineListingHTMLNode from "../node/html/inlineListing";
import FootnotesListHTMLNode from "../node/html/footnotesList";
import TableHeadCellHTMLNode from "../node/html/tableHeadCell";
import UnorderedItemHTMLNode from "../node/html/item/unordered";
import UnorderedListHTMLNode from "../node/html/list/unordered";
import PrimaryHeadingHTMLNode from "../node/html/heading/primary";
import EmptyTableCellHTMLNode from "../node/html/emptyTableCell";
import EmphasisedTextHTMLNode from "../node/html/emphasisedText";
import TertiaryHeadingHTMLNode from "../node/html/heading/tertiary";
import SecondaryHeadingHTMLNode from "../node/html/heading/secondary";
import QuaternaryHeadingHTMLNode from "../node/html/heading/quaternary";
import StronglyEmphasisedTextHTMLNode from "../node/html/stronglyEmphasisedText";

import { LINE_RULE_NAME,
         ERROR_RULE_NAME,
         IMAGE_RULE_NAME,
         TABLE_RULE_NAME,
         ANCHOR_RULE_NAME,
         DIVISION_RULE_NAME,
         PARAGRAPH_RULE_NAME,
         HYPERLINK_RULE_NAME,
         TABLE_HEAD_RULE_NAME,
         TABLE_BODY_RULE_NAME,
         INDEX_ITEM_RULE_NAME,
         INDEX_LINK_RULE_NAME,
         INDEX_LIST_RULE_NAME,
         EMAIL_LINK_RULE_NAME,
         CLASS_NAME_RULE_NAME,
         BLOCK_LINE_RULE_NAME,
         PLAIN_TEXT_RULE_NAME,
         BLOCK_TEXT_RULE_NAME,
         STRONG_TEXT_RULE_NAME,
         INLINE_TEXT_RULE_NAME,
         ORDERED_ITEM_RULE_NAME,
         ORDERED_LIST_RULE_NAME,
         CONTENTS_LIST_RULE_NAME,
         CONTENTS_LINK_RULE_NAME,
         BLOCK_LISTING_RULE_NAME,
         FOOTNOTE_LINK_RULE_NAME,
         INLINE_LISTING_RULE_NAME,
         FOOTNOTES_LIST_RULE_NAME,
         UNORDERED_ITEM_RULE_NAME,
         UNORDERED_LIST_RULE_NAME,
         TABLE_HEAD_CELL_RULE_NAME,
         TABLE_BODY_CELL_RULE_NAME,
         EMPHASISED_TEXT_RULE_NAME,
         PRIMARY_HEADING_RULE_NAME,
         EMPTY_TABLE_CELL_RULE_NAME,
         TERTIARY_HEADING_RULE_NAME,
         BLOCK_END_RULE_NAME,
         SECONDARY_HEADING_RULE_NAME,
         QUATERNARY_HEADING_RULE_NAME,
         BLOCK_START_RULE_NAME,
         STRONGLY_EMPHASISED_TEXT_RULE_NAME } from "../ruleNames";

const htmlNodeMap = {
  [LINE_RULE_NAME]: LineHTMLNode,
  [ERROR_RULE_NAME]: ErrorHTMLNode,
  [IMAGE_RULE_NAME]: ImageHTMLNode,
  [TABLE_RULE_NAME]: TableHTMLNode,
  [ANCHOR_RULE_NAME]: AnchorHTMLNode,
  [DIVISION_RULE_NAME]: DivisionHTMLNode,
  [PARAGRAPH_RULE_NAME]: ParagraphHTMLNode,
  [HYPERLINK_RULE_NAME]: HyperlinkHTMLNode,
  [BLOCK_END_RULE_NAME]: BlockEndHTMLNode,
  [TABLE_HEAD_RULE_NAME]: TableHeadHTMLNode,
  [TABLE_BODY_RULE_NAME]: TableBodyHTMLNode,
  [INDEX_ITEM_RULE_NAME]: IndexItemHTMLNode,
  [INDEX_LINK_RULE_NAME]: IndexLinkHTMLNode,
  [INDEX_LIST_RULE_NAME]: IndexListHTMLNode,
  [EMAIL_LINK_RULE_NAME]: EmailLinkHTMLNode,
  [CLASS_NAME_RULE_NAME]: ClassNameHTMLNode,
  [BLOCK_LINE_RULE_NAME]: BlockLineHTMLNode,
  [PLAIN_TEXT_RULE_NAME]: PlainTextHTMLNode,
  [BLOCK_TEXT_RULE_NAME]: BlockTextHTMLNode,
  [STRONG_TEXT_RULE_NAME]: StrongTextHTMLNode,
  [INLINE_TEXT_RULE_NAME]: InlineTextHTMLNode,
  [BLOCK_START_RULE_NAME]: BlockHStartHTMLNode,
  [ORDERED_ITEM_RULE_NAME]: OrderedItemHTMLNode,
  [ORDERED_LIST_RULE_NAME]: OrderedListHTMLNode,
  [CONTENTS_LIST_RULE_NAME]: ContentsListHTMLNode,
  [CONTENTS_LINK_RULE_NAME]: ContentsLinkHTMLNode,
  [BLOCK_LISTING_RULE_NAME]: BlockListingHTMLNode,
  [FOOTNOTE_LINK_RULE_NAME]: FootnoteLinkHTMLNode,
  [INLINE_LISTING_RULE_NAME]: InlineListingHTMLNode,
  [FOOTNOTES_LIST_RULE_NAME]: FootnotesListHTMLNode,
  [UNORDERED_ITEM_RULE_NAME]: UnorderedItemHTMLNode,
  [UNORDERED_LIST_RULE_NAME]: UnorderedListHTMLNode,
  [TABLE_HEAD_CELL_RULE_NAME]: TableHeadCellHTMLNode,
  [TABLE_BODY_CELL_RULE_NAME]: TableBodyCellHTMLNode,
  [EMPHASISED_TEXT_RULE_NAME]: EmphasisedTextHTMLNode,
  [PRIMARY_HEADING_RULE_NAME]: PrimaryHeadingHTMLNode,
  [EMPTY_TABLE_CELL_RULE_NAME]: EmptyTableCellHTMLNode,
  [TERTIARY_HEADING_RULE_NAME]: TertiaryHeadingHTMLNode,
  [SECONDARY_HEADING_RULE_NAME]: SecondaryHeadingHTMLNode,
  [QUATERNARY_HEADING_RULE_NAME]: QuaternaryHeadingHTMLNode,
  [STRONGLY_EMPHASISED_TEXT_RULE_NAME]: StronglyEmphasisedTextHTMLNode
}

export const ruleNames = Object.keys(htmlNodeMap);

export default htmlNodeMap;
