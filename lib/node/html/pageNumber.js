"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return PageNumberHTMLNode;
    }
});
const _html = /*#__PURE__*/ _interop_require_default(require("../../node/html"));
const _constants = require("../../constants");
const _dom = require("../../utilities/dom");
const _markdown = require("../../ruleNames/markdown");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class PageNumberHTMLNode extends _html.default {
    constructor(outerNode, parentNode, childNodes, domElement, pageNumber){
        super(outerNode, parentNode, childNodes, domElement);
        this.pageNumber = pageNumber;
    }
    getPageNumber() {
        return this.pageNumber;
    }
    getRuleName() {
        const ruleName = _markdown.PAGE_NUMBER_MARKDOWN_RULE_NAME;
        return ruleName;
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
    asHTML(indent, context) {
        let html;
        indent = this.adjustIndent(indent);
        const childNodesHTML = this.childNodesAsHTML(indent, context);
        const startingTag = this.startingTag(context), closingTag = this.closingTag(context);
        html = `${indent}${startingTag}${childNodesHTML}${closingTag}
`;
        return html;
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
    static tagName = "span";
    static className = "page-number";
    static fromPageNumber(pageNumber) {
        return _html.default.fromNothing(PageNumberHTMLNode, pageNumber);
    }
    static fromPageNumberDOMElement(pageNumberDOMElement) {
        const domElement = pageNumberDOMElement, pageNumberHTMLNode = _html.default.fromDOMElement(PageNumberHTMLNode, domElement);
        return pageNumberHTMLNode;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvcGFnZU51bWJlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEhUTUxOb2RlIGZyb20gXCIuLi8uLi9ub2RlL2h0bWxcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgcmVtb3ZlLCBpbnNlcnRBZnRlcndhcmRzIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9kb21cIjtcbmltcG9ydCB7IFBBR0VfTlVNQkVSX01BUktET1dOX1JVTEVfTkFNRSB9IGZyb20gXCIuLi8uLi9ydWxlTmFtZXMvbWFya2Rvd25cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFnZU51bWJlckhUTUxOb2RlIGV4dGVuZHMgSFRNTE5vZGUge1xuICBjb25zdHJ1Y3RvcihvdXRlck5vZGUsIHBhcmVudE5vZGUsIGNoaWxkTm9kZXMsIGRvbUVsZW1lbnQsIHBhZ2VOdW1iZXIpIHtcbiAgICBzdXBlcihvdXRlck5vZGUsIHBhcmVudE5vZGUsIGNoaWxkTm9kZXMsIGRvbUVsZW1lbnQpO1xuXG4gICAgdGhpcy5wYWdlTnVtYmVyID0gcGFnZU51bWJlcjtcbiAgfVxuXG4gIGdldFBhZ2VOdW1iZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFnZU51bWJlcjtcbiAgfVxuXG4gIGdldFJ1bGVOYW1lKCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gUEFHRV9OVU1CRVJfTUFSS0RPV05fUlVMRV9OQU1FO1xuXG4gICAgcmV0dXJuIHJ1bGVOYW1lO1xuICB9XG5cbiAgbW91bnQocGFyZW50RE9NRWxlbWVudCwgc2libGluZ0RPTUVsZW1lbnQsIGNvbnRleHQpIHtcbiAgICBsZXQgZG9tRWxlbWVudDtcblxuICAgIHN1cGVyLm1vdW50KHBhcmVudERPTUVsZW1lbnQsIHNpYmxpbmdET01FbGVtZW50LCBjb250ZXh0KTtcblxuICAgIGRvbUVsZW1lbnQgPSB0aGlzLmdldERPTUVsZW1lbnQoKTtcblxuICAgIHBhcmVudERPTUVsZW1lbnQgPSBkb21FbGVtZW50OyAgLy8vXG5cbiAgICBjb25zdCBjb250ZW50ID0gdGhpcy5wYWdlTnVtYmVyLCAgLy8vXG4gICAgICAgICAgdGV4dE5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjb250ZW50KTtcblxuICAgIGRvbUVsZW1lbnQgPSB0ZXh0Tm9kZTsgIC8vL1xuXG4gICAgaW5zZXJ0QWZ0ZXJ3YXJkcyhkb21FbGVtZW50LCBwYXJlbnRET01FbGVtZW50KTtcblxuICAgIGRvbUVsZW1lbnQgPSB0aGlzLmdldERPTUVsZW1lbnQoKTtcblxuICAgIHNpYmxpbmdET01FbGVtZW50ID0gZG9tRWxlbWVudDsgLy8vXG5cbiAgICByZXR1cm4gc2libGluZ0RPTUVsZW1lbnQ7XG4gIH1cblxuICB1bm1vdW50KHBhcmVudERPTUVsZW1lbnQpIHtcbiAgICB7XG4gICAgICBsZXQgZG9tRWxlbWVudDtcblxuICAgICAgZG9tRWxlbWVudCA9IHRoaXMuZ2V0RE9NRWxlbWVudCgpO1xuXG4gICAgICBjb25zdCBwYXJlbnRET01FbGVtZW50ID0gZG9tRWxlbWVudCwgIC8vL1xuICAgICAgICAgICAgbGFzdENoaWxkID0gZG9tRWxlbWVudC5sYXN0Q2hpbGRcblxuICAgICAgZG9tRWxlbWVudCA9IGxhc3RDaGlsZDsgIC8vL1xuXG4gICAgICByZW1vdmUoZG9tRWxlbWVudCwgcGFyZW50RE9NRWxlbWVudCk7XG4gICAgfVxuXG4gICAgc3VwZXIudW5tb3VudChwYXJlbnRET01FbGVtZW50KTtcbiAgfVxuXG4gIGFzSFRNTChpbmRlbnQsIGNvbnRleHQpIHtcbiAgICBsZXQgaHRtbDtcblxuICAgIGluZGVudCA9IHRoaXMuYWRqdXN0SW5kZW50KGluZGVudCk7XG5cbiAgICBjb25zdCBjaGlsZE5vZGVzSFRNTCA9IHRoaXMuY2hpbGROb2Rlc0FzSFRNTChpbmRlbnQsIGNvbnRleHQpO1xuXG4gICAgY29uc3Qgc3RhcnRpbmdUYWcgPSB0aGlzLnN0YXJ0aW5nVGFnKGNvbnRleHQpLFxuICAgICAgICAgIGNsb3NpbmdUYWcgPSB0aGlzLmNsb3NpbmdUYWcoY29udGV4dCk7XG5cbiAgICBodG1sID0gYCR7aW5kZW50fSR7c3RhcnRpbmdUYWd9JHtjaGlsZE5vZGVzSFRNTH0ke2Nsb3NpbmdUYWd9XG5gO1xuXG4gICAgcmV0dXJuIGh0bWw7XG4gIH1cblxuICBhc1BsYWluVGV4dChjb250ZXh0KSB7XG4gICAgY29uc3QgcGxhaW5UZXh0ID0gRU1QVFlfU1RSSU5HO1xuXG4gICAgcmV0dXJuIHBsYWluVGV4dDtcbiAgfVxuXG4gIGNoaWxkTm9kZXNBc0hUTUwoaW5kZW50LCBjb250ZXh0KSB7XG4gICAgY29uc3QgY2hpbGROb2Rlc0hUTUwgPSB0aGlzLnBhZ2VOdW1iZXI7IC8vL1xuXG4gICAgcmV0dXJuIGNoaWxkTm9kZXNIVE1MO1xuICB9XG5cbiAgYXNTdHJpbmcoKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSB0aGlzLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgc3RyaW5nID0gcnVsZU5hbWU7ICAvLy9cblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwic3BhblwiO1xuXG4gIHN0YXRpYyBjbGFzc05hbWUgPSBcInBhZ2UtbnVtYmVyXCI7XG5cbiAgc3RhdGljIGZyb21QYWdlTnVtYmVyKHBhZ2VOdW1iZXIpIHsgcmV0dXJuIEhUTUxOb2RlLmZyb21Ob3RoaW5nKFBhZ2VOdW1iZXJIVE1MTm9kZSwgcGFnZU51bWJlcik7IH1cblxuICBzdGF0aWMgZnJvbVBhZ2VOdW1iZXJET01FbGVtZW50KHBhZ2VOdW1iZXJET01FbGVtZW50KSB7XG4gICAgY29uc3QgZG9tRWxlbWVudCA9IHBhZ2VOdW1iZXJET01FbGVtZW50LCAgLy8vXG4gICAgICAgICAgcGFnZU51bWJlckhUTUxOb2RlID0gSFRNTE5vZGUuZnJvbURPTUVsZW1lbnQoUGFnZU51bWJlckhUTUxOb2RlLCBkb21FbGVtZW50KTtcblxuICAgIHJldHVybiBwYWdlTnVtYmVySFRNTE5vZGU7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJQYWdlTnVtYmVySFRNTE5vZGUiLCJIVE1MTm9kZSIsIm91dGVyTm9kZSIsInBhcmVudE5vZGUiLCJjaGlsZE5vZGVzIiwiZG9tRWxlbWVudCIsInBhZ2VOdW1iZXIiLCJnZXRQYWdlTnVtYmVyIiwiZ2V0UnVsZU5hbWUiLCJydWxlTmFtZSIsIlBBR0VfTlVNQkVSX01BUktET1dOX1JVTEVfTkFNRSIsIm1vdW50IiwicGFyZW50RE9NRWxlbWVudCIsInNpYmxpbmdET01FbGVtZW50IiwiY29udGV4dCIsImdldERPTUVsZW1lbnQiLCJjb250ZW50IiwidGV4dE5vZGUiLCJkb2N1bWVudCIsImNyZWF0ZVRleHROb2RlIiwiaW5zZXJ0QWZ0ZXJ3YXJkcyIsInVubW91bnQiLCJsYXN0Q2hpbGQiLCJyZW1vdmUiLCJhc0hUTUwiLCJpbmRlbnQiLCJodG1sIiwiYWRqdXN0SW5kZW50IiwiY2hpbGROb2Rlc0hUTUwiLCJjaGlsZE5vZGVzQXNIVE1MIiwic3RhcnRpbmdUYWciLCJjbG9zaW5nVGFnIiwiYXNQbGFpblRleHQiLCJwbGFpblRleHQiLCJFTVBUWV9TVFJJTkciLCJhc1N0cmluZyIsInN0cmluZyIsInRhZ05hbWUiLCJjbGFzc05hbWUiLCJmcm9tUGFnZU51bWJlciIsImZyb21Ob3RoaW5nIiwiZnJvbVBhZ2VOdW1iZXJET01FbGVtZW50IiwicGFnZU51bWJlckRPTUVsZW1lbnQiLCJwYWdlTnVtYmVySFRNTE5vZGUiLCJmcm9tRE9NRWxlbWVudCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBUUE7OztlQUFxQkE7Ozs2REFOQTsyQkFFUTtxQkFDWTswQkFDTTs7Ozs7O0FBRWhDLE1BQU1BLDJCQUEyQkMsYUFBUTtJQUN0RCxZQUFZQyxTQUFTLEVBQUVDLFVBQVUsRUFBRUMsVUFBVSxFQUFFQyxVQUFVLEVBQUVDLFVBQVUsQ0FBRTtRQUNyRSxLQUFLLENBQUNKLFdBQVdDLFlBQVlDLFlBQVlDO1FBRXpDLElBQUksQ0FBQ0MsVUFBVSxHQUFHQTtJQUNwQjtJQUVBQyxnQkFBZ0I7UUFDZCxPQUFPLElBQUksQ0FBQ0QsVUFBVTtJQUN4QjtJQUVBRSxjQUFjO1FBQ1osTUFBTUMsV0FBV0Msd0NBQThCO1FBRS9DLE9BQU9EO0lBQ1Q7SUFFQUUsTUFBTUMsZ0JBQWdCLEVBQUVDLGlCQUFpQixFQUFFQyxPQUFPLEVBQUU7UUFDbEQsSUFBSVQ7UUFFSixLQUFLLENBQUNNLE1BQU1DLGtCQUFrQkMsbUJBQW1CQztRQUVqRFQsYUFBYSxJQUFJLENBQUNVLGFBQWE7UUFFL0JILG1CQUFtQlAsWUFBYSxHQUFHO1FBRW5DLE1BQU1XLFVBQVUsSUFBSSxDQUFDVixVQUFVLEVBQ3pCVyxXQUFXQyxTQUFTQyxjQUFjLENBQUNIO1FBRXpDWCxhQUFhWSxVQUFXLEdBQUc7UUFFM0JHLElBQUFBLHFCQUFnQixFQUFDZixZQUFZTztRQUU3QlAsYUFBYSxJQUFJLENBQUNVLGFBQWE7UUFFL0JGLG9CQUFvQlIsWUFBWSxHQUFHO1FBRW5DLE9BQU9RO0lBQ1Q7SUFFQVEsUUFBUVQsZ0JBQWdCLEVBQUU7UUFDeEI7WUFDRSxJQUFJUDtZQUVKQSxhQUFhLElBQUksQ0FBQ1UsYUFBYTtZQUUvQixNQUFNSCxtQkFBbUJQLFlBQ25CaUIsWUFBWWpCLFdBQVdpQixTQUFTO1lBRXRDakIsYUFBYWlCLFdBQVksR0FBRztZQUU1QkMsSUFBQUEsV0FBTSxFQUFDbEIsWUFBWU87UUFDckI7UUFFQSxLQUFLLENBQUNTLFFBQVFUO0lBQ2hCO0lBRUFZLE9BQU9DLE1BQU0sRUFBRVgsT0FBTyxFQUFFO1FBQ3RCLElBQUlZO1FBRUpELFNBQVMsSUFBSSxDQUFDRSxZQUFZLENBQUNGO1FBRTNCLE1BQU1HLGlCQUFpQixJQUFJLENBQUNDLGdCQUFnQixDQUFDSixRQUFRWDtRQUVyRCxNQUFNZ0IsY0FBYyxJQUFJLENBQUNBLFdBQVcsQ0FBQ2hCLFVBQy9CaUIsYUFBYSxJQUFJLENBQUNBLFVBQVUsQ0FBQ2pCO1FBRW5DWSxPQUFPLEdBQUdELFNBQVNLLGNBQWNGLGlCQUFpQkcsV0FBVztBQUNqRSxDQUFDO1FBRUcsT0FBT0w7SUFDVDtJQUVBTSxZQUFZbEIsT0FBTyxFQUFFO1FBQ25CLE1BQU1tQixZQUFZQyx1QkFBWTtRQUU5QixPQUFPRDtJQUNUO0lBRUFKLGlCQUFpQkosTUFBTSxFQUFFWCxPQUFPLEVBQUU7UUFDaEMsTUFBTWMsaUJBQWlCLElBQUksQ0FBQ3RCLFVBQVUsRUFBRSxHQUFHO1FBRTNDLE9BQU9zQjtJQUNUO0lBRUFPLFdBQVc7UUFDVCxNQUFNMUIsV0FBVyxJQUFJLENBQUNELFdBQVcsSUFDM0I0QixTQUFTM0IsVUFBVyxHQUFHO1FBRTdCLE9BQU8yQjtJQUNUO0lBRUEsT0FBT0MsVUFBVSxPQUFPO0lBRXhCLE9BQU9DLFlBQVksY0FBYztJQUVqQyxPQUFPQyxlQUFlakMsVUFBVSxFQUFFO1FBQUUsT0FBT0wsYUFBUSxDQUFDdUMsV0FBVyxDQUFDeEMsb0JBQW9CTTtJQUFhO0lBRWpHLE9BQU9tQyx5QkFBeUJDLG9CQUFvQixFQUFFO1FBQ3BELE1BQU1yQyxhQUFhcUMsc0JBQ2JDLHFCQUFxQjFDLGFBQVEsQ0FBQzJDLGNBQWMsQ0FBQzVDLG9CQUFvQks7UUFFdkUsT0FBT3NDO0lBQ1Q7QUFDRiJ9