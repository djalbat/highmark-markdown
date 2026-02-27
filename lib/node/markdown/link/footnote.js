"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return FootnoteLinkMarkdownNode;
    }
});
const _necessary = require("necessary");
const _markdown = /*#__PURE__*/ _interop_require_default(require("../../../node/markdown"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const { second } = _necessary.arrayUtilities;
class FootnoteLinkMarkdownNode extends _markdown.default {
    identifier(context) {
        const identifier = this.fromFirstChildNode((firstChildNode)=>{
            const linkTerminalNode = firstChildNode, content = linkTerminalNode.getContent(), matches = content.match(/\[\^([^\]]+)]/), secondMatch = second(matches), identifier = secondMatch; ///
            return identifier;
        });
        return identifier;
    }
    static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) {
        return _markdown.default.fromRuleNameChildNodesOpacityAndPrecedence(FootnoteLinkMarkdownNode, ruleName, childNodes, opacity, precedence);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2xpbmsvZm9vdG5vdGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgTWFya2Rvd25Ob2RlIGZyb20gXCIuLi8uLi8uLi9ub2RlL21hcmtkb3duXCI7XG5cbmNvbnN0IHsgc2Vjb25kIH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9vdG5vdGVMaW5rTWFya2Rvd25Ob2RlIGV4dGVuZHMgTWFya2Rvd25Ob2RlIHtcbiAgaWRlbnRpZmllcihjb250ZXh0KSB7XG4gICAgY29uc3QgaWRlbnRpZmllciA9IHRoaXMuZnJvbUZpcnN0Q2hpbGROb2RlKChmaXJzdENoaWxkTm9kZSkgPT4ge1xuICAgICAgY29uc3QgbGlua1Rlcm1pbmFsTm9kZSA9IGZpcnN0Q2hpbGROb2RlLCAvLy9cbiAgICAgICAgICAgIGNvbnRlbnQgPSBsaW5rVGVybWluYWxOb2RlLmdldENvbnRlbnQoKSxcbiAgICAgICAgICAgIG1hdGNoZXMgPSBjb250ZW50Lm1hdGNoKC9cXFtcXF4oW15cXF1dKyldLyksXG4gICAgICAgICAgICBzZWNvbmRNYXRjaCA9IHNlY29uZChtYXRjaGVzKSxcbiAgICAgICAgICAgIGlkZW50aWZpZXIgPSBzZWNvbmRNYXRjaDsgLy8vXG5cbiAgICAgIHJldHVybiBpZGVudGlmaWVyO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGlkZW50aWZpZXI7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlKHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlKSB7IHJldHVybiBNYXJrZG93bk5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlKEZvb3Rub3RlTGlua01hcmtkb3duTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHByZWNlZGVuY2UpOyB9XG59XG4iXSwibmFtZXMiOlsiRm9vdG5vdGVMaW5rTWFya2Rvd25Ob2RlIiwic2Vjb25kIiwiYXJyYXlVdGlsaXRpZXMiLCJNYXJrZG93bk5vZGUiLCJpZGVudGlmaWVyIiwiY29udGV4dCIsImZyb21GaXJzdENoaWxkTm9kZSIsImZpcnN0Q2hpbGROb2RlIiwibGlua1Rlcm1pbmFsTm9kZSIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwibWF0Y2hlcyIsIm1hdGNoIiwic2Vjb25kTWF0Y2giLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UiLCJydWxlTmFtZSIsImNoaWxkTm9kZXMiLCJvcGFjaXR5IiwicHJlY2VkZW5jZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBUUE7OztlQUFxQkE7OzsyQkFOVTtpRUFFTjs7Ozs7O0FBRXpCLE1BQU0sRUFBRUMsTUFBTSxFQUFFLEdBQUdDLHlCQUFjO0FBRWxCLE1BQU1GLGlDQUFpQ0csaUJBQVk7SUFDaEVDLFdBQVdDLE9BQU8sRUFBRTtRQUNsQixNQUFNRCxhQUFhLElBQUksQ0FBQ0Usa0JBQWtCLENBQUMsQ0FBQ0M7WUFDMUMsTUFBTUMsbUJBQW1CRCxnQkFDbkJFLFVBQVVELGlCQUFpQkUsVUFBVSxJQUNyQ0MsVUFBVUYsUUFBUUcsS0FBSyxDQUFDLGtCQUN4QkMsY0FBY1osT0FBT1UsVUFDckJQLGFBQWFTLGFBQWEsR0FBRztZQUVuQyxPQUFPVDtRQUNUO1FBRUEsT0FBT0E7SUFDVDtJQUVBLE9BQU9VLDJDQUEyQ0MsUUFBUSxFQUFFQyxVQUFVLEVBQUVDLE9BQU8sRUFBRUMsVUFBVSxFQUFFO1FBQUUsT0FBT2YsaUJBQVksQ0FBQ1csMENBQTBDLENBQUNkLDBCQUEwQmUsVUFBVUMsWUFBWUMsU0FBU0M7SUFBYTtBQUN0TyJ9