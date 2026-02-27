"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return DeclarationCSSNode;
    }
});
const _css = /*#__PURE__*/ _interop_require_default(require("../../node/css"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class DeclarationCSSNode extends _css.default {
    asCSS(context) {
        const name = this.fromFirstChildNode((firstChildNode)=>{
            const nameCSSNode = firstChildNode, nameCSSNodeCSS = nameCSSNode.asCSS(context), name = nameCSSNodeCSS; ///
            return name;
        }), values = this.fromSecondChildNode((secondChildNode)=>{
            const valuesCSSNode = secondChildNode, valuesCSSNodeCSS = valuesCSSNode.asCSS(context), values = valuesCSSNodeCSS; ///
            return values;
        }), css = `  ${name}: ${values};
`;
        return css;
    }
    static fromNothing() {
        return _css.default.fromNothing(DeclarationCSSNode);
    }
    static fromOuterNode(outerNode) {
        return _css.default.fromOuterNode(DeclarationCSSNode, outerNode);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2Nzcy9kZWNsYXJhdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IENTU05vZGUgZnJvbSBcIi4uLy4uL25vZGUvY3NzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERlY2xhcmF0aW9uQ1NTTm9kZSBleHRlbmRzIENTU05vZGUge1xuICBhc0NTUyhjb250ZXh0KSB7XG4gICAgY29uc3QgbmFtZSA9IHRoaXMuZnJvbUZpcnN0Q2hpbGROb2RlKChmaXJzdENoaWxkTm9kZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmFtZUNTU05vZGUgPSBmaXJzdENoaWxkTm9kZSwgLy8vXG4gICAgICAgICAgICAgICAgICBuYW1lQ1NTTm9kZUNTUyA9IG5hbWVDU1NOb2RlLmFzQ1NTKGNvbnRleHQpLFxuICAgICAgICAgICAgICAgICAgbmFtZSA9IG5hbWVDU1NOb2RlQ1NTOyAgLy8vXG5cbiAgICAgICAgICAgIHJldHVybiBuYW1lO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIHZhbHVlcyA9IHRoaXMuZnJvbVNlY29uZENoaWxkTm9kZSgoc2Vjb25kQ2hpbGROb2RlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZXNDU1NOb2RlID0gc2Vjb25kQ2hpbGROb2RlLCAgLy8vXG4gICAgICAgICAgICAgICAgICB2YWx1ZXNDU1NOb2RlQ1NTID0gdmFsdWVzQ1NTTm9kZS5hc0NTUyhjb250ZXh0KSxcbiAgICAgICAgICAgICAgICAgIHZhbHVlcyA9IHZhbHVlc0NTU05vZGVDU1M7ICAvLy9cblxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlcztcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBjc3MgPSBgICAke25hbWV9OiAke3ZhbHVlc307XG5gO1xuXG4gICAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHsgcmV0dXJuIENTU05vZGUuZnJvbU5vdGhpbmcoRGVjbGFyYXRpb25DU1NOb2RlKTsgfVxuXG4gIHN0YXRpYyBmcm9tT3V0ZXJOb2RlKG91dGVyTm9kZSkgeyByZXR1cm4gQ1NTTm9kZS5mcm9tT3V0ZXJOb2RlKERlY2xhcmF0aW9uQ1NTTm9kZSwgb3V0ZXJOb2RlKTsgfVxufVxuIl0sIm5hbWVzIjpbIkRlY2xhcmF0aW9uQ1NTTm9kZSIsIkNTU05vZGUiLCJhc0NTUyIsImNvbnRleHQiLCJuYW1lIiwiZnJvbUZpcnN0Q2hpbGROb2RlIiwiZmlyc3RDaGlsZE5vZGUiLCJuYW1lQ1NTTm9kZSIsIm5hbWVDU1NOb2RlQ1NTIiwidmFsdWVzIiwiZnJvbVNlY29uZENoaWxkTm9kZSIsInNlY29uZENoaWxkTm9kZSIsInZhbHVlc0NTU05vZGUiLCJ2YWx1ZXNDU1NOb2RlQ1NTIiwiY3NzIiwiZnJvbU5vdGhpbmciLCJmcm9tT3V0ZXJOb2RlIiwib3V0ZXJOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFJQTs7O2VBQXFCQTs7OzREQUZEOzs7Ozs7QUFFTCxNQUFNQSwyQkFBMkJDLFlBQU87SUFDckRDLE1BQU1DLE9BQU8sRUFBRTtRQUNiLE1BQU1DLE9BQU8sSUFBSSxDQUFDQyxrQkFBa0IsQ0FBQyxDQUFDQztZQUM5QixNQUFNQyxjQUFjRCxnQkFDZEUsaUJBQWlCRCxZQUFZTCxLQUFLLENBQUNDLFVBQ25DQyxPQUFPSSxnQkFBaUIsR0FBRztZQUVqQyxPQUFPSjtRQUNULElBQ0FLLFNBQVMsSUFBSSxDQUFDQyxtQkFBbUIsQ0FBQyxDQUFDQztZQUNqQyxNQUFNQyxnQkFBZ0JELGlCQUNoQkUsbUJBQW1CRCxjQUFjVixLQUFLLENBQUNDLFVBQ3ZDTSxTQUFTSSxrQkFBbUIsR0FBRztZQUVyQyxPQUFPSjtRQUNULElBQ0FLLE1BQU0sQ0FBQyxFQUFFLEVBQUVWLEtBQUssRUFBRSxFQUFFSyxPQUFPO0FBQ3JDLENBQUM7UUFFRyxPQUFPSztJQUNUO0lBRUEsT0FBT0MsY0FBYztRQUFFLE9BQU9kLFlBQU8sQ0FBQ2MsV0FBVyxDQUFDZjtJQUFxQjtJQUV2RSxPQUFPZ0IsY0FBY0MsU0FBUyxFQUFFO1FBQUUsT0FBT2hCLFlBQU8sQ0FBQ2UsYUFBYSxDQUFDaEIsb0JBQW9CaUI7SUFBWTtBQUNqRyJ9