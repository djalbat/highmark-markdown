"use strict"

import { EMPTY_STRING } from "../constants";

export function trim(string) {
  return string.replace(/^"|"$/g, EMPTY_STRING);
}
