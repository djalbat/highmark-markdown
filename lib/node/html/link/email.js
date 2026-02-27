"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return EmailLinkHTMLNode;
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
class EmailLinkHTMLNode extends _html.default {
    isSimple() {
        const markdownNode = this.getMarkdownNode(), simple = markdownNode.isSimple();
        return simple;
    }
    content(context) {
        const emailAddress = this.emailAddress(context), content = emailAddress; ///
        return content;
    }
    emailAddress(context) {
        const markdownNode = this.getMarkdownNode(), emailAddress = markdownNode.emailAddress(context);
        return emailAddress;
    }
    attributeName(context) {
        const attributeName = _attributeNames.HREF_ATTRIBUTE_NAME;
        return attributeName;
    }
    attributeValue(context) {
        const emailAddress = this.emailAddress(context), attributeValue = `mailto:${emailAddress}`;
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
            (0, _dom.insertAfterwards)(domElement, parentDOMElement, siblingDOMElement);
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
            const emailAddress = this.emailAddress(context);
            plainText = emailAddress; ///
        } else {
            plainText = super.asPlainText(context);
        }
        return plainText;
    }
    childNodesAsHTML(indent, context) {
        let childNodesHTML;
        const simple = this.isSimple();
        if (simple) {
            const emailAddress = this.emailAddress(context);
            childNodesHTML = `${emailAddress}`;
        } else {
            childNodesHTML = super.childNodesAsHTML(indent, context);
        }
        return childNodesHTML;
    }
    static tagName = "a";
    static className = "email-link";
    static fromNothing() {
        return _html.default.fromNothing(EmailLinkHTMLNode);
    }
    static fromOuterNode(outerNode) {
        return _html.default.fromOuterNode(EmailLinkHTMLNode, outerNode);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvbGluay9lbWFpbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEhUTUxOb2RlIGZyb20gXCIuLi8uLi8uLi9ub2RlL2h0bWxcIjtcblxuaW1wb3J0IHsgSFJFRl9BVFRSSUJVVEVfTkFNRSB9IGZyb20gXCIuLi8uLi8uLi9hdHRyaWJ1dGVOYW1lc1wiO1xuaW1wb3J0IHsgcmVtb3ZlLCBpbnNlcnRBZnRlciwgaW5zZXJ0QWZ0ZXJ3YXJkcywgaW5zZXJ0QmVmb3JlaGFuZCB9IGZyb20gXCIuLi8uLi8uLi91dGlsaXRpZXMvZG9tXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVtYWlsTGlua0hUTUxOb2RlIGV4dGVuZHMgSFRNTE5vZGUge1xuICBpc1NpbXBsZSgpIHtcbiAgICBjb25zdCBtYXJrZG93bk5vZGUgPSB0aGlzLmdldE1hcmtkb3duTm9kZSgpLFxuICAgICAgICAgIHNpbXBsZSA9IG1hcmtkb3duTm9kZS5pc1NpbXBsZSgpO1xuXG4gICAgcmV0dXJuIHNpbXBsZTtcbiAgfVxuXG4gIGNvbnRlbnQoY29udGV4dCkge1xuICAgIGNvbnN0IGVtYWlsQWRkcmVzcyA9IHRoaXMuZW1haWxBZGRyZXNzKGNvbnRleHQpLFxuICAgICAgICAgIGNvbnRlbnQgPSBlbWFpbEFkZHJlc3M7IC8vL1xuXG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBlbWFpbEFkZHJlc3MoY29udGV4dCkge1xuICAgIGNvbnN0IG1hcmtkb3duTm9kZSA9IHRoaXMuZ2V0TWFya2Rvd25Ob2RlKCksXG4gICAgICAgICAgZW1haWxBZGRyZXNzID0gbWFya2Rvd25Ob2RlLmVtYWlsQWRkcmVzcyhjb250ZXh0KTtcblxuICAgIHJldHVybiBlbWFpbEFkZHJlc3M7XG4gIH1cblxuICBhdHRyaWJ1dGVOYW1lKGNvbnRleHQpIHtcbiAgICBjb25zdCBhdHRyaWJ1dGVOYW1lID0gSFJFRl9BVFRSSUJVVEVfTkFNRTtcblxuICAgIHJldHVybiBhdHRyaWJ1dGVOYW1lO1xuICB9XG5cbiAgYXR0cmlidXRlVmFsdWUoY29udGV4dCkge1xuICAgIGNvbnN0IGVtYWlsQWRkcmVzcyA9IHRoaXMuZW1haWxBZGRyZXNzKGNvbnRleHQpLFxuICAgICAgICAgIGF0dHJpYnV0ZVZhbHVlID0gYG1haWx0bzoke2VtYWlsQWRkcmVzc31gO1xuXG4gICAgcmV0dXJuIGF0dHJpYnV0ZVZhbHVlO1xuICB9XG5cbiAgYWRqdXN0SW5kZW50KGluZGVudCkge1xuICAgIGluZGVudCA9IG51bGw7XG5cbiAgICByZXR1cm4gaW5kZW50O1xuICB9XG5cbiAgbW91bnQocGFyZW50RE9NRWxlbWVudCwgc2libGluZ0RPTUVsZW1lbnQsIGNvbnRleHQpIHtcbiAgICBsZXQgZG9tRWxlbWVudDtcblxuICAgIGNvbnN0IHNpbXBsZSA9IHRoaXMuaXNTaW1wbGUoKTtcblxuICAgIGlmICghc2ltcGxlKSB7XG4gICAgICBzdXBlci5tb3VudChwYXJlbnRET01FbGVtZW50LCBzaWJsaW5nRE9NRWxlbWVudCwgY29udGV4dCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvbUVsZW1lbnQgPSB0aGlzLmNyZWF0ZURPTUVsZW1lbnQoY29udGV4dCk7XG5cbiAgICAgIHRoaXMuc2V0RE9NRWxlbWVudChkb21FbGVtZW50KTtcblxuICAgICAgKHNpYmxpbmdET01FbGVtZW50ICE9PSBudWxsKSA/XG4gICAgICAgIGluc2VydEFmdGVyKGRvbUVsZW1lbnQsIHBhcmVudERPTUVsZW1lbnQsIHNpYmxpbmdET01FbGVtZW50KSA6XG4gICAgICAgICAgaW5zZXJ0QmVmb3JlaGFuZChkb21FbGVtZW50LCBwYXJlbnRET01FbGVtZW50KTtcblxuICAgICAgcGFyZW50RE9NRWxlbWVudCA9IGRvbUVsZW1lbnQ7IC8vL1xuXG4gICAgICBjb25zdCBjb250ZW50ID0gdGhpcy5jb250ZW50KGNvbnRleHQpLFxuICAgICAgICAgICAgdGV4dE5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjb250ZW50KTtcblxuICAgICAgZG9tRWxlbWVudCA9IHRleHROb2RlOyAgLy8vXG5cbiAgICAgIGluc2VydEFmdGVyd2FyZHMoZG9tRWxlbWVudCwgcGFyZW50RE9NRWxlbWVudCwgc2libGluZ0RPTUVsZW1lbnQpO1xuICAgIH1cblxuICAgIGRvbUVsZW1lbnQgPSB0aGlzLmdldERPTUVsZW1lbnQoKTtcblxuICAgIHNpYmxpbmdET01FbGVtZW50ID0gZG9tRWxlbWVudDsgLy8vXG5cbiAgICByZXR1cm4gc2libGluZ0RPTUVsZW1lbnQ7XG4gIH1cblxuICB1bm1vdW50KHBhcmVudERPTUVsZW1lbnQpIHtcbiAgICBjb25zdCBzaW1wbGUgPSB0aGlzLmlzU2ltcGxlKCk7XG5cbiAgICBpZiAoIXNpbXBsZSkge1xuICAgICAgc3VwZXIudW5tb3VudChwYXJlbnRET01FbGVtZW50KTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCBkb21FbGVtZW50O1xuXG4gICAge1xuICAgICAgZG9tRWxlbWVudCA9IHRoaXMuZ2V0RE9NRWxlbWVudCgpO1xuXG4gICAgICBjb25zdCBwYXJlbnRET01FbGVtZW50ID0gZG9tRWxlbWVudCwgIC8vL1xuICAgICAgICAgICAgZmlyc3RDaGlsZCA9IGRvbUVsZW1lbnQuZmlyc3RDaGlsZDtcblxuICAgICAgZG9tRWxlbWVudCA9IGZpcnN0Q2hpbGQ7ICAvLy9cblxuICAgICAgcmVtb3ZlKGRvbUVsZW1lbnQsIHBhcmVudERPTUVsZW1lbnQpO1xuICAgIH1cblxuICAgIGRvbUVsZW1lbnQgPSB0aGlzLmdldERPTUVsZW1lbnQoKTtcblxuICAgIHJlbW92ZShkb21FbGVtZW50LCBwYXJlbnRET01FbGVtZW50KTtcblxuICAgIHRoaXMucmVzZXRET01FbGVtZW50KCk7XG4gIH1cblxuICBhc1BsYWluVGV4dChjb250ZXh0KSB7XG4gICAgbGV0IHBsYWluVGV4dDtcblxuICAgIGNvbnN0IHNpbXBsZSA9IHRoaXMuaXNTaW1wbGUoKTtcblxuICAgIGlmIChzaW1wbGUpIHtcbiAgICAgIGNvbnN0IGVtYWlsQWRkcmVzcyA9IHRoaXMuZW1haWxBZGRyZXNzKGNvbnRleHQpO1xuXG4gICAgICBwbGFpblRleHQgPSBlbWFpbEFkZHJlc3M7IC8vL1xuICAgIH0gZWxzZSB7XG4gICAgICBwbGFpblRleHQgPSBzdXBlci5hc1BsYWluVGV4dChjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGxhaW5UZXh0O1xuICB9XG5cbiAgY2hpbGROb2Rlc0FzSFRNTChpbmRlbnQsIGNvbnRleHQpIHtcbiAgICBsZXQgY2hpbGROb2Rlc0hUTUw7XG5cbiAgICBjb25zdCBzaW1wbGUgPSB0aGlzLmlzU2ltcGxlKCk7XG5cbiAgICBpZiAoc2ltcGxlKSB7XG4gICAgICBjb25zdCBlbWFpbEFkZHJlc3MgPSB0aGlzLmVtYWlsQWRkcmVzcyhjb250ZXh0KTtcblxuICAgICAgY2hpbGROb2Rlc0hUTUwgPSBgJHtlbWFpbEFkZHJlc3N9YDtcbiAgICB9IGVsc2Uge1xuICAgICAgY2hpbGROb2Rlc0hUTUwgPSBzdXBlci5jaGlsZE5vZGVzQXNIVE1MKGluZGVudCwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNoaWxkTm9kZXNIVE1MO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImFcIjtcblxuICBzdGF0aWMgY2xhc3NOYW1lID0gXCJlbWFpbC1saW5rXCI7XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkgeyByZXR1cm4gSFRNTE5vZGUuZnJvbU5vdGhpbmcoRW1haWxMaW5rSFRNTE5vZGUpOyB9XG5cbiAgc3RhdGljIGZyb21PdXRlck5vZGUob3V0ZXJOb2RlKSB7IHJldHVybiBIVE1MTm9kZS5mcm9tT3V0ZXJOb2RlKEVtYWlsTGlua0hUTUxOb2RlLCBvdXRlck5vZGUpOyB9XG59XG4iXSwibmFtZXMiOlsiRW1haWxMaW5rSFRNTE5vZGUiLCJIVE1MTm9kZSIsImlzU2ltcGxlIiwibWFya2Rvd25Ob2RlIiwiZ2V0TWFya2Rvd25Ob2RlIiwic2ltcGxlIiwiY29udGVudCIsImNvbnRleHQiLCJlbWFpbEFkZHJlc3MiLCJhdHRyaWJ1dGVOYW1lIiwiSFJFRl9BVFRSSUJVVEVfTkFNRSIsImF0dHJpYnV0ZVZhbHVlIiwiYWRqdXN0SW5kZW50IiwiaW5kZW50IiwibW91bnQiLCJwYXJlbnRET01FbGVtZW50Iiwic2libGluZ0RPTUVsZW1lbnQiLCJkb21FbGVtZW50IiwiY3JlYXRlRE9NRWxlbWVudCIsInNldERPTUVsZW1lbnQiLCJpbnNlcnRBZnRlciIsImluc2VydEJlZm9yZWhhbmQiLCJ0ZXh0Tm9kZSIsImRvY3VtZW50IiwiY3JlYXRlVGV4dE5vZGUiLCJpbnNlcnRBZnRlcndhcmRzIiwiZ2V0RE9NRWxlbWVudCIsInVubW91bnQiLCJmaXJzdENoaWxkIiwicmVtb3ZlIiwicmVzZXRET01FbGVtZW50IiwiYXNQbGFpblRleHQiLCJwbGFpblRleHQiLCJjaGlsZE5vZGVzQXNIVE1MIiwiY2hpbGROb2Rlc0hUTUwiLCJ0YWdOYW1lIiwiY2xhc3NOYW1lIiwiZnJvbU5vdGhpbmciLCJmcm9tT3V0ZXJOb2RlIiwib3V0ZXJOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFPQTs7O2VBQXFCQTs7OzZEQUxBO2dDQUVlO3FCQUNvQzs7Ozs7O0FBRXpELE1BQU1BLDBCQUEwQkMsYUFBUTtJQUNyREMsV0FBVztRQUNULE1BQU1DLGVBQWUsSUFBSSxDQUFDQyxlQUFlLElBQ25DQyxTQUFTRixhQUFhRCxRQUFRO1FBRXBDLE9BQU9HO0lBQ1Q7SUFFQUMsUUFBUUMsT0FBTyxFQUFFO1FBQ2YsTUFBTUMsZUFBZSxJQUFJLENBQUNBLFlBQVksQ0FBQ0QsVUFDakNELFVBQVVFLGNBQWMsR0FBRztRQUVqQyxPQUFPRjtJQUNUO0lBRUFFLGFBQWFELE9BQU8sRUFBRTtRQUNwQixNQUFNSixlQUFlLElBQUksQ0FBQ0MsZUFBZSxJQUNuQ0ksZUFBZUwsYUFBYUssWUFBWSxDQUFDRDtRQUUvQyxPQUFPQztJQUNUO0lBRUFDLGNBQWNGLE9B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