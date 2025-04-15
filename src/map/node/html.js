"use strict";

import LineHTMLNode from "../../node/html/line";
import ErrorHTMLNode from "../../node/html/error";
import ImageHTMLNode from "../../node/html/image";
import TableHTMLNode from "../../node/html/table";
import AnchorHTMLNode from "../../node/html/anchor";
import DivisionHTMLNode from "../../node/html/division";
import ParagraphHTMLNode from "../../node/html/paragraph";
import TableHeadHTMLNode from "../../node/html/tableHead";
import TableBodyHTMLNode from "../../node/html/tableBody";
import HyperlinkHTMLNode from "../../node/html/link/hyper";
import IndexItemHTMLNode from "../../node/html/item";
import IndexLinkHTMLNode from "../../node/html/link";
import IndexListHTMLNode from "../../node/html/indexList";
import EmailLinkHTMLNode from "../../node/html/link/email";
import BlockLineHTMLNode from "../../node/html/blockLine";
import PlainTextHTMLNode from "../../node/html/text/plain";
import BlockTextHTMLNode from "../../node/html/text/block";
import StrongTextHTMLNode from "../../node/html/text/strong";
import InlineTextHTMLNode from "../../node/html/text/inline";
import OrderedItemHTMLNode from "../../node/html/item/ordered";
import OrderedListHTMLNode from "../../node/html/list/ordered";
import ContentsItemHTMLNode from "../../node/html/item/contents";
import ContentsListHTMLNode from "../../node/html/list/contents";
import ContentsLinkHTMLNode from "../../node/html/link/contents";
import BlockListingHTMLNode from "../../node/html/listing/block";
import IndexHeadingHTMLNode from "../../node/html/heading";
import FootnoteLinkHTMLNode from "../../node/html/link/footnote";
import TableHeadRowHTMLNode from "../../node/html/tableHeadRow";
import TableBodyRowHTMLNode from "../../node/html/tableBodyRow";
import InlineListingHTMLNode from "../../node/html/listing/inline";
import FootnotesItemHTMLNode from "../../node/html/item/footnotes";
import FootnotesListHTMLNode from "../../node/html/list/footnotes";
import TableHeadCellHTMLNode from "../../node/html/tableHeadCell";
import TableBodyCellHTMLNode from "../../node/html/tableBodyCell";
import UnorderedItemHTMLNode from "../../node/html/item/unordered";
import UnorderedListHTMLNode from "../../node/html/list/unordered";
import PrimaryHeadingHTMLNode from "../../node/html/heading/primary";
import EmphasisedTextHTMLNode from "../../node/html/text/emphasised";
import TertiaryHeadingHTMLNode from "../../node/html/heading/tertiary";
import SecondaryHeadingHTMLNode from "../../node/html/heading/secondary";
import QuaternaryHeadingHTMLNode from "../../node/html/heading/quaternary";
import StronglyEmphasisedTextHTMLNode from "../../node/html/text/stronglyEmphasised";

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
         BLOCK_LINE_RULE_NAME,
         PLAIN_TEXT_RULE_NAME,
         BLOCK_TEXT_RULE_NAME,
         STRONG_TEXT_RULE_NAME,
         INLINE_TEXT_RULE_NAME,
         ORDERED_ITEM_RULE_NAME,
         ORDERED_LIST_RULE_NAME,
         CONTENTS_ITEM_RULE_NAME,
         CONTENTS_LIST_RULE_NAME,
         CONTENTS_LINK_RULE_NAME,
         INDEX_HEADING_RULE_NAME,
         BLOCK_LISTING_RULE_NAME,
         FOOTNOTE_LINK_RULE_NAME,
         TABLE_HEAD_ROW_RULE_NAME,
         TABLE_BODY_ROW_RULE_NAME,
         INLINE_LISTING_RULE_NAME,
         FOOTNOTES_ITEM_RULE_NAME,
         FOOTNOTES_LIST_RULE_NAME,
         UNORDERED_ITEM_RULE_NAME,
         UNORDERED_LIST_RULE_NAME,
         TABLE_HEAD_CELL_RULE_NAME,
         TABLE_BODY_CELL_RULE_NAME,
         EMPHASISED_TEXT_RULE_NAME,
         PRIMARY_HEADING_RULE_NAME,
         TERTIARY_HEADING_RULE_NAME,
         SECONDARY_HEADING_RULE_NAME,
         QUATERNARY_HEADING_RULE_NAME,
         STRONGLY_EMPHASISED_TEXT_RULE_NAME } from "../../ruleNames";

