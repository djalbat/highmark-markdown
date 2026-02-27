"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return LineHTMLTransform;
    }
});
const _html = /*#__PURE__*/ _interop_require_default(require("../../transform/html"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class LineHTMLTransform extends _html.default {
    getLineHTMLNode() {
        const htmlNode = this.getHTMLNode(), lineHTMLNode = htmlNode; ///;
        return lineHTMLNode;
    }
    static fromLineHTMLNode(lineHTMLNode) {
        const htmlNode = lineHTMLNode, paragraphHTMLTransform = _html.default.fromHTMLNode(LineHTMLTransform, htmlNode);
        return paragraphHTMLTransform;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90cmFuc2Zvcm0vaHRtbC9saW5lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgSFRNTFRyYW5zZm9ybSBmcm9tIFwiLi4vLi4vdHJhbnNmb3JtL2h0bWxcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaW5lSFRNTFRyYW5zZm9ybSBleHRlbmRzIEhUTUxUcmFuc2Zvcm0ge1xuICBnZXRMaW5lSFRNTE5vZGUoKSB7XG4gICAgY29uc3QgaHRtbE5vZGUgPSB0aGlzLmdldEhUTUxOb2RlKCksXG4gICAgICAgICAgbGluZUhUTUxOb2RlID0gaHRtbE5vZGU7ICAvLy87XG5cbiAgICByZXR1cm4gbGluZUhUTUxOb2RlO1xuICB9XG5cbiAgc3RhdGljIGZyb21MaW5lSFRNTE5vZGUobGluZUhUTUxOb2RlKSB7XG4gICAgY29uc3QgaHRtbE5vZGUgPSBsaW5lSFRNTE5vZGUsIC8vL1xuICAgICAgICAgIHBhcmFncmFwaEhUTUxUcmFuc2Zvcm0gPSBIVE1MVHJhbnNmb3JtLmZyb21IVE1MTm9kZShMaW5lSFRNTFRyYW5zZm9ybSwgaHRtbE5vZGUpO1xuXG4gICAgcmV0dXJuIHBhcmFncmFwaEhUTUxUcmFuc2Zvcm07XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJMaW5lSFRNTFRyYW5zZm9ybSIsIkhUTUxUcmFuc2Zvcm0iLCJnZXRMaW5lSFRNTE5vZGUiLCJodG1sTm9kZSIsImdldEhUTUxOb2RlIiwibGluZUhUTUxOb2RlIiwiZnJvbUxpbmVIVE1MTm9kZSIsInBhcmFncmFwaEhUTUxUcmFuc2Zvcm0iLCJmcm9tSFRNTE5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQUlBOzs7ZUFBcUJBOzs7NkRBRks7Ozs7OztBQUVYLE1BQU1BLDBCQUEwQkMsYUFBYTtJQUMxREMsa0JBQWtCO1FBQ2hCLE1BQU1DLFdBQVcsSUFBSSxDQUFDQyxXQUFXLElBQzNCQyxlQUFlRixVQUFXLElBQUk7UUFFcEMsT0FBT0U7SUFDVDtJQUVBLE9BQU9DLGlCQUFpQkQsWUFBWSxFQUFFO1FBQ3BDLE1BQU1GLFdBQVdFLGNBQ1hFLHlCQUF5Qk4sYUFBYSxDQUFDTyxZQUFZLENBQUNSLG1CQUFtQkc7UUFFN0UsT0FBT0k7SUFDVDtBQUNGIn0=