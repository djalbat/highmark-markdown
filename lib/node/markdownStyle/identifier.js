"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return IdentifierMarkdownStyleNode;
    }
});
const _markdownStyle = /*#__PURE__*/ _interop_require_default(require("../../node/markdownStyle"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class IdentifierMarkdownStyleNode extends _markdownStyle.default {
    content() {
        const content = this.reduceChildNode((content, childNode)=>{
            const terminalNode = childNode, terminalNodeContent = terminalNode.getContent();
            content = content !== null ? `${content}${terminalNodeContent}` : terminalNodeContent; ///
            return content;
        }, null);
        return content;
    }
    static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) {
        return _markdownStyle.default.fromRuleNameChildNodesOpacityAndPrecedence(IdentifierMarkdownStyleNode, ruleName, childNodes, opacity, precedence);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duU3R5bGUvaWRlbnRpZmllci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE1hcmtkb3duU3R5bGVOb2RlIGZyb20gXCIuLi8uLi9ub2RlL21hcmtkb3duU3R5bGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSWRlbnRpZmllck1hcmtkb3duU3R5bGVOb2RlIGV4dGVuZHMgTWFya2Rvd25TdHlsZU5vZGUge1xuICBjb250ZW50KCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLnJlZHVjZUNoaWxkTm9kZSgoY29udGVudCwgY2hpbGROb2RlKSA9PiB7XG4gICAgICBjb25zdCB0ZXJtaW5hbE5vZGUgPSBjaGlsZE5vZGUsICAvLy9cbiAgICAgICAgICAgIHRlcm1pbmFsTm9kZUNvbnRlbnQgPSB0ZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpO1xuXG4gICAgICBjb250ZW50ID0gKGNvbnRlbnQgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgYCR7Y29udGVudH0ke3Rlcm1pbmFsTm9kZUNvbnRlbnR9YCA6XG4gICAgICAgICAgICAgICAgICAgIHRlcm1pbmFsTm9kZUNvbnRlbnQ7ICAvLy9cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSwgbnVsbCk7XG5cbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UocnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHByZWNlZGVuY2UpIHsgcmV0dXJuIE1hcmtkb3duU3R5bGVOb2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZShJZGVudGlmaWVyTWFya2Rvd25TdHlsZU5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlKTsgfVxufVxuIl0sIm5hbWVzIjpbIklkZW50aWZpZXJNYXJrZG93blN0eWxlTm9kZSIsIk1hcmtkb3duU3R5bGVOb2RlIiwiY29udGVudCIsInJlZHVjZUNoaWxkTm9kZSIsImNoaWxkTm9kZSIsInRlcm1pbmFsTm9kZSIsInRlcm1pbmFsTm9kZUNvbnRlbnQiLCJnZXRDb250ZW50IiwiZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlIiwicnVsZU5hbWUiLCJjaGlsZE5vZGVzIiwib3BhY2l0eSIsInByZWNlZGVuY2UiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQUlBOzs7ZUFBcUJBOzs7c0VBRlM7Ozs7OztBQUVmLE1BQU1BLG9DQUFvQ0Msc0JBQWlCO0lBQ3hFQyxVQUFVO1FBQ1IsTUFBTUEsVUFBVSxJQUFJLENBQUNDLGVBQWUsQ0FBQyxDQUFDRCxTQUFTRTtZQUM3QyxNQUFNQyxlQUFlRCxXQUNmRSxzQkFBc0JELGFBQWFFLFVBQVU7WUFFbkRMLFVBQVUsQUFBQ0EsWUFBWSxPQUNaLEdBQUdBLFVBQVVJLHFCQUFxQixHQUMvQkEscUJBQXNCLEdBQUc7WUFFdkMsT0FBT0o7UUFDVCxHQUFHO1FBRUgsT0FBT0E7SUFDVDtJQUVBLE9BQU9NLDJDQUEyQ0MsUUFBUSxFQUFFQyxVQUFVLEVBQUVDLE9BQU8sRUFBRUMsVUFBVSxFQUFFO1FBQUUsT0FBT1gsc0JBQWlCLENBQUNPLDBDQUEwQyxDQUFDUiw2QkFBNkJTLFVBQVVDLFlBQVlDLFNBQVNDO0lBQWE7QUFDOU8ifQ==