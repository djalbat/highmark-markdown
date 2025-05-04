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
    function HTMLTransform(node) {
        _class_call_check(this, HTMLTransform);
        this.node = node;
    }
    _create_class(HTMLTransform, [
        {
            key: "getNode",
            value: function getNode() {
                return this.node;
            }
        },
        {
            key: "addAfter",
            value: function addAfter(exitingHTMLNode) {
                var childNode = exitingHTMLNode, parentNode = childNode.getParentNode(), index = parentNode.indexOfChildNode(childNode), startIndex = index + 1, addedChildNode = this.node; ///
                parentNode.addChildNode(addedChildNode, startIndex);
            }
        },
        {
            key: "appendTo",
            value: function appendTo(parentHTMLNode) {
                var childNode = this.node, parentNode = parentHTMLNode; ///
                parentNode.appendChildNode(childNode);
            }
        },
        {
            key: "remove",
            value: function remove() {
                var childNode = this.node, parentNode = childNode.getParentNode();
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
                var node = ascendantNode, transform = new Class(node);
                return transform;
            }
        }
    ], [
        {
            key: "fromHTNLNOde",
            value: // contract(Class, descendentNode, ...remainingArguments) {
            //   if (descendentNode === undefined) {
            //     descendentNode = Class; ///
            //
            //     Class = Transform;  ///
            //   }
            //
            //   const node = descendentNode,  ///
            //     tokens = this.tokens, ///
            //     context = { ///
            //       tokens
            //     },
            //     transform = Class.fromNode(node, ...remainingArguments, context);
            //
            //   return transform;
            // }
            function fromHTNLNOde(Class, htmlNode) {
                if (htmlNode === undefined) {
                    htmlNode = Class; ///
                    Class = HTMLTransform; ///
                }
                var node = htmlNode, htmlTransform = new Class(node);
                return htmlTransform;
            }
        }
    ]);
    return HTMLTransform;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90cmFuc2Zvcm0vaHRtbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSFRNTFRyYW5zZm9ybSB7XG4gIGNvbnN0cnVjdG9yKG5vZGUpIHtcbiAgICB0aGlzLm5vZGUgPSBub2RlO1xuICB9XG5cbiAgZ2V0Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ub2RlO1xuICB9XG5cbiAgYWRkQWZ0ZXIoZXhpdGluZ0hUTUxOb2RlKSB7XG4gICAgY29uc3QgY2hpbGROb2RlID0gZXhpdGluZ0hUTUxOb2RlLCAgLy8vXG4gICAgICAgICAgcGFyZW50Tm9kZSA9IGNoaWxkTm9kZS5nZXRQYXJlbnROb2RlKCksXG4gICAgICAgICAgaW5kZXggPSBwYXJlbnROb2RlLmluZGV4T2ZDaGlsZE5vZGUoY2hpbGROb2RlKSxcbiAgICAgICAgICBzdGFydEluZGV4ID0gaW5kZXggKyAxLFxuICAgICAgICAgIGFkZGVkQ2hpbGROb2RlID0gdGhpcy5ub2RlOyAgLy8vXG5cbiAgICBwYXJlbnROb2RlLmFkZENoaWxkTm9kZShhZGRlZENoaWxkTm9kZSwgc3RhcnRJbmRleCk7XG4gIH1cblxuICBhcHBlbmRUbyhwYXJlbnRIVE1MTm9kZSkge1xuICAgIGNvbnN0IGNoaWxkTm9kZSA9IHRoaXMubm9kZSwgLy8vXG4gICAgICAgICAgcGFyZW50Tm9kZSA9IHBhcmVudEhUTUxOb2RlOyAgLy8vXG5cbiAgICBwYXJlbnROb2RlLmFwcGVuZENoaWxkTm9kZShjaGlsZE5vZGUpO1xuICB9XG5cbiAgcmVtb3ZlKCkge1xuICAgIGNvbnN0IGNoaWxkTm9kZSA9IHRoaXMubm9kZSwgLy8vXG4gICAgICAgICAgcGFyZW50Tm9kZSA9IGNoaWxkTm9kZS5nZXRQYXJlbnROb2RlKCk7XG5cbiAgICBwYXJlbnROb2RlLnJlbW92ZUNoaWxkTm9kZShjaGlsZE5vZGUpO1xuICB9XG5cbiAgZXhwYW5kKENsYXNzLCBhc2NlbmRhbnROb2RlKSB7XG4gICAgaWYgKGFzY2VuZGFudE5vZGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgYXNjZW5kYW50Tm9kZSA9IENsYXNzOyAgLy8vXG5cbiAgICAgIENsYXNzID0gSFRNTFRyYW5zZm9ybTsgIC8vL1xuICAgIH1cblxuICAgIGNvbnN0IG5vZGUgPSBhc2NlbmRhbnROb2RlLCAvLy9cbiAgICAgICAgICB0cmFuc2Zvcm0gPSBuZXcgQ2xhc3Mobm9kZSk7XG5cbiAgICByZXR1cm4gdHJhbnNmb3JtO1xuICB9XG5cbiAgLy8gY29udHJhY3QoQ2xhc3MsIGRlc2NlbmRlbnROb2RlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgLy8gICBpZiAoZGVzY2VuZGVudE5vZGUgPT09IHVuZGVmaW5lZCkge1xuICAvLyAgICAgZGVzY2VuZGVudE5vZGUgPSBDbGFzczsgLy8vXG4gIC8vXG4gIC8vICAgICBDbGFzcyA9IFRyYW5zZm9ybTsgIC8vL1xuICAvLyAgIH1cbiAgLy9cbiAgLy8gICBjb25zdCBub2RlID0gZGVzY2VuZGVudE5vZGUsICAvLy9cbiAgLy8gICAgIHRva2VucyA9IHRoaXMudG9rZW5zLCAvLy9cbiAgLy8gICAgIGNvbnRleHQgPSB7IC8vL1xuICAvLyAgICAgICB0b2tlbnNcbiAgLy8gICAgIH0sXG4gIC8vICAgICB0cmFuc2Zvcm0gPSBDbGFzcy5mcm9tTm9kZShub2RlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMsIGNvbnRleHQpO1xuICAvL1xuICAvLyAgIHJldHVybiB0cmFuc2Zvcm07XG4gIC8vIH1cblxuICBzdGF0aWMgZnJvbUhUTkxOT2RlKENsYXNzLCBodG1sTm9kZSkge1xuICAgIGlmIChodG1sTm9kZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBodG1sTm9kZSA9IENsYXNzOyAvLy9cblxuICAgICAgQ2xhc3MgPSBIVE1MVHJhbnNmb3JtOyAgLy8vXG4gICAgfVxuXG4gICAgY29uc3Qgbm9kZSA9IGh0bWxOb2RlLCAgLy8vXG4gICAgICAgICAgaHRtbFRyYW5zZm9ybSA9IG5ldyBDbGFzcyhub2RlKTtcblxuICAgIHJldHVybiBodG1sVHJhbnNmb3JtO1xuICB9XG59XG4iXSwibmFtZXMiOlsiSFRNTFRyYW5zZm9ybSIsIm5vZGUiLCJnZXROb2RlIiwiYWRkQWZ0ZXIiLCJleGl0aW5nSFRNTE5vZGUiLCJjaGlsZE5vZGUiLCJwYXJlbnROb2RlIiwiZ2V0UGFyZW50Tm9kZSIsImluZGV4IiwiaW5kZXhPZkNoaWxkTm9kZSIsInN0YXJ0SW5kZXgiLCJhZGRlZENoaWxkTm9kZSIsImFkZENoaWxkTm9kZSIsImFwcGVuZFRvIiwicGFyZW50SFRNTE5vZGUiLCJhcHBlbmRDaGlsZE5vZGUiLCJyZW1vdmUiLCJyZW1vdmVDaGlsZE5vZGUiLCJleHBhbmQiLCJDbGFzcyIsImFzY2VuZGFudE5vZGUiLCJ1bmRlZmluZWQiLCJ0cmFuc2Zvcm0iLCJmcm9tSFROTE5PZGUiLCJodG1sTm9kZSIsImh0bWxUcmFuc2Zvcm0iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBRXFCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFOLElBQUEsQUFBTUEsOEJBQU47YUFBTUEsY0FDUEMsSUFBSTtnQ0FER0Q7UUFFakIsSUFBSSxDQUFDQyxJQUFJLEdBQUdBOztrQkFGS0Q7O1lBS25CRSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNELElBQUk7WUFDbEI7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsU0FBU0MsZUFBZTtnQkFDdEIsSUFBTUMsWUFBWUQsaUJBQ1pFLGFBQWFELFVBQVVFLGFBQWEsSUFDcENDLFFBQVFGLFdBQVdHLGdCQUFnQixDQUFDSixZQUNwQ0ssYUFBYUYsUUFBUSxHQUNyQkcsaUJBQWlCLElBQUksQ0FBQ1YsSUFBSSxFQUFHLEdBQUc7Z0JBRXRDSyxXQUFXTSxZQUFZLENBQUNELGdCQUFnQkQ7WUFDMUM7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsU0FBU0MsY0FBYztnQkFDckIsSUFBTVQsWUFBWSxJQUFJLENBQUNKLElBQUksRUFDckJLLGFBQWFRLGdCQUFpQixHQUFHO2dCQUV2Q1IsV0FBV1MsZUFBZSxDQUFDVjtZQUM3Qjs7O1lBRUFXLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNWCxZQUFZLElBQUksQ0FBQ0osSUFBSSxFQUNyQkssYUFBYUQsVUFBVUUsYUFBYTtnQkFFMUNELFdBQVdXLGVBQWUsQ0FBQ1o7WUFDN0I7OztZQUVBYSxLQUFBQTttQkFBQUEsU0FBQUEsT0FBT0MsS0FBSyxFQUFFQyxhQUFhO2dCQUN6QixJQUFJQSxrQkFBa0JDLFdBQVc7b0JBQy9CRCxnQkFBZ0JELE9BQVEsR0FBRztvQkFFM0JBLFFBckNlbkIsZUFxQ1MsR0FBRztnQkFDN0I7Z0JBRUEsSUFBTUMsT0FBT21CLGVBQ1BFLFlBQVksSUFBSUgsTUFBTWxCO2dCQUU1QixPQUFPcUI7WUFDVDs7OztZQW1CT0MsS0FBQUE7bUJBQVAsQUFqQkEsMkRBQTJEO1lBQzNELHdDQUF3QztZQUN4QyxrQ0FBa0M7WUFDbEMsRUFBRTtZQUNGLDhCQUE4QjtZQUM5QixNQUFNO1lBQ04sRUFBRTtZQUNGLHNDQUFzQztZQUN0QyxnQ0FBZ0M7WUFDaEMsc0JBQXNCO1lBQ3RCLGVBQWU7WUFDZixTQUFTO1lBQ1Qsd0VBQXdFO1lBQ3hFLEVBQUU7WUFDRixzQkFBc0I7WUFDdEIsSUFBSTtZQUVKLFNBQU9BLGFBQWFKLEtBQUssRUFBRUssUUFBUTtnQkFDakMsSUFBSUEsYUFBYUgsV0FBVztvQkFDMUJHLFdBQVdMLE9BQU8sR0FBRztvQkFFckJBLFFBbkVlbkIsZUFtRVMsR0FBRztnQkFDN0I7Z0JBRUEsSUFBTUMsT0FBT3VCLFVBQ1BDLGdCQUFnQixJQUFJTixNQUFNbEI7Z0JBRWhDLE9BQU93QjtZQUNUOzs7V0ExRW1CekIifQ==