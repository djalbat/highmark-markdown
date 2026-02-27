"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return AnchorHTMLNode;
    }
});
const _html = /*#__PURE__*/ _interop_require_default(require("../../node/html"));
const _constants = require("../../constants");
const _attributeNames = require("../../attributeNames");
const _markdown = require("../../ruleNames/markdown");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class AnchorHTMLNode extends _html.default {
    constructor(outerNode, parentNode, childNodes, domElement, prepend, identifier){
        super(outerNode, parentNode, childNodes, domElement);
        this.prepend = prepend;
        this.identifier = identifier;
    }
    getPrepend() {
        return this.prepend;
    }
    getIdentifier() {
        return this.identifier;
    }
    getRuleName() {
        const ruleName = _markdown.ANCHOR_MARKDOWN_RULE_NAME; ///
        return ruleName;
    }
    content(context) {
        const content = _constants.EMPTY_STRING;
        return content;
    }
    attributeName(context) {
        const attributeName = _attributeNames.ID_ATTRIBUTE_NAME;
        return attributeName;
    }
    attributeValue(context) {
        const attributeValue = `${this.prepend}-${this.identifier}`; ///
        return attributeValue;
    }
    asString() {
        const ruleName = this.getRuleName(), string = ruleName; ///
        return string;
    }
    static tagName = "a";
    static className = "anchor";
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvYW5jaG9yLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgSFRNTE5vZGUgZnJvbSBcIi4uLy4uL25vZGUvaHRtbFwiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBJRF9BVFRSSUJVVEVfTkFNRSB9IGZyb20gXCIuLi8uLi9hdHRyaWJ1dGVOYW1lc1wiO1xuaW1wb3J0IHsgQU5DSE9SX01BUktET1dOX1JVTEVfTkFNRSB9IGZyb20gXCIuLi8uLi9ydWxlTmFtZXMvbWFya2Rvd25cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQW5jaG9ySFRNTE5vZGUgZXh0ZW5kcyBIVE1MTm9kZSB7XG4gIGNvbnN0cnVjdG9yKG91dGVyTm9kZSwgcGFyZW50Tm9kZSwgY2hpbGROb2RlcywgZG9tRWxlbWVudCwgcHJlcGVuZCwgaWRlbnRpZmllcikge1xuICAgIHN1cGVyKG91dGVyTm9kZSwgcGFyZW50Tm9kZSwgY2hpbGROb2RlcywgZG9tRWxlbWVudCk7XG5cbiAgICB0aGlzLnByZXBlbmQgPSBwcmVwZW5kO1xuICAgIHRoaXMuaWRlbnRpZmllciA9IGlkZW50aWZpZXI7XG4gIH1cblxuICBnZXRQcmVwZW5kKCkge1xuICAgIHJldHVybiB0aGlzLnByZXBlbmQ7XG4gIH1cblxuICBnZXRJZGVudGlmaWVyKCkge1xuICAgIHJldHVybiB0aGlzLmlkZW50aWZpZXI7XG4gIH1cblxuICBnZXRSdWxlTmFtZSgpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IEFOQ0hPUl9NQVJLRE9XTl9SVUxFX05BTUU7ICAvLy9cblxuICAgIHJldHVybiBydWxlTmFtZTtcbiAgfVxuXG4gIGNvbnRlbnQoY29udGV4dCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBFTVBUWV9TVFJJTkc7XG5cbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGF0dHJpYnV0ZU5hbWUoY29udGV4dCkge1xuICAgIGNvbnN0IGF0dHJpYnV0ZU5hbWUgPSBJRF9BVFRSSUJVVEVfTkFNRTtcblxuICAgIHJldHVybiBhdHRyaWJ1dGVOYW1lO1xuICB9XG5cbiAgYXR0cmlidXRlVmFsdWUoY29udGV4dCkge1xuICAgIGNvbnN0IGF0dHJpYnV0ZVZhbHVlID0gYCR7dGhpcy5wcmVwZW5kfS0ke3RoaXMuaWRlbnRpZmllcn1gOyAvLy9cblxuICAgIHJldHVybiBhdHRyaWJ1dGVWYWx1ZTtcbiAgfVxuXG4gIGFzU3RyaW5nKCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gdGhpcy5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgIHN0cmluZyA9IHJ1bGVOYW1lOyAgLy8vXG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImFcIjtcblxuICBzdGF0aWMgY2xhc3NOYW1lID0gXCJhbmNob3JcIjtcbn1cbiJdLCJuYW1lcyI6WyJBbmNob3JIVE1MTm9kZSIsIkhUTUxOb2RlIiwib3V0ZXJOb2RlIiwicGFyZW50Tm9kZSIsImNoaWxkTm9kZXMiLCJkb21FbGVtZW50IiwicHJlcGVuZCIsImlkZW50aWZpZXIiLCJnZXRQcmVwZW5kIiwiZ2V0SWRlbnRpZmllciIsImdldFJ1bGVOYW1lIiwicnVsZU5hbWUiLCJBTkNIT1JfTUFSS0RPV05fUlVMRV9OQU1FIiwiY29udGVudCIsImNvbnRleHQiLCJFTVBUWV9TVFJJTkciLCJhdHRyaWJ1dGVOYW1lIiwiSURfQVRUUklCVVRFX05BTUUiLCJhdHRyaWJ1dGVWYWx1ZSIsImFzU3RyaW5nIiwic3RyaW5nIiwidGFnTmFtZSIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBUUE7OztlQUFxQkE7Ozs2REFOQTsyQkFFUTtnQ0FDSzswQkFDUTs7Ozs7O0FBRTNCLE1BQU1BLHVCQUF1QkMsYUFBUTtJQUNsRCxZQUFZQyxTQUFTLEVBQUVDLFVBQVUsRUFBRUMsVUFBVSxFQUFFQyxVQUFVLEVBQUVDLE9BQU8sRUFBRUMsVUFBVSxDQUFFO1FBQzlFLEtBQUssQ0FBQ0wsV0FBV0MsWUFBWUMsWUFBWUM7UUFFekMsSUFBSSxDQUFDQyxPQUFPLEdBQUdBO1FBQ2YsSUFBSSxDQUFDQyxVQUFVLEdBQUdBO0lBQ3BCO0lBRUFDLGFBQWE7UUFDWCxPQUFPLElBQUksQ0FBQ0YsT0FBTztJQUNyQjtJQUVBRyxnQkFBZ0I7UUFDZCxPQUFPLElBQUksQ0FBQ0YsVUFBVTtJQUN4QjtJQUVBRyxjQUFjO1FBQ1osTUFBTUMsV0FBV0MsbUNBQXlCLEVBQUcsR0FBRztRQUVoRCxPQUFPRDtJQUNUO0lBRUFFLFFBQVFDLE9BQU8sRUFBRTtRQUNmLE1BQU1ELFVBQVVFLHVCQUFZO1FBRTVCLE9BQU9GO0lBQ1Q7SUFFQUcsY0FBY0YsT0FBTyxFQUFFO1FBQ3JCLE1BQU1FLGdCQUFnQkMsaUNBQWlCO1FBRXZDLE9BQU9EO0lBQ1Q7SUFFQUUsZUFBZUosT0FBTyxFQUFFO1FBQ3RCLE1BQU1JLGlCQUFpQixHQUFHLElBQUksQ0FBQ1osT0FBTyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUNDLFVBQVUsRUFBRSxFQUFFLEdBQUc7UUFFaEUsT0FBT1c7SUFDVDtJQUVBQyxXQUFXO1FBQ1QsTUFBTVIsV0FBVyxJQUFJLENBQUNELFdBQVcsSUFDM0JVLFNBQVNULFVBQVcsR0FBRztRQUU3QixPQUFPUztJQUNUO0lBRUEsT0FBT0MsVUFBVSxJQUFJO0lBRXJCLE9BQU9DLFlBQVksU0FBUztBQUM5QiJ9