"use strict";

export function ruleNamesExpressionFromTagNameMap(tagNameMap) {
  const ruleNames = Object.keys(tagNameMap);

  ruleNames.reverse();

  const ruleNamesExpression = ruleNames.reduce((ruleNamesExpression, ruleName) => {
          const tagName = tagNameMap[ruleName];

          if (tagName !== null) {
            ruleNamesExpression = (ruleNamesExpression === null) ?
                                    ruleName :
                                     `${ruleNamesExpression}|${ruleName}`;
          }

          return ruleNamesExpression;
        }, null);

  return ruleNamesExpression
}
