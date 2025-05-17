"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return IdentifierCSSNode;
    }
});
var _css = /*#__PURE__*/ _interop_require_default(require("../../node/css"));
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
var IdentifierCSSNode = /*#__PURE__*/ function(CSSNode) {
    _inherits(IdentifierCSSNode, CSSNode);
    function IdentifierCSSNode() {
        _class_call_check(this, IdentifierCSSNode);
        return _call_super(this, IdentifierCSSNode, arguments);
    }
    _create_class(IdentifierCSSNode, [
        {
            key: "content",
            value: function content() {
                return this.outerNode.content();
            }
        },
        {
            key: "asCSS",
            value: function asCSS(context) {
                var content = this.content(), css = content; ///
                return css;
            }
        }
    ], [
        {
            key: "fromNothing",
            value: function fromNothing() {
                return _css.default.fromNothing(IdentifierCSSNode);
            }
        },
        {
            key: "fromOuterNode",
            value: function fromOuterNode(outerNode) {
                return _css.default.fromOuterNode(IdentifierCSSNode, outerNode);
            }
        }
    ]);
    return IdentifierCSSNode;
}(_css.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2Nzcy9pZGVudGlmaWVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgQ1NTTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9jc3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSWRlbnRpZmllckNTU05vZGUgZXh0ZW5kcyBDU1NOb2RlIHtcbiAgY29udGVudCgpIHsgcmV0dXJuIHRoaXMub3V0ZXJOb2RlLmNvbnRlbnQoKTsgfVxuXG4gIGFzQ1NTKGNvbnRleHQpIHtcbiAgICBjb25zdCBjb250ZW50ID0gdGhpcy5jb250ZW50KCksXG4gICAgICAgICAgY3NzID0gY29udGVudDsgLy8vXG5cbiAgICByZXR1cm4gY3NzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkgeyByZXR1cm4gQ1NTTm9kZS5mcm9tTm90aGluZyhJZGVudGlmaWVyQ1NTTm9kZSk7IH1cblxuICBzdGF0aWMgZnJvbU91dGVyTm9kZShvdXRlck5vZGUpIHsgcmV0dXJuIENTU05vZGUuZnJvbU91dGVyTm9kZShJZGVudGlmaWVyQ1NTTm9kZSwgb3V0ZXJOb2RlKTsgfVxufVxuIl0sIm5hbWVzIjpbIklkZW50aWZpZXJDU1NOb2RlIiwiY29udGVudCIsIm91dGVyTm9kZSIsImFzQ1NTIiwiY29udGV4dCIsImNzcyIsImZyb21Ob3RoaW5nIiwiQ1NTTm9kZSIsImZyb21PdXRlck5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBSXFCQTs7OzBEQUZEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUwsSUFBQSxBQUFNQSxrQ0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7ZUFBTixrQkFBTUE7O2tCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFBWSxPQUFPLElBQUksQ0FBQ0MsU0FBUyxDQUFDRCxPQUFPO1lBQUk7OztZQUU3Q0UsS0FBQUE7bUJBQUFBLFNBQUFBLE1BQU1DLE9BQU87Z0JBQ1gsSUFBTUgsVUFBVSxJQUFJLENBQUNBLE9BQU8sSUFDdEJJLE1BQU1KLFNBQVMsR0FBRztnQkFFeEIsT0FBT0k7WUFDVDs7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQTtnQkFBZ0IsT0FBT0MsWUFBTyxDQUFDRCxXQUFXLENBVjlCTjtZQVVtRDs7O1lBRS9EUSxLQUFBQTttQkFBUCxTQUFPQSxjQUFjTixTQUFTO2dCQUFJLE9BQU9LLFlBQU8sQ0FBQ0MsYUFBYSxDQVozQ1IsbUJBWStERTtZQUFZOzs7V0FaM0VGO0VBQTBCTyxZQUFPIn0=