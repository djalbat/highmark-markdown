"use strict";

import RuleSets from "./ruleSets";
import MediaTypes from "./mediaTypes";
import Declarations from "./declarations";

import { nodeQuery } from "../utilities/query";
import { EMPTY_STRING } from "../constants";

const mediaTypesNonTerminalNodeQuery = nodeQuery("/*/mediaTypes");

export default class Media {
  constructor(types, ruleSets, declarations) {
    this.types = types;
    this.ruleSets = ruleSets;
    this.declarations = declarations;
  }

  getTypes() {
    return this.types;
  }

  getRuleSets() {
    return this.ruleSets;
  }

  getDeclarations() {
    return this.declarations;
  }

  asCSS(mediaType, selectorsList, outermost) {
    let css = EMPTY_STRING;

    const typeMatchMediaType = this.types.matchMediaType(mediaType);

    if (typeMatchMediaType) {
      const declarationsCSS = this.declarations.asCSS(selectorsList, outermost),
            ruleSetsCSS = this.ruleSets.asCSS(selectorsList, outermost);

      css = (declarationsCSS === EMPTY_STRING) ?
              ruleSetsCSS : ///
              `${declarationsCSS}
${ruleSetsCSS}`;
    }

    return css;
  }

  static fromNodeAndTokens(node, tokens) {
    const types = typesFromNodeAndTokens(node, tokens),
          ruleSets = RuleSets.fromNodeAndTokens(node, tokens),
          declarations = Declarations.fromNodeAndTokens(node, tokens),
          media = new Media(types, ruleSets, declarations);

    return media;
  }
}

function typesFromNodeAndTokens(node, tokens) {
  const mediaTypesNonTerminalNode = mediaTypesNonTerminalNodeQuery(node);

  node = mediaTypesNonTerminalNode;  ///

  const mediaTypes = MediaTypes.fromNodeAndTokens(node, tokens),
        types = mediaTypes;

  return types;
}
