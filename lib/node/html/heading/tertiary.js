"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return TertiaryHeadingHTMLNode;
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
var TertiaryHeadingHTMLNode = /*#__PURE__*/ function(HeadingHTMLNode) {
    _inherits(TertiaryHeadingHTMLNode, HeadingHTMLNode);
    function TertiaryHeadingHTMLNode() {
        _class_call_check(this, TertiaryHeadingHTMLNode);
        return _call_super(this, TertiaryHeadingHTMLNode, arguments);
    }
    _create_class(TertiaryHeadingHTMLNode, null, [
        {
            key: "fromNothing",
            value: function fromNothing() {
                return _heading.default.fromNothing(TertiaryHeadingHTMLNode);
            }
        },
        {
            key: "fromOuterNode",
            value: function fromOuterNode(outerNode) {
                return _heading.default.fromOuterNode(TertiaryHeadingHTMLNode, outerNode);
            }
        }
    ]);
    return TertiaryHeadingHTMLNode;
}(_heading.default);
_define_property(TertiaryHeadingHTMLNode, "depth", 3);
_define_property(TertiaryHeadingHTMLNode, "lines", 2.25);
_define_property(TertiaryHeadingHTMLNode, "tagName", "h3");
_define_property(TertiaryHeadingHTMLNode, "className", null);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvaGVhZGluZy90ZXJ0aWFyeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEhlYWRpbmdIVE1MTm9kZSBmcm9tIFwiLi4vLi4vLi4vbm9kZS9odG1sL2hlYWRpbmdcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGVydGlhcnlIZWFkaW5nSFRNTE5vZGUgZXh0ZW5kcyBIZWFkaW5nSFRNTE5vZGUge1xuICBzdGF0aWMgZGVwdGggPSAzO1xuXG4gIHN0YXRpYyBsaW5lcyA9IDIuMjU7XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImgzXCI7XG5cbiAgc3RhdGljIGNsYXNzTmFtZSA9IG51bGw7XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkgeyByZXR1cm4gSGVhZGluZ0hUTUxOb2RlLmZyb21Ob3RoaW5nKFRlcnRpYXJ5SGVhZGluZ0hUTUxOb2RlKTsgfVxuXG4gIHN0YXRpYyBmcm9tT3V0ZXJOb2RlKG91dGVyTm9kZSkgeyByZXR1cm4gSGVhZGluZ0hUTUxOb2RlLmZyb21PdXRlck5vZGUoVGVydGlhcnlIZWFkaW5nSFRNTE5vZGUsIG91dGVyTm9kZSk7IH1cbn1cbiJdLCJuYW1lcyI6WyJUZXJ0aWFyeUhlYWRpbmdIVE1MTm9kZSIsImZyb21Ob3RoaW5nIiwiSGVhZGluZ0hUTUxOb2RlIiwiZnJvbU91dGVyTm9kZSIsIm91dGVyTm9kZSIsImRlcHRoIiwibGluZXMiLCJ0YWdOYW1lIiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQUlxQkE7Ozs4REFGTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFYixJQUFBLEFBQU1BLHdDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtlQUFOLGtCQUFNQTs7a0JBQUFBOztZQVNaQyxLQUFBQTttQkFBUCxTQUFPQTtnQkFBZ0IsT0FBT0MsZ0JBQWUsQ0FBQ0QsV0FBVyxDQVR0Q0Q7WUFTaUU7OztZQUU3RUcsS0FBQUE7bUJBQVAsU0FBT0EsY0FBY0MsU0FBUztnQkFBSSxPQUFPRixnQkFBZSxDQUFDQyxhQUFhLENBWG5ESCx5QkFXNkVJO1lBQVk7OztXQVh6Rko7RUFBZ0NFLGdCQUFlO0FBQ2xFLGlCQURtQkYseUJBQ1pLLFNBQVE7QUFFZixpQkFIbUJMLHlCQUdaTSxTQUFRO0FBRWYsaUJBTG1CTix5QkFLWk8sV0FBVTtBQUVqQixpQkFQbUJQLHlCQU9aUSxhQUFZIn0=