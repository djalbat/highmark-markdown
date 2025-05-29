"use strict";

import LineHTMLNode from "../../node/html/line";
import ErrorHTMLNode from "../../node/html/error";
import ImageHTMLNode from "../../node/html/image";
import TableHTMLNode from "../../node/html/table";
import TopmostHTMLNode from "../../node/html/topmost";
import DivisionHTMLNode from "../../node/html/division";
import FootnoteHTMLNode from "../../node/html/footnote";
import ReferenceHTMLNode from "../../node/html/reference";
import ParagraphHTMLNode from "../../node/html/paragraph";
import TableHeadHTMLNode from "../../node/html/tableHead";
import TableBodyHTMLNode from "../../node/html/tableBody";
import HyperlinkHTMLNode from "../../node/html/link/hyper";
import IndexItemHTMLNode from "../../node/html/item/index";
import IndexLinkHTMLNode from "../../node/html/link/index";
import IndexListHTMLNode from "../../node/html/list/index";
import EmailLinkHTMLNode from "../../node/html/link/email";
import BlockLineHTMLNode from "../../node/html/line/block";
import PlainTextHTMLNode from "../../node/html/text/plain";
import BlockTextHTMLNode from "../../node/html/text/block";
import PageNumberHTMLNode from "../../node/html/pageNumber";
import StrongTextHTMLNode from "../../node/html/text/strong";
import InlineTextHTMLNode from "../../node/html/text/inline";
import OrderedItemHTMLNode from "../../node/html/item/ordered";
import OrderedListHTMLNode from "../../node/html/list/ordered";
import ContentsItemHTMLNode from "../../node/html/item/contents";
import ContentsListHTMLNode from "../../node/html/list/contents";
import ContentsLinkHTMLNode from "../../node/html/link/contents";
import BlockListingHTMLNode from "../../node/html/listing/block";
import IndexHeadingHTMLNode from "../../node/html/heading/index";
import TableHeadRowHTMLNode from "../../node/html/tableHeadRow";
import TableBodyRowHTMLNode from "../../node/html/tableBodyRow";
import FootnoteLinkHTMLNode from "../../node/html/link/footnote";
import FootnoteItemHTMLNode from "../../node/html/item/footnote";
import TableHeadCellHTMLNode from "../../node/html/tableHeadCell";
import TableBodyCellHTMLNode from "../../node/html/tableBodyCell";
import FootnotesListHTMLNode from "../../node/html/list/footnotes";
import InlineListingHTMLNode from "../../node/html/listing/inline";
import UnorderedItemHTMLNode from "../../node/html/item/unordered";
import UnorderedListHTMLNode from "../../node/html/list/unordered";
import PrimaryHeadingHTMLNode from "../../node/html/heading/primary";
import EmphasisedTextHTMLNode from "../../node/html/text/emphasised";
import IndexDirectiveHTMLNode from "../../node/html/directive/index";
import TertiaryHeadingHTMLNode from "../../node/html/heading/tertiary";
import SecondaryHeadingHTMLNode from "../../node/html/heading/secondary";
import QuaternaryHeadingHTMLNode from "../../node/html/heading/quaternary";
import ContentsDirectiveHTMLNode from "../../node/html/directive/contents";
import FootnotesDirectiveHTMLNode from "../../node/html/directive/footnotes";
import PageNumberDirectiveHTMLNode from "../../node/html/directive/pageNumber";
import StronglyEmphasisedTextHTMLNode from "../../node/html/text/stronglyEmphasised";

