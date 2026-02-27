"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return IndexLinkHTMLNode;
    }
});
const _html = /*#__PURE__*/ _interop_require_default(require("../../../node/html"));
const _constants = require("../../../constants");
const _prepends = require("../../../prepends");
const _attributeNames = require("../../../attributeNames");
const _dom = require("../../../utilities/dom");
const _markdown = require("../../../ruleNames/markdown");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class IndexLinkHTMLNode extends _html.default {
    constructor(outerNode, parentNode, childNodes, domElement, pageNumber){
        super(outerNode, parentNode, childNodes, domElement);
        this.pageNumber = pageNumber;
    }
    getIndexLink() {
        return this.pageNumber;
    }
    getRuleName() {
        const ruleName = _markdown.INDEX_LINK_MARKDOWN_RULE_NAME;
        return ruleName;
    }
    attributeName(context) {
        const attributeName = _attributeNames.HREF_ATTRIBUTE_NAME;
        return attributeName;
    }
    attributeValue(context) {
        const prepend = _prepends.INDEX_PREPEND, attributeValue = `#${prepend}-${this.pageNumber}`;
        return attributeValue;
    }
    mount(parentDOMElement, siblingDOMElement, context) {
        let domElement;
        super.mount(parentDOMElement, siblingDOMElement, context);
        domElement = this.getDOMElement();
        parentDOMElement = domElement; ///
        const content = this.pageNumber, textNode = document.createTextNode(content);
        domElement = textNode; ///
        (0, _dom.insertAfterwards)(domElement, parentDOMElement);
        domElement = this.getDOMElement();
        siblingDOMElement = domElement; ///
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
    adjustIndent(indent) {
        indent = null;
        return indent;
    }
    asPlainText(context) {
        const plainText = _constants.EMPTY_STRING;
        return plainText;
    }
    childNodesAsHTML(indent, context) {
        const childNodesHTML = this.pageNumber; ///
        return childNodesHTML;
    }
    asString() {
        const ruleName = this.getRuleName(), string = ruleName; ///
        return string;
    }
    static tagName = "a";
    static className = "index";
    static fromPageNumber(pageNumber) {
        const indexLinkHTMLNode = _html.default.fromNothing(IndexLinkHTMLNode, pageNumber);
        return indexLinkHTMLNode;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvbGluay9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEhUTUxOb2RlIGZyb20gXCIuLi8uLi8uLi9ub2RlL2h0bWxcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uLy4uLy4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgSU5ERVhfUFJFUEVORCB9IGZyb20gXCIuLi8uLi8uLi9wcmVwZW5kc1wiO1xuaW1wb3J0IHsgSFJFRl9BVFRSSUJVVEVfTkFNRSB9IGZyb20gXCIuLi8uLi8uLi9hdHRyaWJ1dGVOYW1lc1wiO1xuaW1wb3J0IHsgcmVtb3ZlLCBpbnNlcnRBZnRlcndhcmRzIH0gZnJvbSBcIi4uLy4uLy4uL3V0aWxpdGllcy9kb21cIjtcbmltcG9ydCB7IElOREVYX0xJTktfTUFSS0RPV05fUlVMRV9OQU1FIH0gZnJvbSBcIi4uLy4uLy4uL3J1bGVOYW1lcy9tYXJrZG93blwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleExpbmtIVE1MTm9kZSBleHRlbmRzIEhUTUxOb2RlIHtcbiAgY29uc3RydWN0b3Iob3V0ZXJOb2RlLCBwYXJlbnROb2RlLCBjaGlsZE5vZGVzLCBkb21FbGVtZW50LCBwYWdlTnVtYmVyKSB7XG4gICAgc3VwZXIob3V0ZXJOb2RlLCBwYXJlbnROb2RlLCBjaGlsZE5vZGVzLCBkb21FbGVtZW50KTtcblxuICAgIHRoaXMucGFnZU51bWJlciA9IHBhZ2VOdW1iZXI7XG4gIH1cblxuICBnZXRJbmRleExpbmsoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFnZU51bWJlcjtcbiAgfVxuXG4gIGdldFJ1bGVOYW1lKCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gSU5ERVhfTElOS19NQVJLRE9XTl9SVUxFX05BTUU7XG5cbiAgICByZXR1cm4gcnVsZU5hbWU7XG4gIH1cblxuICBhdHRyaWJ1dGVOYW1lKGNvbnRleHQpIHtcbiAgICBjb25zdCBhdHRyaWJ1dGVOYW1lID0gSFJFRl9BVFRSSUJVVEVfTkFNRTtcblxuICAgIHJldHVybiBhdHRyaWJ1dGVOYW1lO1xuICB9XG5cbiAgYXR0cmlidXRlVmFsdWUoY29udGV4dCkge1xuICAgIGNvbnN0IHByZXBlbmQgPSBJTkRFWF9QUkVQRU5ELFxuICAgICAgICAgIGF0dHJpYnV0ZVZhbHVlID0gYCMke3ByZXBlbmR9LSR7dGhpcy5wYWdlTnVtYmVyfWA7XG5cbiAgICByZXR1cm4gYXR0cmlidXRlVmFsdWU7XG4gIH1cblxuICBtb3VudChwYXJlbnRET01FbGVtZW50LCBzaWJsaW5nRE9NRWxlbWVudCwgY29udGV4dCkge1xuICAgIGxldCBkb21FbGVtZW50O1xuXG4gICAgc3VwZXIubW91bnQocGFyZW50RE9NRWxlbWVudCwgc2libGluZ0RPTUVsZW1lbnQsIGNvbnRleHQpO1xuXG4gICAgZG9tRWxlbWVudCA9IHRoaXMuZ2V0RE9NRWxlbWVudCgpO1xuXG4gICAgcGFyZW50RE9NRWxlbWVudCA9IGRvbUVsZW1lbnQ7ICAvLy9cblxuICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLnBhZ2VOdW1iZXIsICAvLy9cbiAgICAgICAgICB0ZXh0Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNvbnRlbnQpO1xuXG4gICAgZG9tRWxlbWVudCA9IHRleHROb2RlOyAgLy8vXG5cbiAgICBpbnNlcnRBZnRlcndhcmRzKGRvbUVsZW1lbnQsIHBhcmVudERPTUVsZW1lbnQpO1xuXG4gICAgZG9tRWxlbWVudCA9IHRoaXMuZ2V0RE9NRWxlbWVudCgpO1xuXG4gICAgc2libGluZ0RPTUVsZW1lbnQgPSBkb21FbGVtZW50OyAvLy9cblxuICAgIHJldHVybiBzaWJsaW5nRE9NRWxlbWVudDtcbiAgfVxuXG4gIHVubW91bnQocGFyZW50RE9NRWxlbWVudCkge1xuICAgIHtcbiAgICAgIGxldCBkb21FbGVtZW50O1xuXG4gICAgICBkb21FbGVtZW50ID0gdGhpcy5nZXRET01FbGVtZW50KCk7XG5cbiAgICAgIGNvbnN0IHBhcmVudERPTUVsZW1lbnQgPSBkb21FbGVtZW50LCAgLy8vXG4gICAgICAgICAgICBsYXN0Q2hpbGQgPSBkb21FbGVtZW50Lmxhc3RDaGlsZFxuXG4gICAgICBkb21FbGVtZW50ID0gbGFzdENoaWxkOyAgLy8vXG5cbiAgICAgIHJlbW92ZShkb21FbGVtZW50LCBwYXJlbnRET01FbGVtZW50KTtcbiAgICB9XG5cbiAgICBzdXBlci51bm1vdW50KHBhcmVudERPTUVsZW1lbnQpO1xuICB9XG5cbiAgYWRqdXN0SW5kZW50KGluZGVudCkge1xuICAgIGluZGVudCA9IG51bGw7XG5cbiAgICByZXR1cm4gaW5kZW50O1xuICB9XG5cbiAgYXNQbGFpblRleHQoY29udGV4dCkge1xuICAgIGNvbnN0IHBsYWluVGV4dCA9IEVNUFRZX1NUUklORztcblxuICAgIHJldHVybiBwbGFpblRleHQ7XG4gIH1cblxuICBjaGlsZE5vZGVzQXNIVE1MKGluZGVudCwgY29udGV4dCkge1xuICAgIGNvbnN0IGNoaWxkTm9kZXNIVE1MID0gdGhpcy5wYWdlTnVtYmVyOyAvLy9cblxuICAgIHJldHVybiBjaGlsZE5vZGVzSFRNTDtcbiAgfVxuXG4gIGFzU3RyaW5nKCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gdGhpcy5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgIHN0cmluZyA9IHJ1bGVOYW1lOyAgLy8vXG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImFcIjtcblxuICBzdGF0aWMgY2xhc3NOYW1lID0gXCJpbmRleFwiO1xuXG4gIHN0YXRpYyBmcm9tUGFnZU51bWJlcihwYWdlTnVtYmVyKSB7XG4gICAgY29uc3QgaW5kZXhMaW5rSFRNTE5vZGUgPSBIVE1MTm9kZS5mcm9tTm90aGluZyhJbmRleExpbmtIVE1MTm9kZSwgcGFnZU51bWJlcik7XG5cbiAgICByZXR1cm4gaW5kZXhMaW5rSFRNTE5vZGU7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJJbmRleExpbmtIVE1MTm9kZSIsIkhUTUxOb2RlIiwib3V0ZXJOb2RlIiwicGFyZW50Tm9kZSIsImNoaWxkTm9kZXMiLCJkb21FbGVtZW50IiwicGFnZU51bWJlciIsImdldEluZGV4TGluayIsImdldFJ1bGVOYW1lIiwicnVsZU5hbWUiLCJJTkRFWF9MSU5LX01BUktET1dOX1JVTEVfTkFNRSIsImF0dHJpYnV0ZU5hbWUiLCJjb250ZXh0IiwiSFJFRl9BVFRSSUJVVEVfTkFNRSIsImF0dHJpYnV0ZVZhbHVlIiwicHJlcGVuZCIsIklOREVYX1BSRVBFTkQiLCJtb3VudCIsInBhcmVudERPTUVsZW1lbnQiLCJzaWJsaW5nRE9NRWxlbWVudCIsImdldERPTUVsZW1lbnQiLCJjb250ZW50IiwidGV4dE5vZGUiLCJkb2N1bWVudCIsImNyZWF0ZVRleHROb2RlIiwiaW5zZXJ0QWZ0ZXJ3YXJkcyIsInVubW91bnQiLCJsYXN0Q2hpbGQiLCJyZW1vdmUiLCJhZGp1c3RJbmRlbnQiLCJpbmRlbnQiLCJhc1BsYWluVGV4dCIsInBsYWluVGV4dCIsIkVNUFRZX1NUUklORyIsImNoaWxkTm9kZXNBc0hUTUwiLCJjaGlsZE5vZGVzSFRNTCIsImFzU3RyaW5nIiwic3RyaW5nIiwidGFnTmFtZSIsImNsYXNzTmFtZSIsImZyb21QYWdlTnVtYmVyIiwiaW5kZXhMaW5rSFRNTE5vZGUiLCJmcm9tTm90aGluZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBVUE7OztlQUFxQkE7Ozs2REFSQTsyQkFFUTswQkFDQztnQ0FDTTtxQkFDSzswQkFDSzs7Ozs7O0FBRS9CLE1BQU1BLDBCQUEwQkMsYUFBUTtJQUNyRCxZQUFZQyxTQUFTLEVBQUVDLFVBQVUsRUFBRUMsVUFBVSxFQUFFQyxVQUFVLEVBQUVDLFVBQVUsQ0FBRTtRQUNyRSxLQUFLLENBQUNKLFdBQVdDLFlBQVlDLFlBQVlDO1FBRXpDLElBQUksQ0FBQ0MsVUFBVSxHQUFHQTtJQUNwQjtJQUVBQyxlQUFlO1FBQ2IsT0FBTyxJQUFJLENBQUNELFVBQVU7SUFDeEI7SUFFQUUsY0FBYztRQUNaLE1BQU1DLFdBQVdDLHVDQUE2QjtRQUU5QyxPQUFPRDtJQUNUO0lBRUFFLGNBQWNDLE9BQU8sRUFBRTtRQUNyQixNQUFNRCxnQkFBZ0JFLG1DQUFtQjtRQUV6QyxPQUFPRjtJQUNUO0lBRUFHLGVBQWVGLE9BQU8sRUFBRTtRQUN0QixNQUFNRyxVQUFVQyx1QkFBYSxFQUN2QkYsaUJBQWlCLENBQUMsQ0FBQyxFQUFFQyxRQUFRLENBQUMsRUFBRSxJQUFJLENBQUNULFVBQVUsRUFBRTtRQUV2RCxPQUFPUTtJQUNUO0lBRUFHLE1BQU1DLGdCQUFnQixFQUFFQyxpQkFBaUIsRUFBRVAsT0FBTyxFQUFFO1FBQ2xELElBQUlQO1FBRUosS0FBSyxDQUFDWSxNQUFNQyxrQkFBa0JDLG1CQUFtQlA7UUFFakRQLGFBQWEsSUFBSSxDQUFDZSxhQUFhO1FBRS9CRixtQkFBbUJiLFlBQWEsR0FBRztRQUVuQyxNQUFNZ0IsVUFBVSxJQUFJLENBQUNmLFVBQVUsRUFDekJnQixXQUFXQyxTQUFTQyxjQUFjLENBQUNIO1FBRXpDaEIsYUFBYWlCLFVBQVcsR0FBRztRQUUzQkcsSUFBQUEscUJBQWdCLEVBQUNwQixZQUFZYTtRQUU3QmIsYUFBYSxJQUFJLENBQUNlLGFBQWE7UUFFL0JELG9CQUFvQmQsWUFBWSxHQUFHO1FBRW5DLE9BQU9jO0lBQ1Q7SUFFQU8sUUFBUVIsZ0JBQWdCLEVBQUU7UUFDeEI7WUFDRSxJQUFJYjtZQUVKQSxhQUFhLElBQUksQ0FBQ2UsYUFBYTtZQUUvQixNQUFNRixtQkFBbUJiLFlBQ25Cc0IsWUFBWXRCLFdBQVdzQixTQUFTO1lBRXRDdEIsYUFBYXNCLFdBQVksR0FBRztZQUU1QkMsSUFBQUEsV0FBTSxFQUFDdkIsWUFBWWE7UUFDckI7UUFFQSxLQUFLLENBQUNRLFFBQVFSO0lBQ2hCO0lBRUFXLGFBQWFDLE1BQU0sRUFBRTtRQUNuQkEsU0FBUztRQUVULE9BQU9BO0lBQ1Q7SUFFQUMsWUFBWW5CLE9BQU8sRUFBRTtRQUNuQixNQUFNb0IsWUFBWUMsdUJBQVk7UUFFOUIsT0FBT0Q7SUFDVDtJQUVBRSxpQkFBaUJKLE1BQU0sRUFBRWxCLE9BQU8sRUFBRTtRQUNoQyxNQUFNdUIsaUJBQWlCLElBQUksQ0FBQzdCLFVBQVUsRUFBRSxHQUFHO1FBRTNDLE9BQU82QjtJQUNUO0lBRUFDLFdBQVc7UUFDVCxNQUFNM0IsV0FBVyxJQUFJLENBQUNELFdBQVcsSUFDM0I2QixTQUFTNUIsVUFBVyxHQUFHO1FBRTdCLE9BQU80QjtJQUNUO0lBRUEsT0FBT0MsVUFBVSxJQUFJO0lBRXJCLE9BQU9DLFlBQVksUUFBUTtJQUUzQixPQUFPQyxlQUFlbEMsVUFBVSxFQUFFO1FBQ2hDLE1BQU1tQyxvQkFBb0J4QyxhQUFRLENBQUN5QyxXQUFXLENBQUMxQyxtQkFBbUJNO1FBRWxFLE9BQU9tQztJQUNUO0FBQ0YifQ==