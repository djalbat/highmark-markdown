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
var _html = /*#__PURE__*/ _interop_require_wildcard(require("../map/node/html"));
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
var classNameMap = {};
_html.ruleNames.forEach(function(ruleName) {
    var Class = _html.default[ruleName], className = Class.className;
    classNameMap[ruleName] = className;
});
var _default = classNameMap;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYXAvY2xhc3NOYW1lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgaHRtbE5vZGVNYXAgZnJvbSBcIi4uL21hcC9ub2RlL2h0bWxcIjtcblxuaW1wb3J0IHsgcnVsZU5hbWVzIH0gZnJvbSBcIi4uL21hcC9ub2RlL2h0bWxcIjtcblxuY29uc3QgY2xhc3NOYW1lTWFwID0ge307XG5cbnJ1bGVOYW1lcy5mb3JFYWNoKChydWxlTmFtZSkgPT4ge1xuICBjb25zdCBDbGFzcyA9IGh0bWxOb2RlTWFwW3J1bGVOYW1lXSxcbiAgICAgICAgeyBjbGFzc05hbWUgfSA9IENsYXNzO1xuXG4gIGNsYXNzTmFtZU1hcFtydWxlTmFtZV0gPSBjbGFzc05hbWU7XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3NOYW1lTWFwO1xuIl0sIm5hbWVzIjpbImNsYXNzTmFtZU1hcCIsInJ1bGVOYW1lcyIsImZvckVhY2giLCJydWxlTmFtZSIsIkNsYXNzIiwiaHRtbE5vZGVNYXAiLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWVBOzs7ZUFBQTs7OzREQWJ3Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSXhCLElBQU1BLGVBQWUsQ0FBQztBQUV0QkMsZUFBUyxDQUFDQyxPQUFPLENBQUMsU0FBQ0M7SUFDakIsSUFBTUMsUUFBUUMsYUFBVyxDQUFDRixTQUFTLEVBQzdCLEFBQUVHLFlBQWNGLE1BQWRFO0lBRVJOLFlBQVksQ0FBQ0csU0FBUyxHQUFHRztBQUMzQjtJQUVBLFdBQWVOIn0=