"use strict";

export function findJSXElement(tagName, context) {
  const { JSXElements = [] } = context,
        JSXElement = JSXElements.find((JSXElement) => {
          const { defaultProperties = {} } = JSXElement,
                { name } = defaultProperties,
                nameTagName = (name === tagName);

          if (nameTagName) {
            return true;
          }
        }) || null;

  return JSXElement;
}

export function mountJSXElement(jsxElement) {
  const element = jsxElement, ///
        descendantElements = element.getDescendantElements(),
        elements = [
          element,
          ...descendantElements
        ];

  elements.reverse(); ///

  elements.forEach((element) => {
    element.didMount && element.didMount();
  });
}

export function unmountJSXElement(jsxElement) {
  const element = jsxElement, ///
        descendantElements = element.getDescendantElements(),
        elements = [
          element,
          ...descendantElements
        ];

  elements.forEach((element) => {
    element.willUnmount && element.willUnmount();
  });
}
