"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return FootnoteLinkHTMLTransform;
    }
});
const _html = /*#__PURE__*/ _interop_require_default(require("../../../transform/html"));
const _division = /*#__PURE__*/ _interop_require_default(require("../../../node/html/division"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class FootnoteLinkHTMLTransform extends _html.default {
    getDivisionHTMLNode() {
        const footnoteLinkHTMLNode = this.getFootnoteLinkHTMLNode(), divisionHTMLNode = footnoteLinkHTMLNode.findAncestorNode((ancestorNode)=>{
            const ancestorNodeDivisionHTMLNode = ancestorNode instanceof _division.default;
            if (ancestorNodeDivisionHTMLNode) {
                return true;
            }
        });
        return divisionHTMLNode;
    }
    getContainingHTMLNode() {
        let containingHTMLNode;
        const footnoteLinkHTMLNode = this.getFootnoteLinkHTMLNode();
        footnoteLinkHTMLNode.someAncestorNode((ancestorNode)=>{
            const ancestorNodeDivisionHTMLNode = ancestorNode instanceof _division.default;
            if (ancestorNodeDivisionHTMLNode) {
                return true;
            }
            containingHTMLNode = ancestorNode; ///
        });
        return containingHTMLNode;
    }
    getFootnoteLinkHTMLNode() {
        const htmlNode = this.getHTMLNode(), footnoteLinkHHTMLNode = htmlNode; ///
        return footnoteLinkHHTMLNode;
    }
    identifier(context) {
        const footnoteLinkHTMLNode = this.getFootnoteLinkHTMLNode(), identifier = footnoteLinkHTMLNode.identifier(context);
        return identifier;
    }
    static fromFootnoteLinkHTMLNode(footnoteLinkHTMLNode) {
        const htmlNode = footnoteLinkHTMLNode, footnoteLinkHTMLTransform = _html.default.fromHTMLNode(FootnoteLinkHTMLTransform, htmlNode);
        return footnoteLinkHTMLTransform;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy90cmFuc2Zvcm0vaHRtbC9saW5rL2Zvb3Rub3RlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgSFRNTFRyYW5zZm9ybSBmcm9tIFwiLi4vLi4vLi4vdHJhbnNmb3JtL2h0bWxcIlxuaW1wb3J0IERpdmlzaW9uSFRNTE5vZGUgZnJvbSBcIi4uLy4uLy4uL25vZGUvaHRtbC9kaXZpc2lvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb290bm90ZUxpbmtIVE1MVHJhbnNmb3JtIGV4dGVuZHMgSFRNTFRyYW5zZm9ybSB7XG4gIGdldERpdmlzaW9uSFRNTE5vZGUoKSB7XG4gICAgY29uc3QgZm9vdG5vdGVMaW5rSFRNTE5vZGUgPSB0aGlzLmdldEZvb3Rub3RlTGlua0hUTUxOb2RlKCksXG4gICAgICAgICAgZGl2aXNpb25IVE1MTm9kZSA9IGZvb3Rub3RlTGlua0hUTUxOb2RlLmZpbmRBbmNlc3Rvck5vZGUoKGFuY2VzdG9yTm9kZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgYW5jZXN0b3JOb2RlRGl2aXNpb25IVE1MTm9kZSA9IChhbmNlc3Rvck5vZGUgaW5zdGFuY2VvZiBEaXZpc2lvbkhUTUxOb2RlKTtcblxuICAgICAgICAgICAgaWYgKGFuY2VzdG9yTm9kZURpdmlzaW9uSFRNTE5vZGUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gZGl2aXNpb25IVE1MTm9kZTtcbiAgfVxuXG4gIGdldENvbnRhaW5pbmdIVE1MTm9kZSgpIHtcbiAgICBsZXQgY29udGFpbmluZ0hUTUxOb2RlO1xuXG4gICAgY29uc3QgZm9vdG5vdGVMaW5rSFRNTE5vZGUgPSB0aGlzLmdldEZvb3Rub3RlTGlua0hUTUxOb2RlKCk7XG5cbiAgICBmb290bm90ZUxpbmtIVE1MTm9kZS5zb21lQW5jZXN0b3JOb2RlKChhbmNlc3Rvck5vZGUpID0+IHtcbiAgICAgIGNvbnN0IGFuY2VzdG9yTm9kZURpdmlzaW9uSFRNTE5vZGUgPSAoYW5jZXN0b3JOb2RlIGluc3RhbmNlb2YgRGl2aXNpb25IVE1MTm9kZSk7XG5cbiAgICAgIGlmIChhbmNlc3Rvck5vZGVEaXZpc2lvbkhUTUxOb2RlKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuXG4gICAgICBjb250YWluaW5nSFRNTE5vZGUgPSBhbmNlc3Rvck5vZGU7ICAvLy9cbiAgICB9KTtcblxuICAgIHJldHVybiBjb250YWluaW5nSFRNTE5vZGU7XG4gIH1cblxuICBnZXRGb290bm90ZUxpbmtIVE1MTm9kZSgpIHtcbiAgICBjb25zdCBodG1sTm9kZSA9IHRoaXMuZ2V0SFRNTE5vZGUoKSxcbiAgICAgICAgICBmb290bm90ZUxpbmtISFRNTE5vZGUgPSBodG1sTm9kZTsgLy8vXG5cbiAgICByZXR1cm4gZm9vdG5vdGVMaW5rSEhUTUxOb2RlO1xuICB9XG5cbiAgaWRlbnRpZmllcihjb250ZXh0KSB7XG4gICAgY29uc3QgZm9vdG5vdGVMaW5rSFRNTE5vZGUgPSB0aGlzLmdldEZvb3Rub3RlTGlua0hUTUxOb2RlKCksXG4gICAgICAgICAgaWRlbnRpZmllciA9IGZvb3Rub3RlTGlua0hUTUxOb2RlLmlkZW50aWZpZXIoY29udGV4dCk7XG5cbiAgICByZXR1cm4gaWRlbnRpZmllcjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRm9vdG5vdGVMaW5rSFRNTE5vZGUoZm9vdG5vdGVMaW5rSFRNTE5vZGUpIHtcbiAgICBjb25zdCBodG1sTm9kZSA9IGZvb3Rub3RlTGlua0hUTUxOb2RlLCAgLy8vXG4gICAgICAgICAgZm9vdG5vdGVMaW5rSFRNTFRyYW5zZm9ybSA9IEhUTUxUcmFuc2Zvcm0uZnJvbUhUTUxOb2RlKEZvb3Rub3RlTGlua0hUTUxUcmFuc2Zvcm0sIGh0bWxOb2RlKTtcblxuICAgIHJldHVybiBmb290bm90ZUxpbmtIVE1MVHJhbnNmb3JtO1xuICB9XG59XG4iXSwibmFtZXMiOlsiRm9vdG5vdGVMaW5rSFRNTFRyYW5zZm9ybSIsIkhUTUxUcmFuc2Zvcm0iLCJnZXREaXZpc2lvbkhUTUxOb2RlIiwiZm9vdG5vdGVMaW5rSFRNTE5vZGUiLCJnZXRGb290bm90ZUxpbmtIVE1MTm9kZSIsImRpdmlzaW9uSFRNTE5vZGUiLCJmaW5kQW5jZXN0b3JOb2RlIiwiYW5jZXN0b3JOb2RlIiwiYW5jZXN0b3JOb2RlRGl2aXNpb25IVE1MTm9kZSIsIkRpdmlzaW9uSFRNTE5vZGUiLCJnZXRDb250YWluaW5nSFRNTE5vZGUiLCJjb250YWluaW5nSFRNTE5vZGUiLCJzb21lQW5jZXN0b3JOb2RlIiwiaHRtbE5vZGUiLCJnZXRIVE1MTm9kZSIsImZvb3Rub3RlTGlua0hIVE1MTm9kZSIsImlkZW50aWZpZXIiLCJjb250ZXh0IiwiZnJvbUZvb3Rub3RlTGlua0hUTUxOb2RlIiwiZm9vdG5vdGVMaW5rSFRNTFRyYW5zZm9ybSIsImZyb21IVE1MTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBS0E7OztlQUFxQkE7Ozs2REFISztpRUFDRzs7Ozs7O0FBRWQsTUFBTUEsa0NBQWtDQyxhQUFhO0lBQ2xFQyxzQkFBc0I7UUFDcEIsTUFBTUMsdUJBQXVCLElBQUksQ0FBQ0MsdUJBQXVCLElBQ25EQyxtQkFBbUJGLHFCQUFxQkcsZ0JBQWdCLENBQUMsQ0FBQ0M7WUFDeEQsTUFBTUMsK0JBQWdDRCx3QkFBd0JFLGlCQUFnQjtZQUU5RSxJQUFJRCw4QkFBOEI7Z0JBQ2hDLE9BQU87WUFDVDtRQUNGO1FBRU4sT0FBT0g7SUFDVDtJQUVBSyx3QkFBd0I7UUFDdEIsSUFBSUM7UUFFSixNQUFNUix1QkFBdUIsSUFBSSxDQUFDQyx1QkFBdUI7UUFFekRELHFCQUFxQlMsZ0JBQWdCLENBQUMsQ0FBQ0w7WUFDckMsTUFBTUMsK0JBQWdDRCx3QkFBd0JFLGlCQUFnQjtZQUU5RSxJQUFJRCw4QkFBOEI7Z0JBQ2hDLE9BQU87WUFDVDtZQUVBRyxxQkFBcUJKLGNBQWUsR0FBRztRQUN6QztRQUVBLE9BQU9JO0lBQ1Q7SUFFQVAsMEJBQTBCO1FBQ3hCLE1BQU1TLFdBQVcsSUFBSSxDQUFDQyxXQUFXLElBQzNCQyx3QkFBd0JGLFVBQVUsR0FBRztRQUUzQyxPQUFPRTtJQUNUO0lBRUFDLFdBQVdDLE9BQU8sRUFBRTtRQUNsQixNQUFNZCx1QkFBdUIsSUFBSSxDQUFDQyx1QkFBdUIsSUFDbkRZLGFBQWFiLHFCQUFxQmEsVUFBVSxDQUFDQztRQUVuRCxPQUFPRDtJQUNUO0lBRUEsT0FBT0UseUJBQXlCZixvQkFBb0IsRUFBRTtRQUNwRCxNQUFNVSxXQUFXVixzQkFDWGdCLDRCQUE0QmxCLGFBQWEsQ0FBQ21CLFlBQVksQ0FBQ3BCLDJCQUEyQmE7UUFFeEYsT0FBT007SUFDVDtBQUNGIn0=