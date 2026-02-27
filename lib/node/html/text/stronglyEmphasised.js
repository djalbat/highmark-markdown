"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return StronglyEmphasisedTextHTMLNode;
    }
});
const _html = /*#__PURE__*/ _interop_require_default(require("../../../node/html"));
const _tagName = /*#__PURE__*/ _interop_require_default(require("../../../map/tagName"));
const _constants = require("../../../constants");
const _markdown = require("../../../ruleNames/markdown");
const _dom = require("../../../utilities/dom");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class StronglyEmphasisedTextHTMLNode extends _html.default {
    createChildDOMElement(context) {
        let domElement;
        const tagName = _tagName.default[_markdown.STRONG_TEXT_MARKDOWN_RULE_NAME], plainText = this.childNodesAsPlainText(context), content = plainText, textNode = document.createTextNode(content);
        domElement = document.createElement(tagName);
        const parentDOMElement = domElement; ///
        domElement = textNode; ///
        (0, _dom.insertAfterwards)(domElement, parentDOMElement);
        domElement = parentDOMElement; ///
        return domElement;
    }
    adjustIndent(indent) {
        indent = null;
        return indent;
    }
    mount(parentDOMElement, siblingDOMElement, context) {
        let domElement;
        domElement = this.createDOMElement(context);
        this.setDOMElement(domElement);
        siblingDOMElement !== null ? (0, _dom.insertAfter)(domElement, parentDOMElement, siblingDOMElement) : (0, _dom.insertBeforehand)(domElement, siblingDOMElement);
        parentDOMElement = domElement; ///
        const childDOMElement = this.createChildDOMElement(context);
        domElement = childDOMElement; ///
        (0, _dom.insertAfterwards)(domElement, parentDOMElement);
        domElement = this.getDOMElement();
        siblingDOMElement = domElement; ///
        return siblingDOMElement;
    }
    unmount(parentDOMElement) {
        let domElement;
        domElement = this.getDOMElement();
        {
            const parentDOMElement = domElement, firstChild = parentDOMElement.firstChild;
            domElement = firstChild; ///
            (0, _dom.remove)(domElement, parentDOMElement);
        }
        domElement = this.getDOMElement();
        (0, _dom.remove)(domElement, parentDOMElement);
        this.resetDOMElement();
    }
    childNodesAsHTML(indent, context) {
        let childNodesHTML;
        indent = this.adjustIndent(indent);
        childNodesHTML = super.childNodesAsHTML(indent, context);
        const startingTag = `<${strongTextTagName}>`, closingTag = `</${strongTextTagName}>`, html = `${startingTag}${childNodesHTML}${closingTag}`;
        childNodesHTML = html; ///
        return childNodesHTML;
    }
    childNodesAsPlainText(context) {
        const childNodesPlainText = this.reduceChildNode((childNodesPlainText, childNode)=>{
            const childNodePlainText = childNode.asPlainText(context);
            childNodesPlainText = `${childNodesPlainText}${childNodePlainText}`;
            return childNodesPlainText;
        }, _constants.EMPTY_STRING);
        return childNodesPlainText;
    }
    static tagName = "em";
    static className = null;
    static fromNothing() {
        return _html.default.fromNothing(StronglyEmphasisedTextHTMLNode);
    }
    static fromOuterNode(outerNode) {
        return _html.default.fromOuterNode(StronglyEmphasisedTextHTMLNode, outerNode);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvdGV4dC9zdHJvbmdseUVtcGhhc2lzZWQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBIVE1MTm9kZSBmcm9tIFwiLi4vLi4vLi4vbm9kZS9odG1sXCI7XG5pbXBvcnQgdGFnTmFtZU1hcCBmcm9tIFwiLi4vLi4vLi4vbWFwL3RhZ05hbWVcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uLy4uLy4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgU1RST05HX1RFWFRfTUFSS0RPV05fUlVMRV9OQU1FIH0gZnJvbSBcIi4uLy4uLy4uL3J1bGVOYW1lcy9tYXJrZG93blwiO1xuaW1wb3J0IHsgcmVtb3ZlLCBpbnNlcnRBZnRlciwgaW5zZXJ0QWZ0ZXJ3YXJkcywgaW5zZXJ0QmVmb3JlaGFuZCB9IGZyb20gXCIuLi8uLi8uLi91dGlsaXRpZXMvZG9tXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0cm9uZ2x5RW1waGFzaXNlZFRleHRIVE1MTm9kZSBleHRlbmRzIEhUTUxOb2RlIHtcbiAgY3JlYXRlQ2hpbGRET01FbGVtZW50KGNvbnRleHQpIHtcbiAgICBsZXQgZG9tRWxlbWVudDtcblxuICAgIGNvbnN0IHRhZ05hbWUgPSB0YWdOYW1lTWFwW1NUUk9OR19URVhUX01BUktET1dOX1JVTEVfTkFNRV0sXG4gICAgICAgICAgcGxhaW5UZXh0ID0gdGhpcy5jaGlsZE5vZGVzQXNQbGFpblRleHQoY29udGV4dCksXG4gICAgICAgICAgY29udGVudCA9IHBsYWluVGV4dCwgIC8vL1xuICAgICAgICAgIHRleHROb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY29udGVudCk7XG5cbiAgICBkb21FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWdOYW1lKTtcblxuICAgIGNvbnN0IHBhcmVudERPTUVsZW1lbnQgPSBkb21FbGVtZW50OyAgLy8vXG5cbiAgICBkb21FbGVtZW50ID0gdGV4dE5vZGU7IC8vL1xuXG4gICAgaW5zZXJ0QWZ0ZXJ3YXJkcyhkb21FbGVtZW50LCBwYXJlbnRET01FbGVtZW50KTtcblxuICAgIGRvbUVsZW1lbnQgPSBwYXJlbnRET01FbGVtZW50OyAgLy8vXG5cbiAgICByZXR1cm4gZG9tRWxlbWVudDtcbiAgfVxuXG4gIGFkanVzdEluZGVudChpbmRlbnQpIHtcbiAgICBpbmRlbnQgPSBudWxsO1xuXG4gICAgcmV0dXJuIGluZGVudDtcbiAgfVxuXG4gIG1vdW50KHBhcmVudERPTUVsZW1lbnQsIHNpYmxpbmdET01FbGVtZW50LCBjb250ZXh0KSB7XG4gICAgbGV0IGRvbUVsZW1lbnQ7XG5cbiAgICBkb21FbGVtZW50ID0gdGhpcy5jcmVhdGVET01FbGVtZW50KGNvbnRleHQpO1xuXG4gICAgdGhpcy5zZXRET01FbGVtZW50KGRvbUVsZW1lbnQpO1xuXG4gICAgKHNpYmxpbmdET01FbGVtZW50ICE9PSBudWxsKSA/XG4gICAgICBpbnNlcnRBZnRlcihkb21FbGVtZW50LCBwYXJlbnRET01FbGVtZW50LCBzaWJsaW5nRE9NRWxlbWVudCkgOlxuICAgICAgICBpbnNlcnRCZWZvcmVoYW5kKGRvbUVsZW1lbnQsIHNpYmxpbmdET01FbGVtZW50KTtcblxuICAgIHBhcmVudERPTUVsZW1lbnQgPSBkb21FbGVtZW50OyAvLy9cblxuICAgIGNvbnN0IGNoaWxkRE9NRWxlbWVudCA9IHRoaXMuY3JlYXRlQ2hpbGRET01FbGVtZW50KGNvbnRleHQpO1xuXG4gICAgZG9tRWxlbWVudCA9IGNoaWxkRE9NRWxlbWVudDsgLy8vXG5cbiAgICBpbnNlcnRBZnRlcndhcmRzKGRvbUVsZW1lbnQsIHBhcmVudERPTUVsZW1lbnQpO1xuXG4gICAgZG9tRWxlbWVudCA9IHRoaXMuZ2V0RE9NRWxlbWVudCgpO1xuXG4gICAgc2libGluZ0RPTUVsZW1lbnQgPSBkb21FbGVtZW50OyAvLy9cblxuICAgIHJldHVybiBzaWJsaW5nRE9NRWxlbWVudDtcbiAgfVxuXG4gIHVubW91bnQocGFyZW50RE9NRWxlbWVudCkge1xuICAgIGxldCBkb21FbGVtZW50O1xuXG4gICAgZG9tRWxlbWVudCA9IHRoaXMuZ2V0RE9NRWxlbWVudCgpO1xuXG4gICAge1xuICAgICAgY29uc3QgcGFyZW50RE9NRWxlbWVudCA9IGRvbUVsZW1lbnQsIC8vL1xuICAgICAgICAgICAgZmlyc3RDaGlsZCA9IHBhcmVudERPTUVsZW1lbnQuZmlyc3RDaGlsZDtcblxuICAgICAgZG9tRWxlbWVudCA9IGZpcnN0Q2hpbGQ7ICAvLy9cblxuICAgICAgcmVtb3ZlKGRvbUVsZW1lbnQsIHBhcmVudERPTUVsZW1lbnQpO1xuICAgIH1cblxuICAgIGRvbUVsZW1lbnQgPSB0aGlzLmdldERPTUVsZW1lbnQoKTtcblxuICAgIHJlbW92ZShkb21FbGVtZW50LCBwYXJlbnRET01FbGVtZW50KTtcblxuICAgIHRoaXMucmVzZXRET01FbGVtZW50KCk7XG4gIH1cblxuICBjaGlsZE5vZGVzQXNIVE1MKGluZGVudCwgY29udGV4dCkge1xuICAgIGxldCBjaGlsZE5vZGVzSFRNTDtcblxuICAgIGluZGVudCA9IHRoaXMuYWRqdXN0SW5kZW50KGluZGVudCk7XG5cbiAgICBjaGlsZE5vZGVzSFRNTCA9IHN1cGVyLmNoaWxkTm9kZXNBc0hUTUwoaW5kZW50LCBjb250ZXh0KTtcblxuICAgIGNvbnN0IHN0YXJ0aW5nVGFnID0gYDwke3N0cm9uZ1RleHRUYWdOYW1lfT5gLFxuICAgICAgICAgIGNsb3NpbmdUYWcgPSBgPC8ke3N0cm9uZ1RleHRUYWdOYW1lfT5gLFxuICAgICAgICAgIGh0bWwgPSBgJHtzdGFydGluZ1RhZ30ke2NoaWxkTm9kZXNIVE1MfSR7Y2xvc2luZ1RhZ31gO1xuXG4gICAgY2hpbGROb2Rlc0hUTUwgPSBodG1sOyAgLy8vXG5cbiAgICByZXR1cm4gY2hpbGROb2Rlc0hUTUw7XG4gIH1cblxuICBjaGlsZE5vZGVzQXNQbGFpblRleHQoY29udGV4dCkge1xuICAgIGNvbnN0IGNoaWxkTm9kZXNQbGFpblRleHQgPSB0aGlzLnJlZHVjZUNoaWxkTm9kZSgoY2hpbGROb2Rlc1BsYWluVGV4dCwgY2hpbGROb2RlKSA9PiB7XG4gICAgICBjb25zdCBjaGlsZE5vZGVQbGFpblRleHQgPSBjaGlsZE5vZGUuYXNQbGFpblRleHQoY29udGV4dCk7XG5cbiAgICAgIGNoaWxkTm9kZXNQbGFpblRleHQgPSBgJHtjaGlsZE5vZGVzUGxhaW5UZXh0fSR7Y2hpbGROb2RlUGxhaW5UZXh0fWA7XG5cbiAgICAgIHJldHVybiBjaGlsZE5vZGVzUGxhaW5UZXh0O1xuICAgIH0sIEVNUFRZX1NUUklORyk7XG5cbiAgICByZXR1cm4gY2hpbGROb2Rlc1BsYWluVGV4dDtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJlbVwiO1xuXG4gIHN0YXRpYyBjbGFzc05hbWUgPSBudWxsO1xuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHsgcmV0dXJuIEhUTUxOb2RlLmZyb21Ob3RoaW5nKFN0cm9uZ2x5RW1waGFzaXNlZFRleHRIVE1MTm9kZSk7IH1cblxuICBzdGF0aWMgZnJvbU91dGVyTm9kZShvdXRlck5vZGUpIHsgcmV0dXJuIEhUTUxOb2RlLmZyb21PdXRlck5vZGUoU3Ryb25nbHlFbXBoYXNpc2VkVGV4dEhUTUxOb2RlLCBvdXRlck5vZGUpOyB9XG59XG4iXSwibmFtZXMiOlsiU3Ryb25nbHlFbXBoYXNpc2VkVGV4dEhUTUxOb2RlIiwiSFRNTE5vZGUiLCJjcmVhdGVDaGlsZERPTUVsZW1lbnQiLCJjb250ZXh0IiwiZG9tRWxlbWVudCIsInRhZ05hbWUiLCJ0YWdOYW1lTWFwIiwiU1RST05HX1RFWFRfTUFSS0RPV05fUlVMRV9OQU1FIiwicGxhaW5UZXh0IiwiY2hpbGROb2Rlc0FzUGxhaW5UZXh0IiwiY29udGVudCIsInRleHROb2RlIiwiZG9jdW1lbnQiLCJjcmVhdGVUZXh0Tm9kZSIsImNyZWF0ZUVsZW1lbnQiLCJwYXJlbnRET01FbGVtZW50IiwiaW5zZXJ0QWZ0ZXJ3YXJkcyIsImFkanVzdEluZGVudCIsImluZGVudCIsIm1vdW50Iiwic2libGluZ0RPTUVsZW1lbnQiLCJjcmVhdGVET01FbGVtZW50Iiwic2V0RE9NRWxlbWVudCIsImluc2VydEFmdGVyIiwiaW5zZXJ0QmVmb3JlaGFuZCIsImNoaWxkRE9NRWxlbWVudCIsImdldERPTUVsZW1lbnQiLCJ1bm1vdW50IiwiZmlyc3RDaGlsZCIsInJlbW92ZSIsInJlc2V0RE9NRWxlbWVudCIsImNoaWxkTm9kZXNBc0hUTUwiLCJjaGlsZE5vZGVzSFRNTCIsInN0YXJ0aW5nVGFnIiwic3Ryb25nVGV4dFRhZ05hbWUiLCJjbG9zaW5nVGFnIiwiaHRtbCIsImNoaWxkTm9kZXNQbGFpblRleHQiLCJyZWR1Y2VDaGlsZE5vZGUiLCJjaGlsZE5vZGUiLCJjaGlsZE5vZGVQbGFpblRleHQiLCJhc1BsYWluVGV4dCIsIkVNUFRZX1NUUklORyIsImNsYXNzTmFtZSIsImZyb21Ob3RoaW5nIiwiZnJvbU91dGVyTm9kZSIsIm91dGVyTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBU0E7OztlQUFxQkE7Ozs2REFQQTtnRUFDRTsyQkFFTTswQkFDa0I7cUJBQ3lCOzs7Ozs7QUFFekQsTUFBTUEsdUNBQXVDQyxhQUFRO0lBQ2xFQyxzQkFBc0JDLE9BQU8sRUFBRTtRQUM3QixJQUFJQztRQUVKLE1BQU1DLFVBQVVDLGdCQUFVLENBQUNDLHdDQUE4QixDQUFDLEVBQ3BEQyxZQUFZLElBQUksQ0FBQ0MscUJBQXFCLENBQUNOLFVBQ3ZDTyxVQUFVRixXQUNWRyxXQUFXQyxTQUFTQyxjQUFjLENBQUNIO1FBRXpDTixhQUFhUSxTQUFTRSxhQUFhLENBQUNUO1FBRXBDLE1BQU1VLG1CQUFtQlgsWUFBYSxHQUFHO1FBRXpDQSxhQUFhTyxVQUFVLEdBQUc7UUFFMUJLLElBQUFBLHFCQUFnQixFQUFDWixZQUFZVztRQUU3QlgsYUFBYVcsa0JBQW1CLEdBQUc7UUFFbkMsT0FBT1g7SUFDVDtJQUVBYSxhQUFhQyxNQUFNLEVBQUU7UUFDbkJBLFNBQVM7UUFFVCxPQUFPQTtJQUNUO0lBRUFDLE1BQU1KLGdCQUFnQixFQUFFSyxpQkFBaUIsRUFBRWpCLE9BQU8sRUFBRTtRQUNsRCxJQUFJQztRQUVKQSxhQUFhLElBQUksQ0FBQ2lCLGdCQUFnQixDQUFDbEI7UUFFbkMsSUFBSSxDQUFDbUIsYUFBYSxDQUFDbEI7UUFFbEJnQixzQkFBc0IsT0FDckJHLElBQUFBLGdCQUFXLEVBQUNuQixZQUFZVyxrQkFBa0JLLHFCQUN4Q0ksSUFBQUEscUJBQWdCLEVBQUNwQixZQUFZZ0I7UUFFakNMLG1CQUFtQlgsWUFBWSxHQUFHO1FBRWxDLE1BQU1xQixrQkFBa0IsSUFBSSxDQUFDdkIscUJBQXFCLENBQUNDO1FBRW5EQyxhQUFhcUIsaUJBQWlCLEdBQUc7UUFFakNULElBQUFBLHFCQUFnQixFQUFDWixZQUFZVztRQUU3QlgsYUFBYSxJQUFJLENBQUNzQixhQUFhO1FBRS9CTixvQkFBb0JoQixZQUFZLEdBQUc7UUFFbkMsT0FBT2dCO0lBQ1Q7SUFFQU8sUUFBUVosZ0JBQWdCLEVBQUU7UUFDeEIsSUFBSVg7UUFFSkEsYUFBYSxJQUFJLENBQUNzQixhQUFhO1FBRS9CO1lBQ0UsTUFBTVgsbUJBQW1CWCxZQUNuQndCLGFBQWFiLGlCQUFpQmEsVUFBVTtZQUU5Q3hCLGFBQWF3QixZQUFhLEdBQUc7WUFFN0JDLElBQUFBLFdBQU0sRUFBQ3pCLFlBQVlXO1FBQ3JCO1FBRUFYLGFBQWEsSUFBSSxDQUFDc0IsYUFBYTtRQUUvQkcsSUFBQUEsV0FBTSxFQUFDekIsWUFBWVc7UUFFbkIsSUFBSSxDQUFDZSxlQUFlO0lBQ3RCO0lBRUFDLGlCQUFpQmIsTUFBTSxFQUFFZixPQUFPLEVBQUU7UUFDaEMsSUFBSTZCO1FBRUpkLFNBQVMsSUFBSSxDQUFDRCxZQUFZLENBQUNDO1FBRTNCYyxpQkFBaUIsS0FBSyxDQUFDRCxpQkFBaUJiLFFBQVFmO1FBRWhELE1BQU04QixjQUFjLENBQUMsQ0FBQyxFQUFFQyxrQkFBa0IsQ0FBQyxDQUFDLEVBQ3RDQyxhQUFhLENBQUMsRUFBRSxFQUFFRCxrQkFBa0IsQ0FBQyxDQUFDLEVBQ3RDRSxPQUFPLEdBQUdILGNBQWNELGlCQUFpQkcsWUFBWTtRQUUzREgsaUJBQWlCSSxNQUFPLEdBQUc7UUFFM0IsT0FBT0o7SUFDVDtJQUVBdkIsc0JBQXNCTixPQUFPLEVBQUU7UUFDN0IsTUFBTWtDLHNCQUFzQixJQUFJLENBQUNDLGVBQWUsQ0FBQyxDQUFDRCxxQkFBcUJFO1lBQ3JFLE1BQU1DLHFCQUFxQkQsVUFBVUUsV0FBVyxDQUFDdEM7WUFFakRrQyxzQkFBc0IsR0FBR0Esc0JBQXNCRyxvQkFBb0I7WUFFbkUsT0FBT0g7UUFDVCxHQUFHSyx1QkFBWTtRQUVmLE9BQU9MO0lBQ1Q7SUFFQSxPQUFPaEMsVUFBVSxLQUFLO0lBRXRCLE9BQU9zQyxZQUFZLEtBQUs7SUFFeEIsT0FBT0MsY0FBYztRQUFFLE9BQU8zQyxhQUFRLENBQUMyQyxXQUFXLENBQUM1QztJQUFpQztJQUVwRixPQUFPNkMsY0FBY0MsU0FBUyxFQUFFO1FBQUUsT0FBTzdDLGFBQVEsQ0FBQzRDLGFBQWEsQ0FBQzdDLGdDQUFnQzhDO0lBQVk7QUFDOUcifQ==