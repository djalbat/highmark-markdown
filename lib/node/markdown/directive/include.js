"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return IncludeDirectiveMarkdownNode;
    }
});
const _markdown = /*#__PURE__*/ _interop_require_default(require("../../../node/markdown"));
const _path = /*#__PURE__*/ _interop_require_default(require("../../../node/markdown/path"));
const _include = /*#__PURE__*/ _interop_require_default(require("../../../transform/markdown/directive/include"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class IncludeDirectiveMarkdownNode extends _markdown.default {
    filePath(context) {
        const filePath = this.fromFirstLastChildNode((firstLastChildNode)=>{
            let filePath = null;
            const firstLastChildNodePathMarkdownNode = firstLastChildNode instanceof _path.default;
            if (firstLastChildNodePathMarkdownNode) {
                const pathMarkdownNode = firstLastChildNode, pathMarkdownNodePath = pathMarkdownNode.path(context);
                filePath = pathMarkdownNodePath; ///
            }
            return filePath;
        });
        return filePath;
    }
    resolveInclude(context) {
        let includeDirectiveMarkdownTransform = null;
        const filePath = this.filePath(context);
        if (filePath !== null) {
            const { importer } = context;
            importer(filePath, context);
            const { importedNode = null, importedTokens = null, importedClassName = null } = context;
            if (importedNode !== null) {
                delete context.importedNode;
                delete context.importedTokens;
                delete context.importedClassName;
                const documentMarkdownNode = importedNode, divisionMarkdownNode = documentMarkdownNode.getDivisionMarkdownNode();
                if (divisionMarkdownNode !== null) {
                    const tokens = importedTokens, divisionClassName = importedClassName; ///
                    divisionMarkdownNode.setDivisionClassName(divisionClassName);
                    documentMarkdownNode.removeDivisionMarkdownNode(divisionMarkdownNode);
                    includeDirectiveMarkdownTransform = _include.default.fromDivisionMarkdownNodeAndTokens(divisionMarkdownNode, tokens);
                }
            }
        }
        return includeDirectiveMarkdownTransform;
    }
    static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) {
        return _markdown.default.fromRuleNameChildNodesOpacityAndPrecedence(IncludeDirectiveMarkdownNode, ruleName, childNodes, opacity, precedence);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2RpcmVjdGl2ZS9pbmNsdWRlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTWFya2Rvd25Ob2RlIGZyb20gXCIuLi8uLi8uLi9ub2RlL21hcmtkb3duXCI7XG5pbXBvcnQgUGF0aE1hcmtkb3duTm9kZSBmcm9tIFwiLi4vLi4vLi4vbm9kZS9tYXJrZG93bi9wYXRoXCI7XG5pbXBvcnQgSW5jbHVkZURpcmVjdGl2ZU1hcmtkb3duVHJhbnNmb3JtIGZyb20gXCIuLi8uLi8uLi90cmFuc2Zvcm0vbWFya2Rvd24vZGlyZWN0aXZlL2luY2x1ZGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5jbHVkZURpcmVjdGl2ZU1hcmtkb3duTm9kZSBleHRlbmRzIE1hcmtkb3duTm9kZSB7XG4gIGZpbGVQYXRoKGNvbnRleHQpIHtcbiAgICBjb25zdCBmaWxlUGF0aCA9IHRoaXMuZnJvbUZpcnN0TGFzdENoaWxkTm9kZSgoZmlyc3RMYXN0Q2hpbGROb2RlKSA9PiB7XG4gICAgICBsZXQgZmlsZVBhdGggPSBudWxsO1xuXG4gICAgICBjb25zdCBmaXJzdExhc3RDaGlsZE5vZGVQYXRoTWFya2Rvd25Ob2RlID0gKGZpcnN0TGFzdENoaWxkTm9kZSBpbnN0YW5jZW9mIFBhdGhNYXJrZG93bk5vZGUpO1xuXG4gICAgICBpZiAoZmlyc3RMYXN0Q2hpbGROb2RlUGF0aE1hcmtkb3duTm9kZSkge1xuICAgICAgICBjb25zdCBwYXRoTWFya2Rvd25Ob2RlID0gZmlyc3RMYXN0Q2hpbGROb2RlLCAvLy9cbiAgICAgICAgICAgICAgcGF0aE1hcmtkb3duTm9kZVBhdGggPSBwYXRoTWFya2Rvd25Ob2RlLnBhdGgoY29udGV4dCk7XG5cbiAgICAgICAgZmlsZVBhdGggPSBwYXRoTWFya2Rvd25Ob2RlUGF0aDsgLy8vXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmaWxlUGF0aDtcbiAgICB9KTtcblxuICAgIHJldHVybiBmaWxlUGF0aDtcbiAgfVxuXG4gIHJlc29sdmVJbmNsdWRlKGNvbnRleHQpIHtcbiAgICBsZXQgaW5jbHVkZURpcmVjdGl2ZU1hcmtkb3duVHJhbnNmb3JtID0gbnVsbDtcblxuICAgIGNvbnN0IGZpbGVQYXRoID0gdGhpcy5maWxlUGF0aChjb250ZXh0KTtcblxuICAgIGlmIChmaWxlUGF0aCAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgeyBpbXBvcnRlciB9ID0gY29udGV4dDtcblxuICAgICAgaW1wb3J0ZXIoZmlsZVBhdGgsIGNvbnRleHQpO1xuXG4gICAgICBjb25zdCB7IGltcG9ydGVkTm9kZSA9IG51bGwsXG4gICAgICAgICAgICAgIGltcG9ydGVkVG9rZW5zID0gbnVsbCxcbiAgICAgICAgICAgICAgaW1wb3J0ZWRDbGFzc05hbWUgPSBudWxsIH0gPSBjb250ZXh0O1xuXG4gICAgICBpZiAoaW1wb3J0ZWROb2RlICE9PSBudWxsKSB7XG4gICAgICAgIGRlbGV0ZSBjb250ZXh0LmltcG9ydGVkTm9kZTtcbiAgICAgICAgZGVsZXRlIGNvbnRleHQuaW1wb3J0ZWRUb2tlbnM7XG4gICAgICAgIGRlbGV0ZSBjb250ZXh0LmltcG9ydGVkQ2xhc3NOYW1lO1xuXG4gICAgICAgIGNvbnN0IGRvY3VtZW50TWFya2Rvd25Ob2RlID0gaW1wb3J0ZWROb2RlLCAgLy8vXG4gICAgICAgICAgICAgIGRpdmlzaW9uTWFya2Rvd25Ob2RlID0gZG9jdW1lbnRNYXJrZG93bk5vZGUuZ2V0RGl2aXNpb25NYXJrZG93bk5vZGUoKTtcblxuICAgICAgICBpZiAoZGl2aXNpb25NYXJrZG93bk5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgICBjb25zdCB0b2tlbnMgPSBpbXBvcnRlZFRva2VucywgIC8vL1xuICAgICAgICAgICAgICAgIGRpdmlzaW9uQ2xhc3NOYW1lID0gaW1wb3J0ZWRDbGFzc05hbWU7ICAvLy9cblxuICAgICAgICAgIGRpdmlzaW9uTWFya2Rvd25Ob2RlLnNldERpdmlzaW9uQ2xhc3NOYW1lKGRpdmlzaW9uQ2xhc3NOYW1lKTtcblxuICAgICAgICAgIGRvY3VtZW50TWFya2Rvd25Ob2RlLnJlbW92ZURpdmlzaW9uTWFya2Rvd25Ob2RlKGRpdmlzaW9uTWFya2Rvd25Ob2RlKTtcblxuICAgICAgICAgIGluY2x1ZGVEaXJlY3RpdmVNYXJrZG93blRyYW5zZm9ybSA9IEluY2x1ZGVEaXJlY3RpdmVNYXJrZG93blRyYW5zZm9ybS5mcm9tRGl2aXNpb25NYXJrZG93bk5vZGVBbmRUb2tlbnMoZGl2aXNpb25NYXJrZG93bk5vZGUsIHRva2Vucyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gaW5jbHVkZURpcmVjdGl2ZU1hcmtkb3duVHJhbnNmb3JtO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZShydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSkgeyByZXR1cm4gTWFya2Rvd25Ob2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZShJbmNsdWRlRGlyZWN0aXZlTWFya2Rvd25Ob2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSk7IH1cbn1cbiJdLCJuYW1lcyI6WyJJbmNsdWRlRGlyZWN0aXZlTWFya2Rvd25Ob2RlIiwiTWFya2Rvd25Ob2RlIiwiZmlsZVBhdGgiLCJjb250ZXh0IiwiZnJvbUZpcnN0TGFzdENoaWxkTm9kZSIsImZpcnN0TGFzdENoaWxkTm9kZSIsImZpcnN0TGFzdENoaWxkTm9kZVBhdGhNYXJrZG93bk5vZGUiLCJQYXRoTWFya2Rvd25Ob2RlIiwicGF0aE1hcmtkb3duTm9kZSIsInBhdGhNYXJrZG93bk5vZGVQYXRoIiwicGF0aCIsInJlc29sdmVJbmNsdWRlIiwiaW5jbHVkZURpcmVjdGl2ZU1hcmtkb3duVHJhbnNmb3JtIiwiaW1wb3J0ZXIiLCJpbXBvcnRlZE5vZGUiLCJpbXBvcnRlZFRva2VucyIsImltcG9ydGVkQ2xhc3NOYW1lIiwiZG9jdW1lbnRNYXJrZG93bk5vZGUiLCJkaXZpc2lvbk1hcmtkb3duTm9kZSIsImdldERpdmlzaW9uTWFya2Rvd25Ob2RlIiwidG9rZW5zIiwiZGl2aXNpb25DbGFzc05hbWUiLCJzZXREaXZpc2lvbkNsYXNzTmFtZSIsInJlbW92ZURpdmlzaW9uTWFya2Rvd25Ob2RlIiwiSW5jbHVkZURpcmVjdGl2ZU1hcmtkb3duVHJhbnNmb3JtIiwiZnJvbURpdmlzaW9uTWFya2Rvd25Ob2RlQW5kVG9rZW5zIiwiZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlIiwicnVsZU5hbWUiLCJjaGlsZE5vZGVzIiwib3BhY2l0eSIsInByZWNlZGVuY2UiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU1BOzs7ZUFBcUJBOzs7aUVBSkk7NkRBQ0k7Z0VBQ2lCOzs7Ozs7QUFFL0IsTUFBTUEscUNBQXFDQyxpQkFBWTtJQUNwRUMsU0FBU0MsT0FBTyxFQUFFO1FBQ2hCLE1BQU1ELFdBQVcsSUFBSSxDQUFDRSxzQkFBc0IsQ0FBQyxDQUFDQztZQUM1QyxJQUFJSCxXQUFXO1lBRWYsTUFBTUkscUNBQXNDRCw4QkFBOEJFLGFBQWdCO1lBRTFGLElBQUlELG9DQUFvQztnQkFDdEMsTUFBTUUsbUJBQW1CSCxvQkFDbkJJLHVCQUF1QkQsaUJBQWlCRSxJQUFJLENBQUNQO2dCQUVuREQsV0FBV08sc0JBQXNCLEdBQUc7WUFDdEM7WUFFQSxPQUFPUDtRQUNUO1FBRUEsT0FBT0E7SUFDVDtJQUVBUyxlQUFlUixPQUFPLEVBQUU7UUFDdEIsSUFBSVMsb0NBQW9DO1FBRXhDLE1BQU1WLFdBQVcsSUFBSSxDQUFDQSxRQUFRLENBQUNDO1FBRS9CLElBQUlELGFBQWEsTUFBTTtZQUNyQixNQUFNLEVBQUVXLFFBQVEsRUFBRSxHQUFHVjtZQUVyQlUsU0FBU1gsVUFBVUM7WUFFbkIsTUFBTSxFQUFFVyxlQUFlLElBQUksRUFDbkJDLGlCQUFpQixJQUFJLEVBQ3JCQyxvQkFBb0IsSUFBSSxFQUFFLEdBQUdiO1lBRXJDLElBQUlXLGlCQUFpQixNQUFNO2dCQUN6QixPQUFPWCxRQUFRVyxZQUFZO2dCQUMzQixPQUFPWCxRQUFRWSxjQUFjO2dCQUM3QixPQUFPWixRQUFRYSxpQkFBaUI7Z0JBRWhDLE1BQU1DLHVCQUF1QkgsY0FDdkJJLHVCQUF1QkQscUJBQXFCRSx1QkFBdUI7Z0JBRXpFLElBQUlELHlCQUF5QixNQUFNO29CQUNqQyxNQUFNRSxTQUFTTCxnQkFDVE0sb0JBQW9CTCxtQkFBb0IsR0FBRztvQkFFakRFLHFCQUFxQkksb0JBQW9CLENBQUNEO29CQUUxQ0oscUJBQXFCTSwwQkFBMEIsQ0FBQ0w7b0JBRWhETixvQ0FBb0NZLGdCQUFpQyxDQUFDQyxpQ0FBaUMsQ0FBQ1Asc0JBQXNCRTtnQkFDaEk7WUFDRjtRQUNGO1FBRUEsT0FBT1I7SUFDVDtJQUVBLE9BQU9jLDJDQUEyQ0MsUUFBUSxFQUFFQyxVQUFVLEVBQUVDLE9BQU8sRUFBRUMsVUFBVSxFQUFFO1FBQUUsT0FBTzdCLGlCQUFZLENBQUN5QiwwQ0FBMEMsQ0FBQzFCLDhCQUE4QjJCLFVBQVVDLFlBQVlDLFNBQVNDO0lBQWE7QUFDMU8ifQ==