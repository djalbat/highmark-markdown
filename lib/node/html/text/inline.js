"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return InlineTextHTMLNode;
    }
});
const _html = /*#__PURE__*/ _interop_require_default(require("../../../node/html"));
const _constants = require("../../../constants");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class InlineTextHTMLNode extends _html.default {
    mount(parentDOMElement, siblingDOMElement, context) {
        this.childNodes.forEach((childNode)=>{
            siblingDOMElement = childNode.mount(parentDOMElement, siblingDOMElement, context);
        });
        return siblingDOMElement;
    }
    unmount(parentDOMElement) {
        this.childNodes.forEach((childNode)=>{
            childNode.unmount(parentDOMElement);
        });
    }
    asHTML(indent, context) {
        const childNodesHTML = this.childNodesAsHTML(indent, context), html = childNodesHTML; ///
        return html;
    }
    childNodesAsPlainText(context) {
        const childNodesPlainText = this.reduceChildNode((childNodesPlainText, childNode)=>{
            const childNodePlainText = childNode.asPlainText(context);
            childNodesPlainText = `${childNodesPlainText}${childNodePlainText}`;
            return childNodesPlainText;
        }, _constants.EMPTY_STRING);
        return childNodesPlainText;
    }
    static tagName = null;
    static className = null;
    static fromNothing() {
        return _html.default.fromNothing(InlineTextHTMLNode);
    }
    static fromOuterNode(outerNode) {
        return _html.default.fromOuterNode(InlineTextHTMLNode, outerNode);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvdGV4dC9pbmxpbmUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBIVE1MTm9kZSBmcm9tIFwiLi4vLi4vLi4vbm9kZS9odG1sXCI7XG5cbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi8uLi8uLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5saW5lVGV4dEhUTUxOb2RlIGV4dGVuZHMgSFRNTE5vZGUge1xuICBtb3VudChwYXJlbnRET01FbGVtZW50LCBzaWJsaW5nRE9NRWxlbWVudCwgY29udGV4dCkge1xuICAgIHRoaXMuY2hpbGROb2Rlcy5mb3JFYWNoKChjaGlsZE5vZGUpID0+IHtcbiAgICAgIHNpYmxpbmdET01FbGVtZW50ID0gY2hpbGROb2RlLm1vdW50KHBhcmVudERPTUVsZW1lbnQsIHNpYmxpbmdET01FbGVtZW50LCBjb250ZXh0KTtcbiAgICB9KTtcblxuICAgIHJldHVybiBzaWJsaW5nRE9NRWxlbWVudDtcbiAgfVxuXG4gIHVubW91bnQocGFyZW50RE9NRWxlbWVudCkge1xuICAgIHRoaXMuY2hpbGROb2Rlcy5mb3JFYWNoKChjaGlsZE5vZGUpID0+IHtcbiAgICAgIGNoaWxkTm9kZS51bm1vdW50KHBhcmVudERPTUVsZW1lbnQpO1xuICAgIH0pO1xuICB9XG5cbiAgYXNIVE1MKGluZGVudCwgY29udGV4dCkge1xuICAgIGNvbnN0IGNoaWxkTm9kZXNIVE1MID0gdGhpcy5jaGlsZE5vZGVzQXNIVE1MKGluZGVudCwgY29udGV4dCksXG4gICAgICAgICAgaHRtbCA9IGNoaWxkTm9kZXNIVE1MOyAgLy8vXG5cbiAgICByZXR1cm4gaHRtbDtcbiAgfVxuXG4gIGNoaWxkTm9kZXNBc1BsYWluVGV4dChjb250ZXh0KSB7XG4gICAgY29uc3QgY2hpbGROb2Rlc1BsYWluVGV4dCA9IHRoaXMucmVkdWNlQ2hpbGROb2RlKChjaGlsZE5vZGVzUGxhaW5UZXh0LCBjaGlsZE5vZGUpID0+IHtcbiAgICAgIGNvbnN0IGNoaWxkTm9kZVBsYWluVGV4dCA9IGNoaWxkTm9kZS5hc1BsYWluVGV4dChjb250ZXh0KTtcblxuICAgICAgY2hpbGROb2Rlc1BsYWluVGV4dCA9IGAke2NoaWxkTm9kZXNQbGFpblRleHR9JHtjaGlsZE5vZGVQbGFpblRleHR9YDtcblxuICAgICAgcmV0dXJuIGNoaWxkTm9kZXNQbGFpblRleHQ7XG4gICAgfSwgRU1QVFlfU1RSSU5HKTtcblxuICAgIHJldHVybiBjaGlsZE5vZGVzUGxhaW5UZXh0O1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBudWxsO1xuXG4gIHN0YXRpYyBjbGFzc05hbWUgPSBudWxsO1xuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHsgcmV0dXJuIEhUTUxOb2RlLmZyb21Ob3RoaW5nKElubGluZVRleHRIVE1MTm9kZSk7IH1cblxuICBzdGF0aWMgZnJvbU91dGVyTm9kZShvdXRlck5vZGUpIHsgcmV0dXJuIEhUTUxOb2RlLmZyb21PdXRlck5vZGUoSW5saW5lVGV4dEhUTUxOb2RlLCBvdXRlck5vZGUpOyB9XG59XG4iXSwibmFtZXMiOlsiSW5saW5lVGV4dEhUTUxOb2RlIiwiSFRNTE5vZGUiLCJtb3VudCIsInBhcmVudERPTUVsZW1lbnQiLCJzaWJsaW5nRE9NRWxlbWVudCIsImNvbnRleHQiLCJjaGlsZE5vZGVzIiwiZm9yRWFjaCIsImNoaWxkTm9kZSIsInVubW91bnQiLCJhc0hUTUwiLCJpbmRlbnQiLCJjaGlsZE5vZGVzSFRNTCIsImNoaWxkTm9kZXNBc0hUTUwiLCJodG1sIiwiY2hpbGROb2Rlc0FzUGxhaW5UZXh0IiwiY2hpbGROb2Rlc1BsYWluVGV4dCIsInJlZHVjZUNoaWxkTm9kZSIsImNoaWxkTm9kZVBsYWluVGV4dCIsImFzUGxhaW5UZXh0IiwiRU1QVFlfU1RSSU5HIiwidGFnTmFtZSIsImNsYXNzTmFtZSIsImZyb21Ob3RoaW5nIiwiZnJvbU91dGVyTm9kZSIsIm91dGVyTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBTUE7OztlQUFxQkE7Ozs2REFKQTsyQkFFUTs7Ozs7O0FBRWQsTUFBTUEsMkJBQTJCQyxhQUFRO0lBQ3REQyxNQUFNQyxnQkFBZ0IsRUFBRUMsaUJBQWlCLEVBQUVDLE9BQU8sRUFBRTtRQUNsRCxJQUFJLENBQUNDLFVBQVUsQ0FBQ0MsT0FBTyxDQUFDLENBQUNDO1lBQ3ZCSixvQkFBb0JJLFVBQVVOLEtBQUssQ0FBQ0Msa0JBQWtCQyxtQkFBbUJDO1FBQzNFO1FBRUEsT0FBT0Q7SUFDVDtJQUVBSyxRQUFRTixnQkFBZ0IsRUFBRTtRQUN4QixJQUFJLENBQUNHLFVBQVUsQ0FBQ0MsT0FBTyxDQUFDLENBQUNDO1lBQ3ZCQSxVQUFVQyxPQUFPLENBQUNOO1FBQ3BCO0lBQ0Y7SUFFQU8sT0FBT0MsTUFBTSxFQUFFTixPQUFPLEVBQUU7UUFDdEIsTUFBTU8saUJBQWlCLElBQUksQ0FBQ0MsZ0JBQWdCLENBQUNGLFFBQVFOLFVBQy9DUyxPQUFPRixnQkFBaUIsR0FBRztRQUVqQyxPQUFPRTtJQUNUO0lBRUFDLHNCQUFzQlYsT0FBTyxFQUFFO1FBQzdCLE1BQU1XLHNCQUFzQixJQUFJLENBQUNDLGVBQWUsQ0FBQyxDQUFDRCxxQkFBcUJSO1lBQ3JFLE1BQU1VLHFCQUFxQlYsVUFBVVcsV0FBVyxDQUFDZDtZQUVqRFcsc0JBQXNCLEdBQUdBLHNCQUFzQkUsb0JBQW9CO1lBRW5FLE9BQU9GO1FBQ1QsR0FBR0ksdUJBQVk7UUFFZixPQUFPSjtJQUNUO0lBRUEsT0FBT0ssVUFBVSxLQUFLO0lBRXRCLE9BQU9DLFlBQVksS0FBSztJQUV4QixPQUFPQyxjQUFjO1FBQUUsT0FBT3RCLGFBQVEsQ0FBQ3NCLFdBQVcsQ0FBQ3ZCO0lBQXFCO0lBRXhFLE9BQU93QixjQUFjQyxTQUFTLEVBQUU7UUFBRSxPQUFPeEIsYUFBUSxDQUFDdUIsYUFBYSxDQUFDeEIsb0JBQW9CeUI7SUFBWTtBQUNsRyJ9