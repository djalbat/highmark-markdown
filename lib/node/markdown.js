"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
const _occamparsers = require("occam-parsers");
const _node = /*#__PURE__*/ _interop_require_default(require("../mixins/node"));
const _token = /*#__PURE__*/ _interop_require_default(require("../mixins/token"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class MarkdownNode extends _occamparsers.NonTerminalNode {
    getParentMarkdownNode() {
        const parentNode = this.getParentNode(), parentMarkdownNode = parentNode; ///
        return parentMarkdownNode;
    }
    getChildMarkdownNodes() {
        const childNodes = this.getChildNodes(), childMarkdownNodes = childNodes; ///
        return childMarkdownNodes;
    }
    getAncestorMarkdownNodes() {
        const ancestorNodes = this.getAncestorNodes(), ancestorMarkdownNodes = ancestorNodes; ///
        return ancestorMarkdownNodes;
    }
    setParentMarkdownNode(parentMarkdownNode) {
        const parentNode = parentMarkdownNode; ///
        this.setParentNode(parentNode);
    }
    someDescendantMarkdownNode(callback) {
        return this.someDescendantNode(callback);
    }
    static fromRuleNameChildNodesOpacityAndPrecedence(Class, ruleName, childNodes, opacity, precedence, ...remainingArguments) {
        if (precedence === undefined) {
            precedence = opacity; ///
            opacity = childNodes; ///
            childNodes = ruleName; ///
            ruleName = Class; ///
            Class = MarkdownNode; ///
        }
        const markdownNode = _occamparsers.NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(Class, ruleName, childNodes, opacity, precedence, ...remainingArguments);
        return markdownNode;
    }
}
Object.assign(MarkdownNode.prototype, _node.default);
Object.assign(MarkdownNode.prototype, _token.default);
const _default = MarkdownNode;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL21hcmtkb3duLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBOb25UZXJtaW5hbE5vZGUgfSBmcm9tIFwib2NjYW0tcGFyc2Vyc1wiO1xuXG5pbXBvcnQgbm9kZU1peGlucyBmcm9tIFwiLi4vbWl4aW5zL25vZGVcIjtcbmltcG9ydCB0b2tlbk1peGlucyBmcm9tIFwiLi4vbWl4aW5zL3Rva2VuXCI7XG5cbmNsYXNzIE1hcmtkb3duTm9kZSBleHRlbmRzIE5vblRlcm1pbmFsTm9kZSB7XG4gIGdldFBhcmVudE1hcmtkb3duTm9kZSgpIHtcbiAgICBjb25zdCBwYXJlbnROb2RlID0gdGhpcy5nZXRQYXJlbnROb2RlKCksXG4gICAgICAgICAgcGFyZW50TWFya2Rvd25Ob2RlID0gcGFyZW50Tm9kZTsgIC8vL1xuXG4gICAgcmV0dXJuIHBhcmVudE1hcmtkb3duTm9kZTtcbiAgfVxuXG4gIGdldENoaWxkTWFya2Rvd25Ob2RlcygpIHtcbiAgICBjb25zdCBjaGlsZE5vZGVzID0gdGhpcy5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgY2hpbGRNYXJrZG93bk5vZGVzID0gY2hpbGROb2RlczsgIC8vL1xuXG4gICAgcmV0dXJuIGNoaWxkTWFya2Rvd25Ob2RlcztcbiAgfVxuXG4gIGdldEFuY2VzdG9yTWFya2Rvd25Ob2RlcygpIHtcbiAgICBjb25zdCBhbmNlc3Rvck5vZGVzID0gdGhpcy5nZXRBbmNlc3Rvck5vZGVzKCksXG4gICAgICAgICAgYW5jZXN0b3JNYXJrZG93bk5vZGVzID0gYW5jZXN0b3JOb2RlczsgIC8vL1xuXG4gICAgcmV0dXJuIGFuY2VzdG9yTWFya2Rvd25Ob2RlcztcbiAgfVxuXG4gIHNldFBhcmVudE1hcmtkb3duTm9kZShwYXJlbnRNYXJrZG93bk5vZGUpIHtcbiAgICBjb25zdCBwYXJlbnROb2RlID0gcGFyZW50TWFya2Rvd25Ob2RlOyAgLy8vXG5cbiAgICB0aGlzLnNldFBhcmVudE5vZGUocGFyZW50Tm9kZSk7XG4gIH1cblxuICBzb21lRGVzY2VuZGFudE1hcmtkb3duTm9kZShjYWxsYmFjaykgeyByZXR1cm4gdGhpcy5zb21lRGVzY2VuZGFudE5vZGUoY2FsbGJhY2spOyB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZShDbGFzcywgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHByZWNlZGVuY2UsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGlmIChwcmVjZWRlbmNlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHByZWNlZGVuY2UgPSBvcGFjaXR5OyAvLy9cblxuICAgICAgb3BhY2l0eSA9IGNoaWxkTm9kZXM7IC8vL1xuXG4gICAgICBjaGlsZE5vZGVzID0gcnVsZU5hbWU7ICAvLy9cblxuICAgICAgcnVsZU5hbWUgPSBDbGFzczsgLy8vXG5cbiAgICAgIENsYXNzID0gTWFya2Rvd25Ob2RlOyAvLy9cbiAgICB9XG5cbiAgICBjb25zdCBtYXJrZG93bk5vZGUgPSBOb25UZXJtaW5hbE5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlKENsYXNzLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIHJldHVybiBtYXJrZG93bk5vZGU7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihNYXJrZG93bk5vZGUucHJvdG90eXBlLCBub2RlTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oTWFya2Rvd25Ob2RlLnByb3RvdHlwZSwgdG9rZW5NaXhpbnMpO1xuXG5leHBvcnQgZGVmYXVsdCBNYXJrZG93bk5vZGU7XG4iXSwibmFtZXMiOlsiTWFya2Rvd25Ob2RlIiwiTm9uVGVybWluYWxOb2RlIiwiZ2V0UGFyZW50TWFya2Rvd25Ob2RlIiwicGFyZW50Tm9kZSIsImdldFBhcmVudE5vZGUiLCJwYXJlbnRNYXJrZG93bk5vZGUiLCJnZXRDaGlsZE1hcmtkb3duTm9kZXMiLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsImNoaWxkTWFya2Rvd25Ob2RlcyIsImdldEFuY2VzdG9yTWFya2Rvd25Ob2RlcyIsImFuY2VzdG9yTm9kZXMiLCJnZXRBbmNlc3Rvck5vZGVzIiwiYW5jZXN0b3JNYXJrZG93bk5vZGVzIiwic2V0UGFyZW50TWFya2Rvd25Ob2RlIiwic2V0UGFyZW50Tm9kZSIsInNvbWVEZXNjZW5kYW50TWFya2Rvd25Ob2RlIiwiY2FsbGJhY2siLCJzb21lRGVzY2VuZGFudE5vZGUiLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UiLCJDbGFzcyIsInJ1bGVOYW1lIiwib3BhY2l0eSIsInByZWNlZGVuY2UiLCJyZW1haW5pbmdBcmd1bWVudHMiLCJ1bmRlZmluZWQiLCJtYXJrZG93bk5vZGUiLCJPYmplY3QiLCJhc3NpZ24iLCJwcm90b3R5cGUiLCJub2RlTWl4aW5zIiwidG9rZW5NaXhpbnMiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQTJEQTs7O2VBQUE7Ozs4QkF6RGdDOzZEQUVUOzhEQUNDOzs7Ozs7QUFFeEIsTUFBTUEscUJBQXFCQyw2QkFBZTtJQUN4Q0Msd0JBQXdCO1FBQ3RCLE1BQU1DLGFBQWEsSUFBSSxDQUFDQyxhQUFhLElBQy9CQyxxQkFBcUJGLFlBQWEsR0FBRztRQUUzQyxPQUFPRTtJQUNUO0lBRUFDLHdCQUF3QjtRQUN0QixNQUFNQyxhQUFhLElBQUksQ0FBQ0MsYUFBYSxJQUMvQkMscUJBQXFCRixZQUFhLEdBQUc7UUFFM0MsT0FBT0U7SUFDVDtJQUVBQywyQkFBMkI7UUFDekIsTUFBTUMsZ0JBQWdCLElBQUksQ0FBQ0MsZ0JBQWdCLElBQ3JDQyx3QkFBd0JGLGVBQWdCLEdBQUc7UUFFakQsT0FBT0U7SUFDVDtJQUVBQyxzQkFBc0JULGtCQUFrQixFQUFFO1FBQ3hDLE1BQU1GLGFBQWFFLG9CQUFxQixHQUFHO1FBRTNDLElBQUksQ0FBQ1UsYUFBYSxDQUFDWjtJQUNyQjtJQUVBYSwyQkFBMkJDLFFBQVEsRUFBRTtRQUFFLE9BQU8sSUFBSSxDQUFDQyxrQkFBa0IsQ0FBQ0Q7SUFBVztJQUVqRixPQUFPRSwyQ0FBMkNDLEtBQUssRUFBRUMsUUFBUSxFQUFFZCxVQUFVLEVBQUVlLE9BQU8sRUFBRUMsVUFBVSxFQUFFLEdBQUdDLGtCQUFrQixFQUFFO1FBQ3pILElBQUlELGVBQWVFLFdBQVc7WUFDNUJGLGFBQWFELFNBQVMsR0FBRztZQUV6QkEsVUFBVWYsWUFBWSxHQUFHO1lBRXpCQSxhQUFhYyxVQUFXLEdBQUc7WUFFM0JBLFdBQVdELE9BQU8sR0FBRztZQUVyQkEsUUFBUXBCLGNBQWMsR0FBRztRQUMzQjtRQUVBLE1BQU0wQixlQUFlekIsNkJBQWUsQ0FBQ2tCLDBDQUEwQyxDQUFDQyxPQUFPQyxVQUFVZCxZQUFZZSxTQUFTQyxlQUFlQztRQUVySSxPQUFPRTtJQUNUO0FBQ0Y7QUFFQUMsT0FBT0MsTUFBTSxDQUFDNUIsYUFBYTZCLFNBQVMsRUFBRUMsYUFBVTtBQUNoREgsT0FBT0MsTUFBTSxDQUFDNUIsYUFBYTZCLFNBQVMsRUFBRUUsY0FBVztNQUVqRCxXQUFlL0IifQ==