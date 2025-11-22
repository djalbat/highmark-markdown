"use strict";

import "juxtapose";

import withStyle from "easy-with-style";  ///

import { Body } from "easy";
import { MarkdownStyleElement, DefaultMarkdownStyleElement } from "./index";  ///

import View from "./example/view";

import { CSS_SELECTORCS_STRING } from "./example/constants";

const { renderStyles } = withStyle;

const cssSelectorsString = CSS_SELECTORCS_STRING;

DefaultMarkdownStyleElement.fromCSSSelectorsString(cssSelectorsString);

const markdownStyleElement = MarkdownStyleElement.fromCSSSelectorsString(cssSelectorsString);

renderStyles();

const body = new Body();

body.mount(

  <View markdownStyleElement={markdownStyleElement} />

);
