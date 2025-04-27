"use strict";

import { Query } from "occam-query";

import { forEachHTMLNode } from "./map/node//html";

const queries = [];

forEachHTMLNode((Class, ruleName) => {
  const expressionString = `//${ruleName}`,
        query = Query.fromExpressionString(expressionString);

  queries.push(query);
});

export default queries;