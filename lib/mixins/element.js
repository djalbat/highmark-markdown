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
function addDOMElement(domElement) {
    var parentDOMElement = this.domElement; ///
    parentDOMElement.appendChild(domElement);
}
function removeDOMElement(domElement) {
    domElement.remove();
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXhpbnMvZWxlbWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gYWRkRE9NRWxlbWVudChkb21FbGVtZW50KSB7XG4gIGNvbnN0IHBhcmVudERPTUVsZW1lbnQgPSB0aGlzLmRvbUVsZW1lbnQ7IC8vL1xuXG4gIHBhcmVudERPTUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9tRWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZURPTUVsZW1lbnQoZG9tRWxlbWVudCkge1xuICBkb21FbGVtZW50LnJlbW92ZSgpO1xufVxuXG5mdW5jdGlvbiBnZXREZXNjZW5kYW50RWxlbWVudHMoZGVzY2VuZGFudEVsZW1lbnRzID0gW10pIHtcbiAgY29uc3QgZG9tRWxlbWVudCA9IHRoaXMuZ2V0RE9NRWxlbWVudCgpO1xuXG4gIGlmIChkb21FbGVtZW50ICE9PSBudWxsKSB7XG4gICAgY29uc3QgZGVzY2VuZGFudEVsZW1lbnQgPSB0aGlzOyAvLy9cblxuICAgIGRlc2NlbmRhbnRFbGVtZW50cy5wdXNoKGRlc2NlbmRhbnRFbGVtZW50KTtcbiAgfVxuXG4gIGNvbnN0IGNoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKTtcblxuICBjaGlsZE5vZGVzLmZvckVhY2goKGNoaWxkTm9kZSkgPT4ge1xuICAgIGNvbnN0IGNoaWxkTm9kZU5vblRlcm1pbmFsTm9kZSA9IGNoaWxkTm9kZS5pc05vblRlcm1pbmFsTm9kZSgpO1xuXG4gICAgaWYgKGNoaWxkTm9kZU5vblRlcm1pbmFsTm9kZSkge1xuICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gY2hpbGROb2RlOyAgLy8vXG5cbiAgICAgIG5vblRlcm1pbmFsTm9kZS5nZXREZXNjZW5kYW50RWxlbWVudHMoZGVzY2VuZGFudEVsZW1lbnRzKTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBkZXNjZW5kYW50RWxlbWVudHM7XG59XG5cbmNvbnN0IGVsZW1lbnRNaXhpbnMgPSB7XG4gIGFkZERPTUVsZW1lbnQsXG4gIHJlbW92ZURPTUVsZW1lbnQsXG4gIGdldERlc2NlbmRhbnRFbGVtZW50c1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZWxlbWVudE1peGlucztcbiJdLCJuYW1lcyI6WyJhZGRET01FbGVtZW50IiwiZG9tRWxlbWVudCIsInBhcmVudERPTUVsZW1lbnQiLCJhcHBlbmRDaGlsZCIsInJlbW92ZURPTUVsZW1lbnQiLCJyZW1vdmUiLCJnZXREZXNjZW5kYW50RWxlbWVudHMiLCJkZXNjZW5kYW50RWxlbWVudHMiLCJnZXRET01FbGVtZW50IiwiZGVzY2VuZGFudEVsZW1lbnQiLCJwdXNoIiwiY2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJmb3JFYWNoIiwiY2hpbGROb2RlIiwiY2hpbGROb2RlTm9uVGVybWluYWxOb2RlIiwiaXNOb25UZXJtaW5hbE5vZGUiLCJub25UZXJtaW5hbE5vZGUiLCJlbGVtZW50TWl4aW5zIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBMENBOzs7ZUFBQTs7O0FBeENBLFNBQVNBLGNBQWNDLFVBQVU7SUFDL0IsSUFBTUMsbUJBQW1CLElBQUksQ0FBQ0QsVUFBVSxFQUFFLEdBQUc7SUFFN0NDLGlCQUFpQkMsV0FBVyxDQUFDRjtBQUMvQjtBQUVBLFNBQVNHLGlCQUFpQkgsVUFBVTtJQUNsQ0EsV0FBV0ksTUFBTTtBQUNuQjtBQUVBLFNBQVNDO1FBQXNCQyxxQkFBQUEsaUVBQXFCLEVBQUU7SUFDcEQsSUFBTU4sYUFBYSxJQUFJLENBQUNPLGFBQWE7SUFFckMsSUFBSVAsZUFBZSxNQUFNO1FBQ3ZCLElBQU1RLG9CQUFvQixJQUFJLEVBQUUsR0FBRztRQUVuQ0YsbUJBQW1CRyxJQUFJLENBQUNEO0lBQzFCO0lBRUEsSUFBTUUsYUFBYSxJQUFJLENBQUNDLGFBQWE7SUFFckNELFdBQVdFLE9BQU8sQ0FBQyxTQUFDQztRQUNsQixJQUFNQywyQkFBMkJELFVBQVVFLGlCQUFpQjtRQUU1RCxJQUFJRCwwQkFBMEI7WUFDNUIsSUFBTUUsa0JBQWtCSCxXQUFZLEdBQUc7WUFFdkNHLGdCQUFnQlgscUJBQXFCLENBQUNDO1FBQ3hDO0lBQ0Y7SUFFQSxPQUFPQTtBQUNUO0FBRUEsSUFBTVcsZ0JBQWdCO0lBQ3BCbEIsZUFBQUE7SUFDQUksa0JBQUFBO0lBQ0FFLHVCQUFBQTtBQUNGO0lBRUEsV0FBZVkifQ==