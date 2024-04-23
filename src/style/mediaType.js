"use strict";

import { nodeQuery } from "../utilities/query";

const nameTerminalNodesQuery = nodeQuery("/*/@name");

export default class MediaType {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  asCSS() {
    const css = this.name;  ///

    return css;
  }

  match(mediaType) {
    const name = mediaType.getName(),
          matches = (this.name === name);

    return matches;
  }

  static fromMediaTypeName(mediaTypeName) {
    const name = mediaTypeName, ///
          mediaType = new MediaType(name);

    return mediaType;
  }

  static fromNodeAndTokens(node, tokens) {
    const name = nameFromNode(node),
          mediaType = new MediaType(name);

    return mediaType;
  }
}

function nameFromNode(node) {
  const nameTerminalNode = nameTerminalNodesQuery(node),
        nameTerminalNodeContent = nameTerminalNode.getContent(),
        name = nameTerminalNodeContent; ///

  return name;
}
