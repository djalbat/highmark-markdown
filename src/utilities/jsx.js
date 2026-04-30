"use strict";

export function mountElement(domElement) {
  const element = domElement.__element__;

  if (!element) { ///
    return;
  }

  const descendantElements = element.getDescendantElements(),
        elements = [
          element,
          ...descendantElements
        ];

  elements.reverse(); ///

  elements.forEach((element) => {
    element.didMount && element.didMount();
  });
}

export function unmountElement(domElement) {
  const element = domElement.__element__;

  if (!element) { ///
    return;
  }

  const descendantElements = element.getDescendantElements(),
        elements = [
          element,
          ...descendantElements
        ];

  elements.forEach((element) => {
    element.willUnmount && element.willUnmount();
  });
}
