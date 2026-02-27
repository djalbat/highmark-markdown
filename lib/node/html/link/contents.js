"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ContentsLinkHTMLNode;
    }
});
const _html = /*#__PURE__*/ _interop_require_default(require("../../../node/html"));
const _prepends = require("../../../prepends");
const _attributeNames = require("../../../attributeNames");
const _markdown = require("../../../ruleNames/markdown");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class ContentsLinkHTMLNode extends _html.default {
    constructor(outerNode, parentNode, childNodes, domElement, identifier){
        super(outerNode, parentNode, childNodes, domElement);
        this.identifier = identifier;
    }
    getIdentifier() {
        return this.identifier;
    }
    getRuleName() {
        const ruleName = _markdown.CONTENTS_LINK_MARKDOWN_RULE_NAME;
        return ruleName;
    }
    attributeName(context) {
        const attributeName = _attributeNames.HREF_ATTRIBUTE_NAME;
        return attributeName;
    }
    attributeValue(context) {
        const prepend = _prepends.CONTENTS_PREPEND, attributeValue = `#${prepend}-${this.identifier}`;
        return attributeValue;
    }
    asString() {
        const ruleName = this.getRuleName(), string = ruleName; ///
        return string;
    }
    static tagName = "a";
    static className = "contents-link";
    static fromLineHTMLTransformAndIdentifier(lineHTMLTransform, identifier) {
        const lineHTMLNode = lineHTMLTransform.getLineHTMLNode(), childHTMLNodes = [
            lineHTMLNode
        ], contentsLinkHTMLNode = _html.default.fromChildHTMLNodes(ContentsLinkHTMLNode, childHTMLNodes, identifier);
        return contentsLinkHTMLNode;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvbGluay9jb250ZW50cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEhUTUxOb2RlIGZyb20gXCIuLi8uLi8uLi9ub2RlL2h0bWxcIjtcblxuaW1wb3J0IHsgQ09OVEVOVFNfUFJFUEVORCB9IGZyb20gXCIuLi8uLi8uLi9wcmVwZW5kc1wiO1xuaW1wb3J0IHsgSFJFRl9BVFRSSUJVVEVfTkFNRSB9IGZyb20gXCIuLi8uLi8uLi9hdHRyaWJ1dGVOYW1lc1wiO1xuaW1wb3J0IHsgQ09OVEVOVFNfTElOS19NQVJLRE9XTl9SVUxFX05BTUUgfSBmcm9tIFwiLi4vLi4vLi4vcnVsZU5hbWVzL21hcmtkb3duXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRlbnRzTGlua0hUTUxOb2RlIGV4dGVuZHMgSFRNTE5vZGUge1xuICBjb25zdHJ1Y3RvcihvdXRlck5vZGUsIHBhcmVudE5vZGUsIGNoaWxkTm9kZXMsIGRvbUVsZW1lbnQsIGlkZW50aWZpZXIpIHtcbiAgICBzdXBlcihvdXRlck5vZGUsIHBhcmVudE5vZGUsIGNoaWxkTm9kZXMsIGRvbUVsZW1lbnQpO1xuXG4gICAgdGhpcy5pZGVudGlmaWVyID0gaWRlbnRpZmllcjtcbiAgfVxuXG4gIGdldElkZW50aWZpZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuaWRlbnRpZmllcjtcbiAgfVxuXG4gIGdldFJ1bGVOYW1lKCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gQ09OVEVOVFNfTElOS19NQVJLRE9XTl9SVUxFX05BTUU7XG5cbiAgICByZXR1cm4gcnVsZU5hbWU7XG4gIH1cblxuICBhdHRyaWJ1dGVOYW1lKGNvbnRleHQpIHtcbiAgICBjb25zdCBhdHRyaWJ1dGVOYW1lID0gSFJFRl9BVFRSSUJVVEVfTkFNRTtcblxuICAgIHJldHVybiBhdHRyaWJ1dGVOYW1lO1xuICB9XG5cbiAgYXR0cmlidXRlVmFsdWUoY29udGV4dCkge1xuICAgIGNvbnN0IHByZXBlbmQgPSBDT05URU5UU19QUkVQRU5ELFxuICAgICAgICAgIGF0dHJpYnV0ZVZhbHVlID0gYCMke3ByZXBlbmR9LSR7dGhpcy5pZGVudGlmaWVyfWA7XG5cbiAgICByZXR1cm4gYXR0cmlidXRlVmFsdWU7XG4gIH1cblxuICBhc1N0cmluZygpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IHRoaXMuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICBzdHJpbmcgPSBydWxlTmFtZTsgIC8vL1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJhXCI7XG5cbiAgc3RhdGljIGNsYXNzTmFtZSA9IFwiY29udGVudHMtbGlua1wiO1xuXG4gIHN0YXRpYyBmcm9tTGluZUhUTUxUcmFuc2Zvcm1BbmRJZGVudGlmaWVyKGxpbmVIVE1MVHJhbnNmb3JtLCBpZGVudGlmaWVyKSB7XG4gICAgY29uc3QgbGluZUhUTUxOb2RlID0gbGluZUhUTUxUcmFuc2Zvcm0uZ2V0TGluZUhUTUxOb2RlKCksXG4gICAgICAgICAgY2hpbGRIVE1MTm9kZXMgPSBbXG4gICAgICAgICAgICBsaW5lSFRNTE5vZGVcbiAgICAgICAgICBdLFxuICAgICAgICAgIGNvbnRlbnRzTGlua0hUTUxOb2RlID0gSFRNTE5vZGUuZnJvbUNoaWxkSFRNTE5vZGVzKENvbnRlbnRzTGlua0hUTUxOb2RlLCBjaGlsZEhUTUxOb2RlcywgaWRlbnRpZmllcik7XG5cbiAgICByZXR1cm4gY29udGVudHNMaW5rSFRNTE5vZGU7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJDb250ZW50c0xpbmtIVE1MTm9kZSIsIkhUTUxOb2RlIiwib3V0ZXJOb2RlIiwicGFyZW50Tm9kZSIsImNoaWxkTm9kZXMiLCJkb21FbGVtZW50IiwiaWRlbnRpZmllciIsImdldElkZW50aWZpZXIiLCJnZXRSdWxlTmFtZSIsInJ1bGVOYW1lIiwiQ09OVEVOVFNfTElOS19NQVJLRE9XTl9SVUxFX05BTUUiLCJhdHRyaWJ1dGVOYW1lIiwiY29udGV4dCIsIkhSRUZfQVRUUklCVVRFX05BTUUiLCJhdHRyaWJ1dGVWYWx1ZSIsInByZXBlbmQiLCJDT05URU5UU19QUkVQRU5EIiwiYXNTdHJpbmciLCJzdHJpbmciLCJ0YWdOYW1lIiwiY2xhc3NOYW1lIiwiZnJvbUxpbmVIVE1MVHJhbnNmb3JtQW5kSWRlbnRpZmllciIsImxpbmVIVE1MVHJhbnNmb3JtIiwibGluZUhUTUxOb2RlIiwiZ2V0TGluZUhUTUxOb2RlIiwiY2hpbGRIVE1MTm9kZXMiLCJjb250ZW50c0xpbmtIVE1MTm9kZSIsImZyb21DaGlsZEhUTUxOb2RlcyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBUUE7OztlQUFxQkE7Ozs2REFOQTswQkFFWTtnQ0FDRzswQkFDYTs7Ozs7O0FBRWxDLE1BQU1BLDZCQUE2QkMsYUFBUTtJQUN4RCxZQUFZQyxTQUFTLEVBQUVDLFVBQVUsRUFBRUMsVUFBVSxFQUFFQyxVQUFVLEVBQUVDLFVBQVUsQ0FBRTtRQUNyRSxLQUFLLENBQUNKLFdBQVdDLFlBQVlDLFlBQVlDO1FBRXpDLElBQUksQ0FBQ0MsVUFBVSxHQUFHQTtJQUNwQjtJQUVBQyxnQkFBZ0I7UUFDZCxPQUFPLElBQUksQ0FBQ0QsVUFBVTtJQUN4QjtJQUVBRSxjQUFjO1FBQ1osTUFBTUMsV0FBV0MsMENBQWdDO1FBRWpELE9BQU9EO0lBQ1Q7SUFFQUUsY0FBY0MsT0FBTyxFQUFFO1FBQ3JCLE1BQU1ELGdCQUFnQkUsbUNBQW1CO1FBRXpDLE9BQU9GO0lBQ1Q7SUFFQUcsZUFBZUYsT0FBTyxFQUFFO1FBQ3RCLE1BQU1HLFVBQVVDLDBCQUFnQixFQUMxQkYsaUJBQWlCLENBQUMsQ0FBQyxFQUFFQyxRQUFRLENBQUMsRUFBRSxJQUFJLENBQUNULFVBQVUsRUFBRTtRQUV2RCxPQUFPUTtJQUNUO0lBRUFHLFdBQVc7UUFDVCxNQUFNUixXQUFXLElBQUksQ0FBQ0QsV0FBVyxJQUMzQlUsU0FBU1QsVUFBVyxHQUFHO1FBRTdCLE9BQU9TO0lBQ1Q7SUFFQSxPQUFPQyxVQUFVLElBQUk7SUFFckIsT0FBT0MsWUFBWSxnQkFBZ0I7SUFFbkMsT0FBT0MsbUNBQW1DQyxpQkFBaUIsRUFBRWhCLFVBQVUsRUFBRTtRQUN2RSxNQUFNaUIsZUFBZUQsa0JBQWtCRSxlQUFlLElBQ2hEQyxpQkFBaUI7WUFDZkY7U0FDRCxFQUNERyx1QkFBdUJ6QixhQUFRLENBQUMwQixrQkFBa0IsQ0FBQzNCLHNCQUFzQnlCLGdCQUFnQm5CO1FBRS9GLE9BQU9vQjtJQUNUO0FBQ0YifQ==