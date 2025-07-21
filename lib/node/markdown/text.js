"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return TextMarkdownNode;
    }
});
var _markdown = /*#__PURE__*/ _interop_require_default(require("../../node/markdown"));
var _tokenTypes = require("../../tokenTypes");
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
var TextMarkdownNode = /*#__PURE__*/ function(MarkdownNode) {
    _inherits(TextMarkdownNode, MarkdownNode);
    function TextMarkdownNode() {
        _class_call_check(this, TextMarkdownNode);
        return _call_super(this, TextMarkdownNode, arguments);
    }
    _create_class(TextMarkdownNode, [
        {
            key: "text",
            value: function text(context) {
                var text = this.fromFirstChildNode(function(firstChildNode) {
                    var text;
                    var terminalNode = firstChildNode, significantToken = terminalNode.getSignificantToken(), significantTokenType = significantToken.getType(), significantTokenContent = significantToken.getContent();
                    text = significantTokenContent; ///
                    if (significantTokenType === _tokenTypes.ESCAPED_TOKEN_TYPE) {
                        var start = 1;
                        text = text.substring(start);
                    }
                    var tokens = context.tokens, significantTokenIndex = tokens.indexOf(significantToken), lastIndex = significantTokenIndex - 1, firstIndex = 0;
                    for(var index = lastIndex; index >= firstIndex; index++){
                        var token = tokens[index], tokenWhitespaceToken = token.isWhitespaceToken();
                        if (!tokenWhitespaceToken) {
                            break;
                        }
                        var whitespaceToken = token, whitespaceTokenContent = whitespaceToken.getContent();
                        text = "".concat(whitespaceTokenContent).concat(text);
                    }
                    return text;
                });
                return text;
            }
        }
    ], [
        {
            key: "fromRuleNameChildNodesOpacityAndPrecedence",
            value: function fromRuleNameChildNodesOpacityAndPrecedence(Class, ruleName, childNodes, opacity, precedence) {
                if (precedence === undefined) {
                    precedence = opacity; ///
                    opacity = childNodes; ///
                    childNodes = ruleName; ///
                    ruleName = Class; ///
                    Class = TextMarkdownNode; ///
                }
                var textMarkdownNode = _markdown.default.fromRuleNameChildNodesOpacityAndPrecedence(Class, ruleName, childNodes, opacity, precedence);
                return textMarkdownNode;
            }
        }
    ]);
    return TextMarkdownNode;
}(_markdown.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL3RleHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBNYXJrZG93bk5vZGUgZnJvbSBcIi4uLy4uL25vZGUvbWFya2Rvd25cIjtcblxuaW1wb3J0IHsgRVNDQVBFRF9UT0tFTl9UWVBFIH0gZnJvbSBcIi4uLy4uL3Rva2VuVHlwZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGV4dE1hcmtkb3duTm9kZSBleHRlbmRzIE1hcmtkb3duTm9kZSB7XG4gIHRleHQoY29udGV4dCkge1xuICAgIGNvbnN0IHRleHQgPSB0aGlzLmZyb21GaXJzdENoaWxkTm9kZSgoZmlyc3RDaGlsZE5vZGUpID0+IHtcbiAgICAgIGxldCB0ZXh0O1xuXG4gICAgICBjb25zdCB0ZXJtaW5hbE5vZGUgPSBmaXJzdENoaWxkTm9kZSwgIC8vL1xuICAgICAgICAgICAgc2lnbmlmaWNhbnRUb2tlbiA9IHRlcm1pbmFsTm9kZS5nZXRTaWduaWZpY2FudFRva2VuKCksXG4gICAgICAgICAgICBzaWduaWZpY2FudFRva2VuVHlwZSA9IHNpZ25pZmljYW50VG9rZW4uZ2V0VHlwZSgpLFxuICAgICAgICAgICAgc2lnbmlmaWNhbnRUb2tlbkNvbnRlbnQgPSBzaWduaWZpY2FudFRva2VuLmdldENvbnRlbnQoKTtcblxuICAgICAgdGV4dCA9IHNpZ25pZmljYW50VG9rZW5Db250ZW50OyAvLy9cblxuICAgICAgaWYgKHNpZ25pZmljYW50VG9rZW5UeXBlID09PSBFU0NBUEVEX1RPS0VOX1RZUEUpIHtcbiAgICAgICAgY29uc3Qgc3RhcnQgPSAxO1xuXG4gICAgICAgIHRleHQgPSB0ZXh0LnN1YnN0cmluZyhzdGFydCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHsgdG9rZW5zIH0gPSBjb250ZXh0LFxuICAgICAgICAgICAgc2lnbmlmaWNhbnRUb2tlbkluZGV4ID0gdG9rZW5zLmluZGV4T2Yoc2lnbmlmaWNhbnRUb2tlbiksXG4gICAgICAgICAgICBsYXN0SW5kZXggPSBzaWduaWZpY2FudFRva2VuSW5kZXggLSAxLFxuICAgICAgICAgICAgZmlyc3RJbmRleCA9IDA7XG5cbiAgICAgIGZvciAobGV0IGluZGV4ID0gbGFzdEluZGV4OyBpbmRleCA+PSBmaXJzdEluZGV4OyBpbmRleCsrKSB7XG4gICAgICAgIGNvbnN0IHRva2VuID0gdG9rZW5zW2luZGV4XSxcbiAgICAgICAgICAgICAgdG9rZW5XaGl0ZXNwYWNlVG9rZW4gPSB0b2tlbi5pc1doaXRlc3BhY2VUb2tlbigpO1xuXG4gICAgICAgIGlmICghdG9rZW5XaGl0ZXNwYWNlVG9rZW4pIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHdoaXRlc3BhY2VUb2tlbiA9IHRva2VuLFxuICAgICAgICAgICAgICB3aGl0ZXNwYWNlVG9rZW5Db250ZW50ID0gd2hpdGVzcGFjZVRva2VuLmdldENvbnRlbnQoKTtcblxuICAgICAgICB0ZXh0ID0gYCR7d2hpdGVzcGFjZVRva2VuQ29udGVudH0ke3RleHR9YDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRleHQ7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGV4dDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UoQ2xhc3MsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlKSB7XG4gICAgaWYgKHByZWNlZGVuY2UgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcHJlY2VkZW5jZSA9IG9wYWNpdHk7IC8vL1xuXG4gICAgICBvcGFjaXR5ID0gY2hpbGROb2RlczsgLy8vXG5cbiAgICAgIGNoaWxkTm9kZXMgPSBydWxlTmFtZTsgIC8vL1xuXG4gICAgICBydWxlTmFtZSA9IENsYXNzOyAvLy9cblxuICAgICAgQ2xhc3MgPSBUZXh0TWFya2Rvd25Ob2RlOyAvLy9cbiAgICB9XG5cbiAgICBjb25zdCB0ZXh0TWFya2Rvd25Ob2RlID0gTWFya2Rvd25Ob2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZShDbGFzcywgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHByZWNlZGVuY2UpO1xuXG4gICAgcmV0dXJuIHRleHRNYXJrZG93bk5vZGU7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJUZXh0TWFya2Rvd25Ob2RlIiwidGV4dCIsImNvbnRleHQiLCJmcm9tRmlyc3RDaGlsZE5vZGUiLCJmaXJzdENoaWxkTm9kZSIsInRlcm1pbmFsTm9kZSIsInNpZ25pZmljYW50VG9rZW4iLCJnZXRTaWduaWZpY2FudFRva2VuIiwic2lnbmlmaWNhbnRUb2tlblR5cGUiLCJnZXRUeXBlIiwic2lnbmlmaWNhbnRUb2tlbkNvbnRlbnQiLCJnZXRDb250ZW50IiwiRVNDQVBFRF9UT0tFTl9UWVBFIiwic3RhcnQiLCJzdWJzdHJpbmciLCJ0b2tlbnMiLCJzaWduaWZpY2FudFRva2VuSW5kZXgiLCJpbmRleE9mIiwibGFzdEluZGV4IiwiZmlyc3RJbmRleCIsImluZGV4IiwidG9rZW4iLCJ0b2tlbldoaXRlc3BhY2VUb2tlbiIsImlzV2hpdGVzcGFjZVRva2VuIiwid2hpdGVzcGFjZVRva2VuIiwid2hpdGVzcGFjZVRva2VuQ29udGVudCIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZSIsIkNsYXNzIiwicnVsZU5hbWUiLCJjaGlsZE5vZGVzIiwib3BhY2l0eSIsInByZWNlZGVuY2UiLCJ1bmRlZmluZWQiLCJ0ZXh0TWFya2Rvd25Ob2RlIiwiTWFya2Rvd25Ob2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU1xQkE7OzsrREFKSTswQkFFVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVwQixJQUFBLEFBQU1BLGlDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtRQUFOLE9BQUEsa0JBQU1BOztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUEsS0FBS0MsT0FBTztnQkFDVixJQUFNRCxPQUFPLElBQUksQ0FBQ0Usa0JBQWtCLENBQUMsU0FBQ0M7b0JBQ3BDLElBQUlIO29CQUVKLElBQU1JLGVBQWVELGdCQUNmRSxtQkFBbUJELGFBQWFFLG1CQUFtQixJQUNuREMsdUJBQXVCRixpQkFBaUJHLE9BQU8sSUFDL0NDLDBCQUEwQkosaUJBQWlCSyxVQUFVO29CQUUzRFYsT0FBT1MseUJBQXlCLEdBQUc7b0JBRW5DLElBQUlGLHlCQUF5QkksOEJBQWtCLEVBQUU7d0JBQy9DLElBQU1DLFFBQVE7d0JBRWRaLE9BQU9BLEtBQUthLFNBQVMsQ0FBQ0Q7b0JBQ3hCO29CQUVBLElBQU0sQUFBRUUsU0FBV2IsUUFBWGEsUUFDRkMsd0JBQXdCRCxPQUFPRSxPQUFPLENBQUNYLG1CQUN2Q1ksWUFBWUYsd0JBQXdCLEdBQ3BDRyxhQUFhO29CQUVuQixJQUFLLElBQUlDLFFBQVFGLFdBQVdFLFNBQVNELFlBQVlDLFFBQVM7d0JBQ3hELElBQU1DLFFBQVFOLE1BQU0sQ0FBQ0ssTUFBTSxFQUNyQkUsdUJBQXVCRCxNQUFNRSxpQkFBaUI7d0JBRXBELElBQUksQ0FBQ0Qsc0JBQXNCOzRCQUN6Qjt3QkFDRjt3QkFFQSxJQUFNRSxrQkFBa0JILE9BQ2xCSSx5QkFBeUJELGdCQUFnQmIsVUFBVTt3QkFFekRWLE9BQU8sQUFBQyxHQUEyQkEsT0FBekJ3Qix3QkFBOEIsT0FBTHhCO29CQUNyQztvQkFFQSxPQUFPQTtnQkFDVDtnQkFFQSxPQUFPQTtZQUNUOzs7O1lBRU95QixLQUFBQTttQkFBUCxTQUFPQSwyQ0FBMkNDLEtBQUssRUFBRUMsUUFBUSxFQUFFQyxVQUFVLEVBQUVDLE9BQU8sRUFBRUMsVUFBVTtnQkFDaEcsSUFBSUEsZUFBZUMsV0FBVztvQkFDNUJELGFBQWFELFNBQVMsR0FBRztvQkFFekJBLFVBQVVELFlBQVksR0FBRztvQkFFekJBLGFBQWFELFVBQVcsR0FBRztvQkFFM0JBLFdBQVdELE9BQU8sR0FBRztvQkFFckJBLFFBckRlM0Isa0JBcURXLEdBQUc7Z0JBQy9CO2dCQUVBLElBQU1pQyxtQkFBbUJDLGlCQUFZLENBQUNSLDBDQUEwQyxDQUFDQyxPQUFPQyxVQUFVQyxZQUFZQyxTQUFTQztnQkFFdkgsT0FBT0U7WUFDVDs7O1dBM0RtQmpDO0VBQXlCa0MsaUJBQVkifQ==