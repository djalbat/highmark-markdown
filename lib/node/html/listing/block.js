"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return BlockListingHTMLNode;
    }
});
const _html = /*#__PURE__*/ _interop_require_default(require("../../../node/html"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class BlockListingHTMLNode extends _html.default {
    content(context) {
        const content = this.reduceChildHTMLNode((content, childHTNLNode)=>{
            const blockLineHTMLNode = childHTNLNode, blockLineHTMLNodeContent = blockLineHTMLNode.content(context);
            content = content !== null ? `${content}
${blockLineHTMLNodeContent}` : blockLineHTMLNodeContent; ///
            return content;
        }, null);
        return content;
    }
    className(context) {
        const markdownNode = this.getMarkdownNode(), className = markdownNode.className(context);
        return className;
    }
    static lines = 2;
    static tagName = "pre";
    static className = null;
    static fromNothing(Class, ...remainingArguments) {
        if (Class === undefined) {
            Class = BlockListingHTMLNode; ///
        }
        const blockListingHTMLNode = _html.default.fromNothing(Class, ...remainingArguments);
        return blockListingHTMLNode;
    }
    static fromOuterNode(Class, outerNode, ...remainingArguments) {
        if (outerNode === undefined) {
            outerNode = Class; ///
            Class = BlockListingHTMLNode; ///
        }
        const blockListingHTMLNode = _html.default.fromOuterNode(Class, outerNode, ...remainingArguments);
        return blockListingHTMLNode;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvbGlzdGluZy9ibG9jay5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEhUTUxOb2RlIGZyb20gXCIuLi8uLi8uLi9ub2RlL2h0bWxcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmxvY2tMaXN0aW5nSFRNTE5vZGUgZXh0ZW5kcyBIVE1MTm9kZSB7XG4gIGNvbnRlbnQoY29udGV4dCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLnJlZHVjZUNoaWxkSFRNTE5vZGUoKGNvbnRlbnQsIGNoaWxkSFROTE5vZGUpID0+IHtcbiAgICAgIGNvbnN0IGJsb2NrTGluZUhUTUxOb2RlID0gY2hpbGRIVE5MTm9kZSwgIC8vL1xuICAgICAgICAgICAgYmxvY2tMaW5lSFRNTE5vZGVDb250ZW50ID0gYmxvY2tMaW5lSFRNTE5vZGUuY29udGVudChjb250ZXh0KTtcblxuICAgICAgY29udGVudCA9IChjb250ZW50ICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICBgJHtjb250ZW50fVxuJHtibG9ja0xpbmVIVE1MTm9kZUNvbnRlbnR9YCA6XG4gICAgICAgICAgICAgICAgICAgIGJsb2NrTGluZUhUTUxOb2RlQ29udGVudDsgLy8vXG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0sIG51bGwpO1xuXG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBjbGFzc05hbWUoY29udGV4dCkge1xuICAgIGNvbnN0IG1hcmtkb3duTm9kZSA9IHRoaXMuZ2V0TWFya2Rvd25Ob2RlKCksXG4gICAgICAgICAgY2xhc3NOYW1lID0gbWFya2Rvd25Ob2RlLmNsYXNzTmFtZShjb250ZXh0KTtcblxuICAgIHJldHVybiBjbGFzc05hbWU7XG4gIH1cblxuICBzdGF0aWMgbGluZXMgPSAyO1xuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJwcmVcIjtcblxuICBzdGF0aWMgY2xhc3NOYW1lID0gbnVsbDtcblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoQ2xhc3MsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGlmIChDbGFzcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBDbGFzcyA9IEJsb2NrTGlzdGluZ0hUTUxOb2RlOyAvLy9cbiAgICB9XG5cbiAgICBjb25zdCBibG9ja0xpc3RpbmdIVE1MTm9kZSA9IEhUTUxOb2RlLmZyb21Ob3RoaW5nKENsYXNzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgcmV0dXJuIGJsb2NrTGlzdGluZ0hUTUxOb2RlO1xuICB9XG5cbiAgc3RhdGljIGZyb21PdXRlck5vZGUoQ2xhc3MsIG91dGVyTm9kZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgaWYgKG91dGVyTm9kZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBvdXRlck5vZGUgPSBDbGFzczsgIC8vL1xuXG4gICAgICBDbGFzcyA9IEJsb2NrTGlzdGluZ0hUTUxOb2RlOyAvLy9cbiAgICB9XG5cbiAgICBjb25zdCBibG9ja0xpc3RpbmdIVE1MTm9kZSA9IEhUTUxOb2RlLmZyb21PdXRlck5vZGUoQ2xhc3MsIG91dGVyTm9kZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIHJldHVybiBibG9ja0xpc3RpbmdIVE1MTm9kZTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkJsb2NrTGlzdGluZ0hUTUxOb2RlIiwiSFRNTE5vZGUiLCJjb250ZW50IiwiY29udGV4dCIsInJlZHVjZUNoaWxkSFRNTE5vZGUiLCJjaGlsZEhUTkxOb2RlIiwiYmxvY2tMaW5lSFRNTE5vZGUiLCJibG9ja0xpbmVIVE1MTm9kZUNvbnRlbnQiLCJjbGFzc05hbWUiLCJtYXJrZG93bk5vZGUiLCJnZXRNYXJrZG93bk5vZGUiLCJsaW5lcyIsInRhZ05hbWUiLCJmcm9tTm90aGluZyIsIkNsYXNzIiwicmVtYWluaW5nQXJndW1lbnRzIiwidW5kZWZpbmVkIiwiYmxvY2tMaXN0aW5nSFRNTE5vZGUiLCJmcm9tT3V0ZXJOb2RlIiwib3V0ZXJOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFJQTs7O2VBQXFCQTs7OzZEQUZBOzs7Ozs7QUFFTixNQUFNQSw2QkFBNkJDLGFBQVE7SUFDeERDLFFBQVFDLE9BQU8sRUFBRTtRQUNmLE1BQU1ELFVBQVUsSUFBSSxDQUFDRSxtQkFBbUIsQ0FBQyxDQUFDRixTQUFTRztZQUNqRCxNQUFNQyxvQkFBb0JELGVBQ3BCRSwyQkFBMkJELGtCQUFrQkosT0FBTyxDQUFDQztZQUUzREQsVUFBVSxBQUFDQSxZQUFZLE9BQ1gsR0FBR0EsUUFBUTtBQUM3QixFQUFFSywwQkFBMEIsR0FDUkEsMEJBQTBCLEdBQUc7WUFFM0MsT0FBT0w7UUFDVCxHQUFHO1FBRUgsT0FBT0E7SUFDVDtJQUVBTSxVQUFVTCxPQUFPLEVBQUU7UUFDakIsTUFBTU0sZUFBZSxJQUFJLENBQUNDLGVBQWUsSUFDbkNGLFlBQVlDLGFBQWFELFNBQVMsQ0FBQ0w7UUFFekMsT0FBT0s7SUFDVDtJQUVBLE9BQU9HLFFBQVEsRUFBRTtJQUVqQixPQUFPQyxVQUFVLE1BQU07SUFFdkIsT0FBT0osWUFBWSxLQUFLO0lBRXhCLE9BQU9LLFlBQVlDLEtBQUssRUFBRSxHQUFHQyxrQkFBa0IsRUFBRTtRQUMvQyxJQUFJRCxVQUFVRSxXQUFXO1lBQ3ZCRixRQUFRZCxzQkFBc0IsR0FBRztRQUNuQztRQUVBLE1BQU1pQix1QkFBdUJoQixhQUFRLENBQUNZLFdBQVcsQ0FBQ0MsVUFBVUM7UUFFNUQsT0FBT0U7SUFDVDtJQUVBLE9BQU9DLGNBQWNKLEtBQUssRUFBRUssU0FBUyxFQUFFLEdBQUdKLGtCQUFrQixFQUFFO1FBQzVELElBQUlJLGNBQWNILFdBQVc7WUFDM0JHLFlBQVlMLE9BQVEsR0FBRztZQUV2QkEsUUFBUWQsc0JBQXNCLEdBQUc7UUFDbkM7UUFFQSxNQUFNaUIsdUJBQXVCaEIsYUFBUSxDQUFDaUIsYUFBYSxDQUFDSixPQUFPSyxjQUFjSjtRQUV6RSxPQUFPRTtJQUNUO0FBQ0YifQ==