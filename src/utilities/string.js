"use strict";

import { HYPHEN, EMPTY_STRING } from "../constants";

export function removeBackticks(string) { return string.replace(/^`|`$/g, EMPTY_STRING); }

export function removeLeadingWhitespace(string) { return string.replace(/^[\n ]+/, EMPTY_STRING) }

export function removeTrailingWhitespace(string) { return string.replace(/[\n ]+$/, EMPTY_STRING) }

export function replaceSpacesWithHyphens(string) { return string.replace(/ +/g, HYPHEN); }

export function removeNonAlphabeticCharacters(string) { return string.replace(/[^a-z]/g, EMPTY_STRING); }