import { HTML_MARKDOWN_RULE_NAME,
         LINE_MARKDOWN_RULE_NAME,
         ERROR_MARKDOWN_RULE_NAME,
         IMAGE_MARKDOWN_RULE_NAME,
         TABLE_MARKDOWN_RULE_NAME,
         DIVISION_MARKDOWN_RULE_NAME,
         FOOTNOTE_MARKDOWN_RULE_NAME,
         REFERENCE_MARKDOWN_RULE_NAME,
         PARAGRAPH_MARKDOWN_RULE_NAME,
         HYPERLINK_MARKDOWN_RULE_NAME,
         TABLE_HEAD_MARKDOWN_RULE_NAME,
         TABLE_BODY_MARKDOWN_RULE_NAME,
         INDEX_ITEM_MARKDOWN_RULE_NAME,
         INDEX_LINK_MARKDOWN_RULE_NAME,
         INDEX_LIST_MARKDOWN_RULE_NAME,
         EMAIL_LINK_MARKDOWN_RULE_NAME,
         BLOCK_LINE_MARKDOWN_RULE_NAME,
         PLAIN_TEXT_MARKDOWN_RULE_NAME,
         BLOCK_TEXT_MARKDOWN_RULE_NAME,
         PAGE_NUMBER_MARKDOWN_RULE_NAME,
         STRONG_TEXT_MARKDOWN_RULE_NAME,
         INLINE_TEXT_MARKDOWN_RULE_NAME,
         ORDERED_ITEM_MARKDOWN_RULE_NAME,
         ORDERED_LIST_MARKDOWN_RULE_NAME,
         CONTENTS_ITEM_MARKDOWN_RULE_NAME,
         CONTENTS_LIST_MARKDOWN_RULE_NAME,
         CONTENTS_LINK_MARKDOWN_RULE_NAME,
         INDEX_HEADING_MARKDOWN_RULE_NAME,
         BLOCK_LISTING_MARKDOWN_RULE_NAME,
         FOOTNOTE_LINK_MARKDOWN_RULE_NAME,
         FOOTNOTE_ITEM_MARKDOWN_RULE_NAME,
         FOOTNOTES_LIST_MARKDOWN_RULE_NAME,
         TABLE_HEAD_ROW_MARKDOWN_RULE_NAME,
         TABLE_BODY_ROW_MARKDOWN_RULE_NAME,
         INLINE_LISTING_MARKDOWN_RULE_NAME,
         UNORDERED_ITEM_MARKDOWN_RULE_NAME,
         UNORDERED_LIST_MARKDOWN_RULE_NAME,
         INDEX_DIRECTIVE_MARKDOWN_RULE_NAME,
         TABLE_HEAD_CELL_MARKDOWN_RULE_NAME,
         TABLE_BODY_CELL_MARKDOWN_RULE_NAME,
         EMPHASISED_TEXT_MARKDOWN_RULE_NAME,
         PRIMARY_HEADING_MARKDOWN_RULE_NAME,
         TERTIARY_HEADING_MARKDOWN_RULE_NAME,
         SECONDARY_HEADING_MARKDOWN_RULE_NAME,
         QUATERNARY_HEADING_MARKDOWN_RULE_NAME,
         CONTENTS_DIRECTIVE_MARKDOWN_RULE_NAME,
         FOOTNOTES_DIRECTIVE_MARKDOWN_RULE_NAME,
         PAGE_NUMBER_DIRECTIVE_MARKDOWN_RULE_NAME,
         STRONGLY_EMPHASISED_TEXT_MARKDOWN_RULE_NAME } from "../../ruleNames/markdown";

