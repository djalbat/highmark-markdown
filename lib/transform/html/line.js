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
    _create_class(LineHTMLTransform, [
        {
            key: "getLineHTMLNode",
            value: function getLineHTMLNode() {
                var htmlNode = this.getHTMLNode(), lineHTMLNode = htmlNode; ///;
                return lineHTMLNode;
            }
        }
    ], [
        {
            key: "fromLineHTMLNode",
            value: function fromLineHTMLNode(lineHTMLNode) {
                var htmlNode = lineHTMLNode, paragraphHTMLTransform = _html.default.fromHTMLNode(LineHTMLTransform, htmlNode);
                return paragraphHTMLTransform;
            }
        },
        {
            key: "fromFootnoteHTMLTransform",
            value: function fromFootnoteHTMLTransform(footnoteHTMLTransform) {
                var lineHTMLNode = footnoteHTMLTransform.getLineHTMLNode(), htmlNode = lineHTMLNode, paragraphHTMLTransform = _html.default.fromHTMLNode(LineHTMLTransform, htmlNode);
                return paragraphHTMLTransform;
            }
        }
    ]);
    return LineHTMLTransform;
}(_html.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90cmFuc2Zvcm0vaHRtbC9saW5lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgSFRNTFRyYW5zZm9ybSBmcm9tIFwiLi4vLi4vdHJhbnNmb3JtL2h0bWxcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaW5lSFRNTFRyYW5zZm9ybSBleHRlbmRzIEhUTUxUcmFuc2Zvcm0ge1xuICBnZXRMaW5lSFRNTE5vZGUoKSB7XG4gICAgY29uc3QgaHRtbE5vZGUgPSB0aGlzLmdldEhUTUxOb2RlKCksXG4gICAgICAgICAgbGluZUhUTUxOb2RlID0gaHRtbE5vZGU7ICAvLy87XG5cbiAgICByZXR1cm4gbGluZUhUTUxOb2RlO1xuICB9XG5cbiAgc3RhdGljIGZyb21MaW5lSFRNTE5vZGUobGluZUhUTUxOb2RlKSB7XG4gICAgY29uc3QgaHRtbE5vZGUgPSBsaW5lSFRNTE5vZGUsIC8vL1xuICAgICAgICAgIHBhcmFncmFwaEhUTUxUcmFuc2Zvcm0gPSBIVE1MVHJhbnNmb3JtLmZyb21IVE1MTm9kZShMaW5lSFRNTFRyYW5zZm9ybSwgaHRtbE5vZGUpO1xuXG4gICAgcmV0dXJuIHBhcmFncmFwaEhUTUxUcmFuc2Zvcm07XG4gIH1cblxuICBzdGF0aWMgZnJvbUZvb3Rub3RlSFRNTFRyYW5zZm9ybShmb290bm90ZUhUTUxUcmFuc2Zvcm0pIHtcbiAgICBjb25zdCBsaW5lSFRNTE5vZGUgPSBmb290bm90ZUhUTUxUcmFuc2Zvcm0uZ2V0TGluZUhUTUxOb2RlKCksXG4gICAgICAgICAgaHRtbE5vZGUgPSBsaW5lSFRNTE5vZGUsIC8vL1xuICAgICAgICAgIHBhcmFncmFwaEhUTUxUcmFuc2Zvcm0gPSBIVE1MVHJhbnNmb3JtLmZyb21IVE1MTm9kZShMaW5lSFRNTFRyYW5zZm9ybSwgaHRtbE5vZGUpO1xuXG4gICAgcmV0dXJuIHBhcmFncmFwaEhUTUxUcmFuc2Zvcm07XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJMaW5lSFRNTFRyYW5zZm9ybSIsImdldExpbmVIVE1MTm9kZSIsImh0bWxOb2RlIiwiZ2V0SFRNTE5vZGUiLCJsaW5lSFRNTE5vZGUiLCJmcm9tTGluZUhUTUxOb2RlIiwicGFyYWdyYXBoSFRNTFRyYW5zZm9ybSIsIkhUTUxUcmFuc2Zvcm0iLCJmcm9tSFRNTE5vZGUiLCJmcm9tRm9vdG5vdGVIVE1MVHJhbnNmb3JtIiwiZm9vdG5vdGVIVE1MVHJhbnNmb3JtIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQUlxQkE7OzsyREFGSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVYLElBQUEsQUFBTUEsa0NBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO2VBQU4sa0JBQU1BOztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsV0FBVyxJQUFJLENBQUNDLFdBQVcsSUFDM0JDLGVBQWVGLFVBQVcsSUFBSTtnQkFFcEMsT0FBT0U7WUFDVDs7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSxpQkFBaUJELFlBQVk7Z0JBQ2xDLElBQU1GLFdBQVdFLGNBQ1hFLHlCQUF5QkMsYUFBYSxDQUFDQyxZQUFZLENBVnhDUixtQkFVNERFO2dCQUU3RSxPQUFPSTtZQUNUOzs7WUFFT0csS0FBQUE7bUJBQVAsU0FBT0EsMEJBQTBCQyxxQkFBcUI7Z0JBQ3BELElBQU1OLGVBQWVNLHNCQUFzQlQsZUFBZSxJQUNwREMsV0FBV0UsY0FDWEUseUJBQXlCQyxhQUFhLENBQUNDLFlBQVksQ0FsQnhDUixtQkFrQjRERTtnQkFFN0UsT0FBT0k7WUFDVDs7O1dBckJtQk47RUFBMEJPLGFBQWEifQ==