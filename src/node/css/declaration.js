"use strict";

import CSSNode from "../../node/css";

export default class DeclarationCSSNode extends CSSNode {
  asCSS(context) {
    const name = this.fromFirstChildNode((firstChildNode) => {
            const nameCSSNode = firstChildNode, ///
                  nameCSSNodeCSS = nameCSSNode.asCSS(context),
                  name = nameCSSNodeCSS;  ///

            return name;
          }),
          values = this.fromSecondChildNode((secondChildNode) => {
            const valuesCSSNode = secondChildNode,  ///
                  valuesCSSNodeCSS = valuesCSSNode.asCSS(context),
                  values = valuesCSSNodeCSS;  ///

            return values;
          }),
          css = `  ${name}: ${values};
`;

    return css;
  }

  static fromNothing() { return CSSNode.fromNothing(DeclarationCSSNode); }

  static fromOuterNode(outerNode) { return CSSNode.fromOuterNode(DeclarationCSSNode, outerNode); }
}
