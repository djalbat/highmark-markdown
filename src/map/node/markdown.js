"use strict";

import LineMarkdownNode from "../../node/markdown/line";
import PathMarkdownNode from "../../node/markdown/path";
import ImageMarkdownNode from "../../node/markdown/image";
import ErrorMarkdownNode from "../../node/markdown/error";
import TopmostMarkdownNode from "../../node/markdown/topmost";
import DivisionMarkdownNode from "../../node/markdown/division";
import FootnoteMarkdownNode from "../../node/markdown/footnote";
import BlockEndMarkdownNode from "../../node/markdown/blockEnd";
import ParagraphMarkdownNode from "../../node/markdown/paragraph";
import ReferenceMarkdownNode from "../../node/markdown/reference";
import HyperlinkMarkdownNode from "../../node/markdown/hyperlink";
import IndexListMarkdownNode from "../../node/markdown/list/index";
import IndexLinkMarkdownNode from "../../node/markdown/link/index";
import EmailLinkMarkdownNode from "../../node/markdown/link/email";
import PlainTextMarkdownNode from "../../node/markdown/text/plain";
import BlockTextMarkdownNode from "../../node/markdown/text/block";
import ClassNameMarkdownNode from "../../node/markdown/className";
import BlockStartMarkdownNode from "../../node/markdown/blockStart";
import InlineTextMarkdownNode from "../../node/markdown/inlineText";
import StrongTextMarkdownNode from "../../node/markdown/strongText";
import OrderedItemMarkdownNode from "../../node/markdown/item/ordered";
import SubDivisionMarkdownNode from "../../node/markdown/subDivision";
import BlockListingMarkdownNode from "../../node/markdown/listng/block";
import ContentsLinkMarkdownNode from "../../node/markdown/link/contents";
import ContentsItemMarkdownNode from "../../node/markdown/contentsItem";
import ContentsListMarkdownNode from "../../node/markdown/list/contents";
import FootnoteLinkMarkdownNode from "../../node/markdown/link/footnote";
import InlineListingMarkdownNode from "../../node/markdown/listng/inline";
import EmphasisedTextMarkdownNode from "../../node/markdown/emphasisedText";
import PrimaryHeadingMarkdownNode from "../../node/markdown/heading/primary";
import EmbedDirectiveMarkdownNode from "../../node/markdown/directive/embee";
import TertiaryHeadingMarkdownNode from "../../node/markdown/heading/tertiary";
import SecondaryHeadingMarkdownNode from "../../node/markdown/heading/secondary";
import IncludeDirectiveMarkdownNode from "../../node/markdown/directive/include";
import QuaternaryHeadingMarkdownNode from "../../node/markdown/heading/quaternary";
import PageNumberDirectiveMarkdownNode from "../../node/markdown/directive/pageNumber";
import StronglyEmphasisedTextMarkdownNode from "../../node/markdown/stronglyEmphasisedText";

import { LINE_RULE_NAME,
         PATH_RULE_NAME,
         IMAGE_RULE_NAME,
         ERROR_RULE_NAME,
         MARKDOWN_RULE_NAME,
         DIVISION_RULE_NAME,
         FOOTNOTE_RULE_NAME,
         BLOCK_END_RULE_NAME,
         PARAGRAPH_RULE_NAME,
         REFERENCE_RULE_NAME,
         HYPERLINK_RULE_NAME,
         INDEX_LIST_RULE_NAME,
         INDEX_LINK_RULE_NAME,
         EMAIL_LINK_RULE_NAME,
         PLAIN_TEXT_RULE_NAME,
         BLOCK_TEXT_RULE_NAME,
         CLASS_NAME_RULE_NAME,
         BLOCK_START_RULE_NAME,
         INLINE_TEXT_RULE_NAME,
         STRONG_TEXT_RULE_NAME,
         ORDERED_ITEM_RULE_NAME,
         SUB_DIVISION_RULE_NAME,
         BLOCK_LISTING_RULE_NAME,
         CONTENTS_LINK_RULE_NAME,
         CONTENTS_ITEM_RULE_NAME,
         CONTENTS_LIST_RULE_NAME,
         FOOTNOTE_LINK_RULE_NAME,
         INLINE_LISTING_RULE_NAME,
         EMPHASISED_TEXT_RULE_NAME,
         PRIMARY_HEADING_RULE_NAME,
         EMBED_DIRECTIVE_RULE_NAME,
         TERTIARY_HEADING_RULE_NAME,
         SECONDARY_HEADING_RULE_NAME,
         INCLUDE_DIRECTIVE_RULE_NAME,
         QUATERNARY_HEADING_RULE_NAME,
         PAGE_NUMBER_DIRECTIVE_RULE_NAME,
         STRONGLY_EMPHASISED_TEXT_RULE_NAME } from "../../ruleNames";

