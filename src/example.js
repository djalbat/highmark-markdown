"use strict";

import "juxtapose";

import withStyle from "easy-with-style";  ///

import { Body } from "easy";
import { mediaTypeNames, MarkdownStyleElement, DefaultMarkdownStyleElement } from "./index";  ///

import View from "./example/view";

import { INTRODUCTION_DIV_SELECTORS_STRING } from "./example/constants";

const { renderStyles } = withStyle,
      { PREVIEW_MEDIA_TYPE_NAME } = mediaTypeNames;

const mediaTypeName = PREVIEW_MEDIA_TYPE_NAME,
      selectorsString = INTRODUCTION_DIV_SELECTORS_STRING;

DefaultMarkdownStyleElement.fromMediaTypeNameAndSelectorsString(mediaTypeName, selectorsString);

const markdownStyleElement = MarkdownStyleElement.fromMediaTypeNameAndSelectorsString(mediaTypeName, selectorsString);

renderStyles();

const body = new Body();

body.mount(

  <View markdownStyleElement={markdownStyleElement} />

);
