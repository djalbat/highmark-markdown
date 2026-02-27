"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return PathMarkdownNode;
    }
});
const _markdown = /*#__PURE__*/ _interop_require_default(require("../../node/markdown"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class PathMarkdownNode extends _markdown.default {
    path(context) {
        const path = this.fromFirstChildNode((firstChildNode)=>{
            const pathTerminalNode = firstChildNode, pathTerminalNodeContent = pathTerminalNode.getContent(), path = pathTerminalNodeContent; ///
            return path;
        });
        return path;
    }
    static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) {
        return _markdown.default.fromRuleNameChildNodesOpacityAndPrecedence(PathMarkdownNode, ruleName, childNodes, opacity, precedence);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL3BhdGguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBNYXJrZG93bk5vZGUgZnJvbSBcIi4uLy4uL25vZGUvbWFya2Rvd25cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGF0aE1hcmtkb3duTm9kZSBleHRlbmRzIE1hcmtkb3duTm9kZSB7XG4gIHBhdGgoY29udGV4dCkge1xuICAgIGNvbnN0IHBhdGggPSB0aGlzLmZyb21GaXJzdENoaWxkTm9kZSgoZmlyc3RDaGlsZE5vZGUpID0+IHtcbiAgICAgIGNvbnN0IHBhdGhUZXJtaW5hbE5vZGUgPSBmaXJzdENoaWxkTm9kZSwgIC8vL1xuICAgICAgICAgICAgcGF0aFRlcm1pbmFsTm9kZUNvbnRlbnQgPSBwYXRoVGVybWluYWxOb2RlLmdldENvbnRlbnQoKSxcbiAgICAgICAgICAgIHBhdGggPSBwYXRoVGVybWluYWxOb2RlQ29udGVudDsgIC8vL1xuXG4gICAgICByZXR1cm4gcGF0aDtcbiAgICB9KTtcblxuICAgIHJldHVybiBwYXRoO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZShydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSkgeyByZXR1cm4gTWFya2Rvd25Ob2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZShQYXRoTWFya2Rvd25Ob2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSk7IH1cbn1cbiJdLCJuYW1lcyI6WyJQYXRoTWFya2Rvd25Ob2RlIiwiTWFya2Rvd25Ob2RlIiwicGF0aCIsImNvbnRleHQiLCJmcm9tRmlyc3RDaGlsZE5vZGUiLCJmaXJzdENoaWxkTm9kZSIsInBhdGhUZXJtaW5hbE5vZGUiLCJwYXRoVGVybWluYWxOb2RlQ29udGVudCIsImdldENvbnRlbnQiLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UiLCJydWxlTmFtZSIsImNoaWxkTm9kZXMiLCJvcGFjaXR5IiwicHJlY2VkZW5jZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBSUE7OztlQUFxQkE7OztpRUFGSTs7Ozs7O0FBRVYsTUFBTUEseUJBQXlCQyxpQkFBWTtJQUN4REMsS0FBS0MsT0FBTyxFQUFFO1FBQ1osTUFBTUQsT0FBTyxJQUFJLENBQUNFLGtCQUFrQixDQUFDLENBQUNDO1lBQ3BDLE1BQU1DLG1CQUFtQkQsZ0JBQ25CRSwwQkFBMEJELGlCQUFpQkUsVUFBVSxJQUNyRE4sT0FBT0sseUJBQTBCLEdBQUc7WUFFMUMsT0FBT0w7UUFDVDtRQUVBLE9BQU9BO0lBQ1Q7SUFFQSxPQUFPTywyQ0FBMkNDLFFBQVEsRUFBRUMsVUFBVSxFQUFFQyxPQUFPLEVBQUVDLFVBQVUsRUFBRTtRQUFFLE9BQU9aLGlCQUFZLENBQUNRLDBDQUEwQyxDQUFDVCxrQkFBa0JVLFVBQVVDLFlBQVlDLFNBQVNDO0lBQWE7QUFDOU4ifQ==