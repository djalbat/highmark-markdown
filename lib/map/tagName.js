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
var tagNameMap = {};
_html.ruleNames.forEach(function(ruleName) {
    var Class = _html.default[ruleName], tagName = Class.tagName;
    tagNameMap[ruleName] = tagName;
});
var _default = tagNameMap;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYXAvdGFnTmFtZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGh0bWxOb2RlTWFwIGZyb20gXCIuLi9tYXAvbm9kZS9odG1sXCI7XG5cbmltcG9ydCB7IHJ1bGVOYW1lcyB9IGZyb20gXCIuLi9tYXAvbm9kZS9odG1sXCI7XG5cbmNvbnN0IHRhZ05hbWVNYXAgPSB7fTtcblxucnVsZU5hbWVzLmZvckVhY2goKHJ1bGVOYW1lKSA9PiB7XG4gIGNvbnN0IENsYXNzID0gaHRtbE5vZGVNYXBbcnVsZU5hbWVdLFxuICAgICAgICB7IHRhZ05hbWUgfSA9IENsYXNzO1xuXG4gIHRhZ05hbWVNYXBbcnVsZU5hbWVdID0gdGFnTmFtZTtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCB0YWdOYW1lTWFwO1xuIl0sIm5hbWVzIjpbInRhZ05hbWVNYXAiLCJydWxlTmFtZXMiLCJmb3JFYWNoIiwicnVsZU5hbWUiLCJDbGFzcyIsImh0bWxOb2RlTWFwIiwidGFnTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBZUE7OztlQUFBOzs7NERBYndCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJeEIsSUFBTUEsYUFBYSxDQUFDO0FBRXBCQyxlQUFTLENBQUNDLE9BQU8sQ0FBQyxTQUFDQztJQUNqQixJQUFNQyxRQUFRQyxhQUFXLENBQUNGLFNBQVMsRUFDN0IsQUFBRUcsVUFBWUYsTUFBWkU7SUFFUk4sVUFBVSxDQUFDRyxTQUFTLEdBQUdHO0FBQ3pCO0lBRUEsV0FBZU4ifQ==