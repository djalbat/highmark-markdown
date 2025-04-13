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
        var nonTerminalNode = outerNode, ruleName = nonTerminalNode.getRuleName();
        Class = _html1.default[ruleName] || _html.default;
    }
    return Class;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jbGFzc0Zyb21PdXRlck5vZGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBIVE1MTm9kZSBmcm9tIFwiLi9ub2RlL2h0bWxcIjtcbmltcG9ydCBodG1sTm9kZU1hcCBmcm9tIFwiLi9ub2RlTWFwL2h0bWxcIjtcbmltcG9ydCBUb3Btb3N0SFRNTE5vZGUgZnJvbSBcIi4vbm9kZS9odG1sL3RvcG1vc3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2xhc3NGcm9tT3V0ZXJOb2RlKG91dGVyTm9kZSkge1xuICBsZXQgQ2xhc3M7XG5cbiAgaWYgKG91dGVyTm9kZSA9PT0gbnVsbCkge1xuICAgIENsYXNzID0gVG9wbW9zdEhUTUxOb2RlO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IG91dGVyTm9kZSwgIC8vL1xuICAgICAgICAgIHJ1bGVOYW1lID0gbm9uVGVybWluYWxOb2RlLmdldFJ1bGVOYW1lKCk7XG5cbiAgICBDbGFzcyA9IGh0bWxOb2RlTWFwW3J1bGVOYW1lXSB8fCBIVE1MTm9kZTtcbiAgfVxuXG4gIHJldHVybiBDbGFzcztcbn1cbiJdLCJuYW1lcyI6WyJDbGFzc0Zyb21PdXRlck5vZGUiLCJvdXRlck5vZGUiLCJDbGFzcyIsIlRvcG1vc3RIVE1MTm9kZSIsIm5vblRlcm1pbmFsTm9kZSIsInJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJodG1sTm9kZU1hcCIsIkhUTUxOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFNQTs7O2VBQXdCQTs7OzJEQUpIOzREQUNHOzhEQUNJOzs7Ozs7QUFFYixTQUFTQSxtQkFBbUJDLFNBQVM7SUFDbEQsSUFBSUM7SUFFSixJQUFJRCxjQUFjLE1BQU07UUFDdEJDLFFBQVFDLGdCQUFlO0lBQ3pCLE9BQU87UUFDTCxJQUFNQyxrQkFBa0JILFdBQ2xCSSxXQUFXRCxnQkFBZ0JFLFdBQVc7UUFFNUNKLFFBQVFLLGNBQVcsQ0FBQ0YsU0FBUyxJQUFJRyxhQUFRO0lBQzNDO0lBRUEsT0FBT047QUFDVCJ9