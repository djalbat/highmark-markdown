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
var _constants = require("../constants");
function addDOMElement(domElement) {
    var parentDOMElement = this.domElement; ///
    parentDOMElement.appendChild(domElement);
}
function removeDOMElements() {
    var innerHTML = _constants.EMPTY_STRING; ///
    Object.assign(this.domElement, {
        innerHTML: innerHTML
    });
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
    removeDOMElements: removeDOMElements,
    getDescendantElements: getDescendantElements
};
var _default = elementMixins;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXhpbnMvZWxlbWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHtFTVBUWV9TVFJJTkd9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuZnVuY3Rpb24gYWRkRE9NRWxlbWVudChkb21FbGVtZW50KSB7XG4gIGNvbnN0IHBhcmVudERPTUVsZW1lbnQgPSB0aGlzLmRvbUVsZW1lbnQ7IC8vL1xuXG4gIHBhcmVudERPTUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9tRWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZURPTUVsZW1lbnRzKCkge1xuICBjb25zdCBpbm5lckhUTUwgPSBFTVBUWV9TVFJJTkc7IC8vL1xuXG4gIE9iamVjdC5hc3NpZ24odGhpcy5kb21FbGVtZW50LCB7XG4gICAgaW5uZXJIVE1MXG4gIH0pO1xufVxuXG5mdW5jdGlvbiBnZXREZXNjZW5kYW50RWxlbWVudHMoZGVzY2VuZGFudEVsZW1lbnRzID0gW10pIHtcbiAgY29uc3QgZG9tRWxlbWVudCA9IHRoaXMuZ2V0RE9NRWxlbWVudCgpO1xuXG4gIGlmIChkb21FbGVtZW50ICE9PSBudWxsKSB7XG4gICAgY29uc3QgZGVzY2VuZGFudEVsZW1lbnQgPSB0aGlzOyAvLy9cblxuICAgIGRlc2NlbmRhbnRFbGVtZW50cy5wdXNoKGRlc2NlbmRhbnRFbGVtZW50KTtcbiAgfVxuXG4gIGNvbnN0IGNoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKTtcblxuICBjaGlsZE5vZGVzLmZvckVhY2goKGNoaWxkTm9kZSkgPT4ge1xuICAgIGNvbnN0IGNoaWxkTm9kZU5vblRlcm1pbmFsTm9kZSA9IGNoaWxkTm9kZS5pc05vblRlcm1pbmFsTm9kZSgpO1xuXG4gICAgaWYgKGNoaWxkTm9kZU5vblRlcm1pbmFsTm9kZSkge1xuICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gY2hpbGROb2RlOyAgLy8vXG5cbiAgICAgIG5vblRlcm1pbmFsTm9kZS5nZXREZXNjZW5kYW50RWxlbWVudHMoZGVzY2VuZGFudEVsZW1lbnRzKTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBkZXNjZW5kYW50RWxlbWVudHM7XG59XG5cbmNvbnN0IGVsZW1lbnRNaXhpbnMgPSB7XG4gIGFkZERPTUVsZW1lbnQsXG4gIHJlbW92ZURPTUVsZW1lbnRzLFxuICBnZXREZXNjZW5kYW50RWxlbWVudHNcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGVsZW1lbnRNaXhpbnM7XG4iXSwibmFtZXMiOlsiYWRkRE9NRWxlbWVudCIsImRvbUVsZW1lbnQiLCJwYXJlbnRET01FbGVtZW50IiwiYXBwZW5kQ2hpbGQiLCJyZW1vdmVET01FbGVtZW50cyIsImlubmVySFRNTCIsIkVNUFRZX1NUUklORyIsIk9iamVjdCIsImFzc2lnbiIsImdldERlc2NlbmRhbnRFbGVtZW50cyIsImRlc2NlbmRhbnRFbGVtZW50cyIsImdldERPTUVsZW1lbnQiLCJkZXNjZW5kYW50RWxlbWVudCIsInB1c2giLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsImZvckVhY2giLCJjaGlsZE5vZGUiLCJjaGlsZE5vZGVOb25UZXJtaW5hbE5vZGUiLCJpc05vblRlcm1pbmFsTm9kZSIsIm5vblRlcm1pbmFsTm9kZSIsImVsZW1lbnRNaXhpbnMiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBZ0RBOzs7ZUFBQTs7O3lCQTlDMkI7QUFFM0IsU0FBU0EsY0FBY0MsVUFBVTtJQUMvQixJQUFNQyxtQkFBbUIsSUFBSSxDQUFDRCxVQUFVLEVBQUUsR0FBRztJQUU3Q0MsaUJBQWlCQyxXQUFXLENBQUNGO0FBQy9CO0FBRUEsU0FBU0c7SUFDUCxJQUFNQyxZQUFZQyx1QkFBWSxFQUFFLEdBQUc7SUFFbkNDLE9BQU9DLE1BQU0sQ0FBQyxJQUFJLENBQUNQLFVBQVUsRUFBRTtRQUM3QkksV0FBQUE7SUFDRjtBQUNGO0FBRUEsU0FBU0k7UUFBc0JDLHFCQUFBQSxpRUFBcUIsRUFBRTtJQUNwRCxJQUFNVCxhQUFhLElBQUksQ0FBQ1UsYUFBYTtJQUVyQyxJQUFJVixlQUFlLE1BQU07UUFDdkIsSUFBTVcsb0JBQW9CLElBQUksRUFBRSxHQUFHO1FBRW5DRixtQkFBbUJHLElBQUksQ0FBQ0Q7SUFDMUI7SUFFQSxJQUFNRSxhQUFhLElBQUksQ0FBQ0MsYUFBYTtJQUVyQ0QsV0FBV0UsT0FBTyxDQUFDLFNBQUNDO1FBQ2xCLElBQU1DLDJCQUEyQkQsVUFBVUUsaUJBQWlCO1FBRTVELElBQUlELDBCQUEwQjtZQUM1QixJQUFNRSxrQkFBa0JILFdBQVksR0FBRztZQUV2Q0csZ0JBQWdCWCxxQkFBcUIsQ0FBQ0M7UUFDeEM7SUFDRjtJQUVBLE9BQU9BO0FBQ1Q7QUFFQSxJQUFNVyxnQkFBZ0I7SUFDcEJyQixlQUFBQTtJQUNBSSxtQkFBQUE7SUFDQUssdUJBQUFBO0FBQ0Y7SUFFQSxXQUFlWSJ9