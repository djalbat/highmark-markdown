"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return BlockListingHEndHTMLNode;
    }
});
var _html = /*#__PURE__*/ _interop_require_default(require("../../node/html"));
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
var BlockListingHEndHTMLNode = /*#__PURE__*/ function(HHTMLNode) {
    _inherits(BlockListingHEndHTMLNode, HHTMLNode);
    function BlockListingHEndHTMLNode() {
        _class_call_check(this, BlockListingHEndHTMLNode);
        return _call_super(this, BlockListingHEndHTMLNode, arguments);
    }
    _create_class(BlockListingHEndHTMLNode, [
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
                return _html.default.fromNothing(BlockListingHEndHTMLNode);
            }
        },
        {
            key: "fromOuterNode",
            value: function fromOuterNode(outerNode) {
                return _html.default.fromOuterNode(BlockListingHEndHTMLNode, outerNode);
            }
        }
    ]);
    return BlockListingHEndHTMLNode;
}(_html.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvYmxvY2tMaXN0aW5nRW5kLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgSEhUTUxOb2RlIGZyb20gXCIuLi8uLi9ub2RlL2h0bWxcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmxvY2tMaXN0aW5nSEVuZEhUTUxOb2RlIGV4dGVuZHMgSEhUTUxOb2RlIHtcbiAgY2xhc3NOYW1lKGNvbnRleHQpIHsgcmV0dXJuIHRoaXMub3V0ZXJOb2RlLmNsYXNzTmFtZShjb250ZXh0KTsgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHsgcmV0dXJuIEhIVE1MTm9kZS5mcm9tTm90aGluZyhCbG9ja0xpc3RpbmdIRW5kSFRNTE5vZGUpOyB9XG5cbiAgc3RhdGljIGZyb21PdXRlck5vZGUob3V0ZXJOb2RlKSB7IHJldHVybiBISFRNTE5vZGUuZnJvbU91dGVyTm9kZShCbG9ja0xpc3RpbmdIRW5kSFRNTE5vZGUsIG91dGVyTm9kZSk7IH1cbn1cbiJdLCJuYW1lcyI6WyJCbG9ja0xpc3RpbmdIRW5kSFRNTE5vZGUiLCJjbGFzc05hbWUiLCJjb250ZXh0Iiwib3V0ZXJOb2RlIiwiZnJvbU5vdGhpbmciLCJISFRNTE5vZGUiLCJmcm9tT3V0ZXJOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQUlxQkE7OzsyREFGQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVQLElBQUEsQUFBTUEseUNBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO2VBQU4sa0JBQU1BOztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUEsVUFBVUMsT0FBTztnQkFBSSxPQUFPLElBQUksQ0FBQ0MsU0FBUyxDQUFDRixTQUFTLENBQUNDO1lBQVU7Ozs7WUFFeERFLEtBQUFBO21CQUFQLFNBQU9BO2dCQUFnQixPQUFPQyxhQUFTLENBQUNELFdBQVcsQ0FIaENKO1lBRzREOzs7WUFFeEVNLEtBQUFBO21CQUFQLFNBQU9BLGNBQWNILFNBQVM7Z0JBQUksT0FBT0UsYUFBUyxDQUFDQyxhQUFhLENBTDdDTiwwQkFLd0VHO1lBQVk7OztXQUxwRkg7RUFBaUNLLGFBQVMifQ==