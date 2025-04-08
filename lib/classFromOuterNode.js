"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ClassFromOuterNode;
    }
});
var _html = /*#__PURE__*/ _interop_require_default(require("./node/html"));
var _html1 = /*#__PURE__*/ _interop_require_default(require("./nodeMap/html"));
var _topmost = /*#__PURE__*/ _interop_require_default(require("./node/html/topmost"));
var _verticalSpace = /*#__PURE__*/ _interop_require_default(require("./node/html/verticalSpace"));
var _verticalSpace1 = /*#__PURE__*/ _interop_require_default(require("./node/markdown/verticalSpace"));
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function ClassFromOuterNode(outerNode) {
    var Class;
    if (outerNode === null) {
        Class = _topmost.default;
    } else {
        var outerNodeVerticalSpaceMarkdownNode = _instanceof(outerNode, _verticalSpace1.default);
        if (outerNodeVerticalSpaceMarkdownNode) {
            Class = _verticalSpace.default;
        } else {
            var nonTerminalNode = outerNode, ruleName = nonTerminalNode.getRuleName();
            Class = _html1.default[ruleName] || _html.default;
        }
    }
    return Class;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jbGFzc0Zyb21PdXRlck5vZGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBIVE1MTm9kZSBmcm9tIFwiLi9ub2RlL2h0bWxcIjtcbmltcG9ydCBodG1sTm9kZU1hcCBmcm9tIFwiLi9ub2RlTWFwL2h0bWxcIjtcbmltcG9ydCBUb3Btb3N0SFRNTE5vZGUgZnJvbSBcIi4vbm9kZS9odG1sL3RvcG1vc3RcIjtcbmltcG9ydCBWZXJ0aWNhbFNwYWNlSFRNTE5vZGUgZnJvbSBcIi4vbm9kZS9odG1sL3ZlcnRpY2FsU3BhY2VcIjtcbmltcG9ydCBWZXJ0aWNhbFNwYWNlTWFya2Rvd25Ob2RlIGZyb20gXCIuL25vZGUvbWFya2Rvd24vdmVydGljYWxTcGFjZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDbGFzc0Zyb21PdXRlck5vZGUob3V0ZXJOb2RlKSB7XG4gIGxldCBDbGFzcztcblxuICBpZiAob3V0ZXJOb2RlID09PSBudWxsKSB7XG4gICAgQ2xhc3MgPSBUb3Btb3N0SFRNTE5vZGU7XG4gIH0gZWxzZSB7XG4gICAgY29uc3Qgb3V0ZXJOb2RlVmVydGljYWxTcGFjZU1hcmtkb3duTm9kZSA9IChvdXRlck5vZGUgaW5zdGFuY2VvZiBWZXJ0aWNhbFNwYWNlTWFya2Rvd25Ob2RlKTtcblxuICAgIGlmIChvdXRlck5vZGVWZXJ0aWNhbFNwYWNlTWFya2Rvd25Ob2RlKSB7XG4gICAgICBDbGFzcyA9IFZlcnRpY2FsU3BhY2VIVE1MTm9kZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gb3V0ZXJOb2RlLCAgLy8vXG4gICAgICAgICAgICBydWxlTmFtZSA9IG5vblRlcm1pbmFsTm9kZS5nZXRSdWxlTmFtZSgpO1xuXG4gICAgICBDbGFzcyA9IGh0bWxOb2RlTWFwW3J1bGVOYW1lXSB8fCBIVE1MTm9kZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gQ2xhc3M7XG59XG4iXSwibmFtZXMiOlsiQ2xhc3NGcm9tT3V0ZXJOb2RlIiwib3V0ZXJOb2RlIiwiQ2xhc3MiLCJUb3Btb3N0SFRNTE5vZGUiLCJvdXRlck5vZGVWZXJ0aWNhbFNwYWNlTWFya2Rvd25Ob2RlIiwiVmVydGljYWxTcGFjZU1hcmtkb3duTm9kZSIsIlZlcnRpY2FsU3BhY2VIVE1MTm9kZSIsIm5vblRlcm1pbmFsTm9kZSIsInJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJodG1sTm9kZU1hcCIsIkhUTUxOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFRQTs7O2VBQXdCQTs7OzJEQU5IOzREQUNHOzhEQUNJO29FQUNNO3FFQUNJOzs7Ozs7Ozs7Ozs7O0FBRXZCLFNBQVNBLG1CQUFtQkMsU0FBUztJQUNsRCxJQUFJQztJQUVKLElBQUlELGNBQWMsTUFBTTtRQUN0QkMsUUFBUUMsZ0JBQWU7SUFDekIsT0FBTztRQUNMLElBQU1DLHFDQUFzQ0gsQUFBUyxZQUFUQSxXQUFxQkksdUJBQXlCO1FBRTFGLElBQUlELG9DQUFvQztZQUN0Q0YsUUFBUUksc0JBQXFCO1FBQy9CLE9BQU87WUFDTCxJQUFNQyxrQkFBa0JOLFdBQ2xCTyxXQUFXRCxnQkFBZ0JFLFdBQVc7WUFFNUNQLFFBQVFRLGNBQVcsQ0FBQ0YsU0FBUyxJQUFJRyxhQUFRO1FBQzNDO0lBQ0Y7SUFFQSxPQUFPVDtBQUNUIn0=