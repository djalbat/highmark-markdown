"use strict";

import { Query } from "occam-query";

import { forEachHTMLNode } from "../map/node//html";

const markdownQueries = [];

forEachHTMLNode((Class, ruleName) => {
  const expressionString = `//${ruleName}`,
        query = Query.fromExpressionString(expressionString),
        markdownQuery = query;  ///

  markdownQueries.push(markdownQuery);
});

export default markdownQueries;
