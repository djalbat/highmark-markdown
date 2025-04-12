"use strict";

import { LESS_THAN, GREATER_THAN } from "../constants";

export function replaceEntities(content) {
  content = content
              .replace(/&lt;?/g, LESS_THAN)
              .replace(/&gt;?/g, GREATER_THAN);

  return content;
}
