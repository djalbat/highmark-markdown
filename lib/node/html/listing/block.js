"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return BlockListingHTMLNode;
    }
});
var _html = /*#__PURE__*/ _interop_require_default(require("../../../node/html"));
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
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
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
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _is_native_reflect_construct() {
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
var BlockListingHTMLNode = /*#__PURE__*/ function(HTMLNode) {
    _inherits(BlockListingHTMLNode, HTMLNode);
    function BlockListingHTMLNode() {
        _class_call_check(this, BlockListingHTMLNode);
        return _call_super(this, BlockListingHTMLNode, arguments);
    }
    _create_class(BlockListingHTMLNode, [
        {
            key: "className",
            value: function className(context) {
                var markdownNode = this.getMarkdownNode(), className = markdownNode.className(context);
                return className;
            }
        }
    ], [
        {
            key: "fromNothing",
            value: function fromNothing(Class) {
                if (Class === undefined) {
                    Class = BlockListingHTMLNode; ///
                }
                var blockListingHTMLNode = _html.default.fromNothing(Class);
                return blockListingHTMLNode;
            }
        },
        {
            key: "fromOuterNode",
            value: function fromOuterNode(Class, outerNode) {
                if (Class === undefined) {
                    outerNode = Class; ///
                    Class = BlockListingHTMLNode; ///
                }
                var blockListingHTMLNode = _html.default.fromOuterNode(Class, outerNode);
                return blockListingHTMLNode;
            }
        }
    ]);
    return BlockListingHTMLNode;
}(_html.default);
_define_property(BlockListingHTMLNode, "lines", 2);
_define_property(BlockListingHTMLNode, "tagName", "pre");
_define_property(BlockListingHTMLNode, "className", null);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvbGlzdGluZy9ibG9jay5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEhUTUxOb2RlIGZyb20gXCIuLi8uLi8uLi9ub2RlL2h0bWxcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmxvY2tMaXN0aW5nSFRNTE5vZGUgZXh0ZW5kcyBIVE1MTm9kZSB7XG4gIGNsYXNzTmFtZShjb250ZXh0KSB7XG4gICAgY29uc3QgbWFya2Rvd25Ob2RlID0gdGhpcy5nZXRNYXJrZG93bk5vZGUoKSxcbiAgICAgICAgICBjbGFzc05hbWUgPSBtYXJrZG93bk5vZGUuY2xhc3NOYW1lKGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGNsYXNzTmFtZTtcbiAgfVxuXG4gIHN0YXRpYyBsaW5lcyA9IDI7XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcInByZVwiO1xuXG4gIHN0YXRpYyBjbGFzc05hbWUgPSBudWxsO1xuXG4gIHN0YXRpYyBmcm9tTm90aGluZyhDbGFzcykge1xuICAgIGlmIChDbGFzcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBDbGFzcyA9IEJsb2NrTGlzdGluZ0hUTUxOb2RlOyAvLy9cbiAgICB9XG5cbiAgICBjb25zdCBibG9ja0xpc3RpbmdIVE1MTm9kZSA9IEhUTUxOb2RlLmZyb21Ob3RoaW5nKENsYXNzKTtcblxuICAgIHJldHVybiBibG9ja0xpc3RpbmdIVE1MTm9kZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tT3V0ZXJOb2RlKENsYXNzLCBvdXRlck5vZGUpIHtcbiAgICBpZiAoQ2xhc3MgPT09IHVuZGVmaW5lZCkge1xuICAgICAgb3V0ZXJOb2RlID0gQ2xhc3M7ICAvLy9cblxuICAgICAgQ2xhc3MgPSBCbG9ja0xpc3RpbmdIVE1MTm9kZTsgLy8vXG4gICAgfVxuXG4gICAgY29uc3QgYmxvY2tMaXN0aW5nSFRNTE5vZGUgPSBIVE1MTm9kZS5mcm9tT3V0ZXJOb2RlKENsYXNzLCBvdXRlck5vZGUpO1xuXG4gICAgcmV0dXJuIGJsb2NrTGlzdGluZ0hUTUxOb2RlO1xuICB9XG59XG4iXSwibmFtZXMiOlsiQmxvY2tMaXN0aW5nSFRNTE5vZGUiLCJjbGFzc05hbWUiLCJjb250ZXh0IiwibWFya2Rvd25Ob2RlIiwiZ2V0TWFya2Rvd25Ob2RlIiwiZnJvbU5vdGhpbmciLCJDbGFzcyIsInVuZGVmaW5lZCIsImJsb2NrTGlzdGluZ0hUTUxOb2RlIiwiSFRNTE5vZGUiLCJmcm9tT3V0ZXJOb2RlIiwib3V0ZXJOb2RlIiwibGluZXMiLCJ0YWdOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQUlxQkE7OzsyREFGQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFTixJQUFBLEFBQU1BLHFDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtlQUFOLGtCQUFNQTs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBLFVBQVVDLE9BQU87Z0JBQ2YsSUFBTUMsZUFBZSxJQUFJLENBQUNDLGVBQWUsSUFDbkNILFlBQVlFLGFBQWFGLFNBQVMsQ0FBQ0M7Z0JBRXpDLE9BQU9EO1lBQ1Q7Ozs7WUFRT0ksS0FBQUE7bUJBQVAsU0FBT0EsWUFBWUMsS0FBSztnQkFDdEIsSUFBSUEsVUFBVUMsV0FBVztvQkFDdkJELFFBaEJlTixzQkFnQmUsR0FBRztnQkFDbkM7Z0JBRUEsSUFBTVEsdUJBQXVCQyxhQUFRLENBQUNKLFdBQVcsQ0FBQ0M7Z0JBRWxELE9BQU9FO1lBQ1Q7OztZQUVPRSxLQUFBQTttQkFBUCxTQUFPQSxjQUFjSixLQUFLLEVBQUVLLFNBQVM7Z0JBQ25DLElBQUlMLFVBQVVDLFdBQVc7b0JBQ3ZCSSxZQUFZTCxPQUFRLEdBQUc7b0JBRXZCQSxRQTVCZU4sc0JBNEJlLEdBQUc7Z0JBQ25DO2dCQUVBLElBQU1RLHVCQUF1QkMsYUFBUSxDQUFDQyxhQUFhLENBQUNKLE9BQU9LO2dCQUUzRCxPQUFPSDtZQUNUOzs7V0FsQ21CUjtFQUE2QlMsYUFBUTtBQVF4RCxpQkFSbUJULHNCQVFaWSxTQUFRO0FBRWYsaUJBVm1CWixzQkFVWmEsV0FBVTtBQUVqQixpQkFabUJiLHNCQVlaQyxhQUFZIn0=