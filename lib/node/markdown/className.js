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
            const identifierTerminalNode = secondChildNode, content = identifierTerminalNode.getContent(), className = content; ///
            return className;
        });
        return className;
    }
    static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) {
        return _markdown.default.fromRuleNameChildNodesOpacityAndPrecedence(ClassNameMarkdownNode, ruleName, childNodes, opacity, precedence);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2NsYXNzTmFtZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE1hcmtkb3duTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9tYXJrZG93blwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDbGFzc05hbWVNYXJrZG93bk5vZGUgZXh0ZW5kcyBNYXJrZG93bk5vZGUge1xuICBjbGFzc05hbWUoY29udGV4dCkge1xuICAgIGNvbnN0IGNsYXNzTmFtZSA9IHRoaXMuZnJvbVNlY29uZENoaWxkTm9kZSgoc2Vjb25kQ2hpbGROb2RlKSA9PiB7XG4gICAgICBjb25zdCBpZGVudGlmaWVyVGVybWluYWxOb2RlID0gc2Vjb25kQ2hpbGROb2RlLCAvLy9cbiAgICAgICAgICAgIGNvbnRlbnQgPSBpZGVudGlmaWVyVGVybWluYWxOb2RlLmdldENvbnRlbnQoKSxcbiAgICAgICAgICAgIGNsYXNzTmFtZSA9IGNvbnRlbnQ7ICAvLy9cblxuICAgICAgcmV0dXJuIGNsYXNzTmFtZTtcbiAgICB9KTtcblxuICAgIHJldHVybiBjbGFzc05hbWU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlKHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlKSB7IHJldHVybiBNYXJrZG93bk5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlKENsYXNzTmFtZU1hcmtkb3duTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHByZWNlZGVuY2UpOyB9XG59XG4iXSwibmFtZXMiOlsiQ2xhc3NOYW1lTWFya2Rvd25Ob2RlIiwiTWFya2Rvd25Ob2RlIiwiY2xhc3NOYW1lIiwiY29udGV4dCIsImZyb21TZWNvbmRDaGlsZE5vZGUiLCJzZWNvbmRDaGlsZE5vZGUiLCJpZGVudGlmaWVyVGVybWluYWxOb2RlIiwiY29udGVudCIsImdldENvbnRlbnQiLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UiLCJydWxlTmFtZSIsImNoaWxkTm9kZXMiLCJvcGFjaXR5IiwicHJlY2VkZW5jZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBSUE7OztlQUFxQkE7OztpRUFGSTs7Ozs7O0FBRVYsTUFBTUEsOEJBQThCQyxpQkFBWTtJQUM3REMsVUFBVUMsT0FBTyxFQUFFO1FBQ2pCLE1BQU1ELFlBQVksSUFBSSxDQUFDRSxtQkFBbUIsQ0FBQyxDQUFDQztZQUMxQyxNQUFNQyx5QkFBeUJELGlCQUN6QkUsVUFBVUQsdUJBQXVCRSxVQUFVLElBQzNDTixZQUFZSyxTQUFVLEdBQUc7WUFFL0IsT0FBT0w7UUFDVDtRQUVBLE9BQU9BO0lBQ1Q7SUFFQSxPQUFPTywyQ0FBMkNDLFFBQVEsRUFBRUMsVUFBVSxFQUFFQyxPQUFPLEVBQUVDLFVBQVUsRUFBRTtRQUFFLE9BQU9aLGlCQUFZLENBQUNRLDBDQUEwQyxDQUFDVCx1QkFBdUJVLFVBQVVDLFlBQVlDLFNBQVNDO0lBQWE7QUFDbk8ifQ==