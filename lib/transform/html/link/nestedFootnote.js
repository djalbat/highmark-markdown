"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return NestedFootnoteLinkHTMLTransform;
    }
});
var _html = /*#__PURE__*/ _interop_require_default(require("../../../transform/html"));
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
var NestedFootnoteLinkHTMLTransform = /*#__PURE__*/ function(HTMLTransform) {
    _inherits(NestedFootnoteLinkHTMLTransform, HTMLTransform);
    function NestedFootnoteLinkHTMLTransform() {
        _class_call_check(this, NestedFootnoteLinkHTMLTransform);
        return _call_super(this, NestedFootnoteLinkHTMLTransform, arguments);
    }
    _create_class(NestedFootnoteLinkHTMLTransform, null, [
        {
            key: "fromNestedFootnoteLinkHTMLNode",
            value: function fromNestedFootnoteLinkHTMLNode(nestedFootnoteLinkHTMLNode) {
                var htmlNode = nestedFootnoteLinkHTMLNode, nestedFootnoteLinkHTMLTransform = _html.default.fromHTNLNOde(NestedFootnoteLinkHTMLTransform, htmlNode);
                return nestedFootnoteLinkHTMLTransform;
            }
        }
    ]);
    return NestedFootnoteLinkHTMLTransform;
}(_html.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy90cmFuc2Zvcm0vaHRtbC9saW5rL25lc3RlZEZvb3Rub3RlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgSFRNTFRyYW5zZm9ybSBmcm9tIFwiLi4vLi4vLi4vdHJhbnNmb3JtL2h0bWxcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXN0ZWRGb290bm90ZUxpbmtIVE1MVHJhbnNmb3JtIGV4dGVuZHMgSFRNTFRyYW5zZm9ybSB7XG4gIHN0YXRpYyBmcm9tTmVzdGVkRm9vdG5vdGVMaW5rSFRNTE5vZGUobmVzdGVkRm9vdG5vdGVMaW5rSFRNTE5vZGUpIHtcbiAgICBjb25zdCBodG1sTm9kZSA9IG5lc3RlZEZvb3Rub3RlTGlua0hUTUxOb2RlLCAgLy8vXG4gICAgICAgICAgbmVzdGVkRm9vdG5vdGVMaW5rSFRNTFRyYW5zZm9ybSA9IEhUTUxUcmFuc2Zvcm0uZnJvbUhUTkxOT2RlKE5lc3RlZEZvb3Rub3RlTGlua0hUTUxUcmFuc2Zvcm0sIGh0bWxOb2RlKTtcblxuICAgIHJldHVybiBuZXN0ZWRGb290bm90ZUxpbmtIVE1MVHJhbnNmb3JtO1xuICB9XG59XG4iXSwibmFtZXMiOlsiTmVzdGVkRm9vdG5vdGVMaW5rSFRNTFRyYW5zZm9ybSIsImZyb21OZXN0ZWRGb290bm90ZUxpbmtIVE1MTm9kZSIsIm5lc3RlZEZvb3Rub3RlTGlua0hUTUxOb2RlIiwiaHRtbE5vZGUiLCJuZXN0ZWRGb290bm90ZUxpbmtIVE1MVHJhbnNmb3JtIiwiSFRNTFRyYW5zZm9ybSIsImZyb21IVE5MTk9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFJcUJBOzs7MkRBRks7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFWCxJQUFBLEFBQU1BLGdEQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtlQUFOLGtCQUFNQTs7a0JBQUFBOztZQUNaQyxLQUFBQTttQkFBUCxTQUFPQSwrQkFBK0JDLDBCQUEwQjtnQkFDOUQsSUFBTUMsV0FBV0QsNEJBQ1hFLGtDQUFrQ0MsYUFBYSxDQUFDQyxZQUFZLENBSGpETixpQ0FHbUZHO2dCQUVwRyxPQUFPQztZQUNUOzs7V0FObUJKO0VBQXdDSyxhQUFhIn0=