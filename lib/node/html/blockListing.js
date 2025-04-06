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
        },
        {
            key: "asHTML",
            value: function asHTML(indent, context) {
                var childNodesHTML = this.childNodesAsHTML(indent, context), startingTag = this.startingTag(context), closingTag = this.closingTag(context), html = "".concat(startingTag).concat(childNodesHTML).concat(closingTag);
                return html;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvYmxvY2tMaXN0aW5nLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgSFRNTE5vZGUgZnJvbSBcIi4uLy4uL25vZGUvaHRtbFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCbG9ja0xpc3RpbmdIVE1MTm9kZSBleHRlbmRzIEhUTUxOb2RlIHtcbiAgY2xhc3NOYW1lKGNvbnRleHQpIHsgcmV0dXJuIHRoaXMub3V0ZXJOb2RlLmNsYXNzTmFtZShjb250ZXh0KTsgfVxuXG4gIGFzSFRNTChpbmRlbnQsIGNvbnRleHQpIHtcbiAgICBjb25zdCBjaGlsZE5vZGVzSFRNTCA9IHRoaXMuY2hpbGROb2Rlc0FzSFRNTChpbmRlbnQsIGNvbnRleHQpLFxuICAgICAgICAgIHN0YXJ0aW5nVGFnID0gdGhpcy5zdGFydGluZ1RhZyhjb250ZXh0KSxcbiAgICAgICAgICBjbG9zaW5nVGFnID0gdGhpcy5jbG9zaW5nVGFnKGNvbnRleHQpLFxuICAgICAgICAgIGh0bWwgPSBgJHtzdGFydGluZ1RhZ30ke2NoaWxkTm9kZXNIVE1MfSR7Y2xvc2luZ1RhZ31gO1xuXG4gICAgcmV0dXJuIGh0bWw7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7IHJldHVybiBIVE1MTm9kZS5mcm9tTm90aGluZyhCbG9ja0xpc3RpbmdIVE1MTm9kZSk7IH1cblxuICBzdGF0aWMgZnJvbU91dGVyTm9kZShvdXRlck5vZGUpIHsgcmV0dXJuIEhUTUxOb2RlLmZyb21PdXRlck5vZGUoQmxvY2tMaXN0aW5nSFRNTE5vZGUsIG91dGVyTm9kZSk7IH1cbn1cbiJdLCJuYW1lcyI6WyJCbG9ja0xpc3RpbmdIVE1MTm9kZSIsImNsYXNzTmFtZSIsImNvbnRleHQiLCJvdXRlck5vZGUiLCJhc0hUTUwiLCJpbmRlbnQiLCJjaGlsZE5vZGVzSFRNTCIsImNoaWxkTm9kZXNBc0hUTUwiLCJzdGFydGluZ1RhZyIsImNsb3NpbmdUYWciLCJodG1sIiwiZnJvbU5vdGhpbmciLCJIVE1MTm9kZSIsImZyb21PdXRlck5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBSXFCQTs7OzJEQUZBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRU4sSUFBQSxBQUFNQSxxQ0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7ZUFBTixrQkFBTUE7O2tCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQSxVQUFVQyxPQUFPO2dCQUFJLE9BQU8sSUFBSSxDQUFDQyxTQUFTLENBQUNGLFNBQVMsQ0FBQ0M7WUFBVTs7O1lBRS9ERSxLQUFBQTttQkFBQUEsU0FBQUEsT0FBT0MsTUFBTSxFQUFFSCxPQUFPO2dCQUNwQixJQUFNSSxpQkFBaUIsSUFBSSxDQUFDQyxnQkFBZ0IsQ0FBQ0YsUUFBUUgsVUFDL0NNLGNBQWMsSUFBSSxDQUFDQSxXQUFXLENBQUNOLFVBQy9CTyxhQUFhLElBQUksQ0FBQ0EsVUFBVSxDQUFDUCxVQUM3QlEsT0FBTyxBQUFDLEdBQWdCSixPQUFkRSxhQUErQkMsT0FBakJILGdCQUE0QixPQUFYRztnQkFFL0MsT0FBT0M7WUFDVDs7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQTtnQkFBZ0IsT0FBT0MsYUFBUSxDQUFDRCxXQUFXLENBWi9CWDtZQVl1RDs7O1lBRW5FYSxLQUFBQTttQkFBUCxTQUFPQSxjQUFjVixTQUFTO2dCQUFJLE9BQU9TLGFBQVEsQ0FBQ0MsYUFBYSxDQWQ1Q2Isc0JBY21FRztZQUFZOzs7V0FkL0VIO0VBQTZCWSxhQUFRIn0=