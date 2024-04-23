"use strict";

import Media from "./media";

import { nodesQuery } from "../utilities/query";
import { EMPTY_STRING } from "../constants";

const mediaNonTerminalNodesQuery = nodesQuery("/*/media");

export default class Medias {
  constructor(array) {
    this.array = array;
  }

  getLength() { return this.array.length; }

  asCSS(mediaType, selectorsList, outermost) {
    let css = EMPTY_STRING;

    const length = this.getLength(),
          selectorsListLength = selectorsList.getLength();

    if ((length > 0) && (selectorsListLength > 0)) {
      css = this.array.reduce((css, media) => {
        const mediaCSS = media.asCSS(mediaType, selectorsList, outermost);

        css = (css === null) ?
                mediaCSS :  ///
                  `${css}${mediaCSS}`;

        return css;
      }, null);
    }

    return css;
  }

  static fromNodeAndTokens(node, tokens) {
    const mediaNonTerminalNodes = mediaNonTerminalNodesQuery(node),
          array = mediaNonTerminalNodes.map((mediaNonTerminalNode) => {
            const node = mediaNonTerminalNode, ///
                  media = Media.fromNodeAndTokens(node, tokens);

            return media;
          }),
          medias = new Medias(array);

    return medias;
  }
}
