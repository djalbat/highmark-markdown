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
        let content = this.reduceChildHTMLNode((content, childHTNLNode)=>{
            const blockLineHTMLNode = childHTNLNode, blockLineHTMLNodeContent = blockLineHTMLNode.content(context);
            content = content === null ? blockLineHTMLNodeContent : `${content}
${blockLineHTMLNodeContent}`;
            return content;
        }, null);
        if (content === null) {
            content = _constants.EMPTY_STRING;
        }
        return content;
    }
    className(context) {
        const markdownNode = this.getMarkdownNode(), languageName = markdownNode.languageName(context), className = languageName; ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvbGlzdGluZy9ibG9jay5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEhUTUxOb2RlIGZyb20gXCIuLi8uLi8uLi9ub2RlL2h0bWxcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uLy4uLy4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCbG9ja0xpc3RpbmdIVE1MTm9kZSBleHRlbmRzIEhUTUxOb2RlIHtcbiAgY29udGVudChjb250ZXh0KSB7XG4gICAgbGV0IGNvbnRlbnQgPSB0aGlzLnJlZHVjZUNoaWxkSFRNTE5vZGUoKGNvbnRlbnQsIGNoaWxkSFROTE5vZGUpID0+IHtcbiAgICAgIGNvbnN0IGJsb2NrTGluZUhUTUxOb2RlID0gY2hpbGRIVE5MTm9kZSwgIC8vL1xuICAgICAgICAgICAgYmxvY2tMaW5lSFRNTE5vZGVDb250ZW50ID0gYmxvY2tMaW5lSFRNTE5vZGUuY29udGVudChjb250ZXh0KTtcblxuICAgICAgY29udGVudCA9IChjb250ZW50ID09PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICBibG9ja0xpbmVIVE1MTm9kZUNvbnRlbnQgOlxuICAgICAgICAgICAgICAgICAgIGAke2NvbnRlbnR9XG4ke2Jsb2NrTGluZUhUTUxOb2RlQ29udGVudH1gO1xuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9LCBudWxsKTtcblxuICAgIGlmIChjb250ZW50ID09PSBudWxsKSB7XG4gICAgICBjb250ZW50ID0gRU1QVFlfU1RSSU5HO1xuICAgIH1cblxuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgY2xhc3NOYW1lKGNvbnRleHQpIHtcbiAgICBjb25zdCBtYXJrZG93bk5vZGUgPSB0aGlzLmdldE1hcmtkb3duTm9kZSgpLFxuICAgICAgICAgIGxhbmd1YWdlTmFtZSA9IG1hcmtkb3duTm9kZS5sYW5ndWFnZU5hbWUoY29udGV4dCksXG4gICAgICAgICAgY2xhc3NOYW1lID0gbGFuZ3VhZ2VOYW1lOyAvLy9cblxuICAgIHJldHVybiBjbGFzc05hbWU7XG4gIH1cblxuICBzdGF0aWMgbGluZXMgPSAyO1xuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJwcmVcIjtcblxuICBzdGF0aWMgY2xhc3NOYW1lID0gbnVsbDtcblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoQ2xhc3MsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGlmIChDbGFzcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBDbGFzcyA9IEJsb2NrTGlzdGluZ0hUTUxOb2RlOyAvLy9cbiAgICB9XG5cbiAgICBjb25zdCBibG9ja0xpc3RpbmdIVE1MTm9kZSA9IEhUTUxOb2RlLmZyb21Ob3RoaW5nKENsYXNzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgcmV0dXJuIGJsb2NrTGlzdGluZ0hUTUxOb2RlO1xuICB9XG5cbiAgc3RhdGljIGZyb21PdXRlck5vZGUoQ2xhc3MsIG91dGVyTm9kZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgaWYgKG91dGVyTm9kZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBvdXRlck5vZGUgPSBDbGFzczsgIC8vL1xuXG4gICAgICBDbGFzcyA9IEJsb2NrTGlzdGluZ0hUTUxOb2RlOyAvLy9cbiAgICB9XG5cbiAgICBjb25zdCBibG9ja0xpc3RpbmdIVE1MTm9kZSA9IEhUTUxOb2RlLmZyb21PdXRlck5vZGUoQ2xhc3MsIG91dGVyTm9kZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIHJldHVybiBibG9ja0xpc3RpbmdIVE1MTm9kZTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkJsb2NrTGlzdGluZ0hUTUxOb2RlIiwiSFRNTE5vZGUiLCJjb250ZW50IiwiY29udGV4dCIsInJlZHVjZUNoaWxkSFRNTE5vZGUiLCJjaGlsZEhUTkxOb2RlIiwiYmxvY2tMaW5lSFRNTE5vZGUiLCJibG9ja0xpbmVIVE1MTm9kZUNvbnRlbnQiLCJFTVBUWV9TVFJJTkciLCJjbGFzc05hbWUiLCJtYXJrZG93bk5vZGUiLCJnZXRNYXJrZG93bk5vZGUiLCJsYW5ndWFnZU5hbWUiLCJsaW5lcyIsInRhZ05hbWUiLCJmcm9tTm90aGluZyIsIkNsYXNzIiwicmVtYWluaW5nQXJndW1lbnRzIiwidW5kZWZpbmVkIiwiYmxvY2tMaXN0aW5nSFRNTE5vZGUiLCJmcm9tT3V0ZXJOb2RlIiwib3V0ZXJOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFNQTs7O2VBQXFCQTs7OzZEQUpBOzJCQUVROzs7Ozs7QUFFZCxNQUFNQSw2QkFBNkJDLGFBQVE7SUFDeERDLFFBQVFDLE9BQU8sRUFBRTtRQUNmLElBQUlELFVBQVUsSUFBSSxDQUFDRSxtQkFBbUIsQ0FBQyxDQUFDRixTQUFTRztZQUMvQyxNQUFNQyxvQkFBb0JELGVBQ3BCRSwyQkFBMkJELGtCQUFrQkosT0FBTyxDQUFDQztZQUUzREQsVUFBVSxBQUFDQSxZQUFZLE9BQ1hLLDJCQUNDLEdBQUdMLFFBQVE7QUFDOUIsRUFBRUssMEJBQTBCO1lBRXRCLE9BQU9MO1FBQ1QsR0FBRztRQUVILElBQUlBLFlBQVksTUFBTTtZQUNwQkEsVUFBVU0sdUJBQVk7UUFDeEI7UUFFQSxPQUFPTjtJQUNUO0lBRUFPLFVBQVVOLE9BQU8sRUFBRTtRQUNqQixNQUFNTyxlQUFlLElBQUksQ0FBQ0MsZUFBZSxJQUNuQ0MsZUFBZUYsYUFBYUUsWUFBWSxDQUFDVCxVQUN6Q00sWUFBWUcsY0FBYyxHQUFHO1FBRW5DLE9BQU9IO0lBQ1Q7SUFFQSxPQUFPSSxRQUFRLEVBQUU7SUFFakIsT0FBT0MsVUFBVSxNQUFNO0lBRXZCLE9BQU9MLFlBQVksS0FBSztJQUV4QixPQUFPTSxZQUFZQyxLQUFLLEVBQUUsR0FBR0Msa0JBQWtCLEVBQUU7UUFDL0MsSUFBSUQsVUFBVUUsV0FBVztZQUN2QkYsUUFBUWhCLHNCQUFzQixHQUFHO1FBQ25DO1FBRUEsTUFBTW1CLHVCQUF1QmxCLGFBQVEsQ0FBQ2MsV0FBVyxDQUFDQyxVQUFVQztRQUU1RCxPQUFPRTtJQUNUO0lBRUEsT0FBT0MsY0FBY0osS0FBSyxFQUFFSyxTQUFTLEVBQUUsR0FBR0osa0JBQWtCLEVBQUU7UUFDNUQsSUFBSUksY0FBY0gsV0FBVztZQUMzQkcsWUFBWUwsT0FBUSxHQUFHO1lBRXZCQSxRQUFRaEIsc0JBQXNCLEdBQUc7UUFDbkM7UUFFQSxNQUFNbUIsdUJBQXVCbEIsYUFBUSxDQUFDbUIsYUFBYSxDQUFDSixPQUFPSyxjQUFjSjtRQUV6RSxPQUFPRTtJQUNUO0FBQ0YifQ==