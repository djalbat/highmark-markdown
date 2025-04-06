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
        Class = _ruleNameToClassMap.default[ruleName] || _html.default;
    }
    return Class;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jbGFzc0Zyb21PdXRlck5vZGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBIVE1MTm9kZSBmcm9tIFwiLi9ub2RlL2h0bWxcIjtcbmltcG9ydCBUb3Btb3N0SFRNTE5vZGUgZnJvbSBcIi4vbm9kZS9odG1sL3RvcG1vc3RcIjtcbmltcG9ydCBydWxlTmFtZVRvQ2xhc3NNYXAgZnJvbSBcIi4vcnVsZU5hbWVUb0NsYXNzTWFwXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENsYXNzRnJvbU91dGVyTm9kZShvdXRlck5vZGUpIHtcbiAgbGV0IENsYXNzO1xuXG4gIGlmIChvdXRlck5vZGUgPT09IG51bGwpIHtcbiAgICBDbGFzcyA9IFRvcG1vc3RIVE1MTm9kZTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBvdXRlck5vZGUsICAvLy9cbiAgICAgICAgICBydWxlTmFtZSA9IG5vblRlcm1pbmFsTm9kZS5nZXRSdWxlTmFtZSgpO1xuXG4gICAgQ2xhc3MgPSBydWxlTmFtZVRvQ2xhc3NNYXBbcnVsZU5hbWVdIHx8IEhUTUxOb2RlO1xuICB9XG5cbiAgcmV0dXJuIENsYXNzO1xufVxuIl0sIm5hbWVzIjpbIkNsYXNzRnJvbU91dGVyTm9kZSIsIm91dGVyTm9kZSIsIkNsYXNzIiwiVG9wbW9zdEhUTUxOb2RlIiwibm9uVGVybWluYWxOb2RlIiwicnVsZU5hbWUiLCJnZXRSdWxlTmFtZSIsInJ1bGVOYW1lVG9DbGFzc01hcCIsIkhUTUxOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFNQTs7O2VBQXdCQTs7OzJEQUpIOzhEQUNPO3lFQUNHOzs7Ozs7QUFFaEIsU0FBU0EsbUJBQW1CQyxTQUFTO0lBQ2xELElBQUlDO0lBRUosSUFBSUQsY0FBYyxNQUFNO1FBQ3RCQyxRQUFRQyxnQkFBZTtJQUN6QixPQUFPO1FBQ0wsSUFBTUMsa0JBQWtCSCxXQUNsQkksV0FBV0QsZ0JBQWdCRSxXQUFXO1FBRTVDSixRQUFRSywyQkFBa0IsQ0FBQ0YsU0FBUyxJQUFJRyxhQUFRO0lBQ2xEO0lBRUEsT0FBT047QUFDVCJ9