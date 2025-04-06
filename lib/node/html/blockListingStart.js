"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return BlockListingHStartHTMLNode;
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
var BlockListingHStartHTMLNode = /*#__PURE__*/ function(HHTMLNode) {
    _inherits(BlockListingHStartHTMLNode, HHTMLNode);
    function BlockListingHStartHTMLNode() {
        _class_call_check(this, BlockListingHStartHTMLNode);
        return _call_super(this, BlockListingHStartHTMLNode, arguments);
    }
    _create_class(BlockListingHStartHTMLNode, [
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
                return _html.default.fromNothing(BlockListingHStartHTMLNode);
            }
        },
        {
            key: "fromOuterNode",
            value: function fromOuterNode(outerNode) {
                return _html.default.fromOuterNode(BlockListingHStartHTMLNode, outerNode);
            }
        }
    ]);
    return BlockListingHStartHTMLNode;
}(_html.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvYmxvY2tMaXN0aW5nU3RhcnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBISFRNTE5vZGUgZnJvbSBcIi4uLy4uL25vZGUvaHRtbFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCbG9ja0xpc3RpbmdIU3RhcnRIVE1MTm9kZSBleHRlbmRzIEhIVE1MTm9kZSB7XG4gIGNsYXNzTmFtZShjb250ZXh0KSB7IHJldHVybiB0aGlzLm91dGVyTm9kZS5jbGFzc05hbWUoY29udGV4dCk7IH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7IHJldHVybiBISFRNTE5vZGUuZnJvbU5vdGhpbmcoQmxvY2tMaXN0aW5nSFN0YXJ0SFRNTE5vZGUpOyB9XG5cbiAgc3RhdGljIGZyb21PdXRlck5vZGUob3V0ZXJOb2RlKSB7IHJldHVybiBISFRNTE5vZGUuZnJvbU91dGVyTm9kZShCbG9ja0xpc3RpbmdIU3RhcnRIVE1MTm9kZSwgb3V0ZXJOb2RlKTsgfVxufVxuIl0sIm5hbWVzIjpbIkJsb2NrTGlzdGluZ0hTdGFydEhUTUxOb2RlIiwiY2xhc3NOYW1lIiwiY29udGV4dCIsIm91dGVyTm9kZSIsImZyb21Ob3RoaW5nIiwiSEhUTUxOb2RlIiwiZnJvbU91dGVyTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFJcUJBOzs7MkRBRkM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFUCxJQUFBLEFBQU1BLDJDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtlQUFOLGtCQUFNQTs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBLFVBQVVDLE9BQU87Z0JBQUksT0FBTyxJQUFJLENBQUNDLFNBQVMsQ0FBQ0YsU0FBUyxDQUFDQztZQUFVOzs7O1lBRXhERSxLQUFBQTttQkFBUCxTQUFPQTtnQkFBZ0IsT0FBT0MsYUFBUyxDQUFDRCxXQUFXLENBSGhDSjtZQUc4RDs7O1lBRTFFTSxLQUFBQTttQkFBUCxTQUFPQSxjQUFjSCxTQUFTO2dCQUFJLE9BQU9FLGFBQVMsQ0FBQ0MsYUFBYSxDQUw3Q04sNEJBSzBFRztZQUFZOzs7V0FMdEZIO0VBQW1DSyxhQUFTIn0=