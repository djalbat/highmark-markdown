"use strict";

import { Query } from "occam-query";

import { forEachHTMLNode } from "../map/node/html";

const markdownQueries = [];

forEachHTMLNode((Class, markdownRuleName) => {
  const expressionString = `//${markdownRuleName}`,
        query = Query.fromExpressionString(expressionString),
        markdownQuery = query;  ///

  markdownQueries.push(markdownQuery);
});

export default markdownQueries;
