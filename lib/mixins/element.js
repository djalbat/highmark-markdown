"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
function addDOMElement(parentDOMElement) {
    var siblingDOMElement = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
    if (parentDOMElement !== null && this.domElement !== null) {
        parentDOMElement.insertBefore(this.domElement, siblingDOMElement);
    }
}
function removeDOMElement(parentDOMElement) {
    if (parentDOMElement !== null && this.domElement !== null) {
        parentDOMElement.removeChild(this.domElement);
        this.domElement = null;
    }
}
function getDescendantElements() {
    var descendantElements = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    var domElement = this.getDOMElement();
    if (domElement !== null) {
        var descendantElement = this; ///
        descendantElements.push(descendantElement);
    }
    var childNodes = this.getChildNodes();
    childNodes.forEach(function(childNode) {
        var childNodeNonTerminalNode = childNode.isNonTerminalNode();
        if (childNodeNonTerminalNode) {
            var nonTerminalNode = childNode; ///
            nonTerminalNode.getDescendantElements(descendantElements);
        }
    });
    return descendantElements;
}
var elementMixins = {
    addDOMElement: addDOMElement,
    removeDOMElement: removeDOMElement,
    getDescendantElements: getDescendantElements
};
var _default = elementMixins;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXhpbnMvZWxlbWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gYWRkRE9NRWxlbWVudChwYXJlbnRET01FbGVtZW50LCBzaWJsaW5nRE9NRWxlbWVudCA9IG51bGwpIHtcbiAgaWYgKChwYXJlbnRET01FbGVtZW50ICE9PSBudWxsICkgJiYgKHRoaXMuZG9tRWxlbWVudCAhPT0gbnVsbCkpIHtcbiAgICBwYXJlbnRET01FbGVtZW50Lmluc2VydEJlZm9yZSh0aGlzLmRvbUVsZW1lbnQsIHNpYmxpbmdET01FbGVtZW50KTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZW1vdmVET01FbGVtZW50KHBhcmVudERPTUVsZW1lbnQpIHtcbiAgaWYgKChwYXJlbnRET01FbGVtZW50ICE9PSBudWxsICkgJiYgKHRoaXMuZG9tRWxlbWVudCAhPT0gbnVsbCkpIHtcbiAgICBwYXJlbnRET01FbGVtZW50LnJlbW92ZUNoaWxkKHRoaXMuZG9tRWxlbWVudCk7XG5cbiAgICB0aGlzLmRvbUVsZW1lbnQgPSBudWxsO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldERlc2NlbmRhbnRFbGVtZW50cyhkZXNjZW5kYW50RWxlbWVudHMgPSBbXSkge1xuICBjb25zdCBkb21FbGVtZW50ID0gdGhpcy5nZXRET01FbGVtZW50KCk7XG5cbiAgaWYgKGRvbUVsZW1lbnQgIT09IG51bGwpIHtcbiAgICBjb25zdCBkZXNjZW5kYW50RWxlbWVudCA9IHRoaXM7IC8vL1xuXG4gICAgZGVzY2VuZGFudEVsZW1lbnRzLnB1c2goZGVzY2VuZGFudEVsZW1lbnQpO1xuICB9XG5cbiAgY29uc3QgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpO1xuXG4gIGNoaWxkTm9kZXMuZm9yRWFjaCgoY2hpbGROb2RlKSA9PiB7XG4gICAgY29uc3QgY2hpbGROb2RlTm9uVGVybWluYWxOb2RlID0gY2hpbGROb2RlLmlzTm9uVGVybWluYWxOb2RlKCk7XG5cbiAgICBpZiAoY2hpbGROb2RlTm9uVGVybWluYWxOb2RlKSB7XG4gICAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBjaGlsZE5vZGU7ICAvLy9cblxuICAgICAgbm9uVGVybWluYWxOb2RlLmdldERlc2NlbmRhbnRFbGVtZW50cyhkZXNjZW5kYW50RWxlbWVudHMpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGRlc2NlbmRhbnRFbGVtZW50cztcbn1cblxuY29uc3QgZWxlbWVudE1peGlucyA9IHtcbiAgYWRkRE9NRWxlbWVudCxcbiAgcmVtb3ZlRE9NRWxlbWVudCxcbiAgZ2V0RGVzY2VuZGFudEVsZW1lbnRzXG59O1xuXG5leHBvcnQgZGVmYXVsdCBlbGVtZW50TWl4aW5zO1xuIl0sIm5hbWVzIjpbImFkZERPTUVsZW1lbnQiLCJwYXJlbnRET01FbGVtZW50Iiwic2libGluZ0RPTUVsZW1lbnQiLCJkb21FbGVtZW50IiwiaW5zZXJ0QmVmb3JlIiwicmVtb3ZlRE9NRWxlbWVudCIsInJlbW92ZUNoaWxkIiwiZ2V0RGVzY2VuZGFudEVsZW1lbnRzIiwiZGVzY2VuZGFudEVsZW1lbnRzIiwiZ2V0RE9NRWxlbWVudCIsImRlc2NlbmRhbnRFbGVtZW50IiwicHVzaCIsImNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwiZm9yRWFjaCIsImNoaWxkTm9kZSIsImNoaWxkTm9kZU5vblRlcm1pbmFsTm9kZSIsImlzTm9uVGVybWluYWxOb2RlIiwibm9uVGVybWluYWxOb2RlIiwiZWxlbWVudE1peGlucyJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBOENBOzs7ZUFBQTs7O0FBNUNBLFNBQVNBLGNBQWNDLGdCQUFnQjtRQUFFQyxvQkFBQUEsaUVBQW9CO0lBQzNELElBQUksQUFBQ0QscUJBQXFCLFFBQVcsSUFBSSxDQUFDRSxVQUFVLEtBQUssTUFBTztRQUM5REYsaUJBQWlCRyxZQUFZLENBQUMsSUFBSSxDQUFDRCxVQUFVLEVBQUVEO0lBQ2pEO0FBQ0Y7QUFFQSxTQUFTRyxpQkFBaUJKLGdCQUFnQjtJQUN4QyxJQUFJLEFBQUNBLHFCQUFxQixRQUFXLElBQUksQ0FBQ0UsVUFBVSxLQUFLLE1BQU87UUFDOURGLGlCQUFpQkssV0FBVyxDQUFDLElBQUksQ0FBQ0gsVUFBVTtRQUU1QyxJQUFJLENBQUNBLFVBQVUsR0FBRztJQUNwQjtBQUNGO0FBRUEsU0FBU0k7UUFBc0JDLHFCQUFBQSxpRUFBcUIsRUFBRTtJQUNwRCxJQUFNTCxhQUFhLElBQUksQ0FBQ00sYUFBYTtJQUVyQyxJQUFJTixlQUFlLE1BQU07UUFDdkIsSUFBTU8sb0JBQW9CLElBQUksRUFBRSxHQUFHO1FBRW5DRixtQkFBbUJHLElBQUksQ0FBQ0Q7SUFDMUI7SUFFQSxJQUFNRSxhQUFhLElBQUksQ0FBQ0MsYUFBYTtJQUVyQ0QsV0FBV0UsT0FBTyxDQUFDLFNBQUNDO1FBQ2xCLElBQU1DLDJCQUEyQkQsVUFBVUUsaUJBQWlCO1FBRTVELElBQUlELDBCQUEwQjtZQUM1QixJQUFNRSxrQkFBa0JILFdBQVksR0FBRztZQUV2Q0csZ0JBQWdCWCxxQkFBcUIsQ0FBQ0M7UUFDeEM7SUFDRjtJQUVBLE9BQU9BO0FBQ1Q7QUFFQSxJQUFNVyxnQkFBZ0I7SUFDcEJuQixlQUFBQTtJQUNBSyxrQkFBQUE7SUFDQUUsdUJBQUFBO0FBQ0Y7SUFFQSxXQUFlWSJ9