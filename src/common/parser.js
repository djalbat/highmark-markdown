"use strict";

import { State } from "occam-grammars";
import { CommonParser as CommonParserBase } from "occam-parsers";

export default class CommonParser extends CommonParserBase {
  static State = State;
}
