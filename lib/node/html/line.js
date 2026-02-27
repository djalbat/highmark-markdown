"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return LineHTMLNode;
    }
});
const _html = /*#__PURE__*/ _interop_require_default(require("../../node/html"));
const _dom = require("../../utilities/dom");
const _constants = require("../../constants");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class LineHTMLNode extends _html.default {
    lines(context) {
        const { maximumLineCharacters = _constants.DEFAULT_MAXIMUM_LINE_CHARACTERS } = context, plainText = this.asPlainText(context), plainTextLength = plainText.length, characters = plainTextLength, lines = characters / maximumLineCharacters + 1;
        return lines;
    }
    content(context) {
        const plainText = this.asPlainText(context), content = plainText; ///
        return content;
    }
    prepare(context) {
        const markdownNode = this.getMarkdownNode(), firstTokenIndex = markdownNode.getFirstTokenIndex(context), tokenIndex = firstTokenIndex; ///
        Object.assign(context, {
            tokenIndex
        });
    }
    dispose(context) {
        delete context.tokenIndex;
    }
    remount(context) {
        const domElement = this.getDOMElement(), parentDOMElement = domElement.parentElement, siblingDOMElement = domElement.previousSibling;
        this.prepare(context);
        this.unmount(parentDOMElement);
        this.mount(parentDOMElement, siblingDOMElement, context);
        this.dispose(context);
    }
    mount(parentDOMElement, siblingDOMElement, context) {
        let domElement;
        this.prepare(context);
        super.mount(parentDOMElement, siblingDOMElement, context);
        domElement = this.getDOMElement();
        parentDOMElement = domElement; ///
        const content = _constants.CARRIAGE_RETURN, textNode = document.createTextNode(content);
        domElement = textNode; ///
        (0, _dom.insertAfterwards)(domElement, parentDOMElement);
        domElement = this.getDOMElement();
        siblingDOMElement = domElement; ///
        this.dispose(context);
        return siblingDOMElement;
    }
    unmount(parentDOMElement) {
        {
            let domElement;
            domElement = this.getDOMElement();
            const parentDOMElement = domElement, lastChild = domElement.lastChild;
            domElement = lastChild; ///
            (0, _dom.remove)(domElement, parentDOMElement);
        }
        super.unmount(parentDOMElement);
    }
    asHTML(indent, context) {
        let html;
        this.prepare(context);
        indent = this.adjustIndent(indent);
        const childNodesHTML = this.childNodesAsHTML(indent, context);
        const startingTag = this.startingTag(context), closingTag = this.closingTag(context);
        html = `${indent}${startingTag}${childNodesHTML}${closingTag}
`;
        this.dispose(context);
        return html;
    }
    asPlainText(context) {
        let plainText;
        this.prepare(context);
        plainText = super.asPlainText(context);
        this.dispose(context);
        return plainText;
    }
    childNodesAsPlainText(context) {
        const childNodesPlainText = this.reduceChildNode((childNodesPlainText, childNode)=>{
            const childNodePlainText = childNode.asPlainText(context);
            childNodesPlainText = `${childNodesPlainText}${childNodePlainText}`;
            return childNodesPlainText;
        }, _constants.EMPTY_STRING);
        return childNodesPlainText;
    }
    static tagName = "span";
    static className = "line";
    static fromNothing(Class) {
        if (Class === undefined) {
            Class = LineHTMLNode; ///
        }
        const lineHTMLNode = _html.default.fromNothing(Class);
        return lineHTMLNode;
    }
    static fromOuterNode(Class, outerNode) {
        if (outerNode === undefined) {
            outerNode = Class; ///
            Class = LineHTMLNode; ///
        }
        const lineHTMLNode = _html.default.fromOuterNode(Class, outerNode);
        return lineHTMLNode;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvbGluZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEhUTUxOb2RlIGZyb20gXCIuLi8uLi9ub2RlL2h0bWxcIjtcblxuaW1wb3J0IHsgcmVtb3ZlLCBpbnNlcnRBZnRlcndhcmRzIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9kb21cIjtcbmltcG9ydCB7IEVNUFRZX1NUUklORywgQ0FSUklBR0VfUkVUVVJOLCBERUZBVUxUX01BWElNVU1fTElORV9DSEFSQUNURVJTIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaW5lSFRNTE5vZGUgZXh0ZW5kcyBIVE1MTm9kZSB7XG4gIGxpbmVzKGNvbnRleHQpIHtcbiAgICBjb25zdCB7IG1heGltdW1MaW5lQ2hhcmFjdGVycyA9IERFRkFVTFRfTUFYSU1VTV9MSU5FX0NIQVJBQ1RFUlMgfSA9IGNvbnRleHQsXG4gICAgICAgICAgcGxhaW5UZXh0ID0gdGhpcy5hc1BsYWluVGV4dChjb250ZXh0KSxcbiAgICAgICAgICBwbGFpblRleHRMZW5ndGggPSBwbGFpblRleHQubGVuZ3RoLFxuICAgICAgICAgIGNoYXJhY3RlcnMgPSBwbGFpblRleHRMZW5ndGgsIC8vL1xuICAgICAgICAgIGxpbmVzID0gKGNoYXJhY3RlcnMgLyBtYXhpbXVtTGluZUNoYXJhY3RlcnMpICsgMTtcblxuICAgIHJldHVybiBsaW5lcztcbiAgfVxuXG4gIGNvbnRlbnQoY29udGV4dCkge1xuICAgIGNvbnN0IHBsYWluVGV4dCA9IHRoaXMuYXNQbGFpblRleHQoY29udGV4dCksXG4gICAgICAgICAgY29udGVudCA9IHBsYWluVGV4dDsgIC8vL1xuXG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBwcmVwYXJlKGNvbnRleHQpIHtcbiAgICBjb25zdCBtYXJrZG93bk5vZGUgPSB0aGlzLmdldE1hcmtkb3duTm9kZSgpLFxuICAgICAgICAgIGZpcnN0VG9rZW5JbmRleCA9IG1hcmtkb3duTm9kZS5nZXRGaXJzdFRva2VuSW5kZXgoY29udGV4dCksXG4gICAgICAgICAgdG9rZW5JbmRleCA9IGZpcnN0VG9rZW5JbmRleDsgLy8vXG5cbiAgICBPYmplY3QuYXNzaWduKGNvbnRleHQsIHtcbiAgICAgIHRva2VuSW5kZXhcbiAgICB9KTtcbiAgfVxuXG4gIGRpc3Bvc2UoY29udGV4dCkge1xuICAgIGRlbGV0ZSBjb250ZXh0LnRva2VuSW5kZXg7XG4gIH1cblxuICByZW1vdW50KGNvbnRleHQpIHtcbiAgICBjb25zdCBkb21FbGVtZW50ID0gdGhpcy5nZXRET01FbGVtZW50KCksXG4gICAgICAgICAgcGFyZW50RE9NRWxlbWVudCA9IGRvbUVsZW1lbnQucGFyZW50RWxlbWVudCxcbiAgICAgICAgICBzaWJsaW5nRE9NRWxlbWVudCA9IGRvbUVsZW1lbnQucHJldmlvdXNTaWJsaW5nO1xuXG4gICAgdGhpcy5wcmVwYXJlKGNvbnRleHQpO1xuXG4gICAgdGhpcy51bm1vdW50KHBhcmVudERPTUVsZW1lbnQpO1xuXG4gICAgdGhpcy5tb3VudChwYXJlbnRET01FbGVtZW50LCBzaWJsaW5nRE9NRWxlbWVudCwgY29udGV4dCk7XG5cbiAgICB0aGlzLmRpc3Bvc2UoY29udGV4dCk7XG4gIH1cblxuICBtb3VudChwYXJlbnRET01FbGVtZW50LCBzaWJsaW5nRE9NRWxlbWVudCwgY29udGV4dCkge1xuICAgIGxldCBkb21FbGVtZW50O1xuXG4gICAgdGhpcy5wcmVwYXJlKGNvbnRleHQpO1xuXG4gICAgc3VwZXIubW91bnQocGFyZW50RE9NRWxlbWVudCwgc2libGluZ0RPTUVsZW1lbnQsIGNvbnRleHQpO1xuXG4gICAgZG9tRWxlbWVudCA9IHRoaXMuZ2V0RE9NRWxlbWVudCgpO1xuXG4gICAgcGFyZW50RE9NRWxlbWVudCA9IGRvbUVsZW1lbnQ7ICAvLy9cblxuICAgIGNvbnN0IGNvbnRlbnQgPSBDQVJSSUFHRV9SRVRVUk4sXG4gICAgICAgICAgdGV4dE5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjb250ZW50KTtcblxuICAgIGRvbUVsZW1lbnQgPSB0ZXh0Tm9kZTsgIC8vL1xuXG4gICAgaW5zZXJ0QWZ0ZXJ3YXJkcyhkb21FbGVtZW50LCBwYXJlbnRET01FbGVtZW50KTtcblxuICAgIGRvbUVsZW1lbnQgPSB0aGlzLmdldERPTUVsZW1lbnQoKTtcblxuICAgIHNpYmxpbmdET01FbGVtZW50ID0gZG9tRWxlbWVudDsgLy8vXG5cbiAgICB0aGlzLmRpc3Bvc2UoY29udGV4dCk7XG5cbiAgICByZXR1cm4gc2libGluZ0RPTUVsZW1lbnQ7XG4gIH1cblxuICB1bm1vdW50KHBhcmVudERPTUVsZW1lbnQpIHtcbiAgICB7XG4gICAgICBsZXQgZG9tRWxlbWVudDtcblxuICAgICAgZG9tRWxlbWVudCA9IHRoaXMuZ2V0RE9NRWxlbWVudCgpO1xuXG4gICAgICBjb25zdCBwYXJlbnRET01FbGVtZW50ID0gZG9tRWxlbWVudCwgIC8vL1xuICAgICAgICAgICAgbGFzdENoaWxkID0gZG9tRWxlbWVudC5sYXN0Q2hpbGRcblxuICAgICAgZG9tRWxlbWVudCA9IGxhc3RDaGlsZDsgIC8vL1xuXG4gICAgICByZW1vdmUoZG9tRWxlbWVudCwgcGFyZW50RE9NRWxlbWVudCk7XG4gICAgfVxuXG4gICAgc3VwZXIudW5tb3VudChwYXJlbnRET01FbGVtZW50KTtcbiAgfVxuXG4gIGFzSFRNTChpbmRlbnQsIGNvbnRleHQpIHtcbiAgICBsZXQgaHRtbDtcblxuICAgIHRoaXMucHJlcGFyZShjb250ZXh0KTtcblxuICAgIGluZGVudCA9IHRoaXMuYWRqdXN0SW5kZW50KGluZGVudCk7XG5cbiAgICBjb25zdCBjaGlsZE5vZGVzSFRNTCA9IHRoaXMuY2hpbGROb2Rlc0FzSFRNTChpbmRlbnQsIGNvbnRleHQpO1xuXG4gICAgY29uc3Qgc3RhcnRpbmdUYWcgPSB0aGlzLnN0YXJ0aW5nVGFnKGNvbnRleHQpLFxuICAgICAgICAgIGNsb3NpbmdUYWcgPSB0aGlzLmNsb3NpbmdUYWcoY29udGV4dCk7XG5cbiAgICBodG1sID0gYCR7aW5kZW50fSR7c3RhcnRpbmdUYWd9JHtjaGlsZE5vZGVzSFRNTH0ke2Nsb3NpbmdUYWd9XG5gO1xuXG4gICAgdGhpcy5kaXNwb3NlKGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGh0bWw7XG4gIH1cblxuICBhc1BsYWluVGV4dChjb250ZXh0KSB7XG4gICAgbGV0IHBsYWluVGV4dDtcblxuICAgIHRoaXMucHJlcGFyZShjb250ZXh0KTtcblxuICAgIHBsYWluVGV4dCA9IHN1cGVyLmFzUGxhaW5UZXh0KGNvbnRleHQpO1xuXG4gICAgdGhpcy5kaXNwb3NlKGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHBsYWluVGV4dDtcbiAgfVxuXG4gIGNoaWxkTm9kZXNBc1BsYWluVGV4dChjb250ZXh0KSB7XG4gICAgY29uc3QgY2hpbGROb2Rlc1BsYWluVGV4dCA9IHRoaXMucmVkdWNlQ2hpbGROb2RlKChjaGlsZE5vZGVzUGxhaW5UZXh0LCBjaGlsZE5vZGUpID0+IHtcbiAgICAgIGNvbnN0IGNoaWxkTm9kZVBsYWluVGV4dCA9IGNoaWxkTm9kZS5hc1BsYWluVGV4dChjb250ZXh0KTtcblxuICAgICAgY2hpbGROb2Rlc1BsYWluVGV4dCA9IGAke2NoaWxkTm9kZXNQbGFpblRleHR9JHtjaGlsZE5vZGVQbGFpblRleHR9YDtcblxuICAgICAgcmV0dXJuIGNoaWxkTm9kZXNQbGFpblRleHQ7XG4gICAgfSwgRU1QVFlfU1RSSU5HKTtcblxuICAgIHJldHVybiBjaGlsZE5vZGVzUGxhaW5UZXh0O1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcInNwYW5cIjtcblxuICBzdGF0aWMgY2xhc3NOYW1lID0gXCJsaW5lXCI7XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKENsYXNzKSB7XG4gICAgaWYgKENsYXNzID09PSB1bmRlZmluZWQpIHtcbiAgICAgIENsYXNzID0gTGluZUhUTUxOb2RlOyAvLy9cbiAgICB9XG5cbiAgICBjb25zdCBsaW5lSFRNTE5vZGUgPSBIVE1MTm9kZS5mcm9tTm90aGluZyhDbGFzcyk7XG5cbiAgICByZXR1cm4gbGluZUhUTUxOb2RlO1xuICB9XG5cbiAgc3RhdGljIGZyb21PdXRlck5vZGUoQ2xhc3MsIG91dGVyTm9kZSkge1xuICAgIGlmIChvdXRlck5vZGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgb3V0ZXJOb2RlID0gQ2xhc3M7ICAvLy9cblxuICAgICAgQ2xhc3MgPSBMaW5lSFRNTE5vZGU7IC8vL1xuICAgIH1cblxuICAgIGNvbnN0IGxpbmVIVE1MTm9kZSA9IEhUTUxOb2RlLmZyb21PdXRlck5vZGUoQ2xhc3MsIG91dGVyTm9kZSk7XG5cbiAgICByZXR1cm4gbGluZUhUTUxOb2RlO1xuICB9XG59XG4iXSwibmFtZXMiOlsiTGluZUhUTUxOb2RlIiwiSFRNTE5vZGUiLCJsaW5lcyIsImNvbnRleHQiLCJtYXhpbXVtTGluZUNoYXJhY3RlcnMiLCJERUZBVUxUX01BWElNVU1fTElORV9DSEFSQUNURVJTIiwicGxhaW5UZXh0IiwiYXNQbGFpblRleHQiLCJwbGFpblRleHRMZW5ndGgiLCJsZW5ndGgiLCJjaGFyYWN0ZXJzIiwiY29udGVudCIsInByZXBhcmUiLCJtYXJrZG93bk5vZGUiLCJnZXRNYXJrZG93bk5vZGUiLCJmaXJzdFRva2VuSW5kZXgiLCJnZXRGaXJzdFRva2VuSW5kZXgiLCJ0b2tlbkluZGV4IiwiT2JqZWN0IiwiYXNzaWduIiwiZGlzcG9zZSIsInJlbW91bnQiLCJkb21FbGVtZW50IiwiZ2V0RE9NRWxlbWVudCIsInBhcmVudERPTUVsZW1lbnQiLCJwYXJlbnRFbGVtZW50Iiwic2libGluZ0RPTUVsZW1lbnQiLCJwcmV2aW91c1NpYmxpbmciLCJ1bm1vdW50IiwibW91bnQiLCJDQVJSSUFHRV9SRVRVUk4iLCJ0ZXh0Tm9kZSIsImRvY3VtZW50IiwiY3JlYXRlVGV4dE5vZGUiLCJpbnNlcnRBZnRlcndhcmRzIiwibGFzdENoaWxkIiwicmVtb3ZlIiwiYXNIVE1MIiwiaW5kZW50IiwiaHRtbCIsImFkanVzdEluZGVudCIsImNoaWxkTm9kZXNIVE1MIiwiY2hpbGROb2Rlc0FzSFRNTCIsInN0YXJ0aW5nVGFnIiwiY2xvc2luZ1RhZyIsImNoaWxkTm9kZXNBc1BsYWluVGV4dCIsImNoaWxkTm9kZXNQbGFpblRleHQiLCJyZWR1Y2VDaGlsZE5vZGUiLCJjaGlsZE5vZGUiLCJjaGlsZE5vZGVQbGFpblRleHQiLCJFTVBUWV9TVFJJTkciLCJ0YWdOYW1lIiwiY2xhc3NOYW1lIiwiZnJvbU5vdGhpbmciLCJDbGFzcyIsInVuZGVmaW5lZCIsImxpbmVIVE1MTm9kZSIsImZyb21PdXRlck5vZGUiLCJvdXRlck5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU9BOzs7ZUFBcUJBOzs7NkRBTEE7cUJBRW9COzJCQUNzQzs7Ozs7O0FBRWhFLE1BQU1BLHFCQUFxQkMsYUFBUTtJQUNoREMsTUFBTUMsT0FBTyxFQUFFO1FBQ2IsTUFBTSxFQUFFQyx3QkFBd0JDLDBDQUErQixFQUFFLEdBQUdGLFNBQzlERyxZQUFZLElBQUksQ0FBQ0MsV0FBVyxDQUFDSixVQUM3Qkssa0JBQWtCRixVQUFVRyxNQUFNLEVBQ2xDQyxhQUFhRixpQkFDYk4sUUFBUSxBQUFDUSxhQUFhTix3QkFBeUI7UUFFckQsT0FBT0Y7SUFDVDtJQUVBUyxRQUFRUixPQUFPLEVBQUU7UUFDZixNQUFNRyxZQUFZLElBQUksQ0FBQ0MsV0FBVyxDQUFDSixVQUM3QlEsVUFBVUwsV0FBWSxHQUFHO1FBRS9CLE9BQU9LO0lBQ1Q7SUFFQUMsUUFBUVQsT0FBTyxFQUFFO1FBQ2YsTUFBTVUsZUFBZSxJQUFJLENBQUNDLGVBQWUsSUFDbkNDLGtCQUFrQkYsYUFBYUcsa0JBQWtCLENBQUNiLFVBQ2xEYyxhQUFhRixpQkFBaUIsR0FBRztRQUV2Q0csT0FBT0MsTUFBTSxDQUFDaEIsU0FBUztZQUNyQmM7UUFDRjtJQUNGO0lBRUFHLFFBQVFqQixPQUFPLEVBQUU7UUFDZixPQUFPQSxRQUFRYyxVQUFVO0lBQzNCO0lBRUFJLFFBQVFsQixP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