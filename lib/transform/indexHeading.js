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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90cmFuc2Zvcm0vaW5kZXhIZWFkaW5nLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBUcmFuc2Zvcm0gfSBmcm9tIFwib2NjYW0tZG9tXCI7XG5cbmltcG9ydCB7IElOREVYX0hFQURJTkdfUlVMRV9OQU1FIH0gZnJvbSBcIi4uL3J1bGVOYW1lc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleEhlYWRpbmdUcmFuc2Zvcm0gZXh0ZW5kcyBUcmFuc2Zvcm0ge1xuICBzdGF0aWMgZnJvbUxldHRlcihsZXR0ZXIsIGNvbnRleHQpIHtcbiAgICBjb25zdCB7IG5vZGVGcm9tVG9rZW5zLCB0b2tlbnNGcm9tQ29udGVudCB9ID0gY29udGV4dCwgIC8vL1xuICAgICAgICAgIHN0YXJ0UnVsZU5hbWUgPSBJTkRFWF9IRUFESU5HX1JVTEVfTkFNRSxcbiAgICAgICAgICBjb250ZW50ID0gYCR7bGV0dGVyfWAsXG4gICAgICAgICAgdG9rZW5zID0gdG9rZW5zRnJvbUNvbnRlbnQoY29udGVudCksXG4gICAgICAgICAgbm9kZSA9IG5vZGVGcm9tVG9rZW5zKHRva2Vucywgc3RhcnRSdWxlTmFtZSksXG4gICAgICAgICAgaW5kZXhIZWFkaW5nVHJhbnNmb3JtID0gVHJhbnNmb3JtLmZyb21Ob2RlQW5kVG9rZW5zKEluZGV4SGVhZGluZ1RyYW5zZm9ybSwgbm9kZSwgdG9rZW5zKTtcblxuICAgIHJldHVybiBpbmRleEhlYWRpbmdUcmFuc2Zvcm07XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJJbmRleEhlYWRpbmdUcmFuc2Zvcm0iLCJmcm9tTGV0dGVyIiwibGV0dGVyIiwiY29udGV4dCIsIm5vZGVGcm9tVG9rZW5zIiwidG9rZW5zRnJvbUNvbnRlbnQiLCJzdGFydFJ1bGVOYW1lIiwiSU5ERVhfSEVBRElOR19SVUxFX05BTUUiLCJjb250ZW50IiwidG9rZW5zIiwibm9kZSIsImluZGV4SGVhZGluZ1RyYW5zZm9ybSIsIlRyYW5zZm9ybSIsImZyb21Ob2RlQW5kVG9rZW5zIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU1xQkE7Ozt3QkFKSzt5QkFFYzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFekIsSUFBQSxBQUFNQSxzQ0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7ZUFBTixrQkFBTUE7O2tCQUFBQTs7WUFDWkMsS0FBQUE7bUJBQVAsU0FBT0EsV0FBV0MsTUFBTSxFQUFFQyxPQUFPO2dCQUMvQixJQUFRQyxpQkFBc0NELFFBQXRDQyxnQkFBZ0JDLG9CQUFzQkYsUUFBdEJFLG1CQUNsQkMsZ0JBQWdCQyxrQ0FBdUIsRUFDdkNDLFVBQVUsQUFBQyxHQUFTLE9BQVBOLFNBQ2JPLFNBQVNKLGtCQUFrQkcsVUFDM0JFLE9BQU9OLGVBQWVLLFFBQVFILGdCQUM5Qkssd0JBQXdCQyxtQkFBUyxDQUFDQyxpQkFBaUIsQ0FQeENiLHVCQU9nRVUsTUFBTUQ7Z0JBRXZGLE9BQU9FO1lBQ1Q7OztXQVZtQlg7RUFBOEJZLG1CQUFTIn0=