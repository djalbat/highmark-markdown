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
var _html = /*#__PURE__*/ _interop_require_wildcard(require("./nodeMap/html"));
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
var elementMap = {};
_html.ruleNames.forEach(function(ruleName) {
    var Class = _html.default[ruleName], tagName = Class.tagName, className = Class.className;
    elementMap[ruleName] = {
        tagName: tagName,
        className: className
    };
});
var _default = elementMap;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9lbGVtZW50TWFwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgaHRtbE5vZGVNYXAgZnJvbSBcIi4vbm9kZU1hcC9odG1sXCI7XG5cbmltcG9ydCB7IHJ1bGVOYW1lcyB9IGZyb20gXCIuL25vZGVNYXAvaHRtbFwiO1xuXG5jb25zdCBlbGVtZW50TWFwID0ge307XG5cbnJ1bGVOYW1lcy5mb3JFYWNoKChydWxlTmFtZSkgPT4ge1xuICBjb25zdCBDbGFzcyA9IGh0bWxOb2RlTWFwW3J1bGVOYW1lXSxcbiAgICAgICAgeyB0YWdOYW1lLCBjbGFzc05hbWUgfSA9IENsYXNzO1xuXG4gIGVsZW1lbnRNYXBbcnVsZU5hbWVdID0ge1xuICAgIHRhZ05hbWUsXG4gICAgY2xhc3NOYW1lXG4gIH07XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgZWxlbWVudE1hcDtcbiJdLCJuYW1lcyI6WyJlbGVtZW50TWFwIiwicnVsZU5hbWVzIiwiZm9yRWFjaCIsInJ1bGVOYW1lIiwiQ2xhc3MiLCJodG1sTm9kZU1hcCIsInRhZ05hbWUiLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWtCQTs7O2VBQUE7Ozs0REFoQndCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJeEIsSUFBTUEsYUFBYSxDQUFDO0FBRXBCQyxlQUFTLENBQUNDLE9BQU8sQ0FBQyxTQUFDQztJQUNqQixJQUFNQyxRQUFRQyxhQUFXLENBQUNGLFNBQVMsRUFDM0JHLFVBQXVCRixNQUF2QkUsU0FBU0MsWUFBY0gsTUFBZEc7SUFFakJQLFVBQVUsQ0FBQ0csU0FBUyxHQUFHO1FBQ3JCRyxTQUFBQTtRQUNBQyxXQUFBQTtJQUNGO0FBQ0Y7SUFFQSxXQUFlUCJ9