"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return HTMLTransform;
    }
});
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
var HTMLTransform = /*#__PURE__*/ function() {
    function HTMLTransform(htmlNode) {
        _class_call_check(this, HTMLTransform);
        this.htmlNode = htmlNode;
    }
    _create_class(HTMLTransform, [
        {
            key: "getHTMLNode",
            value: function getHTMLNode() {
                return this.htmlNode;
            }
        },
        {
            key: "appendTo",
            value: function appendTo(parentHTMLNode) {
                var childNode = this.htmlNode, parentNode = parentHTMLNode; ///
                parentNode.appendChildNode(childNode);
            }
        },
        {
            key: "prependTo",
            value: function prependTo(parentHTMLNode) {
                var childNode = this.htmlNode, parentNode = parentHTMLNode; ///
                parentNode.prependChildNode(childNode);
            }
        },
        {
            key: "addAfter",
            value: function addAfter(exitingHTMLNode) {
                var childNode = exitingHTMLNode, parentNode = childNode.getParentNode(), index = parentNode.indexOfChildNode(childNode), startIndex = index + 1, addedChildNode = this.htmlNode; ///
                parentNode.addChildNode(addedChildNode, startIndex);
            }
        },
        {
            key: "replace",
            value: function replace(replacedHTMLNode) {
                var parentNode = replacedHTMLNode.getParentNode(), replacedChildNode = replacedHTMLNode, replacementChildNode = this.htmlNode, replacementChildNodes = [
                    replacementChildNode
                ];
                parentNode.replaceChildNode(replacedChildNode, replacementChildNodes);
            }
        },
        {
            key: "remove",
            value: function remove() {
                var childNode = this.htmlNode, parentNode = childNode.getParentNode();
                parentNode.removeChildNode(childNode);
            }
        },
        {
            key: "expand",
            value: function expand(Class, ascendantNode) {
                if (ascendantNode === undefined) {
                    ascendantNode = Class; ///
                    Class = HTMLTransform; ///
                }
                var htmlNode = ascendantNode, transform = new Class(htmlNode);
                return transform;
            }
        }
    ], [
        {
            key: "fromHTMLNode",
            value: function fromHTMLNode(Class, htmlNode) {
                if (htmlNode === undefined) {
                    htmlNode = Class; ///
                    Class = HTMLTransform; ///
                }
                var htmlTransform = new Class(htmlNode);
                return htmlTransform;
            }
        }
    ]);
    return HTMLTransform;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90cmFuc2Zvcm0vaHRtbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSFRNTFRyYW5zZm9ybSB7XG4gIGNvbnN0cnVjdG9yKGh0bWxOb2RlKSB7XG4gICAgdGhpcy5odG1sTm9kZSA9IGh0bWxOb2RlO1xuICB9XG5cbiAgZ2V0SFRNTE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuaHRtbE5vZGU7XG4gIH1cblxuICBhcHBlbmRUbyhwYXJlbnRIVE1MTm9kZSkge1xuICAgIGNvbnN0IGNoaWxkTm9kZSA9IHRoaXMuaHRtbE5vZGUsIC8vL1xuICAgICAgICAgIHBhcmVudE5vZGUgPSBwYXJlbnRIVE1MTm9kZTsgIC8vL1xuXG4gICAgcGFyZW50Tm9kZS5hcHBlbmRDaGlsZE5vZGUoY2hpbGROb2RlKTtcbiAgfVxuXG4gIHByZXBlbmRUbyhwYXJlbnRIVE1MTm9kZSkge1xuICAgIGNvbnN0IGNoaWxkTm9kZSA9IHRoaXMuaHRtbE5vZGUsIC8vL1xuICAgICAgICBwYXJlbnROb2RlID0gcGFyZW50SFRNTE5vZGU7ICAvLy9cblxuICAgIHBhcmVudE5vZGUucHJlcGVuZENoaWxkTm9kZShjaGlsZE5vZGUpO1xuICB9XG5cbiAgYWRkQWZ0ZXIoZXhpdGluZ0hUTUxOb2RlKSB7XG4gICAgY29uc3QgY2hpbGROb2RlID0gZXhpdGluZ0hUTUxOb2RlLCAgLy8vXG4gICAgICAgICAgcGFyZW50Tm9kZSA9IGNoaWxkTm9kZS5nZXRQYXJlbnROb2RlKCksXG4gICAgICAgICAgaW5kZXggPSBwYXJlbnROb2RlLmluZGV4T2ZDaGlsZE5vZGUoY2hpbGROb2RlKSxcbiAgICAgICAgICBzdGFydEluZGV4ID0gaW5kZXggKyAxLFxuICAgICAgICAgIGFkZGVkQ2hpbGROb2RlID0gdGhpcy5odG1sTm9kZTsgIC8vL1xuXG4gICAgcGFyZW50Tm9kZS5hZGRDaGlsZE5vZGUoYWRkZWRDaGlsZE5vZGUsIHN0YXJ0SW5kZXgpO1xuICB9XG5cbiAgcmVwbGFjZShyZXBsYWNlZEhUTUxOb2RlKSB7XG4gICAgY29uc3QgcGFyZW50Tm9kZSA9IHJlcGxhY2VkSFRNTE5vZGUuZ2V0UGFyZW50Tm9kZSgpLFxuICAgICAgICAgIHJlcGxhY2VkQ2hpbGROb2RlID0gcmVwbGFjZWRIVE1MTm9kZSwgLy8vXG4gICAgICAgICAgcmVwbGFjZW1lbnRDaGlsZE5vZGUgPSB0aGlzLmh0bWxOb2RlLCAgLy8vXG4gICAgICAgICAgcmVwbGFjZW1lbnRDaGlsZE5vZGVzID0gW1xuICAgICAgICAgICAgcmVwbGFjZW1lbnRDaGlsZE5vZGVcbiAgICAgICAgICBdO1xuXG4gICAgcGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGROb2RlKHJlcGxhY2VkQ2hpbGROb2RlLCByZXBsYWNlbWVudENoaWxkTm9kZXMpO1xuICB9XG5cbiAgcmVtb3ZlKCkge1xuICAgIGNvbnN0IGNoaWxkTm9kZSA9IHRoaXMuaHRtbE5vZGUsIC8vL1xuICAgICAgICAgIHBhcmVudE5vZGUgPSBjaGlsZE5vZGUuZ2V0UGFyZW50Tm9kZSgpO1xuXG4gICAgcGFyZW50Tm9kZS5yZW1vdmVDaGlsZE5vZGUoY2hpbGROb2RlKTtcbiAgfVxuXG4gIGV4cGFuZChDbGFzcywgYXNjZW5kYW50Tm9kZSkge1xuICAgIGlmIChhc2NlbmRhbnROb2RlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGFzY2VuZGFudE5vZGUgPSBDbGFzczsgIC8vL1xuXG4gICAgICBDbGFzcyA9IEhUTUxUcmFuc2Zvcm07ICAvLy9cbiAgICB9XG5cbiAgICBjb25zdCBodG1sTm9kZSA9IGFzY2VuZGFudE5vZGUsIC8vL1xuICAgICAgICAgIHRyYW5zZm9ybSA9IG5ldyBDbGFzcyhodG1sTm9kZSk7XG5cbiAgICByZXR1cm4gdHJhbnNmb3JtO1xuICB9XG5cbiAgc3RhdGljIGZyb21IVE1MTm9kZShDbGFzcywgaHRtbE5vZGUpIHtcbiAgICBpZiAoaHRtbE5vZGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgaHRtbE5vZGUgPSBDbGFzczsgLy8vXG5cbiAgICAgIENsYXNzID0gSFRNTFRyYW5zZm9ybTsgIC8vL1xuICAgIH1cblxuICAgIGNvbnN0IGh0bWxUcmFuc2Zvcm0gPSBuZXcgQ2xhc3MoaHRtbE5vZGUpO1xuXG4gICAgcmV0dXJuIGh0bWxUcmFuc2Zvcm07XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJIVE1MVHJhbnNmb3JtIiwiaHRtbE5vZGUiLCJnZXRIVE1MTm9kZSIsImFwcGVuZFRvIiwicGFyZW50SFRNTE5vZGUiLCJjaGlsZE5vZGUiLCJwYXJlbnROb2RlIiwiYXBwZW5kQ2hpbGROb2RlIiwicHJlcGVuZFRvIiwicHJlcGVuZENoaWxkTm9kZSIsImFkZEFmdGVyIiwiZXhpdGluZ0hUTUxOb2RlIiwiZ2V0UGFyZW50Tm9kZSIsImluZGV4IiwiaW5kZXhPZkNoaWxkTm9kZSIsInN0YXJ0SW5kZXgiLCJhZGRlZENoaWxkTm9kZSIsImFkZENoaWxkTm9kZSIsInJlcGxhY2UiLCJyZXBsYWNlZEhUTUxOb2RlIiwicmVwbGFjZWRDaGlsZE5vZGUiLCJyZXBsYWNlbWVudENoaWxkTm9kZSIsInJlcGxhY2VtZW50Q2hpbGROb2RlcyIsInJlcGxhY2VDaGlsZE5vZGUiLCJyZW1vdmUiLCJyZW1vdmVDaGlsZE5vZGUiLCJleHBhbmQiLCJDbGFzcyIsImFzY2VuZGFudE5vZGUiLCJ1bmRlZmluZWQiLCJ0cmFuc2Zvcm0iLCJmcm9tSFRNTE5vZGUiLCJodG1sVHJhbnNmb3JtIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQUVxQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTixJQUFBLEFBQU1BLDhCQUFOO2FBQU1BLGNBQ1BDLFFBQVE7Z0NBREREO1FBRWpCLElBQUksQ0FBQ0MsUUFBUSxHQUFHQTs7a0JBRkNEOztZQUtuQkUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRCxRQUFRO1lBQ3RCOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBLFNBQVNDLGNBQWM7Z0JBQ3JCLElBQU1DLFlBQVksSUFBSSxDQUFDSixRQUFRLEVBQ3pCSyxhQUFhRixnQkFBaUIsR0FBRztnQkFFdkNFLFdBQVdDLGVBQWUsQ0FBQ0Y7WUFDN0I7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsVUFBVUosY0FBYztnQkFDdEIsSUFBTUMsWUFBWSxJQUFJLENBQUNKLFFBQVEsRUFDM0JLLGFBQWFGLGdCQUFpQixHQUFHO2dCQUVyQ0UsV0FBV0csZ0JBQWdCLENBQUNKO1lBQzlCOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBLFNBQVNDLGVBQWU7Z0JBQ3RCLElBQU1OLFlBQVlNLGlCQUNaTCxhQUFhRCxVQUFVTyxhQUFhLElBQ3BDQyxRQUFRUCxXQUFXUSxnQkFBZ0IsQ0FBQ1QsWUFDcENVLGFBQWFGLFFBQVEsR0FDckJHLGlCQUFpQixJQUFJLENBQUNmLFFBQVEsRUFBRyxHQUFHO2dCQUUxQ0ssV0FBV1csWUFBWSxDQUFDRCxnQkFBZ0JEO1lBQzFDOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLFFBQVFDLGdCQUFnQjtnQkFDdEIsSUFBTWIsYUFBYWEsaUJBQWlCUCxhQUFhLElBQzNDUSxvQkFBb0JELGtCQUNwQkUsdUJBQXVCLElBQUksQ0FBQ3BCLFFBQVEsRUFDcENxQix3QkFBd0I7b0JBQ3RCRDtpQkFDRDtnQkFFUGYsV0FBV2lCLGdCQUFnQixDQUFDSCxtQkFBbUJFO1lBQ2pEOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1uQixZQUFZLElBQUksQ0FBQ0osUUFBUSxFQUN6QkssYUFBYUQsVUFBVU8sYUFBYTtnQkFFMUNOLFdBQVdtQixlQUFlLENBQUNwQjtZQUM3Qjs7O1lBRUFxQixLQUFBQTttQkFBQUEsU0FBQUEsT0FBT0MsS0FBSyxFQUFFQyxhQUFhO2dCQUN6QixJQUFJQSxrQkFBa0JDLFdBQVc7b0JBQy9CRCxnQkFBZ0JELE9BQVEsR0FBRztvQkFFM0JBLFFBdkRlM0IsZUF1RFMsR0FBRztnQkFDN0I7Z0JBRUEsSUFBTUMsV0FBVzJCLGVBQ1hFLFlBQVksSUFBSUgsTUFBTTFCO2dCQUU1QixPQUFPNkI7WUFDVDs7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSxhQUFhSixLQUFLLEVBQUUxQixRQUFRO2dCQUNqQyxJQUFJQSxhQUFhNEIsV0FBVztvQkFDMUI1QixXQUFXMEIsT0FBTyxHQUFHO29CQUVyQkEsUUFwRWUzQixlQW9FUyxHQUFHO2dCQUM3QjtnQkFFQSxJQUFNZ0MsZ0JBQWdCLElBQUlMLE1BQU0xQjtnQkFFaEMsT0FBTytCO1lBQ1Q7OztXQTFFbUJoQyJ9