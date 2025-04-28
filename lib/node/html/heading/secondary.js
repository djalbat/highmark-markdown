"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return SecondaryHeadingHTMLNode;
    }
});
var _heading = /*#__PURE__*/ _interop_require_default(require("../../../node/html/heading"));
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
var SecondaryHeadingHTMLNode = /*#__PURE__*/ function(HeadingHTMLNode) {
    _inherits(SecondaryHeadingHTMLNode, HeadingHTMLNode);
    function SecondaryHeadingHTMLNode() {
        _class_call_check(this, SecondaryHeadingHTMLNode);
        return _call_super(this, SecondaryHeadingHTMLNode, arguments);
    }
    _create_class(SecondaryHeadingHTMLNode, null, [
        {
            key: "fromNothing",
            value: function fromNothing() {
                return _heading.default.fromNothing(SecondaryHeadingHTMLNode);
            }
        },
        {
            key: "fromOuterNode",
            value: function fromOuterNode(outerNode) {
                return _heading.default.fromOuterNode(SecondaryHeadingHTMLNode, outerNode);
            }
        }
    ]);
    return SecondaryHeadingHTMLNode;
}(_heading.default);
_define_property(SecondaryHeadingHTMLNode, "lines", 2.5);
_define_property(SecondaryHeadingHTMLNode, "tagName", "h2");
_define_property(SecondaryHeadingHTMLNode, "className", null);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvaGVhZGluZy9zZWNvbmRhcnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBIZWFkaW5nSFRNTE5vZGUgZnJvbSBcIi4uLy4uLy4uL25vZGUvaHRtbC9oZWFkaW5nXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlY29uZGFyeUhlYWRpbmdIVE1MTm9kZSBleHRlbmRzIEhlYWRpbmdIVE1MTm9kZSB7XG4gIHN0YXRpYyBsaW5lcyA9IDIuNTtcblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiaDJcIjtcblxuICBzdGF0aWMgY2xhc3NOYW1lID0gbnVsbDtcblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7IHJldHVybiBIZWFkaW5nSFRNTE5vZGUuZnJvbU5vdGhpbmcoU2Vjb25kYXJ5SGVhZGluZ0hUTUxOb2RlKTsgfVxuXG4gIHN0YXRpYyBmcm9tT3V0ZXJOb2RlKG91dGVyTm9kZSkgeyByZXR1cm4gSGVhZGluZ0hUTUxOb2RlLmZyb21PdXRlck5vZGUoU2Vjb25kYXJ5SGVhZGluZ0hUTUxOb2RlLCBvdXRlck5vZGUpOyB9XG59XG4iXSwibmFtZXMiOlsiU2Vjb25kYXJ5SGVhZGluZ0hUTUxOb2RlIiwiZnJvbU5vdGhpbmciLCJIZWFkaW5nSFRNTE5vZGUiLCJmcm9tT3V0ZXJOb2RlIiwib3V0ZXJOb2RlIiwibGluZXMiLCJ0YWdOYW1lIiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQUlxQkE7Ozs4REFGTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFYixJQUFBLEFBQU1BLHlDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtlQUFOLGtCQUFNQTs7a0JBQUFBOztZQU9aQyxLQUFBQTttQkFBUCxTQUFPQTtnQkFBZ0IsT0FBT0MsZ0JBQWUsQ0FBQ0QsV0FBVyxDQVB0Q0Q7WUFPa0U7OztZQUU5RUcsS0FBQUE7bUJBQVAsU0FBT0EsY0FBY0MsU0FBUztnQkFBSSxPQUFPRixnQkFBZSxDQUFDQyxhQUFhLENBVG5ESCwwQkFTOEVJO1lBQVk7OztXQVQxRko7RUFBaUNFLGdCQUFlO0FBQ25FLGlCQURtQkYsMEJBQ1pLLFNBQVE7QUFFZixpQkFIbUJMLDBCQUdaTSxXQUFVO0FBRWpCLGlCQUxtQk4sMEJBS1pPLGFBQVkifQ==