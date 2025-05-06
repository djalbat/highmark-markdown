"use strict";

import PathMarkdownNode from "../../node/markdown/path";
import ImageMarkdownNode from "../../node/markdown/image";
import ErrorMarkdownNode from "../../node/markdown/error";
import TopmostMarkdownNode from "../../node/markdown/topmost";
import DivisionMarkdownNode from "../../node/markdown/division";
import FootnoteMarkdownNode from "../../node/markdown/footnote";
import BlockEndMarkdownNode from "../../node/markdown/blockEnd";
import ReferenceMarkdownNode from "../../node/markdown/reference";
import HyperlinkMarkdownNode from "../../node/markdown/hyperlink";
import EmailLinkMarkdownNode from "../../node/markdown/link/email";
import ClassNameMarkdownNode from "../../node/markdown/className";
import PlainTextMarkdownNode from "../../node/markdown/text/plain";
import BlockTextMarkdownNode from "../../node/markdown/text/block";
import BlockStartMarkdownNode from "../../node/markdown/blockStart";
import SubDivisionMarkdownNode from "../../node/markdown/subDivision";
import OrderedItemMarkdownNode from "../../node/markdown/item/ordered";
import BlockListingMarkdownNode from "../../node/markdown/listng/block";
import FootnoteLinkMarkdownNode from "../../node/markdown/link/footnote";
import InlineListingMarkdownNode from "../../node/markdown/listng/inline";
import EmbedDirectiveMarkdownNode from "../../node/markdown/directive/embed";
import IncludeDirectiveMarkdownNode from "../../node/markdown/directive/include";

import { PATH_RULE_NAME,
         IMAGE_RULE_NAME,
         ERROR_RULE_NAME,
         MARKDOWN_RULE_NAME,
         DIVISION_RULE_NAME,
         FOOTNOTE_RULE_NAME,
         BLOCK_END_RULE_NAME,
         REFERENCE_RULE_NAME,
         HYPERLINK_RULE_NAME,
         EMAIL_LINK_RULE_NAME,
         CLASS_NAME_RULE_NAME,
         PLAIN_TEXT_RULE_NAME,
         BLOCK_TEXT_RULE_NAME,
         BLOCK_START_RULE_NAME,
         ORDERED_ITEM_RULE_NAME,
         SUB_DIVISION_RULE_NAME,
         BLOCK_LISTING_RULE_NAME,
         FOOTNOTE_LINK_RULE_NAME,
         INLINE_LISTING_RULE_NAME,
         EMBED_DIRECTIVE_RULE_NAME,
         INCLUDE_DIRECTIVE_RULE_NAME } from "../../ruleNames";

const markdownNodeMap = {
  [PATH_RULE_NAME]: PathMarkdownNode,
  [IMAGE_RULE_NAME]: ImageMarkdownNode,
  [ERROR_RULE_NAME]: ErrorMarkdownNode,
  [MARKDOWN_RULE_NAME]: TopmostMarkdownNode,
  [DIVISION_RULE_NAME]: DivisionMarkdownNode,
  [FOOTNOTE_RULE_NAME]: FootnoteMarkdownNode,
  [BLOCK_END_RULE_NAME]: BlockEndMarkdownNode,
  [REFERENCE_RULE_NAME]: ReferenceMarkdownNode,
  [HYPERLINK_RULE_NAME]: HyperlinkMarkdownNode,
  [EMAIL_LINK_RULE_NAME]: EmailLinkMarkdownNode,
  [CLASS_NAME_RULE_NAME]: ClassNameMarkdownNode,
  [PLAIN_TEXT_RULE_NAME]: PlainTextMarkdownNode,
  [BLOCK_TEXT_RULE_NAME]: BlockTextMarkdownNode,
  [BLOCK_START_RULE_NAME]: BlockStartMarkdownNode,
  [ORDERED_ITEM_RULE_NAME]: OrderedItemMarkdownNode,
  [SUB_DIVISION_RULE_NAME]: SubDivisionMarkdownNode,
  [BLOCK_LISTING_RULE_NAME]: BlockListingMarkdownNode,
  [FOOTNOTE_LINK_RULE_NAME]: FootnoteLinkMarkdownNode,
  [INLINE_LISTING_RULE_NAME]: InlineListingMarkdownNode,
  [EMBED_DIRECTIVE_RULE_NAME]: EmbedDirectiveMarkdownNode,
  [INCLUDE_DIRECTIVE_RULE_NAME]: IncludeDirectiveMarkdownNode
};

export default markdownNodeMap;
