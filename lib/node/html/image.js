"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ImageHTMLNode;
    }
});
const _html = /*#__PURE__*/ _interop_require_default(require("../../node/html"));
const _constants = require("../../constants");
const _dom = require("../../utilities/dom");
const _attributeNames = require("../../attributeNames");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class ImageHTMLNode extends _html.default {
    src(context) {
        const markdownNode = this.getMarkdownNode(), src = markdownNode.src(context);
        return src;
    }
    alt(context) {
        const alt = this.fromFirstChildNode((firstChildNode)=>{
            const inlineTextHTMLNode = firstChildNode, plainText = inlineTextHTMLNode.asPlainText(context), alt = plainText; ///
            return alt;
        });
        return alt;
    }
    startingTag(context) {
        const tagName = this.tagName(context), attributeNames = this.attributeNames(context), attributeValues = this.attributeValues(context), attributesHTML = attributeNames.reduce((attributesHML, attributeName, index)=>{
            const attributeValue = attributeValues[index];
            attributesHML = attributesHML === null ? `${attributeName}="${attributeValue}"` : `${attributesHML} ${attributeName}="${attributeValue}"`;
            return attributesHML;
        }, null), selfClosingTag = `<${tagName} ${attributesHTML}>`;
        return selfClosingTag;
    }
    attributeNames(context) {
        const attributeNames = [
            _attributeNames.ALT_ATTRIBUTE_NAME,
            _attributeNames.SRC_ATTRIBUTE_NAME
        ];
        return attributeNames;
    }
    attributeValues(context) {
        const alt = this.alt(context), src = this.src(context), attributeValues = [
            alt,
            src
        ];
        return attributeValues;
    }
    adjustIndent(indent) {
        indent = null;
        return indent;
    }
    mount(parentDOMElement, siblingDOMElement, context) {
        const domElement = this.createDOMElement(context);
        this.setDOMElement(domElement);
        siblingDOMElement !== null ? (0, _dom.insertAfter)(domElement, parentDOMElement, siblingDOMElement) : (0, _dom.insertBeforehand)(domElement, parentDOMElement);
        siblingDOMElement = domElement; ///
        return siblingDOMElement;
    }
    unmount(parentDOMElement) {
        const domElement = this.getDOMElement();
        (0, _dom.remove)(domElement, parentDOMElement);
        this.resetDOMElement();
    }
    createDOMElement(context) {
        let domElement;
        const tagName = this.tagName(context);
        domElement = document.createElement(tagName);
        const attributeNames = this.attributeNames(context), attributeValues = this.attributeValues(context);
        attributeNames.forEach((attributeName, index)=>{
            const attributeValue = attributeValues[index];
            domElement.setAttribute(attributeName, attributeValue);
        });
        return domElement;
    }
    childNodesAsHTML(indent, context) {
        const childNodesHTML = _constants.EMPTY_STRING;
        return childNodesHTML;
    }
    static tagName = "img";
    static className = null;
    static fromNothing() {
        return _html.default.fromNothing(ImageHTMLNode);
    }
    static fromOuterNode(outerNode) {
        return _html.default.fromOuterNode(ImageHTMLNode, outerNode);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvaW1hZ2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBIVE1MTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9odG1sXCI7XG5cbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IHJlbW92ZSwgaW5zZXJ0QWZ0ZXIsIGluc2VydEJlZm9yZWhhbmQgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2RvbVwiO1xuaW1wb3J0IHsgQUxUX0FUVFJJQlVURV9OQU1FLCBTUkNfQVRUUklCVVRFX05BTUUgfSBmcm9tIFwiLi4vLi4vYXR0cmlidXRlTmFtZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW1hZ2VIVE1MTm9kZSBleHRlbmRzIEhUTUxOb2RlIHtcbiAgc3JjKGNvbnRleHQpIHtcbiAgICBjb25zdCBtYXJrZG93bk5vZGUgPSB0aGlzLmdldE1hcmtkb3duTm9kZSgpLFxuICAgICAgICAgIHNyYyA9IG1hcmtkb3duTm9kZS5zcmMoY29udGV4dCk7XG5cbiAgICByZXR1cm4gc3JjO1xuICB9XG5cbiAgYWx0KGNvbnRleHQpIHtcbiAgICBjb25zdCBhbHQgPSB0aGlzLmZyb21GaXJzdENoaWxkTm9kZSgoZmlyc3RDaGlsZE5vZGUpID0+IHtcbiAgICAgIGNvbnN0IGlubGluZVRleHRIVE1MTm9kZSA9IGZpcnN0Q2hpbGROb2RlLCAgLy8vXG4gICAgICAgICAgICBwbGFpblRleHQgPSBpbmxpbmVUZXh0SFRNTE5vZGUuYXNQbGFpblRleHQoY29udGV4dCksXG4gICAgICAgICAgICBhbHQgPSBwbGFpblRleHQ7ICAvLy9cblxuICAgICAgcmV0dXJuIGFsdDtcbiAgICB9KTtcblxuICAgIHJldHVybiBhbHQ7XG4gIH1cblxuICBzdGFydGluZ1RhZyhjb250ZXh0KSB7XG4gICAgY29uc3QgdGFnTmFtZSA9IHRoaXMudGFnTmFtZShjb250ZXh0KSxcbiAgICAgICAgICBhdHRyaWJ1dGVOYW1lcyA9IHRoaXMuYXR0cmlidXRlTmFtZXMoY29udGV4dCksXG4gICAgICAgICAgYXR0cmlidXRlVmFsdWVzID0gdGhpcy5hdHRyaWJ1dGVWYWx1ZXMoY29udGV4dCksXG4gICAgICAgICAgYXR0cmlidXRlc0hUTUwgPSBhdHRyaWJ1dGVOYW1lcy5yZWR1Y2UoKGF0dHJpYnV0ZXNITUwsIGF0dHJpYnV0ZU5hbWUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBhdHRyaWJ1dGVWYWx1ZSA9IGF0dHJpYnV0ZVZhbHVlc1tpbmRleF07XG5cbiAgICAgICAgICAgIGF0dHJpYnV0ZXNITUwgPSAoYXR0cmlidXRlc0hNTCA9PT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7YXR0cmlidXRlTmFtZX09XCIke2F0dHJpYnV0ZVZhbHVlfVwiYCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAke2F0dHJpYnV0ZXNITUx9ICR7YXR0cmlidXRlTmFtZX09XCIke2F0dHJpYnV0ZVZhbHVlfVwiYDtcblxuICAgICAgICAgICAgcmV0dXJuIGF0dHJpYnV0ZXNITUw7XG5cbiAgICAgICAgICB9LCBudWxsKSxcbiAgICAgICAgICBzZWxmQ2xvc2luZ1RhZyA9IGA8JHt0YWdOYW1lfSAke2F0dHJpYnV0ZXNIVE1MfT5gO1xuXG4gICAgcmV0dXJuIHNlbGZDbG9zaW5nVGFnO1xuICB9XG5cbiAgYXR0cmlidXRlTmFtZXMoY29udGV4dCkge1xuICAgIGNvbnN0IGF0dHJpYnV0ZU5hbWVzID0gW1xuICAgICAgQUxUX0FUVFJJQlVURV9OQU1FLFxuICAgICAgU1JDX0FUVFJJQlVURV9OQU1FXG4gICAgXTtcblxuICAgIHJldHVybiBhdHRyaWJ1dGVOYW1lcztcbiAgfVxuXG4gIGF0dHJpYnV0ZVZhbHVlcyhjb250ZXh0KSB7XG4gICAgY29uc3QgYWx0ID0gdGhpcy5hbHQoY29udGV4dCksXG4gICAgICAgICAgc3JjID0gdGhpcy5zcmMoY29udGV4dCksXG4gICAgICAgICAgYXR0cmlidXRlVmFsdWVzID0gW1xuICAgICAgICAgICAgYWx0LFxuICAgICAgICAgICAgc3JjXG4gICAgICAgICAgXTtcblxuICAgIHJldHVybiBhdHRyaWJ1dGVWYWx1ZXM7XG4gIH1cblxuICBhZGp1c3RJbmRlbnQoaW5kZW50KSB7XG4gICAgaW5kZW50ID0gbnVsbDtcblxuICAgIHJldHVybiBpbmRlbnQ7XG4gIH1cblxuICBtb3VudChwYXJlbnRET01FbGVtZW50LCBzaWJsaW5nRE9NRWxlbWVudCwgY29udGV4dCkge1xuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSB0aGlzLmNyZWF0ZURPTUVsZW1lbnQoY29udGV4dCk7XG5cbiAgICB0aGlzLnNldERPTUVsZW1lbnQoZG9tRWxlbWVudCk7XG5cbiAgICAoc2libGluZ0RPTUVsZW1lbnQgIT09IG51bGwpID9cbiAgICAgIGluc2VydEFmdGVyKGRvbUVsZW1lbnQsIHBhcmVudERPTUVsZW1lbnQsIHNpYmxpbmdET01FbGVtZW50KSA6XG4gICAgICAgIGluc2VydEJlZm9yZWhhbmQoZG9tRWxlbWVudCwgcGFyZW50RE9NRWxlbWVudCk7XG5cbiAgICBzaWJsaW5nRE9NRWxlbWVudCA9IGRvbUVsZW1lbnQ7IC8vL1xuXG4gICAgcmV0dXJuIHNpYmxpbmdET01FbGVtZW50O1xuICB9XG5cbiAgdW5tb3VudChwYXJlbnRET01FbGVtZW50KSB7XG4gICAgY29uc3QgZG9tRWxlbWVudCA9IHRoaXMuZ2V0RE9NRWxlbWVudCgpO1xuXG4gICAgcmVtb3ZlKGRvbUVsZW1lbnQsIHBhcmVudERPTUVsZW1lbnQpO1xuXG4gICAgdGhpcy5yZXNldERPTUVsZW1lbnQoKTtcbiAgfVxuXG4gIGNyZWF0ZURPTUVsZW1lbnQoY29udGV4dCkge1xuICAgIGxldCBkb21FbGVtZW50O1xuXG4gICAgY29uc3QgdGFnTmFtZSA9IHRoaXMudGFnTmFtZShjb250ZXh0KTtcblxuICAgIGRvbUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZ05hbWUpO1xuXG4gICAgY29uc3QgYXR0cmlidXRlTmFtZXMgPSB0aGlzLmF0dHJpYnV0ZU5hbWVzKGNvbnRleHQpLFxuICAgICAgICAgIGF0dHJpYnV0ZVZhbHVlcyA9IHRoaXMuYXR0cmlidXRlVmFsdWVzKGNvbnRleHQpO1xuXG4gICAgYXR0cmlidXRlTmFtZXMuZm9yRWFjaCgoYXR0cmlidXRlTmFtZSwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IGF0dHJpYnV0ZVZhbHVlID0gYXR0cmlidXRlVmFsdWVzW2luZGV4XTtcblxuICAgICAgZG9tRWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSwgYXR0cmlidXRlVmFsdWUpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGRvbUVsZW1lbnQ7XG4gIH1cblxuICBjaGlsZE5vZGVzQXNIVE1MKGluZGVudCwgY29udGV4dCkge1xuICAgIGNvbnN0IGNoaWxkTm9kZXNIVE1MID0gRU1QVFlfU1RSSU5HO1xuXG4gICAgcmV0dXJuIGNoaWxkTm9kZXNIVE1MO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImltZ1wiO1xuXG4gIHN0YXRpYyBjbGFzc05hbWUgPSBudWxsO1xuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHsgcmV0dXJuIEhUTUxOb2RlLmZyb21Ob3RoaW5nKEltYWdlSFRNTE5vZGUpOyB9XG5cbiAgc3RhdGljIGZyb21PdXRlck5vZGUob3V0ZXJOb2RlKSB7IHJldHVybiBIVE1MTm9kZS5mcm9tT3V0ZXJOb2RlKEltYWdlSFRNTE5vZGUsIG91dGVyTm9kZSk7IH1cbn1cbiJdLCJuYW1lcyI6WyJJbWFnZUhUTUxOb2RlIiwiSFRNTE5vZGUiLCJzcmMiLCJjb250ZXh0IiwibWFya2Rvd25Ob2RlIiwiZ2V0TWFya2Rvd25Ob2RlIiwiYWx0IiwiZnJvbUZpcnN0Q2hpbGROb2RlIiwiZmlyc3RDaGlsZE5vZGUiLCJpbmxpbmVUZXh0SFRNTE5vZGUiLCJwbGFpblRleHQiLCJhc1BsYWluVGV4dCIsInN0YXJ0aW5nVGFnIiwidGFnTmFtZSIsImF0dHJpYnV0ZU5hbWVzIiwiYXR0cmlidXRlVmFsdWVzIiwiYXR0cmlidXRlc0hUTUwiLCJyZWR1Y2UiLCJhdHRyaWJ1dGVzSE1MIiwiYXR0cmlidXRlTmFtZSIsImluZGV4IiwiYXR0cmlidXRlVmFsdWUiLCJzZWxmQ2xvc2luZ1RhZyIsIkFMVF9BVFRSSUJVVEVfTkFNRSIsIlNSQ19BVFRSSUJVVEVfTkFNRSIsImFkanVzdEluZGVudCIsImluZGVudCIsIm1vdW50IiwicGFyZW50RE9NRWxlbWVudCIsInNpYmxpbmdET01FbGVtZW50IiwiZG9tRWxlbWVudCIsImNyZWF0ZURPTUVsZW1lbnQiLCJzZXRET01FbGVtZW50IiwiaW5zZXJ0QWZ0ZXIiLCJpbnNlcnRCZWZvcmVoYW5kIiwidW5tb3VudCIsImdldERPTUVsZW1lbnQiLCJyZW1vdmUiLCJyZXNldERPTUVsZW1lbnQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJmb3JFYWNoIiwic2V0QXR0cmlidXRlIiwiY2hpbGROb2Rlc0FzSFRNTCIsImNoaWxkTm9kZXNIVE1MIiwiRU1QVFlfU1RSSU5HIiwiY2xhc3NOYW1lIiwiZnJvbU5vdGhpbmciLCJmcm9tT3V0ZXJOb2RlIiwib3V0ZXJOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFRQTs7O2VBQXFCQTs7OzZEQU5BOzJCQUVRO3FCQUN5QjtnQ0FDQzs7Ozs7O0FBRXhDLE1BQU1BLHNCQUFzQkMsYUFBUTtJQUNqREMsSUFBSUMsT0FBTyxFQUFFO1FBQ1gsTUFBTUMsZUFBZSxJQUFJLENBQUNDLGVBQWUsSUFDbkNILE1BQU1FLGFBQWFGLEdBQUcsQ0FBQ0M7UUFFN0IsT0FBT0Q7SUFDVDtJQUVBSSxJQUFJSCxPQUFPLEVBQUU7UUFDWCxNQUFNRyxNQUFNLElBQUksQ0FBQ0Msa0JBQWtCLENBQUMsQ0FBQ0M7WUFDbkMsTUFBTUMscUJBQXFCRCxnQkFDckJFLFlBQVlELG1CQUFtQkUsV0FBVyxDQUFDUixVQUMzQ0csTUFBTUksV0FBWSxHQUFH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