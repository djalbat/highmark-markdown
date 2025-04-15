"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return IndexHeadingReplacement;
    }
});
var _ = /*#__PURE__*/ _interop_require_default(require("./"));
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
var IndexHeadingReplacement = /*#__PURE__*/ function(Replacement) {
    _inherits(IndexHeadingReplacement, Replacement);
    function IndexHeadingReplacement() {
        _class_call_check(this, IndexHeadingReplacement);
        return _call_super(this, IndexHeadingReplacement, arguments);
    }
    _create_class(IndexHeadingReplacement, null, [
        {
            key: "fromLetter",
            value: function fromLetter(letter, context) {
                var nodeFromTokens = context.nodeFromTokens, tokensFromContent = context.tokensFromContent, startRuleName = _ruleNames.INDEX_HEADING_RULE_NAME, content = "".concat(letter), tokens = tokensFromContent(content), node = nodeFromTokens(tokens, startRuleName), indexHeadingReplacement = _.default.fromNodeAndTokens(IndexHeadingReplacement, node, tokens);
                return indexHeadingReplacement;
            }
        }
    ]);
    return IndexHeadingReplacement;
}(_.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90cmFuc2Zvcm0vaW5kZXhIZWFkaW5nLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUmVwbGFjZW1lbnQgZnJvbSBcIi4vXCI7XG5cbmltcG9ydCB7IElOREVYX0hFQURJTkdfUlVMRV9OQU1FIH0gZnJvbSBcIi4uL3J1bGVOYW1lc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleEhlYWRpbmdSZXBsYWNlbWVudCBleHRlbmRzIFJlcGxhY2VtZW50IHtcbiAgc3RhdGljIGZyb21MZXR0ZXIobGV0dGVyLCBjb250ZXh0KSB7XG4gICAgY29uc3QgeyBub2RlRnJvbVRva2VucywgdG9rZW5zRnJvbUNvbnRlbnQgfSA9IGNvbnRleHQsICAvLy9cbiAgICAgICAgICBzdGFydFJ1bGVOYW1lID0gSU5ERVhfSEVBRElOR19SVUxFX05BTUUsXG4gICAgICAgICAgY29udGVudCA9IGAke2xldHRlcn1gLFxuICAgICAgICAgIHRva2VucyA9IHRva2Vuc0Zyb21Db250ZW50KGNvbnRlbnQpLFxuICAgICAgICAgIG5vZGUgPSBub2RlRnJvbVRva2Vucyh0b2tlbnMsIHN0YXJ0UnVsZU5hbWUpLFxuICAgICAgICAgIGluZGV4SGVhZGluZ1JlcGxhY2VtZW50ID0gUmVwbGFjZW1lbnQuZnJvbU5vZGVBbmRUb2tlbnMoSW5kZXhIZWFkaW5nUmVwbGFjZW1lbnQsIG5vZGUsIHRva2Vucyk7XG5cbiAgICByZXR1cm4gaW5kZXhIZWFkaW5nUmVwbGFjZW1lbnQ7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJJbmRleEhlYWRpbmdSZXBsYWNlbWVudCIsImZyb21MZXR0ZXIiLCJsZXR0ZXIiLCJjb250ZXh0Iiwibm9kZUZyb21Ub2tlbnMiLCJ0b2tlbnNGcm9tQ29udGVudCIsInN0YXJ0UnVsZU5hbWUiLCJJTkRFWF9IRUFESU5HX1JVTEVfTkFNRSIsImNvbnRlbnQiLCJ0b2tlbnMiLCJub2RlIiwiaW5kZXhIZWFkaW5nUmVwbGFjZW1lbnQiLCJSZXBsYWNlbWVudCIsImZyb21Ob2RlQW5kVG9rZW5zIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU1xQkE7Ozt1REFKRzt5QkFFZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFekIsSUFBQSxBQUFNQSx3Q0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7ZUFBTixrQkFBTUE7O2tCQUFBQTs7WUFDWkMsS0FBQUE7bUJBQVAsU0FBT0EsV0FBV0MsTUFBTSxFQUFFQyxPQUFPO2dCQUMvQixJQUFRQyxpQkFBc0NELFFBQXRDQyxnQkFBZ0JDLG9CQUFzQkYsUUFBdEJFLG1CQUNsQkMsZ0JBQWdCQyxrQ0FBdUIsRUFDdkNDLFVBQVUsQUFBQyxHQUFTLE9BQVBOLFNBQ2JPLFNBQVNKLGtCQUFrQkcsVUFDM0JFLE9BQU9OLGVBQWVLLFFBQVFILGdCQUM5QkssMEJBQTBCQyxTQUFXLENBQUNDLGlCQUFpQixDQVA1Q2IseUJBT3NFVSxNQUFNRDtnQkFFN0YsT0FBT0U7WUFDVDs7O1dBVm1CWDtFQUFnQ1ksU0FBVyJ9