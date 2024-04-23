"use strict";

import MediaType from "./mediaType";

import { nodesQuery } from "../utilities/query";
import { EMPTY_STRING } from "../constants";

const mediaTypeNonTerminalNodesQuery = nodesQuery("/*/mediaType");

export default class MediaTypes {
  constructor(array) {
    this.array = array;
  }

  getLength() { return this.array.length; }

  asCSS() {
    let css = EMPTY_STRING;

    const length = this.getLength();

    if (length > 0) {
      css = this.array.reduce((css, media) => {
        const mediaTypeCSS = mediaType.asCSS();

        css = (css === null) ?
                mediaTypeCSS :  ///
                  `${css} and ${mediaTypeCSS}`;

        return css;
      }, null);
    }

    return css;
  }

  matchMediaType(mediaType) {
    const mediaTypeA = mediaType, ///
          matchesMediaType = this.array.some((mediaType) => {
            const mediaTypeB = mediaType, ///
                  matches = mediaTypeA.match(mediaTypeB);

            if (matches) {
              return true;
            }
          });

    return matchesMediaType;
  }

  static fromNodeAndTokens(node, tokens) {
    const mediaTypeNonTerminalNodes = mediaTypeNonTerminalNodesQuery(node),
          array = mediaTypeNonTerminalNodes.map((mediaTypeNonTerminalNode) => {
            const node = mediaTypeNonTerminalNode, ///
                  mediaType = MediaType.fromNodeAndTokens(node, tokens);

            return mediaType;
          }),
          medias = new MediaTypes(array);

    return medias;
  }
}
