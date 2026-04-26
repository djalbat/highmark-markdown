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
const _releaseName = /*#__PURE__*/ _interop_require_default(require("./releaseName"));
const _languageName = /*#__PURE__*/ _interop_require_default(require("./languageName"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class BlockStartMarkdownNode extends _markdown.default {
    releaseName(context) {
        const releaseName = this.fromThirdChildNode((thirdChildNode)=>{
            let releaseName = null;
            const thirdChildNodeClassNameMarkdownNode = thirdChildNode instanceof _releaseName.default;
            if (thirdChildNodeClassNameMarkdownNode) {
                const releaseNameMarkdownNode = thirdChildNode; ///
                releaseName = releaseNameMarkdownNode.releaseName(context);
            }
            return releaseName;
        });
        return releaseName;
    }
    languageName(context) {
        const languageName = this.fromSecondChildNode((secondChildNode)=>{
            let languageName = null;
            const secondChildNodeClassNameMarkdownNode = secondChildNode instanceof _languageName.default;
            if (secondChildNodeClassNameMarkdownNode) {
                const languageNameMarkdownNode = secondChildNode; ///
                languageName = languageNameMarkdownNode.languageName(context);
            }
            return languageName;
        });
        return languageName;
    }
    static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) {
        return _markdown.default.fromRuleNameChildNodesOpacityAndPrecedence(BlockStartMarkdownNode, ruleName, childNodes, opacity, precedence);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2Jsb2NrU3RhcnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBNYXJrZG93bk5vZGUgZnJvbSBcIi4uLy4uL25vZGUvbWFya2Rvd25cIjtcbmltcG9ydCBSZWxlYXNlTmFtZU1hcmtkb3duTm9kZSBmcm9tIFwiLi9yZWxlYXNlTmFtZVwiO1xuaW1wb3J0IExhbmd1YWdlTmFtZU1hcmtkb3duTm9kZSBmcm9tIFwiLi9sYW5ndWFnZU5hbWVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmxvY2tTdGFydE1hcmtkb3duTm9kZSBleHRlbmRzIE1hcmtkb3duTm9kZSB7XG4gIHJlbGVhc2VOYW1lKGNvbnRleHQpIHtcbiAgICBjb25zdCByZWxlYXNlTmFtZSA9IHRoaXMuZnJvbVRoaXJkQ2hpbGROb2RlKCh0aGlyZENoaWxkTm9kZSkgPT4ge1xuICAgICAgbGV0IHJlbGVhc2VOYW1lID0gbnVsbDtcblxuICAgICAgY29uc3QgdGhpcmRDaGlsZE5vZGVDbGFzc05hbWVNYXJrZG93bk5vZGUgPSAodGhpcmRDaGlsZE5vZGUgaW5zdGFuY2VvZiBSZWxlYXNlTmFtZU1hcmtkb3duTm9kZSk7XG5cbiAgICAgIGlmICh0aGlyZENoaWxkTm9kZUNsYXNzTmFtZU1hcmtkb3duTm9kZSkge1xuICAgICAgICBjb25zdCByZWxlYXNlTmFtZU1hcmtkb3duTm9kZSA9IHRoaXJkQ2hpbGROb2RlOyAgLy8vXG5cbiAgICAgICAgcmVsZWFzZU5hbWUgPSByZWxlYXNlTmFtZU1hcmtkb3duTm9kZS5yZWxlYXNlTmFtZShjb250ZXh0KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJlbGVhc2VOYW1lO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlbGVhc2VOYW1lO1xuICB9XG5cbiAgbGFuZ3VhZ2VOYW1lKGNvbnRleHQpIHtcbiAgICBjb25zdCBsYW5ndWFnZU5hbWUgPSB0aGlzLmZyb21TZWNvbmRDaGlsZE5vZGUoKHNlY29uZENoaWxkTm9kZSkgPT4ge1xuICAgICAgbGV0IGxhbmd1YWdlTmFtZSA9IG51bGw7XG5cbiAgICAgIGNvbnN0IHNlY29uZENoaWxkTm9kZUNsYXNzTmFtZU1hcmtkb3duTm9kZSA9IChzZWNvbmRDaGlsZE5vZGUgaW5zdGFuY2VvZiBMYW5ndWFnZU5hbWVNYXJrZG93bk5vZGUpO1xuXG4gICAgICBpZiAoc2Vjb25kQ2hpbGROb2RlQ2xhc3NOYW1lTWFya2Rvd25Ob2RlKSB7XG4gICAgICAgIGNvbnN0IGxhbmd1YWdlTmFtZU1hcmtkb3duTm9kZSA9IHNlY29uZENoaWxkTm9kZTsgIC8vL1xuXG4gICAgICAgIGxhbmd1YWdlTmFtZSA9IGxhbmd1YWdlTmFtZU1hcmtkb3duTm9kZS5sYW5ndWFnZU5hbWUoY29udGV4dCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBsYW5ndWFnZU5hbWU7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbGFuZ3VhZ2VOYW1lO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZShydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSkgeyByZXR1cm4gTWFya2Rvd25Ob2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZShCbG9ja1N0YXJ0TWFya2Rvd25Ob2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSk7IH1cbn1cbiJdLCJuYW1lcyI6WyJCbG9ja1N0YXJ0TWFya2Rvd25Ob2RlIiwiTWFya2Rvd25Ob2RlIiwicmVsZWFzZU5hbWUiLCJjb250ZXh0IiwiZnJvbVRoaXJkQ2hpbGROb2RlIiwidGhpcmRDaGlsZE5vZGUiLCJ0aGlyZENoaWxkTm9kZUNsYXNzTmFtZU1hcmtkb3duTm9kZSIsIlJlbGVhc2VOYW1lTWFya2Rvd25Ob2RlIiwicmVsZWFzZU5hbWVNYXJrZG93bk5vZGUiLCJsYW5ndWFnZU5hbWUiLCJmcm9tU2Vjb25kQ2hpbGROb2RlIiwic2Vjb25kQ2hpbGROb2RlIiwic2Vjb25kQ2hpbGROb2RlQ2xhc3NOYW1lTWFya2Rvd25Ob2RlIiwiTGFuZ3VhZ2VOYW1lTWFya2Rvd25Ob2RlIiwibGFuZ3VhZ2VOYW1lTWFya2Rvd25Ob2RlIiwiZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlIiwicnVsZU5hbWUiLCJjaGlsZE5vZGVzIiwib3BhY2l0eSIsInByZWNlZGVuY2UiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU1BOzs7ZUFBcUJBOzs7aUVBSkk7b0VBQ1c7cUVBQ0M7Ozs7OztBQUV0QixNQUFNQSwrQkFBK0JDLGlCQUFZO0lBQzlEQyxZQUFZQyxPQUFPLEVBQUU7UUFDbkIsTUFBTUQsY0FBYyxJQUFJLENBQUNFLGtCQUFrQixDQUFDLENBQUNDO1lBQzNDLElBQUlILGNBQWM7WUFFbEIsTUFBTUksc0NBQXVDRCwwQkFBMEJFLG9CQUF1QjtZQUU5RixJQUFJRCxxQ0FBcUM7Z0JBQ3ZDLE1BQU1FLDBCQUEwQkgsZ0JBQWlCLEdBQUc7Z0JBRXBESCxjQUFjTSx3QkFBd0JOLFdBQVcsQ0FBQ0M7WUFDcEQ7WUFFQSxPQUFPRDtRQUNUO1FBRUEsT0FBT0E7SUFDVDtJQUVBTyxhQUFhTixPQUFPLEVBQUU7UUFDcEIsTUFBTU0sZUFBZSxJQUFJLENBQUNDLG1CQUFtQixDQUFDLENBQUNDO1lBQzdDLElBQUlGLGVBQWU7WUFFbkIsTUFBTUcsdUNBQXdDRCwyQkFBMkJFLHFCQUF3QjtZQUVqRyxJQUFJRCxzQ0FBc0M7Z0JBQ3hDLE1BQU1FLDJCQUEyQkgsaUJBQWtCLEdBQUc7Z0JBRXRERixlQUFlSyx5QkFBeUJMLFlBQVksQ0FBQ047WUFDdkQ7WUFFQSxPQUFPTTtRQUNUO1FBRUEsT0FBT0E7SUFDVDtJQUVBLE9BQU9NLDJDQUEyQ0MsUUFBUSxFQUFFQyxVQUFVLEVBQUVDLE9BQU8sRUFBRUMsVUFBVSxFQUFFO1FBQUUsT0FBT2xCLGlCQUFZLENBQUNjLDBDQUEwQyxDQUFDZix3QkFBd0JnQixVQUFVQyxZQUFZQyxTQUFTQztJQUFhO0FBQ3BPIn0=