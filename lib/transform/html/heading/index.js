"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return IndexHeadingHTMLTransform;
    }
});
const _html = /*#__PURE__*/ _interop_require_default(require("../../../transform/html"));
const _index = /*#__PURE__*/ _interop_require_default(require("../../../node/html/heading/index"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class IndexHeadingHTMLTransform extends _html.default {
    static fromLetter(letter) {
        const indexHeadingHTMLNode = _index.default.fromLetter(letter), htmlNode = indexHeadingHTMLNode, indexHeadingHTMLTransform = _html.default.fromHTMLNode(IndexHeadingHTMLTransform, htmlNode);
        return indexHeadingHTMLTransform;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy90cmFuc2Zvcm0vaHRtbC9oZWFkaW5nL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgSFRNTFRyYW5zZm9ybSBmcm9tIFwiLi4vLi4vLi4vdHJhbnNmb3JtL2h0bWxcIjtcbmltcG9ydCBJbmRleEhlYWRpbmdIVE1MTm9kZSBmcm9tIFwiLi4vLi4vLi4vbm9kZS9odG1sL2hlYWRpbmcvaW5kZXhcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXhIZWFkaW5nSFRNTFRyYW5zZm9ybSBleHRlbmRzIEhUTUxUcmFuc2Zvcm0ge1xuICBzdGF0aWMgZnJvbUxldHRlcihsZXR0ZXIpIHtcbiAgICBjb25zdCBpbmRleEhlYWRpbmdIVE1MTm9kZSA9IEluZGV4SGVhZGluZ0hUTUxOb2RlLmZyb21MZXR0ZXIobGV0dGVyKSxcbiAgICAgICAgICBodG1sTm9kZSA9IGluZGV4SGVhZGluZ0hUTUxOb2RlLCAgLy8vXG4gICAgICAgICAgaW5kZXhIZWFkaW5nSFRNTFRyYW5zZm9ybSA9IEhUTUxUcmFuc2Zvcm0uZnJvbUhUTUxOb2RlKEluZGV4SGVhZGluZ0hUTUxUcmFuc2Zvcm0sIGh0bWxOb2RlKTtcblxuICAgIHJldHVybiBpbmRleEhlYWRpbmdIVE1MVHJhbnNmb3JtO1xuICB9XG59XG4iXSwibmFtZXMiOlsiSW5kZXhIZWFkaW5nSFRNTFRyYW5zZm9ybSIsIkhUTUxUcmFuc2Zvcm0iLCJmcm9tTGV0dGVyIiwibGV0dGVyIiwiaW5kZXhIZWFkaW5nSFRNTE5vZGUiLCJJbmRleEhlYWRpbmdIVE1MTm9kZSIsImh0bWxOb2RlIiwiaW5kZXhIZWFkaW5nSFRNTFRyYW5zZm9ybSIsImZyb21IVE1MTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBS0E7OztlQUFxQkE7Ozs2REFISzs4REFDTzs7Ozs7O0FBRWxCLE1BQU1BLGtDQUFrQ0MsYUFBYTtJQUNsRSxPQUFPQyxXQUFXQyxNQUFNLEVBQUU7UUFDeEIsTUFBTUMsdUJBQXVCQyxjQUFvQixDQUFDSCxVQUFVLENBQUNDLFNBQ3ZERyxXQUFXRixzQkFDWEcsNEJBQTRCTixhQUFhLENBQUNPLFlBQVksQ0FBQ1IsMkJBQTJCTTtRQUV4RixPQUFPQztJQUNUO0FBQ0YifQ==