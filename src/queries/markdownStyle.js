"use strict";

import { Query } from "occam-query";

import { forEachCSSNode } from "../map/node/css";

const markdownStyleQueries = [];

forEachCSSNode((Class, markdownStyleRuleName) => {
  const expressionString = `//${markdownStyleRuleName}`,
        query = Query.fromExpressionString(expressionString),
        markdownStyleQuery = query;  ///

  markdownStyleQueries.push(markdownStyleQuery);
});

export default markdownStyleQueries;
