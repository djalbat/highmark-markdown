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
                var clone = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
                var parentCSSNode = cssNode.getParentCSSNode(), parentNode = parentCSSNode; ///
                cssNode = clone ? this.cssNode.clone() : this.cssNode;
                var childNode = cssNode; ///
                parentNode.prependChildNode(childNode);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90cmFuc2Zvcm0vY3NzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDU1NUcmFuc2Zvcm0ge1xuICBjb25zdHJ1Y3Rvcihjc3NOb2RlKSB7XG4gICAgdGhpcy5jc3NOb2RlID0gY3NzTm9kZTtcbiAgfVxuXG4gIGdldENTU05vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuY3NzTm9kZTtcbiAgfVxuXG4gIGFwcGVuZFRvKHBhcmVudENTU05vZGUsIGNsb25lID0gZmFsc2UpIHtcbiAgICBjb25zdCBjc3NOb2RlID0gY2xvbmUgP1xuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3NzTm9kZS5jbG9uZSgpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3NzTm9kZSxcbiAgICAgICAgICBjaGlsZE5vZGUgPSBjc3NOb2RlLCAvLy9cbiAgICAgICAgICBwYXJlbnROb2RlID0gcGFyZW50Q1NTTm9kZTsgIC8vL1xuXG4gICAgcGFyZW50Tm9kZS5hcHBlbmRDaGlsZE5vZGUoY2hpbGROb2RlKTtcbiAgfVxuXG4gIHByZXBlbmRUbyhwYXJlbnRDU1NOb2RlLCBjbG9uZSA9IGZhbHNlKSB7XG4gICAgY29uc3QgY3NzTm9kZSA9IGNsb25lID9cbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNzc05vZGUuY2xvbmUoKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNzc05vZGUsXG4gICAgICAgICAgY2hpbGROb2RlID0gY3NzTm9kZSwgLy8vXG4gICAgICAgICAgcGFyZW50Tm9kZSA9IHBhcmVudENTU05vZGU7ICAvLy9cblxuICAgIHBhcmVudE5vZGUucHJlcGVuZENoaWxkTm9kZShjaGlsZE5vZGUpO1xuICB9XG5cbiAgbWVyZ2VXaXRoKGNzc05vZGUsIGNsb25lID0gZmFsc2UpIHtcbiAgICBjb25zdCBwYXJlbnRDU1NOb2RlID0gY3NzTm9kZS5nZXRQYXJlbnRDU1NOb2RlKCksXG4gICAgICAgICAgcGFyZW50Tm9kZSA9IHBhcmVudENTU05vZGU7IC8vL1xuXG4gICAgY3NzTm9kZSA9IGNsb25lID9cbiAgICAgICAgICAgICAgICB0aGlzLmNzc05vZGUuY2xvbmUoKSA6XG4gICAgICAgICAgICAgICAgICB0aGlzLmNzc05vZGU7XG5cbiAgICBjb25zdCBjaGlsZE5vZGUgPSBjc3NOb2RlOyAgLy8vXG5cbiAgICBwYXJlbnROb2RlLnByZXBlbmRDaGlsZE5vZGUoY2hpbGROb2RlKTtcbiAgfVxuXG4gIHJlbW92ZSgpIHtcbiAgICBjb25zdCBjaGlsZE5vZGUgPSB0aGlzLmNzc05vZGUsIC8vL1xuICAgICAgICAgIHBhcmVudE5vZGUgPSBjaGlsZE5vZGUuZ2V0UGFyZW50Tm9kZSgpO1xuXG4gICAgcGFyZW50Tm9kZS5yZW1vdmVDaGlsZE5vZGUoY2hpbGROb2RlKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ1NTTm9kZShDbGFzcywgY3NzTm9kZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgaWYgKGNzc05vZGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgY3NzTm9kZSA9IENsYXNzOyAvLy9cblxuICAgICAgQ2xhc3MgPSBDU1NUcmFuc2Zvcm07ICAvLy9cbiAgICB9XG5cbiAgICBjb25zdCBjc3NUcmFuc2Zvcm0gPSBuZXcgQ2xhc3MoY3NzTm9kZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIHJldHVybiBjc3NUcmFuc2Zvcm07XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJDU1NUcmFuc2Zvcm0iLCJjc3NOb2RlIiwiZ2V0Q1NTTm9kZSIsImFwcGVuZFRvIiwicGFyZW50Q1NTTm9kZSIsImNsb25lIiwiY2hpbGROb2RlIiwicGFyZW50Tm9kZSIsImFwcGVuZENoaWxkTm9kZSIsInByZXBlbmRUbyIsInByZXBlbmRDaGlsZE5vZGUiLCJtZXJnZVdpdGgiLCJnZXRQYXJlbnRDU1NOb2RlIiwicmVtb3ZlIiwiZ2V0UGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkTm9kZSIsImZyb21DU1NOb2RlIiwiQ2xhc3MiLCJyZW1haW5pbmdBcmd1bWVudHMiLCJ1bmRlZmluZWQiLCJjc3NUcmFuc2Zvcm0iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBRXFCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFOLElBQUEsQUFBTUEsNkJBQU47YUFBTUEsYUFDUEMsT0FBTztnQ0FEQUQ7UUFFakIsSUFBSSxDQUFDQyxPQUFPLEdBQUdBOztrQkFGRUQ7O1lBS25CRSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNELE9BQU87WUFDckI7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsU0FBU0MsYUFBYTtvQkFBRUMsUUFBQUEsaUVBQVE7Z0JBQzlCLElBQU1KLFVBQVVJLFFBQ0UsSUFBSSxDQUFDSixPQUFPLENBQUNJLEtBQUssS0FDaEIsSUFBSSxDQUFDSixPQUFPLEVBQzFCSyxZQUFZTCxTQUNaTSxhQUFhSCxlQUFnQixHQUFHO2dCQUV0Q0csV0FBV0MsZUFBZSxDQUFDRjtZQUM3Qjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxVQUFVTCxhQUFhO29CQUFFQyxRQUFBQSxpRUFBUTtnQkFDL0IsSUFBTUosVUFBVUksUUFDRSxJQUFJLENBQUNKLE9BQU8sQ0FBQ0ksS0FBSyxLQUNoQixJQUFJLENBQUNKLE9BQU8sRUFDMUJLLFlBQVlMLFNBQ1pNLGFBQWFILGVBQWdCLEdBQUc7Z0JBRXRDRyxXQUFXRyxnQkFBZ0IsQ0FBQ0o7WUFDOUI7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUEsVUFBVVYsT0FBTztvQkFBRUksUUFBQUEsaUVBQVE7Z0JBQ3pCLElBQU1ELGdCQUFnQkgsUUFBUVcsZ0JBQWdCLElBQ3hDTCxhQUFhSCxlQUFlLEdBQUc7Z0JBRXJDSCxVQUFVSSxRQUNFLElBQUksQ0FBQ0osT0FBTyxDQUFDSSxLQUFLLEtBQ2hCLElBQUksQ0FBQ0osT0FBTztnQkFFMUIsSUFBTUssWUFBWUwsU0FBVSxHQUFHO2dCQUUvQk0sV0FBV0csZ0JBQWdCLENBQUNKO1lBQzlCOzs7WUFFQU8sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1QLFlBQVksSUFBSSxDQUFDTCxPQUFPLEVBQ3hCTSxhQUFhRCxVQUFVUSxhQUFhO2dCQUUxQ1AsV0FBV1EsZUFBZSxDQUFDVDtZQUM3Qjs7OztZQUVPVSxLQUFBQTttQkFBUCxTQUFPQSxZQUFZQyxLQUFLLEVBQUVoQixPQUFPO2dCQUFFLElBQUEsSUFBQSxPQUFBLFVBQUEsUUFBQSxBQUFHaUIscUJBQUgsVUFBQSxPQUFBLElBQUEsT0FBQSxRQUFBLE9BQUEsR0FBQSxPQUFBLE1BQUE7b0JBQUdBLG1CQUFILE9BQUEsS0FBQSxTQUFBLENBQUEsS0FBcUI7O2dCQUN0RCxJQUFJakIsWUFBWWtCLFdBQVc7b0JBQ3pCbEIsVUFBVWdCLE9BQU8sR0FBRztvQkFFcEJBLFFBckRlakIsY0FxRFEsR0FBRztnQkFDNUI7Z0JBRUEsSUFBTW9CLGVBQWUsV0FBSUgsT0FBSjtvQkFBVWhCO2lCQUErQixDQUF6QyxPQUFtQixxQkFBR2lCO2dCQUUzQyxPQUFPRTtZQUNUOzs7V0EzRG1CcEIifQ==