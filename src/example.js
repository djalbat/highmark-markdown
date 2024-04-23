"use strict";

import "juxtapose";

import withStyle from "easy-with-style";  ///

import { Body } from "easy";
import { mediaTypeNames, MarkdownStyleElement, DefaultMarkdownStyleElement } from "./index";  ///

import View from "./example/view";

import { PREVIEW_DIV_SELECTORS_STRING } from "./example/constants";

const { renderStyles } = withStyle,
      { PREVIEW_MEDIA_TYPE_NAME } = mediaTypeNames;

const mediaTypeName = PREVIEW_MEDIA_TYPE_NAME,
      selectorSString = PREVIEW_DIV_SELECTORS_STRING;

DefaultMarkdownStyleElement.fromMediaTypeNameAndSelectorsString(mediaTypeName, selectorSString);

const markdownStyleElement = MarkdownStyleElement.fromMediaTypeNameAndSelectorsString(mediaTypeName, selectorSString);

renderStyles();

const body = new Body();

body.mount(

  <View markdownStyleElement={markdownStyleElement} />

);
