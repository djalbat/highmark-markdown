"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return PageNumberDirectiveHTMLTransform;
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
var PageNumberDirectiveHTMLTransform = /*#__PURE__*/ function(HTMLTransform) {
    _inherits(PageNumberDirectiveHTMLTransform, HTMLTransform);
    function PageNumberDirectiveHTMLTransform() {
        _class_call_check(this, PageNumberDirectiveHTMLTransform);
        return _call_super(this, PageNumberDirectiveHTMLTransform, arguments);
    }
    _create_class(PageNumberDirectiveHTMLTransform, null, [
        {
            key: "fromPageNumberDirectiveHTMLNode",
            value: function fromPageNumberDirectiveHTMLNode(pageNumberDirectiveHTMLNde) {
                var htmlNode = pageNumberDirectiveHTMLNde, pageNumberDirectiveHTMLTransform = _html.default.fromHTMLNode(PageNumberDirectiveHTMLTransform, htmlNode);
                return pageNumberDirectiveHTMLTransform;
            }
        }
    ]);
    return PageNumberDirectiveHTMLTransform;
}(_html.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy90cmFuc2Zvcm0vaHRtbC9kaXJlY3RpdmUvcGFnZU51bWJlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEhUTUxUcmFuc2Zvcm0gZnJvbSBcIi4uLy4uLy4uL3RyYW5zZm9ybS9odG1sXCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFnZU51bWJlckRpcmVjdGl2ZUhUTUxUcmFuc2Zvcm0gZXh0ZW5kcyBIVE1MVHJhbnNmb3JtIHtcbiAgc3RhdGljIGZyb21QYWdlTnVtYmVyRGlyZWN0aXZlSFRNTE5vZGUocGFnZU51bWJlckRpcmVjdGl2ZUhUTUxOZGUpIHtcbiAgICBjb25zdCBodG1sTm9kZSA9IHBhZ2VOdW1iZXJEaXJlY3RpdmVIVE1MTmRlLCAvLy9cbiAgICAgICAgICBwYWdlTnVtYmVyRGlyZWN0aXZlSFRNTFRyYW5zZm9ybSA9IEhUTUxUcmFuc2Zvcm0uZnJvbUhUTUxOb2RlKFBhZ2VOdW1iZXJEaXJlY3RpdmVIVE1MVHJhbnNmb3JtLCBodG1sTm9kZSk7XG5cbiAgICByZXR1cm4gcGFnZU51bWJlckRpcmVjdGl2ZUhUTUxUcmFuc2Zvcm07XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJQYWdlTnVtYmVyRGlyZWN0aXZlSFRNTFRyYW5zZm9ybSIsImZyb21QYWdlTnVtYmVyRGlyZWN0aXZlSFRNTE5vZGUiLCJwYWdlTnVtYmVyRGlyZWN0aXZlSFRNTE5kZSIsImh0bWxOb2RlIiwicGFnZU51bWJlckRpcmVjdGl2ZUhUTUxUcmFuc2Zvcm0iLCJIVE1MVHJhbnNmb3JtIiwiZnJvbUhUTUxOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQUlxQkE7OzsyREFGSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVYLElBQUEsQUFBTUEsaURBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO2VBQU4sa0JBQU1BOztrQkFBQUE7O1lBQ1pDLEtBQUFBO21CQUFQLFNBQU9BLGdDQUFnQ0MsMEJBQTBCO2dCQUMvRCxJQUFNQyxXQUFXRCw0QkFDWEUsbUNBQW1DQyxhQUFhLENBQUNDLFlBQVksQ0FIbEROLGtDQUdxRkc7Z0JBRXRHLE9BQU9DO1lBQ1Q7OztXQU5tQko7RUFBeUNLLGFBQWEifQ==