"use strict";

import CSSNode from "../../node/css";

import {COLON, EMPTY_STRING, SINGLE_SPACE} from "../../constants";

export default class SelectorsCSSNode extends CSSNode {
  asCSS(context) {
    let css;

    const { cssSelectorsString } = context;

    css = this.reduceChildNode((css, childNode) => {
      const childNodeCSS = childNode.asCSS(context);

      css = `${css}${childNodeCSS}`;

      return css;
    }, EMPTY_STRING);

    if (cssSelectorsString !== EMPTY_STRING) {
      const cssStartsWithColon = css.startsWith(COLON),
            separator = cssStartsWithColon ?
                          EMPTY_STRING :
                            SINGLE_SPACE;

      css = `${cssSelectorsString}${separator}${css}`;
    }

    return css;
  }

  static fromNothing() { return CSSNode.fromNothing(SelectorsCSSNode); }

  static fromOuterNode(outerNode) { return CSSNode.fromOuterNode(SelectorsCSSNode, outerNode); }
}
