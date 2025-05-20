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

import { PATH_MARKDOWN_RULE_NAME,
         IMAGE_MARKDOWN_RULE_NAME,
         ERROR_MARKDOWN_RULE_NAME,
         MARKDOWN_MARKDOWN_RULE_NAME,
         DIVISION_MARKDOWN_RULE_NAME,
         FOOTNOTE_MARKDOWN_RULE_NAME,
         BLOCK_END_MARKDOWN_RULE_NAME,
         REFERENCE_MARKDOWN_RULE_NAME,
         HYPERLINK_MARKDOWN_RULE_NAME,
         EMAIL_LINK_MARKDOWN_RULE_NAME,
         CLASS_NAME_MARKDOWN_RULE_NAME,
         PLAIN_TEXT_MARKDOWN_RULE_NAME,
         BLOCK_TEXT_MARKDOWN_RULE_NAME,
         BLOCK_START_MARKDOWN_RULE_NAME,
         ORDERED_ITEM_MARKDOWN_RULE_NAME,
         SUB_DIVISION_MARKDOWN_RULE_NAME,
         BLOCK_LISTING_MARKDOWN_RULE_NAME,
         FOOTNOTE_LINK_MARKDOWN_RULE_NAME,
         INLINE_LISTING_MARKDOWN_RULE_NAME,
         EMBED_DIRECTIVE_MARKDOWN_RULE_NAME,
         INCLUDE_DIRECTIVE_MARKDOWN_RULE_NAME } from "../../ruleNames/markdown";

const markdownNodeMap = {
  [PATH_MARKDOWN_RULE_NAME]: PathMarkdownNode,
  [IMAGE_MARKDOWN_RULE_NAME]: ImageMarkdownNode,
  [ERROR_MARKDOWN_RULE_NAME]: ErrorMarkdownNode,
  [MARKDOWN_MARKDOWN_RULE_NAME]: TopmostMarkdownNode, ///
  [DIVISION_MARKDOWN_RULE_NAME]: DivisionMarkdownNode,
  [FOOTNOTE_MARKDOWN_RULE_NAME]: FootnoteMarkdownNode,
  [BLOCK_END_MARKDOWN_RULE_NAME]: BlockEndMarkdownNode,
  [REFERENCE_MARKDOWN_RULE_NAME]: ReferenceMarkdownNode,
  [HYPERLINK_MARKDOWN_RULE_NAME]: HyperlinkMarkdownNode,
  [EMAIL_LINK_MARKDOWN_RULE_NAME]: EmailLinkMarkdownNode,
  [CLASS_NAME_MARKDOWN_RULE_NAME]: ClassNameMarkdownNode,
  [PLAIN_TEXT_MARKDOWN_RULE_NAME]: PlainTextMarkdownNode,
  [BLOCK_TEXT_MARKDOWN_RULE_NAME]: BlockTextMarkdownNode,
  [BLOCK_START_MARKDOWN_RULE_NAME]: BlockStartMarkdownNode,
  [ORDERED_ITEM_MARKDOWN_RULE_NAME]: OrderedItemMarkdownNode,
  [SUB_DIVISION_MARKDOWN_RULE_NAME]: SubDivisionMarkdownNode,
  [BLOCK_LISTING_MARKDOWN_RULE_NAME]: BlockListingMarkdownNode,
  [FOOTNOTE_LINK_MARKDOWN_RULE_NAME]: FootnoteLinkMarkdownNode,
  [INLINE_LISTING_MARKDOWN_RULE_NAME]: InlineListingMarkdownNode,
  [EMBED_DIRECTIVE_MARKDOWN_RULE_NAME]: EmbedDirectiveMarkdownNode,
  [INCLUDE_DIRECTIVE_MARKDOWN_RULE_NAME]: IncludeDirectiveMarkdownNode
};

export default markdownNodeMap;
