"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return TopmostHTMLNode;
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
var TopmostHTMLNode = /*#__PURE__*/ function(HTMLNode) {
    _inherits(TopmostHTMLNode, HTMLNode);
    function TopmostHTMLNode() {
        _class_call_check(this, TopmostHTMLNode);
        return _call_super(this, TopmostHTMLNode, arguments);
    }
    _create_class(TopmostHTMLNode, [
        {
            key: "asHTML",
            value: function asHTML(context) {
                var html;
                var indent = null, childNodesHTML = this.childNodesAsHTML(indent, context);
                html = childNodesHTML; ///
                return html;
            }
        }
    ], [
        {
            key: "fromNothing",
            value: function fromNothing() {
                return _html.default.fromNothing(TopmostHTMLNode);
            }
        },
        {
            key: "fromOuterNode",
            value: function fromOuterNode(outerNode) {
                return _html.default.fromOuterNode(TopmostHTMLNode, outerNode);
            }
        }
    ]);
    return TopmostHTMLNode;
}(_html.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvdG9wbW9zdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEhUTUxOb2RlIGZyb20gXCIuLi8uLi9ub2RlL2h0bWxcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9wbW9zdEhUTUxOb2RlIGV4dGVuZHMgSFRNTE5vZGUge1xuICBhc0hUTUwoY29udGV4dCkge1xuICAgIGxldCBodG1sO1xuXG4gICAgY29uc3QgaW5kZW50ID0gbnVsbCxcbiAgICAgICAgICBjaGlsZE5vZGVzSFRNTCA9IHRoaXMuY2hpbGROb2Rlc0FzSFRNTChpbmRlbnQsIGNvbnRleHQpO1xuXG4gICAgaHRtbCA9IGNoaWxkTm9kZXNIVE1MOyAgLy8vXG5cbiAgICByZXR1cm4gaHRtbDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHsgcmV0dXJuIEhUTUxOb2RlLmZyb21Ob3RoaW5nKFRvcG1vc3RIVE1MTm9kZSk7IH1cblxuICBzdGF0aWMgZnJvbU91dGVyTm9kZShvdXRlck5vZGUpIHsgcmV0dXJuIEhUTUxOb2RlLmZyb21PdXRlck5vZGUoVG9wbW9zdEhUTUxOb2RlLCBvdXRlck5vZGUpOyB9XG59XG4iXSwibmFtZXMiOlsiVG9wbW9zdEhUTUxOb2RlIiwiYXNIVE1MIiwiY29udGV4dCIsImh0bWwiLCJpbmRlbnQiLCJjaGlsZE5vZGVzSFRNTCIsImNoaWxkTm9kZXNBc0hUTUwiLCJmcm9tTm90aGluZyIsIkhUTUxOb2RlIiwiZnJvbU91dGVyTm9kZSIsIm91dGVyTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFJcUJBOzs7MkRBRkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFTixJQUFBLEFBQU1BLGdDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtlQUFOLGtCQUFNQTs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBLE9BQU9DLE9BQU87Z0JBQ1osSUFBSUM7Z0JBRUosSUFBTUMsU0FBUyxNQUNUQyxpQkFBaUIsSUFBSSxDQUFDQyxnQkFBZ0IsQ0FBQ0YsUUFBUUY7Z0JBRXJEQyxPQUFPRSxnQkFBaUIsR0FBRztnQkFFM0IsT0FBT0Y7WUFDVDs7OztZQUVPSSxLQUFBQTttQkFBUCxTQUFPQTtnQkFBZ0IsT0FBT0MsYUFBUSxDQUFDRCxXQUFXLENBWi9CUDtZQVlrRDs7O1lBRTlEUyxLQUFBQTttQkFBUCxTQUFPQSxjQUFjQyxTQUFTO2dCQUFJLE9BQU9GLGFBQVEsQ0FBQ0MsYUFBYSxDQWQ1Q1QsaUJBYzhEVTtZQUFZOzs7V0FkMUVWO0VBQXdCUSxhQUFRIn0=