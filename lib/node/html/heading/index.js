"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return IndexHeadingHTMLNode;
    }
});
const _html = /*#__PURE__*/ _interop_require_default(require("../../../node/html"));
const _markdown = require("../../../ruleNames/markdown");
const _dom = require("../../../utilities/dom");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class IndexHeadingHTMLNode extends _html.default {
    constructor(outerNode, parentNode, childNodes, domElement, letter){
        super(outerNode, parentNode, childNodes, domElement);
        this.letter = letter;
    }
    getLetter() {
        return this.letter;
    }
    getRuleName() {
        const ruleName = _markdown.INDEX_HEADING_MARKDOWN_RULE_NAME;
        return ruleName;
    }
    mount(parentDOMElement, siblingDOMElement, context) {
        let domElement;
        domElement = this.createDOMElement(context);
        this.setDOMElement(domElement);
        siblingDOMElement !== null ? (0, _dom.insertAfter)(domElement, parentDOMElement, siblingDOMElement) : (0, _dom.insertBeforehand)(domElement, parentDOMElement);
        parentDOMElement = domElement; ///
        const content = this.letter, textNode = document.createTextNode(content);
        domElement = textNode; ///
        (0, _dom.insertAfterwards)(domElement, parentDOMElement);
        domElement = this.getDOMElement();
        siblingDOMElement = domElement; ///
        return siblingDOMElement;
    }
    unmount(parentDOMElement) {
        let domElement;
        {
            domElement = this.getDOMElement();
            const parentDOMElement = domElement, firstChild = domElement.firstChild;
            domElement = firstChild; ///
            (0, _dom.remove)(domElement, parentDOMElement);
        }
        domElement = this.getDOMElement();
        (0, _dom.remove)(domElement, parentDOMElement);
        this.resetDOMElement();
    }
    asHTML(indent, context) {
        let html;
        indent = this.adjustIndent(indent);
        const childNodesHTML = this.childNodesAsHTML(indent, context);
        const startingTag = this.startingTag(context), closingTag = this.closingTag(context);
        html = `${indent}${startingTag}${childNodesHTML}${closingTag}
`;
        return html;
    }
    childNodesAsHTML(indent, context) {
        const childNodesHTML = this.letter;
        return childNodesHTML;
    }
    asString() {
        const ruleName = this.getRuleName(), string = ruleName; ///
        return string;
    }
    static tagName = "h3";
    static className = "index";
    static fromLetter(letter) {
        const indexHeadingHTMLNode = _html.default.fromNothing(IndexHeadingHTMLNode, letter);
        return indexHeadingHTMLNode;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvaGVhZGluZy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEhUTUxOb2RlIGZyb20gXCIuLi8uLi8uLi9ub2RlL2h0bWxcIjtcblxuaW1wb3J0IHsgSU5ERVhfSEVBRElOR19NQVJLRE9XTl9SVUxFX05BTUUgfSBmcm9tIFwiLi4vLi4vLi4vcnVsZU5hbWVzL21hcmtkb3duXCI7XG5pbXBvcnQgeyByZW1vdmUsIGluc2VydEFmdGVyLCBpbnNlcnRBZnRlcndhcmRzLCBpbnNlcnRCZWZvcmVoYW5kIH0gZnJvbSBcIi4uLy4uLy4uL3V0aWxpdGllcy9kb21cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXhIZWFkaW5nSFRNTE5vZGUgZXh0ZW5kcyBIVE1MTm9kZSB7XG4gIGNvbnN0cnVjdG9yKG91dGVyTm9kZSwgcGFyZW50Tm9kZSwgY2hpbGROb2RlcywgZG9tRWxlbWVudCwgbGV0dGVyKSB7XG4gICAgc3VwZXIob3V0ZXJOb2RlLCBwYXJlbnROb2RlLCBjaGlsZE5vZGVzLCBkb21FbGVtZW50KTtcblxuICAgIHRoaXMubGV0dGVyID0gbGV0dGVyO1xuICB9XG5cbiAgZ2V0TGV0dGVyKCkge1xuICAgIHJldHVybiB0aGlzLmxldHRlcjtcbiAgfVxuXG4gIGdldFJ1bGVOYW1lKCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gSU5ERVhfSEVBRElOR19NQVJLRE9XTl9SVUxFX05BTUU7XG5cbiAgICByZXR1cm4gcnVsZU5hbWU7XG4gIH1cblxuICBtb3VudChwYXJlbnRET01FbGVtZW50LCBzaWJsaW5nRE9NRWxlbWVudCwgY29udGV4dCkge1xuICAgIGxldCBkb21FbGVtZW50O1xuXG4gICAgZG9tRWxlbWVudCA9IHRoaXMuY3JlYXRlRE9NRWxlbWVudChjb250ZXh0KTtcblxuICAgIHRoaXMuc2V0RE9NRWxlbWVudChkb21FbGVtZW50KTtcblxuICAgIChzaWJsaW5nRE9NRWxlbWVudCAhPT0gbnVsbCkgP1xuICAgICAgaW5zZXJ0QWZ0ZXIoZG9tRWxlbWVudCwgcGFyZW50RE9NRWxlbWVudCwgc2libGluZ0RPTUVsZW1lbnQpIDpcbiAgICAgICAgaW5zZXJ0QmVmb3JlaGFuZChkb21FbGVtZW50LCBwYXJlbnRET01FbGVtZW50KTtcblxuICAgIHBhcmVudERPTUVsZW1lbnQgPSBkb21FbGVtZW50OyAvLy9cblxuICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLmxldHRlciwgIC8vL1xuICAgICAgICAgIHRleHROb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY29udGVudCk7XG5cbiAgICBkb21FbGVtZW50ID0gdGV4dE5vZGU7ICAvLy9cblxuICAgIGluc2VydEFmdGVyd2FyZHMoZG9tRWxlbWVudCwgcGFyZW50RE9NRWxlbWVudCk7XG5cbiAgICBkb21FbGVtZW50ID0gdGhpcy5nZXRET01FbGVtZW50KCk7XG5cbiAgICBzaWJsaW5nRE9NRWxlbWVudCA9IGRvbUVsZW1lbnQ7IC8vL1xuXG4gICAgcmV0dXJuIHNpYmxpbmdET01FbGVtZW50O1xuICB9XG5cbiAgdW5tb3VudChwYXJlbnRET01FbGVtZW50KSB7XG4gICAgbGV0IGRvbUVsZW1lbnQ7XG5cbiAgICB7XG4gICAgICBkb21FbGVtZW50ID0gdGhpcy5nZXRET01FbGVtZW50KCk7XG5cbiAgICAgIGNvbnN0IHBhcmVudERPTUVsZW1lbnQgPSBkb21FbGVtZW50LCAgLy8vXG4gICAgICAgICAgICBmaXJzdENoaWxkID0gZG9tRWxlbWVudC5maXJzdENoaWxkO1xuXG4gICAgICBkb21FbGVtZW50ID0gZmlyc3RDaGlsZDsgIC8vL1xuXG4gICAgICByZW1vdmUoZG9tRWxlbWVudCwgcGFyZW50RE9NRWxlbWVudCk7XG4gICAgfVxuXG4gICAgZG9tRWxlbWVudCA9IHRoaXMuZ2V0RE9NRWxlbWVudCgpO1xuXG4gICAgcmVtb3ZlKGRvbUVsZW1lbnQsIHBhcmVudERPTUVsZW1lbnQpO1xuXG4gICAgdGhpcy5yZXNldERPTUVsZW1lbnQoKTtcbiAgfVxuXG4gIGFzSFRNTChpbmRlbnQsIGNvbnRleHQpIHtcbiAgICBsZXQgaHRtbDtcblxuICAgIGluZGVudCA9IHRoaXMuYWRqdXN0SW5kZW50KGluZGVudCk7XG5cbiAgICBjb25zdCBjaGlsZE5vZGVzSFRNTCA9IHRoaXMuY2hpbGROb2Rlc0FzSFRNTChpbmRlbnQsIGNvbnRleHQpO1xuXG4gICAgY29uc3Qgc3RhcnRpbmdUYWcgPSB0aGlzLnN0YXJ0aW5nVGFnKGNvbnRleHQpLFxuICAgICAgICAgIGNsb3NpbmdUYWcgPSB0aGlzLmNsb3NpbmdUYWcoY29udGV4dCk7XG5cbiAgICBodG1sID0gYCR7aW5kZW50fSR7c3RhcnRpbmdUYWd9JHtjaGlsZE5vZGVzSFRNTH0ke2Nsb3NpbmdUYWd9XG5gO1xuXG4gICAgcmV0dXJuIGh0bWw7XG4gIH1cblxuICBjaGlsZE5vZGVzQXNIVE1MKGluZGVudCwgY29udGV4dCkge1xuICAgIGNvbnN0IGNoaWxkTm9kZXNIVE1MID0gdGhpcy5sZXR0ZXI7XG5cbiAgICByZXR1cm4gY2hpbGROb2Rlc0hUTUw7XG4gIH1cblxuICBhc1N0cmluZygpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IHRoaXMuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICBzdHJpbmcgPSBydWxlTmFtZTsgIC8vL1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJoM1wiO1xuXG4gIHN0YXRpYyBjbGFzc05hbWUgPSBcImluZGV4XCI7XG5cbiAgc3RhdGljIGZyb21MZXR0ZXIobGV0dGVyKSB7XG4gICAgY29uc3QgaW5kZXhIZWFkaW5nSFRNTE5vZGUgPSBIVE1MTm9kZS5mcm9tTm90aGluZyhJbmRleEhlYWRpbmdIVE1MTm9kZSwgbGV0dGVyKTtcblxuICAgIHJldHVybiBpbmRleEhlYWRpbmdIVE1MTm9kZTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkluZGV4SGVhZGluZ0hUTUxOb2RlIiwiSFRNTE5vZGUiLCJvdXRlck5vZGUiLCJwYXJlbnROb2RlIiwiY2hpbGROb2RlcyIsImRvbUVsZW1lbnQiLCJsZXR0ZXIiLCJnZXRMZXR0ZXIiLCJnZXRSdWxlTmFtZSIsInJ1bGVOYW1lIiwiSU5ERVhfSEVBRElOR19NQVJLRE9XTl9SVUxFX05BTUUiLCJtb3VudCIsInBhcmVudERPTUVsZW1lbnQiLCJzaWJsaW5nRE9NRWxlbWVudCIsImNvbnRleHQiLCJjcmVhdGVET01FbGVtZW50Iiwic2V0RE9NRWxlbWVudCIsImluc2VydEFmdGVyIiwiaW5zZXJ0QmVmb3JlaGFuZCIsImNvbnRlbnQiLCJ0ZXh0Tm9kZSIsImRvY3VtZW50IiwiY3JlYXRlVGV4dE5vZGUiLCJpbnNlcnRBZnRlcndhcmRzIiwiZ2V0RE9NRWxlbWVudCIsInVubW91bnQiLCJmaXJzdENoaWxkIiwicmVtb3ZlIiwicmVzZXRET01FbGVtZW50IiwiYXNIVE1MIiwiaW5kZW50IiwiaHRtbCIsImFkanVzdEluZGVudCIsImNoaWxkTm9kZXNIVE1MIiwiY2hpbGROb2Rlc0FzSFRNTCIsInN0YXJ0aW5nVGFnIiwiY2xvc2luZ1RhZyIsImFzU3RyaW5nIiwic3RyaW5nIiwidGFnTmFtZSIsImNsYXNzTmFtZSIsImZyb21MZXR0ZXIiLCJpbmRleEhlYWRpbmdIVE1MTm9kZSIsImZyb21Ob3RoaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFPQTs7O2VBQXFCQTs7OzZEQUxBOzBCQUU0QjtxQkFDdUI7Ozs7OztBQUV6RCxNQUFNQSw2QkFBNkJDLGFBQVE7SUFDeEQsWUFBWUMsU0FBUyxFQUFFQyxVQUFVLEVBQUVDLFVBQVUsRUFBRUMsVUFBVSxFQUFFQyxNQUFNLENBQUU7UUFDakUsS0FBSyxDQUFDSixXQUFXQyxZQUFZQyxZQUFZQztRQUV6QyxJQUFJLENBQUNDLE1BQU0sR0FBR0E7SUFDaEI7SUFFQUMsWUFBWTtRQUNWLE9BQU8sSUFBSSxDQUFDRCxNQUFNO0lBQ3BCO0lBRUFFLGNBQWM7UUFDWixNQUFNQyxXQUFXQywwQ0FBZ0M7UUFFakQsT0FBT0Q7SUFDVDtJQUVBRSxNQUFNQyxnQkFBZ0IsRUFBRUMsaUJBQWlCLEVBQUVDLE9BQU8sRUFBRTtRQUNsRCxJQUFJVDtRQUVKQSxhQUFhLElBQUksQ0FBQ1UsZ0JBQWdCLENBQUNEO1FBRW5DLElBQUksQ0FBQ0UsYUFBYSxDQUFDWDtRQUVsQlEsc0JBQXNCLE9BQ3JCSSxJQUFBQSxnQkFBVyxFQUFDWixZQUFZTyxrQkFBa0JDLHFCQUN4Q0ssSUFBQUEscUJBQWdCLEVBQUNiLFlBQVlPO1FBRWpDQSxtQkFBbUJQLFlBQVksR0FBRztRQUVsQyxNQUFNYyxVQUFVLElBQUksQ0FBQ2IsTUFBTSxFQUNyQmMsV0FBV0MsU0FBU0MsY0FBYyxDQUFDSDtRQUV6Q2QsYUFBYWUsVUFBVyxHQUFHO1FBRTNCRyxJQUFBQSxxQkFBZ0IsRUFBQ2xCLFlBQVlPO1FBRTdCUCxhQUFhLElBQUksQ0FBQ21CLGFBQWE7UUFFL0JYLG9CQUFvQlIsWUFBWSxHQUFHO1FBRW5DLE9BQU9RO0lBQ1Q7SUFFQVksUUFBUWIsZ0JBQWdCLEVBQUU7UUFDeEIsSUFBSVA7UUFFSjtZQUNFQSxhQUFhLElBQUksQ0FBQ21CLGFBQWE7WUFFL0IsTUFBTVosbUJBQW1CUCxZQUNuQnFCLGFBQWFyQixXQUFXcUIsVUFBVTtZQUV4Q3JCLGFBQWFxQixZQUFhLEdBQUc7WUFFN0JDLElBQUFBLFdBQU0sRUFBQ3RCLFlBQVlPO1FBQ3JCO1FBRUFQLGFBQWEsSUFBSSxDQUFDbUIsYUFBYTtRQUUvQkcsSUFBQUEsV0FBTSxFQUFDdEIsWUFBWU87UUFFbkIsSUFBSSxDQUFDZ0IsZUFBZTtJQUN0QjtJQUVBQyxPQUFPQyxNQUFNLEVBQUVoQixPQUFPLEVBQUU7UUFDdEIsSUFBSWlCO1FBRUpELFNBQVMsSUFBSSxDQUFDRSxZQUFZLENBQUNGO1FBRTNCLE1BQU1HLGlCQUFpQixJQUFJLENBQUNDLGdCQUFnQixDQUFDSixRQUFRaEI7UUFFckQsTUFBTXFCLGNBQWMsSUFBSSxDQUFDQSxXQUFXLENBQUNyQixVQUMvQnNCLGFBQWEsSUFBSSxDQUFDQSxVQUFVLENBQUN0QjtRQUVuQ2lCLE9BQU8sR0FBR0QsU0FBU0ssY0FBY0YsaUJBQWlCRyxXQUFXO0FBQ2pFLENBQUM7UUFFRyxPQUFPTDtJQUNUO0lBRUFHLGlCQUFpQkosTUFBTSxFQUFFaEIsT0FBTyxFQUFFO1FBQ2hDLE1BQU1tQixpQkFBaUIsSUFBSSxDQUFDM0IsTUFBTTtRQUVsQyxPQUFPMkI7SUFDVDtJQUVBSSxXQUFXO1FBQ1QsTUFBTTVCLFdBQVcsSUFBSSxDQUFDRCxXQUFXLElBQzNCOEIsU0FBUzdCLFVBQVcsR0FBRztRQUU3QixPQUFPNkI7SUFDVDtJQUVBLE9BQU9DLFVBQVUsS0FBSztJQUV0QixPQUFPQyxZQUFZLFFBQVE7SUFFM0IsT0FBT0MsV0FBV25DLE1BQU0sRUFBRTtRQUN4QixNQUFNb0MsdUJBQXVCekMsYUFBUSxDQUFDMEMsV0FBVyxDQUFDM0Msc0JBQXNCTTtRQUV4RSxPQUFPb0M7SUFDVDtBQUNGIn0=