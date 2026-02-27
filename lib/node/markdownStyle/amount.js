"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return AmountMarkdownStyleNode;
    }
});
const _markdownStyle = /*#__PURE__*/ _interop_require_default(require("../../node/markdownStyle"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class AmountMarkdownStyleNode extends _markdownStyle.default {
    content() {
        const content = this.reduceChildNode((content, childNode)=>{
            const terminalNode = childNode, terminalNodeContent = terminalNode.getContent();
            content = content !== null ? `${content}${terminalNodeContent}` : terminalNodeContent; ///
            return content;
        }, null);
        return content;
    }
    static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) {
        return _markdownStyle.default.fromRuleNameChildNodesOpacityAndPrecedence(AmountMarkdownStyleNode, ruleName, childNodes, opacity, precedence);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duU3R5bGUvYW1vdW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTWFya2Rvd25TdHlsZU5vZGUgZnJvbSBcIi4uLy4uL25vZGUvbWFya2Rvd25TdHlsZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBbW91bnRNYXJrZG93blN0eWxlTm9kZSBleHRlbmRzIE1hcmtkb3duU3R5bGVOb2RlIHtcbiAgY29udGVudCgpIHtcbiAgICBjb25zdCBjb250ZW50ID0gdGhpcy5yZWR1Y2VDaGlsZE5vZGUoKGNvbnRlbnQsIGNoaWxkTm9kZSkgPT4ge1xuICAgICAgY29uc3QgdGVybWluYWxOb2RlID0gY2hpbGROb2RlLCAgLy8vXG4gICAgICAgICAgICB0ZXJtaW5hbE5vZGVDb250ZW50ID0gdGVybWluYWxOb2RlLmdldENvbnRlbnQoKTtcblxuICAgICAgY29udGVudCA9IChjb250ZW50ICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgIGAke2NvbnRlbnR9JHt0ZXJtaW5hbE5vZGVDb250ZW50fWAgOlxuICAgICAgICAgICAgICAgICAgICB0ZXJtaW5hbE5vZGVDb250ZW50OyAgLy8vXG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0sIG51bGwpO1xuXG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlKHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlKSB7IHJldHVybiBNYXJrZG93blN0eWxlTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UoQW1vdW50TWFya2Rvd25TdHlsZU5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlKTsgfVxufVxuIl0sIm5hbWVzIjpbIkFtb3VudE1hcmtkb3duU3R5bGVOb2RlIiwiTWFya2Rvd25TdHlsZU5vZGUiLCJjb250ZW50IiwicmVkdWNlQ2hpbGROb2RlIiwiY2hpbGROb2RlIiwidGVybWluYWxOb2RlIiwidGVybWluYWxOb2RlQ29udGVudCIsImdldENvbnRlbnQiLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UiLCJydWxlTmFtZSIsImNoaWxkTm9kZXMiLCJvcGFjaXR5IiwicHJlY2VkZW5jZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBSUE7OztlQUFxQkE7OztzRUFGUzs7Ozs7O0FBRWYsTUFBTUEsZ0NBQWdDQyxzQkFBaUI7SUFDcEVDLFVBQVU7UUFDUixNQUFNQSxVQUFVLElBQUksQ0FBQ0MsZUFBZSxDQUFDLENBQUNELFNBQVNFO1lBQzdDLE1BQU1DLGVBQWVELFdBQ2ZFLHNCQUFzQkQsYUFBYUUsVUFBVTtZQUVuREwsVUFBVSxBQUFDQSxZQUFZLE9BQ1osR0FBR0EsVUFBVUkscUJBQXFCLEdBQy9CQSxxQkFBc0IsR0FBRztZQUV2QyxPQUFPSjtRQUNULEdBQUc7UUFFSCxPQUFPQTtJQUNUO0lBRUEsT0FBT00sMkNBQTJDQyxRQUFRLEVBQUVDLFVBQVUsRUFBRUMsT0FBTyxFQUFFQyxVQUFVLEVBQUU7UUFBRSxPQUFPWCxzQkFBaUIsQ0FBQ08sMENBQTBDLENBQUNSLHlCQUF5QlMsVUFBVUMsWUFBWUMsU0FBU0M7SUFBYTtBQUMxTyJ9