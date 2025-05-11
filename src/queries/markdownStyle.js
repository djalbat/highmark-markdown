"use strict";

import { Query } from "occam-query";

import { forEachCSSNode } from "../map/node//css";

const markdownStyleQueries = [];

forEachCSSNode((Class, ruleName) => {
  const expressionString = `//${ruleName}`,
        query = Query.fromExpressionString(expressionString),
        markdownStyleQuery = query;  ///

  markdownStyleQueries.push(markdownStyleQuery);
});

export default markdownStyleQueries;
