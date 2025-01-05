"use strict";

export function constructElement(element, domElement) {
  element.domElement = domElement;
}

export function destroyElement(element) {
  delete element.domElement;
}
