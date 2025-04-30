"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return IndexHeadingTransform;
    }
});
var _occamdom = require("occam-dom");
var _ruleNames = require("../ruleNames");
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
var IndexHeadingTransform = /*#__PURE__*/ function(Transform) {
    _inherits(IndexHeadingTransform, Transform);
    function IndexHeadingTransform() {
        _class_call_check(this, IndexHeadingTransform);
        return _call_super(this, IndexHeadingTransform, arguments);
    }
    _create_class(IndexHeadingTransform, null, [
        {
            key: "fromLetter",
            value: function fromLetter(letter, context) {
                var nodeFromTokens = context.nodeFromTokens, tokensFromContent = context.tokensFromContent, startRuleName = _ruleNames.INDEX_HEADING_RULE_NAME, content = "".concat(letter), tokens = tokensFromContent(content), node = nodeFromTokens(tokens, startRuleName), indexHeadingTransform = _occamdom.Transform.fromNodeAndTokens(IndexHeadingTransform, node, tokens);
                return indexHeadingTransform;
            }
        }
    ]);
    return IndexHeadingTransform;
}(_occamdom.Transform);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90cmFuc2Zvcm0vX2xlZ2FjeS9pbmRleEhlYWRpbmcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFRyYW5zZm9ybSB9IGZyb20gXCJvY2NhbS1kb21cIjtcblxuaW1wb3J0IHsgSU5ERVhfSEVBRElOR19SVUxFX05BTUUgfSBmcm9tIFwiLi4vcnVsZU5hbWVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4SGVhZGluZ1RyYW5zZm9ybSBleHRlbmRzIFRyYW5zZm9ybSB7XG4gIHN0YXRpYyBmcm9tTGV0dGVyKGxldHRlciwgY29udGV4dCkge1xuICAgIGNvbnN0IHsgbm9kZUZyb21Ub2tlbnMsIHRva2Vuc0Zyb21Db250ZW50IH0gPSBjb250ZXh0LCAgLy8vXG4gICAgICAgICAgc3RhcnRSdWxlTmFtZSA9IElOREVYX0hFQURJTkdfUlVMRV9OQU1FLFxuICAgICAgICAgIGNvbnRlbnQgPSBgJHtsZXR0ZXJ9YCxcbiAgICAgICAgICB0b2tlbnMgPSB0b2tlbnNGcm9tQ29udGVudChjb250ZW50KSxcbiAgICAgICAgICBub2RlID0gbm9kZUZyb21Ub2tlbnModG9rZW5zLCBzdGFydFJ1bGVOYW1lKSxcbiAgICAgICAgICBpbmRleEhlYWRpbmdUcmFuc2Zvcm0gPSBUcmFuc2Zvcm0uZnJvbU5vZGVBbmRUb2tlbnMoSW5kZXhIZWFkaW5nVHJhbnNmb3JtLCBub2RlLCB0b2tlbnMpO1xuXG4gICAgcmV0dXJuIGluZGV4SGVhZGluZ1RyYW5zZm9ybTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkluZGV4SGVhZGluZ1RyYW5zZm9ybSIsImZyb21MZXR0ZXIiLCJsZXR0ZXIiLCJjb250ZXh0Iiwibm9kZUZyb21Ub2tlbnMiLCJ0b2tlbnNGcm9tQ29udGVudCIsInN0YXJ0UnVsZU5hbWUiLCJJTkRFWF9IRUFESU5HX1JVTEVfTkFNRSIsImNvbnRlbnQiLCJ0b2tlbnMiLCJub2RlIiwiaW5kZXhIZWFkaW5nVHJhbnNmb3JtIiwiVHJhbnNmb3JtIiwiZnJvbU5vZGVBbmRUb2tlbnMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBTXFCQTs7O3dCQUpLO3lCQUVjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV6QixJQUFBLEFBQU1BLHNDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtlQUFOLGtCQUFNQTs7a0JBQUFBOztZQUNaQyxLQUFBQTttQkFBUCxTQUFPQSxXQUFXQyxNQUFNLEVBQUVDLE9BQU87Z0JBQy9CLElBQVFDLGlCQUFzQ0QsUUFBdENDLGdCQUFnQkMsb0JBQXNCRixRQUF0QkUsbUJBQ2xCQyxnQkFBZ0JDLGtDQUF1QixFQUN2Q0MsVUFBVSxBQUFDLEdBQVMsT0FBUE4sU0FDYk8sU0FBU0osa0JBQWtCRyxVQUMzQkUsT0FBT04sZUFBZUssUUFBUUgsZ0JBQzlCSyx3QkFBd0JDLG1CQUFTLENBQUNDLGlCQUFpQixDQVB4Q2IsdUJBT2dFVSxNQUFNRDtnQkFFdkYsT0FBT0U7WUFDVDs7O1dBVm1CWDtFQUE4QlksbUJBQVMifQ==