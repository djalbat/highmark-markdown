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
    this.forEachChildNode(function(childNode) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXhpbnMvZWxlbWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gZ2V0RGVzY2VuZGFudEVsZW1lbnRzKGRlc2NlbmRhbnRFbGVtZW50cyA9IFtdKSB7XG4gIGNvbnN0IGRvbUVsZW1lbnQgPSB0aGlzLmdldERPTUVsZW1lbnQoKTtcblxuICBpZiAoZG9tRWxlbWVudCAhPT0gbnVsbCkge1xuICAgIGNvbnN0IGRlc2NlbmRhbnRFbGVtZW50ID0gdGhpczsgLy8vXG5cbiAgICBkZXNjZW5kYW50RWxlbWVudHMucHVzaChkZXNjZW5kYW50RWxlbWVudCk7XG4gIH1cblxuICB0aGlzLmZvckVhY2hDaGlsZE5vZGUoKGNoaWxkTm9kZSkgPT4ge1xuICAgIGNvbnN0IGNoaWxkTm9kZU5vblRlcm1pbmFsTm9kZSA9IGNoaWxkTm9kZS5pc05vblRlcm1pbmFsTm9kZSgpO1xuXG4gICAgaWYgKGNoaWxkTm9kZU5vblRlcm1pbmFsTm9kZSkge1xuICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gY2hpbGROb2RlOyAgLy8vXG5cbiAgICAgIG5vblRlcm1pbmFsTm9kZS5nZXREZXNjZW5kYW50RWxlbWVudHMoZGVzY2VuZGFudEVsZW1lbnRzKTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBkZXNjZW5kYW50RWxlbWVudHM7XG59XG5cbmNvbnN0IGVsZW1lbnRNaXhpbnMgPSB7XG4gIGdldERlc2NlbmRhbnRFbGVtZW50c1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZWxlbWVudE1peGlucztcbiJdLCJuYW1lcyI6WyJnZXREZXNjZW5kYW50RWxlbWVudHMiLCJkZXNjZW5kYW50RWxlbWVudHMiLCJkb21FbGVtZW50IiwiZ2V0RE9NRWxlbWVudCIsImRlc2NlbmRhbnRFbGVtZW50IiwicHVzaCIsImZvckVhY2hDaGlsZE5vZGUiLCJjaGlsZE5vZGUiLCJjaGlsZE5vZGVOb25UZXJtaW5hbE5vZGUiLCJpc05vblRlcm1pbmFsTm9kZSIsIm5vblRlcm1pbmFsTm9kZSIsImVsZW1lbnRNaXhpbnMiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQTRCQTs7O2VBQUE7OztBQTFCQSxTQUFTQTtRQUFzQkMscUJBQUFBLGlFQUFxQixFQUFFO0lBQ3BELElBQU1DLGFBQWEsSUFBSSxDQUFDQyxhQUFhO0lBRXJDLElBQUlELGVBQWUsTUFBTTtRQUN2QixJQUFNRSxvQkFBb0IsSUFBSSxFQUFFLEdBQUc7UUFFbkNILG1CQUFtQkksSUFBSSxDQUFDRDtJQUMxQjtJQUVBLElBQUksQ0FBQ0UsZ0JBQWdCLENBQUMsU0FBQ0M7UUFDckIsSUFBTUMsMkJBQTJCRCxVQUFVRSxpQkFBaUI7UUFFNUQsSUFBSUQsMEJBQTBCO1lBQzVCLElBQU1FLGtCQUFrQkgsV0FBWSxHQUFHO1lBRXZDRyxnQkFBZ0JWLHFCQUFxQixDQUFDQztRQUN4QztJQUNGO0lBRUEsT0FBT0E7QUFDVDtBQUVBLElBQU1VLGdCQUFnQjtJQUNwQlgsdUJBQUFBO0FBQ0Y7SUFFQSxXQUFlVyJ9