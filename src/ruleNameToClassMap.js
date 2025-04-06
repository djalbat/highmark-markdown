"use strict";

import CommaHTMLNode from "./node/html/comma";
import AnchorHTMLNode from "./node/html/anchor";
import ClassNameHTMLNode from "./node/html/className";
import BlockLineHTMLNode from "./node/html/blockLine";
import OrderedItemHTMLNode from "./node/html/item/ordered";
import ContentsLinkHTMLNode from "./node/html/contentsLink";
import BlockListingHTMLNode from "./node/html/blockListing";
import BlockListingHEndHTMLNode from "./node/html/blockListingEnd";
import BlockListingHStartHTMLNode from "./node/html/blockListingStart";
import PageNumberDirectiveHTMLNode from "./node/html/directive/pageNumber";

import { COMMA_RULE_NAME,
         ANCHOR_RULE_NAME,
         CLASS_NAME_RULE_NAME,
         BLOCK_LINE_RULE_NAME,
         ORDERED_ITEM_RULE_NAME,
         CONTENTS_LINK_RULE_NAME,
         BLOCK_LISTING_RULE_NAME,
         BLOCK_LISTING_END_RULE_NAME,
         BLOCK_LISTING_START_RULE_NAME,
         PAGE_NUMBER_DIRECTIVE_RULE_NAME } from "./ruleNames";

const ruleNameToClassMap = {
  [COMMA_RULE_NAME]: CommaHTMLNode,
  [ANCHOR_RULE_NAME]: AnchorHTMLNode,
  [CLASS_NAME_RULE_NAME]: ClassNameHTMLNode,
  [BLOCK_LINE_RULE_NAME]: BlockLineHTMLNode,
  [ORDERED_ITEM_RULE_NAME]: OrderedItemHTMLNode,
  [CONTENTS_LINK_RULE_NAME]: ContentsLinkHTMLNode,
  [BLOCK_LISTING_RULE_NAME]: BlockListingHTMLNode,
  [BLOCK_LISTING_END_RULE_NAME]: BlockListingHEndHTMLNode,
  [BLOCK_LISTING_START_RULE_NAME]: BlockListingHStartHTMLNode,
  [PAGE_NUMBER_DIRECTIVE_RULE_NAME]: PageNumberDirectiveHTMLNode
}

export default ruleNameToClassMap;
