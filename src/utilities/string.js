"use strict";

import { EMPTY_STRING } from "../constants";

export function trim(string) {
  const trimmedString = string.replace(/[\n\r]$/gm, EMPTY_STRING);

  return trimmedString;
}
