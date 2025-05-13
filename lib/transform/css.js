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
                parentNode.prependChildNodes(childNodes);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90cmFuc2Zvcm0vY3NzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDU1NUcmFuc2Zvcm0ge1xuICBjb25zdHJ1Y3Rvcihjc3NOb2RlKSB7XG4gICAgdGhpcy5jc3NOb2RlID0gY3NzTm9kZTtcbiAgfVxuXG4gIGdldENTU05vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuY3NzTm9kZTtcbiAgfVxuXG4gIGFwcGVuZFRvKHBhcmVudENTU05vZGUpIHtcbiAgICBjb25zdCBjaGlsZE5vZGUgPSB0aGlzLmNzc05vZGUsIC8vL1xuICAgICAgICAgIHBhcmVudE5vZGUgPSBwYXJlbnRDU1NOb2RlOyAgLy8vXG5cbiAgICBwYXJlbnROb2RlLmFwcGVuZENoaWxkTm9kZShjaGlsZE5vZGUpO1xuICB9XG5cbiAgbWVyZ2VXaXRoKGNzc05vZGUpIHtcbiAgICBjb25zdCBwYXJlbnROb2RlID0gY3NzTm9kZTsgLy8vXG5cbiAgICBjc3NOb2RlID0gdGhpcy5jc3NOb2RlLmNsb25lKCk7XG5cbiAgICBjb25zdCBub2RlID0gY3NzTm9kZSwgLy8vXG4gICAgICAgICAgY2hpbGROb2RlcyA9IG5vZGUuZ2V0Q2hpbGROb2RlcygpO1xuXG4gICAgcGFyZW50Tm9kZS5wcmVwZW5kQ2hpbGROb2RlcyhjaGlsZE5vZGVzKTtcbiAgfVxuXG4gIHJlbW92ZSgpIHtcbiAgICBjb25zdCBjaGlsZE5vZGUgPSB0aGlzLmNzc05vZGUsIC8vL1xuICAgICAgICAgIHBhcmVudE5vZGUgPSBjaGlsZE5vZGUuZ2V0UGFyZW50Tm9kZSgpO1xuXG4gICAgcGFyZW50Tm9kZS5yZW1vdmVDaGlsZE5vZGUoY2hpbGROb2RlKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ1NTTm9kZShDbGFzcywgY3NzTm9kZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgaWYgKGNzc05vZGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgY3NzTm9kZSA9IENsYXNzOyAvLy9cblxuICAgICAgQ2xhc3MgPSBDU1NUcmFuc2Zvcm07ICAvLy9cbiAgICB9XG5cbiAgICBjb25zdCBjc3NUcmFuc2Zvcm0gPSBuZXcgQ2xhc3MoY3NzTm9kZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIHJldHVybiBjc3NUcmFuc2Zvcm07XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJDU1NUcmFuc2Zvcm0iLCJjc3NOb2RlIiwiZ2V0Q1NTTm9kZSIsImFwcGVuZFRvIiwicGFyZW50Q1NTTm9kZSIsImNoaWxkTm9kZSIsInBhcmVudE5vZGUiLCJhcHBlbmRDaGlsZE5vZGUiLCJtZXJnZVdpdGgiLCJjbG9uZSIsIm5vZGUiLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsInByZXBlbmRDaGlsZE5vZGVzIiwicmVtb3ZlIiwiZ2V0UGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkTm9kZSIsImZyb21DU1NOb2RlIiwiQ2xhc3MiLCJyZW1haW5pbmdBcmd1bWVudHMiLCJ1bmRlZmluZWQiLCJjc3NUcmFuc2Zvcm0iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBRXFCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFOLElBQUEsQUFBTUEsNkJBQU47YUFBTUEsYUFDUEMsT0FBTztnQ0FEQUQ7UUFFakIsSUFBSSxDQUFDQyxPQUFPLEdBQUdBOztrQkFGRUQ7O1lBS25CRSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNELE9BQU87WUFDckI7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsU0FBU0MsYUFBYTtnQkFDcEIsSUFBTUMsWUFBWSxJQUFJLENBQUNKLE9BQU8sRUFDeEJLLGFBQWFGLGVBQWdCLEdBQUc7Z0JBRXRDRSxXQUFXQyxlQUFlLENBQUNGO1lBQzdCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLFVBQVVQLE9BQU87Z0JBQ2YsSUFBTUssYUFBYUwsU0FBUyxHQUFHO2dCQUUvQkEsVUFBVSxJQUFJLENBQUNBLE9BQU8sQ0FBQ1EsS0FBSztnQkFFNUIsSUFBTUMsT0FBT1QsU0FDUFUsYUFBYUQsS0FBS0UsYUFBYTtnQkFFckNOLFdBQVdPLGlCQUFpQixDQUFDRjtZQUMvQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNVCxZQUFZLElBQUksQ0FBQ0osT0FBTyxFQUN4QkssYUFBYUQsVUFBVVUsYUFBYTtnQkFFMUNULFdBQVdVLGVBQWUsQ0FBQ1g7WUFDN0I7Ozs7WUFFT1ksS0FBQUE7bUJBQVAsU0FBT0EsWUFBWUMsS0FBSyxFQUFFakIsT0FBTztnQkFBRSxJQUFBLElBQUEsT0FBQSxVQUFBLFFBQUEsQUFBR2tCLHFCQUFILFVBQUEsT0FBQSxJQUFBLE9BQUEsUUFBQSxPQUFBLEdBQUEsT0FBQSxNQUFBO29CQUFHQSxtQkFBSCxPQUFBLEtBQUEsU0FBQSxDQUFBLEtBQXFCOztnQkFDdEQsSUFBSWxCLFlBQVltQixXQUFXO29CQUN6Qm5CLFVBQVVpQixPQUFPLEdBQUc7b0JBRXBCQSxRQXRDZWxCLGNBc0NRLEdBQUc7Z0JBQzVCO2dCQUVBLElBQU1xQixlQUFlLFdBQUlILE9BQUo7b0JBQVVqQjtpQkFBK0IsQ0FBekMsT0FBbUIscUJBQUdrQjtnQkFFM0MsT0FBT0U7WUFDVDs7O1dBNUNtQnJCIn0=