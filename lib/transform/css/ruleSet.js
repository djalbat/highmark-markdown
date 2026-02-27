"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return RuleSetCSSTransform;
    }
});
const _css = /*#__PURE__*/ _interop_require_default(require("../../transform/css"));
const _ruleSet = /*#__PURE__*/ _interop_require_default(require("../../node/css/ruleSet"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class RuleSetCSSTransform extends _css.default {
    appendToTopmostCSSNode(topmostCSSNode) {
        const cssNode = topmostCSSNode; ///
        this.appendTo(cssNode);
    }
    static fromRuleSetCSSNode(ruleSetCSSNode) {
        const cssNode = ruleSetCSSNode, ruleSetCSSTransform = _css.default.fromCSSNode(RuleSetCSSTransform, cssNode);
        return ruleSetCSSTransform;
    }
    static fromDeclarationCSSNodes(declarationCSSNodes) {
        const ruleSetCSSNode = _ruleSet.default.fromDeclarationCSSNodes(declarationCSSNodes), cssNode = ruleSetCSSNode, ruleSetCSSTransform = _css.default.fromCSSNode(RuleSetCSSTransform, cssNode);
        return ruleSetCSSTransform;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90cmFuc2Zvcm0vY3NzL3J1bGVTZXQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBDU1NUcmFuc2Zvcm0gZnJvbSBcIi4uLy4uL3RyYW5zZm9ybS9jc3NcIlxuaW1wb3J0IFJ1bGVTZXRDU1NOb2RlIGZyb20gXCIuLi8uLi9ub2RlL2Nzcy9ydWxlU2V0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJ1bGVTZXRDU1NUcmFuc2Zvcm0gZXh0ZW5kcyBDU1NUcmFuc2Zvcm0ge1xuICBhcHBlbmRUb1RvcG1vc3RDU1NOb2RlKHRvcG1vc3RDU1NOb2RlKSB7XG4gICAgY29uc3QgY3NzTm9kZSA9IHRvcG1vc3RDU1NOb2RlOyAvLy9cblxuICAgIHRoaXMuYXBwZW5kVG8oY3NzTm9kZSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVTZXRDU1NOb2RlKHJ1bGVTZXRDU1NOb2RlKSB7XG4gICAgY29uc3QgY3NzTm9kZSA9IHJ1bGVTZXRDU1NOb2RlLCAvLy9cbiAgICAgICAgICBydWxlU2V0Q1NTVHJhbnNmb3JtID0gQ1NTVHJhbnNmb3JtLmZyb21DU1NOb2RlKFJ1bGVTZXRDU1NUcmFuc2Zvcm0sIGNzc05vZGUpO1xuXG4gICAgcmV0dXJuIHJ1bGVTZXRDU1NUcmFuc2Zvcm07XG4gIH1cblxuICBzdGF0aWMgZnJvbURlY2xhcmF0aW9uQ1NTTm9kZXMoZGVjbGFyYXRpb25DU1NOb2Rlcykge1xuICAgIGNvbnN0IHJ1bGVTZXRDU1NOb2RlID0gUnVsZVNldENTU05vZGUuZnJvbURlY2xhcmF0aW9uQ1NTTm9kZXMoZGVjbGFyYXRpb25DU1NOb2RlcyksXG4gICAgICAgICAgY3NzTm9kZSA9IHJ1bGVTZXRDU1NOb2RlLFxuICAgICAgICAgIHJ1bGVTZXRDU1NUcmFuc2Zvcm0gPSBDU1NUcmFuc2Zvcm0uZnJvbUNTU05vZGUoUnVsZVNldENTU1RyYW5zZm9ybSwgY3NzTm9kZSk7XG5cbiAgICByZXR1cm4gcnVsZVNldENTU1RyYW5zZm9ybTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlJ1bGVTZXRDU1NUcmFuc2Zvcm0iLCJDU1NUcmFuc2Zvcm0iLCJhcHBlbmRUb1RvcG1vc3RDU1NOb2RlIiwidG9wbW9zdENTU05vZGUiLCJjc3NOb2RlIiwiYXBwZW5kVG8iLCJmcm9tUnVsZVNldENTU05vZGUiLCJydWxlU2V0Q1NTTm9kZSIsInJ1bGVTZXRDU1NUcmFuc2Zvcm0iLCJmcm9tQ1NTTm9kZSIsImZyb21EZWNsYXJhdGlvbkNTU05vZGVzIiwiZGVjbGFyYXRpb25DU1NOb2RlcyIsIlJ1bGVTZXRDU1NOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFLQTs7O2VBQXFCQTs7OzREQUhJO2dFQUNFOzs7Ozs7QUFFWixNQUFNQSw0QkFBNEJDLFlBQVk7SUFDM0RDLHVCQUF1QkMsY0FBYyxFQUFFO1FBQ3JDLE1BQU1DLFVBQVVELGdCQUFnQixHQUFHO1FBRW5DLElBQUksQ0FBQ0UsUUFBUSxDQUFDRDtJQUNoQjtJQUVBLE9BQU9FLG1CQUFtQkMsY0FBYyxFQUFFO1FBQ3hDLE1BQU1ILFVBQVVHLGdCQUNWQyxzQkFBc0JQLFlBQVksQ0FBQ1EsV0FBVyxDQUFDVCxxQkFBcUJJO1FBRTFFLE9BQU9JO0lBQ1Q7SUFFQSxPQUFPRSx3QkFBd0JDLG1CQUFtQixFQUFFO1FBQ2xELE1BQU1KLGlCQUFpQkssZ0JBQWMsQ0FBQ0YsdUJBQXVCLENBQUNDLHNCQUN4RFAsVUFBVUcsZ0JBQ1ZDLHNCQUFzQlAsWUFBWSxDQUFDUSxXQUFXLENBQUNULHFCQUFxQkk7UUFFMUUsT0FBT0k7SUFDVDtBQUNGIn0=