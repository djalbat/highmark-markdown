"use strict";

import { Transform } from "occam-dom";

export default class MarkdownTransform extends Transform {
  static fromNode(Class, node, ...remainingArguments) { return Transform.fromNode(Class, node, ...remainingArguments); }

  static fromNodeAndTokens(Class, node, tokens, ...remainingArguments) { return Transform.fromNodeAndTokens(Class, node, tokens, ...remainingArguments); }
}
