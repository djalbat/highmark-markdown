"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return IndexHeadingHTMLTransform;
    }
});
var _html = /*#__PURE__*/ _interop_require_default(require("../../../transform/html"));
var _index = /*#__PURE__*/ _interop_require_default(require("../../../node/html/heading/index"));
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
var IndexHeadingHTMLTransform = /*#__PURE__*/ function(HTMLTransform) {
    _inherits(IndexHeadingHTMLTransform, HTMLTransform);
    function IndexHeadingHTMLTransform() {
        _class_call_check(this, IndexHeadingHTMLTransform);
        return _call_super(this, IndexHeadingHTMLTransform, arguments);
    }
    _create_class(IndexHeadingHTMLTransform, null, [
        {
            key: "fromLetter",
            value: function fromLetter(letter) {
                var indexHeadingHTMLNode = _index.default.fromLetter(letter), htmlNode = indexHeadingHTMLNode, indexHeadingHTMLTransform = _html.default.fromHTMLNode(IndexHeadingHTMLTransform, htmlNode);
                return indexHeadingHTMLTransform;
            }
        }
    ]);
    return IndexHeadingHTMLTransform;
}(_html.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy90cmFuc2Zvcm0vaHRtbC9oZWFkaW5nL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgSFRNTFRyYW5zZm9ybSBmcm9tIFwiLi4vLi4vLi4vdHJhbnNmb3JtL2h0bWxcIjtcbmltcG9ydCBJbmRleEhlYWRpbmdIVE1MTm9kZSBmcm9tIFwiLi4vLi4vLi4vbm9kZS9odG1sL2hlYWRpbmcvaW5kZXhcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXhIZWFkaW5nSFRNTFRyYW5zZm9ybSBleHRlbmRzIEhUTUxUcmFuc2Zvcm0ge1xuICBzdGF0aWMgZnJvbUxldHRlcihsZXR0ZXIpIHtcbiAgICBjb25zdCBpbmRleEhlYWRpbmdIVE1MTm9kZSA9IEluZGV4SGVhZGluZ0hUTUxOb2RlLmZyb21MZXR0ZXIobGV0dGVyKSxcbiAgICAgICAgICBodG1sTm9kZSA9IGluZGV4SGVhZGluZ0hUTUxOb2RlLCAgLy8vXG4gICAgICAgICAgaW5kZXhIZWFkaW5nSFRNTFRyYW5zZm9ybSA9IEhUTUxUcmFuc2Zvcm0uZnJvbUhUTUxOb2RlKEluZGV4SGVhZGluZ0hUTUxUcmFuc2Zvcm0sIGh0bWxOb2RlKTtcblxuICAgIHJldHVybiBpbmRleEhlYWRpbmdIVE1MVHJhbnNmb3JtO1xuICB9XG59XG4iXSwibmFtZXMiOlsiSW5kZXhIZWFkaW5nSFRNTFRyYW5zZm9ybSIsImZyb21MZXR0ZXIiLCJsZXR0ZXIiLCJpbmRleEhlYWRpbmdIVE1MTm9kZSIsIkluZGV4SGVhZGluZ0hUTUxOb2RlIiwiaHRtbE5vZGUiLCJpbmRleEhlYWRpbmdIVE1MVHJhbnNmb3JtIiwiSFRNTFRyYW5zZm9ybSIsImZyb21IVE1MTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFLcUJBOzs7MkRBSEs7NERBQ087Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEIsSUFBQSxBQUFNQSwwQ0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7ZUFBTixrQkFBTUE7O2tCQUFBQTs7WUFDWkMsS0FBQUE7bUJBQVAsU0FBT0EsV0FBV0MsTUFBTTtnQkFDdEIsSUFBTUMsdUJBQXVCQyxjQUFvQixDQUFDSCxVQUFVLENBQUNDLFNBQ3ZERyxXQUFXRixzQkFDWEcsNEJBQTRCQyxhQUFhLENBQUNDLFlBQVksQ0FKM0NSLDJCQUl1RUs7Z0JBRXhGLE9BQU9DO1lBQ1Q7OztXQVBtQk47RUFBa0NPLGFBQWEifQ==