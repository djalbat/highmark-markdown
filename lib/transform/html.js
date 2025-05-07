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
            key: "addAfter",
            value: function addAfter(exitingHTMLNode) {
                var childNode = exitingHTMLNode, parentNode = childNode.getParentNode(), index = parentNode.indexOfChildNode(childNode), startIndex = index + 1, addedChildNode = this.htmlNode; ///
                parentNode.addChildNode(addedChildNode, startIndex);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90cmFuc2Zvcm0vaHRtbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSFRNTFRyYW5zZm9ybSB7XG4gIGNvbnN0cnVjdG9yKGh0bWxOb2RlKSB7XG4gICAgdGhpcy5odG1sTm9kZSA9IGh0bWxOb2RlO1xuICB9XG5cbiAgZ2V0SFRNTE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuaHRtbE5vZGU7XG4gIH1cblxuICBhZGRBZnRlcihleGl0aW5nSFRNTE5vZGUpIHtcbiAgICBjb25zdCBjaGlsZE5vZGUgPSBleGl0aW5nSFRNTE5vZGUsICAvLy9cbiAgICAgICAgICBwYXJlbnROb2RlID0gY2hpbGROb2RlLmdldFBhcmVudE5vZGUoKSxcbiAgICAgICAgICBpbmRleCA9IHBhcmVudE5vZGUuaW5kZXhPZkNoaWxkTm9kZShjaGlsZE5vZGUpLFxuICAgICAgICAgIHN0YXJ0SW5kZXggPSBpbmRleCArIDEsXG4gICAgICAgICAgYWRkZWRDaGlsZE5vZGUgPSB0aGlzLmh0bWxOb2RlOyAgLy8vXG5cbiAgICBwYXJlbnROb2RlLmFkZENoaWxkTm9kZShhZGRlZENoaWxkTm9kZSwgc3RhcnRJbmRleCk7XG4gIH1cblxuICBhcHBlbmRUbyhwYXJlbnRIVE1MTm9kZSkge1xuICAgIGNvbnN0IGNoaWxkTm9kZSA9IHRoaXMuaHRtbE5vZGUsIC8vL1xuICAgICAgICAgIHBhcmVudE5vZGUgPSBwYXJlbnRIVE1MTm9kZTsgIC8vL1xuXG4gICAgcGFyZW50Tm9kZS5hcHBlbmRDaGlsZE5vZGUoY2hpbGROb2RlKTtcbiAgfVxuXG4gIHJlcGxhY2UocmVwbGFjZWRIVE1MTm9kZSkge1xuICAgIGNvbnN0IHBhcmVudE5vZGUgPSByZXBsYWNlZEhUTUxOb2RlLmdldFBhcmVudE5vZGUoKSxcbiAgICAgICAgICByZXBsYWNlZENoaWxkTm9kZSA9IHJlcGxhY2VkSFRNTE5vZGUsIC8vL1xuICAgICAgICAgIHJlcGxhY2VtZW50Q2hpbGROb2RlID0gdGhpcy5odG1sTm9kZSwgIC8vL1xuICAgICAgICAgIHJlcGxhY2VtZW50Q2hpbGROb2RlcyA9IFtcbiAgICAgICAgICAgIHJlcGxhY2VtZW50Q2hpbGROb2RlXG4gICAgICAgICAgXTtcblxuICAgIHBhcmVudE5vZGUucmVwbGFjZUNoaWxkTm9kZShyZXBsYWNlZENoaWxkTm9kZSwgcmVwbGFjZW1lbnRDaGlsZE5vZGVzKTtcbiAgfVxuXG4gIHJlbW92ZSgpIHtcbiAgICBjb25zdCBjaGlsZE5vZGUgPSB0aGlzLmh0bWxOb2RlLCAvLy9cbiAgICAgICAgICBwYXJlbnROb2RlID0gY2hpbGROb2RlLmdldFBhcmVudE5vZGUoKTtcblxuICAgIHBhcmVudE5vZGUucmVtb3ZlQ2hpbGROb2RlKGNoaWxkTm9kZSk7XG4gIH1cblxuICBleHBhbmQoQ2xhc3MsIGFzY2VuZGFudE5vZGUpIHtcbiAgICBpZiAoYXNjZW5kYW50Tm9kZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBhc2NlbmRhbnROb2RlID0gQ2xhc3M7ICAvLy9cblxuICAgICAgQ2xhc3MgPSBIVE1MVHJhbnNmb3JtOyAgLy8vXG4gICAgfVxuXG4gICAgY29uc3QgaHRtbE5vZGUgPSBhc2NlbmRhbnROb2RlLCAvLy9cbiAgICAgICAgICB0cmFuc2Zvcm0gPSBuZXcgQ2xhc3MoaHRtbE5vZGUpO1xuXG4gICAgcmV0dXJuIHRyYW5zZm9ybTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSFRNTE5vZGUoQ2xhc3MsIGh0bWxOb2RlKSB7XG4gICAgaWYgKGh0bWxOb2RlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGh0bWxOb2RlID0gQ2xhc3M7IC8vL1xuXG4gICAgICBDbGFzcyA9IEhUTUxUcmFuc2Zvcm07ICAvLy9cbiAgICB9XG5cbiAgICBjb25zdCBodG1sVHJhbnNmb3JtID0gbmV3IENsYXNzKGh0bWxOb2RlKTtcblxuICAgIHJldHVybiBodG1sVHJhbnNmb3JtO1xuICB9XG59XG4iXSwibmFtZXMiOlsiSFRNTFRyYW5zZm9ybSIsImh0bWxOb2RlIiwiZ2V0SFRNTE5vZGUiLCJhZGRBZnRlciIsImV4aXRpbmdIVE1MTm9kZSIsImNoaWxkTm9kZSIsInBhcmVudE5vZGUiLCJnZXRQYXJlbnROb2RlIiwiaW5kZXgiLCJpbmRleE9mQ2hpbGROb2RlIiwic3RhcnRJbmRleCIsImFkZGVkQ2hpbGROb2RlIiwiYWRkQ2hpbGROb2RlIiwiYXBwZW5kVG8iLCJwYXJlbnRIVE1MTm9kZSIsImFwcGVuZENoaWxkTm9kZSIsInJlcGxhY2UiLCJyZXBsYWNlZEhUTUxOb2RlIiwicmVwbGFjZWRDaGlsZE5vZGUiLCJyZXBsYWNlbWVudENoaWxkTm9kZSIsInJlcGxhY2VtZW50Q2hpbGROb2RlcyIsInJlcGxhY2VDaGlsZE5vZGUiLCJyZW1vdmUiLCJyZW1vdmVDaGlsZE5vZGUiLCJleHBhbmQiLCJDbGFzcyIsImFzY2VuZGFudE5vZGUiLCJ1bmRlZmluZWQiLCJ0cmFuc2Zvcm0iLCJmcm9tSFRNTE5vZGUiLCJodG1sVHJhbnNmb3JtIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQUVxQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTixJQUFBLEFBQU1BLDhCQUFOO2FBQU1BLGNBQ1BDLFFBQVE7Z0NBREREO1FBRWpCLElBQUksQ0FBQ0MsUUFBUSxHQUFHQTs7a0JBRkNEOztZQUtuQkUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRCxRQUFRO1lBQ3RCOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBLFNBQVNDLGVBQWU7Z0JBQ3RCLElBQU1DLFlBQVlELGlCQUNaRSxhQUFhRCxVQUFVRSxhQUFhLElBQ3BDQyxRQUFRRixXQUFXRyxnQkFBZ0IsQ0FBQ0osWUFDcENLLGFBQWFGLFFBQVEsR0FDckJHLGlCQUFpQixJQUFJLENBQUNWLFFBQVEsRUFBRyxHQUFHO2dCQUUxQ0ssV0FBV00sWUFBWSxDQUFDRCxnQkFBZ0JEO1lBQzFDOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLFNBQVNDLGNBQWM7Z0JBQ3JCLElBQU1ULFlBQVksSUFBSSxDQUFDSixRQUFRLEVBQ3pCSyxhQUFhUSxnQkFBaUIsR0FBRztnQkFFdkNSLFdBQVdTLGVBQWUsQ0FBQ1Y7WUFDN0I7OztZQUVBVyxLQUFBQTttQkFBQUEsU0FBQUEsUUFBUUMsZ0JBQWdCO2dCQUN0QixJQUFNWCxhQUFhVyxpQkFBaUJWLGFBQWEsSUFDM0NXLG9CQUFvQkQsa0JBQ3BCRSx1QkFBdUIsSUFBSSxDQUFDbEIsUUFBUSxFQUNwQ21CLHdCQUF3QjtvQkFDdEJEO2lCQUNEO2dCQUVQYixXQUFXZSxnQkFBZ0IsQ0FBQ0gsbUJBQW1CRTtZQUNqRDs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNakIsWUFBWSxJQUFJLENBQUNKLFFBQVEsRUFDekJLLGFBQWFELFVBQVVFLGFBQWE7Z0JBRTFDRCxXQUFXaUIsZUFBZSxDQUFDbEI7WUFDN0I7OztZQUVBbUIsS0FBQUE7bUJBQUFBLFNBQUFBLE9BQU9DLEtBQUssRUFBRUMsYUFBYTtnQkFDekIsSUFBSUEsa0JBQWtCQyxXQUFXO29CQUMvQkQsZ0JBQWdCRCxPQUFRLEdBQUc7b0JBRTNCQSxRQWhEZXpCLGVBZ0RTLEdBQUc7Z0JBQzdCO2dCQUVBLElBQU1DLFdBQVd5QixlQUNYRSxZQUFZLElBQUlILE1BQU14QjtnQkFFNUIsT0FBTzJCO1lBQ1Q7Ozs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EsYUFBYUosS0FBSyxFQUFFeEIsUUFBUTtnQkFDakMsSUFBSUEsYUFBYTBCLFdBQVc7b0JBQzFCMUIsV0FBV3dCLE9BQU8sR0FBRztvQkFFckJBLFFBN0RlekIsZUE2RFMsR0FBRztnQkFDN0I7Z0JBRUEsSUFBTThCLGdCQUFnQixJQUFJTCxNQUFNeEI7Z0JBRWhDLE9BQU82QjtZQUNUOzs7V0FuRW1COUIifQ==