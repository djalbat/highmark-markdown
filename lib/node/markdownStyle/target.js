"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return TargetMarkdownStyleNode;
    }
});
const _markdownStyle = /*#__PURE__*/ _interop_require_default(require("../../node/markdownStyle"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class TargetMarkdownStyleNode extends _markdownStyle.default {
    target(context) {
        const target = this.fromSecondChildNode((secondChildNode)=>{
            const targetTerminalNode = secondChildNode, targetTerminalNodeContent = targetTerminalNode.getContent(), target = targetTerminalNodeContent; ///
            return target;
        });
        return target;
    }
    static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) {
        return _markdownStyle.default.fromRuleNameChildNodesOpacityAndPrecedence(TargetMarkdownStyleNode, ruleName, childNodes, opacity, precedence);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duU3R5bGUvdGFyZ2V0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTWFya2Rvd25TdHlsZU5vZGUgZnJvbSBcIi4uLy4uL25vZGUvbWFya2Rvd25TdHlsZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYXJnZXRNYXJrZG93blN0eWxlTm9kZSBleHRlbmRzIE1hcmtkb3duU3R5bGVOb2RlIHtcbiAgdGFyZ2V0KGNvbnRleHQpIHtcbiAgICBjb25zdCB0YXJnZXQgPSB0aGlzLmZyb21TZWNvbmRDaGlsZE5vZGUoKHNlY29uZENoaWxkTm9kZSkgPT4ge1xuICAgICAgY29uc3QgdGFyZ2V0VGVybWluYWxOb2RlID0gc2Vjb25kQ2hpbGROb2RlLCAgLy8vXG4gICAgICAgICAgICB0YXJnZXRUZXJtaW5hbE5vZGVDb250ZW50ID0gdGFyZ2V0VGVybWluYWxOb2RlLmdldENvbnRlbnQoKSxcbiAgICAgICAgICAgIHRhcmdldCA9IHRhcmdldFRlcm1pbmFsTm9kZUNvbnRlbnQ7IC8vL1xuXG4gICAgICByZXR1cm4gdGFyZ2V0O1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UocnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHByZWNlZGVuY2UpIHsgcmV0dXJuIE1hcmtkb3duU3R5bGVOb2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZShUYXJnZXRNYXJrZG93blN0eWxlTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHByZWNlZGVuY2UpOyB9XG59XG4iXSwibmFtZXMiOlsiVGFyZ2V0TWFya2Rvd25TdHlsZU5vZGUiLCJNYXJrZG93blN0eWxlTm9kZSIsInRhcmdldCIsImNvbnRleHQiLCJmcm9tU2Vjb25kQ2hpbGROb2RlIiwic2Vjb25kQ2hpbGROb2RlIiwidGFyZ2V0VGVybWluYWxOb2RlIiwidGFyZ2V0VGVybWluYWxOb2RlQ29udGVudCIsImdldENvbnRlbnQiLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UiLCJydWxlTmFtZSIsImNoaWxkTm9kZXMiLCJvcGFjaXR5IiwicHJlY2VkZW5jZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBSUE7OztlQUFxQkE7OztzRUFGUzs7Ozs7O0FBRWYsTUFBTUEsZ0NBQWdDQyxzQkFBaUI7SUFDcEVDLE9BQU9DLE9BQU8sRUFBRTtRQUNkLE1BQU1ELFNBQVMsSUFBSSxDQUFDRSxtQkFBbUIsQ0FBQyxDQUFDQztZQUN2QyxNQUFNQyxxQkFBcUJELGlCQUNyQkUsNEJBQTRCRCxtQkFBbUJFLFVBQVUsSUFDekROLFNBQVNLLDJCQUEyQixHQUFHO1lBRTdDLE9BQU9MO1FBQ1Q7UUFFQSxPQUFPQTtJQUNUO0lBRUEsT0FBT08sMkNBQTJDQyxRQUFRLEVBQUVDLFVBQVUsRUFBRUMsT0FBTyxFQUFFQyxVQUFVLEVBQUU7UUFBRSxPQUFPWixzQkFBaUIsQ0FBQ1EsMENBQTBDLENBQUNULHlCQUF5QlUsVUFBVUMsWUFBWUMsU0FBU0M7SUFBYTtBQUMxTyJ9