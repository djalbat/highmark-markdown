"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ContainerHTMLNode;
    }
});
const _html = /*#__PURE__*/ _interop_require_default(require("../../node/html"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class ContainerHTMLNode extends _html.default {
    getContainerMarkdownNode() {
        const outerNode = this.getOuterNode(), containerMarkdownNode = outerNode; ///
        return containerMarkdownNode;
    }
    className(context) {
        let className;
        const containerMarkdownNode = this.getContainerMarkdownNode();
        className = containerMarkdownNode.className(context);
        const markdownClassName = className; ///
        className = super.className(context);
        if (markdownClassName !== null) {
            className = `${className} ${markdownClassName}`;
        }
        return className;
    }
    static tagName = "div";
    static className = "container";
    static fromNothing() {
        return _html.default.fromNothing(ContainerHTMLNode);
    }
    static fromOuterNode(outerNode) {
        return _html.default.fromOuterNode(ContainerHTMLNode, outerNode);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvY29udGFpbmVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgSFRNTE5vZGUgZnJvbSBcIi4uLy4uL25vZGUvaHRtbFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250YWluZXJIVE1MTm9kZSBleHRlbmRzIEhUTUxOb2RlIHtcbiAgZ2V0Q29udGFpbmVyTWFya2Rvd25Ob2RlKCkge1xuICAgIGNvbnN0IG91dGVyTm9kZSA9IHRoaXMuZ2V0T3V0ZXJOb2RlKCksXG4gICAgICAgICAgY29udGFpbmVyTWFya2Rvd25Ob2RlID0gb3V0ZXJOb2RlOyAgLy8vXG5cbiAgICByZXR1cm4gY29udGFpbmVyTWFya2Rvd25Ob2RlO1xuICB9XG5cbiAgY2xhc3NOYW1lKGNvbnRleHQpIHtcbiAgICBsZXQgY2xhc3NOYW1lO1xuXG4gICAgY29uc3QgY29udGFpbmVyTWFya2Rvd25Ob2RlID0gdGhpcy5nZXRDb250YWluZXJNYXJrZG93bk5vZGUoKTtcblxuICAgIGNsYXNzTmFtZSA9IGNvbnRhaW5lck1hcmtkb3duTm9kZS5jbGFzc05hbWUoY29udGV4dCk7XG5cbiAgICBjb25zdCBtYXJrZG93bkNsYXNzTmFtZSA9IGNsYXNzTmFtZTsgIC8vL1xuXG4gICAgY2xhc3NOYW1lID0gc3VwZXIuY2xhc3NOYW1lKGNvbnRleHQpO1xuXG4gICAgaWYgKG1hcmtkb3duQ2xhc3NOYW1lICE9PSBudWxsKSB7XG4gICAgICBjbGFzc05hbWUgPSBgJHtjbGFzc05hbWV9ICR7bWFya2Rvd25DbGFzc05hbWV9YDtcbiAgICB9XG5cbiAgICByZXR1cm4gY2xhc3NOYW1lO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xuXG4gIHN0YXRpYyBjbGFzc05hbWUgPSBcImNvbnRhaW5lclwiO1xuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHsgcmV0dXJuIEhUTUxOb2RlLmZyb21Ob3RoaW5nKENvbnRhaW5lckhUTUxOb2RlKTsgfVxuXG4gIHN0YXRpYyBmcm9tT3V0ZXJOb2RlKG91dGVyTm9kZSkgeyByZXR1cm4gSFRNTE5vZGUuZnJvbU91dGVyTm9kZShDb250YWluZXJIVE1MTm9kZSwgb3V0ZXJOb2RlKTsgfVxufVxuIl0sIm5hbWVzIjpbIkNvbnRhaW5lckhUTUxOb2RlIiwiSFRNTE5vZGUiLCJnZXRDb250YWluZXJNYXJrZG93bk5vZGUiLCJvdXRlck5vZGUiLCJnZXRPdXRlck5vZGUiLCJjb250YWluZXJNYXJrZG93bk5vZGUiLCJjbGFzc05hbWUiLCJjb250ZXh0IiwibWFya2Rvd25DbGFzc05hbWUiLCJ0YWdOYW1lIiwiZnJvbU5vdGhpbmciLCJmcm9tT3V0ZXJOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFJQTs7O2VBQXFCQTs7OzZEQUZBOzs7Ozs7QUFFTixNQUFNQSwwQkFBMEJDLGFBQVE7SUFDckRDLDJCQUEyQjtRQUN6QixNQUFNQyxZQUFZLElBQUksQ0FBQ0MsWUFBWSxJQUM3QkMsd0JBQXdCRixXQUFZLEdBQUc7UUFFN0MsT0FBT0U7SUFDVDtJQUVBQyxVQUFVQyxPQUFPLEVBQUU7UUFDakIsSUFBSUQ7UUFFSixNQUFNRCx3QkFBd0IsSUFBSSxDQUFDSCx3QkFBd0I7UUFFM0RJLFlBQVlELHNCQUFzQkMsU0FBUyxDQUFDQztRQUU1QyxNQUFNQyxvQkFBb0JGLFdBQVksR0FBRztRQUV6Q0EsWUFBWSxLQUFLLENBQUNBLFVBQVVDO1FBRTVCLElBQUlDLHNCQUFzQixNQUFNO1lBQzlCRixZQUFZLEdBQUdBLFVBQVUsQ0FBQyxFQUFFRSxtQkFBbUI7UUFDakQ7UUFFQSxPQUFPRjtJQUNUO0lBRUEsT0FBT0csVUFBVSxNQUFNO0lBRXZCLE9BQU9ILFlBQVksWUFBWTtJQUUvQixPQUFPSSxjQUFjO1FBQUUsT0FBT1QsYUFBUSxDQUFDUyxXQUFXLENBQUNWO0lBQW9CO0lBRXZFLE9BQU9XLGNBQWNSLFNBQVMsRUFBRTtRQUFFLE9BQU9GLGFBQVEsQ0FBQ1UsYUFBYSxDQUFDWCxtQkFBbUJHO0lBQVk7QUFDakcifQ==