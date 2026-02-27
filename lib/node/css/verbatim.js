"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return VerbatimCSSNode;
    }
});
const _css = /*#__PURE__*/ _interop_require_default(require("../../node/css"));
const _targets = require("../../targets");
const _constants = require("../../constants");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class VerbatimCSSNode extends _css.default {
    target(content) {
        const target = this.fromFirstChildNode((firstChildNode)=>{
            const targetCSSNode = firstChildNode, target = targetCSSNode.target(content);
            return target;
        });
        return target;
    }
    content(context) {
        const content = this.fromSecondChildNode((secondChildNode)=>{
            const contentCSSNode = secondChildNode, content = contentCSSNode.content(context);
            return content;
        });
        return content;
    }
    asCSS(context) {
        let css = _constants.EMPTY_STRING;
        let target;
        ({ target } = context);
        if (target === _targets.WEB_TARGET) {
            target = this.target(context);
            if (target === _targets.WEB_TARGET) {
                const content = this.content(context);
                css = content; ///
            }
        }
        return css;
    }
    static fromNothing() {
        return _css.default.fromNothing(VerbatimCSSNode);
    }
    static fromOuterNode(outerNode) {
        return _css.default.fromOuterNode(VerbatimCSSNode, outerNode);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2Nzcy92ZXJiYXRpbS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IENTU05vZGUgZnJvbSBcIi4uLy4uL25vZGUvY3NzXCI7XG5cbmltcG9ydCB7IFdFQl9UQVJHRVQgfSBmcm9tIFwiLi4vLi4vdGFyZ2V0c1wiO1xuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWZXJiYXRpbUNTU05vZGUgZXh0ZW5kcyBDU1NOb2RlIHtcbiAgdGFyZ2V0KGNvbnRlbnQpIHtcbiAgICBjb25zdCB0YXJnZXQgPSB0aGlzLmZyb21GaXJzdENoaWxkTm9kZSgoZmlyc3RDaGlsZE5vZGUpID0+IHtcbiAgICAgIGNvbnN0IHRhcmdldENTU05vZGUgPSBmaXJzdENoaWxkTm9kZSwgLy8vXG4gICAgICAgICAgICB0YXJnZXQgPSB0YXJnZXRDU1NOb2RlLnRhcmdldChjb250ZW50KTtcblxuICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICB9KTtcblxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH1cblxuICBjb250ZW50KGNvbnRleHQpIHtcbiAgICBjb25zdCBjb250ZW50ID0gdGhpcy5mcm9tU2Vjb25kQ2hpbGROb2RlKChzZWNvbmRDaGlsZE5vZGUpID0+IHtcbiAgICAgIGNvbnN0IGNvbnRlbnRDU1NOb2RlID0gc2Vjb25kQ2hpbGROb2RlLCAvLy9cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Q1NTTm9kZS5jb250ZW50KGNvbnRleHQpO1xuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KTtcblxuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgYXNDU1MoY29udGV4dCkge1xuICAgIGxldCBjc3MgPSBFTVBUWV9TVFJJTkc7XG5cbiAgICBsZXQgdGFyZ2V0O1xuXG4gICAgKHsgdGFyZ2V0IH0gPSBjb250ZXh0KTtcblxuICAgIGlmICh0YXJnZXQgPT09IFdFQl9UQVJHRVQpIHtcbiAgICAgIHRhcmdldCA9IHRoaXMudGFyZ2V0KGNvbnRleHQpO1xuXG4gICAgICBpZiAodGFyZ2V0ID09PSBXRUJfVEFSR0VUKSB7XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLmNvbnRlbnQoY29udGV4dCk7XG5cbiAgICAgICAgY3NzID0gY29udGVudDsgIC8vL1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBjc3M7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7IHJldHVybiBDU1NOb2RlLmZyb21Ob3RoaW5nKFZlcmJhdGltQ1NTTm9kZSk7IH1cblxuICBzdGF0aWMgZnJvbU91dGVyTm9kZShvdXRlck5vZGUpIHsgcmV0dXJuIENTU05vZGUuZnJvbU91dGVyTm9kZShWZXJiYXRpbUNTU05vZGUsIG91dGVyTm9kZSk7IH1cbn1cbiJdLCJuYW1lcyI6WyJWZXJiYXRpbUNTU05vZGUiLCJDU1NOb2RlIiwidGFyZ2V0IiwiY29udGVudCIsImZyb21GaXJzdENoaWxkTm9kZSIsImZpcnN0Q2hpbGROb2RlIiwidGFyZ2V0Q1NTTm9kZSIsImNvbnRleHQiLCJmcm9tU2Vjb25kQ2hpbGROb2RlIiwic2Vjb25kQ2hpbGROb2RlIiwiY29udGVudENTU05vZGUiLCJhc0NTUyIsImNzcyIsIkVNUFRZX1NUUklORyIsIldFQl9UQVJHRVQiLCJmcm9tTm90aGluZyIsImZyb21PdXRlck5vZGUiLCJvdXRlck5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU9BOzs7ZUFBcUJBOzs7NERBTEQ7eUJBRU87MkJBQ0U7Ozs7OztBQUVkLE1BQU1BLHdCQUF3QkMsWUFBTztJQUNsREMsT0FBT0MsT0FBTyxFQUFFO1FBQ2QsTUFBTUQsU0FBUyxJQUFJLENBQUNFLGtCQUFrQixDQUFDLENBQUNDO1lBQ3RDLE1BQU1DLGdCQUFnQkQsZ0JBQ2hCSCxTQUFTSSxjQUFjSixNQUFNLENBQUNDO1lBRXBDLE9BQU9EO1FBQ1Q7UUFFQSxPQUFPQTtJQUNUO0lBRUFDLFFBQVFJLE9BQU8sRUFBRTtRQUNmLE1BQU1KLFVBQVUsSUFBSSxDQUFDSyxtQkFBbUIsQ0FBQyxDQUFDQztZQUN4QyxNQUFNQyxpQkFBaUJELGlCQUNqQk4sVUFBVU8sZUFBZVAsT0FBTyxDQUFDSTtZQUV2QyxPQUFPSjtRQUNUO1FBRUEsT0FBT0E7SUFDVDtJQUVBUSxNQUFNSixPQUFPLEVBQUU7UUFDYixJQUFJSyxNQUFNQyx1QkFBWTtRQUV0QixJQUFJWDtRQUVILENBQUEsRUFBRUEsTUFBTSxFQUFFLEdBQUdLLE9BQU07UUFFcEIsSUFBSUwsV0FBV1ksbUJBQVUsRUFBRTtZQUN6QlosU0FBUyxJQUFJLENBQUNBLE1BQU0sQ0FBQ0s7WUFFckIsSUFBSUwsV0FBV1ksbUJBQVUsRUFBRTtnQkFDekIsTUFBTVgsVUFBVSxJQUFJLENBQUNBLE9BQU8sQ0FBQ0k7Z0JBRTdCSyxNQUFNVCxTQUFVLEdBQUc7WUFDckI7UUFDRjtRQUVBLE9BQU9TO0lBQ1Q7SUFFQSxPQUFPRyxjQUFjO1FBQUUsT0FBT2QsWUFBTyxDQUFDYyxXQUFXLENBQUNmO0lBQWtCO0lBRXBFLE9BQU9nQixjQUFjQyxTQUFTLEVBQUU7UUFBRSxPQUFPaEIsWUFBTyxDQUFDZSxhQUFhLENBQUNoQixpQkFBaUJpQjtJQUFZO0FBQzlGIn0=