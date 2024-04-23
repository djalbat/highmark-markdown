"use strict";

import Medias from "./medias";
import RuleSets from "./ruleSets";
import Declarations from "./declarations";

export default class Division {
  constructor(medias, ruleSets, declarations, mediaType, selectorsList) {
    this.medias = medias;
    this.ruleSets = ruleSets;
    this.declarations = declarations;
    this.mediaType = mediaType;
    this.selectorsList = selectorsList;
  }

  getMedias() {
    return this.medias;
  }

  getRuleSets() {
    return this.ruleSets;
  }

  getDeclarations() {
    return this.declarations;
  }

  getMediaType() {
    return this.mediaType;
  }

  getSelectorsList() {
    return this.selectorsList;
  }

  asCSS() {
    const outermost = true,
          mediasCSS = this.medias.asCSS(this.mediaType, this.selectorsList, outermost),
          ruleSetsCSS = this.ruleSets.asCSS(this.selectorsList, outermost),
          declarationsCSS = this.declarations.asCSS(this.selectorsList, outermost),
          css = `

${declarationsCSS}
${mediasCSS}
${ruleSetsCSS}

`;

    return css;
  }

  static fromNodeTokensMediaTypeAndSelectorsList(node, tokens, mediaType, selectorsList) {
    const medias = Medias.fromNodeAndTokens(node, tokens),
          ruleSets = RuleSets.fromNodeAndTokens(node, tokens),
          declarations = Declarations.fromNodeAndTokens(node, tokens),
          division = new Division(medias, ruleSets, declarations, mediaType, selectorsList);

    return division;
  }
}
