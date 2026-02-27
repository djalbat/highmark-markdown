"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ContainerNameMarkdownNode;
    }
});
const _markdown = /*#__PURE__*/ _interop_require_default(require("../../node/markdown"));
const _className = /*#__PURE__*/ _interop_require_default(require("../../node/markdown/className"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class ContainerNameMarkdownNode extends _markdown.default {
    className(context) {
        const className = this.fromSecondChildNode((secondChildNode)=>{
            let className = null;
            const secondChildNodeClassNameMarkdownNode = secondChildNode instanceof _className.default;
            if (secondChildNodeClassNameMarkdownNode) {
                const classNameMarkdownNode = secondChildNode; ///
                className = classNameMarkdownNode.className(context);
            }
            return className;
        });
        return className;
    }
    static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) {
        return _markdown.default.fromRuleNameChildNodesOpacityAndPrecedence(ContainerNameMarkdownNode, ruleName, childNodes, opacity, precedence);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2NvbnRhaW5lci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE1hcmtkb3duTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9tYXJrZG93blwiO1xuaW1wb3J0IENsYXNzTmFtZU1hcmtkb3duIGZyb20gXCIuLi8uLi9ub2RlL21hcmtkb3duL2NsYXNzTmFtZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250YWluZXJOYW1lTWFya2Rvd25Ob2RlIGV4dGVuZHMgTWFya2Rvd25Ob2RlIHtcbiAgY2xhc3NOYW1lKGNvbnRleHQpIHtcbiAgICBjb25zdCBjbGFzc05hbWUgPSB0aGlzLmZyb21TZWNvbmRDaGlsZE5vZGUoKHNlY29uZENoaWxkTm9kZSkgPT4ge1xuICAgICAgbGV0IGNsYXNzTmFtZSA9IG51bGw7XG5cbiAgICAgIGNvbnN0IHNlY29uZENoaWxkTm9kZUNsYXNzTmFtZU1hcmtkb3duTm9kZSA9IChzZWNvbmRDaGlsZE5vZGUgaW5zdGFuY2VvZiBDbGFzc05hbWVNYXJrZG93bik7XG5cbiAgICAgIGlmIChzZWNvbmRDaGlsZE5vZGVDbGFzc05hbWVNYXJrZG93bk5vZGUpIHtcbiAgICAgICAgY29uc3QgY2xhc3NOYW1lTWFya2Rvd25Ob2RlID0gc2Vjb25kQ2hpbGROb2RlOyAvLy9cblxuICAgICAgICBjbGFzc05hbWUgPSBjbGFzc05hbWVNYXJrZG93bk5vZGUuY2xhc3NOYW1lKGNvbnRleHQpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY2xhc3NOYW1lO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGNsYXNzTmFtZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UocnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHByZWNlZGVuY2UpIHsgcmV0dXJuIE1hcmtkb3duTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UoQ29udGFpbmVyTmFtZU1hcmtkb3duTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHByZWNlZGVuY2UpOyB9XG59XG4iXSwibmFtZXMiOlsiQ29udGFpbmVyTmFtZU1hcmtkb3duTm9kZSIsIk1hcmtkb3duTm9kZSIsImNsYXNzTmFtZSIsImNvbnRleHQiLCJmcm9tU2Vjb25kQ2hpbGROb2RlIiwic2Vjb25kQ2hpbGROb2RlIiwic2Vjb25kQ2hpbGROb2RlQ2xhc3NOYW1lTWFya2Rvd25Ob2RlIiwiQ2xhc3NOYW1lTWFya2Rvd24iLCJjbGFzc05hbWVNYXJrZG93bk5vZGUiLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UiLCJydWxlTmFtZSIsImNoaWxkTm9kZXMiLCJvcGFjaXR5IiwicHJlY2VkZW5jZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBS0E7OztlQUFxQkE7OztpRUFISTtrRUFDSzs7Ozs7O0FBRWYsTUFBTUEsa0NBQWtDQyxpQkFBWTtJQUNqRUMsVUFBVUMsT0FBTyxFQUFFO1FBQ2pCLE1BQU1ELFlBQVksSUFBSSxDQUFDRSxtQkFBbUIsQ0FBQyxDQUFDQztZQUMxQyxJQUFJSCxZQUFZO1lBRWhCLE1BQU1JLHVDQUF3Q0QsMkJBQTJCRSxrQkFBaUI7WUFFMUYsSUFBSUQsc0NBQXNDO2dCQUN4QyxNQUFNRSx3QkFBd0JILGlCQUFpQixHQUFHO2dCQUVsREgsWUFBWU0sc0JBQXNCTixTQUFTLENBQUNDO1lBQzlDO1lBRUEsT0FBT0Q7UUFDVDtRQUVBLE9BQU9BO0lBQ1Q7SUFFQSxPQUFPTywyQ0FBMkNDLFFBQVEsRUFBRUMsVUFBVSxFQUFFQyxPQUFPLEVBQUVDLFVBQVUsRUFBRTtRQUFFLE9BQU9aLGlCQUFZLENBQUNRLDBDQUEwQyxDQUFDVCwyQkFBMkJVLFVBQVVDLFlBQVlDLFNBQVNDO0lBQWE7QUFDdk8ifQ==