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
                var clone = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
                var cssNode = clone ? this.cssNode.clone() : this.cssNode, childNode = cssNode, parentNode = parentCSSNode; ///
                parentNode.appendChildNode(childNode);
            }
        },
        {
            key: "prependTo",
            value: function prependTo(parentCSSNode) {
                var clone = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
                var cssNode = clone ? this.cssNode.clone() : this.cssNode, childNode = cssNode, parentNode = parentCSSNode; ///
                parentNode.prependChildNode(childNode);
            }
        },
        {
            key: "mergeWith",
            value: function mergeWith(cssNode) {
                var parentCSSNode = cssNode.getParentCSSNode(), parentNode = parentCSSNode, childNode = this.cssNode; ///
                parentNode.appendChildNode(childNode);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90cmFuc2Zvcm0vY3NzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDU1NUcmFuc2Zvcm0ge1xuICBjb25zdHJ1Y3Rvcihjc3NOb2RlKSB7XG4gICAgdGhpcy5jc3NOb2RlID0gY3NzTm9kZTtcbiAgfVxuXG4gIGdldENTU05vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuY3NzTm9kZTtcbiAgfVxuXG4gIGFwcGVuZFRvKHBhcmVudENTU05vZGUsIGNsb25lID0gZmFsc2UpIHtcbiAgICBjb25zdCBjc3NOb2RlID0gY2xvbmUgP1xuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3NzTm9kZS5jbG9uZSgpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3NzTm9kZSxcbiAgICAgICAgICBjaGlsZE5vZGUgPSBjc3NOb2RlLCAvLy9cbiAgICAgICAgICBwYXJlbnROb2RlID0gcGFyZW50Q1NTTm9kZTsgIC8vL1xuXG4gICAgcGFyZW50Tm9kZS5hcHBlbmRDaGlsZE5vZGUoY2hpbGROb2RlKTtcbiAgfVxuXG4gIHByZXBlbmRUbyhwYXJlbnRDU1NOb2RlLCBjbG9uZSA9IGZhbHNlKSB7XG4gICAgY29uc3QgY3NzTm9kZSA9IGNsb25lID9cbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNzc05vZGUuY2xvbmUoKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNzc05vZGUsXG4gICAgICAgICAgY2hpbGROb2RlID0gY3NzTm9kZSwgLy8vXG4gICAgICAgICAgcGFyZW50Tm9kZSA9IHBhcmVudENTU05vZGU7ICAvLy9cblxuICAgIHBhcmVudE5vZGUucHJlcGVuZENoaWxkTm9kZShjaGlsZE5vZGUpO1xuICB9XG5cbiAgbWVyZ2VXaXRoKGNzc05vZGUpIHtcbiAgICBjb25zdCBwYXJlbnRDU1NOb2RlID0gY3NzTm9kZS5nZXRQYXJlbnRDU1NOb2RlKCksXG4gICAgICAgICAgcGFyZW50Tm9kZSA9IHBhcmVudENTU05vZGUsIC8vL1xuICAgICAgICAgIGNoaWxkTm9kZSA9IHRoaXMuY3NzTm9kZTsgLy8vXG5cbiAgICBwYXJlbnROb2RlLmFwcGVuZENoaWxkTm9kZShjaGlsZE5vZGUpO1xuICB9XG5cbiAgcmVtb3ZlKCkge1xuICAgIGNvbnN0IGNoaWxkTm9kZSA9IHRoaXMuY3NzTm9kZSwgLy8vXG4gICAgICAgICAgcGFyZW50Tm9kZSA9IGNoaWxkTm9kZS5nZXRQYXJlbnROb2RlKCk7XG5cbiAgICBwYXJlbnROb2RlLnJlbW92ZUNoaWxkTm9kZShjaGlsZE5vZGUpO1xuICB9XG5cbiAgc3RhdGljIGZyb21DU1NOb2RlKENsYXNzLCBjc3NOb2RlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBpZiAoY3NzTm9kZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBjc3NOb2RlID0gQ2xhc3M7IC8vL1xuXG4gICAgICBDbGFzcyA9IENTU1RyYW5zZm9ybTsgIC8vL1xuICAgIH1cblxuICAgIGNvbnN0IGNzc1RyYW5zZm9ybSA9IG5ldyBDbGFzcyhjc3NOb2RlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgcmV0dXJuIGNzc1RyYW5zZm9ybTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkNTU1RyYW5zZm9ybSIsImNzc05vZGUiLCJnZXRDU1NOb2RlIiwiYXBwZW5kVG8iLCJwYXJlbnRDU1NOb2RlIiwiY2xvbmUiLCJjaGlsZE5vZGUiLCJwYXJlbnROb2RlIiwiYXBwZW5kQ2hpbGROb2RlIiwicHJlcGVuZFRvIiwicHJlcGVuZENoaWxkTm9kZSIsIm1lcmdlV2l0aCIsImdldFBhcmVudENTU05vZGUiLCJyZW1vdmUiLCJnZXRQYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGROb2RlIiwiZnJvbUNTU05vZGUiLCJDbGFzcyIsInJlbWFpbmluZ0FyZ3VtZW50cyIsInVuZGVmaW5lZCIsImNzc1RyYW5zZm9ybSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFFcUJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU4sSUFBQSxBQUFNQSw2QkFBTjthQUFNQSxhQUNQQyxPQUFPO2dDQURBRDtRQUVqQixJQUFJLENBQUNDLE9BQU8sR0FBR0E7O2tCQUZFRDs7WUFLbkJFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0QsT0FBTztZQUNyQjs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxTQUFTQyxhQUFhO29CQUFFQyxRQUFBQSxpRUFBUTtnQkFDOUIsSUFBTUosVUFBVUksUUFDRSxJQUFJLENBQUNKLE9BQU8sQ0FBQ0ksS0FBSyxLQUNoQixJQUFJLENBQUNKLE9BQU8sRUFDMUJLLFlBQVlMLFNBQ1pNLGFBQWFILGVBQWdCLEdBQUc7Z0JBRXRDRyxXQUFXQyxlQUFlLENBQUNGO1lBQzdCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLFVBQVVMLGFBQWE7b0JBQUVDLFFBQUFBLGlFQUFRO2dCQUMvQixJQUFNSixVQUFVSSxRQUNFLElBQUksQ0FBQ0osT0FBTyxDQUFDSSxLQUFLLEtBQ2hCLElBQUksQ0FBQ0osT0FBTyxFQUMxQkssWUFBWUwsU0FDWk0sYUFBYUgsZUFBZ0IsR0FBRztnQkFFdENHLFdBQVdHLGdCQUFnQixDQUFDSjtZQUM5Qjs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQSxVQUFVVixPQUFPO2dCQUNmLElBQU1HLGdCQUFnQkgsUUFBUVcsZ0JBQWdCLElBQ3hDTCxhQUFhSCxlQUNiRSxZQUFZLElBQUksQ0FBQ0wsT0FBTyxFQUFFLEdBQUc7Z0JBRW5DTSxXQUFXQyxlQUFlLENBQUNGO1lBQzdCOzs7WUFFQU8sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1QLFlBQVksSUFBSSxDQUFDTCxPQUFPLEVBQ3hCTSxhQUFhRCxVQUFVUSxhQUFhO2dCQUUxQ1AsV0FBV1EsZUFBZSxDQUFDVDtZQUM3Qjs7OztZQUVPVSxLQUFBQTttQkFBUCxTQUFPQSxZQUFZQyxLQUFLLEVBQUVoQixPQUFPO2dCQUFFLElBQUEsSUFBQSxPQUFBLFVBQUEsUUFBQSxBQUFHaUIscUJBQUgsVUFBQSxPQUFBLElBQUEsT0FBQSxRQUFBLE9BQUEsR0FBQSxPQUFBLE1BQUE7b0JBQUdBLG1CQUFILE9BQUEsS0FBQSxTQUFBLENBQUEsS0FBcUI7O2dCQUN0RCxJQUFJakIsWUFBWWtCLFdBQVc7b0JBQ3pCbEIsVUFBVWdCLE9BQU8sR0FBRztvQkFFcEJBLFFBaERlakIsY0FnRFEsR0FBRztnQkFDNUI7Z0JBRUEsSUFBTW9CLGVBQWUsV0FBSUgsT0FBSjtvQkFBVWhCO2lCQUErQixDQUF6QyxPQUFtQixxQkFBR2lCO2dCQUUzQyxPQUFPRTtZQUNUOzs7V0F0RG1CcEIifQ==