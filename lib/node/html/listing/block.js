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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvbGlzdGluZy9ibG9jay5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEhUTUxOb2RlIGZyb20gXCIuLi8uLi8uLi9ub2RlL2h0bWxcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uLy4uLy4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCbG9ja0xpc3RpbmdIVE1MTm9kZSBleHRlbmRzIEhUTUxOb2RlIHtcbiAgY29udGVudChjb250ZXh0KSB7XG4gICAgbGV0IGNvbnRlbnQgPSB0aGlzLnJlZHVjZUNoaWxkSFRNTE5vZGUoKGNvbnRlbnQsIGNoaWxkSFROTE5vZGUpID0+IHtcbiAgICAgIGNvbnN0IGJsb2NrTGluZUhUTUxOb2RlID0gY2hpbGRIVE5MTm9kZSwgIC8vL1xuICAgICAgICAgICAgYmxvY2tMaW5lSFRNTE5vZGVDb250ZW50ID0gYmxvY2tMaW5lSFRNTE5vZGUuY29udGVudChjb250ZXh0KTtcblxuICAgICAgY29udGVudCA9IChjb250ZW50ID09PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICBibG9ja0xpbmVIVE1MTm9kZUNvbnRlbnQgOlxuICAgICAgICAgICAgICAgICAgICBgJHtjb250ZW50fVxuJHtibG9ja0xpbmVIVE1MTm9kZUNvbnRlbnR9YDtcblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSwgbnVsbCk7XG5cbiAgICBpZiAoY29udGVudCA9PT0gbnVsbCkge1xuICAgICAgY29udGVudCA9IEVNUFRZX1NUUklORztcbiAgICB9XG5cbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGNsYXNzTmFtZShjb250ZXh0KSB7XG4gICAgY29uc3QgbWFya2Rvd25Ob2RlID0gdGhpcy5nZXRNYXJrZG93bk5vZGUoKSxcbiAgICAgICAgICBjbGFzc05hbWUgPSBtYXJrZG93bk5vZGUuY2xhc3NOYW1lKGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGNsYXNzTmFtZTtcbiAgfVxuXG4gIHN0YXRpYyBsaW5lcyA9IDI7XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcInByZVwiO1xuXG4gIHN0YXRpYyBjbGFzc05hbWUgPSBudWxsO1xuXG4gIHN0YXRpYyBmcm9tTm90aGluZyhDbGFzcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgaWYgKENsYXNzID09PSB1bmRlZmluZWQpIHtcbiAgICAgIENsYXNzID0gQmxvY2tMaXN0aW5nSFRNTE5vZGU7IC8vL1xuICAgIH1cblxuICAgIGNvbnN0IGJsb2NrTGlzdGluZ0hUTUxOb2RlID0gSFRNTE5vZGUuZnJvbU5vdGhpbmcoQ2xhc3MsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICByZXR1cm4gYmxvY2tMaXN0aW5nSFRNTE5vZGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbU91dGVyTm9kZShDbGFzcywgb3V0ZXJOb2RlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBpZiAob3V0ZXJOb2RlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIG91dGVyTm9kZSA9IENsYXNzOyAgLy8vXG5cbiAgICAgIENsYXNzID0gQmxvY2tMaXN0aW5nSFRNTE5vZGU7IC8vL1xuICAgIH1cblxuICAgIGNvbnN0IGJsb2NrTGlzdGluZ0hUTUxOb2RlID0gSFRNTE5vZGUuZnJvbU91dGVyTm9kZShDbGFzcywgb3V0ZXJOb2RlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgcmV0dXJuIGJsb2NrTGlzdGluZ0hUTUxOb2RlO1xuICB9XG59XG4iXSwibmFtZXMiOlsiQmxvY2tMaXN0aW5nSFRNTE5vZGUiLCJIVE1MTm9kZSIsImNvbnRlbnQiLCJjb250ZXh0IiwicmVkdWNlQ2hpbGRIVE1MTm9kZSIsImNoaWxkSFROTE5vZGUiLCJibG9ja0xpbmVIVE1MTm9kZSIsImJsb2NrTGluZUhUTUxOb2RlQ29udGVudCIsIkVNUFRZX1NUUklORyIsImNsYXNzTmFtZSIsIm1hcmtkb3duTm9kZSIsImdldE1hcmtkb3duTm9kZSIsImxpbmVzIiwidGFnTmFtZSIsImZyb21Ob3RoaW5nIiwiQ2xhc3MiLCJyZW1haW5pbmdBcmd1bWVudHMiLCJ1bmRlZmluZWQiLCJibG9ja0xpc3RpbmdIVE1MTm9kZSIsImZyb21PdXRlck5vZGUiLCJvdXRlck5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU1BOzs7ZUFBcUJBOzs7NkRBSkE7MkJBRVE7Ozs7OztBQUVkLE1BQU1BLDZCQUE2QkMsYUFBUTtJQUN4REMsUUFBUUMsT0FBTyxFQUFFO1FBQ2YsSUFBSUQsVUFBVSxJQUFJLENBQUNFLG1CQUFtQixDQUFDLENBQUNGLFNBQVNHO1lBQy9DLE1BQU1DLG9CQUFvQkQsZUFDcEJFLDJCQUEyQkQsa0JBQWtCSixPQUFPLENBQUNDO1lBRTNERCxVQUFVLEFBQUNBLFlBQVksT0FDWEssMkJBQ0UsR0FBR0wsUUFBUTtBQUMvQixFQUFFSywwQkFBMEI7WUFFdEIsT0FBT0w7UUFDVCxHQUFHO1FBRUgsSUFBSUEsWUFBWSxNQUFNO1lBQ3BCQSxVQUFVTSx1QkFBWTtRQUN4QjtRQUVBLE9BQU9OO0lBQ1Q7SUFFQU8sVUFBVU4sT0FBTyxFQUFFO1FBQ2pCLE1BQU1PLGVBQWUsSUFBSSxDQUFDQyxlQUFlLElBQ25DRixZQUFZQyxhQUFhRCxTQUFTLENBQUNOO1FBRXpDLE9BQU9NO0lBQ1Q7SUFFQSxPQUFPRyxRQUFRLEVBQUU7SUFFakIsT0FBT0MsVUFBVSxNQUFNO0lBRXZCLE9BQU9KLFlBQVksS0FBSztJQUV4QixPQUFPSyxZQUFZQyxLQUFLLEVBQUUsR0FBR0Msa0JBQWtCLEVBQUU7UUFDL0MsSUFBSUQsVUFBVUUsV0FBVztZQUN2QkYsUUFBUWYsc0JBQXNCLEdBQUc7UUFDbkM7UUFFQSxNQUFNa0IsdUJBQXVCakIsYUFBUSxDQUFDYSxXQUFXLENBQUNDLFVBQVVDO1FBRTVELE9BQU9FO0lBQ1Q7SUFFQSxPQUFPQyxjQUFjSixLQUFLLEVBQUVLLFNBQVMsRUFBRSxHQUFHSixrQkFBa0IsRUFBRTtRQUM1RCxJQUFJSSxjQUFjSCxXQUFXO1lBQzNCRyxZQUFZTCxPQUFRLEdBQUc7WUFFdkJBLFFBQVFmLHNCQUFzQixHQUFHO1FBQ25DO1FBRUEsTUFBTWtCLHVCQUF1QmpCLGFBQVEsQ0FBQ2tCLGFBQWEsQ0FBQ0osT0FBT0ssY0FBY0o7UUFFekUsT0FBT0U7SUFDVDtBQUNGIn0=