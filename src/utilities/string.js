"use strict";

import { stringUtilities } from "necessary";

import { EMPTY_STRING } from "../constants";

const { substring } = stringUtilities;

export function trim(string) {
  const shavenString = string.replace(/^.|.$/g, EMPTY_STRING);

  return shavenString;
}

export function chop(string, start, deleteCount) {
  let begin,
      end;

  begin = -0;

  end = start;  ///

  const leftString = substring(string, begin, end);

  begin = start + deleteCount;

  end = Infinity; ///

  const rightString = substring(string, begin, end);

  string = leftString + rightString;  ///

  return string;
}

export function splice(string, start, deleteCount, middleString) {
  let begin,
      end;

  begin = -0;

  end = start;  ///

  const leftString = substring(string, begin, end);

  begin = start + deleteCount;

  end = Infinity; ///

  const rightString = substring(string, begin, end);

  string = leftString + middleString + rightString;  ///

  return string;
}

