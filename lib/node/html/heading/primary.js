"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return PrimaryHeadingHTMLNode;
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
var PrimaryHeadingHTMLNode = /*#__PURE__*/ function(HeadingHTMLNode) {
    _inherits(PrimaryHeadingHTMLNode, HeadingHTMLNode);
    function PrimaryHeadingHTMLNode() {
        _class_call_check(this, PrimaryHeadingHTMLNode);
        return _call_super(this, PrimaryHeadingHTMLNode, arguments);
    }
    _create_class(PrimaryHeadingHTMLNode, null, [
        {
            key: "fromNothing",
            value: function fromNothing() {
                return _heading.default.fromNothing(PrimaryHeadingHTMLNode);
            }
        },
        {
            key: "fromOuterNode",
            value: function fromOuterNode(outerNode) {
                return _heading.default.fromOuterNode(PrimaryHeadingHTMLNode, outerNode);
            }
        }
    ]);
    return PrimaryHeadingHTMLNode;
}(_heading.default);
_define_property(PrimaryHeadingHTMLNode, "depth", 1);
_define_property(PrimaryHeadingHTMLNode, "lines", 3);
_define_property(PrimaryHeadingHTMLNode, "tagName", "h1");
_define_property(PrimaryHeadingHTMLNode, "className", null);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvaGVhZGluZy9wcmltYXJ5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgSGVhZGluZ0hUTUxOb2RlIGZyb20gXCIuLi8uLi8uLi9ub2RlL2h0bWwvaGVhZGluZ1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcmltYXJ5SGVhZGluZ0hUTUxOb2RlIGV4dGVuZHMgSGVhZGluZ0hUTUxOb2RlIHtcbiAgc3RhdGljIGRlcHRoID0gMTtcblxuICBzdGF0aWMgbGluZXMgPSAzO1xuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJoMVwiO1xuXG4gIHN0YXRpYyBjbGFzc05hbWUgPSBudWxsO1xuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHsgcmV0dXJuIEhlYWRpbmdIVE1MTm9kZS5mcm9tTm90aGluZyhQcmltYXJ5SGVhZGluZ0hUTUxOb2RlKTsgfVxuXG4gIHN0YXRpYyBmcm9tT3V0ZXJOb2RlKG91dGVyTm9kZSkgeyByZXR1cm4gSGVhZGluZ0hUTUxOb2RlLmZyb21PdXRlck5vZGUoUHJpbWFyeUhlYWRpbmdIVE1MTm9kZSwgb3V0ZXJOb2RlKTsgfVxufVxuIl0sIm5hbWVzIjpbIlByaW1hcnlIZWFkaW5nSFRNTE5vZGUiLCJmcm9tTm90aGluZyIsIkhlYWRpbmdIVE1MTm9kZSIsImZyb21PdXRlck5vZGUiLCJvdXRlck5vZGUiLCJkZXB0aCIsImxpbmVzIiwidGFnTmFtZSIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFJcUJBOzs7OERBRk87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWIsSUFBQSxBQUFNQSx1Q0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7ZUFBTixrQkFBTUE7O2tCQUFBQTs7WUFTWkMsS0FBQUE7bUJBQVAsU0FBT0E7Z0JBQWdCLE9BQU9DLGdCQUFlLENBQUNELFdBQVcsQ0FUdENEO1lBU2dFOzs7WUFFNUVHLEtBQUFBO21CQUFQLFNBQU9BLGNBQWNDLFNBQVM7Z0JBQUksT0FBT0YsZ0JBQWUsQ0FBQ0MsYUFBYSxDQVhuREgsd0JBVzRFSTtZQUFZOzs7V0FYeEZKO0VBQStCRSxnQkFBZTtBQUNqRSxpQkFEbUJGLHdCQUNaSyxTQUFRO0FBRWYsaUJBSG1CTCx3QkFHWk0sU0FBUTtBQUVmLGlCQUxtQk4sd0JBS1pPLFdBQVU7QUFFakIsaUJBUG1CUCx3QkFPWlEsYUFBWSJ9