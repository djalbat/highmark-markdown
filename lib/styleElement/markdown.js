"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return MarkdownStyleElement;
    }
});
const _styleElement = /*#__PURE__*/ _interop_require_wildcard(require("../styleElement"));
const _constants = require("../constants");
const _grammar = require("../utilities/grammar");
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
class MarkdownStyleElement extends _styleElement.default {
    constructor(domElement, ccsSelectorsString){
        super(domElement);
        this.ccsSelectorsString = ccsSelectorsString;
    }
    getCSSSelectorsString() {
        return this.ccsSelectorsString;
    }
    update(markdownStyle) {
        const css = (0, _grammar.cssFromMarkdownStyleAndCSSSelectorsString)(markdownStyle, this.ccsSelectorsString);
        this.setCSS(css);
        return css;
    }
    reset() {
        const markdownStyle = _constants.EMPTY_STRING;
        this.update(markdownStyle);
    }
    remove() {
        super.remove();
        this.destroy();
    }
    static fromCSSSelectorsString(Class, ccsSelectorsString) {
        if (ccsSelectorsString === undefined) {
            ccsSelectorsString = Class; ///
            Class = MarkdownStyleElement; ///
        }
        const domElement = (0, _styleElement.createDOMElement)(), markdownStyleElement = new Class(domElement, ccsSelectorsString);
        return markdownStyleElement;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHlsZUVsZW1lbnQvbWFya2Rvd24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBTdHlsZUVsZW1lbnQgZnJvbSBcIi4uL3N0eWxlRWxlbWVudFwiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBjcmVhdGVET01FbGVtZW50IH0gZnJvbSBcIi4uL3N0eWxlRWxlbWVudFwiO1xuaW1wb3J0IHsgY3NzRnJvbU1hcmtkb3duU3R5bGVBbmRDU1NTZWxlY3RvcnNTdHJpbmcgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2dyYW1tYXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFya2Rvd25TdHlsZUVsZW1lbnQgZXh0ZW5kcyBTdHlsZUVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihkb21FbGVtZW50LCBjY3NTZWxlY3RvcnNTdHJpbmcpIHtcbiAgICBzdXBlcihkb21FbGVtZW50KTtcblxuICAgIHRoaXMuY2NzU2VsZWN0b3JzU3RyaW5nID0gY2NzU2VsZWN0b3JzU3RyaW5nO1xuICB9XG5cbiAgZ2V0Q1NTU2VsZWN0b3JzU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLmNjc1NlbGVjdG9yc1N0cmluZztcbiAgfVxuXG4gIHVwZGF0ZShtYXJrZG93blN0eWxlKSB7XG4gICAgY29uc3QgY3NzID0gY3NzRnJvbU1hcmtkb3duU3R5bGVBbmRDU1NTZWxlY3RvcnNTdHJpbmcobWFya2Rvd25TdHlsZSwgdGhpcy5jY3NTZWxlY3RvcnNTdHJpbmcpO1xuXG4gICAgdGhpcy5zZXRDU1MoY3NzKTtcblxuICAgIHJldHVybiBjc3M7XG4gIH1cblxuICByZXNldCgpIHtcbiAgICBjb25zdCBtYXJrZG93blN0eWxlID0gRU1QVFlfU1RSSU5HO1xuXG4gICAgdGhpcy51cGRhdGUobWFya2Rvd25TdHlsZSlcbiAgfVxuXG4gIHJlbW92ZSgpIHtcbiAgICBzdXBlci5yZW1vdmUoKTtcblxuICAgIHRoaXMuZGVzdHJveSgpO1xuICB9XG5cbiAgc3RhdGljIGZyb21DU1NTZWxlY3RvcnNTdHJpbmcoQ2xhc3MsIGNjc1NlbGVjdG9yc1N0cmluZykge1xuICAgIGlmIChjY3NTZWxlY3RvcnNTdHJpbmcgPT09IHVuZGVmaW5lZCkge1xuICAgICAgY2NzU2VsZWN0b3JzU3RyaW5nID0gQ2xhc3M7IC8vL1xuXG4gICAgICBDbGFzcyA9IE1hcmtkb3duU3R5bGVFbGVtZW50OyAvLy9cbiAgICB9XG5cbiAgICBjb25zdCBkb21FbGVtZW50ID0gY3JlYXRlRE9NRWxlbWVudCgpLFxuICAgICAgICAgIG1hcmtkb3duU3R5bGVFbGVtZW50ID0gbmV3IENsYXNzKGRvbUVsZW1lbnQsIGNjc1NlbGVjdG9yc1N0cmluZyk7XG5cbiAgICByZXR1cm4gbWFya2Rvd25TdHlsZUVsZW1lbnQ7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJNYXJrZG93blN0eWxlRWxlbWVudCIsIlN0eWxlRWxlbWVudCIsImRvbUVsZW1lbnQiLCJjY3NTZWxlY3RvcnNTdHJpbmciLCJnZXRDU1NTZWxlY3RvcnNTdHJpbmciLCJ1cGRhdGUiLCJtYXJrZG93blN0eWxlIiwiY3NzIiwiY3NzRnJvbU1hcmtkb3duU3R5bGVBbmRDU1NTZWxlY3RvcnNTdHJpbmciLCJzZXRDU1MiLCJyZXNldCIsIkVNUFRZX1NUUklORyIsInJlbW92ZSIsImRlc3Ryb3kiLCJmcm9tQ1NTU2VsZWN0b3JzU3RyaW5nIiwiQ2xhc3MiLCJ1bmRlZmluZWQiLCJjcmVhdGVET01FbGVtZW50IiwibWFya2Rvd25TdHlsZUVsZW1lbnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVFBOzs7ZUFBcUJBOzs7c0VBTkk7MkJBRUk7eUJBRTZCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFM0MsTUFBTUEsNkJBQTZCQyxxQkFBWTtJQUM1RCxZQUFZQyxVQUFVLEVBQUVDLGtCQUFrQixDQUFFO1FBQzFDLEtBQUssQ0FBQ0Q7UUFFTixJQUFJLENBQUNDLGtCQUFrQixHQUFHQTtJQUM1QjtJQUVBQyx3QkFBd0I7UUFDdEIsT0FBTyxJQUFJLENBQUNELGtCQUFrQjtJQUNoQztJQUVBRSxPQUFPQyxhQUFhLEVBQUU7UUFDcEIsTUFBTUMsTUFBTUMsSUFBQUEsa0RBQXlDLEVBQUNGLGVBQWUsSUFBSSxDQUFDSCxrQkFBa0I7UUFFNUYsSUFBSSxDQUFDTSxNQUFNLENBQUNGO1FBRVosT0FBT0E7SUFDVDtJQUVBRyxRQUFRO1FBQ04sTUFBTUosZ0JBQWdCSyx1QkFBWTtRQUVsQyxJQUFJLENBQUNOLE1BQU0sQ0FBQ0M7SUFDZDtJQUVBTSxTQUFTO1FBQ1AsS0FBSyxDQUFDQTtRQUVOLElBQUksQ0FBQ0MsT0FBTztJQUNkO0lBRUEsT0FBT0MsdUJBQXVCQyxLQUFLLEVBQUVaLGtCQUFrQixFQUFFO1FBQ3ZELElBQUlBLHVCQUF1QmEsV0FBVztZQUNwQ2IscUJBQXFCWSxPQUFPLEdBQUc7WUFFL0JBLFFBQVFmLHNCQUFzQixHQUFHO1FBQ25DO1FBRUEsTUFBTUUsYUFBYWUsSUFBQUEsOEJBQWdCLEtBQzdCQyx1QkFBdUIsSUFBSUgsTUFBTWIsWUFBWUM7UUFFbkQsT0FBT2U7SUFDVDtBQUNGIn0=