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
            value: function addAfter(siblingHTMLNode) {
                var childNode = siblingHTMLNode, parentNode = childNode.getParentNode(), index = parentNode.indexOfChildNode(childNode), startIndex = index + 1, addedChildNode = this.htmlNode; ///
                parentNode.addChildNode(addedChildNode, startIndex);
            }
        },
        {
            key: "remove",
            value: function remove() {
                var childNode = this.htmlNode, parentNode = childNode.getParentNode();
                parentNode.removeChildNode(childNode);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90cmFuc2Zvcm0vaHRtbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSFRNTFRyYW5zZm9ybSB7XG4gIGNvbnN0cnVjdG9yKGh0bWxOb2RlKSB7XG4gICAgdGhpcy5odG1sTm9kZSA9IGh0bWxOb2RlO1xuICB9XG5cbiAgZ2V0SFRNTE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuaHRtbE5vZGU7XG4gIH1cblxuICBhcHBlbmRUbyhwYXJlbnRIVE1MTm9kZSkge1xuICAgIGNvbnN0IGNoaWxkTm9kZSA9IHRoaXMuaHRtbE5vZGUsIC8vL1xuICAgICAgICAgIHBhcmVudE5vZGUgPSBwYXJlbnRIVE1MTm9kZTsgIC8vL1xuXG4gICAgcGFyZW50Tm9kZS5hcHBlbmRDaGlsZE5vZGUoY2hpbGROb2RlKTtcbiAgfVxuXG4gIHByZXBlbmRUbyhwYXJlbnRIVE1MTm9kZSkge1xuICAgIGNvbnN0IGNoaWxkTm9kZSA9IHRoaXMuaHRtbE5vZGUsIC8vL1xuICAgICAgICBwYXJlbnROb2RlID0gcGFyZW50SFRNTE5vZGU7ICAvLy9cblxuICAgIHBhcmVudE5vZGUucHJlcGVuZENoaWxkTm9kZShjaGlsZE5vZGUpO1xuICB9XG5cbiAgYWRkQWZ0ZXIoc2libGluZ0hUTUxOb2RlKSB7XG4gICAgY29uc3QgY2hpbGROb2RlID0gc2libGluZ0hUTUxOb2RlLCAgLy8vXG4gICAgICAgICAgcGFyZW50Tm9kZSA9IGNoaWxkTm9kZS5nZXRQYXJlbnROb2RlKCksXG4gICAgICAgICAgaW5kZXggPSBwYXJlbnROb2RlLmluZGV4T2ZDaGlsZE5vZGUoY2hpbGROb2RlKSxcbiAgICAgICAgICBzdGFydEluZGV4ID0gaW5kZXggKyAxLFxuICAgICAgICAgIGFkZGVkQ2hpbGROb2RlID0gdGhpcy5odG1sTm9kZTsgIC8vL1xuXG4gICAgcGFyZW50Tm9kZS5hZGRDaGlsZE5vZGUoYWRkZWRDaGlsZE5vZGUsIHN0YXJ0SW5kZXgpO1xuICB9XG5cbiAgcmVtb3ZlKCkge1xuICAgIGNvbnN0IGNoaWxkTm9kZSA9IHRoaXMuaHRtbE5vZGUsIC8vL1xuICAgICAgICAgIHBhcmVudE5vZGUgPSBjaGlsZE5vZGUuZ2V0UGFyZW50Tm9kZSgpO1xuXG4gICAgcGFyZW50Tm9kZS5yZW1vdmVDaGlsZE5vZGUoY2hpbGROb2RlKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSFRNTE5vZGUoQ2xhc3MsIGh0bWxOb2RlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBpZiAoaHRtbE5vZGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgaHRtbE5vZGUgPSBDbGFzczsgLy8vXG5cbiAgICAgIENsYXNzID0gSFRNTFRyYW5zZm9ybTsgIC8vL1xuICAgIH1cblxuICAgIGNvbnN0IGh0bWxUcmFuc2Zvcm0gPSBuZXcgQ2xhc3MoaHRtbE5vZGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICByZXR1cm4gaHRtbFRyYW5zZm9ybTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkhUTUxUcmFuc2Zvcm0iLCJodG1sTm9kZSIsImdldEhUTUxOb2RlIiwiYXBwZW5kVG8iLCJwYXJlbnRIVE1MTm9kZSIsImNoaWxkTm9kZSIsInBhcmVudE5vZGUiLCJhcHBlbmRDaGlsZE5vZGUiLCJwcmVwZW5kVG8iLCJwcmVwZW5kQ2hpbGROb2RlIiwiYWRkQWZ0ZXIiLCJzaWJsaW5nSFRNTE5vZGUiLCJnZXRQYXJlbnROb2RlIiwiaW5kZXgiLCJpbmRleE9mQ2hpbGROb2RlIiwic3RhcnRJbmRleCIsImFkZGVkQ2hpbGROb2RlIiwiYWRkQ2hpbGROb2RlIiwicmVtb3ZlIiwicmVtb3ZlQ2hpbGROb2RlIiwiZnJvbUhUTUxOb2RlIiwiQ2xhc3MiLCJyZW1haW5pbmdBcmd1bWVudHMiLCJ1bmRlZmluZWQiLCJodG1sVHJhbnNmb3JtIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQUVxQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTixJQUFBLEFBQU1BLDhCQUFOO2FBQU1BLGNBQ1BDLFFBQVE7Z0NBREREO1FBRWpCLElBQUksQ0FBQ0MsUUFBUSxHQUFHQTs7a0JBRkNEOztZQUtuQkUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRCxRQUFRO1lBQ3RCOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBLFNBQVNDLGNBQWM7Z0JBQ3JCLElBQU1DLFlBQVksSUFBSSxDQUFDSixRQUFRLEVBQ3pCSyxhQUFhRixnQkFBaUIsR0FBRztnQkFFdkNFLFdBQVdDLGVBQWUsQ0FBQ0Y7WUFDN0I7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsVUFBVUosY0FBYztnQkFDdEIsSUFBTUMsWUFBWSxJQUFJLENBQUNKLFFBQVEsRUFDM0JLLGFBQWFGLGdCQUFpQixHQUFHO2dCQUVyQ0UsV0FBV0csZ0JBQWdCLENBQUNKO1lBQzlCOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBLFNBQVNDLGVBQWU7Z0JBQ3RCLElBQU1OLFlBQVlNLGlCQUNaTCxhQUFhRCxVQUFVTyxhQUFhLElBQ3BDQyxRQUFRUCxXQUFXUSxnQkFBZ0IsQ0FBQ1QsWUFDcENVLGFBQWFGLFFBQVEsR0FDckJHLGlCQUFpQixJQUFJLENBQUNmLFFBQVEsRUFBRyxHQUFHO2dCQUUxQ0ssV0FBV1csWUFBWSxDQUFDRCxnQkFBZ0JEO1lBQzFDOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1iLFlBQVksSUFBSSxDQUFDSixRQUFRLEVBQ3pCSyxhQUFhRCxVQUFVTyxhQUFhO2dCQUUxQ04sV0FBV2EsZUFBZSxDQUFDZDtZQUM3Qjs7OztZQUVPZSxLQUFBQTttQkFBUCxTQUFPQSxhQUFhQyxLQUFLLEVBQUVwQixRQUFRO2dCQUFFLElBQUEsSUFBQSxPQUFBLFVBQUEsUUFBQSxBQUFHcUIscUJBQUgsVUFBQSxPQUFBLElBQUEsT0FBQSxRQUFBLE9BQUEsR0FBQSxPQUFBLE1BQUE7b0JBQUdBLG1CQUFILE9BQUEsS0FBQSxTQUFBLENBQUEsS0FBcUI7O2dCQUN4RCxJQUFJckIsYUFBYXNCLFdBQVc7b0JBQzFCdEIsV0FBV29CLE9BQU8sR0FBRztvQkFFckJBLFFBNUNlckIsZUE0Q1MsR0FBRztnQkFDN0I7Z0JBRUEsSUFBTXdCLGdCQUFnQixXQUFJSCxPQUFKO29CQUFVcEI7aUJBQWdDLENBQTFDLE9BQW9CLHFCQUFHcUI7Z0JBRTdDLE9BQU9FO1lBQ1Q7OztXQWxEbUJ4QiJ9