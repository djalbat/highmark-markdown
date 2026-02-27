"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return FootnoteItemHTMLNode;
    }
});
const _html = /*#__PURE__*/ _interop_require_default(require("../../../node/html"));
const _footnote = /*#__PURE__*/ _interop_require_default(require("../anchor/footnote"));
const _markdown = require("../../../ruleNames/markdown");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class FootnoteItemHTMLNode extends _html.default {
    getRuleName() {
        const ruleName = _markdown.FOOTNOTE_ITEM_MARKDOWN_RULE_NAME; ///
        return ruleName;
    }
    asString() {
        const ruleName = this.getRuleName(), string = ruleName; ///
        return string;
    }
    static tagName = "li";
    static className = "footnote";
    static fromParagraphTMLNodeAndIdentifier(paragraphHTMLNode, identifier) {
        const footnoteAnchorHTMLNode = _footnote.default.fromIdentifier(identifier), childHTMLNodes = [
            footnoteAnchorHTMLNode,
            paragraphHTMLNode
        ], footnoteItemHTMLNode = _html.default.fromChildHTMLNodes(FootnoteItemHTMLNode, childHTMLNodes);
        return footnoteItemHTMLNode;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvaXRlbS9mb290bm90ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEhUTUxOb2RlIGZyb20gXCIuLi8uLi8uLi9ub2RlL2h0bWxcIjtcbmltcG9ydCBGb290bm90ZUFuY2hvckhUTUxOb2RlIGZyb20gXCIuLi9hbmNob3IvZm9vdG5vdGVcIjtcblxuaW1wb3J0IHsgRk9PVE5PVEVfSVRFTV9NQVJLRE9XTl9SVUxFX05BTUUgfSBmcm9tIFwiLi4vLi4vLi4vcnVsZU5hbWVzL21hcmtkb3duXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvb3Rub3RlSXRlbUhUTUxOb2RlIGV4dGVuZHMgSFRNTE5vZGUge1xuICBnZXRSdWxlTmFtZSgpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IEZPT1ROT1RFX0lURU1fTUFSS0RPV05fUlVMRV9OQU1FOyAvLy9cblxuICAgIHJldHVybiBydWxlTmFtZTtcbiAgfVxuXG4gIGFzU3RyaW5nKCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gdGhpcy5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgIHN0cmluZyA9IHJ1bGVOYW1lOyAgLy8vXG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImxpXCI7XG5cbiAgc3RhdGljIGNsYXNzTmFtZSA9IFwiZm9vdG5vdGVcIjtcblxuICBzdGF0aWMgZnJvbVBhcmFncmFwaFRNTE5vZGVBbmRJZGVudGlmaWVyKHBhcmFncmFwaEhUTUxOb2RlLCBpZGVudGlmaWVyKSB7XG4gICAgY29uc3QgZm9vdG5vdGVBbmNob3JIVE1MTm9kZSA9IEZvb3Rub3RlQW5jaG9ySFRNTE5vZGUuZnJvbUlkZW50aWZpZXIoaWRlbnRpZmllciksXG4gICAgICAgICAgY2hpbGRIVE1MTm9kZXMgPSBbXG4gICAgICAgICAgICBmb290bm90ZUFuY2hvckhUTUxOb2RlLFxuICAgICAgICAgICAgcGFyYWdyYXBoSFRNTE5vZGVcbiAgICAgICAgICBdLFxuICAgICAgICAgIGZvb3Rub3RlSXRlbUhUTUxOb2RlID0gSFRNTE5vZGUuZnJvbUNoaWxkSFRNTE5vZGVzKEZvb3Rub3RlSXRlbUhUTUxOb2RlLCBjaGlsZEhUTUxOb2Rlcyk7XG5cbiAgICByZXR1cm4gZm9vdG5vdGVJdGVtSFRNTE5vZGU7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJGb290bm90ZUl0ZW1IVE1MTm9kZSIsIkhUTUxOb2RlIiwiZ2V0UnVsZU5hbWUiLCJydWxlTmFtZSIsIkZPT1ROT1RFX0lURU1fTUFSS0RPV05fUlVMRV9OQU1FIiwiYXNTdHJpbmciLCJzdHJpbmciLCJ0YWdOYW1lIiwiY2xhc3NOYW1lIiwiZnJvbVBhcmFncmFwaFRNTE5vZGVBbmRJZGVudGlmaWVyIiwicGFyYWdyYXBoSFRNTE5vZGUiLCJpZGVudGlmaWVyIiwiZm9vdG5vdGVBbmNob3JIVE1MTm9kZSIsIkZvb3Rub3RlQW5jaG9ySFRNTE5vZGUiLCJmcm9tSWRlbnRpZmllciIsImNoaWxkSFRNTE5vZGVzIiwiZm9vdG5vdGVJdGVtSFRNTE5vZGUiLCJmcm9tQ2hpbGRIVE1MTm9kZXMiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU9BOzs7ZUFBcUJBOzs7NkRBTEE7aUVBQ2M7MEJBRWM7Ozs7OztBQUVsQyxNQUFNQSw2QkFBNkJDLGFBQVE7SUFDeERDLGNBQWM7UUFDWixNQUFNQyxXQUFXQywwQ0FBZ0MsRUFBRSxHQUFHO1FBRXRELE9BQU9EO0lBQ1Q7SUFFQUUsV0FBVztRQUNULE1BQU1GLFdBQVcsSUFBSSxDQUFDRCxXQUFXLElBQzNCSSxTQUFTSCxVQUFXLEdBQUc7UUFFN0IsT0FBT0c7SUFDVDtJQUVBLE9BQU9DLFVBQVUsS0FBSztJQUV0QixPQUFPQyxZQUFZLFdBQVc7SUFFOUIsT0FBT0Msa0NBQWtDQyxpQkFBaUIsRUFBRUMsVUFBVSxFQUFFO1FBQ3RFLE1BQU1DLHlCQUF5QkMsaUJBQXNCLENBQUNDLGNBQWMsQ0FBQ0gsYUFDL0RJLGlCQUFpQjtZQUNmSDtZQUNBRjtTQUNELEVBQ0RNLHVCQUF1QmYsYUFBUSxDQUFDZ0Isa0JBQWtCLENBQUNqQixzQkFBc0JlO1FBRS9FLE9BQU9DO0lBQ1Q7QUFDRiJ9