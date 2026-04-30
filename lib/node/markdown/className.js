"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ClassNameMarkdownNode;
    }
});
const _markdown = /*#__PURE__*/ _interop_require_default(require("../../node/markdown"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class ClassNameMarkdownNode extends _markdown.default {
    className(context) {
        const className = this.fromSecondChildNode((secondChildNode)=>{
            const terminalNode = secondChildNode, terminalNodeContent = terminalNode.getContent(), className = terminalNodeContent; ///
            return className;
        });
        return className;
    }
    static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) {
        return _markdown.default.fromRuleNameChildNodesOpacityAndPrecedence(ClassNameMarkdownNode, ruleName, childNodes, opacity, precedence);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2NsYXNzTmFtZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE1hcmtkb3duTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9tYXJrZG93blwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDbGFzc05hbWVNYXJrZG93bk5vZGUgZXh0ZW5kcyBNYXJrZG93bk5vZGUge1xuICBjbGFzc05hbWUoY29udGV4dCkge1xuICAgIGNvbnN0IGNsYXNzTmFtZSA9IHRoaXMuZnJvbVNlY29uZENoaWxkTm9kZSgoc2Vjb25kQ2hpbGROb2RlKSA9PiB7XG4gICAgICBjb25zdCB0ZXJtaW5hbE5vZGUgPSBzZWNvbmRDaGlsZE5vZGUsIC8vL1xuICAgICAgICAgICAgdGVybWluYWxOb2RlQ29udGVudCA9IHRlcm1pbmFsTm9kZS5nZXRDb250ZW50KCksXG4gICAgICAgICAgICBjbGFzc05hbWUgPSB0ZXJtaW5hbE5vZGVDb250ZW50OyAgLy8vXG5cbiAgICAgIHJldHVybiBjbGFzc05hbWU7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gY2xhc3NOYW1lO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZShydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSkgeyByZXR1cm4gTWFya2Rvd25Ob2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZShDbGFzc05hbWVNYXJrZG93bk5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlKTsgfVxufVxuIl0sIm5hbWVzIjpbIkNsYXNzTmFtZU1hcmtkb3duTm9kZSIsIk1hcmtkb3duTm9kZSIsImNsYXNzTmFtZSIsImNvbnRleHQiLCJmcm9tU2Vjb25kQ2hpbGROb2RlIiwic2Vjb25kQ2hpbGROb2RlIiwidGVybWluYWxOb2RlIiwidGVybWluYWxOb2RlQ29udGVudCIsImdldENvbnRlbnQiLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UiLCJydWxlTmFtZSIsImNoaWxkTm9kZXMiLCJvcGFjaXR5IiwicHJlY2VkZW5jZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBSUE7OztlQUFxQkE7OztpRUFGSTs7Ozs7O0FBRVYsTUFBTUEsOEJBQThCQyxpQkFBWTtJQUM3REMsVUFBVUMsT0FBTyxFQUFFO1FBQ2pCLE1BQU1ELFlBQVksSUFBSSxDQUFDRSxtQkFBbUIsQ0FBQyxDQUFDQztZQUMxQyxNQUFNQyxlQUFlRCxpQkFDZkUsc0JBQXNCRCxhQUFhRSxVQUFVLElBQzdDTixZQUFZSyxxQkFBc0IsR0FBRztZQUUzQyxPQUFPTDtRQUNUO1FBRUEsT0FBT0E7SUFDVDtJQUVBLE9BQU9PLDJDQUEyQ0MsUUFBUSxFQUFFQyxVQUFVLEVBQUVDLE9BQU8sRUFBRUMsVUFBVSxFQUFFO1FBQUUsT0FBT1osaUJBQVksQ0FBQ1EsMENBQTBDLENBQUNULHVCQUF1QlUsVUFBVUMsWUFBWUMsU0FBU0M7SUFBYTtBQUNuTyJ9