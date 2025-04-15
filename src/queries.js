"use strict";

import { Query } from "occam-query";

import { ruleNames } from "./map/node//html";

const queries = ruleNames.map((ruleName) => {
  const expressionString = `//${ruleName}`,
        query = Query.fromExpressionString(expressionString);

  return query;
});

export default queries;