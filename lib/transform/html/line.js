"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return LineHTMLTransform;
    }
});
var _html = /*#__PURE__*/ _interop_require_default(require("../../transform/html"));
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
var LineHTMLTransform = /*#__PURE__*/ function(HTMLTransform) {
    _inherits(LineHTMLTransform, HTMLTransform);
    function LineHTMLTransform() {
        _class_call_check(this, LineHTMLTransform);
        return _call_super(this, LineHTMLTransform, arguments);
    }
    _create_class(LineHTMLTransform, null, [
        {
            key: "fromFootnoteHTMLTransform",
            value: function fromFootnoteHTMLTransform(footnoteHTNLTransform, context) {
                var linehHTMLNode = footnoteHTNLTransform.getLineHTMLNode(), htmlNode = linehHTMLNode, paragraphHTMLTransform = _html.default.fromHTNLNOde(LineHTMLTransform, htmlNode, context);
                return paragraphHTMLTransform;
            }
        }
    ]);
    return LineHTMLTransform;
}(_html.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90cmFuc2Zvcm0vaHRtbC9saW5lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgSFRNTFRyYW5zZm9ybSBmcm9tIFwiLi4vLi4vdHJhbnNmb3JtL2h0bWxcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaW5lSFRNTFRyYW5zZm9ybSBleHRlbmRzIEhUTUxUcmFuc2Zvcm0ge1xuICBzdGF0aWMgZnJvbUZvb3Rub3RlSFRNTFRyYW5zZm9ybShmb290bm90ZUhUTkxUcmFuc2Zvcm0sIGNvbnRleHQpIHtcbiAgICBjb25zdCBsaW5laEhUTUxOb2RlID0gZm9vdG5vdGVIVE5MVHJhbnNmb3JtLmdldExpbmVIVE1MTm9kZSgpLFxuICAgICAgICAgIGh0bWxOb2RlID0gbGluZWhIVE1MTm9kZSwgLy8vXG4gICAgICAgICAgcGFyYWdyYXBoSFRNTFRyYW5zZm9ybSA9IEhUTUxUcmFuc2Zvcm0uZnJvbUhUTkxOT2RlKExpbmVIVE1MVHJhbnNmb3JtLCBodG1sTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gcGFyYWdyYXBoSFRNTFRyYW5zZm9ybTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkxpbmVIVE1MVHJhbnNmb3JtIiwiZnJvbUZvb3Rub3RlSFRNTFRyYW5zZm9ybSIsImZvb3Rub3RlSFROTFRyYW5zZm9ybSIsImNvbnRleHQiLCJsaW5laEhUTUxOb2RlIiwiZ2V0TGluZUhUTUxOb2RlIiwiaHRtbE5vZGUiLCJwYXJhZ3JhcGhIVE1MVHJhbnNmb3JtIiwiSFRNTFRyYW5zZm9ybSIsImZyb21IVE5MTk9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFJcUJBOzs7MkRBRks7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFWCxJQUFBLEFBQU1BLGtDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtlQUFOLGtCQUFNQTs7a0JBQUFBOztZQUNaQyxLQUFBQTttQkFBUCxTQUFPQSwwQkFBMEJDLHFCQUFxQixFQUFFQyxPQUFPO2dCQUM3RCxJQUFNQyxnQkFBZ0JGLHNCQUFzQkcsZUFBZSxJQUNyREMsV0FBV0YsZUFDWEcseUJBQXlCQyxhQUFhLENBQUNDLFlBQVksQ0FKeENULG1CQUk0RE0sVUFBVUg7Z0JBRXZGLE9BQU9JO1lBQ1Q7OztXQVBtQlA7RUFBMEJRLGFBQWEifQ==