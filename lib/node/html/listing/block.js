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
const _constants = require("../../../constants");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class BlockListingHTMLNode extends _html.default {
    content(context) {
        const content = this.reduceChildHTMLNode((content, childHTNLNode)=>{
            const blockLineHTMLNode = childHTNLNode, blockLineHTMLNodeContent = blockLineHTMLNode.content(context);
            content = `${content}
${blockLineHTMLNodeContent}`; ///
            return content;
        }, _constants.EMPTY_STRING);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvbGlzdGluZy9ibG9jay5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEhUTUxOb2RlIGZyb20gXCIuLi8uLi8uLi9ub2RlL2h0bWxcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uLy4uLy4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCbG9ja0xpc3RpbmdIVE1MTm9kZSBleHRlbmRzIEhUTUxOb2RlIHtcbiAgY29udGVudChjb250ZXh0KSB7XG4gICAgY29uc3QgY29udGVudCA9IHRoaXMucmVkdWNlQ2hpbGRIVE1MTm9kZSgoY29udGVudCwgY2hpbGRIVE5MTm9kZSkgPT4ge1xuICAgICAgY29uc3QgYmxvY2tMaW5lSFRNTE5vZGUgPSBjaGlsZEhUTkxOb2RlLCAgLy8vXG4gICAgICAgICAgICBibG9ja0xpbmVIVE1MTm9kZUNvbnRlbnQgPSBibG9ja0xpbmVIVE1MTm9kZS5jb250ZW50KGNvbnRleHQpO1xuXG4gICAgICBjb250ZW50ID0gYCR7Y29udGVudH1cbiR7YmxvY2tMaW5lSFRNTE5vZGVDb250ZW50fWA7IC8vL1xuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9LCBFTVBUWV9TVFJJTkcpO1xuXG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBjbGFzc05hbWUoY29udGV4dCkge1xuICAgIGNvbnN0IG1hcmtkb3duTm9kZSA9IHRoaXMuZ2V0TWFya2Rvd25Ob2RlKCksXG4gICAgICAgICAgY2xhc3NOYW1lID0gbWFya2Rvd25Ob2RlLmNsYXNzTmFtZShjb250ZXh0KTtcblxuICAgIHJldHVybiBjbGFzc05hbWU7XG4gIH1cblxuICBzdGF0aWMgbGluZXMgPSAyO1xuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJwcmVcIjtcblxuICBzdGF0aWMgY2xhc3NOYW1lID0gbnVsbDtcblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoQ2xhc3MsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGlmIChDbGFzcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBDbGFzcyA9IEJsb2NrTGlzdGluZ0hUTUxOb2RlOyAvLy9cbiAgICB9XG5cbiAgICBjb25zdCBibG9ja0xpc3RpbmdIVE1MTm9kZSA9IEhUTUxOb2RlLmZyb21Ob3RoaW5nKENsYXNzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgcmV0dXJuIGJsb2NrTGlzdGluZ0hUTUxOb2RlO1xuICB9XG5cbiAgc3RhdGljIGZyb21PdXRlck5vZGUoQ2xhc3MsIG91dGVyTm9kZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgaWYgKG91dGVyTm9kZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBvdXRlck5vZGUgPSBDbGFzczsgIC8vL1xuXG4gICAgICBDbGFzcyA9IEJsb2NrTGlzdGluZ0hUTUxOb2RlOyAvLy9cbiAgICB9XG5cbiAgICBjb25zdCBibG9ja0xpc3RpbmdIVE1MTm9kZSA9IEhUTUxOb2RlLmZyb21PdXRlck5vZGUoQ2xhc3MsIG91dGVyTm9kZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIHJldHVybiBibG9ja0xpc3RpbmdIVE1MTm9kZTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkJsb2NrTGlzdGluZ0hUTUxOb2RlIiwiSFRNTE5vZGUiLCJjb250ZW50IiwiY29udGV4dCIsInJlZHVjZUNoaWxkSFRNTE5vZGUiLCJjaGlsZEhUTkxOb2RlIiwiYmxvY2tMaW5lSFRNTE5vZGUiLCJibG9ja0xpbmVIVE1MTm9kZUNvbnRlbnQiLCJFTVBUWV9TVFJJTkciLCJjbGFzc05hbWUiLCJtYXJrZG93bk5vZGUiLCJnZXRNYXJrZG93bk5vZGUiLCJsaW5lcyIsInRhZ05hbWUiLCJmcm9tTm90aGluZyIsIkNsYXNzIiwicmVtYWluaW5nQXJndW1lbnRzIiwidW5kZWZpbmVkIiwiYmxvY2tMaXN0aW5nSFRNTE5vZGUiLCJmcm9tT3V0ZXJOb2RlIiwib3V0ZXJOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFNQTs7O2VBQXFCQTs7OzZEQUpBOzJCQUVROzs7Ozs7QUFFZCxNQUFNQSw2QkFBNkJDLGFBQVE7SUFDeERDLFFBQVFDLE9BQU8sRUFBRTtRQUNmLE1BQU1ELFVBQVUsSUFBSSxDQUFDRSxtQkFBbUIsQ0FBQyxDQUFDRixTQUFTRztZQUNqRCxNQUFNQyxvQkFBb0JELGVBQ3BCRSwyQkFBMkJELGtCQUFrQkosT0FBTyxDQUFDQztZQUUzREQsVUFBVSxHQUFHQSxRQUFRO0FBQzNCLEVBQUVLLDBCQUEwQixFQUFFLEdBQUc7WUFFM0IsT0FBT0w7UUFDVCxHQUFHTSx1QkFBWTtRQUVmLE9BQU9OO0lBQ1Q7SUFFQU8sVUFBVU4sT0FBTyxFQUFFO1FBQ2pCLE1BQU1PLGVBQWUsSUFBSSxDQUFDQyxlQUFlLElBQ25DRixZQUFZQyxhQUFhRCxTQUFTLENBQUNOO1FBRXpDLE9BQU9NO0lBQ1Q7SUFFQSxPQUFPRyxRQUFRLEVBQUU7SUFFakIsT0FBT0MsVUFBVSxNQUFNO0lBRXZCLE9BQU9KLFlBQVksS0FBSztJQUV4QixPQUFPSyxZQUFZQyxLQUFLLEVBQUUsR0FBR0Msa0JBQWtCLEVBQUU7UUFDL0MsSUFBSUQsVUFBVUUsV0FBVztZQUN2QkYsUUFBUWYsc0JBQXNCLEdBQUc7UUFDbkM7UUFFQSxNQUFNa0IsdUJBQXVCakIsYUFBUSxDQUFDYSxXQUFXLENBQUNDLFVBQVVDO1FBRTVELE9BQU9FO0lBQ1Q7SUFFQSxPQUFPQyxjQUFjSixLQUFLLEVBQUVLLFNBQVMsRUFBRSxHQUFHSixrQkFBa0IsRUFBRTtRQUM1RCxJQUFJSSxjQUFjSCxXQUFXO1lBQzNCRyxZQUFZTCxPQUFRLEdBQUc7WUFFdkJBLFFBQVFmLHNCQUFzQixHQUFHO1FBQ25DO1FBRUEsTUFBTWtCLHVCQUF1QmpCLGFBQVEsQ0FBQ2tCLGFBQWEsQ0FBQ0osT0FBT0ssY0FBY0o7UUFFekUsT0FBT0U7SUFDVDtBQUNGIn0=