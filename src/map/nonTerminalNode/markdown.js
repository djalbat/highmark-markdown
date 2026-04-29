"use strict";

import PathMarkdownNode from "../../node/markdown/path";
import ImageMarkdownNode from "../../node/markdown/image";
import ErrorMarkdownNode from "../../node/markdown/error";
import XMLNameMarkdownNode from "../../node/markdown/xmlName"
import XMLTextMarkdownNode from "../../node/markdown/xmlText"
import DocumentMarkdownNode from "../../node/markdown/document";
import DivisionMarkdownNode from "../../node/markdown/division";
import FootnoteMarkdownNode from "../../node/markdown/footnote";
import BlockEndMarkdownNode from "../../node/markdown/blockEnd";
import ContainerMarkdownNode from "../../node/markdown/container";
import ReferenceMarkdownNode from "../../node/markdown/reference";
import HyperlinkMarkdownNode from "../../node/markdown/hyperlink";
import EmailLinkMarkdownNode from "../../node/markdown/link/email";
import ClassNameMarkdownNode from "../../node/markdown/className";
import PlainTextMarkdownNode from "../../node/markdown/text/plain";
import BlockTextMarkdownNode from "../../node/markdown/text/block";
import EndXMLTagMarkdownNode from "../../node/markdown/endXMLTag";
import BlockStartMarkdownNode from "../../node/markdown/blockStart";
import SubDivisionMarkdownNode from "../../node/markdown/subDivision";
import OrderedItemMarkdownNode from "../../node/markdown/item/ordered";
import ReleaseNameMarkdownNode from "../../node/markdown/releaseName";
import StartXMLTagMarkdownNode from "../../node/markdown/startXMLTag";
import XMLElementeMarkdownNode from "../../node/markdown/xmlElement"
import LanguageNameMarkdownNode from "../../node/markdown/languageName";
import BlockListingMarkdownNode from "../../node/markdown/listng/block";
import FootnoteLinkMarkdownNode from "../../node/markdown/link/footnote";
import XMLAttributeMarkdownNode from "../../node/markdown/xmlAttribute"
import InlineListingMarkdownNode from "../../node/markdown/listng/inline";
import EmbedDirectiveMarkdownNode from "../../node/markdown/directive/embed";
import CompleteXMLTagMarkdownNode from "../../node/markdown/completeXMLTag";
import IncludeDirectiveMarkdownNode from "../../node/markdown/directive/include";
import SimpleXMLElementMarkdownNode from "../../node/markdown/simpleXMLElement";
import ComplexXMLElementMarkdownNode from "../../node/markdown/complexXMLElement";

import { PATH_MARKDOWN_RULE_NAME,
         IMAGE_MARKDOWN_RULE_NAME,
         ERROR_MARKDOWN_RULE_NAME,
         DOCUMENT_MARKDOWN_RULE_NAME,
         DIVISION_MARKDOWN_RULE_NAME,
         FOOTNOTE_MARKDOWN_RULE_NAME,
         XML_NAME_MARKDOWN_RULE_NAME,
         XML_TEXT_MARKDOWN_RULE_NAME,
         BLOCK_END_MARKDOWN_RULE_NAME,
         CONTAINER_MARKDOWN_RULE_NAME,
         REFERENCE_MARKDOWN_RULE_NAME,
         HYPERLINK_MARKDOWN_RULE_NAME,
         EMAIL_LINK_MARKDOWN_RULE_NAME,
         CLASS_NAME_MARKDOWN_RULE_NAME,
         PLAIN_TEXT_MARKDOWN_RULE_NAME,
         BLOCK_TEXT_MARKDOWN_RULE_NAME,
         END_XML_TAG_MARKDOWN_RULE_NAME,
         XML_ELEMENT_MARKDOWN_RULE_NAME,
         BLOCK_START_MARKDOWN_RULE_NAME,
         ORDERED_ITEM_MARKDOWN_RULE_NAME,
         SUB_DIVISION_MARKDOWN_RULE_NAME,
         RELEASE_NAME_MARKDOWN_RULE_NAME,
         LANGUAGE_NAME_MARKDOWN_RULE_NAME,
         BLOCK_LISTING_MARKDOWN_RULE_NAME,
         FOOTNOTE_LINK_MARKDOWN_RULE_NAME,
         START_XML_TAG_MARKDOWN_RULE_NAME,
         XML_ATTRIBUTE_MARKDOWN_RULE_NAME,
         INLINE_LISTING_MARKDOWN_RULE_NAME,
         EMBED_DIRECTIVE_MARKDOWN_RULE_NAME,
         COMPLETE_XML_TAG_MARKDOWN_RULE_NAME,
         INCLUDE_DIRECTIVE_MARKDOWN_RULE_NAME,
         SIMPLE_XML_ELEMENT_MARKDOWN_RULE_NAME,
         COMPLEX_XML_ELEMENT_MARKDOWN_RULE_NAME } from "../../ruleNames/markdown";

