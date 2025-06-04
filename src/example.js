"use strict";

import "juxtapose";

import withStyle from "easy-with-style";  ///

import { Body } from "easy";
import { MarkdownStyleElement, DefaultMarkdownStyleElement } from "./index";  ///

import View from "./example/view";

import { PREVIEW_SELECTORS_STRING } from "./example/constants";

const { renderStyles } = withStyle;

const selectorsString = PREVIEW_SELECTORS_STRING;

DefaultMarkdownStyleElement.fromSelectorsString(selectorsString);

const markdownStyleElement = MarkdownStyleElement.fromSelectorsString(selectorsString);

renderStyles();

const body = new Body();

body.mount(

  <View selectorsString={selectorsString} markdownStyleElement={markdownStyleElement} />

);
