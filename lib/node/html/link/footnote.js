"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return FootnoteLinkHTMLNode;
    }
});
const _html = /*#__PURE__*/ _interop_require_default(require("../../../node/html"));
const _constants = require("../../../constants");
const _prepends = require("../../../prepends");
const _attributeNames = require("../../../attributeNames");
const _dom = require("../../../utilities/dom");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class FootnoteLinkHTMLNode extends _html.default {
    constructor(outerNode, parentNode, childNodes, domElement, number){
        super(outerNode, parentNode, childNodes, domElement);
        this.number = number;
    }
    getNumber() {
        return this.number;
    }
    setNumber(number) {
        this.unmountNumber();
        this.number = number;
        this.mountNumber();
    }
    resetNumber() {
        const number = null;
        this.setNumber(number);
    }
    identifier(context) {
        const markdownNode = this.getMarkdownNode(), identifier = markdownNode.identifier(context);
        return identifier;
    }
    attributeName(context) {
        const attributeName = _attributeNames.HREF_ATTRIBUTE_NAME;
        return attributeName;
    }
    attributeValue(context) {
        const prepend = _prepends.FOOTNOTE_PREPEND, identifier = this.identifier(context), attributeValue = `#${prepend}-${identifier}`; ///
        return attributeValue;
    }
    adjustIndent(indent) {
        indent = null;
        return indent;
    }
    mount(parentDOMElement, siblingDOMElement, context) {
        const domElement = this.createDOMElement(context);
        this.setDOMElement(domElement);
        siblingDOMElement !== null ? (0, _dom.insertAfter)(domElement, parentDOMElement, siblingDOMElement) : (0, _dom.insertBeforehand)(domElement, parentDOMElement);
        this.mountNumber();
        siblingDOMElement = domElement; ///
        return siblingDOMElement;
    }
    unmount(parentDOMElement) {
        const domElement = this.getDOMElement();
        this.unmountNumber();
        (0, _dom.remove)(domElement, parentDOMElement);
        this.resetDOMElement();
    }
    asPlainText(context) {
        const plainText = _constants.EMPTY_STRING;
        return plainText;
    }
    childNodesAsHTML(indent, context) {
        const content = this.number, childNodesHTML = content; ///
        return childNodesHTML;
    }
    mountNumber() {
        if (this.number === null) {
            return;
        }
        let domElement;
        domElement = this.getDOMElement();
        if (domElement === null) {
            return;
        }
        const parentDOMElement = domElement, content = this.number, textNode = document.createTextNode(content);
        domElement = textNode; ///
        (0, _dom.insertAfterwards)(domElement, parentDOMElement);
    }
    unmountNumber() {
        if (this.number === null) {
            return;
        }
        let domElement;
        domElement = this.getDOMElement();
        if (domElement === null) {
            return;
        }
        const parentDOMElement = domElement, firstChild = domElement.firstChild;
        domElement = firstChild; ///
        (0, _dom.remove)(domElement, parentDOMElement);
    }
    static tagName = "a";
    static className = "footnote";
    static fromNothing() {
        const number = null, footnoteLinkHTMLNode = _html.default.fromNothing(FootnoteLinkHTMLNode, number);
        return footnoteLinkHTMLNode;
    }
    static fromOuterNode(outerNode) {
        const number = null, footnoteLinkHTMLNode = _html.default.fromOuterNode(FootnoteLinkHTMLNode, outerNode, number);
        return footnoteLinkHTMLNode;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvbGluay9mb290bm90ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEhUTUxOb2RlIGZyb20gXCIuLi8uLi8uLi9ub2RlL2h0bWxcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uLy4uLy4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgRk9PVE5PVEVfUFJFUEVORCB9IGZyb20gXCIuLi8uLi8uLi9wcmVwZW5kc1wiO1xuaW1wb3J0IHsgSFJFRl9BVFRSSUJVVEVfTkFNRSB9IGZyb20gXCIuLi8uLi8uLi9hdHRyaWJ1dGVOYW1lc1wiO1xuaW1wb3J0IHsgcmVtb3ZlLCBpbnNlcnRBZnRlciwgaW5zZXJ0QWZ0ZXJ3YXJkcywgaW5zZXJ0QmVmb3JlaGFuZCB9IGZyb20gXCIuLi8uLi8uLi91dGlsaXRpZXMvZG9tXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvb3Rub3RlTGlua0hUTUxOb2RlIGV4dGVuZHMgSFRNTE5vZGUge1xuICBjb25zdHJ1Y3RvcihvdXRlck5vZGUsIHBhcmVudE5vZGUsIGNoaWxkTm9kZXMsIGRvbUVsZW1lbnQsIG51bWJlcikge1xuICAgIHN1cGVyKG91dGVyTm9kZSwgcGFyZW50Tm9kZSwgY2hpbGROb2RlcywgZG9tRWxlbWVudCk7XG5cbiAgICB0aGlzLm51bWJlciA9IG51bWJlcjtcbiAgfVxuXG4gIGdldE51bWJlcigpIHtcbiAgICByZXR1cm4gdGhpcy5udW1iZXI7XG4gIH1cblxuICBzZXROdW1iZXIobnVtYmVyKSB7XG4gICAgdGhpcy51bm1vdW50TnVtYmVyKCk7XG5cbiAgICB0aGlzLm51bWJlciA9IG51bWJlcjtcblxuICAgIHRoaXMubW91bnROdW1iZXIoKTtcbiAgfVxuXG4gIHJlc2V0TnVtYmVyKCkge1xuICAgIGNvbnN0IG51bWJlciA9IG51bGw7XG5cbiAgICB0aGlzLnNldE51bWJlcihudW1iZXIpO1xuICB9XG5cbiAgaWRlbnRpZmllcihjb250ZXh0KSB7XG4gICAgY29uc3QgbWFya2Rvd25Ob2RlID0gdGhpcy5nZXRNYXJrZG93bk5vZGUoKSxcbiAgICAgICAgICBpZGVudGlmaWVyID0gbWFya2Rvd25Ob2RlLmlkZW50aWZpZXIoY29udGV4dCk7XG5cbiAgICByZXR1cm4gaWRlbnRpZmllcjtcbiAgfVxuXG4gIGF0dHJpYnV0ZU5hbWUoY29udGV4dCkge1xuICAgIGNvbnN0IGF0dHJpYnV0ZU5hbWUgPSBIUkVGX0FUVFJJQlVURV9OQU1FO1xuXG4gICAgcmV0dXJuIGF0dHJpYnV0ZU5hbWU7XG4gIH1cblxuICBhdHRyaWJ1dGVWYWx1ZShjb250ZXh0KSB7XG4gICAgY29uc3QgcHJlcGVuZCA9IEZPT1ROT1RFX1BSRVBFTkQsXG4gICAgICAgICAgaWRlbnRpZmllciA9IHRoaXMuaWRlbnRpZmllcihjb250ZXh0KSxcbiAgICAgICAgICBhdHRyaWJ1dGVWYWx1ZSA9IGAjJHtwcmVwZW5kfS0ke2lkZW50aWZpZXJ9YDsgLy8vXG5cbiAgICByZXR1cm4gYXR0cmlidXRlVmFsdWU7XG4gIH1cblxuICBhZGp1c3RJbmRlbnQoaW5kZW50KSB7XG4gICAgaW5kZW50ID0gbnVsbDtcblxuICAgIHJldHVybiBpbmRlbnQ7XG4gIH1cblxuICBtb3VudChwYXJlbnRET01FbGVtZW50LCBzaWJsaW5nRE9NRWxlbWVudCwgY29udGV4dCkge1xuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSB0aGlzLmNyZWF0ZURPTUVsZW1lbnQoY29udGV4dCk7XG5cbiAgICB0aGlzLnNldERPTUVsZW1lbnQoZG9tRWxlbWVudCk7XG5cbiAgICAoc2libGluZ0RPTUVsZW1lbnQgIT09IG51bGwpID9cbiAgICAgIGluc2VydEFmdGVyKGRvbUVsZW1lbnQsIHBhcmVudERPTUVsZW1lbnQsIHNpYmxpbmdET01FbGVtZW50KSA6XG4gICAgICAgIGluc2VydEJlZm9yZWhhbmQoZG9tRWxlbWVudCwgcGFyZW50RE9NRWxlbWVudCk7XG5cbiAgICB0aGlzLm1vdW50TnVtYmVyKCk7XG5cbiAgICBzaWJsaW5nRE9NRWxlbWVudCA9IGRvbUVsZW1lbnQ7IC8vL1xuXG4gICAgcmV0dXJuIHNpYmxpbmdET01FbGVtZW50O1xuICB9XG5cbiAgdW5tb3VudChwYXJlbnRET01FbGVtZW50KSB7XG4gICAgY29uc3QgZG9tRWxlbWVudCA9IHRoaXMuZ2V0RE9NRWxlbWVudCgpO1xuXG4gICAgdGhpcy51bm1vdW50TnVtYmVyKCk7XG5cbiAgICByZW1vdmUoZG9tRWxlbWVudCwgcGFyZW50RE9NRWxlbWVudCk7XG5cbiAgICB0aGlzLnJlc2V0RE9NRWxlbWVudCgpO1xuICB9XG5cbiAgYXNQbGFpblRleHQoY29udGV4dCkge1xuICAgIGNvbnN0IHBsYWluVGV4dCA9IEVNUFRZX1NUUklORztcblxuICAgIHJldHVybiBwbGFpblRleHQ7XG4gIH1cblxuICBjaGlsZE5vZGVzQXNIVE1MKGluZGVudCwgY29udGV4dCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLm51bWJlciwgIC8vL1xuICAgICAgICAgIGNoaWxkTm9kZXNIVE1MID0gY29udGVudDsgLy8vXG5cbiAgICByZXR1cm4gY2hpbGROb2Rlc0hUTUw7XG4gIH1cblxuICBtb3VudE51bWJlcigpIHtcbiAgICBpZiAodGhpcy5udW1iZXIgPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgZG9tRWxlbWVudDtcblxuICAgIGRvbUVsZW1lbnQgPSB0aGlzLmdldERPTUVsZW1lbnQoKTtcblxuICAgIGlmIChkb21FbGVtZW50ID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgcGFyZW50RE9NRWxlbWVudCA9IGRvbUVsZW1lbnQsIC8vL1xuICAgICAgICAgIGNvbnRlbnQgPSB0aGlzLm51bWJlciwgIC8vL1xuICAgICAgICAgIHRleHROb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY29udGVudCk7XG5cbiAgICBkb21FbGVtZW50ID0gdGV4dE5vZGU7ICAvLy9cblxuICAgIGluc2VydEFmdGVyd2FyZHMoZG9tRWxlbWVudCwgcGFyZW50RE9NRWxlbWVudCk7XG4gIH1cblxuICB1bm1vdW50TnVtYmVyKCkge1xuICAgIGlmICh0aGlzLm51bWJlciA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCBkb21FbGVtZW50O1xuXG4gICAgZG9tRWxlbWVudCA9IHRoaXMuZ2V0RE9NRWxlbWVudCgpO1xuXG4gICAgaWYgKGRvbUVsZW1lbnQgPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBwYXJlbnRET01FbGVtZW50ID0gZG9tRWxlbWVudCwgIC8vL1xuICAgICAgICAgIGZpcnN0Q2hpbGQgPSBkb21FbGVtZW50LmZpcnN0Q2hpbGQ7XG5cbiAgICBkb21FbGVtZW50ID0gZmlyc3RDaGlsZDsgIC8vL1xuXG4gICAgcmVtb3ZlKGRvbUVsZW1lbnQsIHBhcmVudERPTUVsZW1lbnQpO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImFcIjtcblxuICBzdGF0aWMgY2xhc3NOYW1lID0gXCJmb290bm90ZVwiO1xuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBudW1iZXIgPSBudWxsLFxuICAgICAgICAgIGZvb3Rub3RlTGlua0hUTUxOb2RlID0gSFRNTE5vZGUuZnJvbU5vdGhpbmcoRm9vdG5vdGVMaW5rSFRNTE5vZGUsIG51bWJlcik7XG5cbiAgICByZXR1cm4gZm9vdG5vdGVMaW5rSFRNTE5vZGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbU91dGVyTm9kZShvdXRlck5vZGUpIHtcbiAgICBjb25zdCBudW1iZXIgPSBudWxsLFxuICAgICAgICAgIGZvb3Rub3RlTGlua0hUTUxOb2RlID0gSFRNTE5vZGUuZnJvbU91dGVyTm9kZShGb290bm90ZUxpbmtIVE1MTm9kZSwgb3V0ZXJOb2RlLCBudW1iZXIpO1xuXG4gICAgcmV0dXJuIGZvb3Rub3RlTGlua0hUTUxOb2RlO1xuICB9XG59XG4iXSwibmFtZXMiOlsiRm9vdG5vdGVMaW5rSFRNTE5vZGUiLCJIVE1MTm9kZSIsIm91dGVyTm9kZSIsInBhcmVudE5vZGUiLCJjaGlsZE5vZGVzIiwiZG9tRWxlbWVudCIsIm51bWJlciIsImdldE51bWJlciIsInNldE51bWJlciIsInVubW91bnROdW1iZXIiLCJtb3VudE51bWJlciIsInJlc2V0TnVtYmVyIiwiaWRlbnRpZmllciIsImNvbnRleHQiLCJtYXJrZG93bk5vZGUiLCJnZXRNYXJrZG93bk5vZGUiLCJhdHRyaWJ1dGVOYW1lIiwiSFJFRl9BVFRSSUJVVEVfTkFNRSIsImF0dHJpYnV0ZVZhbHVlIiwicHJlcGVuZCIsIkZPT1ROT1RFX1BSRVBFTkQiLCJhZGp1c3RJbmRlbnQiLCJpbmRlbnQiLCJtb3VudCIsInBhcmVudERPTUVsZW1lbnQiLCJzaWJsaW5nRE9NRWxlbWVudCIsImNyZWF0ZURPTUVsZW1lbnQiLCJzZXRET01FbGVtZW50IiwiaW5zZXJ0QWZ0ZXIiLCJpbnNlcnRCZWZvcmVoYW5kIiwidW5tb3VudCIsImdldERPTUVsZW1lbnQiLCJyZW1vdmUiLCJyZXNldERPTUVsZW1lbnQiLCJhc1BsYWluVGV4dCIsInBsYWluVGV4dCIsIkVNUFRZX1NUUklORyIsImNoaWxkTm9kZXNBc0hUTUwiLCJjb250ZW50IiwiY2hpbGROb2Rlc0hUTUwiLCJ0ZXh0Tm9kZSIsImRvY3VtZW50IiwiY3JlYXRlVGV4dE5vZGUiLCJpbnNlcnRBZnRlcndhcmRzIiwiZmlyc3RDaGlsZCIsInRhZ05hbWUiLCJjbGFzc05hbWUiLCJmcm9tTm90aGluZyIsImZvb3Rub3RlTGlua0hUTUxOb2RlIiwiZnJvbU91dGVyTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBU0E7OztlQUFxQkE7Ozs2REFQQTsyQkFFUTswQkFDSTtnQ0FDRztxQkFDb0M7Ozs7OztBQUV6RCxNQUFNQSw2QkFBNkJDLGFBQVE7SUFDeEQsWUFBWUMsU0FBUyxFQUFFQyxVQUFVLEVBQUVDLFVBQVUsRUFBRUMsVUFBVSxFQUFFQyxNQUFNLENBQUU7UUFDakUsS0FBSyxDQUFDSixXQUFXQyxZQUFZQyxZQUFZQztRQUV6QyxJQUFJLENBQUNDLE1BQU0sR0FBR0E7SUFDaEI7SUFFQUMsWUFBWTtRQUNWLE9BQU8sSUFBSSxDQUFDRCxNQUFNO0lBQ3BCO0lBRUFFLFVBQVVGLE1BQU0sRUFBRTtRQUNoQixJQUFJLENBQUNHLGFBQWE7UUFFbEIsSUFBSSxDQUFDSCxNQUFNLEdBQUdBO1FBRWQsSUFBSSxDQUFDSSxXQUFXO0lBQ2xCO0lBRUFDLGNBQWM7UUFDWixNQUFNTCxTQUFTO1FBRWYsSUFBSSxDQUFDRSxTQUFTLENBQUNGO0lBQ2pCO0lBRUFNLFdBQVdDLE9BQU8sRUFBRTtRQUNsQixNQUFNQyxlQUFlLElBQUksQ0FBQ0MsZUFBZSxJQUNuQ0gsYUFBYUUsYUFBYUYsVUFBVSxDQUFDQztRQUUzQyxPQUFPRDtJQUNUO0lBRUFJLGNBQWNILE9BQU8sRUFBRTtRQUNyQixNQUFNRyxnQkFBZ0JDLG1DQUFtQjtRQUV6QyxPQUFPRDtJQUNUO0lBRUFFLGVBQWVMLE9BQU8sRUFBRTtRQUN0QixNQUFNTSxVQUFVQywwQkFBZ0IsRUFDMUJSLGFBQWEsSUFBSSxDQUFDQSxVQUFVLENBQUNDLFVBQzdCSyxpQkFBaUIsQ0FBQyxDQUFDLEVBQUVDLFFBQVEsQ0FBQyxFQUFFUCxZQUFZLEVBQUUsR0FBRztRQUV2RCxPQUFPTTtJQUNUO0lBRUFHLGFBQWFDLE1BQU0sRUFBRTtRQUNuQkEsU0FBUztRQUVULE9BQU9BO0lBQ1Q7SUFFQUMsTUFBTUMsZ0JBQWdCLEVBQUVDLGlCQUFpQixFQUFFWixPQUFPLEVBQUU7UUFDbEQsTUFBTVIsYUFBYSxJQUFJLENBQUNxQixnQkFBZ0IsQ0FBQ2I7UUFFekMsSUFBSSxDQUFDYyxhQUFhLENBQUN0QjtRQUVsQm9CLHNCQUFzQixPQUNyQkcsSUFBQUEsZ0JBQVcsRUFBQ3ZCLFlBQVltQixrQkFBa0JDLHFCQUN4Q0ksSUFBQUEscUJBQWdCLEVBQUN4QixZQUFZbUI7UUFFakMsSUFBSSxDQUFDZCxXQUFXO1FBRWhCZSxvQkFBb0JwQixZQUFZLEdBQUc7UUFFbkMsT0FBT29CO0lBQ1Q7SUFFQUssUUFBUU4sZ0JBQWdCLEVBQUU7UUFDeEIsTUFBTW5CLGFBQWEsSUFBSSxDQUFDMEIsYUFBYTtRQUVyQyxJQUFJLENBQUN0QixhQUFhO1FBRWxCdUIsSUFBQUEsV0FBTSxFQUFDM0IsWUFBWW1CO1FBRW5CLElBQUksQ0FBQ1MsZUFBZTtJQUN0QjtJQUVBQyxZQUFZckIsT0FBTyxFQUFFO1FBQ25CLE1BQU1zQixZQUFZQyx1QkFBWTtRQUU5QixPQUFPRDtJQUNUO0lBRUFFLGlCQUFpQmYsTUFBTSxFQUFFVCxPQUFPLEVBQUU7UUFDaEMsTUFBTXlCLFVBQVUsSUFBSSxDQUFDaEMsTUFBTSxFQUNyQmlDLGlCQUFpQkQsU0FBUyxHQUFHO1FBRW5DLE9BQU9DO0lBQ1Q7SUFFQTdCLGNBQWM7UUFDWixJQUFJLElBQUksQ0FBQ0osTUFBTSxLQUFLLE1BQU07WUFDeEI7UUFDRjtRQUVBLElBQUlEO1FBRUpBLGFBQWEsSUFBSSxDQUFDMEIsYUFBYTtRQUUvQixJQUFJMUIsZUFBZSxNQUFNO1lBQ3ZCO1FBQ0Y7UUFFQSxNQUFNbUIsbUJBQW1CbkIsWUFDbkJpQyxVQUFVLElBQUksQ0FBQ2hDLE1BQU0sRUFDckJrQyxXQUFXQyxTQUFTQyxjQUFjLENBQUNKO1FBRXpDakMsYUFBYW1DLFVBQVcsR0FBRztRQUUzQkcsSUFBQUEscUJBQWdCLEVBQUN0QyxZQUFZbUI7SUFDL0I7SUFFQWYsZ0JBQWdCO1FBQ2QsSUFBSSxJQUFJLENBQUNILE1BQU0sS0FBSyxNQUFNO1lBQ3hCO1FBQ0Y7UUFFQSxJQUFJRDtRQUVKQSxhQUFhLElBQUksQ0FBQzBCLGFBQWE7UUFFL0IsSUFBSTFCLGVBQWUsTUFBTTtZQUN2QjtRQUNGO1FBRUEsTUFBTW1CLG1CQUFtQm5CLFlBQ25CdUMsYUFBYXZDLFdBQVd1QyxVQUFVO1FBRXhDdkMsYUFBYXVDLFlBQWEsR0FBRztRQUU3QlosSUFBQUEsV0FBTSxFQUFDM0IsWUFBWW1CO0lBQ3JCO0lBRUEsT0FBT3FCLFVBQVUsSUFBSTtJQUVyQixPQUFPQyxZQUFZLFdBQVc7SUFFOUIsT0FBT0MsY0FBYztRQUNuQixNQUFNekMsU0FBUyxNQUNUMEMsdUJBQXVCL0MsYUFBUSxDQUFDOEMsV0FBVyxDQUFDL0Msc0JBQXNCTTtRQUV4RSxPQUFPMEM7SUFDVDtJQUVBLE9BQU9DLGNBQWMvQyxTQUFTLEVBQUU7UUFDOUIsTUFBTUksU0FBUyxNQUNUMEMsdUJBQXVCL0MsYUFBUSxDQUFDZ0QsYUFBYSxDQUFDakQsc0JBQXNCRSxXQUFXSTtRQUVyRixPQUFPMEM7SUFDVDtBQUNGIn0=