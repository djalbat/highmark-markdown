"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return FootnotesDirectiveMarkdownNode;
    }
});
var _directive = /*#__PURE__*/ _interop_require_default(require("../../../node/markdown/directive"));
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
var FootnotesDirectiveMarkdownNode = /*#__PURE__*/ function(DirectiveMarkdownNode) {
    _inherits(FootnotesDirectiveMarkdownNode, DirectiveMarkdownNode);
    function FootnotesDirectiveMarkdownNode() {
        _class_call_check(this, FootnotesDirectiveMarkdownNode);
        return _call_super(this, FootnotesDirectiveMarkdownNode, arguments);
    }
    _create_class(FootnotesDirectiveMarkdownNode, null, [
        {
            key: "fromRuleNameChildNodesAndOpacity",
            value: function fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) {
                return _directive.default.fromRuleNameChildNodesAndOpacity(FootnotesDirectiveMarkdownNode, ruleName, childNodes, opacity);
            }
        }
    ]);
    return FootnotesDirectiveMarkdownNode;
}(_directive.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2RpcmVjdGl2ZS9mb290bm90ZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBEaXJlY3RpdmVNYXJrZG93bk5vZGUgZnJvbSBcIi4uLy4uLy4uL25vZGUvbWFya2Rvd24vZGlyZWN0aXZlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvb3Rub3Rlc0RpcmVjdGl2ZU1hcmtkb3duTm9kZSBleHRlbmRzIERpcmVjdGl2ZU1hcmtkb3duTm9kZSB7XG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eShydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSkgeyByZXR1cm4gRGlyZWN0aXZlTWFya2Rvd25Ob2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5KEZvb3Rub3Rlc0RpcmVjdGl2ZU1hcmtkb3duTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHkpOyB9XG59XG4iXSwibmFtZXMiOlsiRm9vdG5vdGVzRGlyZWN0aXZlTWFya2Rvd25Ob2RlIiwiZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkiLCJydWxlTmFtZSIsImNoaWxkTm9kZXMiLCJvcGFjaXR5IiwiRGlyZWN0aXZlTWFya2Rvd25Ob2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQUlxQkE7OztnRUFGYTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVuQixJQUFBLEFBQU1BLCtDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtlQUFOLGtCQUFNQTs7a0JBQUFBOztZQUNaQyxLQUFBQTttQkFBUCxTQUFPQSxpQ0FBaUNDLFFBQVEsRUFBRUMsVUFBVSxFQUFFQyxPQUFPO2dCQUFJLE9BQU9DLGtCQUFxQixDQUFDSixnQ0FBZ0MsQ0FEbkhELGdDQUNvSkUsVUFBVUMsWUFBWUM7WUFBVTs7O1dBRHBMSjtFQUF1Q0ssa0JBQXFCIn0=