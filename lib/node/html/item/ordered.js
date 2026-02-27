"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return OrderedItemHTMLNode;
    }
});
const _html = /*#__PURE__*/ _interop_require_default(require("../../../node/html"));
const _attributeNames = require("../../../attributeNames");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class OrderedItemHTMLNode extends _html.default {
    value(context) {
        const markdownNode = this.getMarkdownNode(), value = markdownNode.value(context);
        return value;
    }
    attributeName(context) {
        const attributeName = _attributeNames.VALUE_ATTRIBUTE_NAME;
        return attributeName;
    }
    attributeValue(context) {
        const value = this.value(context), attributeValue = value; ///
        return attributeValue;
    }
    static tagName = "li";
    static className = null;
    static fromNothing() {
        return _html.default.fromNothing(OrderedItemHTMLNode);
    }
    static fromOuterNode(outerNode) {
        return _html.default.fromOuterNode(OrderedItemHTMLNode, outerNode);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvaXRlbS9vcmRlcmVkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgSFRNTE5vZGUgZnJvbSBcIi4uLy4uLy4uL25vZGUvaHRtbFwiO1xuXG5pbXBvcnQgeyBWQUxVRV9BVFRSSUJVVEVfTkFNRSB9IGZyb20gXCIuLi8uLi8uLi9hdHRyaWJ1dGVOYW1lc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPcmRlcmVkSXRlbUhUTUxOb2RlIGV4dGVuZHMgSFRNTE5vZGUge1xuICB2YWx1ZShjb250ZXh0KSB7XG4gICAgY29uc3QgbWFya2Rvd25Ob2RlID0gdGhpcy5nZXRNYXJrZG93bk5vZGUoKSxcbiAgICAgICAgICB2YWx1ZSA9IG1hcmtkb3duTm9kZS52YWx1ZShjb250ZXh0KTtcblxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIGF0dHJpYnV0ZU5hbWUoY29udGV4dCkge1xuICAgIGNvbnN0IGF0dHJpYnV0ZU5hbWUgPSBWQUxVRV9BVFRSSUJVVEVfTkFNRTtcblxuICAgIHJldHVybiBhdHRyaWJ1dGVOYW1lO1xuICB9XG5cbiAgYXR0cmlidXRlVmFsdWUoY29udGV4dCkge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy52YWx1ZShjb250ZXh0KSxcbiAgICAgICAgICBhdHRyaWJ1dGVWYWx1ZSA9IHZhbHVlOyAvLy9cblxuICAgIHJldHVybiBhdHRyaWJ1dGVWYWx1ZTtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJsaVwiO1xuXG4gIHN0YXRpYyBjbGFzc05hbWUgPSBudWxsO1xuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHsgcmV0dXJuIEhUTUxOb2RlLmZyb21Ob3RoaW5nKE9yZGVyZWRJdGVtSFRNTE5vZGUpOyB9XG5cbiAgc3RhdGljIGZyb21PdXRlck5vZGUob3V0ZXJOb2RlKSB7IHJldHVybiBIVE1MTm9kZS5mcm9tT3V0ZXJOb2RlKE9yZGVyZWRJdGVtSFRNTE5vZGUsIG91dGVyTm9kZSk7IH1cbn1cbiJdLCJuYW1lcyI6WyJPcmRlcmVkSXRlbUhUTUxOb2RlIiwiSFRNTE5vZGUiLCJ2YWx1ZSIsImNvbnRleHQiLCJtYXJrZG93bk5vZGUiLCJnZXRNYXJrZG93bk5vZGUiLCJhdHRyaWJ1dGVOYW1lIiwiVkFMVUVfQVRUUklCVVRFX05BTUUiLCJhdHRyaWJ1dGVWYWx1ZSIsInRhZ05hbWUiLCJjbGFzc05hbWUiLCJmcm9tTm90aGluZyIsImZyb21PdXRlck5vZGUiLCJvdXRlck5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU1BOzs7ZUFBcUJBOzs7NkRBSkE7Z0NBRWdCOzs7Ozs7QUFFdEIsTUFBTUEsNEJBQTRCQyxhQUFRO0lBQ3ZEQyxNQUFNQyxPQUFPLEVBQUU7UUFDYixNQUFNQyxlQUFlLElBQUksQ0FBQ0MsZUFBZSxJQUNuQ0gsUUFBUUUsYUFBYUYsS0FBSyxDQUFDQztRQUVqQyxPQUFPRDtJQUNUO0lBRUFJLGNBQWNILE9BQU8sRUFBRTtRQUNyQixNQUFNRyxnQkFBZ0JDLG9DQUFvQjtRQUUxQyxPQUFPRDtJQUNUO0lBRUFFLGVBQWVMLE9BQU8sRUFBRTtRQUN0QixNQUFNRCxRQUFRLElBQUksQ0FBQ0EsS0FBSyxDQUFDQyxVQUNuQkssaUJBQWlCTixPQUFPLEdBQUc7UUFFakMsT0FBT007SUFDVDtJQUVBLE9BQU9DLFVBQVUsS0FBSztJQUV0QixPQUFPQyxZQUFZLEtBQUs7SUFFeEIsT0FBT0MsY0FBYztRQUFFLE9BQU9WLGFBQVEsQ0FBQ1UsV0FBVyxDQUFDWDtJQUFzQjtJQUV6RSxPQUFPWSxjQUFjQyxTQUFTLEVBQUU7UUFBRSxPQUFPWixhQUFRLENBQUNXLGFBQWEsQ0FBQ1oscUJBQXFCYTtJQUFZO0FBQ25HIn0=