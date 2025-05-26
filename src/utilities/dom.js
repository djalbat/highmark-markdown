"use strict";

export function insertAfter(domElement, parentDOMElement, siblingDOMElement) {
  const nextSiblingDOMElement = (siblingDOMElement !== null) ?
                                   siblingDOMElement.nextSibling :  ///
                                     parentDOMElement.firstChild; ///

  parentDOMElement.insertBefore(domElement, nextSiblingDOMElement);
}

export default {
  insertAfter
};