const markdownNodeMap = {
  [LINE_RULE_NAME]: LineMarkdownNode,
  [PATH_RULE_NAME]: PathMarkdownNode,
  [IMAGE_RULE_NAME]: ImageMarkdownNode,
  [ERROR_RULE_NAME]: ErrorMarkdownNode,
  [MARKDOWN_RULE_NAME]: TopmostMarkdownNode,
  [DIVISION_RULE_NAME]: DivisionMarkdownNode,
  [FOOTNOTE_RULE_NAME]: FootnoteMarkdownNode,
  [BLOCK_END_RULE_NAME]: BlockEndMarkdownNode,
  [REFERENCE_RULE_NAME]: ReferenceMarkdownNode,
  [HYPERLINK_RULE_NAME]: HyperlinkMarkdownNode,
  [PARAGRAPH_RULE_NAME]: ParagraphMarkdownNode,
  [INDEX_LIST_RULE_NAME]: IndexListMarkdownNode,
  [INDEX_LINK_RULE_NAME]: IndexLinkMarkdownNode,
  [EMAIL_LINK_RULE_NAME]: EmailLinkMarkdownNode,
  [PLAIN_TEXT_RULE_NAME]: PlainTextMarkdownNode,
  [BLOCK_TEXT_RULE_NAME]: BlockTextMarkdownNode,
  [CLASS_NAME_RULE_NAME]: ClassNameMarkdownNode,
  [BLOCK_START_RULE_NAME]: BlockStartMarkdownNode,
  [INLINE_TEXT_RULE_NAME]: InlineTextMarkdownNode,
  [STRONG_TEXT_RULE_NAME]: StrongTextMarkdownNode,
  [ORDERED_ITEM_RULE_NAME]: OrderedItemMarkdownNode,
  [SUB_DIVISION_RULE_NAME]: SubDivisionMarkdownNode,
  [CONTENTS_LINK_RULE_NAME]: ContentsLinkMarkdownNode,
  [BLOCK_LISTING_RULE_NAME]: BlockListingMarkdownNode,
  [CONTENTS_ITEM_RULE_NAME]: ContentsItemMarkdownNode,
  [CONTENTS_LIST_RULE_NAME]: ContentsListMarkdownNode,
  [FOOTNOTE_LINK_RULE_NAME]: FootnoteLinkMarkdownNode,
  [INLINE_LISTING_RULE_NAME]: InlineListingMarkdownNode,
  [EMPHASISED_TEXT_RULE_NAME]: EmphasisedTextMarkdownNode,
  [PRIMARY_HEADING_RULE_NAME]: PrimaryHeadingMarkdownNode,
  [EMBED_DIRECTIVE_RULE_NAME]: EmbedDirectiveMarkdownNode,
  [TERTIARY_HEADING_RULE_NAME]: TertiaryHeadingMarkdownNode,
  [SECONDARY_HEADING_RULE_NAME]: SecondaryHeadingMarkdownNode,
  [INCLUDE_DIRECTIVE_RULE_NAME]: IncludeDirectiveMarkdownNode,
  [QUATERNARY_HEADING_RULE_NAME]: QuaternaryHeadingMarkdownNode,
  [PAGE_NUMBER_DIRECTIVE_RULE_NAME]: PageNumberDirectiveMarkdownNode,
  [STRONGLY_EMPHASISED_TEXT_RULE_NAME]: StronglyEmphasisedTextMarkdownNode
};

export default markdownNodeMap;
