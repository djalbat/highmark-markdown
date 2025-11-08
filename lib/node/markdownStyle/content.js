"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ContentMarkdownStyleNode;
    }
});
var _markdownStyle = /*#__PURE__*/ _interop_require_default(require("../../node/markdownStyle"));
var _constants = require("../../constants");
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
var ContentMarkdownStyleNode = /*#__PURE__*/ function(MarkdownStyleNode) {
    _inherits(ContentMarkdownStyleNode, MarkdownStyleNode);
    function ContentMarkdownStyleNode() {
        _class_call_check(this, ContentMarkdownStyleNode);
        return _call_super(this, ContentMarkdownStyleNode, arguments);
    }
    _create_class(ContentMarkdownStyleNode, [
        {
            key: "content",
            value: function content(context) {
                var tokens = context.tokens;
                var nonTerminalNode = this, firstSignificantTokenIndex = nonTerminalNode.getFirstSignificantTokenIndex(tokens), lastSignificantTokenIndex = nonTerminalNode.getLastSignificantTokenIndex(tokens), start = firstSignificantTokenIndex, end = lastSignificantTokenIndex + 1;
                tokens = tokens.slice(start, end);
                var content = _constants.EMPTY_STRING;
                tokens.forEach(function(token) {
                    var tokenContent = token.getContent();
                    content += tokenContent;
                });
                content += _constants.CARRIAGE_RETURN;
                content += _constants.CARRIAGE_RETURN;
                return content;
            }
        }
    ], [
        {
            key: "fromRuleNameChildNodesOpacityAndPrecedence",
            value: function fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) {
                return _markdownStyle.default.fromRuleNameChildNodesOpacityAndPrecedence(ContentMarkdownStyleNode, ruleName, childNodes, opacity, precedence);
            }
        }
    ]);
    return ContentMarkdownStyleNode;
}(_markdownStyle.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duU3R5bGUvY29udGVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE1hcmtkb3duU3R5bGVOb2RlIGZyb20gXCIuLi8uLi9ub2RlL21hcmtkb3duU3R5bGVcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HLCBDQVJSSUFHRV9SRVRVUk4gfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRlbnRNYXJrZG93blN0eWxlTm9kZSBleHRlbmRzIE1hcmtkb3duU3R5bGVOb2RlIHtcbiAgY29udGVudChjb250ZXh0KSB7XG4gICAgbGV0IHsgdG9rZW5zIH0gPSBjb250ZXh0O1xuXG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gdGhpcywgLy8vXG4gICAgICAgICAgZmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXggPSBub25UZXJtaW5hbE5vZGUuZ2V0Rmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXgodG9rZW5zKSxcbiAgICAgICAgICBsYXN0U2lnbmlmaWNhbnRUb2tlbkluZGV4ID0gbm9uVGVybWluYWxOb2RlLmdldExhc3RTaWduaWZpY2FudFRva2VuSW5kZXgodG9rZW5zKSxcbiAgICAgICAgICBzdGFydCA9IGZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4LFxuICAgICAgICAgIGVuZCA9IGxhc3RTaWduaWZpY2FudFRva2VuSW5kZXggKyAxO1xuXG4gICAgdG9rZW5zID0gdG9rZW5zLnNsaWNlKHN0YXJ0LCBlbmQpO1xuXG4gICAgbGV0IGNvbnRlbnQgPSBFTVBUWV9TVFJJTkc7XG5cbiAgICB0b2tlbnMuZm9yRWFjaCgodG9rZW4pID0+IHtcbiAgICAgIGNvbnN0IHRva2VuQ29udGVudCA9IHRva2VuLmdldENvbnRlbnQoKTtcblxuICAgICAgY29udGVudCArPSB0b2tlbkNvbnRlbnQ7XG4gICAgfSk7XG5cbiAgICBjb250ZW50ICs9IENBUlJJQUdFX1JFVFVSTjtcbiAgICBjb250ZW50ICs9IENBUlJJQUdFX1JFVFVSTjtcblxuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZShydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSkgeyByZXR1cm4gTWFya2Rvd25TdHlsZU5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlKENvbnRlbnRNYXJrZG93blN0eWxlTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHByZWNlZGVuY2UpOyB9XG59XG4iXSwibmFtZXMiOlsiQ29udGVudE1hcmtkb3duU3R5bGVOb2RlIiwiY29udGVudCIsImNvbnRleHQiLCJ0b2tlbnMiLCJub25UZXJtaW5hbE5vZGUiLCJmaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleCIsImdldEZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4IiwibGFzdFNpZ25pZmljYW50VG9rZW5JbmRleCIsImdldExhc3RTaWduaWZpY2FudFRva2VuSW5kZXgiLCJzdGFydCIsImVuZCIsInNsaWNlIiwiRU1QVFlfU1RSSU5HIiwiZm9yRWFjaCIsInRva2VuIiwidG9rZW5Db250ZW50IiwiZ2V0Q29udGVudCIsIkNBUlJJQUdFX1JFVFVSTiIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZSIsInJ1bGVOYW1lIiwiY2hpbGROb2RlcyIsIm9wYWNpdHkiLCJwcmVjZWRlbmNlIiwiTWFya2Rvd25TdHlsZU5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBTXFCQTs7O29FQUpTO3lCQUVnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUvQixJQUFBLEFBQU1BLHlDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtRQUFOLE9BQUEsa0JBQU1BOztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUEsUUFBUUMsT0FBTztnQkFDYixJQUFJLEFBQUVDLFNBQVdELFFBQVhDO2dCQUVOLElBQU1DLGtCQUFrQixJQUFJLEVBQ3RCQyw2QkFBNkJELGdCQUFnQkUsNkJBQTZCLENBQUNILFNBQzNFSSw0QkFBNEJILGdCQUFnQkksNEJBQTRCLENBQUNMLFNBQ3pFTSxRQUFRSiw0QkFDUkssTUFBTUgsNEJBQTRCO2dCQUV4Q0osU0FBU0EsT0FBT1EsS0FBSyxDQUFDRixPQUFPQztnQkFFN0IsSUFBSVQsVUFBVVcsdUJBQVk7Z0JBRTFCVCxPQUFPVSxPQUFPLENBQUMsU0FBQ0M7b0JBQ2QsSUFBTUMsZUFBZUQsTUFBTUUsVUFBVTtvQkFFckNmLFdBQVdjO2dCQUNiO2dCQUVBZCxXQUFXZ0IsMEJBQWU7Z0JBQzFCaEIsV0FBV2dCLDBCQUFlO2dCQUUxQixPQUFPaEI7WUFDVDs7OztZQUVPaUIsS0FBQUE7bUJBQVAsU0FBT0EsMkNBQTJDQyxRQUFRLEVBQUVDLFVBQVUsRUFBRUMsT0FBTyxFQUFFQyxVQUFVO2dCQUFJLE9BQU9DLHNCQUFpQixDQUFDTCwwQ0FBMEMsQ0ExQi9JbEIsMEJBMEIwS21CLFVBQVVDLFlBQVlDLFNBQVNDO1lBQWE7OztXQTFCdE50QjtFQUFpQ3VCLHNCQUFpQiJ9