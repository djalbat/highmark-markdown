"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return BlockStartMarkdownNode;
    }
});
const _markdown = /*#__PURE__*/ _interop_require_default(require("../../node/markdown"));
const _className = /*#__PURE__*/ _interop_require_default(require("./className"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class BlockStartMarkdownNode extends _markdown.default {
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
        return _markdown.default.fromRuleNameChildNodesOpacityAndPrecedence(BlockStartMarkdownNode, ruleName, childNodes, opacity, precedence);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2Jsb2NrU3RhcnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBNYXJrZG93bk5vZGUgZnJvbSBcIi4uLy4uL25vZGUvbWFya2Rvd25cIjtcbmltcG9ydCBDbGFzc05hbWVNYXJrZG93bk5vZGUgZnJvbSBcIi4vY2xhc3NOYW1lXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJsb2NrU3RhcnRNYXJrZG93bk5vZGUgZXh0ZW5kcyBNYXJrZG93bk5vZGUge1xuICBjbGFzc05hbWUoY29udGV4dCkge1xuICAgIGNvbnN0IGNsYXNzTmFtZSA9IHRoaXMuZnJvbVNlY29uZENoaWxkTm9kZSgoc2Vjb25kQ2hpbGROb2RlKSA9PiB7XG4gICAgICBsZXQgY2xhc3NOYW1lID0gbnVsbDtcblxuICAgICAgY29uc3Qgc2Vjb25kQ2hpbGROb2RlQ2xhc3NOYW1lTWFya2Rvd25Ob2RlID0gKHNlY29uZENoaWxkTm9kZSBpbnN0YW5jZW9mIENsYXNzTmFtZU1hcmtkb3duTm9kZSk7XG5cbiAgICAgIGlmIChzZWNvbmRDaGlsZE5vZGVDbGFzc05hbWVNYXJrZG93bk5vZGUpIHtcbiAgICAgICAgY29uc3QgY2xhc3NOYW1lTWFya2Rvd25Ob2RlID0gc2Vjb25kQ2hpbGROb2RlOyAgLy8vXG5cbiAgICAgICAgY2xhc3NOYW1lID0gY2xhc3NOYW1lTWFya2Rvd25Ob2RlLmNsYXNzTmFtZShjb250ZXh0KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNsYXNzTmFtZTtcbiAgICB9KTtcblxuICAgIHJldHVybiBjbGFzc05hbWU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlKHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlKSB7IHJldHVybiBNYXJrZG93bk5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlKEJsb2NrU3RhcnRNYXJrZG93bk5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlKTsgfVxufVxuIl0sIm5hbWVzIjpbIkJsb2NrU3RhcnRNYXJrZG93bk5vZGUiLCJNYXJrZG93bk5vZGUiLCJjbGFzc05hbWUiLCJjb250ZXh0IiwiZnJvbVNlY29uZENoaWxkTm9kZSIsInNlY29uZENoaWxkTm9kZSIsInNlY29uZENoaWxkTm9kZUNsYXNzTmFtZU1hcmtkb3duTm9kZSIsIkNsYXNzTmFtZU1hcmtkb3duTm9kZSIsImNsYXNzTmFtZU1hcmtkb3duTm9kZSIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZSIsInJ1bGVOYW1lIiwiY2hpbGROb2RlcyIsIm9wYWNpdHkiLCJwcmVjZWRlbmNlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFLQTs7O2VBQXFCQTs7O2lFQUhJO2tFQUNTOzs7Ozs7QUFFbkIsTUFBTUEsK0JBQStCQyxpQkFBWTtJQUM5REMsVUFBVUMsT0FBTyxFQUFFO1FBQ2pCLE1BQU1ELFlBQVksSUFBSSxDQUFDRSxtQkFBbUIsQ0FBQyxDQUFDQztZQUMxQyxJQUFJSCxZQUFZO1lBRWhCLE1BQU1JLHVDQUF3Q0QsMkJBQTJCRSxrQkFBcUI7WUFFOUYsSUFBSUQsc0NBQXNDO2dCQUN4QyxNQUFNRSx3QkFBd0JILGlCQUFrQixHQUFHO2dCQUVuREgsWUFBWU0sc0JBQXNCTixTQUFTLENBQUNDO1lBQzlDO1lBRUEsT0FBT0Q7UUFDVDtRQUVBLE9BQU9BO0lBQ1Q7SUFFQSxPQUFPTywyQ0FBMkNDLFFBQVEsRUFBRUMsVUFBVSxFQUFFQyxPQUFPLEVBQUVDLFVBQVUsRUFBRTtRQUFFLE9BQU9aLGlCQUFZLENBQUNRLDBDQUEwQyxDQUFDVCx3QkFBd0JVLFVBQVVDLFlBQVlDLFNBQVNDO0lBQWE7QUFDcE8ifQ==