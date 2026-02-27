"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return HeadingHTMLNode;
    }
});
const _html = /*#__PURE__*/ _interop_require_default(require("../../node/html"));
const _contents = /*#__PURE__*/ _interop_require_default(require("../../node/html/anchor/contents"));
const _string = require("../../utilities/string");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class HeadingHTMLNode extends _html.default {
    getLineHTMLNode() {
        const lineHTMLNode = this.findChildNode((childNode)=>{
            const childNodeAnchorHTMLNode = childNode instanceof _contents.default, childNodeLineHTMLNode = !childNodeAnchorHTMLNode;
            if (childNodeLineHTMLNode) {
                return true;
            }
        });
        return lineHTMLNode;
    }
    identifier(context) {
        const plainText = this.childNodesAsPlainText(context), identifier = identifierFromPlainText(plainText);
        return identifier;
    }
    anchor(context) {
        const identifier = this.identifier(context), contentsAnchorHTMLNode = _contents.default.fromIdentifier(identifier), childNode = contentsAnchorHTMLNode; ///
        this.prependChildNode(childNode);
    }
    static tagName = "h1";
    static fromNothing(Class) {
        return _html.default.fromNothing(Class);
    }
    static fromOuterNode(Class, outerNode) {
        return _html.default.fromOuterNode(Class, outerNode);
    }
}
function identifierFromPlainText(plainText) {
    let string;
    string = plainText; ///
    string = string.toLowerCase();
    string = (0, _string.removeLeadingWhitespace)(string);
    string = (0, _string.replaceSpacesWithHyphens)(string);
    string = (0, _string.removeNonAlphabeticCharacters)(string);
    const identifier = string; ///
    return identifier;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvaGVhZGluZy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEhUTUxOb2RlIGZyb20gXCIuLi8uLi9ub2RlL2h0bWxcIjtcbmltcG9ydCBDb250ZW50c0FuY2hvckhUTUxOb2RlIGZyb20gXCIuLi8uLi9ub2RlL2h0bWwvYW5jaG9yL2NvbnRlbnRzXCI7XG5cbmltcG9ydCB7IHJlbW92ZUxlYWRpbmdXaGl0ZXNwYWNlLCByZXBsYWNlU3BhY2VzV2l0aEh5cGhlbnMsIHJlbW92ZU5vbkFscGhhYmV0aWNDaGFyYWN0ZXJzIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9zdHJpbmdcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVhZGluZ0hUTUxOb2RlIGV4dGVuZHMgSFRNTE5vZGUge1xuICBnZXRMaW5lSFRNTE5vZGUoKSB7XG4gICAgY29uc3QgbGluZUhUTUxOb2RlID0gdGhpcy5maW5kQ2hpbGROb2RlKChjaGlsZE5vZGUpID0+IHtcbiAgICAgIGNvbnN0IGNoaWxkTm9kZUFuY2hvckhUTUxOb2RlID0gKGNoaWxkTm9kZSBpbnN0YW5jZW9mIENvbnRlbnRzQW5jaG9ySFRNTE5vZGUpLFxuICAgICAgICAgICAgY2hpbGROb2RlTGluZUhUTUxOb2RlID0gIWNoaWxkTm9kZUFuY2hvckhUTUxOb2RlO1xuXG4gICAgICBpZiAoY2hpbGROb2RlTGluZUhUTUxOb2RlKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGxpbmVIVE1MTm9kZTtcbiAgfVxuXG4gIGlkZW50aWZpZXIoY29udGV4dCkge1xuICAgIGNvbnN0IHBsYWluVGV4dCA9IHRoaXMuY2hpbGROb2Rlc0FzUGxhaW5UZXh0KGNvbnRleHQpLFxuICAgICAgICAgIGlkZW50aWZpZXIgPSBpZGVudGlmaWVyRnJvbVBsYWluVGV4dChwbGFpblRleHQpO1xuXG4gICAgcmV0dXJuIGlkZW50aWZpZXI7XG4gIH1cblxuICBhbmNob3IoY29udGV4dCkge1xuICAgIGNvbnN0IGlkZW50aWZpZXIgPSB0aGlzLmlkZW50aWZpZXIoY29udGV4dCksXG4gICAgICAgICAgY29udGVudHNBbmNob3JIVE1MTm9kZSA9IENvbnRlbnRzQW5jaG9ySFRNTE5vZGUuZnJvbUlkZW50aWZpZXIoaWRlbnRpZmllciksXG4gICAgICAgICAgY2hpbGROb2RlID0gY29udGVudHNBbmNob3JIVE1MTm9kZTsgLy8vXG5cbiAgICB0aGlzLnByZXBlbmRDaGlsZE5vZGUoY2hpbGROb2RlKTtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJoMVwiO1xuXG4gIHN0YXRpYyBmcm9tTm90aGluZyhDbGFzcykgeyByZXR1cm4gSFRNTE5vZGUuZnJvbU5vdGhpbmcoQ2xhc3MpOyB9XG5cbiAgc3RhdGljIGZyb21PdXRlck5vZGUoQ2xhc3MsIG91dGVyTm9kZSkgeyByZXR1cm4gSFRNTE5vZGUuZnJvbU91dGVyTm9kZShDbGFzcywgb3V0ZXJOb2RlKTsgfVxufVxuXG5mdW5jdGlvbiBpZGVudGlmaWVyRnJvbVBsYWluVGV4dChwbGFpblRleHQpIHtcbiAgbGV0IHN0cmluZztcblxuICBzdHJpbmcgPSBwbGFpblRleHQ7IC8vL1xuXG4gIHN0cmluZyA9IHN0cmluZy50b0xvd2VyQ2FzZSgpO1xuXG4gIHN0cmluZyA9IHJlbW92ZUxlYWRpbmdXaGl0ZXNwYWNlKHN0cmluZyk7XG5cbiAgc3RyaW5nID0gcmVwbGFjZVNwYWNlc1dpdGhIeXBoZW5zKHN0cmluZyk7XG5cbiAgc3RyaW5nID0gcmVtb3ZlTm9uQWxwaGFiZXRpY0NoYXJhY3RlcnMoc3RyaW5nKTtcblxuICBjb25zdCBpZGVudGlmaWVyID0gc3RyaW5nOyAgLy8vXG5cbiAgcmV0dXJuIGlkZW50aWZpZXI7XG59XG4iXSwibmFtZXMiOlsiSGVhZGluZ0hUTUxOb2RlIiwiSFRNTE5vZGUiLCJnZXRMaW5lSFRNTE5vZGUiLCJsaW5lSFRNTE5vZGUiLCJmaW5kQ2hpbGROb2RlIiwiY2hpbGROb2RlIiwiY2hpbGROb2RlQW5jaG9ySFRNTE5vZGUiLCJDb250ZW50c0FuY2hvckhUTUxOb2RlIiwiY2hpbGROb2RlTGluZUhUTUxOb2RlIiwiaWRlbnRpZmllciIsImNvbnRleHQiLCJwbGFpblRleHQiLCJjaGlsZE5vZGVzQXNQbGFpblRleHQiLCJpZGVudGlmaWVyRnJvbVBsYWluVGV4dCIsImFuY2hvciIsImNvbnRlbnRzQW5jaG9ySFRNTE5vZGUiLCJmcm9tSWRlbnRpZmllciIsInByZXBlbmRDaGlsZE5vZGUiLCJ0YWdOYW1lIiwiZnJvbU5vdGhpbmciLCJDbGFzcyIsImZyb21PdXRlck5vZGUiLCJvdXRlck5vZGUiLCJzdHJpbmciLCJ0b0xvd2VyQ2FzZSIsInJlbW92ZUxlYWRpbmdXaGl0ZXNwYWNlIiwicmVwbGFjZVNwYWNlc1dpdGhIeXBoZW5zIiwicmVtb3ZlTm9uQWxwaGFiZXRpY0NoYXJhY3RlcnMiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU9BOzs7ZUFBcUJBOzs7NkRBTEE7aUVBQ2M7d0JBRThEOzs7Ozs7QUFFbEYsTUFBTUEsd0JBQXdCQyxhQUFRO0lBQ25EQyxrQkFBa0I7UUFDaEIsTUFBTUMsZUFBZSxJQUFJLENBQUNDLGFBQWEsQ0FBQyxDQUFDQztZQUN2QyxNQUFNQywwQkFBMkJELHFCQUFxQkUsaUJBQXNCLEVBQ3RFQyx3QkFBd0IsQ0FBQ0Y7WUFFL0IsSUFBSUUsdUJBQXVCO2dCQUN6QixPQUFPO1lBQ1Q7UUFDRjtRQUVBLE9BQU9MO0lBQ1Q7SUFFQU0sV0FBV0MsT0FBTyxFQUFFO1FBQ2xCLE1BQU1DLFlBQVksSUFBSSxDQUFDQyxxQkFBcUIsQ0FBQ0YsVUFDdkNELGFBQWFJLHdCQUF3QkY7UUFFM0MsT0FBT0Y7SUFDVDtJQUVBSyxPQUFPSixPQUFPLEVBQUU7UUFDZCxNQUFNRCxhQUFhLElBQUksQ0FBQ0EsVUFBVSxDQUFDQyxVQUM3QksseUJBQXlCUixpQkFBc0IsQ0FBQ1MsY0FBYyxDQUFDUCxhQUMvREosWUFBWVUsd0JBQXdCLEdBQUc7UUFFN0MsSUFBSSxDQUFDRSxnQkFBZ0IsQ0FBQ1o7SUFDeEI7SUFFQSxPQUFPYSxVQUFVLEtBQUs7SUFFdEIsT0FBT0MsWUFBWUMsS0FBSyxFQUFFO1FBQUUsT0FBT25CLGFBQVEsQ0FBQ2tCLFdBQVcsQ0FBQ0M7SUFBUTtJQUVoRSxPQUFPQyxjQUFjRCxLQUFLLEVBQUVFLFNBQVMsRUFBRTtRQUFFLE9BQU9yQixhQUFRLENBQUNvQixhQUFhLENBQUNELE9BQU9FO0lBQVk7QUFDNUY7QUFFQSxTQUFTVCx3QkFBd0JGLFNBQVM7SUFDeEMsSUFBSVk7SUFFSkEsU0FBU1osV0FBVyxHQUFHO0lBRXZCWSxTQUFTQSxPQUFPQyxXQUFXO0lBRTNCRCxTQUFTRSxJQUFBQSwrQkFBdUIsRUFBQ0Y7SUFFakNBLFNBQVNHLElBQUFBLGdDQUF3QixFQUFDSDtJQUVsQ0EsU0FBU0ksSUFBQUEscUNBQTZCLEVBQUNKO0lBRXZDLE1BQU1kLGFBQWFjLFFBQVMsR0FBRztJQUUvQixPQUFPZDtBQUNUIn0=