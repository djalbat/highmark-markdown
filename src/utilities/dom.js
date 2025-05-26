"use strict";

export function remove(domElement, parentDOMElement) {
  parentDOMElement.removeChild(domElement);
}

export function insertAfter(domElement, parentDOMElement, siblingDOMElement) {
  const referenceDOMElement = siblingDOMElement.nextSibling;  ///

  parentDOMElement.insertBefore(domElement, referenceDOMElement);
}

export function insertBefore(domElement, parentDOMElement, siblingDOMElement) {
  const referenceDOMElement = siblingDOMElement;  ///

  parentDOMElement.insertBefore(domElement, referenceDOMElement);
}

export function insertAfterwards(domElement, parentDOMElement) {
  const referenceDOMElement = null;

  parentDOMElement.insertBefore(domElement, referenceDOMElement);
}

export function insertBeforehand(domElement, parentDOMElement) {
  const referenceDOMElement = parentDOMElement.firstChild;  ///

  parentDOMElement.insertBefore(domElement, referenceDOMElement);
}

export default {
  remove,
  insertAfter,
  insertBefore,
  insertAfterwards,
  insertBeforehand
};
