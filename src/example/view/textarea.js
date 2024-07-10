"use strict";

import withStyle from "easy-with-style";  ///

import { Textarea } from "easy";

export default withStyle(Textarea)`

  width: 100%;
  border: 1px solid darkgrey;
  resize: vertical;
  padding: 0.25rem;
  font-size: 1.2rem;
  min-height: 24rem;
  line-height: 1.5rem;
  white-space: pre;
  font-family: monospace;

`;
