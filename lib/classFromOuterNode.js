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
var _topmost = /*#__PURE__*/ _interop_require_default(require("./node/html/topmost"));
var _ruleNameToClassMap = /*#__PURE__*/ _interop_require_default(require("./ruleNameToClassMap"));
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
            Class = _ruleNameToClassMap.default[ruleName] || _html.default;
        }
    }
    return Class;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jbGFzc0Zyb21PdXRlck5vZGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBIVE1MTm9kZSBmcm9tIFwiLi9ub2RlL2h0bWxcIjtcbmltcG9ydCBUb3Btb3N0SFRNTE5vZGUgZnJvbSBcIi4vbm9kZS9odG1sL3RvcG1vc3RcIjtcbmltcG9ydCBydWxlTmFtZVRvQ2xhc3NNYXAgZnJvbSBcIi4vcnVsZU5hbWVUb0NsYXNzTWFwXCI7XG5pbXBvcnQgVmVydGljYWxTcGFjZUhUTUxOb2RlIGZyb20gXCIuL25vZGUvaHRtbC92ZXJ0aWNhbFNwYWNlXCI7XG5pbXBvcnQgVmVydGljYWxTcGFjZU1hcmtkb3duTm9kZSBmcm9tIFwiLi9ub2RlL21hcmtkb3duL3ZlcnRpY2FsU3BhY2VcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2xhc3NGcm9tT3V0ZXJOb2RlKG91dGVyTm9kZSkge1xuICBsZXQgQ2xhc3M7XG5cbiAgaWYgKG91dGVyTm9kZSA9PT0gbnVsbCkge1xuICAgIENsYXNzID0gVG9wbW9zdEhUTUxOb2RlO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IG91dGVyTm9kZVZlcnRpY2FsU3BhY2VNYXJrZG93bk5vZGUgPSAob3V0ZXJOb2RlIGluc3RhbmNlb2YgVmVydGljYWxTcGFjZU1hcmtkb3duTm9kZSk7XG5cbiAgICBpZiAob3V0ZXJOb2RlVmVydGljYWxTcGFjZU1hcmtkb3duTm9kZSkge1xuICAgICAgQ2xhc3MgPSBWZXJ0aWNhbFNwYWNlSFRNTE5vZGU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IG91dGVyTm9kZSwgIC8vL1xuICAgICAgICAgICAgcnVsZU5hbWUgPSBub25UZXJtaW5hbE5vZGUuZ2V0UnVsZU5hbWUoKTtcblxuICAgICAgQ2xhc3MgPSBydWxlTmFtZVRvQ2xhc3NNYXBbcnVsZU5hbWVdIHx8IEhUTUxOb2RlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBDbGFzcztcbn1cbiJdLCJuYW1lcyI6WyJDbGFzc0Zyb21PdXRlck5vZGUiLCJvdXRlck5vZGUiLCJDbGFzcyIsIlRvcG1vc3RIVE1MTm9kZSIsIm91dGVyTm9kZVZlcnRpY2FsU3BhY2VNYXJrZG93bk5vZGUiLCJWZXJ0aWNhbFNwYWNlTWFya2Rvd25Ob2RlIiwiVmVydGljYWxTcGFjZUhUTUxOb2RlIiwibm9uVGVybWluYWxOb2RlIiwicnVsZU5hbWUiLCJnZXRSdWxlTmFtZSIsInJ1bGVOYW1lVG9DbGFzc01hcCIsIkhUTUxOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFRQTs7O2VBQXdCQTs7OzJEQU5IOzhEQUNPO3lFQUNHO29FQUNHO3FFQUNJOzs7Ozs7Ozs7Ozs7O0FBRXZCLFNBQVNBLG1CQUFtQkMsU0FBUztJQUNsRCxJQUFJQztJQUVKLElBQUlELGNBQWMsTUFBTTtRQUN0QkMsUUFBUUMsZ0JBQWU7SUFDekIsT0FBTztRQUNMLElBQU1DLHFDQUFzQ0gsQUFBUyxZQUFUQSxXQUFxQkksdUJBQXlCO1FBRTFGLElBQUlELG9DQUFvQztZQUN0Q0YsUUFBUUksc0JBQXFCO1FBQy9CLE9BQU87WUFDTCxJQUFNQyxrQkFBa0JOLFdBQ2xCTyxXQUFXRCxnQkFBZ0JFLFdBQVc7WUFFNUNQLFFBQVFRLDJCQUFrQixDQUFDRixTQUFTLElBQUlHLGFBQVE7UUFDbEQ7SUFDRjtJQUVBLE9BQU9UO0FBQ1QifQ==