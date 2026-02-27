"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return InlineListingMarkdownNode;
    }
});
const _markdown = /*#__PURE__*/ _interop_require_default(require("../../../node/markdown"));
const _string = require("../../../utilities/string");
const _entities = require("../../../utilities/entities");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class InlineListingMarkdownNode extends _markdown.default {
    content(context) {
        const content = this.fromFirstChildNode((firstChildNode)=>{
            let content;
            const backtickedLiteralTerminalNode = firstChildNode; ///
            content = backtickedLiteralTerminalNode.getContent();
            content = (0, _string.removeBackticks)(content); ///
            content = (0, _entities.replaceEntities)(content); ///
            return content;
        });
        return content;
    }
    static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) {
        return _markdown.default.fromRuleNameChildNodesOpacityAndPrecedence(InlineListingMarkdownNode, ruleName, childNodes, opacity, precedence);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2xpc3RuZy9pbmxpbmUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBNYXJrZG93bk5vZGUgZnJvbSBcIi4uLy4uLy4uL25vZGUvbWFya2Rvd25cIjtcblxuaW1wb3J0IHsgcmVtb3ZlQmFja3RpY2tzIH0gZnJvbSBcIi4uLy4uLy4uL3V0aWxpdGllcy9zdHJpbmdcIjtcbmltcG9ydCB7IHJlcGxhY2VFbnRpdGllcyB9IGZyb20gXCIuLi8uLi8uLi91dGlsaXRpZXMvZW50aXRpZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5saW5lTGlzdGluZ01hcmtkb3duTm9kZSBleHRlbmRzIE1hcmtkb3duTm9kZSB7XG4gIGNvbnRlbnQoY29udGV4dCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLmZyb21GaXJzdENoaWxkTm9kZSgoZmlyc3RDaGlsZE5vZGUpID0+IHtcbiAgICAgIGxldCBjb250ZW50O1xuXG4gICAgICBjb25zdCBiYWNrdGlja2VkTGl0ZXJhbFRlcm1pbmFsTm9kZSA9IGZpcnN0Q2hpbGROb2RlOyAvLy9cblxuICAgICAgY29udGVudCA9IGJhY2t0aWNrZWRMaXRlcmFsVGVybWluYWxOb2RlLmdldENvbnRlbnQoKTtcblxuICAgICAgY29udGVudCA9IHJlbW92ZUJhY2t0aWNrcyhjb250ZW50KTsgLy8vXG5cbiAgICAgIGNvbnRlbnQgPSByZXBsYWNlRW50aXRpZXMoY29udGVudCk7IC8vL1xuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KTtcblxuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZShydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSkgeyByZXR1cm4gTWFya2Rvd25Ob2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZShJbmxpbmVMaXN0aW5nTWFya2Rvd25Ob2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSk7IH1cbn1cbiJdLCJuYW1lcyI6WyJJbmxpbmVMaXN0aW5nTWFya2Rvd25Ob2RlIiwiTWFya2Rvd25Ob2RlIiwiY29udGVudCIsImNvbnRleHQiLCJmcm9tRmlyc3RDaGlsZE5vZGUiLCJmaXJzdENoaWxkTm9kZSIsImJhY2t0aWNrZWRMaXRlcmFsVGVybWluYWxOb2RlIiwiZ2V0Q29udGVudCIsInJlbW92ZUJhY2t0aWNrcyIsInJlcGxhY2VFbnRpdGllcyIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZSIsInJ1bGVOYW1lIiwiY2hpbGROb2RlcyIsIm9wYWNpdHkiLCJwcmVjZWRlbmNlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFPQTs7O2VBQXFCQTs7O2lFQUxJO3dCQUVPOzBCQUNBOzs7Ozs7QUFFakIsTUFBTUEsa0NBQWtDQyxpQkFBWTtJQUNqRUMsUUFBUUMsT0FBTyxFQUFFO1FBQ2YsTUFBTUQsVUFBVSxJQUFJLENBQUNFLGtCQUFrQixDQUFDLENBQUNDO1lBQ3ZDLElBQUlIO1lBRUosTUFBTUksZ0NBQWdDRCxnQkFBZ0IsR0FBRztZQUV6REgsVUFBVUksOEJBQThCQyxVQUFVO1lBRWxETCxVQUFVTSxJQUFBQSx1QkFBZSxFQUFDTixVQUFVLEdBQUc7WUFFdkNBLFVBQVVPLElBQUFBLHlCQUFlLEVBQUNQLFVBQVUsR0FBRztZQUV2QyxPQUFPQTtRQUNUO1FBRUEsT0FBT0E7SUFDVDtJQUVBLE9BQU9RLDJDQUEyQ0MsUUFBUSxFQUFFQyxVQUFVLEVBQUVDLE9BQU8sRUFBRUMsVUFBVSxFQUFFO1FBQUUsT0FBT2IsaUJBQVksQ0FBQ1MsMENBQTBDLENBQUNWLDJCQUEyQlcsVUFBVUMsWUFBWUMsU0FBU0M7SUFBYTtBQUN2TyJ9