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
        var childNodes = this.getChildNodes();
        childNodes.forEach(function(childNode) {
            var childNodeNonTerminalNode = childNode.isNonTerminalNode();
            if (childNodeNonTerminalNode) {
                var nonTerminalNode = childNode; ///
                nonTerminalNode.getDescendantElements(descendantElements);
            }
        });
    }
    return descendantElements;
}
var elementMixins = {
    addDOMElement: addDOMElement,
    removeDOMElement: removeDOMElement,
    getDescendantElements: getDescendantElements
};
var _default = elementMixins;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXhpbnMvZWxlbWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gYWRkRE9NRWxlbWVudChwYXJlbnRET01FbGVtZW50LCBzaWJsaW5nRE9NRWxlbWVudCA9IG51bGwpIHtcbiAgaWYgKChwYXJlbnRET01FbGVtZW50ICE9PSBudWxsICkgJiYgKHRoaXMuZG9tRWxlbWVudCAhPT0gbnVsbCkpIHtcbiAgICBwYXJlbnRET01FbGVtZW50Lmluc2VydEJlZm9yZSh0aGlzLmRvbUVsZW1lbnQsIHNpYmxpbmdET01FbGVtZW50KTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZW1vdmVET01FbGVtZW50KHBhcmVudERPTUVsZW1lbnQpIHtcbiAgaWYgKChwYXJlbnRET01FbGVtZW50ICE9PSBudWxsICkgJiYgKHRoaXMuZG9tRWxlbWVudCAhPT0gbnVsbCkpIHtcbiAgICBwYXJlbnRET01FbGVtZW50LnJlbW92ZUNoaWxkKHRoaXMuZG9tRWxlbWVudCk7XG5cbiAgICB0aGlzLmRvbUVsZW1lbnQgPSBudWxsO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldERlc2NlbmRhbnRFbGVtZW50cyhkZXNjZW5kYW50RWxlbWVudHMgPSBbXSkge1xuICBjb25zdCBkb21FbGVtZW50ID0gdGhpcy5nZXRET01FbGVtZW50KCk7XG5cbiAgaWYgKGRvbUVsZW1lbnQgIT09IG51bGwpIHtcbiAgICBjb25zdCBkZXNjZW5kYW50RWxlbWVudCA9IHRoaXM7IC8vL1xuXG4gICAgZGVzY2VuZGFudEVsZW1lbnRzLnB1c2goZGVzY2VuZGFudEVsZW1lbnQpO1xuXG4gICAgY29uc3QgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpO1xuXG4gICAgY2hpbGROb2Rlcy5mb3JFYWNoKChjaGlsZE5vZGUpID0+IHtcbiAgICAgIGNvbnN0IGNoaWxkTm9kZU5vblRlcm1pbmFsTm9kZSA9IGNoaWxkTm9kZS5pc05vblRlcm1pbmFsTm9kZSgpO1xuXG4gICAgICBpZiAoY2hpbGROb2RlTm9uVGVybWluYWxOb2RlKSB7XG4gICAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IGNoaWxkTm9kZTsgIC8vL1xuXG4gICAgICAgIG5vblRlcm1pbmFsTm9kZS5nZXREZXNjZW5kYW50RWxlbWVudHMoZGVzY2VuZGFudEVsZW1lbnRzKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBkZXNjZW5kYW50RWxlbWVudHM7XG59XG5cbmNvbnN0IGVsZW1lbnRNaXhpbnMgPSB7XG4gIGFkZERPTUVsZW1lbnQsXG4gIHJlbW92ZURPTUVsZW1lbnQsXG4gIGdldERlc2NlbmRhbnRFbGVtZW50c1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZWxlbWVudE1peGlucztcbiJdLCJuYW1lcyI6WyJhZGRET01FbGVtZW50IiwicGFyZW50RE9NRWxlbWVudCIsInNpYmxpbmdET01FbGVtZW50IiwiZG9tRWxlbWVudCIsImluc2VydEJlZm9yZSIsInJlbW92ZURPTUVsZW1lbnQiLCJyZW1vdmVDaGlsZCIsImdldERlc2NlbmRhbnRFbGVtZW50cyIsImRlc2NlbmRhbnRFbGVtZW50cyIsImdldERPTUVsZW1lbnQiLCJkZXNjZW5kYW50RWxlbWVudCIsInB1c2giLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsImZvckVhY2giLCJjaGlsZE5vZGUiLCJjaGlsZE5vZGVOb25UZXJtaW5hbE5vZGUiLCJpc05vblRlcm1pbmFsTm9kZSIsIm5vblRlcm1pbmFsTm9kZSIsImVsZW1lbnRNaXhpbnMiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQThDQTs7O2VBQUE7OztBQTVDQSxTQUFTQSxjQUFjQyxnQkFBZ0I7UUFBRUMsb0JBQUFBLGlFQUFvQjtJQUMzRCxJQUFJLEFBQUNELHFCQUFxQixRQUFXLElBQUksQ0FBQ0UsVUFBVSxLQUFLLE1BQU87UUFDOURGLGlCQUFpQkcsWUFBWSxDQUFDLElBQUksQ0FBQ0QsVUFBVSxFQUFFRDtJQUNqRDtBQUNGO0FBRUEsU0FBU0csaUJBQWlCSixnQkFBZ0I7SUFDeEMsSUFBSSxBQUFDQSxxQkFBcUIsUUFBVyxJQUFJLENBQUNFLFVBQVUsS0FBSyxNQUFPO1FBQzlERixpQkFBaUJLLFdBQVcsQ0FBQyxJQUFJLENBQUNILFVBQVU7UUFFNUMsSUFBSSxDQUFDQSxVQUFVLEdBQUc7SUFDcEI7QUFDRjtBQUVBLFNBQVNJO1FBQXNCQyxxQkFBQUEsaUVBQXFCLEVBQUU7SUFDcEQsSUFBTUwsYUFBYSxJQUFJLENBQUNNLGFBQWE7SUFFckMsSUFBSU4sZUFBZSxNQUFNO1FBQ3ZCLElBQU1PLG9CQUFvQixJQUFJLEVBQUUsR0FBRztRQUVuQ0YsbUJBQW1CRyxJQUFJLENBQUNEO1FBRXhCLElBQU1FLGFBQWEsSUFBSSxDQUFDQyxhQUFhO1FBRXJDRCxXQUFXRSxPQUFPLENBQUMsU0FBQ0M7WUFDbEIsSUFBTUMsMkJBQTJCRCxVQUFVRSxpQkFBaUI7WUFFNUQsSUFBSUQsMEJBQTBCO2dCQUM1QixJQUFNRSxrQkFBa0JILFdBQVksR0FBRztnQkFFdkNHLGdCQUFnQlgscUJBQXFCLENBQUNDO1lBQ3hDO1FBQ0Y7SUFDRjtJQUVBLE9BQU9BO0FBQ1Q7QUFFQSxJQUFNVyxnQkFBZ0I7SUFDcEJuQixlQUFBQTtJQUNBSyxrQkFBQUE7SUFDQUUsdUJBQUFBO0FBQ0Y7SUFFQSxXQUFlWSJ9