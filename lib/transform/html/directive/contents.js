"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ContentsDirectiveHTMLTransform;
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
var ContentsDirectiveHTMLTransform = /*#__PURE__*/ function(HTMLTransform) {
    _inherits(ContentsDirectiveHTMLTransform, HTMLTransform);
    function ContentsDirectiveHTMLTransform() {
        _class_call_check(this, ContentsDirectiveHTMLTransform);
        return _call_super(this, ContentsDirectiveHTMLTransform, arguments);
    }
    _create_class(ContentsDirectiveHTMLTransform, null, [
        {
            key: "fromContentsDirectiveHTMLNode",
            value: function fromContentsDirectiveHTMLNode(contentsDirectiveHTMLNde) {
                var htmlNode = contentsDirectiveHTMLNde, contentsDirectiveHTMLTransform = _html.default.fromHTMLNode(ContentsDirectiveHTMLTransform, htmlNode);
                return contentsDirectiveHTMLTransform;
            }
        }
    ]);
    return ContentsDirectiveHTMLTransform;
}(_html.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy90cmFuc2Zvcm0vaHRtbC9kaXJlY3RpdmUvY29udGVudHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBIVE1MVHJhbnNmb3JtIGZyb20gXCIuLi8uLi8uLi90cmFuc2Zvcm0vaHRtbFwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRlbnRzRGlyZWN0aXZlSFRNTFRyYW5zZm9ybSBleHRlbmRzIEhUTUxUcmFuc2Zvcm0ge1xuICBzdGF0aWMgZnJvbUNvbnRlbnRzRGlyZWN0aXZlSFRNTE5vZGUoY29udGVudHNEaXJlY3RpdmVIVE1MTmRlKSB7XG4gICAgY29uc3QgaHRtbE5vZGUgPSBjb250ZW50c0RpcmVjdGl2ZUhUTUxOZGUsIC8vL1xuICAgICAgICAgIGNvbnRlbnRzRGlyZWN0aXZlSFRNTFRyYW5zZm9ybSA9IEhUTUxUcmFuc2Zvcm0uZnJvbUhUTUxOb2RlKENvbnRlbnRzRGlyZWN0aXZlSFRNTFRyYW5zZm9ybSwgaHRtbE5vZGUpO1xuXG4gICAgcmV0dXJuIGNvbnRlbnRzRGlyZWN0aXZlSFRNTFRyYW5zZm9ybTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkNvbnRlbnRzRGlyZWN0aXZlSFRNTFRyYW5zZm9ybSIsImZyb21Db250ZW50c0RpcmVjdGl2ZUhUTUxOb2RlIiwiY29udGVudHNEaXJlY3RpdmVIVE1MTmRlIiwiaHRtbE5vZGUiLCJjb250ZW50c0RpcmVjdGl2ZUhUTUxUcmFuc2Zvcm0iLCJIVE1MVHJhbnNmb3JtIiwiZnJvbUhUTUxOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQUlxQkE7OzsyREFGSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVYLElBQUEsQUFBTUEsK0NBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO2VBQU4sa0JBQU1BOztrQkFBQUE7O1lBQ1pDLEtBQUFBO21CQUFQLFNBQU9BLDhCQUE4QkMsd0JBQXdCO2dCQUMzRCxJQUFNQyxXQUFXRCwwQkFDWEUsaUNBQWlDQyxhQUFhLENBQUNDLFlBQVksQ0FIaEROLGdDQUdpRkc7Z0JBRWxHLE9BQU9DO1lBQ1Q7OztXQU5tQko7RUFBdUNLLGFBQWEifQ==