const markdownNonTerminalNodeMap = {
  [PATH_MARKDOWN_RULE_NAME]: PathMarkdownNode,
  [IMAGE_MARKDOWN_RULE_NAME]: ImageMarkdownNode,
  [ERROR_MARKDOWN_RULE_NAME]: ErrorMarkdownNode,
  [DOCUMENT_MARKDOWN_RULE_NAME]: DocumentMarkdownNode, ///
  [DIVISION_MARKDOWN_RULE_NAME]: DivisionMarkdownNode,
  [FOOTNOTE_MARKDOWN_RULE_NAME]: FootnoteMarkdownNode,
  [XML_NAME_MARKDOWN_RULE_NAME]: XMLNameMarkdownNode,
  [XML_TEXT_MARKDOWN_RULE_NAME]: XMLTextMarkdownNode,
  [BLOCK_END_MARKDOWN_RULE_NAME]: BlockEndMarkdownNode,
  [CONTAINER_MARKDOWN_RULE_NAME]: ContainerMarkdownNode,
  [REFERENCE_MARKDOWN_RULE_NAME]: ReferenceMarkdownNode,
  [HYPERLINK_MARKDOWN_RULE_NAME]: HyperlinkMarkdownNode,
  [EMAIL_LINK_MARKDOWN_RULE_NAME]: EmailLinkMarkdownNode,
  [CLASS_NAME_MARKDOWN_RULE_NAME]: ClassNameMarkdownNode,
  [PLAIN_TEXT_MARKDOWN_RULE_NAME]: PlainTextMarkdownNode,
  [BLOCK_TEXT_MARKDOWN_RULE_NAME]: BlockTextMarkdownNode,
  [BLOCK_START_MARKDOWN_RULE_NAME]: BlockStartMarkdownNode,
  [END_XML_TAG_MARKDOWN_RULE_NAME]: EndXMLTagMarkdownNode,
  [XML_ELEMENT_MARKDOWN_RULE_NAME]: XMLElementeMarkdownNode,
  [ORDERED_ITEM_MARKDOWN_RULE_NAME]: OrderedItemMarkdownNode,
  [SUB_DIVISION_MARKDOWN_RULE_NAME]: SubDivisionMarkdownNode,
  [RELEASE_NAME_MARKDOWN_RULE_NAME]: ReleaseNameMarkdownNode,
  [START_XML_TAG_MARKDOWN_RULE_NAME]: StartXMLTagMarkdownNode,
  [XML_ATTRIBUTE_MARKDOWN_RULE_NAME]: XMLAttributeMarkdownNode,
  [LANGUAGE_NAME_MARKDOWN_RULE_NAME]: LanguageNameMarkdownNode,
  [BLOCK_LISTING_MARKDOWN_RULE_NAME]: BlockListingMarkdownNode,
  [FOOTNOTE_LINK_MARKDOWN_RULE_NAME]: FootnoteLinkMarkdownNode,
  [INLINE_LISTING_MARKDOWN_RULE_NAME]: InlineListingMarkdownNode,
  [EMBED_DIRECTIVE_MARKDOWN_RULE_NAME]: EmbedDirectiveMarkdownNode,
  [COMPLETE_XML_TAG_MARKDOWN_RULE_NAME]: CompleteXMLTagMarkdownNode,
  [INCLUDE_DIRECTIVE_MARKDOWN_RULE_NAME]: IncludeDirectiveMarkdownNode,
  [SIMPLE_XML_ELEMENT_MARKDOWN_RULE_NAME]: SimpleXMLElementMarkdownNode,
  [COMPLEX_XML_ELEMENT_MARKDOWN_RULE_NAME]: ComplexXMLElementMarkdownNode
};

export default markdownNonTerminalNodeMap;
