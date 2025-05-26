"use strict";

export function insertAfter(domElement, parentDOMElement, siblingDOMElement) {
  const nextSiblingDOMElement = (siblingDOMElement !== null) ?
                                   siblingDOMElement.nextSibling :  ///
                                     null;

  parentDOMElement.insertBefore(domElement, nextSiblingDOMElement);
}

export default {
  insertAfter,
};
