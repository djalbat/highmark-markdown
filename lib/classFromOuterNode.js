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
var _html1 = /*#__PURE__*/ _interop_require_default(require("./map/node/html"));
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jbGFzc0Zyb21PdXRlck5vZGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBIVE1MTm9kZSBmcm9tIFwiLi9ub2RlL2h0bWxcIjtcbmltcG9ydCBodG1sTm9kZU1hcCBmcm9tIFwiLi9tYXAvbm9kZS9odG1sXCI7XG5pbXBvcnQgVG9wbW9zdEhUTUxOb2RlIGZyb20gXCIuL25vZGUvaHRtbC90b3Btb3N0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENsYXNzRnJvbU91dGVyTm9kZShvdXRlck5vZGUpIHtcbiAgbGV0IENsYXNzO1xuXG4gIGlmIChvdXRlck5vZGUgPT09IG51bGwpIHtcbiAgICBDbGFzcyA9IFRvcG1vc3RIVE1MTm9kZTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBvdXRlck5vZGUsICAvLy9cbiAgICAgICAgICBydWxlTmFtZSA9IG5vblRlcm1pbmFsTm9kZS5nZXRSdWxlTmFtZSgpO1xuXG4gICAgQ2xhc3MgPSBodG1sTm9kZU1hcFtydWxlTmFtZV0gfHwgSFRNTE5vZGU7XG4gIH1cblxuICByZXR1cm4gQ2xhc3M7XG59XG4iXSwibmFtZXMiOlsiQ2xhc3NGcm9tT3V0ZXJOb2RlIiwib3V0ZXJOb2RlIiwiQ2xhc3MiLCJUb3Btb3N0SFRNTE5vZGUiLCJub25UZXJtaW5hbE5vZGUiLCJydWxlTmFtZSIsImdldFJ1bGVOYW1lIiwiaHRtbE5vZGVNYXAiLCJIVE1MTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBTUE7OztlQUF3QkE7OzsyREFKSDs0REFDRzs4REFDSTs7Ozs7O0FBRWIsU0FBU0EsbUJBQW1CQyxTQUFTO0lBQ2xELElBQUlDO0lBRUosSUFBSUQsY0FBYyxNQUFNO1FBQ3RCQyxRQUFRQyxnQkFBZTtJQUN6QixPQUFPO1FBQ0wsSUFBTUMsa0JBQWtCSCxXQUNsQkksV0FBV0QsZ0JBQWdCRSxXQUFXO1FBRTVDSixRQUFRSyxjQUFXLENBQUNGLFNBQVMsSUFBSUcsYUFBUTtJQUMzQztJQUVBLE9BQU9OO0FBQ1QifQ==