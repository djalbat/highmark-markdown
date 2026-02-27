"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return EmbedDirectiveMarkdownNode;
    }
});
const _markdown = /*#__PURE__*/ _interop_require_default(require("../../../node/markdown"));
const _path = /*#__PURE__*/ _interop_require_default(require("../../../node/markdown/path"));
const _embed = /*#__PURE__*/ _interop_require_default(require("../../../transform/markdown/directive/embed"));
const _markdown1 = require("../../../utilities/markdown");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class EmbedDirectiveMarkdownNode extends _markdown.default {
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
    resolveEmbedding(context) {
        let embedDirectiveMarkdownTransform = null;
        const filePath = this.filePath(context);
        if (filePath !== null) {
            const { importer } = context;
            importer(filePath, context);
            const { importedNode = null, importedTokens = null } = context;
            if (importedNode !== null) {
                delete context.importedNode;
                delete context.importedTokens;
                const documentMarkdownNode = importedNode, divisionMarkdownNode = documentMarkdownNode.getDivisionMarkdownNode();
                if (divisionMarkdownNode !== null) {
                    const node = divisionMarkdownNode, tokens = importedTokens, subDivisionMarkdownNode = (0, _markdown1.subDivisionMarkdownNodeFromNode)(node);
                    if (subDivisionMarkdownNode !== null) {
                        divisionMarkdownNode.removeSubDivisionMarkdownNode(subDivisionMarkdownNode);
                        embedDirectiveMarkdownTransform = _embed.default.fromSubDivisionMarkdownNodeAndTokens(subDivisionMarkdownNode, tokens);
                    }
                }
            }
        }
        return embedDirectiveMarkdownTransform;
    }
    static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) {
        return _markdown.default.fromRuleNameChildNodesOpacityAndPrecedence(EmbedDirectiveMarkdownNode, ruleName, childNodes, opacity, precedence);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2RpcmVjdGl2ZS9lbWJlZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE1hcmtkb3duTm9kZSBmcm9tIFwiLi4vLi4vLi4vbm9kZS9tYXJrZG93blwiO1xuaW1wb3J0IFBhdGhNYXJrZG93bk5vZGUgZnJvbSBcIi4uLy4uLy4uL25vZGUvbWFya2Rvd24vcGF0aFwiO1xuaW1wb3J0IEVtYmVkRGlyZWN0aXZlTWFya2Rvd25UcmFuc2Zvcm0gZnJvbSBcIi4uLy4uLy4uL3RyYW5zZm9ybS9tYXJrZG93bi9kaXJlY3RpdmUvZW1iZWRcIjtcblxuaW1wb3J0IHsgc3ViRGl2aXNpb25NYXJrZG93bk5vZGVGcm9tTm9kZSB9IGZyb20gXCIuLi8uLi8uLi91dGlsaXRpZXMvbWFya2Rvd25cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW1iZWREaXJlY3RpdmVNYXJrZG93bk5vZGUgZXh0ZW5kcyBNYXJrZG93bk5vZGUge1xuICBmaWxlUGF0aChjb250ZXh0KSB7XG4gICAgY29uc3QgZmlsZVBhdGggPSB0aGlzLmZyb21GaXJzdExhc3RDaGlsZE5vZGUoKGZpcnN0TGFzdENoaWxkTm9kZSkgPT4ge1xuICAgICAgbGV0IGZpbGVQYXRoID0gbnVsbDtcblxuICAgICAgY29uc3QgZmlyc3RMYXN0Q2hpbGROb2RlUGF0aE1hcmtkb3duTm9kZSA9IChmaXJzdExhc3RDaGlsZE5vZGUgaW5zdGFuY2VvZiBQYXRoTWFya2Rvd25Ob2RlKTtcblxuICAgICAgaWYgKGZpcnN0TGFzdENoaWxkTm9kZVBhdGhNYXJrZG93bk5vZGUpIHtcbiAgICAgICAgY29uc3QgcGF0aE1hcmtkb3duTm9kZSA9IGZpcnN0TGFzdENoaWxkTm9kZSwgLy8vXG4gICAgICAgICAgICAgIHBhdGhNYXJrZG93bk5vZGVQYXRoID0gcGF0aE1hcmtkb3duTm9kZS5wYXRoKGNvbnRleHQpO1xuXG4gICAgICAgIGZpbGVQYXRoID0gcGF0aE1hcmtkb3duTm9kZVBhdGg7IC8vL1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZmlsZVBhdGg7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZmlsZVBhdGg7XG4gIH1cblxuICByZXNvbHZlRW1iZWRkaW5nKGNvbnRleHQpIHtcbiAgICBsZXQgZW1iZWREaXJlY3RpdmVNYXJrZG93blRyYW5zZm9ybSA9IG51bGw7XG5cbiAgICBjb25zdCBmaWxlUGF0aCA9IHRoaXMuZmlsZVBhdGgoY29udGV4dCk7XG5cbiAgICBpZiAoZmlsZVBhdGggIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHsgaW1wb3J0ZXIgfSA9IGNvbnRleHQ7XG5cbiAgICAgIGltcG9ydGVyKGZpbGVQYXRoLCBjb250ZXh0KTtcblxuICAgICAgY29uc3QgeyBpbXBvcnRlZE5vZGUgPSBudWxsLFxuICAgICAgICAgICAgICBpbXBvcnRlZFRva2VucyA9IG51bGwgfSA9IGNvbnRleHQ7XG5cbiAgICAgIGlmIChpbXBvcnRlZE5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgZGVsZXRlIGNvbnRleHQuaW1wb3J0ZWROb2RlO1xuICAgICAgICBkZWxldGUgY29udGV4dC5pbXBvcnRlZFRva2VucztcblxuICAgICAgICBjb25zdCBkb2N1bWVudE1hcmtkb3duTm9kZSA9IGltcG9ydGVkTm9kZSwgIC8vL1xuICAgICAgICAgICAgICBkaXZpc2lvbk1hcmtkb3duTm9kZSA9IGRvY3VtZW50TWFya2Rvd25Ob2RlLmdldERpdmlzaW9uTWFya2Rvd25Ob2RlKCk7XG5cbiAgICAgICAgaWYgKGRpdmlzaW9uTWFya2Rvd25Ob2RlICE9PSBudWxsKSB7XG4gICAgICAgICAgY29uc3Qgbm9kZSA9IGRpdmlzaW9uTWFya2Rvd25Ob2RlLCAgLy8vXG4gICAgICAgICAgICAgICAgdG9rZW5zID0gaW1wb3J0ZWRUb2tlbnMsICAvLy9cbiAgICAgICAgICAgICAgICBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZSA9IHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlRnJvbU5vZGUobm9kZSk7XG5cbiAgICAgICAgICBpZiAoc3ViRGl2aXNpb25NYXJrZG93bk5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGRpdmlzaW9uTWFya2Rvd25Ob2RlLnJlbW92ZVN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlKHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlKTtcblxuICAgICAgICAgICAgZW1iZWREaXJlY3RpdmVNYXJrZG93blRyYW5zZm9ybSA9IEVtYmVkRGlyZWN0aXZlTWFya2Rvd25UcmFuc2Zvcm0uZnJvbVN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlQW5kVG9rZW5zKHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlLCB0b2tlbnMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBlbWJlZERpcmVjdGl2ZU1hcmtkb3duVHJhbnNmb3JtO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZShydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSkgeyByZXR1cm4gTWFya2Rvd25Ob2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZShFbWJlZERpcmVjdGl2ZU1hcmtkb3duTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHByZWNlZGVuY2UpOyB9XG59XG4iXSwibmFtZXMiOlsiRW1iZWREaXJlY3RpdmVNYXJrZG93bk5vZGUiLCJNYXJrZG93bk5vZGUiLCJmaWxlUGF0aCIsImNvbnRleHQiLCJmcm9tRmlyc3RMYXN0Q2hpbGROb2RlIiwiZmlyc3RMYXN0Q2hpbGROb2RlIiwiZmlyc3RMYXN0Q2hpbGROb2RlUGF0aE1hcmtkb3duTm9kZSIsIlBhdGhNYXJrZG93bk5vZGUiLCJwYXRoTWFya2Rvd25Ob2RlIiwicGF0aE1hcmtkb3duTm9kZVBhdGgiLCJwYXRoIiwicmVzb2x2ZUVtYmVkZGluZyIsImVtYmVkRGlyZWN0aXZlTWFya2Rvd25UcmFuc2Zvcm0iLCJpbXBvcnRlciIsImltcG9ydGVkTm9kZSIsImltcG9ydGVkVG9rZW5zIiwiZG9jdW1lbnRNYXJrZG93bk5vZGUiLCJkaXZpc2lvbk1hcmtkb3duTm9kZSIsImdldERpdmlzaW9uTWFya2Rvd25Ob2RlIiwibm9kZSIsInRva2VucyIsInN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlIiwic3ViRGl2aXNpb25NYXJrZG93bk5vZGVGcm9tTm9kZSIsInJlbW92ZVN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlIiwiRW1iZWREaXJlY3RpdmVNYXJrZG93blRyYW5zZm9ybSIsImZyb21TdWJEaXZpc2lvbk1hcmtkb3duTm9kZUFuZFRva2VucyIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZSIsInJ1bGVOYW1lIiwiY2hpbGROb2RlcyIsIm9wYWNpdHkiLCJwcmVjZWRlbmNlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFRQTs7O2VBQXFCQTs7O2lFQU5JOzZEQUNJOzhEQUNlOzJCQUVJOzs7Ozs7QUFFakMsTUFBTUEsbUNBQW1DQyxpQkFBWTtJQUNsRUMsU0FBU0MsT0FBTyxFQUFFO1FBQ2hCLE1BQU1ELFdBQVcsSUFBSSxDQUFDRSxzQkFBc0IsQ0FBQyxDQUFDQztZQUM1QyxJQUFJSCxXQUFXO1lBRWYsTUFBTUkscUNBQXNDRCw4QkFBOEJFLGFBQWdCO1lBRTFGLElBQUlELG9DQUFvQztnQkFDdEMsTUFBTUUsbUJBQW1CSCxvQkFDbkJJLHVCQUF1QkQsaUJBQWlCRSxJQUFJLENBQUNQO2dCQUVuREQsV0FBV08sc0JBQXNCLEdBQUc7WUFDdEM7WUFFQSxPQUFPUDtRQUNUO1FBRUEsT0FBT0E7SUFDVDtJQUVBUyxpQkFBaUJSLE9BQU8sRUFBRTtRQUN4QixJQUFJUyxrQ0FBa0M7UUFFdEMsTUFBTVYsV0FBVyxJQUFJLENBQUNBLFFBQVEsQ0FBQ0M7UUFFL0IsSUFBSUQsYUFBYSxNQUFNO1lBQ3JCLE1BQU0sRUFBRVcsUUFBUSxFQUFFLEdBQUdWO1lBRXJCVSxTQUFTWCxVQUFVQztZQUVuQixNQUFNLEVBQUVXLGVBQWUsSUFBSSxFQUNuQkMsaUJBQWlCLElBQUksRUFBRSxHQUFHWjtZQUVsQyxJQUFJVyxpQkFBaUIsTUFBTTtnQkFDekIsT0FBT1gsUUFBUVcsWUFBWTtnQkFDM0IsT0FBT1gsUUFBUVksY0FBYztnQkFFN0IsTUFBTUMsdUJBQXVCRixjQUN2QkcsdUJBQXVCRCxxQkFBcUJFLHVCQUF1QjtnQkFFekUsSUFBSUQseUJBQXlCLE1BQU07b0JBQ2pDLE1BQU1FLE9BQU9GLHNCQUNQRyxTQUFTTCxnQkFDVE0sMEJBQTBCQyxJQUFBQSwwQ0FBK0IsRUFBQ0g7b0JBRWhFLElBQUlFLDRCQUE0QixNQUFNO3dCQUNwQ0oscUJBQXFCTSw2QkFBNkIsQ0FBQ0Y7d0JBRW5EVCxrQ0FBa0NZLGNBQStCLENBQUNDLG9DQUFvQyxDQUFDSix5QkFBeUJEO29CQUNsSTtnQkFDRjtZQUNGO1FBQ0Y7UUFFQSxPQUFPUjtJQUNUO0lBRUEsT0FBT2MsMkNBQTJDQyxRQUFRLEVBQUVDLFVBQVUsRUFBRUMsT0FBTyxFQUFFQyxVQUFVLEVBQUU7UUFBRSxPQUFPN0IsaUJBQVksQ0FBQ3lCLDBDQUEwQyxDQUFDMUIsNEJBQTRCMkIsVUFBVUMsWUFBWUMsU0FBU0M7SUFBYTtBQUN4TyJ9