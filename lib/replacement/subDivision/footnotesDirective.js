"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return FootnotesDirectiveSubDivisionReplacement;
    }
});
var _subDivision = /*#__PURE__*/ _interop_require_default(require("../../replacement/subDivision"));
var _query = require("../../utilities/query");
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
var FootnotesDirectiveSubDivisionReplacement = /*#__PURE__*/ function(SubDivisionReplacement) {
    _inherits(FootnotesDirectiveSubDivisionReplacement, SubDivisionReplacement);
    function FootnotesDirectiveSubDivisionReplacement() {
        _class_call_check(this, FootnotesDirectiveSubDivisionReplacement);
        return _call_super(this, FootnotesDirectiveSubDivisionReplacement, arguments);
    }
    _create_class(FootnotesDirectiveSubDivisionReplacement, null, [
        {
            key: "fromSubDivisionMarkdownNode",
            value: function fromSubDivisionMarkdownNode(subDivisionMarkdownNode, context) {
                var footnotesDirectiveSubDivisionReplacement = null;
                var node = subDivisionMarkdownNode, footnotesDirectiveMarkdownNode = (0, _query.footnotesDirectiveMarkdownNodeFromNode)(node);
                if (footnotesDirectiveMarkdownNode !== null) {
                    footnotesDirectiveSubDivisionReplacement = _subDivision.default.fromSubDivisionMarkdownNode(FootnotesDirectiveSubDivisionReplacement, subDivisionMarkdownNode, context);
                }
                return footnotesDirectiveSubDivisionReplacement;
            }
        }
    ]);
    return FootnotesDirectiveSubDivisionReplacement;
}(_subDivision.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yZXBsYWNlbWVudC9zdWJEaXZpc2lvbi9mb290bm90ZXNEaXJlY3RpdmUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBTdWJEaXZpc2lvblJlcGxhY2VtZW50IGZyb20gXCIuLi8uLi9yZXBsYWNlbWVudC9zdWJEaXZpc2lvblwiO1xuXG5pbXBvcnQgeyBmb290bm90ZXNEaXJlY3RpdmVNYXJrZG93bk5vZGVGcm9tTm9kZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9vdG5vdGVzRGlyZWN0aXZlU3ViRGl2aXNpb25SZXBsYWNlbWVudCBleHRlbmRzIFN1YkRpdmlzaW9uUmVwbGFjZW1lbnQge1xuICBzdGF0aWMgZnJvbVN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlKHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IGZvb3Rub3Rlc0RpcmVjdGl2ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnQgPSBudWxsO1xuXG4gICAgY29uc3Qgbm9kZSA9IHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlLCAvLy9cbiAgICAgICAgICBmb290bm90ZXNEaXJlY3RpdmVNYXJrZG93bk5vZGUgPSBmb290bm90ZXNEaXJlY3RpdmVNYXJrZG93bk5vZGVGcm9tTm9kZShub2RlKTtcblxuICAgIGlmIChmb290bm90ZXNEaXJlY3RpdmVNYXJrZG93bk5vZGUgIT09IG51bGwpIHtcbiAgICAgIGZvb3Rub3Rlc0RpcmVjdGl2ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnQgPSBTdWJEaXZpc2lvblJlcGxhY2VtZW50LmZyb21TdWJEaXZpc2lvbk1hcmtkb3duTm9kZShGb290bm90ZXNEaXJlY3RpdmVTdWJEaXZpc2lvblJlcGxhY2VtZW50LCBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZvb3Rub3Rlc0RpcmVjdGl2ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnQ7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJGb290bm90ZXNEaXJlY3RpdmVTdWJEaXZpc2lvblJlcGxhY2VtZW50IiwiZnJvbVN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlIiwic3ViRGl2aXNpb25NYXJrZG93bk5vZGUiLCJjb250ZXh0IiwiZm9vdG5vdGVzRGlyZWN0aXZlU3ViRGl2aXNpb25SZXBsYWNlbWVudCIsIm5vZGUiLCJmb290bm90ZXNEaXJlY3RpdmVNYXJrZG93bk5vZGUiLCJmb290bm90ZXNEaXJlY3RpdmVNYXJrZG93bk5vZGVGcm9tTm9kZSIsIlN1YkRpdmlzaW9uUmVwbGFjZW1lbnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBTXFCQTs7O2tFQUpjO3FCQUVvQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV4QyxJQUFBLEFBQU1BLHlEQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtpQ0FBQUE7O2tCQUFBQTs7WUFDWkMsS0FBQUE7bUJBQVAsU0FBT0EsNEJBQTRCQyx1QkFBdUIsRUFBRUMsT0FBTztnQkFDakUsSUFBSUMsMkNBQTJDO2dCQUUvQyxJQUFNQyxPQUFPSCx5QkFDUEksaUNBQWlDQyxJQUFBQSw2Q0FBc0MsRUFBQ0Y7Z0JBRTlFLElBQUlDLG1DQUFtQyxNQUFNO29CQUMzQ0YsMkNBQTJDSSxvQkFBc0IsQ0FBQ1AsMkJBQTJCLENBUjlFRCwwQ0FReUhFLHlCQUF5QkM7Z0JBQ25LO2dCQUVBLE9BQU9DO1lBQ1Q7OztXQVptQko7RUFBaURRLG9CQUFzQiJ9