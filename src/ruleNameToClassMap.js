"use strict";

import LineHTMLNode from "./node/html/line";
import ErrorHTMLNode from "./node/html/error";
import ImageHTMLNode from "./node/html/image";
import CommaHTMLNode from "./node/html/comma";
import AnchorHTMLNode from "./node/html/anchor";
import TableBodyHTMLNode from "./node/html/tableBody";
import TableCellHTMLNode from "./node/html/tableCell";
import HyperlinkHTMLNode from "./node/html/hyperlink";
import IndexItemHTMLNode from "./node/html/indexItem";
import IndexLinkHTMLNode from "./node/html/indexLink";
import IndexListHTMLNode from "./node/html/indexList";
import EmailLinkHTMLNode from "./node/html/emailLink";
import ClassNameHTMLNode from "./node/html/className";
import BlockLineHTMLNode from "./node/html/blockLine";
import EndOfLineHTMLNode from "./node/html/endOfLine";
import StrongTextHTMLNode from "./node/html/strongText";
import InlineTextHTMLNode from "./node/html/inlineText";
import OrderedItemHTMLNode from "./node/html/item/ordered";
import ContentsLinkHTMLNode from "./node/html/contentsLink";
import BlockListingHTMLNode from "./node/html/blockListing";
import FootnoteLinkHTMLNode from "./node/html/footnoteLink";
import TableBodyCellHTMLNode from "./node/html/tableBodyCell";
import InlineListingHTMLNode from "./node/html/inlineListing";
import FootnotesListHTMLNode from "./node/html/footnotesList";
import TableHeadCellHTMLNode from "./node/html/tableHeadCell";
import EmptyTableCellHTMLNode from "./node/html/emptyTableCell";
import BlockListingHEndHTMLNode from "./node/html/blockListingEnd";
import BlockListingHStartHTMLNode from "./node/html/blockListingStart";
import PageNumberDirectiveHTMLNode from "./node/html/directive/pageNumber";
import StronglyEmphasisedTextHTMLNode from "./node/html/stronglyEmphasisedText";

import { LINE_RULE_NAME,
         ERROR_RULE_NAME,
         IMAGE_RULE_NAME,
         COMMA_RULE_NAME,
         ANCHOR_RULE_NAME,
         HYPERLINK_RULE_NAME,
         TABLE_BODY_RULE_NAME,
         TABLE_CELL_RULE_NAME,
         INDEX_ITEM_RULE_NAME,
         INDEX_LINK_RULE_NAME,
         INDEX_LIST_RULE_NAME,
         EMAIL_LINK_RULE_NAME,
         CLASS_NAME_RULE_NAME,
         BLOCK_LINE_RULE_NAME,
         END_OF_LINE_RULE_NAME,
         STRONG_TEXT_RULE_NAME,
         INLINE_TEXT_RULE_NAME,
         ORDERED_ITEM_RULE_NAME,
         CONTENTS_LINK_RULE_NAME,
         BLOCK_LISTING_RULE_NAME,
         FOOTNOTE_LINK_RULE_NAME,
         INLINE_LISTING_RULE_NAME,
         FOOTNOTES_LIST_RULE_NAME,
         TABLE_HEAD_CELL_RULE_NAME,
         TABLE_BODY_CELL_RULE_NAME,
         EMPTY_TABLE_CELL_RULE_NAME,
         BLOCK_LISTING_END_RULE_NAME,
         BLOCK_LISTING_START_RULE_NAME,
         PAGE_NUMBER_DIRECTIVE_RULE_NAME,
         STRONGLY_EMPHASISED_TEXT_RULE_NAME } from "./ruleNames";

const ruleNameToClassMap = {
  [LINE_RULE_NAME]: LineHTMLNode,
  [ERROR_RULE_NAME]: ErrorHTMLNode,
  [IMAGE_RULE_NAME]: ImageHTMLNode,
  [COMMA_RULE_NAME]: CommaHTMLNode,
  [ANCHOR_RULE_NAME]: AnchorHTMLNode,
  [HYPERLINK_RULE_NAME]: HyperlinkHTMLNode,
  [TABLE_BODY_RULE_NAME]: TableBodyHTMLNode,
  [TABLE_CELL_RULE_NAME]: TableCellHTMLNode,
  [INDEX_ITEM_RULE_NAME]: IndexItemHTMLNode,
  [INDEX_LINK_RULE_NAME]: IndexLinkHTMLNode,
  [INDEX_LIST_RULE_NAME]: IndexListHTMLNode,
  [EMAIL_LINK_RULE_NAME]: EmailLinkHTMLNode,
  [CLASS_NAME_RULE_NAME]: ClassNameHTMLNode,
  [BLOCK_LINE_RULE_NAME]: BlockLineHTMLNode,
  [END_OF_LINE_RULE_NAME]: EndOfLineHTMLNode,
  [STRONG_TEXT_RULE_NAME]: StrongTextHTMLNode,
  [INLINE_TEXT_RULE_NAME]: InlineTextHTMLNode,
  [ORDERED_ITEM_RULE_NAME]: OrderedItemHTMLNode,
  [CONTENTS_LINK_RULE_NAME]: ContentsLinkHTMLNode,
  [BLOCK_LISTING_RULE_NAME]: BlockListingHTMLNode,
  [FOOTNOTE_LINK_RULE_NAME]: FootnoteLinkHTMLNode,
  [INLINE_LISTING_RULE_NAME]: InlineListingHTMLNode,
  [FOOTNOTES_LIST_RULE_NAME]: FootnotesListHTMLNode,
  [TABLE_HEAD_CELL_RULE_NAME]: TableHeadCellHTMLNode,
  [TABLE_BODY_CELL_RULE_NAME]: TableBodyCellHTMLNode,
  [EMPTY_TABLE_CELL_RULE_NAME]: EmptyTableCellHTMLNode,
  [BLOCK_LISTING_END_RULE_NAME]: BlockListingHEndHTMLNode,
  [BLOCK_LISTING_START_RULE_NAME]: BlockListingHStartHTMLNode,
  [PAGE_NUMBER_DIRECTIVE_RULE_NAME]: PageNumberDirectiveHTMLNode,
  [STRONGLY_EMPHASISED_TEXT_RULE_NAME]: StronglyEmphasisedTextHTMLNode
}

export default ruleNameToClassMap;
