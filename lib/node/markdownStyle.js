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
const _occamparsers = require("occam-parsers");
const _node = /*#__PURE__*/ _interop_require_default(require("../mixins/node"));
const _token = /*#__PURE__*/ _interop_require_default(require("../mixins/token"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class MarkdownStyleNode extends _occamparsers.NonTerminalNode {
    static fromRuleNameChildNodesOpacityAndPrecedence(Class, ruleName, childNodes, opacity, precedence, ...remainingArguments) {
        if (precedence === undefined) {
            precedence = opacity; ///
            opacity = childNodes; ///
            childNodes = ruleName; ///
            ruleName = Class; ///
            Class = MarkdownStyleNode; ///
        }
        const markdownStyleNode = _occamparsers.NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(Class, ruleName, childNodes, opacity, precedence, ...remainingArguments);
        return markdownStyleNode;
    }
}
Object.assign(MarkdownStyleNode.prototype, _node.default);
Object.assign(MarkdownStyleNode.prototype, _token.default);
const _default = MarkdownStyleNode;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL21hcmtkb3duU3R5bGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IE5vblRlcm1pbmFsTm9kZSB9IGZyb20gXCJvY2NhbS1wYXJzZXJzXCI7XG5cbmltcG9ydCBub2RlTWl4aW5zIGZyb20gXCIuLi9taXhpbnMvbm9kZVwiO1xuaW1wb3J0IHRva2VuTWl4aW5zIGZyb20gXCIuLi9taXhpbnMvdG9rZW5cIjtcblxuY2xhc3MgTWFya2Rvd25TdHlsZU5vZGUgZXh0ZW5kcyBOb25UZXJtaW5hbE5vZGUge1xuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlKENsYXNzLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgaWYgKHByZWNlZGVuY2UgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcHJlY2VkZW5jZSA9IG9wYWNpdHk7IC8vL1xuXG4gICAgICBvcGFjaXR5ID0gY2hpbGROb2RlczsgLy8vXG5cbiAgICAgIGNoaWxkTm9kZXMgPSBydWxlTmFtZTsgIC8vL1xuXG4gICAgICBydWxlTmFtZSA9IENsYXNzOyAvLy9cblxuICAgICAgQ2xhc3MgPSBNYXJrZG93blN0eWxlTm9kZTsgLy8vXG4gICAgfVxuXG4gICAgY29uc3QgbWFya2Rvd25TdHlsZU5vZGUgPSBOb25UZXJtaW5hbE5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlKENsYXNzLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIHJldHVybiBtYXJrZG93blN0eWxlTm9kZTtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKE1hcmtkb3duU3R5bGVOb2RlLnByb3RvdHlwZSwgbm9kZU1peGlucyk7XG5PYmplY3QuYXNzaWduKE1hcmtkb3duU3R5bGVOb2RlLnByb3RvdHlwZSwgdG9rZW5NaXhpbnMpO1xuXG5leHBvcnQgZGVmYXVsdCBNYXJrZG93blN0eWxlTm9kZTtcbiJdLCJuYW1lcyI6WyJNYXJrZG93blN0eWxlTm9kZSIsIk5vblRlcm1pbmFsTm9kZSIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZSIsIkNsYXNzIiwicnVsZU5hbWUiLCJjaGlsZE5vZGVzIiwib3BhY2l0eSIsInByZWNlZGVuY2UiLCJyZW1haW5pbmdBcmd1bWVudHMiLCJ1bmRlZmluZWQiLCJtYXJrZG93blN0eWxlTm9kZSIsIk9iamVjdCIsImFzc2lnbiIsInByb3RvdHlwZSIsIm5vZGVNaXhpbnMiLCJ0b2tlbk1peGlucyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBOEJBOzs7ZUFBQTs7OzhCQTVCZ0M7NkRBRVQ7OERBQ0M7Ozs7OztBQUV4QixNQUFNQSwwQkFBMEJDLDZCQUFlO0lBQzdDLE9BQU9DLDJDQUEyQ0MsS0FBSyxFQUFFQyxRQUFRLEVBQUVDLFVBQVUsRUFBRUMsT0FBTyxFQUFFQyxVQUFVLEVBQUUsR0FBR0Msa0JBQWtCLEVBQUU7UUFDekgsSUFBSUQsZUFBZUUsV0FBVztZQUM1QkYsYUFBYUQsU0FBUyxHQUFHO1lBRXpCQSxVQUFVRCxZQUFZLEdBQUc7WUFFekJBLGFBQWFELFVBQVcsR0FBRztZQUUzQkEsV0FBV0QsT0FBTyxHQUFHO1lBRXJCQSxRQUFRSCxtQkFBbUIsR0FBRztRQUNoQztRQUVBLE1BQU1VLG9CQUFvQlQsNkJBQWUsQ0FBQ0MsMENBQTBDLENBQUNDLE9BQU9DLFVBQVVDLFlBQVlDLFNBQVNDLGVBQWVDO1FBRTFJLE9BQU9FO0lBQ1Q7QUFDRjtBQUVBQyxPQUFPQyxNQUFNLENBQUNaLGtCQUFrQmEsU0FBUyxFQUFFQyxhQUFVO0FBQ3JESCxPQUFPQyxNQUFNLENBQUNaLGtCQUFrQmEsU0FBUyxFQUFFRSxjQUFXO01BRXRELFdBQWVmIn0=