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
    getChildMarkdownNodesByRuleName(...ruleNames) {
        const childMarkdownNodes = this.filterChildNode((childNode)=>{
            const childNodeNonTerminalNode = childNode.isNonTerminalNode();
            if (childNodeNonTerminalNode) {
                const markdownNode = childNode, ruleName = markdownNode.getRuleName(), ruleNamesIncludesRuleName = ruleNames.includes(ruleName);
                if (ruleNamesIncludesRuleName) {
                    return true;
                }
            }
        });
        return childMarkdownNodes;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL21hcmtkb3duLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBOb25UZXJtaW5hbE5vZGUgfSBmcm9tIFwib2NjYW0tcGFyc2Vyc1wiO1xuXG5pbXBvcnQgbm9kZU1peGlucyBmcm9tIFwiLi4vbWl4aW5zL25vZGVcIjtcbmltcG9ydCB0b2tlbk1peGlucyBmcm9tIFwiLi4vbWl4aW5zL3Rva2VuXCI7XG5cbmNsYXNzIE1hcmtkb3duTm9kZSBleHRlbmRzIE5vblRlcm1pbmFsTm9kZSB7XG4gIGdldFBhcmVudE1hcmtkb3duTm9kZSgpIHtcbiAgICBjb25zdCBwYXJlbnROb2RlID0gdGhpcy5nZXRQYXJlbnROb2RlKCksXG4gICAgICAgICAgcGFyZW50TWFya2Rvd25Ob2RlID0gcGFyZW50Tm9kZTsgIC8vL1xuXG4gICAgcmV0dXJuIHBhcmVudE1hcmtkb3duTm9kZTtcbiAgfVxuXG4gIGdldENoaWxkTWFya2Rvd25Ob2RlcygpIHtcbiAgICBjb25zdCBjaGlsZE5vZGVzID0gdGhpcy5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgY2hpbGRNYXJrZG93bk5vZGVzID0gY2hpbGROb2RlczsgIC8vL1xuXG4gICAgcmV0dXJuIGNoaWxkTWFya2Rvd25Ob2RlcztcbiAgfVxuXG4gIGdldEFuY2VzdG9yTWFya2Rvd25Ob2RlcygpIHtcbiAgICBjb25zdCBhbmNlc3Rvck5vZGVzID0gdGhpcy5nZXRBbmNlc3Rvck5vZGVzKCksXG4gICAgICAgICAgYW5jZXN0b3JNYXJrZG93bk5vZGVzID0gYW5jZXN0b3JOb2RlczsgIC8vL1xuXG4gICAgcmV0dXJuIGFuY2VzdG9yTWFya2Rvd25Ob2RlcztcbiAgfVxuXG4gIGdldENoaWxkTWFya2Rvd25Ob2Rlc0J5UnVsZU5hbWUoLi4ucnVsZU5hbWVzKSB7XG4gICAgY29uc3QgY2hpbGRNYXJrZG93bk5vZGVzID0gdGhpcy5maWx0ZXJDaGlsZE5vZGUoKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgY29uc3QgY2hpbGROb2RlTm9uVGVybWluYWxOb2RlID0gY2hpbGROb2RlLmlzTm9uVGVybWluYWxOb2RlKCk7XG5cbiAgICAgIGlmIChjaGlsZE5vZGVOb25UZXJtaW5hbE5vZGUpIHtcbiAgICAgICAgY29uc3QgbWFya2Rvd25Ob2RlID0gY2hpbGROb2RlLCAvLy9cbiAgICAgICAgICAgICAgcnVsZU5hbWUgPSBtYXJrZG93bk5vZGUuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICAgICAgcnVsZU5hbWVzSW5jbHVkZXNSdWxlTmFtZSA9IHJ1bGVOYW1lcy5pbmNsdWRlcyhydWxlTmFtZSk7XG5cbiAgICAgICAgaWYgKHJ1bGVOYW1lc0luY2x1ZGVzUnVsZU5hbWUpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGNoaWxkTWFya2Rvd25Ob2RlcztcbiAgfVxuXG4gIHNldFBhcmVudE1hcmtkb3duTm9kZShwYXJlbnRNYXJrZG93bk5vZGUpIHtcbiAgICBjb25zdCBwYXJlbnROb2RlID0gcGFyZW50TWFya2Rvd25Ob2RlOyAgLy8vXG5cbiAgICB0aGlzLnNldFBhcmVudE5vZGUocGFyZW50Tm9kZSk7XG4gIH1cblxuICBzb21lRGVzY2VuZGFudE1hcmtkb3duTm9kZShjYWxsYmFjaykgeyByZXR1cm4gdGhpcy5zb21lRGVzY2VuZGFudE5vZGUoY2FsbGJhY2spOyB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZShDbGFzcywgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHByZWNlZGVuY2UsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGlmIChwcmVjZWRlbmNlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHByZWNlZGVuY2UgPSBvcGFjaXR5OyAvLy9cblxuICAgICAgb3BhY2l0eSA9IGNoaWxkTm9kZXM7IC8vL1xuXG4gICAgICBjaGlsZE5vZGVzID0gcnVsZU5hbWU7ICAvLy9cblxuICAgICAgcnVsZU5hbWUgPSBDbGFzczsgLy8vXG5cbiAgICAgIENsYXNzID0gTWFya2Rvd25Ob2RlOyAvLy9cbiAgICB9XG5cbiAgICBjb25zdCBtYXJrZG93bk5vZGUgPSBOb25UZXJtaW5hbE5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlKENsYXNzLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIHJldHVybiBtYXJrZG93bk5vZGU7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihNYXJrZG93bk5vZGUucHJvdG90eXBlLCBub2RlTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oTWFya2Rvd25Ob2RlLnByb3RvdHlwZSwgdG9rZW5NaXhpbnMpO1xuXG5leHBvcnQgZGVmYXVsdCBNYXJrZG93bk5vZGU7XG4iXSwibmFtZXMiOlsiTWFya2Rvd25Ob2RlIiwiTm9uVGVybWluYWxOb2RlIiwiZ2V0UGFyZW50TWFya2Rvd25Ob2RlIiwicGFyZW50Tm9kZSIsImdldFBhcmVudE5vZGUiLCJwYXJlbnRNYXJrZG93bk5vZGUiLCJnZXRDaGlsZE1hcmtkb3duTm9kZXMiLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsImNoaWxkTWFya2Rvd25Ob2RlcyIsImdldEFuY2VzdG9yTWFya2Rvd25Ob2RlcyIsImFuY2VzdG9yTm9kZXMiLCJnZXRBbmNlc3Rvck5vZGVzIiwiYW5jZXN0b3JNYXJrZG93bk5vZGVzIiwiZ2V0Q2hpbGRNYXJrZG93bk5vZGVzQnlSdWxlTmFtZSIsInJ1bGVOYW1lcyIsImZpbHRlckNoaWxkTm9kZSIsImNoaWxkTm9kZSIsImNoaWxkTm9kZU5vblRlcm1pbmFsTm9kZSIsImlzTm9uVGVybWluYWxOb2RlIiwibWFya2Rvd25Ob2RlIiwicnVsZU5hbWUiLCJnZXRSdWxlTmFtZSIsInJ1bGVOYW1lc0luY2x1ZGVzUnVsZU5hbWUiLCJpbmNsdWRlcyIsInNldFBhcmVudE1hcmtkb3duTm9kZSIsInNldFBhcmVudE5vZGUiLCJzb21lRGVzY2VuZGFudE1hcmtkb3duTm9kZSIsImNhbGxiYWNrIiwic29tZURlc2NlbmRhbnROb2RlIiwiZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlIiwiQ2xhc3MiLCJvcGFjaXR5IiwicHJlY2VkZW5jZSIsInJlbWFpbmluZ0FyZ3VtZW50cyIsInVuZGVmaW5lZCIsIk9iamVjdCIsImFzc2lnbiIsInByb3RvdHlwZSIsIm5vZGVNaXhpbnMiLCJ0b2tlbk1peGlucyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBNkVBOzs7ZUFBQTs7OzhCQTNFZ0M7NkRBRVQ7OERBQ0M7Ozs7OztBQUV4QixNQUFNQSxxQkFBcUJDLDZCQUFlO0lBQ3hDQyx3QkFBd0I7UUFDdEIsTUFBTUMsYUFBYSxJQUFJLENBQUNDLGFBQWEsSUFDL0JDLHFCQUFxQkYsWUFBYSxHQUFHO1FBRTNDLE9BQU9FO0lBQ1Q7SUFFQUMsd0JBQXdCO1FBQ3RCLE1BQU1DLGFBQWEsSUFBSSxDQUFDQyxhQUFhLElBQy9CQyxxQkFBcUJGLFlBQWEsR0FBRztRQUUzQyxPQUFPRTtJQUNUO0lBRUFDLDJCQUEyQjtRQUN6QixNQUFNQyxnQkFBZ0IsSUFBSSxDQUFDQyxnQkFBZ0IsSUFDckNDLHdCQUF3QkYsZUFBZ0IsR0FBRztRQUVqRCxPQUFPRTtJQUNUO0lBRUFDLGdDQUFnQyxHQUFHQyxTQUFTLEVBQUU7UUFDNUMsTUFBTU4scUJBQXFCLElBQUksQ0FBQ08sZUFBZSxDQUFDLENBQUNDO1lBQy9DLE1BQU1DLDJCQUEyQkQsVUFBVUUsaUJBQWlCO1lBRTVELElBQUlELDBCQUEwQjtnQkFDNUIsTUFBTUUsZUFBZUgsV0FDZkksV0FBV0QsYUFBYUUsV0FBVyxJQUNuQ0MsNEJBQTRCUixVQUFVUyxRQUFRLENBQUNIO2dCQUVyRCxJQUFJRSwyQkFBMkI7b0JBQzdCLE9BQU87Z0JBQ1Q7WUFDRjtRQUNGO1FBRUEsT0FBT2Q7SUFDVDtJQUVBZ0Isc0JBQXNCcEIsa0JBQWtCLEVBQUU7UUFDeEMsTUFBTUYsYUFBYUUsb0JBQXFCLEdBQUc7UUFFM0MsSUFBSSxDQUFDcUIsYUFBYSxDQUFDdkI7SUFDckI7SUFFQXdCLDJCQUEyQkMsUUFBUSxFQUFFO1FBQUUsT0FBTyxJQUFJLENBQUNDLGtCQUFrQixDQUFDRDtJQUFXO0lBRWpGLE9BQU9FLDJDQUEyQ0MsS0FBSyxFQUFFVixRQUFRLEVBQUVkLFVBQVUsRUFBRXlCLE9BQU8sRUFBRUMsVUFBVSxFQUFFLEdBQUdDLGtCQUFrQixFQUFFO1FBQ3pILElBQUlELGVBQWVFLFdBQVc7WUFDNUJGLGFBQWFELFNBQVMsR0FBRztZQUV6QkEsVUFBVXpCLFlBQVksR0FBRztZQUV6QkEsYUFBYWMsVUFBVyxHQUFHO1lBRTNCQSxXQUFXVSxPQUFPLEdBQUc7WUFFckJBLFFBQVEvQixjQUFjLEdBQUc7UUFDM0I7UUFFQSxNQUFNb0IsZUFBZW5CLDZCQUFlLENBQUM2QiwwQ0FBMEMsQ0FBQ0MsT0FBT1YsVUFBVWQsWUFBWXlCLFNBQVNDLGVBQWVDO1FBRXJJLE9BQU9kO0lBQ1Q7QUFDRjtBQUVBZ0IsT0FBT0MsTUFBTSxDQUFDckMsYUFBYXNDLFNBQVMsRUFBRUMsYUFBVTtBQUNoREgsT0FBT0MsTUFBTSxDQUFDckMsYUFBYXNDLFNBQVMsRUFBRUUsY0FBVztNQUVqRCxXQUFleEMifQ==