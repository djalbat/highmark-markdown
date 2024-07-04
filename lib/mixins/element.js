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
    getDescendantElements: getDescendantElements
};
var _default = elementMixins;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXhpbnMvZWxlbWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gZ2V0RGVzY2VuZGFudEVsZW1lbnRzKGRlc2NlbmRhbnRFbGVtZW50cyA9IFtdKSB7XG4gIGNvbnN0IGRvbUVsZW1lbnQgPSB0aGlzLmdldERPTUVsZW1lbnQoKTtcblxuICBpZiAoZG9tRWxlbWVudCAhPT0gbnVsbCkge1xuICAgIGNvbnN0IGRlc2NlbmRhbnRFbGVtZW50ID0gdGhpczsgLy8vXG5cbiAgICBkZXNjZW5kYW50RWxlbWVudHMucHVzaChkZXNjZW5kYW50RWxlbWVudCk7XG4gIH1cblxuICBjb25zdCBjaGlsZE5vZGVzID0gdGhpcy5nZXRDaGlsZE5vZGVzKCk7XG5cbiAgY2hpbGROb2Rlcy5mb3JFYWNoKChjaGlsZE5vZGUpID0+IHtcbiAgICBjb25zdCBjaGlsZE5vZGVOb25UZXJtaW5hbE5vZGUgPSBjaGlsZE5vZGUuaXNOb25UZXJtaW5hbE5vZGUoKTtcblxuICAgIGlmIChjaGlsZE5vZGVOb25UZXJtaW5hbE5vZGUpIHtcbiAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IGNoaWxkTm9kZTsgIC8vL1xuXG4gICAgICBub25UZXJtaW5hbE5vZGUuZ2V0RGVzY2VuZGFudEVsZW1lbnRzKGRlc2NlbmRhbnRFbGVtZW50cyk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gZGVzY2VuZGFudEVsZW1lbnRzO1xufVxuXG5jb25zdCBlbGVtZW50TWl4aW5zID0ge1xuICBnZXREZXNjZW5kYW50RWxlbWVudHNcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGVsZW1lbnRNaXhpbnM7XG4iXSwibmFtZXMiOlsiZ2V0RGVzY2VuZGFudEVsZW1lbnRzIiwiZGVzY2VuZGFudEVsZW1lbnRzIiwiZG9tRWxlbWVudCIsImdldERPTUVsZW1lbnQiLCJkZXNjZW5kYW50RWxlbWVudCIsInB1c2giLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsImZvckVhY2giLCJjaGlsZE5vZGUiLCJjaGlsZE5vZGVOb25UZXJtaW5hbE5vZGUiLCJpc05vblRlcm1pbmFsTm9kZSIsIm5vblRlcm1pbmFsTm9kZSIsImVsZW1lbnRNaXhpbnMiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQThCQTs7O2VBQUE7OztBQTVCQSxTQUFTQTtRQUFzQkMscUJBQUFBLGlFQUFxQixFQUFFO0lBQ3BELElBQU1DLGFBQWEsSUFBSSxDQUFDQyxhQUFhO0lBRXJDLElBQUlELGVBQWUsTUFBTTtRQUN2QixJQUFNRSxvQkFBb0IsSUFBSSxFQUFFLEdBQUc7UUFFbkNILG1CQUFtQkksSUFBSSxDQUFDRDtJQUMxQjtJQUVBLElBQU1FLGFBQWEsSUFBSSxDQUFDQyxhQUFhO0lBRXJDRCxXQUFXRSxPQUFPLENBQUMsU0FBQ0M7UUFDbEIsSUFBTUMsMkJBQTJCRCxVQUFVRSxpQkFBaUI7UUFFNUQsSUFBSUQsMEJBQTBCO1lBQzVCLElBQU1FLGtCQUFrQkgsV0FBWSxHQUFHO1lBRXZDRyxnQkFBZ0JaLHFCQUFxQixDQUFDQztRQUN4QztJQUNGO0lBRUEsT0FBT0E7QUFDVDtBQUVBLElBQU1ZLGdCQUFnQjtJQUNwQmIsdUJBQUFBO0FBQ0Y7SUFFQSxXQUFlYSJ9