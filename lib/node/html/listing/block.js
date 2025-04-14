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
                return this.outerNode.className(context);
            }
        }
    ], [
        {
            key: "fromNothing",
            value: function fromNothing() {
                return _html.default.fromNothing(BlockListingHTMLNode);
            }
        },
        {
            key: "fromOuterNode",
            value: function fromOuterNode(outerNode) {
                return _html.default.fromOuterNode(BlockListingHTMLNode, outerNode);
            }
        }
    ]);
    return BlockListingHTMLNode;
}(_html.default);
_define_property(BlockListingHTMLNode, "lines", 2);
_define_property(BlockListingHTMLNode, "tagName", "pre");
_define_property(BlockListingHTMLNode, "className", null);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvbGlzdGluZy9ibG9jay5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEhUTUxOb2RlIGZyb20gXCIuLi8uLi8uLi9ub2RlL2h0bWxcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmxvY2tMaXN0aW5nSFRNTE5vZGUgZXh0ZW5kcyBIVE1MTm9kZSB7XG4gIGNsYXNzTmFtZShjb250ZXh0KSB7IHJldHVybiB0aGlzLm91dGVyTm9kZS5jbGFzc05hbWUoY29udGV4dCk7IH1cblxuICBzdGF0aWMgbGluZXMgPSAyO1xuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJwcmVcIjtcblxuICBzdGF0aWMgY2xhc3NOYW1lID0gbnVsbDtcblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7IHJldHVybiBIVE1MTm9kZS5mcm9tTm90aGluZyhCbG9ja0xpc3RpbmdIVE1MTm9kZSk7IH1cblxuICBzdGF0aWMgZnJvbU91dGVyTm9kZShvdXRlck5vZGUpIHsgcmV0dXJuIEhUTUxOb2RlLmZyb21PdXRlck5vZGUoQmxvY2tMaXN0aW5nSFRNTE5vZGUsIG91dGVyTm9kZSk7IH1cbn1cbiJdLCJuYW1lcyI6WyJCbG9ja0xpc3RpbmdIVE1MTm9kZSIsImNsYXNzTmFtZSIsImNvbnRleHQiLCJvdXRlck5vZGUiLCJmcm9tTm90aGluZyIsIkhUTUxOb2RlIiwiZnJvbU91dGVyTm9kZSIsImxpbmVzIiwidGFnTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFJcUJBOzs7MkRBRkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRU4sSUFBQSxBQUFNQSxxQ0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7ZUFBTixrQkFBTUE7O2tCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQSxVQUFVQyxPQUFPO2dCQUFJLE9BQU8sSUFBSSxDQUFDQyxTQUFTLENBQUNGLFNBQVMsQ0FBQ0M7WUFBVTs7OztZQVF4REUsS0FBQUE7bUJBQVAsU0FBT0E7Z0JBQWdCLE9BQU9DLGFBQVEsQ0FBQ0QsV0FBVyxDQVQvQko7WUFTdUQ7OztZQUVuRU0sS0FBQUE7bUJBQVAsU0FBT0EsY0FBY0gsU0FBUztnQkFBSSxPQUFPRSxhQUFRLENBQUNDLGFBQWEsQ0FYNUNOLHNCQVdtRUc7WUFBWTs7O1dBWC9FSDtFQUE2QkssYUFBUTtBQUd4RCxpQkFIbUJMLHNCQUdaTyxTQUFRO0FBRWYsaUJBTG1CUCxzQkFLWlEsV0FBVTtBQUVqQixpQkFQbUJSLHNCQU9aQyxhQUFZIn0=