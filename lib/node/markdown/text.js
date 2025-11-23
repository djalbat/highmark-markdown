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
                    var tokenIndex = context.tokenIndex;
                    var tokens = context.tokens, tokensLength = tokens.length, minimumTokenIndex = tokenIndex, maximumTokenIndex = tokensLength - 1, significantTokenIndex = tokens.indexOf(significantToken), previousTokenIndex = significantTokenIndex - 1, nextTokenIndex = significantTokenIndex + 1;
                    for(tokenIndex = previousTokenIndex; tokenIndex >= minimumTokenIndex; tokenIndex--){
                        var token = tokens[tokenIndex], tokenWhitespaceToken = token.isWhitespaceToken();
                        if (!tokenWhitespaceToken) {
                            break;
                        }
                        var whitespaceTokenContent = token.getContent();
                        text = "".concat(whitespaceTokenContent).concat(text);
                    }
                    for(tokenIndex = nextTokenIndex; tokenIndex <= maximumTokenIndex; tokenIndex++){
                        var token1 = tokens[tokenIndex], tokenWhitespaceToken1 = token1.isWhitespaceToken();
                        if (!tokenWhitespaceToken1) {
                            break;
                        }
                        var whitespaceTokenContent1 = token1.getContent();
                        text = "".concat(text).concat(whitespaceTokenContent1);
                    }
                    Object.assign(context, {
                        tokenIndex: tokenIndex
                    });
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL3RleHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBNYXJrZG93bk5vZGUgZnJvbSBcIi4uLy4uL25vZGUvbWFya2Rvd25cIjtcblxuaW1wb3J0IHsgRVNDQVBFRF9UT0tFTl9UWVBFIH0gZnJvbSBcIi4uLy4uL3Rva2VuVHlwZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGV4dE1hcmtkb3duTm9kZSBleHRlbmRzIE1hcmtkb3duTm9kZSB7XG4gIHRleHQoY29udGV4dCkge1xuICAgIGNvbnN0IHRleHQgPSB0aGlzLmZyb21GaXJzdENoaWxkTm9kZSgoZmlyc3RDaGlsZE5vZGUpID0+IHtcbiAgICAgIGxldCB0ZXh0O1xuXG4gICAgICBjb25zdCB0ZXJtaW5hbE5vZGUgPSBmaXJzdENoaWxkTm9kZSwgIC8vL1xuICAgICAgICAgICAgc2lnbmlmaWNhbnRUb2tlbiA9IHRlcm1pbmFsTm9kZS5nZXRTaWduaWZpY2FudFRva2VuKCksXG4gICAgICAgICAgICBzaWduaWZpY2FudFRva2VuVHlwZSA9IHNpZ25pZmljYW50VG9rZW4uZ2V0VHlwZSgpLFxuICAgICAgICAgICAgc2lnbmlmaWNhbnRUb2tlbkNvbnRlbnQgPSBzaWduaWZpY2FudFRva2VuLmdldENvbnRlbnQoKTtcblxuICAgICAgdGV4dCA9IHNpZ25pZmljYW50VG9rZW5Db250ZW50OyAvLy9cblxuICAgICAgaWYgKHNpZ25pZmljYW50VG9rZW5UeXBlID09PSBFU0NBUEVEX1RPS0VOX1RZUEUpIHtcbiAgICAgICAgY29uc3Qgc3RhcnQgPSAxO1xuXG4gICAgICAgIHRleHQgPSB0ZXh0LnN1YnN0cmluZyhzdGFydCk7XG4gICAgICB9XG5cbiAgICAgIGxldCB7IHRva2VuSW5kZXggfSA9IGNvbnRleHQ7XG5cbiAgICAgIGNvbnN0IHsgdG9rZW5zIH0gPSBjb250ZXh0LFxuICAgICAgICAgICAgdG9rZW5zTGVuZ3RoID0gdG9rZW5zLmxlbmd0aCxcbiAgICAgICAgICAgIG1pbmltdW1Ub2tlbkluZGV4ID0gdG9rZW5JbmRleCwgLy8vXG4gICAgICAgICAgICBtYXhpbXVtVG9rZW5JbmRleCA9IHRva2Vuc0xlbmd0aCAtIDEsXG4gICAgICAgICAgICBzaWduaWZpY2FudFRva2VuSW5kZXggPSB0b2tlbnMuaW5kZXhPZihzaWduaWZpY2FudFRva2VuKSxcbiAgICAgICAgICAgIHByZXZpb3VzVG9rZW5JbmRleCA9IHNpZ25pZmljYW50VG9rZW5JbmRleCAtIDEsXG4gICAgICAgICAgICBuZXh0VG9rZW5JbmRleCA9IHNpZ25pZmljYW50VG9rZW5JbmRleCArIDE7XG5cbiAgICAgIGZvciAodG9rZW5JbmRleCA9IHByZXZpb3VzVG9rZW5JbmRleDsgdG9rZW5JbmRleCA+PSBtaW5pbXVtVG9rZW5JbmRleDsgdG9rZW5JbmRleC0tKSB7XG4gICAgICAgIGNvbnN0IHRva2VuID0gdG9rZW5zW3Rva2VuSW5kZXhdLFxuICAgICAgICAgICAgICB0b2tlbldoaXRlc3BhY2VUb2tlbiA9IHRva2VuLmlzV2hpdGVzcGFjZVRva2VuKCk7XG5cbiAgICAgICAgaWYgKCF0b2tlbldoaXRlc3BhY2VUb2tlbikge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgd2hpdGVzcGFjZVRva2VuQ29udGVudCA9IHRva2VuLmdldENvbnRlbnQoKTtcblxuICAgICAgICB0ZXh0ID0gYCR7d2hpdGVzcGFjZVRva2VuQ29udGVudH0ke3RleHR9YDtcbiAgICAgIH1cblxuICAgICAgZm9yICh0b2tlbkluZGV4ID0gbmV4dFRva2VuSW5kZXg7IHRva2VuSW5kZXggPD0gbWF4aW11bVRva2VuSW5kZXg7IHRva2VuSW5kZXgrKykge1xuICAgICAgICBjb25zdCB0b2tlbiA9IHRva2Vuc1t0b2tlbkluZGV4XSxcbiAgICAgICAgICAgICAgdG9rZW5XaGl0ZXNwYWNlVG9rZW4gPSB0b2tlbi5pc1doaXRlc3BhY2VUb2tlbigpO1xuXG4gICAgICAgIGlmICghdG9rZW5XaGl0ZXNwYWNlVG9rZW4pIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHdoaXRlc3BhY2VUb2tlbkNvbnRlbnQgPSB0b2tlbi5nZXRDb250ZW50KCk7XG5cbiAgICAgICAgdGV4dCA9IGAke3RleHR9JHt3aGl0ZXNwYWNlVG9rZW5Db250ZW50fWA7XG4gICAgICB9XG5cbiAgICAgIE9iamVjdC5hc3NpZ24oY29udGV4dCwge1xuICAgICAgICB0b2tlbkluZGV4XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIHRleHQ7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGV4dDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UoQ2xhc3MsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlKSB7XG4gICAgaWYgKHByZWNlZGVuY2UgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcHJlY2VkZW5jZSA9IG9wYWNpdHk7IC8vL1xuXG4gICAgICBvcGFjaXR5ID0gY2hpbGROb2RlczsgLy8vXG5cbiAgICAgIGNoaWxkTm9kZXMgPSBydWxlTmFtZTsgIC8vL1xuXG4gICAgICBydWxlTmFtZSA9IENsYXNzOyAvLy9cblxuICAgICAgQ2xhc3MgPSBUZXh0TWFya2Rvd25Ob2RlOyAvLy9cbiAgICB9XG5cbiAgICBjb25zdCB0ZXh0TWFya2Rvd25Ob2RlID0gTWFya2Rvd25Ob2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZShDbGFzcywgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHByZWNlZGVuY2UpO1xuXG4gICAgcmV0dXJuIHRleHRNYXJrZG93bk5vZGU7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJUZXh0TWFya2Rvd25Ob2RlIiwidGV4dCIsImNvbnRleHQiLCJmcm9tRmlyc3RDaGlsZE5vZGUiLCJmaXJzdENoaWxkTm9kZSIsInRlcm1pbmFsTm9kZSIsInNpZ25pZmljYW50VG9rZW4iLCJnZXRTaWduaWZpY2FudFRva2VuIiwic2lnbmlmaWNhbnRUb2tlblR5cGUiLCJnZXRUeXBlIiwic2lnbmlmaWNhbnRUb2tlbkNvbnRlbnQiLCJnZXRDb250ZW50IiwiRVNDQVBFRF9UT0tFTl9UWVBFIiwic3RhcnQiLCJzdWJzdHJpbmciLCJ0b2tlbkluZGV4IiwidG9rZW5zIiwidG9rZW5zTGVuZ3RoIiwibGVuZ3RoIiwibWluaW11bVRva2VuSW5kZXgiLCJtYXhpbXVtVG9rZW5JbmRleCIsInNpZ25pZmljYW50VG9rZW5JbmRleCIsImluZGV4T2YiLCJwcmV2aW91c1Rva2VuSW5kZXgiLCJuZXh0VG9rZW5JbmRleCIsInRva2VuIiwidG9rZW5XaGl0ZXNwYWNlVG9rZW4iLCJpc1doaXRlc3BhY2VUb2tlbiIsIndoaXRlc3BhY2VUb2tlbkNvbnRlbnQiLCJPYmplY3QiLCJhc3NpZ24iLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UiLCJDbGFzcyIsInJ1bGVOYW1lIiwiY2hpbGROb2RlcyIsIm9wYWNpdHkiLCJwcmVjZWRlbmNlIiwidW5kZWZpbmVkIiwidGV4dE1hcmtkb3duTm9kZSIsIk1hcmtkb3duTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFNcUJBOzs7K0RBSkk7MEJBRVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFcEIsSUFBQSxBQUFNQSxpQ0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7UUFBTixPQUFBLGtCQUFNQTs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBLEtBQUtDLE9BQU87Z0JBQ1YsSUFBTUQsT0FBTyxJQUFJLENBQUNFLGtCQUFrQixDQUFDLFNBQUNDO29CQUNwQyxJQUFJSDtvQkFFSixJQUFNSSxlQUFlRCxnQkFDZkUsbUJBQW1CRCxhQUFhRSxtQkFBbUIsSUFDbkRDLHVCQUF1QkYsaUJBQWlCRyxPQUFPLElBQy9DQywwQkFBMEJKLGlCQUFpQkssVUFBVTtvQkFFM0RWLE9BQU9TLHlCQUF5QixHQUFHO29CQUVuQyxJQUFJRix5QkFBeUJJLDhCQUFrQixFQUFFO3dCQUMvQyxJQUFNQyxRQUFRO3dCQUVkWixPQUFPQSxLQUFLYSxTQUFTLENBQUNEO29CQUN4QjtvQkFFQSxJQUFJLEFBQUVFLGFBQWViLFFBQWZhO29CQUVOLElBQU0sQUFBRUMsU0FBV2QsUUFBWGMsUUFDRkMsZUFBZUQsT0FBT0UsTUFBTSxFQUM1QkMsb0JBQW9CSixZQUNwQkssb0JBQW9CSCxlQUFlLEdBQ25DSSx3QkFBd0JMLE9BQU9NLE9BQU8sQ0FBQ2hCLG1CQUN2Q2lCLHFCQUFxQkYsd0JBQXdCLEdBQzdDRyxpQkFBaUJILHdCQUF3QjtvQkFFL0MsSUFBS04sYUFBYVEsb0JBQW9CUixjQUFjSSxtQkFBbUJKLGFBQWM7d0JBQ25GLElBQU1VLFFBQVFULE1BQU0sQ0FBQ0QsV0FBVyxFQUMxQlcsdUJBQXVCRCxNQUFNRSxpQkFBaUI7d0JBRXBELElBQUksQ0FBQ0Qsc0JBQXNCOzRCQUN6Qjt3QkFDRjt3QkFFQSxJQUFNRSx5QkFBeUJILE1BQU1kLFVBQVU7d0JBRS9DVixPQUFPLEFBQUMsR0FBMkJBLE9BQXpCMkIsd0JBQThCLE9BQUwzQjtvQkFDckM7b0JBRUEsSUFBS2MsYUFBYVMsZ0JBQWdCVCxjQUFjSyxtQkFBbUJMLGFBQWM7d0JBQy9FLElBQU1VLFNBQVFULE1BQU0sQ0FBQ0QsV0FBVyxFQUMxQlcsd0JBQXVCRCxPQUFNRSxpQkFBaUI7d0JBRXBELElBQUksQ0FBQ0QsdUJBQXNCOzRCQUN6Qjt3QkFDRjt3QkFFQSxJQUFNRSwwQkFBeUJILE9BQU1kLFVBQVU7d0JBRS9DVixPQUFPLEFBQUMsR0FBUzJCLE9BQVAzQixNQUE4QixPQUF2QjJCO29CQUNuQjtvQkFFQUMsT0FBT0MsTUFBTSxDQUFDNUIsU0FBUzt3QkFDckJhLFlBQUFBO29CQUNGO29CQUVBLE9BQU9kO2dCQUNUO2dCQUVBLE9BQU9BO1lBQ1Q7Ozs7WUFFTzhCLEtBQUFBO21CQUFQLFNBQU9BLDJDQUEyQ0MsS0FBSyxFQUFFQyxRQUFRLEVBQUVDLFVBQVUsRUFBRUMsT0FBTyxFQUFFQyxVQUFVO2dCQUNoRyxJQUFJQSxlQUFlQyxXQUFXO29CQUM1QkQsYUFBYUQsU0FBUyxHQUFHO29CQUV6QkEsVUFBVUQsWUFBWSxHQUFHO29CQUV6QkEsYUFBYUQsVUFBVyxHQUFHO29CQUUzQkEsV0FBV0QsT0FBTyxHQUFHO29CQUVyQkEsUUExRWVoQyxrQkEwRVcsR0FBRztnQkFDL0I7Z0JBRUEsSUFBTXNDLG1CQUFtQkMsaUJBQVksQ0FBQ1IsMENBQTBDLENBQUNDLE9BQU9DLFVBQVVDLFlBQVlDLFNBQVNDO2dCQUV2SCxPQUFPRTtZQUNUOzs7V0FoRm1CdEM7RUFBeUJ1QyxpQkFBWSJ9