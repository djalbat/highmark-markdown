"use strict";

export function ruleNamesExpressionFromElementMap(elementMap) {
  const ruleNames = Object.keys(elementMap);

  ruleNames.reverse();

  const ruleNamesExpression = ruleNames.reduce((ruleNamesExpression, ruleName) => {
          const { tagName } = elementMap[ruleName];

          if (tagName !== null) {
            ruleNamesExpression = (ruleNamesExpression === null) ?
                                    ruleName :
                                     `${ruleNamesExpression}|${ruleName}`;
          }

          return ruleNamesExpression;
        }, null);

  return ruleNamesExpression
}
