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
const _constants = require("../../constants");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class VerbatimCSSNode extends _css.default {
    content(context) {
        const content = this.fromFirstChildNode((firstChildNode)=>{
            const contentCSSNode = firstChildNode, content = contentCSSNode.content(context);
            return content;
        });
        return content;
    }
    asCSS(context) {
        const content = this.content(context), css = content; ///
        return css;
    }
    static fromNothing() {
        return _css.default.fromNothing(VerbatimCSSNode);
    }
    static fromOuterNode(outerNode) {
        return _css.default.fromOuterNode(VerbatimCSSNode, outerNode);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2Nzcy92ZXJiYXRpbS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IENTU05vZGUgZnJvbSBcIi4uLy4uL25vZGUvY3NzXCI7XG5cbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmVyYmF0aW1DU1NOb2RlIGV4dGVuZHMgQ1NTTm9kZSB7XG4gIGNvbnRlbnQoY29udGV4dCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLmZyb21GaXJzdENoaWxkTm9kZSgoZmlyc3RDaGlsZE5vZGUpID0+IHtcbiAgICAgIGNvbnN0IGNvbnRlbnRDU1NOb2RlID0gZmlyc3RDaGlsZE5vZGUsIC8vL1xuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnRDU1NOb2RlLmNvbnRlbnQoY29udGV4dCk7XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBhc0NTUyhjb250ZXh0KSB7XG4gICAgY29uc3QgY29udGVudCA9IHRoaXMuY29udGVudChjb250ZXh0KSxcbiAgICAgICAgICBjc3MgPSBjb250ZW50OyAgLy8vXG5cbiAgICByZXR1cm4gY3NzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkgeyByZXR1cm4gQ1NTTm9kZS5mcm9tTm90aGluZyhWZXJiYXRpbUNTU05vZGUpOyB9XG5cbiAgc3RhdGljIGZyb21PdXRlck5vZGUob3V0ZXJOb2RlKSB7IHJldHVybiBDU1NOb2RlLmZyb21PdXRlck5vZGUoVmVyYmF0aW1DU1NOb2RlLCBvdXRlck5vZGUpOyB9XG59XG4iXSwibmFtZXMiOlsiVmVyYmF0aW1DU1NOb2RlIiwiQ1NTTm9kZSIsImNvbnRlbnQiLCJjb250ZXh0IiwiZnJvbUZpcnN0Q2hpbGROb2RlIiwiZmlyc3RDaGlsZE5vZGUiLCJjb250ZW50Q1NTTm9kZSIsImFzQ1NTIiwiY3NzIiwiZnJvbU5vdGhpbmciLCJmcm9tT3V0ZXJOb2RlIiwib3V0ZXJOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFNQTs7O2VBQXFCQTs7OzREQUpEOzJCQUVTOzs7Ozs7QUFFZCxNQUFNQSx3QkFBd0JDLFlBQU87SUFDbERDLFFBQVFDLE9BQU8sRUFBRTtRQUNmLE1BQU1ELFVBQVUsSUFBSSxDQUFDRSxrQkFBa0IsQ0FBQyxDQUFDQztZQUN2QyxNQUFNQyxpQkFBaUJELGdCQUNqQkgsVUFBVUksZUFBZUosT0FBTyxDQUFDQztZQUV2QyxPQUFPRDtRQUNUO1FBRUEsT0FBT0E7SUFDVDtJQUVBSyxNQUFNSixPQUFPLEVBQUU7UUFDYixNQUFNRCxVQUFVLElBQUksQ0FBQ0EsT0FBTyxDQUFDQyxVQUN2QkssTUFBTU4sU0FBVSxHQUFHO1FBRXpCLE9BQU9NO0lBQ1Q7SUFFQSxPQUFPQyxjQUFjO1FBQUUsT0FBT1IsWUFBTyxDQUFDUSxXQUFXLENBQUNUO0lBQWtCO0lBRXBFLE9BQU9VLGNBQWNDLFNBQVMsRUFBRTtRQUFFLE9BQU9WLFlBQU8sQ0FBQ1MsYUFBYSxDQUFDVixpQkFBaUJXO0lBQVk7QUFDOUYifQ==