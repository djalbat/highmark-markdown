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
            value: // contract(Class, descendentNode, ...remainingArguments) {
            //   if (descendentNode === undefined) {
            //     descendentNode = Class; ///
            //
            //     Class = Transform;  ///
            //   }
            //
            //   const htmlNode = descendentNode,  ///
            //     tokens = this.tokens, ///
            //     context = { ///
            //       tokens
            //     },
            //     transform = Class.fromNode(htmlNode, ...remainingArguments, context);
            //
            //   return transform;
            // }
            function fromHTMLNode(Class, htmlNode) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90cmFuc2Zvcm0vaHRtbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSFRNTFRyYW5zZm9ybSB7XG4gIGNvbnN0cnVjdG9yKGh0bWxOb2RlKSB7XG4gICAgdGhpcy5odG1sTm9kZSA9IGh0bWxOb2RlO1xuICB9XG5cbiAgZ2V0SFRNTE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuaHRtbE5vZGU7XG4gIH1cblxuICBhZGRBZnRlcihleGl0aW5nSFRNTE5vZGUpIHtcbiAgICBjb25zdCBjaGlsZE5vZGUgPSBleGl0aW5nSFRNTE5vZGUsICAvLy9cbiAgICAgICAgICBwYXJlbnROb2RlID0gY2hpbGROb2RlLmdldFBhcmVudE5vZGUoKSxcbiAgICAgICAgICBpbmRleCA9IHBhcmVudE5vZGUuaW5kZXhPZkNoaWxkTm9kZShjaGlsZE5vZGUpLFxuICAgICAgICAgIHN0YXJ0SW5kZXggPSBpbmRleCArIDEsXG4gICAgICAgICAgYWRkZWRDaGlsZE5vZGUgPSB0aGlzLmh0bWxOb2RlOyAgLy8vXG5cbiAgICBwYXJlbnROb2RlLmFkZENoaWxkTm9kZShhZGRlZENoaWxkTm9kZSwgc3RhcnRJbmRleCk7XG4gIH1cblxuICBhcHBlbmRUbyhwYXJlbnRIVE1MTm9kZSkge1xuICAgIGNvbnN0IGNoaWxkTm9kZSA9IHRoaXMuaHRtbE5vZGUsIC8vL1xuICAgICAgICAgIHBhcmVudE5vZGUgPSBwYXJlbnRIVE1MTm9kZTsgIC8vL1xuXG4gICAgcGFyZW50Tm9kZS5hcHBlbmRDaGlsZE5vZGUoY2hpbGROb2RlKTtcbiAgfVxuXG4gIHJlbW92ZSgpIHtcbiAgICBjb25zdCBjaGlsZE5vZGUgPSB0aGlzLmh0bWxOb2RlLCAvLy9cbiAgICAgICAgICBwYXJlbnROb2RlID0gY2hpbGROb2RlLmdldFBhcmVudE5vZGUoKTtcblxuICAgIHBhcmVudE5vZGUucmVtb3ZlQ2hpbGROb2RlKGNoaWxkTm9kZSk7XG4gIH1cblxuICBleHBhbmQoQ2xhc3MsIGFzY2VuZGFudE5vZGUpIHtcbiAgICBpZiAoYXNjZW5kYW50Tm9kZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBhc2NlbmRhbnROb2RlID0gQ2xhc3M7ICAvLy9cblxuICAgICAgQ2xhc3MgPSBIVE1MVHJhbnNmb3JtOyAgLy8vXG4gICAgfVxuXG4gICAgY29uc3QgaHRtbE5vZGUgPSBhc2NlbmRhbnROb2RlLCAvLy9cbiAgICAgICAgICB0cmFuc2Zvcm0gPSBuZXcgQ2xhc3MoaHRtbE5vZGUpO1xuXG4gICAgcmV0dXJuIHRyYW5zZm9ybTtcbiAgfVxuXG4gIC8vIGNvbnRyYWN0KENsYXNzLCBkZXNjZW5kZW50Tm9kZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gIC8vICAgaWYgKGRlc2NlbmRlbnROb2RlID09PSB1bmRlZmluZWQpIHtcbiAgLy8gICAgIGRlc2NlbmRlbnROb2RlID0gQ2xhc3M7IC8vL1xuICAvL1xuICAvLyAgICAgQ2xhc3MgPSBUcmFuc2Zvcm07ICAvLy9cbiAgLy8gICB9XG4gIC8vXG4gIC8vICAgY29uc3QgaHRtbE5vZGUgPSBkZXNjZW5kZW50Tm9kZSwgIC8vL1xuICAvLyAgICAgdG9rZW5zID0gdGhpcy50b2tlbnMsIC8vL1xuICAvLyAgICAgY29udGV4dCA9IHsgLy8vXG4gIC8vICAgICAgIHRva2Vuc1xuICAvLyAgICAgfSxcbiAgLy8gICAgIHRyYW5zZm9ybSA9IENsYXNzLmZyb21Ob2RlKGh0bWxOb2RlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMsIGNvbnRleHQpO1xuICAvL1xuICAvLyAgIHJldHVybiB0cmFuc2Zvcm07XG4gIC8vIH1cblxuICBzdGF0aWMgZnJvbUhUTUxOb2RlKENsYXNzLCBodG1sTm9kZSkge1xuICAgIGlmIChodG1sTm9kZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBodG1sTm9kZSA9IENsYXNzOyAvLy9cblxuICAgICAgQ2xhc3MgPSBIVE1MVHJhbnNmb3JtOyAgLy8vXG4gICAgfVxuXG4gICAgY29uc3QgaHRtbFRyYW5zZm9ybSA9IG5ldyBDbGFzcyhodG1sTm9kZSk7XG5cbiAgICByZXR1cm4gaHRtbFRyYW5zZm9ybTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkhUTUxUcmFuc2Zvcm0iLCJodG1sTm9kZSIsImdldEhUTUxOb2RlIiwiYWRkQWZ0ZXIiLCJleGl0aW5nSFRNTE5vZGUiLCJjaGlsZE5vZGUiLCJwYXJlbnROb2RlIiwiZ2V0UGFyZW50Tm9kZSIsImluZGV4IiwiaW5kZXhPZkNoaWxkTm9kZSIsInN0YXJ0SW5kZXgiLCJhZGRlZENoaWxkTm9kZSIsImFkZENoaWxkTm9kZSIsImFwcGVuZFRvIiwicGFyZW50SFRNTE5vZGUiLCJhcHBlbmRDaGlsZE5vZGUiLCJyZW1vdmUiLCJyZW1vdmVDaGlsZE5vZGUiLCJleHBhbmQiLCJDbGFzcyIsImFzY2VuZGFudE5vZGUiLCJ1bmRlZmluZWQiLCJ0cmFuc2Zvcm0iLCJmcm9tSFRNTE5vZGUiLCJodG1sVHJhbnNmb3JtIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQUVxQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTixJQUFBLEFBQU1BLDhCQUFOO2FBQU1BLGNBQ1BDLFFBQVE7Z0NBREREO1FBRWpCLElBQUksQ0FBQ0MsUUFBUSxHQUFHQTs7a0JBRkNEOztZQUtuQkUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRCxRQUFRO1lBQ3RCOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBLFNBQVNDLGVBQWU7Z0JBQ3RCLElBQU1DLFlBQVlELGlCQUNaRSxhQUFhRCxVQUFVRSxhQUFhLElBQ3BDQyxRQUFRRixXQUFXRyxnQkFBZ0IsQ0FBQ0osWUFDcENLLGFBQWFGLFFBQVEsR0FDckJHLGlCQUFpQixJQUFJLENBQUNWLFFBQVEsRUFBRyxHQUFHO2dCQUUxQ0ssV0FBV00sWUFBWSxDQUFDRCxnQkFBZ0JEO1lBQzFDOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLFNBQVNDLGNBQWM7Z0JBQ3JCLElBQU1ULFlBQVksSUFBSSxDQUFDSixRQUFRLEVBQ3pCSyxhQUFhUSxnQkFBaUIsR0FBRztnQkFFdkNSLFdBQVdTLGVBQWUsQ0FBQ1Y7WUFDN0I7OztZQUVBVyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTVgsWUFBWSxJQUFJLENBQUNKLFFBQVEsRUFDekJLLGFBQWFELFVBQVVFLGFBQWE7Z0JBRTFDRCxXQUFXVyxlQUFlLENBQUNaO1lBQzdCOzs7WUFFQWEsS0FBQUE7bUJBQUFBLFNBQUFBLE9BQU9DLEtBQUssRUFBRUMsYUFBYTtnQkFDekIsSUFBSUEsa0JBQWtCQyxXQUFXO29CQUMvQkQsZ0JBQWdCRCxPQUFRLEdBQUc7b0JBRTNCQSxRQXJDZW5CLGVBcUNTLEdBQUc7Z0JBQzdCO2dCQUVBLElBQU1DLFdBQVdtQixlQUNYRSxZQUFZLElBQUlILE1BQU1sQjtnQkFFNUIsT0FBT3FCO1lBQ1Q7Ozs7WUFtQk9DLEtBQUFBO21CQUFQLEFBakJBLDJEQUEyRDtZQUMzRCx3Q0FBd0M7WUFDeEMsa0NBQWtDO1lBQ2xDLEVBQUU7WUFDRiw4QkFBOEI7WUFDOUIsTUFBTTtZQUNOLEVBQUU7WUFDRiwwQ0FBMEM7WUFDMUMsZ0NBQWdDO1lBQ2hDLHNCQUFzQjtZQUN0QixlQUFlO1lBQ2YsU0FBUztZQUNULDRFQUE0RTtZQUM1RSxFQUFFO1lBQ0Ysc0JBQXNCO1lBQ3RCLElBQUk7WUFFSixTQUFPQSxhQUFhSixLQUFLLEVBQUVsQixRQUFRO2dCQUNqQyxJQUFJQSxhQUFhb0IsV0FBVztvQkFDMUJwQixXQUFXa0IsT0FBTyxHQUFHO29CQUVyQkEsUUFuRWVuQixlQW1FUyxHQUFHO2dCQUM3QjtnQkFFQSxJQUFNd0IsZ0JBQWdCLElBQUlMLE1BQU1sQjtnQkFFaEMsT0FBT3VCO1lBQ1Q7OztXQXpFbUJ4QiJ9