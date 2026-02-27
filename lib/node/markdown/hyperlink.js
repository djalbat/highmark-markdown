"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return HyperlinkMarkdownNode;
    }
});
const _markdown = /*#__PURE__*/ _interop_require_default(require("../../node/markdown"));
const _tokenTypes = require("../../tokenTypes");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class HyperlinkMarkdownNode extends _markdown.default {
    urlFromSecondLastChildNode(context) {
        const url = this.fromSecondLastChildNode((secondLastChildNode)=>{
            const terminalNode = secondLastChildNode, url = urlFromTerminalNode(terminalNode);
            return url;
        });
        return url;
    }
    urlFromFirstLastChildNode(context) {
        const url = this.fromFirstLastChildNode((firstLastChildNode)=>{
            const terminalNode = firstLastChildNode, url = urlFromTerminalNode(terminalNode);
            return url;
        });
        return url;
    }
    url(context) {
        const simple = this.isSimple(), url = simple ? this.urlFromFirstLastChildNode(context) : this.urlFromSecondLastChildNode(context);
        return url;
    }
    isSimple() {
        const simple = this.fromFirstLastChildNode((firstLastChildNode)=>{
            const terminalNode = firstLastChildNode, type = terminalNode.getType(), typeURLTokenType = type === _tokenTypes.URL_TOKEN_TYPE, simple = typeURLTokenType; ///
            return simple;
        });
        return simple;
    }
    static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) {
        return _markdown.default.fromRuleNameChildNodesOpacityAndPrecedence(HyperlinkMarkdownNode, ruleName, childNodes, opacity, precedence);
    }
}
function urlFromTerminalNode(terminalNode) {
    let url = null;
    const type = terminalNode.getType(), typeURLTokenType = type === _tokenTypes.URL_TOKEN_TYPE;
    if (typeURLTokenType) {
        const content = terminalNode.getContent();
        url = content; ///
    }
    return url;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2h5cGVybGluay5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE1hcmtkb3duTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9tYXJrZG93blwiO1xuXG5pbXBvcnQgeyBVUkxfVE9LRU5fVFlQRSB9IGZyb20gXCIuLi8uLi90b2tlblR5cGVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEh5cGVybGlua01hcmtkb3duTm9kZSBleHRlbmRzIE1hcmtkb3duTm9kZSB7XG4gIHVybEZyb21TZWNvbmRMYXN0Q2hpbGROb2RlKGNvbnRleHQpIHtcbiAgICBjb25zdCB1cmwgPSB0aGlzLmZyb21TZWNvbmRMYXN0Q2hpbGROb2RlKChzZWNvbmRMYXN0Q2hpbGROb2RlKSA9PiB7XG4gICAgICBjb25zdCB0ZXJtaW5hbE5vZGUgPSBzZWNvbmRMYXN0Q2hpbGROb2RlLCAgLy8vXG4gICAgICAgICAgICB1cmwgPSB1cmxGcm9tVGVybWluYWxOb2RlKHRlcm1pbmFsTm9kZSk7XG5cbiAgICAgIHJldHVybiB1cmw7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsRnJvbUZpcnN0TGFzdENoaWxkTm9kZShjb250ZXh0KSB7XG4gICAgY29uc3QgdXJsID0gdGhpcy5mcm9tRmlyc3RMYXN0Q2hpbGROb2RlKChmaXJzdExhc3RDaGlsZE5vZGUpID0+IHtcbiAgICAgIGNvbnN0IHRlcm1pbmFsTm9kZSA9IGZpcnN0TGFzdENoaWxkTm9kZSwgIC8vL1xuICAgICAgICAgICAgdXJsID0gdXJsRnJvbVRlcm1pbmFsTm9kZSh0ZXJtaW5hbE5vZGUpO1xuXG4gICAgICByZXR1cm4gdXJsO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybChjb250ZXh0KSB7XG4gICAgY29uc3Qgc2ltcGxlID0gdGhpcy5pc1NpbXBsZSgpLFxuICAgICAgICAgIHVybCA9IHNpbXBsZSA/XG4gICAgICAgICAgICAgICAgICB0aGlzLnVybEZyb21GaXJzdExhc3RDaGlsZE5vZGUoY29udGV4dCkgOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVybEZyb21TZWNvbmRMYXN0Q2hpbGROb2RlKGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIGlzU2ltcGxlKCkge1xuICAgIGNvbnN0IHNpbXBsZSA9IHRoaXMuZnJvbUZpcnN0TGFzdENoaWxkTm9kZSgoZmlyc3RMYXN0Q2hpbGROb2RlKSA9PiB7XG4gICAgICBjb25zdCB0ZXJtaW5hbE5vZGUgPSBmaXJzdExhc3RDaGlsZE5vZGUsICAvLy9cbiAgICAgICAgICAgIHR5cGUgPSB0ZXJtaW5hbE5vZGUuZ2V0VHlwZSgpLFxuICAgICAgICAgICAgdHlwZVVSTFRva2VuVHlwZSA9ICh0eXBlID09PSBVUkxfVE9LRU5fVFlQRSksXG4gICAgICAgICAgICBzaW1wbGUgPSB0eXBlVVJMVG9rZW5UeXBlOyAvLy9cblxuICAgICAgcmV0dXJuIHNpbXBsZTtcbiAgICB9KTtcblxuICAgIHJldHVybiBzaW1wbGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlKHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlKSB7IHJldHVybiBNYXJrZG93bk5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlKEh5cGVybGlua01hcmtkb3duTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHByZWNlZGVuY2UpOyB9XG59XG5cbmZ1bmN0aW9uIHVybEZyb21UZXJtaW5hbE5vZGUodGVybWluYWxOb2RlKSB7XG4gIGxldCB1cmwgPSBudWxsO1xuXG4gIGNvbnN0IHR5cGUgPSB0ZXJtaW5hbE5vZGUuZ2V0VHlwZSgpLFxuICAgICAgICB0eXBlVVJMVG9rZW5UeXBlID0gKHR5cGUgPT09IFVSTF9UT0tFTl9UWVBFKTtcblxuICBpZiAodHlwZVVSTFRva2VuVHlwZSkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSB0ZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpO1xuXG4gICAgdXJsID0gY29udGVudDsgLy8vXG4gIH1cblxuICByZXR1cm4gdXJsO1xufSJdLCJuYW1lcyI6WyJIeXBlcmxpbmtNYXJrZG93bk5vZGUiLCJNYXJrZG93bk5vZGUiLCJ1cmxGcm9tU2Vjb25kTGFzdENoaWxkTm9kZSIsImNvbnRleHQiLCJ1cmwiLCJmcm9tU2Vjb25kTGFzdENoaWxkTm9kZSIsInNlY29uZExhc3RDaGlsZE5vZGUiLCJ0ZXJtaW5hbE5vZGUiLCJ1cmxGcm9tVGVybWluYWxOb2RlIiwidXJsRnJvbUZpcnN0TGFzdENoaWxkTm9kZSIsImZyb21GaXJzdExhc3RDaGlsZE5vZGUiLCJmaXJzdExhc3RDaGlsZE5vZGUiLCJzaW1wbGUiLCJpc1NpbXBsZSIsInR5cGUiLCJnZXRUeXBlIiwidHlwZVVSTFRva2VuVHlwZSIsIlVSTF9UT0tFTl9UWVBFIiwiZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlIiwicnVsZU5hbWUiLCJjaGlsZE5vZGVzIiwib3BhY2l0eSIsInByZWNlZGVuY2UiLCJjb250ZW50IiwiZ2V0Q29udGVudCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBTUE7OztlQUFxQkE7OztpRUFKSTs0QkFFTTs7Ozs7O0FBRWhCLE1BQU1BLDhCQUE4QkMsaUJBQVk7SUFDN0RDLDJCQUEyQkMsT0FBTyxFQUFFO1FBQ2xDLE1BQU1DLE1BQU0sSUFBSSxDQUFDQyx1QkFBdUIsQ0FBQyxDQUFDQztZQUN4QyxNQUFNQyxlQUFlRCxxQkFDZkYsTUFBTUksb0JBQW9CRDtZQUVoQyxPQUFPSDtRQUNUO1FBRUEsT0FBT0E7SUFDVDtJQUVBSywwQkFBMEJOLE9BQU8sRUFBRTtRQUNqQyxNQUFNQyxNQUFNLElBQUksQ0FBQ00sc0JBQXNCLENBQUMsQ0FBQ0M7WUFDdkMsTUFBTUosZUFBZUksb0JBQ2ZQLE1BQU1JLG9CQUFvQkQ7WUFFaEMsT0FBT0g7UUFDVDtRQUVBLE9BQU9BO0lBQ1Q7SUFFQUEsSUFBSUQsT0FBTyxFQUFFO1FBQ1gsTUFBTVMsU0FBUyxJQUFJLENBQUNDLFFBQVEsSUFDdEJULE1BQU1RLFNBQ0UsSUFBSSxDQUFDSCx5QkFBeUIsQ0FBQ04sV0FDN0IsSUFBSSxDQUFDRCwwQkFBMEIsQ0FBQ0M7UUFFaEQsT0FBT0M7SUFDVDtJQUVBUyxXQUFXO1FBQ1QsTUFBTUQsU0FBUyxJQUFJLENBQUNGLHNCQUFzQixDQUFDLENBQUNDO1lBQzFDLE1BQU1KLGVBQWVJLG9CQUNmRyxPQUFPUCxhQUFhUSxPQUFPLElBQzNCQyxtQkFBb0JGLFNBQVNHLDBCQUFjLEVBQzNDTCxTQUFTSSxrQkFBa0IsR0FBRztZQUVwQyxPQUFPSjtRQUNUO1FBRUEsT0FBT0E7SUFDVDtJQUVBLE9BQU9NLDJDQUEyQ0MsUUFBUSxFQUFFQyxVQUFVLEVBQUVDLE9BQU8sRUFBRUMsVUFBVSxFQUFFO1FBQUUsT0FBT3JCLGlCQUFZLENBQUNpQiwwQ0FBMEMsQ0FBQ2xCLHVCQUF1Qm1CLFVBQVVDLFlBQVlDLFNBQVNDO0lBQWE7QUFDbk87QUFFQSxTQUFTZCxvQkFBb0JELFlBQVk7SUFDdkMsSUFBSUgsTUFBTTtJQUVWLE1BQU1VLE9BQU9QLGFBQWFRLE9BQU8sSUFDM0JDLG1CQUFvQkYsU0FBU0csMEJBQWM7SUFFakQsSUFBSUQsa0JBQWtCO1FBQ3BCLE1BQU1PLFVBQVVoQixhQUFhaUIsVUFBVTtRQUV2Q3BCLE1BQU1tQixTQUFTLEdBQUc7SUFDcEI7SUFFQSxPQUFPbkI7QUFDVCJ9