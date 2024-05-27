"use strict";

export function isIndexOdd(index) {
  const indexOdd = (index % 2) === 1;

  return indexOdd;
}

export function isIndexEven(index) {
  const indexEven = (index % 2) === 0;

  return indexEven;
}
