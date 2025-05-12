"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return CSSTransform;
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
var CSSTransform = /*#__PURE__*/ function() {
    function CSSTransform(cssNode) {
        _class_call_check(this, CSSTransform);
        this.cssNode = cssNode;
    }
    _create_class(CSSTransform, [
        {
            key: "getCSSNode",
            value: function getCSSNode() {
                return this.cssNode;
            }
        },
        {
            key: "appendTo",
            value: function appendTo(parentCSSNode) {
                var childNode = this.cssNode, parentNode = parentCSSNode; ///
                parentNode.appendChildNode(childNode);
            }
        },
        {
            key: "mergeWith",
            value: function mergeWith(cssNode) {
                var parentNode = cssNode; ///
                cssNode = this.cssNode.clone();
                var node = cssNode, childNodes = node.getChildNodes();
                parentNode.appendChildNodes(childNodes);
            }
        },
        {
            key: "remove",
            value: function remove() {
                var childNode = this.cssNode, parentNode = childNode.getParentNode();
                parentNode.removeChildNode(childNode);
            }
        }
    ], [
        {
            key: "fromCSSNode",
            value: function fromCSSNode(Class, cssNode) {
                for(var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
                    remainingArguments[_key - 2] = arguments[_key];
                }
                if (cssNode === undefined) {
                    cssNode = Class; ///
                    Class = CSSTransform; ///
                }
                var cssTransform = _construct(Class, [
                    cssNode
                ].concat(_to_consumable_array(remainingArguments)));
                return cssTransform;
            }
        }
    ]);
    return CSSTransform;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90cmFuc2Zvcm0vY3NzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDU1NUcmFuc2Zvcm0ge1xuICBjb25zdHJ1Y3Rvcihjc3NOb2RlKSB7XG4gICAgdGhpcy5jc3NOb2RlID0gY3NzTm9kZTtcbiAgfVxuXG4gIGdldENTU05vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuY3NzTm9kZTtcbiAgfVxuXG4gIGFwcGVuZFRvKHBhcmVudENTU05vZGUpIHtcbiAgICBjb25zdCBjaGlsZE5vZGUgPSB0aGlzLmNzc05vZGUsIC8vL1xuICAgICAgICAgIHBhcmVudE5vZGUgPSBwYXJlbnRDU1NOb2RlOyAgLy8vXG5cbiAgICBwYXJlbnROb2RlLmFwcGVuZENoaWxkTm9kZShjaGlsZE5vZGUpO1xuICB9XG5cbiAgbWVyZ2VXaXRoKGNzc05vZGUpIHtcbiAgICBjb25zdCBwYXJlbnROb2RlID0gY3NzTm9kZTsgLy8vXG5cbiAgICBjc3NOb2RlID0gdGhpcy5jc3NOb2RlLmNsb25lKCk7XG5cbiAgICBjb25zdCBub2RlID0gY3NzTm9kZSwgLy8vXG4gICAgICAgICAgY2hpbGROb2RlcyA9IG5vZGUuZ2V0Q2hpbGROb2RlcygpO1xuXG4gICAgcGFyZW50Tm9kZS5hcHBlbmRDaGlsZE5vZGVzKGNoaWxkTm9kZXMpO1xuICB9XG5cbiAgcmVtb3ZlKCkge1xuICAgIGNvbnN0IGNoaWxkTm9kZSA9IHRoaXMuY3NzTm9kZSwgLy8vXG4gICAgICAgICAgcGFyZW50Tm9kZSA9IGNoaWxkTm9kZS5nZXRQYXJlbnROb2RlKCk7XG5cbiAgICBwYXJlbnROb2RlLnJlbW92ZUNoaWxkTm9kZShjaGlsZE5vZGUpO1xuICB9XG5cbiAgc3RhdGljIGZyb21DU1NOb2RlKENsYXNzLCBjc3NOb2RlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBpZiAoY3NzTm9kZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBjc3NOb2RlID0gQ2xhc3M7IC8vL1xuXG4gICAgICBDbGFzcyA9IENTU1RyYW5zZm9ybTsgIC8vL1xuICAgIH1cblxuICAgIGNvbnN0IGNzc1RyYW5zZm9ybSA9IG5ldyBDbGFzcyhjc3NOb2RlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgcmV0dXJuIGNzc1RyYW5zZm9ybTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkNTU1RyYW5zZm9ybSIsImNzc05vZGUiLCJnZXRDU1NOb2RlIiwiYXBwZW5kVG8iLCJwYXJlbnRDU1NOb2RlIiwiY2hpbGROb2RlIiwicGFyZW50Tm9kZSIsImFwcGVuZENoaWxkTm9kZSIsIm1lcmdlV2l0aCIsImNsb25lIiwibm9kZSIsImNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwiYXBwZW5kQ2hpbGROb2RlcyIsInJlbW92ZSIsImdldFBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZE5vZGUiLCJmcm9tQ1NTTm9kZSIsIkNsYXNzIiwicmVtYWluaW5nQXJndW1lbnRzIiwidW5kZWZpbmVkIiwiY3NzVHJhbnNmb3JtIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQUVxQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTixJQUFBLEFBQU1BLDZCQUFOO2FBQU1BLGFBQ1BDLE9BQU87Z0NBREFEO1FBRWpCLElBQUksQ0FBQ0MsT0FBTyxHQUFHQTs7a0JBRkVEOztZQUtuQkUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRCxPQUFPO1lBQ3JCOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBLFNBQVNDLGFBQWE7Z0JBQ3BCLElBQU1DLFlBQVksSUFBSSxDQUFDSixPQUFPLEVBQ3hCSyxhQUFhRixlQUFnQixHQUFHO2dCQUV0Q0UsV0FBV0MsZUFBZSxDQUFDRjtZQUM3Qjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxVQUFVUCxPQUFPO2dCQUNmLElBQU1LLGFBQWFMLFNBQVMsR0FBRztnQkFFL0JBLFVBQVUsSUFBSSxDQUFDQSxPQUFPLENBQUNRLEtBQUs7Z0JBRTVCLElBQU1DLE9BQU9ULFNBQ1BVLGFBQWFELEtBQUtFLGFBQWE7Z0JBRXJDTixXQUFXTyxnQkFBZ0IsQ0FBQ0Y7WUFDOUI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTVQsWUFBWSxJQUFJLENBQUNKLE9BQU8sRUFDeEJLLGFBQWFELFVBQVVVLGFBQWE7Z0JBRTFDVCxXQUFXVSxlQUFlLENBQUNYO1lBQzdCOzs7O1lBRU9ZLEtBQUFBO21CQUFQLFNBQU9BLFlBQVlDLEtBQUssRUFBRWpCLE9BQU87Z0JBQUUsSUFBQSxJQUFBLE9BQUEsVUFBQSxRQUFBLEFBQUdrQixxQkFBSCxVQUFBLE9BQUEsSUFBQSxPQUFBLFFBQUEsT0FBQSxHQUFBLE9BQUEsTUFBQTtvQkFBR0EsbUJBQUgsT0FBQSxLQUFBLFNBQUEsQ0FBQSxLQUFxQjs7Z0JBQ3RELElBQUlsQixZQUFZbUIsV0FBVztvQkFDekJuQixVQUFVaUIsT0FBTyxHQUFHO29CQUVwQkEsUUF0Q2VsQixjQXNDUSxHQUFHO2dCQUM1QjtnQkFFQSxJQUFNcUIsZUFBZSxXQUFJSCxPQUFKO29CQUFVakI7aUJBQStCLENBQXpDLE9BQW1CLHFCQUFHa0I7Z0JBRTNDLE9BQU9FO1lBQ1Q7OztXQTVDbUJyQiJ9