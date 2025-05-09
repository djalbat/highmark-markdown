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
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _construct(Parent, args, Class) {
    if (_is_native_reflect_construct()) {
        _construct = Reflect.construct;
    } else {
        _construct = function construct(Parent, args, Class) {
            var a = [
                null
            ];
            a.push.apply(a, args);
            var Constructor = Function.bind.apply(Parent, a);
            var instance = new Constructor();
            if (Class) _set_prototype_of(instance, Class.prototype);
            return instance;
        };
    }
    return _construct.apply(null, arguments);
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
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
function _is_native_reflect_construct() {
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
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
                for(var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
                    remainingArguments[_key - 2] = arguments[_key];
                }
                if (htmlNode === undefined) {
                    htmlNode = Class; ///
                    Class = HTMLTransform; ///
                }
                var htmlTransform = _construct(Class, [
                    htmlNode
                ].concat(_to_consumable_array(remainingArguments)));
                return htmlTransform;
            }
        }
    ]);
    return HTMLTransform;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90cmFuc2Zvcm0vaHRtbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSFRNTFRyYW5zZm9ybSB7XG4gIGNvbnN0cnVjdG9yKGh0bWxOb2RlKSB7XG4gICAgdGhpcy5odG1sTm9kZSA9IGh0bWxOb2RlO1xuICB9XG5cbiAgZ2V0SFRNTE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuaHRtbE5vZGU7XG4gIH1cblxuICBhcHBlbmRUbyhwYXJlbnRIVE1MTm9kZSkge1xuICAgIGNvbnN0IGNoaWxkTm9kZSA9IHRoaXMuaHRtbE5vZGUsIC8vL1xuICAgICAgICAgIHBhcmVudE5vZGUgPSBwYXJlbnRIVE1MTm9kZTsgIC8vL1xuXG4gICAgcGFyZW50Tm9kZS5hcHBlbmRDaGlsZE5vZGUoY2hpbGROb2RlKTtcbiAgfVxuXG4gIHByZXBlbmRUbyhwYXJlbnRIVE1MTm9kZSkge1xuICAgIGNvbnN0IGNoaWxkTm9kZSA9IHRoaXMuaHRtbE5vZGUsIC8vL1xuICAgICAgICBwYXJlbnROb2RlID0gcGFyZW50SFRNTE5vZGU7ICAvLy9cblxuICAgIHBhcmVudE5vZGUucHJlcGVuZENoaWxkTm9kZShjaGlsZE5vZGUpO1xuICB9XG5cbiAgYWRkQWZ0ZXIoZXhpdGluZ0hUTUxOb2RlKSB7XG4gICAgY29uc3QgY2hpbGROb2RlID0gZXhpdGluZ0hUTUxOb2RlLCAgLy8vXG4gICAgICAgICAgcGFyZW50Tm9kZSA9IGNoaWxkTm9kZS5nZXRQYXJlbnROb2RlKCksXG4gICAgICAgICAgaW5kZXggPSBwYXJlbnROb2RlLmluZGV4T2ZDaGlsZE5vZGUoY2hpbGROb2RlKSxcbiAgICAgICAgICBzdGFydEluZGV4ID0gaW5kZXggKyAxLFxuICAgICAgICAgIGFkZGVkQ2hpbGROb2RlID0gdGhpcy5odG1sTm9kZTsgIC8vL1xuXG4gICAgcGFyZW50Tm9kZS5hZGRDaGlsZE5vZGUoYWRkZWRDaGlsZE5vZGUsIHN0YXJ0SW5kZXgpO1xuICB9XG5cbiAgcmVwbGFjZShyZXBsYWNlZEhUTUxOb2RlKSB7XG4gICAgY29uc3QgcGFyZW50Tm9kZSA9IHJlcGxhY2VkSFRNTE5vZGUuZ2V0UGFyZW50Tm9kZSgpLFxuICAgICAgICAgIHJlcGxhY2VkQ2hpbGROb2RlID0gcmVwbGFjZWRIVE1MTm9kZSwgLy8vXG4gICAgICAgICAgcmVwbGFjZW1lbnRDaGlsZE5vZGUgPSB0aGlzLmh0bWxOb2RlLCAgLy8vXG4gICAgICAgICAgcmVwbGFjZW1lbnRDaGlsZE5vZGVzID0gW1xuICAgICAgICAgICAgcmVwbGFjZW1lbnRDaGlsZE5vZGVcbiAgICAgICAgICBdO1xuXG4gICAgcGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGROb2RlKHJlcGxhY2VkQ2hpbGROb2RlLCByZXBsYWNlbWVudENoaWxkTm9kZXMpO1xuICB9XG5cbiAgcmVtb3ZlKCkge1xuICAgIGNvbnN0IGNoaWxkTm9kZSA9IHRoaXMuaHRtbE5vZGUsIC8vL1xuICAgICAgICAgIHBhcmVudE5vZGUgPSBjaGlsZE5vZGUuZ2V0UGFyZW50Tm9kZSgpO1xuXG4gICAgcGFyZW50Tm9kZS5yZW1vdmVDaGlsZE5vZGUoY2hpbGROb2RlKTtcbiAgfVxuXG4gIGV4cGFuZChDbGFzcywgYXNjZW5kYW50Tm9kZSkge1xuICAgIGlmIChhc2NlbmRhbnROb2RlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGFzY2VuZGFudE5vZGUgPSBDbGFzczsgIC8vL1xuXG4gICAgICBDbGFzcyA9IEhUTUxUcmFuc2Zvcm07ICAvLy9cbiAgICB9XG5cbiAgICBjb25zdCBodG1sTm9kZSA9IGFzY2VuZGFudE5vZGUsIC8vL1xuICAgICAgICAgIHRyYW5zZm9ybSA9IG5ldyBDbGFzcyhodG1sTm9kZSk7XG5cbiAgICByZXR1cm4gdHJhbnNmb3JtO1xuICB9XG5cbiAgc3RhdGljIGZyb21IVE1MTm9kZShDbGFzcywgaHRtbE5vZGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGlmIChodG1sTm9kZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBodG1sTm9kZSA9IENsYXNzOyAvLy9cblxuICAgICAgQ2xhc3MgPSBIVE1MVHJhbnNmb3JtOyAgLy8vXG4gICAgfVxuXG4gICAgY29uc3QgaHRtbFRyYW5zZm9ybSA9IG5ldyBDbGFzcyhodG1sTm9kZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIHJldHVybiBodG1sVHJhbnNmb3JtO1xuICB9XG59XG4iXSwibmFtZXMiOlsiSFRNTFRyYW5zZm9ybSIsImh0bWxOb2RlIiwiZ2V0SFRNTE5vZGUiLCJhcHBlbmRUbyIsInBhcmVudEhUTUxOb2RlIiwiY2hpbGROb2RlIiwicGFyZW50Tm9kZSIsImFwcGVuZENoaWxkTm9kZSIsInByZXBlbmRUbyIsInByZXBlbmRDaGlsZE5vZGUiLCJhZGRBZnRlciIsImV4aXRpbmdIVE1MTm9kZSIsImdldFBhcmVudE5vZGUiLCJpbmRleCIsImluZGV4T2ZDaGlsZE5vZGUiLCJzdGFydEluZGV4IiwiYWRkZWRDaGlsZE5vZGUiLCJhZGRDaGlsZE5vZGUiLCJyZXBsYWNlIiwicmVwbGFjZWRIVE1MTm9kZSIsInJlcGxhY2VkQ2hpbGROb2RlIiwicmVwbGFjZW1lbnRDaGlsZE5vZGUiLCJyZXBsYWNlbWVudENoaWxkTm9kZXMiLCJyZXBsYWNlQ2hpbGROb2RlIiwicmVtb3ZlIiwicmVtb3ZlQ2hpbGROb2RlIiwiZXhwYW5kIiwiQ2xhc3MiLCJhc2NlbmRhbnROb2RlIiwidW5kZWZpbmVkIiwidHJhbnNmb3JtIiwiZnJvbUhUTUxOb2RlIiwicmVtYWluaW5nQXJndW1lbnRzIiwiaHRtbFRyYW5zZm9ybSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFFcUJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU4sSUFBQSxBQUFNQSw4QkFBTjthQUFNQSxjQUNQQyxRQUFRO2dDQURERDtRQUVqQixJQUFJLENBQUNDLFFBQVEsR0FBR0E7O2tCQUZDRDs7WUFLbkJFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0QsUUFBUTtZQUN0Qjs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxTQUFTQyxjQUFjO2dCQUNyQixJQUFNQyxZQUFZLElBQUksQ0FBQ0osUUFBUSxFQUN6QkssYUFBYUYsZ0JBQWlCLEdBQUc7Z0JBRXZDRSxXQUFXQyxlQUFlLENBQUNGO1lBQzdCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLFVBQVVKLGNBQWM7Z0JBQ3RCLElBQU1DLFlBQVksSUFBSSxDQUFDSixRQUFRLEVBQzNCSyxhQUFhRixnQkFBaUIsR0FBRztnQkFFckNFLFdBQVdHLGdCQUFnQixDQUFDSjtZQUM5Qjs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQSxTQUFTQyxlQUFlO2dCQUN0QixJQUFNTixZQUFZTSxpQkFDWkwsYUFBYUQsVUFBVU8sYUFBYSxJQUNwQ0MsUUFBUVAsV0FBV1EsZ0JBQWdCLENBQUNULFlBQ3BDVSxhQUFhRixRQUFRLEdBQ3JCRyxpQkFBaUIsSUFBSSxDQUFDZixRQUFRLEVBQUcsR0FBRztnQkFFMUNLLFdBQVdXLFlBQVksQ0FBQ0QsZ0JBQWdCRDtZQUMxQzs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxRQUFRQyxnQkFBZ0I7Z0JBQ3RCLElBQU1iLGFBQWFhLGlCQUFpQlAsYUFBYSxJQUMzQ1Esb0JBQW9CRCxrQkFDcEJFLHVCQUF1QixJQUFJLENBQUNwQixRQUFRLEVBQ3BDcUIsd0JBQXdCO29CQUN0QkQ7aUJBQ0Q7Z0JBRVBmLFdBQVdpQixnQkFBZ0IsQ0FBQ0gsbUJBQW1CRTtZQUNqRDs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNbkIsWUFBWSxJQUFJLENBQUNKLFFBQVEsRUFDekJLLGFBQWFELFVBQVVPLGFBQWE7Z0JBRTFDTixXQUFXbUIsZUFBZSxDQUFDcEI7WUFDN0I7OztZQUVBcUIsS0FBQUE7bUJBQUFBLFNBQUFBLE9BQU9DLEtBQUssRUFBRUMsYUFBYTtnQkFDekIsSUFBSUEsa0JBQWtCQyxXQUFXO29CQUMvQkQsZ0JBQWdCRCxPQUFRLEdBQUc7b0JBRTNCQSxRQXZEZTNCLGVBdURTLEdBQUc7Z0JBQzdCO2dCQUVBLElBQU1DLFdBQVcyQixlQUNYRSxZQUFZLElBQUlILE1BQU0xQjtnQkFFNUIsT0FBTzZCO1lBQ1Q7Ozs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EsYUFBYUosS0FBSyxFQUFFMUIsUUFBUTtnQkFBRSxJQUFBLElBQUEsT0FBQSxVQUFBLFFBQUEsQUFBRytCLHFCQUFILFVBQUEsT0FBQSxJQUFBLE9BQUEsUUFBQSxPQUFBLEdBQUEsT0FBQSxNQUFBO29CQUFHQSxtQkFBSCxPQUFBLEtBQUEsU0FBQSxDQUFBLEtBQXFCOztnQkFDeEQsSUFBSS9CLGFBQWE0QixXQUFXO29CQUMxQjVCLFdBQVcwQixPQUFPLEdBQUc7b0JBRXJCQSxRQXBFZTNCLGVBb0VTLEdBQUc7Z0JBQzdCO2dCQUVBLElBQU1pQyxnQkFBZ0IsV0FBSU4sT0FBSjtvQkFBVTFCO2lCQUFnQyxDQUExQyxPQUFvQixxQkFBRytCO2dCQUU3QyxPQUFPQztZQUNUOzs7V0ExRW1CakMifQ==