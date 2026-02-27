"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return HyperlinkHTMLNode;
    }
});
const _html = /*#__PURE__*/ _interop_require_default(require("../../../node/html"));
const _attributeNames = require("../../../attributeNames");
const _dom = require("../../../utilities/dom");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class HyperlinkHTMLNode extends _html.default {
    isSimple() {
        const markdownNode = this.getMarkdownNode(), simple = markdownNode.isSimple();
        return simple;
    }
    url(context) {
        const markdownNode = this.getMarkdownNode(), url = markdownNode.url(context);
        return url;
    }
    content(context) {
        const url = this.url(context), content = url; ///
        return content;
    }
    attributeName(context) {
        const attributeName = _attributeNames.HREF_ATTRIBUTE_NAME;
        return attributeName;
    }
    attributeValue(context) {
        const url = this.url(context), attributeValue = url; ///
        return attributeValue;
    }
    adjustIndent(indent) {
        indent = null;
        return indent;
    }
    mount(parentDOMElement, siblingDOMElement, context) {
        let domElement;
        const simple = this.isSimple();
        if (!simple) {
            super.mount(parentDOMElement, siblingDOMElement, context);
        } else {
            domElement = this.createDOMElement(context);
            this.setDOMElement(domElement);
            siblingDOMElement !== null ? (0, _dom.insertAfter)(domElement, parentDOMElement, siblingDOMElement) : (0, _dom.insertBeforehand)(domElement, parentDOMElement);
            parentDOMElement = domElement; ///
            const content = this.content(context), textNode = document.createTextNode(content);
            domElement = textNode; ///
            (0, _dom.insertAfterwards)(domElement, parentDOMElement);
        }
        domElement = this.getDOMElement();
        siblingDOMElement = domElement; ///
        return siblingDOMElement;
    }
    unmount(parentDOMElement) {
        const simple = this.isSimple();
        if (!simple) {
            super.unmount(parentDOMElement);
            return;
        }
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
    asPlainText(context) {
        let plainText;
        const simple = this.isSimple();
        if (simple) {
            const url = this.url(context);
            plainText = url; ///
        } else {
            plainText = super.asPlainText(context);
        }
        return plainText;
    }
    childNodesAsHTML(indent, context) {
        let childNodesHTML;
        const simple = this.isSimple();
        if (simple) {
            const url = this.url(context);
            childNodesHTML = `${url}`;
        } else {
            childNodesHTML = super.childNodesAsHTML(indent, context);
        }
        return childNodesHTML;
    }
    static tagName = "a";
    static className = "hyperlink";
    static fromNothing() {
        return _html.default.fromNothing(HyperlinkHTMLNode);
    }
    static fromOuterNode(outerNode) {
        return _html.default.fromOuterNode(HyperlinkHTMLNode, outerNode);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvbGluay9oeXBlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEhUTUxOb2RlIGZyb20gXCIuLi8uLi8uLi9ub2RlL2h0bWxcIjtcblxuaW1wb3J0IHsgSFJFRl9BVFRSSUJVVEVfTkFNRSB9IGZyb20gXCIuLi8uLi8uLi9hdHRyaWJ1dGVOYW1lc1wiO1xuaW1wb3J0IHsgcmVtb3ZlLCBpbnNlcnRBZnRlciwgaW5zZXJ0QWZ0ZXJ3YXJkcywgaW5zZXJ0QmVmb3JlaGFuZCB9IGZyb20gXCIuLi8uLi8uLi91dGlsaXRpZXMvZG9tXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEh5cGVybGlua0hUTUxOb2RlIGV4dGVuZHMgSFRNTE5vZGUge1xuICBpc1NpbXBsZSgpIHtcbiAgICBjb25zdCBtYXJrZG93bk5vZGUgPSB0aGlzLmdldE1hcmtkb3duTm9kZSgpLFxuICAgICAgICAgIHNpbXBsZSA9IG1hcmtkb3duTm9kZS5pc1NpbXBsZSgpO1xuXG4gICAgcmV0dXJuIHNpbXBsZTtcbiAgfVxuXG4gIHVybChjb250ZXh0KSB7XG4gICAgY29uc3QgbWFya2Rvd25Ob2RlID0gdGhpcy5nZXRNYXJrZG93bk5vZGUoKSxcbiAgICAgICAgICB1cmwgPSBtYXJrZG93bk5vZGUudXJsKGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIGNvbnRlbnQoY29udGV4dCkge1xuICAgIGNvbnN0IHVybCA9IHRoaXMudXJsKGNvbnRleHQpLFxuICAgICAgICAgIGNvbnRlbnQgPSB1cmw7ICAvLy9cblxuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgYXR0cmlidXRlTmFtZShjb250ZXh0KSB7XG4gICAgY29uc3QgYXR0cmlidXRlTmFtZSA9IEhSRUZfQVRUUklCVVRFX05BTUU7XG5cbiAgICByZXR1cm4gYXR0cmlidXRlTmFtZTtcbiAgfVxuXG4gIGF0dHJpYnV0ZVZhbHVlKGNvbnRleHQpIHtcbiAgICBjb25zdCB1cmwgPSB0aGlzLnVybChjb250ZXh0KSxcbiAgICAgICAgICBhdHRyaWJ1dGVWYWx1ZSA9IHVybDsgLy8vXG5cbiAgICByZXR1cm4gYXR0cmlidXRlVmFsdWU7XG4gIH1cblxuICBhZGp1c3RJbmRlbnQoaW5kZW50KSB7XG4gICAgaW5kZW50ID0gbnVsbDtcblxuICAgIHJldHVybiBpbmRlbnQ7XG4gIH1cblxuICBtb3VudChwYXJlbnRET01FbGVtZW50LCBzaWJsaW5nRE9NRWxlbWVudCwgY29udGV4dCkge1xuICAgIGxldCBkb21FbGVtZW50O1xuXG4gICAgY29uc3Qgc2ltcGxlID0gdGhpcy5pc1NpbXBsZSgpO1xuXG4gICAgaWYgKCFzaW1wbGUpIHtcbiAgICAgIHN1cGVyLm1vdW50KHBhcmVudERPTUVsZW1lbnQsIHNpYmxpbmdET01FbGVtZW50LCBjb250ZXh0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZG9tRWxlbWVudCA9IHRoaXMuY3JlYXRlRE9NRWxlbWVudChjb250ZXh0KTtcblxuICAgICAgdGhpcy5zZXRET01FbGVtZW50KGRvbUVsZW1lbnQpO1xuXG4gICAgICAoc2libGluZ0RPTUVsZW1lbnQgIT09IG51bGwpID9cbiAgICAgICAgaW5zZXJ0QWZ0ZXIoZG9tRWxlbWVudCwgcGFyZW50RE9NRWxlbWVudCwgc2libGluZ0RPTUVsZW1lbnQpIDpcbiAgICAgICAgICBpbnNlcnRCZWZvcmVoYW5kKGRvbUVsZW1lbnQsIHBhcmVudERPTUVsZW1lbnQpO1xuXG4gICAgICBwYXJlbnRET01FbGVtZW50ID0gZG9tRWxlbWVudDsgLy8vXG5cbiAgICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLmNvbnRlbnQoY29udGV4dCksXG4gICAgICAgICAgICB0ZXh0Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNvbnRlbnQpO1xuXG4gICAgICBkb21FbGVtZW50ID0gdGV4dE5vZGU7ICAvLy9cblxuICAgICAgaW5zZXJ0QWZ0ZXJ3YXJkcyhkb21FbGVtZW50LCBwYXJlbnRET01FbGVtZW50KTtcbiAgICB9XG5cbiAgICBkb21FbGVtZW50ID0gdGhpcy5nZXRET01FbGVtZW50KCk7XG5cbiAgICBzaWJsaW5nRE9NRWxlbWVudCA9IGRvbUVsZW1lbnQ7IC8vL1xuXG4gICAgcmV0dXJuIHNpYmxpbmdET01FbGVtZW50O1xuICB9XG5cbiAgdW5tb3VudChwYXJlbnRET01FbGVtZW50KSB7XG4gICAgY29uc3Qgc2ltcGxlID0gdGhpcy5pc1NpbXBsZSgpO1xuXG4gICAgaWYgKCFzaW1wbGUpIHtcbiAgICAgIHN1cGVyLnVubW91bnQocGFyZW50RE9NRWxlbWVudCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgZG9tRWxlbWVudDtcblxuICAgIHtcbiAgICAgIGRvbUVsZW1lbnQgPSB0aGlzLmdldERPTUVsZW1lbnQoKTtcblxuICAgICAgY29uc3QgcGFyZW50RE9NRWxlbWVudCA9IGRvbUVsZW1lbnQsICAvLy9cbiAgICAgICAgICAgIGZpcnN0Q2hpbGQgPSBkb21FbGVtZW50LmZpcnN0Q2hpbGQ7XG5cbiAgICAgIGRvbUVsZW1lbnQgPSBmaXJzdENoaWxkOyAgLy8vXG5cbiAgICAgIHJlbW92ZShkb21FbGVtZW50LCBwYXJlbnRET01FbGVtZW50KTtcbiAgICB9XG5cbiAgICBkb21FbGVtZW50ID0gdGhpcy5nZXRET01FbGVtZW50KCk7XG5cbiAgICByZW1vdmUoZG9tRWxlbWVudCwgcGFyZW50RE9NRWxlbWVudCk7XG5cbiAgICB0aGlzLnJlc2V0RE9NRWxlbWVudCgpO1xuICB9XG5cbiAgYXNQbGFpblRleHQoY29udGV4dCkge1xuICAgIGxldCBwbGFpblRleHQ7XG5cbiAgICBjb25zdCBzaW1wbGUgPSB0aGlzLmlzU2ltcGxlKCk7XG5cbiAgICBpZiAoc2ltcGxlKSB7XG4gICAgICBjb25zdCB1cmwgPSB0aGlzLnVybChjb250ZXh0KTtcblxuICAgICAgcGxhaW5UZXh0ID0gdXJsOyAvLy9cbiAgICB9IGVsc2Uge1xuICAgICAgcGxhaW5UZXh0ID0gc3VwZXIuYXNQbGFpblRleHQoY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBsYWluVGV4dDtcbiAgfVxuXG4gIGNoaWxkTm9kZXNBc0hUTUwoaW5kZW50LCBjb250ZXh0KSB7XG4gICAgbGV0IGNoaWxkTm9kZXNIVE1MO1xuXG4gICAgY29uc3Qgc2ltcGxlID0gdGhpcy5pc1NpbXBsZSgpO1xuXG4gICAgaWYgKHNpbXBsZSkge1xuICAgICAgY29uc3QgdXJsID0gdGhpcy51cmwoY29udGV4dCk7XG5cbiAgICAgIGNoaWxkTm9kZXNIVE1MID0gYCR7dXJsfWA7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNoaWxkTm9kZXNIVE1MID0gc3VwZXIuY2hpbGROb2Rlc0FzSFRNTChpbmRlbnQsIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiBjaGlsZE5vZGVzSFRNTDtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJhXCI7XG5cbiAgc3RhdGljIGNsYXNzTmFtZSA9IFwiaHlwZXJsaW5rXCI7XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkgeyByZXR1cm4gSFRNTE5vZGUuZnJvbU5vdGhpbmcoSHlwZXJsaW5rSFRNTE5vZGUpOyB9XG5cbiAgc3RhdGljIGZyb21PdXRlck5vZGUob3V0ZXJOb2RlKSB7IHJldHVybiBIVE1MTm9kZS5mcm9tT3V0ZXJOb2RlKEh5cGVybGlua0hUTUxOb2RlLCBvdXRlck5vZGUpOyB9XG59XG4iXSwibmFtZXMiOlsiSHlwZXJsaW5rSFRNTE5vZGUiLCJIVE1MTm9kZSIsImlzU2ltcGxlIiwibWFya2Rvd25Ob2RlIiwiZ2V0TWFya2Rvd25Ob2RlIiwic2ltcGxlIiwidXJsIiwiY29udGV4dCIsImNvbnRlbnQiLCJhdHRyaWJ1dGVOYW1lIiwiSFJFRl9BVFRSSUJVVEVfTkFNRSIsImF0dHJpYnV0ZVZhbHVlIiwiYWRqdXN0SW5kZW50IiwiaW5kZW50IiwibW91bnQiLCJwYXJlbnRET01FbGVtZW50Iiwic2libGluZ0RPTUVsZW1lbnQiLCJkb21FbGVtZW50IiwiY3JlYXRlRE9NRWxlbWVudCIsInNldERPTUVsZW1lbnQiLCJpbnNlcnRBZnRlciIsImluc2VydEJlZm9yZWhhbmQiLCJ0ZXh0Tm9kZSIsImRvY3VtZW50IiwiY3JlYXRlVGV4dE5vZGUiLCJpbnNlcnRBZnRlcndhcmRzIiwiZ2V0RE9NRWxlbWVudCIsInVubW91bnQiLCJmaXJzdENoaWxkIiwicmVtb3ZlIiwicmVzZXRET01FbGVtZW50IiwiYXNQbGFpblRleHQiLCJwbGFpblRleHQiLCJjaGlsZE5vZGVzQXNIVE1MIiwiY2hpbGROb2Rlc0hUTUwiLCJ0YWdOYW1lIiwiY2xhc3NOYW1lIiwiZnJvbU5vdGhpbmciLCJmcm9tT3V0ZXJOb2RlIiwib3V0ZXJOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFPQTs7O2VBQXFCQTs7OzZEQUxBO2dDQUVlO3FCQUNvQzs7Ozs7O0FBRXpELE1BQU1BLDBCQUEwQkMsYUFBUTtJQUNyREMsV0FBVztRQUNULE1BQU1DLGVBQWUsSUFBSSxDQUFDQyxlQUFlLElBQ25DQyxTQUFTRixhQUFhRCxRQUFRO1FBRXBDLE9BQU9HO0lBQ1Q7SUFFQUMsSUFBSUMsT0FBTyxFQUFFO1FBQ1gsTUFBTUosZUFBZSxJQUFJLENBQUNDLGVBQWUsSUFDbkNFLE1BQU1ILGFBQWFHLEdBQUcsQ0FBQ0M7UUFFN0IsT0FBT0Q7SUFDVDtJQUVBRSxRQUFRRCxPQUFPLEVBQUU7UUFDZixNQUFNRCxNQUFNLElBQUksQ0FBQ0EsR0FBRyxDQUFDQyxVQUNmQyxVQUFVRixLQUFNLEdBQUc7UUFFekIsT0FBT0U7SUFDVDtJQUVBQyxjQUFjRixPQUFPLEVBQUU7UUFDckIsTUFBTUUsZ0JBQWdCQyxtQ0FBbUI7UUFFekMsT0FBT0Q7SUFDVDtJQUVBRSxlQUFlSixPQUFPLEVBQUU7UUFDdEIsTUFBTUQsTUFBTSxJQUFJLENBQUNBLEdBQUcsQ0FBQ0MsVUFDZkksaUJBQWlCTCxLQUFLLEdBQUc7UUFFL0IsT0FBT0s7SUFDVDtJQUVBQyxhQUFhQyxNQUFNLEVBQUU7UUFDbkJB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