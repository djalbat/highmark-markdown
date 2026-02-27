"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return DefaultMarkdownStyleElement;
    }
});
const _defaultMarkdown = /*#__PURE__*/ _interop_require_default(require("../../style/defaultMarkdown"));
const _markdown = /*#__PURE__*/ _interop_require_default(require("../../styleElement/markdown"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class DefaultMarkdownStyleElement extends _markdown.default {
    update(defaultMarkdownStyle) {
        const markdownStyle = defaultMarkdownStyle; ///
        super.update(markdownStyle);
    }
    reset() {
        this.update(_defaultMarkdown.default);
    }
    static fromCSSSelectorsString(Class, cssSelectorsString) {
        if (cssSelectorsString === undefined) {
            cssSelectorsString = Class; ///
            Class = DefaultMarkdownStyleElement; ///
        }
        const defaultMarkdownStyleElement = _markdown.default.fromCSSSelectorsString(Class, cssSelectorsString);
        defaultMarkdownStyleElement.reset();
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zdHlsZUVsZW1lbnQvbWFya2Rvd24vZGVmYXVsdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRlZmF1bHRNYXJrZG93blN0eWxlIGZyb20gXCIuLi8uLi9zdHlsZS9kZWZhdWx0TWFya2Rvd25cIjtcbmltcG9ydCBNYXJrZG93blN0eWxlRWxlbWVudCBmcm9tIFwiLi4vLi4vc3R5bGVFbGVtZW50L21hcmtkb3duXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERlZmF1bHRNYXJrZG93blN0eWxlRWxlbWVudCBleHRlbmRzIE1hcmtkb3duU3R5bGVFbGVtZW50IHtcbiAgdXBkYXRlKGRlZmF1bHRNYXJrZG93blN0eWxlKSB7XG4gICAgY29uc3QgbWFya2Rvd25TdHlsZSA9IGRlZmF1bHRNYXJrZG93blN0eWxlOyAvLy9cblxuICAgIHN1cGVyLnVwZGF0ZShtYXJrZG93blN0eWxlKVxuICB9XG5cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy51cGRhdGUoZGVmYXVsdE1hcmtkb3duU3R5bGUpXG4gIH1cblxuICBzdGF0aWMgZnJvbUNTU1NlbGVjdG9yc1N0cmluZyhDbGFzcywgY3NzU2VsZWN0b3JzU3RyaW5nKSB7XG4gICAgaWYgKGNzc1NlbGVjdG9yc1N0cmluZyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBjc3NTZWxlY3RvcnNTdHJpbmcgPSBDbGFzczsgLy8vXG5cbiAgICAgIENsYXNzID0gRGVmYXVsdE1hcmtkb3duU3R5bGVFbGVtZW50OyAgLy8vXG4gICAgfVxuXG4gICAgY29uc3QgZGVmYXVsdE1hcmtkb3duU3R5bGVFbGVtZW50ID0gTWFya2Rvd25TdHlsZUVsZW1lbnQuZnJvbUNTU1NlbGVjdG9yc1N0cmluZyhDbGFzcywgY3NzU2VsZWN0b3JzU3RyaW5nKTtcblxuICAgIGRlZmF1bHRNYXJrZG93blN0eWxlRWxlbWVudC5yZXNldCgpO1xuICB9XG59XG4iXSwibmFtZXMiOlsiRGVmYXVsdE1hcmtkb3duU3R5bGVFbGVtZW50IiwiTWFya2Rvd25TdHlsZUVsZW1lbnQiLCJ1cGRhdGUiLCJkZWZhdWx0TWFya2Rvd25TdHlsZSIsIm1hcmtkb3duU3R5bGUiLCJyZXNldCIsImZyb21DU1NTZWxlY3RvcnNTdHJpbmciLCJDbGFzcyIsImNzc1NlbGVjdG9yc1N0cmluZyIsInVuZGVmaW5lZCIsImRlZmF1bHRNYXJrZG93blN0eWxlRWxlbWVudCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBS0E7OztlQUFxQkE7Ozt3RUFIWTtpRUFDQTs7Ozs7O0FBRWxCLE1BQU1BLG9DQUFvQ0MsaUJBQW9CO0lBQzNFQyxPQUFPQyxvQkFBb0IsRUFBRTtRQUMzQixNQUFNQyxnQkFBZ0JELHNCQUFzQixHQUFHO1FBRS9DLEtBQUssQ0FBQ0QsT0FBT0U7SUFDZjtJQUVBQyxRQUFRO1FBQ04sSUFBSSxDQUFDSCxNQUFNLENBQUNDLHdCQUFvQjtJQUNsQztJQUVBLE9BQU9HLHVCQUF1QkMsS0FBSyxFQUFFQyxrQkFBa0IsRUFBRTtRQUN2RCxJQUFJQSx1QkFBdUJDLFdBQVc7WUFDcENELHFCQUFxQkQsT0FBTyxHQUFHO1lBRS9CQSxRQUFRUCw2QkFBOEIsR0FBRztRQUMzQztRQUVBLE1BQU1VLDhCQUE4QlQsaUJBQW9CLENBQUNLLHNCQUFzQixDQUFDQyxPQUFPQztRQUV2RkUsNEJBQTRCTCxLQUFLO0lBQ25DO0FBQ0YifQ==