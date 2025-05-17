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
                var parentNode = parentCSSNode, childNode = this.cssNode; ///
                parentNode.appendChildNode(childNode);
            }
        },
        {
            key: "prependTo",
            value: function prependTo(parentCSSNode) {
                var parentNode = parentCSSNode, childNode = this.cssNode; ///
                parentNode.prependChildNode(childNode);
            }
        },
        {
            key: "mergeWith",
            value: function mergeWith(cssNode) {
                var parentNode = cssNode; ///
                var childNodes;
                var node = this.cssNode; ///
                childNodes = node.getChildNodes();
                childNodes = cloneChildNodes(childNodes); ///
                parentNode.prependChildNodes(childNodes);
            }
        },
        {
            key: "remove",
            value: function remove() {
                var parentCSSNode = this.cssNode.getParentCSSNode(), parentNode = parentCSSNode, childNode = this.cssNode; ///
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
function cloneChildNodes(childNodes) {
    childNodes = childNodes.map(function(childNode) {
        childNode = childNode.clone(); ///
        return childNode;
    });
    return childNodes;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90cmFuc2Zvcm0vY3NzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDU1NUcmFuc2Zvcm0ge1xuICBjb25zdHJ1Y3Rvcihjc3NOb2RlKSB7XG4gICAgdGhpcy5jc3NOb2RlID0gY3NzTm9kZTtcbiAgfVxuXG4gIGdldENTU05vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuY3NzTm9kZTtcbiAgfVxuXG4gIGFwcGVuZFRvKHBhcmVudENTU05vZGUpIHtcbiAgICBjb25zdCBwYXJlbnROb2RlID0gcGFyZW50Q1NTTm9kZSwgIC8vL1xuICAgICAgICAgIGNoaWxkTm9kZSA9IHRoaXMuY3NzTm9kZTsgLy8vXG5cbiAgICBwYXJlbnROb2RlLmFwcGVuZENoaWxkTm9kZShjaGlsZE5vZGUpO1xuICB9XG5cbiAgcHJlcGVuZFRvKHBhcmVudENTU05vZGUpIHtcbiAgICBjb25zdCBwYXJlbnROb2RlID0gcGFyZW50Q1NTTm9kZSwgIC8vL1xuICAgICAgICAgIGNoaWxkTm9kZSA9IHRoaXMuY3NzTm9kZTsgLy8vXG5cbiAgICBwYXJlbnROb2RlLnByZXBlbmRDaGlsZE5vZGUoY2hpbGROb2RlKTtcbiAgfVxuXG4gIG1lcmdlV2l0aChjc3NOb2RlKSB7XG4gICAgY29uc3QgcGFyZW50Tm9kZSA9IGNzc05vZGU7IC8vL1xuXG4gICAgbGV0IGNoaWxkTm9kZXM7XG5cbiAgICBjb25zdCBub2RlID0gdGhpcy5jc3NOb2RlOyAvLy9cblxuICAgIGNoaWxkTm9kZXMgPSBub2RlLmdldENoaWxkTm9kZXMoKTtcblxuICAgIGNoaWxkTm9kZXMgPSBjbG9uZUNoaWxkTm9kZXMoY2hpbGROb2Rlcyk7IC8vL1xuXG4gICAgcGFyZW50Tm9kZS5wcmVwZW5kQ2hpbGROb2RlcyhjaGlsZE5vZGVzKTtcbiAgfVxuXG4gIHJlbW92ZSgpIHtcbiAgICBjb25zdCBwYXJlbnRDU1NOb2RlID0gdGhpcy5jc3NOb2RlLmdldFBhcmVudENTU05vZGUoKSxcbiAgICAgICAgICBwYXJlbnROb2RlID0gcGFyZW50Q1NTTm9kZSwgLy8vXG4gICAgICAgICAgY2hpbGROb2RlID0gdGhpcy5jc3NOb2RlOyAvLy9cblxuICAgIHBhcmVudE5vZGUucmVtb3ZlQ2hpbGROb2RlKGNoaWxkTm9kZSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUNTU05vZGUoQ2xhc3MsIGNzc05vZGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGlmIChjc3NOb2RlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGNzc05vZGUgPSBDbGFzczsgLy8vXG5cbiAgICAgIENsYXNzID0gQ1NTVHJhbnNmb3JtOyAgLy8vXG4gICAgfVxuXG4gICAgY29uc3QgY3NzVHJhbnNmb3JtID0gbmV3IENsYXNzKGNzc05vZGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICByZXR1cm4gY3NzVHJhbnNmb3JtO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNsb25lQ2hpbGROb2RlcyhjaGlsZE5vZGVzKSB7XG4gIGNoaWxkTm9kZXMgPSBjaGlsZE5vZGVzLm1hcCgoY2hpbGROb2RlKSA9PiB7ICAvLy9cbiAgICBjaGlsZE5vZGUgPSBjaGlsZE5vZGUuY2xvbmUoKTsgIC8vL1xuXG4gICAgcmV0dXJuIGNoaWxkTm9kZTtcbiAgfSk7XG5cbiAgcmV0dXJuIGNoaWxkTm9kZXM7XG59XG5cbiJdLCJuYW1lcyI6WyJDU1NUcmFuc2Zvcm0iLCJjc3NOb2RlIiwiZ2V0Q1NTTm9kZSIsImFwcGVuZFRvIiwicGFyZW50Q1NTTm9kZSIsInBhcmVudE5vZGUiLCJjaGlsZE5vZGUiLCJhcHBlbmRDaGlsZE5vZGUiLCJwcmVwZW5kVG8iLCJwcmVwZW5kQ2hpbGROb2RlIiwibWVyZ2VXaXRoIiwiY2hpbGROb2RlcyIsIm5vZGUiLCJnZXRDaGlsZE5vZGVzIiwiY2xvbmVDaGlsZE5vZGVzIiwicHJlcGVuZENoaWxkTm9kZXMiLCJyZW1vdmUiLCJnZXRQYXJlbnRDU1NOb2RlIiwicmVtb3ZlQ2hpbGROb2RlIiwiZnJvbUNTU05vZGUiLCJDbGFzcyIsInJlbWFpbmluZ0FyZ3VtZW50cyIsInVuZGVmaW5lZCIsImNzc1RyYW5zZm9ybSIsIm1hcCIsImNsb25lIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQUVxQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTixJQUFBLEFBQU1BLDZCQUFOO2FBQU1BLGFBQ1BDLE9BQU87Z0NBREFEO1FBRWpCLElBQUksQ0FBQ0MsT0FBTyxHQUFHQTs7a0JBRkVEOztZQUtuQkUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRCxPQUFPO1lBQ3JCOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBLFNBQVNDLGFBQWE7Z0JBQ3BCLElBQU1DLGFBQWFELGVBQ2JFLFlBQVksSUFBSSxDQUFDTCxPQUFPLEVBQUUsR0FBRztnQkFFbkNJLFdBQVdFLGVBQWUsQ0FBQ0Q7WUFDN0I7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsVUFBVUosYUFBYTtnQkFDckIsSUFBTUMsYUFBYUQsZUFDYkUsWUFBWSxJQUFJLENBQUNMLE9BQU8sRUFBRSxHQUFHO2dCQUVuQ0ksV0FBV0ksZ0JBQWdCLENBQUNIO1lBQzlCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBLFVBQVVULE9BQU87Z0JBQ2YsSUFBTUksYUFBYUosU0FBUyxHQUFHO2dCQUUvQixJQUFJVTtnQkFFSixJQUFNQyxPQUFPLElBQUksQ0FBQ1gsT0FBTyxFQUFFLEdBQUc7Z0JBRTlCVSxhQUFhQyxLQUFLQyxhQUFhO2dCQUUvQkYsYUFBYUcsZ0JBQWdCSCxhQUFhLEdBQUc7Z0JBRTdDTixXQUFXVSxpQkFBaUIsQ0FBQ0o7WUFDL0I7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTVosZ0JBQWdCLElBQUksQ0FBQ0gsT0FBTyxDQUFDZ0IsZ0JBQWdCLElBQzdDWixhQUFhRCxlQUNiRSxZQUFZLElBQUksQ0FBQ0wsT0FBTyxFQUFFLEdBQUc7Z0JBRW5DSSxXQUFXYSxlQUFlLENBQUNaO1lBQzdCOzs7O1lBRU9hLEtBQUFBO21CQUFQLFNBQU9BLFlBQVlDLEtBQUssRUFBRW5CLE9BQU87Z0JBQUUsSUFBQSxJQUFBLE9BQUEsVUFBQSxRQUFBLEFBQUdvQixxQkFBSCxVQUFBLE9BQUEsSUFBQSxPQUFBLFFBQUEsT0FBQSxHQUFBLE9BQUEsTUFBQTtvQkFBR0EsbUJBQUgsT0FBQSxLQUFBLFNBQUEsQ0FBQSxLQUFxQjs7Z0JBQ3RELElBQUlwQixZQUFZcUIsV0FBVztvQkFDekJyQixVQUFVbUIsT0FBTyxHQUFHO29CQUVwQkEsUUFqRGVwQixjQWlEUSxHQUFHO2dCQUM1QjtnQkFFQSxJQUFNdUIsZUFBZSxXQUFJSCxPQUFKO29CQUFVbkI7aUJBQStCLENBQXpDLE9BQW1CLHFCQUFHb0I7Z0JBRTNDLE9BQU9FO1lBQ1Q7OztXQXZEbUJ2Qjs7QUEwRHJCLFNBQVNjLGdCQUFnQkgsVUFBVTtJQUNqQ0EsYUFBYUEsV0FBV2EsR0FBRyxDQUFDLFNBQUNsQjtRQUMzQkEsWUFBWUEsVUFBVW1CLEtBQUssSUFBSyxHQUFHO1FBRW5DLE9BQU9uQjtJQUNUO0lBRUEsT0FBT0s7QUFDVCJ9