"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return TextHTMLNode;
    }
});
var _html = /*#__PURE__*/ _interop_require_default(require("../../node/html"));
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _call_super(_this, derived, args) {
    derived = _get_prototype_of(derived);
    return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
}
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
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
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
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
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
var TextHTMLNode = /*#__PURE__*/ function(HTMLNode) {
    _inherits(TextHTMLNode, HTMLNode);
    function TextHTMLNode() {
        _class_call_check(this, TextHTMLNode);
        return _call_super(this, TextHTMLNode, arguments);
    }
    _create_class(TextHTMLNode, [
        {
            key: "text",
            value: function text(context) {
                var markdownNode = this.getMarkdownNode(), text = markdownNode.text(context);
                return text;
            }
        },
        {
            key: "createDOMElement",
            value: function createDOMElement(context) {
                var text = this.text(context), content = text, textNode = document.createTextNode(content), domElement = textNode; ///
                return domElement;
            }
        },
        {
            key: "asHTML",
            value: function asHTML(indent, context) {
                var text = this.text(context), html = text; ///
                return html;
            }
        },
        {
            key: "asPlainText",
            value: function asPlainText(context) {
                var text = this.text(context), plainText = text; ///
                return plainText;
            }
        }
    ], [
        {
            key: "fromNothing",
            value: function fromNothing(Class) {
                for(var _len = arguments.length, remainingArguments = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
                    remainingArguments[_key - 1] = arguments[_key];
                }
                var _HTMLNode;
                return (_HTMLNode = _html.default).fromNothing.apply(_HTMLNode, [
                    Class
                ].concat(_to_consumable_array(remainingArguments)));
            }
        },
        {
            key: "fromOuterNode",
            value: function fromOuterNode(Class, outerNode) {
                for(var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
                    remainingArguments[_key - 2] = arguments[_key];
                }
                var _HTMLNode;
                return (_HTMLNode = _html.default).fromOuterNode.apply(_HTMLNode, [
                    Class,
                    outerNode
                ].concat(_to_consumable_array(remainingArguments)));
            }
        }
    ]);
    return TextHTMLNode;
}(_html.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvdGV4dC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEhUTUxOb2RlIGZyb20gXCIuLi8uLi9ub2RlL2h0bWxcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGV4dEhUTUxOb2RlIGV4dGVuZHMgSFRNTE5vZGUge1xuICB0ZXh0KGNvbnRleHQpIHtcbiAgICBjb25zdCBtYXJrZG93bk5vZGUgPSB0aGlzLmdldE1hcmtkb3duTm9kZSgpLFxuICAgICAgICAgIHRleHQgPSBtYXJrZG93bk5vZGUudGV4dChjb250ZXh0KTtcblxuICAgIHJldHVybiB0ZXh0O1xuICB9XG5cbiAgY3JlYXRlRE9NRWxlbWVudChjb250ZXh0KSB7XG4gICAgY29uc3QgdGV4dCA9IHRoaXMudGV4dChjb250ZXh0KSxcbiAgICAgICAgICBjb250ZW50ID0gdGV4dCwgLy8vXG4gICAgICAgICAgdGV4dE5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjb250ZW50KSxcbiAgICAgICAgICBkb21FbGVtZW50ID0gdGV4dE5vZGU7ICAvLy9cblxuICAgIHJldHVybiBkb21FbGVtZW50O1xuICB9XG5cbiAgYXNIVE1MKGluZGVudCwgY29udGV4dCkge1xuICAgIGNvbnN0IHRleHQgPSB0aGlzLnRleHQoY29udGV4dCksXG4gICAgICAgICAgaHRtbCA9IHRleHQ7IC8vL1xuXG4gICAgcmV0dXJuIGh0bWw7XG4gIH1cblxuICBhc1BsYWluVGV4dChjb250ZXh0KSB7XG4gICAgY29uc3QgdGV4dCA9IHRoaXMudGV4dChjb250ZXh0KSxcbiAgICAgICAgICBwbGFpblRleHQgPSB0ZXh0OyAvLy9cblxuICAgIHJldHVybiBwbGFpblRleHQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoQ2xhc3MsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykgeyByZXR1cm4gSFRNTE5vZGUuZnJvbU5vdGhpbmcoQ2xhc3MsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7IH1cblxuICBzdGF0aWMgZnJvbU91dGVyTm9kZShDbGFzcywgb3V0ZXJOb2RlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHsgcmV0dXJuIEhUTUxOb2RlLmZyb21PdXRlck5vZGUoQ2xhc3MsIG91dGVyTm9kZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTsgfVxufVxuIl0sIm5hbWVzIjpbIlRleHRIVE1MTm9kZSIsInRleHQiLCJjb250ZXh0IiwibWFya2Rvd25Ob2RlIiwiZ2V0TWFya2Rvd25Ob2RlIiwiY3JlYXRlRE9NRWxlbWVudCIsImNvbnRlbnQiLCJ0ZXh0Tm9kZSIsImRvY3VtZW50IiwiY3JlYXRlVGV4dE5vZGUiLCJkb21FbGVtZW50IiwiYXNIVE1MIiwiaW5kZW50IiwiaHRtbCIsImFzUGxhaW5UZXh0IiwicGxhaW5UZXh0IiwiZnJvbU5vdGhpbmciLCJDbGFzcyIsInJlbWFpbmluZ0FyZ3VtZW50cyIsIkhUTUxOb2RlIiwiZnJvbU91dGVyTm9kZSIsIm91dGVyTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFJcUJBOzs7MkRBRkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRU4sSUFBQSxBQUFNQSw2QkFBTjtjQUFNQTthQUFBQTtnQ0FBQUE7ZUFBTixrQkFBTUE7O2tCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQSxLQUFLQyxPQUFPO2dCQUNWLElBQU1DLGVBQWUsSUFBSSxDQUFDQyxlQUFlLElBQ25DSCxPQUFPRSxhQUFhRixJQUFJLENBQUNDO2dCQUUvQixPQUFPRDtZQUNUOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBLGlCQUFpQkgsT0FBTztnQkFDdEIsSUFBTUQsT0FBTyxJQUFJLENBQUNBLElBQUksQ0FBQ0MsVUFDakJJLFVBQVVMLE1BQ1ZNLFdBQVdDLFNBQVNDLGNBQWMsQ0FBQ0gsVUFDbkNJLGFBQWFILFVBQVcsR0FBRztnQkFFakMsT0FBT0c7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxPQUFPQyxNQUFNLEVBQUVWLE9BQU87Z0JBQ3BCLElBQU1ELE9BQU8sSUFBSSxDQUFDQSxJQUFJLENBQUNDLFVBQ2pCVyxPQUFPWixNQUFNLEdBQUc7Z0JBRXRCLE9BQU9ZO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsWUFBWVosT0FBTztnQkFDakIsSUFBTUQsT0FBTyxJQUFJLENBQUNBLElBQUksQ0FBQ0MsVUFDakJhLFlBQVlkLE1BQU0sR0FBRztnQkFFM0IsT0FBT2M7WUFDVDs7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSxZQUFZQyxLQUFLO2dCQUFFLElBQUEsSUFBQSxPQUFBLFVBQUEsUUFBQSxBQUFHQyxxQkFBSCxVQUFBLE9BQUEsSUFBQSxPQUFBLFFBQUEsT0FBQSxHQUFBLE9BQUEsTUFBQTtvQkFBR0EsbUJBQUgsT0FBQSxLQUFBLFNBQUEsQ0FBQSxLQUFxQjs7b0JBQVdDO2dCQUFQLE9BQU9BLENBQUFBLFlBQUFBLGFBQVEsRUFBQ0gsV0FBVyxPQUFwQkcsV0FBQUE7b0JBQXFCRjtpQkFBNkIsQ0FBbERFLE9BQTRCLHFCQUFHRDtZQUFxQjs7O1lBRXZHRSxLQUFBQTttQkFBUCxTQUFPQSxjQUFjSCxLQUFLLEVBQUVJLFNBQVM7Z0JBQUUsSUFBQSxJQUFBLE9BQUEsVUFBQSxRQUFBLEFBQUdILHFCQUFILFVBQUEsT0FBQSxJQUFBLE9BQUEsUUFBQSxPQUFBLEdBQUEsT0FBQSxNQUFBO29CQUFHQSxtQkFBSCxPQUFBLEtBQUEsU0FBQSxDQUFBLEtBQXFCOztvQkFBV0M7Z0JBQVAsT0FBT0EsQ0FBQUEsWUFBQUEsYUFBUSxFQUFDQyxhQUFhLE9BQXRCRCxXQUFBQTtvQkFBdUJGO29CQUFPSTtpQkFBaUMsQ0FBL0RGLE9BQXlDLHFCQUFHRDtZQUFxQjs7O1dBakNySGxCO0VBQXFCbUIsYUFBUSJ9