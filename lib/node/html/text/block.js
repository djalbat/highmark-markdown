"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return BlockTextHTMLNode;
    }
});
var _text = /*#__PURE__*/ _interop_require_default(require("../../html/text"));
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
var BlockTextHTMLNode = /*#__PURE__*/ function(TextHTMLNode) {
    _inherits(BlockTextHTMLNode, TextHTMLNode);
    function BlockTextHTMLNode() {
        _class_call_check(this, BlockTextHTMLNode);
        return _call_super(this, BlockTextHTMLNode, arguments);
    }
    _create_class(BlockTextHTMLNode, null, [
        {
            key: "fromNothing",
            value: function fromNothing() {
                return _text.default.fromNothing(BlockTextHTMLNode);
            }
        },
        {
            key: "fromOuterNode",
            value: function fromOuterNode(outerNode) {
                return _text.default.fromOuterNode(BlockTextHTMLNode, outerNode);
            }
        }
    ]);
    return BlockTextHTMLNode;
}(_text.default);
_define_property(BlockTextHTMLNode, "tagName", null);
_define_property(BlockTextHTMLNode, "className", null);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvdGV4dC9ibG9jay5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFRleHRIVE1MTm9kZSBmcm9tIFwiLi4vLi4vaHRtbC90ZXh0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJsb2NrVGV4dEhUTUxOb2RlIGV4dGVuZHMgVGV4dEhUTUxOb2RlIHtcbiAgc3RhdGljIHRhZ05hbWUgPSBudWxsO1xuXG4gIHN0YXRpYyBjbGFzc05hbWUgPSBudWxsO1xuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHsgcmV0dXJuIFRleHRIVE1MTm9kZS5mcm9tTm90aGluZyhCbG9ja1RleHRIVE1MTm9kZSk7IH1cblxuICBzdGF0aWMgZnJvbU91dGVyTm9kZShvdXRlck5vZGUpIHsgcmV0dXJuIFRleHRIVE1MTm9kZS5mcm9tT3V0ZXJOb2RlKEJsb2NrVGV4dEhUTUxOb2RlLCBvdXRlck5vZGUpOyB9XG59XG4iXSwibmFtZXMiOlsiQmxvY2tUZXh0SFRNTE5vZGUiLCJmcm9tTm90aGluZyIsIlRleHRIVE1MTm9kZSIsImZyb21PdXRlck5vZGUiLCJvdXRlck5vZGUiLCJ0YWdOYW1lIiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQUlxQkE7OzsyREFGSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFVixJQUFBLEFBQU1BLGtDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtlQUFOLGtCQUFNQTs7a0JBQUFBOztZQUtaQyxLQUFBQTttQkFBUCxTQUFPQTtnQkFBZ0IsT0FBT0MsYUFBWSxDQUFDRCxXQUFXLENBTG5DRDtZQUt3RDs7O1lBRXBFRyxLQUFBQTttQkFBUCxTQUFPQSxjQUFjQyxTQUFTO2dCQUFJLE9BQU9GLGFBQVksQ0FBQ0MsYUFBYSxDQVBoREgsbUJBT29FSTtZQUFZOzs7V0FQaEZKO0VBQTBCRSxhQUFZO0FBQ3pELGlCQURtQkYsbUJBQ1pLLFdBQVU7QUFFakIsaUJBSG1CTCxtQkFHWk0sYUFBWSJ9