const htmlNodeMap = {
  [LINE_RULE_NAME]: LineHTMLNode,
  [ERROR_RULE_NAME]: ErrorHTMLNode,
  [IMAGE_RULE_NAME]: ImageHTMLNode,
  [TABLE_RULE_NAME]: TableHTMLNode,
  [ANCHOR_RULE_NAME]: AnchorHTMLNode,
  [DIVISION_RULE_NAME]: DivisionHTMLNode,
  [PARAGRAPH_RULE_NAME]: ParagraphHTMLNode,
  [HYPERLINK_RULE_NAME]: HyperlinkHTMLNode,
  [TABLE_HEAD_RULE_NAME]: TableHeadHTMLNode,
  [TABLE_BODY_RULE_NAME]: TableBodyHTMLNode,
  [INDEX_ITEM_RULE_NAME]: IndexItemHTMLNode,
  [INDEX_LINK_RULE_NAME]: IndexLinkHTMLNode,
  [INDEX_LIST_RULE_NAME]: IndexListHTMLNode,
  [EMAIL_LINK_RULE_NAME]: EmailLinkHTMLNode,
  [BLOCK_LINE_RULE_NAME]: BlockLineHTMLNode,
  [PLAIN_TEXT_RULE_NAME]: PlainTextHTMLNode,
  [BLOCK_TEXT_RULE_NAME]: BlockTextHTMLNode,
  [STRONG_TEXT_RULE_NAME]: StrongTextHTMLNode,
  [INLINE_TEXT_RULE_NAME]: InlineTextHTMLNode,
  [ORDERED_ITEM_RULE_NAME]: OrderedItemHTMLNode,
  [ORDERED_LIST_RULE_NAME]: OrderedListHTMLNode,
  [CONTENTS_ITEM_RULE_NAME]: ContentsItemHTMLNode,
  [CONTENTS_LIST_RULE_NAME]: ContentsListHTMLNode,
  [CONTENTS_LINK_RULE_NAME]: ContentsLinkHTMLNode,
  [INDEX_HEADING_RULE_NAME]: IndexHeadingHTMLNode,
  [BLOCK_LISTING_RULE_NAME]: BlockListingHTMLNode,
  [FOOTNOTE_LINK_RULE_NAME]: FootnoteLinkHTMLNode,
  [TABLE_HEAD_ROW_RULE_NAME]: TableHeadRowHTMLNode,
  [TABLE_BODY_ROW_RULE_NAME]: TableBodyRowHTMLNode,
  [INLINE_LISTING_RULE_NAME]: InlineListingHTMLNode,
  [FOOTNOTES_ITEM_RULE_NAME]: FootnotesItemHTMLNode,
  [FOOTNOTES_LIST_RULE_NAME]: FootnotesListHTMLNode,
  [UNORDERED_ITEM_RULE_NAME]: UnorderedItemHTMLNode,
  [UNORDERED_LIST_RULE_NAME]: UnorderedListHTMLNode,
  [TABLE_HEAD_CELL_RULE_NAME]: TableHeadCellHTMLNode,
  [TABLE_BODY_CELL_RULE_NAME]: TableBodyCellHTMLNode,
  [EMPHASISED_TEXT_RULE_NAME]: EmphasisedTextHTMLNode,
  [PRIMARY_HEADING_RULE_NAME]: PrimaryHeadingHTMLNode,
  [TERTIARY_HEADING_RULE_NAME]: TertiaryHeadingHTMLNode,
  [SECONDARY_HEADING_RULE_NAME]: SecondaryHeadingHTMLNode,
  [QUATERNARY_HEADING_RULE_NAME]: QuaternaryHeadingHTMLNode,
  [STRONGLY_EMPHASISED_TEXT_RULE_NAME]: StronglyEmphasisedTextHTMLNode
}

export const ruleNames = Object.keys(htmlNodeMap);

export default htmlNodeMap;