const htmlNodeMap = {
  [HTML_MARKDOWN_RULE_NAME]: TopmostHTMLNode,  ///
  [LINE_MARKDOWN_RULE_NAME]: LineHTMLNode,
  [ERROR_MARKDOWN_RULE_NAME]: ErrorHTMLNode,
  [IMAGE_MARKDOWN_RULE_NAME]: ImageHTMLNode,
  [TABLE_MARKDOWN_RULE_NAME]: TableHTMLNode,
  [DIVISION_MARKDOWN_RULE_NAME]: DivisionHTMLNode,
  [FOOTNOTE_MARKDOWN_RULE_NAME]: FootnoteHTMLNode,
  [REFERENCE_MARKDOWN_RULE_NAME]: ReferenceHTMLNode,
  [PARAGRAPH_MARKDOWN_RULE_NAME]: ParagraphHTMLNode,
  [HYPERLINK_MARKDOWN_RULE_NAME]: HyperlinkHTMLNode,
  [TABLE_HEAD_MARKDOWN_RULE_NAME]: TableHeadHTMLNode,
  [TABLE_BODY_MARKDOWN_RULE_NAME]: TableBodyHTMLNode,
  [INDEX_ITEM_MARKDOWN_RULE_NAME]: IndexItemHTMLNode,
  [INDEX_LINK_MARKDOWN_RULE_NAME]: IndexLinkHTMLNode,
  [INDEX_LIST_MARKDOWN_RULE_NAME]: IndexListHTMLNode,
  [EMAIL_LINK_MARKDOWN_RULE_NAME]: EmailLinkHTMLNode,
  [BLOCK_LINE_MARKDOWN_RULE_NAME]: BlockLineHTMLNode,
  [PLAIN_TEXT_MARKDOWN_RULE_NAME]: PlainTextHTMLNode,
  [BLOCK_TEXT_MARKDOWN_RULE_NAME]: BlockTextHTMLNode,
  [PAGE_NUMBER_MARKDOWN_RULE_NAME]: PageNumberHTMLNode,
  [STRONG_TEXT_MARKDOWN_RULE_NAME]: StrongTextHTMLNode,
  [INLINE_TEXT_MARKDOWN_RULE_NAME]: InlineTextHTMLNode,
  [ORDERED_ITEM_MARKDOWN_RULE_NAME]: OrderedItemHTMLNode,
  [ORDERED_LIST_MARKDOWN_RULE_NAME]: OrderedListHTMLNode,
  [CONTENTS_ITEM_MARKDOWN_RULE_NAME]: ContentsItemHTMLNode,
  [CONTENTS_LIST_MARKDOWN_RULE_NAME]: ContentsListHTMLNode,
  [CONTENTS_LINK_MARKDOWN_RULE_NAME]: ContentsLinkHTMLNode,
  [INDEX_HEADING_MARKDOWN_RULE_NAME]: IndexHeadingHTMLNode,
  [BLOCK_LISTING_MARKDOWN_RULE_NAME]: BlockListingHTMLNode,
  [FOOTNOTE_LINK_MARKDOWN_RULE_NAME]: FootnoteLinkHTMLNode,
  [FOOTNOTE_ITEM_MARKDOWN_RULE_NAME]: FootnoteItemHTMLNode,
  [TABLE_HEAD_ROW_MARKDOWN_RULE_NAME]: TableHeadRowHTMLNode,
  [TABLE_BODY_ROW_MARKDOWN_RULE_NAME]: TableBodyRowHTMLNode,
  [INLINE_LISTING_MARKDOWN_RULE_NAME]: InlineListingHTMLNode,
  [UNORDERED_ITEM_MARKDOWN_RULE_NAME]: UnorderedItemHTMLNode,
  [UNORDERED_LIST_MARKDOWN_RULE_NAME]: UnorderedListHTMLNode,
  [FOOTNOTES_LIST_MARKDOWN_RULE_NAME]: FootnotesListHTMLNode,
  [TABLE_HEAD_CELL_MARKDOWN_RULE_NAME]: TableHeadCellHTMLNode,
  [TABLE_BODY_CELL_MARKDOWN_RULE_NAME]: TableBodyCellHTMLNode,
  [EMPHASISED_TEXT_MARKDOWN_RULE_NAME]: EmphasisedTextHTMLNode,
  [PRIMARY_HEADING_MARKDOWN_RULE_NAME]: PrimaryHeadingHTMLNode,
  [INDEX_DIRECTIVE_MARKDOWN_RULE_NAME]: IndexDirectiveHTMLNode,
  [TERTIARY_HEADING_MARKDOWN_RULE_NAME]: TertiaryHeadingHTMLNode,
  [SECONDARY_HEADING_MARKDOWN_RULE_NAME]: SecondaryHeadingHTMLNode,
  [QUATERNARY_HEADING_MARKDOWN_RULE_NAME]: QuaternaryHeadingHTMLNode,
  [CONTENTS_DIRECTIVE_MARKDOWN_RULE_NAME]: ContentsDirectiveHTMLNode,
  [FOOTNOTES_DIRECTIVE_MARKDOWN_RULE_NAME]: FootnotesDirectiveHTMLNode,
  [PAGE_NUMBER_DIRECTIVE_MARKDOWN_RULE_NAME]: PageNumberDirectiveHTMLNode,
  [STRONGLY_EMPHASISED_TEXT_MARKDOWN_RULE_NAME]: StronglyEmphasisedTextHTMLNode
}

export function forEachHTMLNode(callback) {
  const markdownRuleNames = Object.keys(htmlNodeMap);

  markdownRuleNames.forEach((markdownRuleName) => {
    const HTMLNode = htmlNodeMap[markdownRuleName],
          Class = HTMLNode;

    callback(Class, markdownRuleName);
  });
}

export default htmlNodeMap;
