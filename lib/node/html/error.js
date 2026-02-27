"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ErrorHTMLNode;
    }
});
const _html = /*#__PURE__*/ _interop_require_default(require("../../node/html"));
const _dom = require("../../utilities/dom");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class ErrorHTMLNode extends _html.default {
    error(context) {
        const markdownNode = this.getMarkdownNode(), error = markdownNode.error(context);
        return error;
    }
    createDOMElement(context) {
        let domElement;
        const error = this.error(context), content = error, textNode = document.createTextNode(content);
        domElement = super.createDOMElement(context);
        const parentDOMElement = domElement; ///
        domElement = textNode; ///
        (0, _dom.insertAfterwards)(domElement, parentDOMElement);
        domElement = parentDOMElement; ///
        return domElement;
    }
    asHTML(indent, context) {
        let html;
        indent = this.adjustIndent(indent);
        const childNodesHTML = this.childNodesAsHTML(indent, context), startingTag = this.startingTag(context), closingTag = this.closingTag(context);
        html = `${indent}${startingTag}${childNodesHTML}${closingTag}
`;
        return html;
    }
    asPlainText(context) {
        const error = this.error(context), plainText = error; ///
        return plainText;
    }
    childNodesAsHTML(indent, context) {
        const error = this.error(context), childNodesHTML = error; ///
        return childNodesHTML;
    }
    static tagName = "span";
    static className = "error";
    static fromNothing() {
        return _html.default.fromNothing(ErrorHTMLNode);
    }
    static fromOuterNode(outerNode) {
        return _html.default.fromOuterNode(ErrorHTMLNode, outerNode);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvZXJyb3IuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBIVE1MTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9odG1sXCI7XG5pbXBvcnQgeyBpbnNlcnRBZnRlcndhcmRzIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9kb21cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXJyb3JIVE1MTm9kZSBleHRlbmRzIEhUTUxOb2RlIHtcbiAgZXJyb3IoY29udGV4dCkge1xuICAgIGNvbnN0IG1hcmtkb3duTm9kZSA9IHRoaXMuZ2V0TWFya2Rvd25Ob2RlKCksXG4gICAgICAgICAgZXJyb3IgPSBtYXJrZG93bk5vZGUuZXJyb3IoY29udGV4dCk7XG5cbiAgICByZXR1cm4gZXJyb3I7XG4gIH1cblxuICBjcmVhdGVET01FbGVtZW50KGNvbnRleHQpIHtcbiAgICBsZXQgZG9tRWxlbWVudDtcblxuICAgIGNvbnN0IGVycm9yID0gdGhpcy5lcnJvcihjb250ZXh0KSxcbiAgICAgICAgICBjb250ZW50ID0gZXJyb3IsICAvLy9cbiAgICAgICAgICB0ZXh0Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNvbnRlbnQpO1xuXG4gICAgZG9tRWxlbWVudCA9IHN1cGVyLmNyZWF0ZURPTUVsZW1lbnQoY29udGV4dClcblxuICAgIGNvbnN0IHBhcmVudERPTUVsZW1lbnQgPSBkb21FbGVtZW50OyAgLy8vXG5cbiAgICBkb21FbGVtZW50ID0gdGV4dE5vZGU7IC8vL1xuXG4gICAgaW5zZXJ0QWZ0ZXJ3YXJkcyhkb21FbGVtZW50LCBwYXJlbnRET01FbGVtZW50KTtcblxuICAgIGRvbUVsZW1lbnQgPSBwYXJlbnRET01FbGVtZW50OyAgLy8vXG5cbiAgICByZXR1cm4gZG9tRWxlbWVudDtcbiAgfVxuXG4gIGFzSFRNTChpbmRlbnQsIGNvbnRleHQpIHtcbiAgICBsZXQgaHRtbDtcblxuICAgIGluZGVudCA9IHRoaXMuYWRqdXN0SW5kZW50KGluZGVudCk7XG5cbiAgICBjb25zdCBjaGlsZE5vZGVzSFRNTCA9IHRoaXMuY2hpbGROb2Rlc0FzSFRNTChpbmRlbnQsIGNvbnRleHQpLFxuICAgICAgICAgIHN0YXJ0aW5nVGFnID0gdGhpcy5zdGFydGluZ1RhZyhjb250ZXh0KSxcbiAgICAgICAgICBjbG9zaW5nVGFnID0gdGhpcy5jbG9zaW5nVGFnKGNvbnRleHQpO1xuXG4gICAgaHRtbCA9IGAke2luZGVudH0ke3N0YXJ0aW5nVGFnfSR7Y2hpbGROb2Rlc0hUTUx9JHtjbG9zaW5nVGFnfVxuYDtcblxuICAgIHJldHVybiBodG1sO1xuICB9XG5cbiAgYXNQbGFpblRleHQoY29udGV4dCkge1xuICAgIGNvbnN0IGVycm9yID0gdGhpcy5lcnJvcihjb250ZXh0KSxcbiAgICAgICAgICBwbGFpblRleHQgPSBlcnJvcjsgIC8vL1xuXG4gICAgcmV0dXJuIHBsYWluVGV4dDtcbiAgfVxuXG4gIGNoaWxkTm9kZXNBc0hUTUwoaW5kZW50LCBjb250ZXh0KSB7XG4gICAgY29uc3QgZXJyb3IgPSB0aGlzLmVycm9yKGNvbnRleHQpLFxuICAgICAgICAgIGNoaWxkTm9kZXNIVE1MID0gZXJyb3I7IC8vL1xuXG4gICAgcmV0dXJuIGNoaWxkTm9kZXNIVE1MO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcInNwYW5cIjtcblxuICBzdGF0aWMgY2xhc3NOYW1lID0gXCJlcnJvclwiO1xuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHsgcmV0dXJuIEhUTUxOb2RlLmZyb21Ob3RoaW5nKEVycm9ySFRNTE5vZGUpOyB9XG5cbiAgc3RhdGljIGZyb21PdXRlck5vZGUob3V0ZXJOb2RlKSB7IHJldHVybiBIVE1MTm9kZS5mcm9tT3V0ZXJOb2RlKEVycm9ySFRNTE5vZGUsIG91dGVyTm9kZSk7IH1cbn1cbiJdLCJuYW1lcyI6WyJFcnJvckhUTUxOb2RlIiwiSFRNTE5vZGUiLCJlcnJvciIsImNvbnRleHQiLCJtYXJrZG93bk5vZGUiLCJnZXRNYXJrZG93bk5vZGUiLCJjcmVhdGVET01FbGVtZW50IiwiZG9tRWxlbWVudCIsImNvbnRlbnQiLCJ0ZXh0Tm9kZSIsImRvY3VtZW50IiwiY3JlYXRlVGV4dE5vZGUiLCJwYXJlbnRET01FbGVtZW50IiwiaW5zZXJ0QWZ0ZXJ3YXJkcyIsImFzSFRNTCIsImluZGVudCIsImh0bWwiLCJhZGp1c3RJbmRlbnQiLCJjaGlsZE5vZGVzSFRNTCIsImNoaWxkTm9kZXNBc0hUTUwiLCJzdGFydGluZ1RhZyIsImNsb3NpbmdUYWciLCJhc1BsYWluVGV4dCIsInBsYWluVGV4dCIsInRhZ05hbWUiLCJjbGFzc05hbWUiLCJmcm9tTm90aGluZyIsImZyb21PdXRlck5vZGUiLCJvdXRlck5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQUtBOzs7ZUFBcUJBOzs7NkRBSEE7cUJBQ1k7Ozs7OztBQUVsQixNQUFNQSxzQkFBc0JDLGFBQVE7SUFDakRDLE1BQU1DLE9BQU8sRUFBRTtRQUNiLE1BQU1DLGVBQWUsSUFBSSxDQUFDQyxlQUFlLElBQ25DSCxRQUFRRSxhQUFhRixLQUFLLENBQUNDO1FBRWpDLE9BQU9EO0lBQ1Q7SUFFQUksaUJBQWlCSCxPQUFPLEVBQUU7UUFDeEIsSUFBSUk7UUFFSixNQUFNTCxRQUFRLElBQUksQ0FBQ0EsS0FBSyxDQUFDQyxVQUNuQkssVUFBVU4sT0FDVk8sV0FBV0MsU0FBU0MsY0FBYyxDQUFDSDtRQUV6Q0QsYUFBYSxLQUFLLENBQUNELGlCQUFpQkg7UUFFcEMsTUFBTVMsbUJBQW1CTCxZQUFhLEdBQUc7UUFFekNBLGFBQWFFLFVBQVUsR0FBRztRQUUxQkksSUFBQUEscUJBQWdCLEVBQUNOLFlBQVlLO1FBRTdCTCxhQUFhSyxrQkFBbUIsR0FBRztRQUVuQyxPQUFPTDtJQUNUO0lBRUFPLE9BQU9DLE1BQU0sRUFBRVosT0FBTyxFQUFFO1FBQ3RCLElBQUlhO1FBRUpELFNBQVMsSUFBSSxDQUFDRSxZQUFZLENBQUNGO1FBRTNCLE1BQU1HLGlCQUFpQixJQUFJLENBQUNDLGdCQUFnQixDQUFDSixRQUFRWixVQUMvQ2lCLGNBQWMsSUFBSSxDQUFDQSxXQUFXLENBQUNqQixVQUMvQmtCLGFBQWEsSUFBSSxDQUFDQSxVQUFVLENBQUNsQjtRQUVuQ2EsT0FBTyxHQUFHRCxTQUFTSyxjQUFjRixpQkFBaUJHLFdBQVc7QUFDakUsQ0FBQztRQUVHLE9BQU9MO0lBQ1Q7SUFFQU0sWUFBWW5CLE9BQU8sRUFBRTtRQUNuQixNQUFNRCxRQUFRLElBQUksQ0FBQ0EsS0FBSyxDQUFDQyxVQUNuQm9CLFlBQVlyQixPQUFRLEdBQUc7UUFFN0IsT0FBT3FCO0lBQ1Q7SUFFQUosaUJBQWlCSixNQUFNLEVBQUVaLE9BQU8sRUFBRTtRQUNoQyxNQUFNRCxRQUFRLElBQUksQ0FBQ0EsS0FBSyxDQUFDQyxVQUNuQmUsaUJBQWlCaEIsT0FBTyxHQUFHO1FBRWpDLE9BQU9nQjtJQUNUO0lBRUEsT0FBT00sVUFBVSxPQUFPO0lBRXhCLE9BQU9DLFlBQVksUUFBUTtJQUUzQixPQUFPQyxjQUFjO1FBQUUsT0FBT3pCLGFBQVEsQ0FBQ3lCLFdBQVcsQ0FBQzFCO0lBQWdCO0lBRW5FLE9BQU8yQixjQUFjQyxTQUFTLEVBQUU7UUFBRSxPQUFPM0IsYUFBUSxDQUFDMEIsYUFBYSxDQUFDM0IsZUFBZTRCO0lBQVk7QUFDN0YifQ==