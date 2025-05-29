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
                    var tokens = context.tokens, firstSignificantTokenIndex = context.firstSignificantTokenIndex, lastSignificantTokenIndex = context.lastSignificantTokenIndex, whitespaceTokenIndexes = context.whitespaceTokenIndexes, index = tokens.indexOf(significantToken), nextIndex = index + 1, previousIndex = index - 1;
                    if (previousIndex > firstSignificantTokenIndex) {
                        var previousToken = tokens[previousIndex], previousTokenWhitespaceToken = previousToken.isWhitespaceToken();
                        if (previousTokenWhitespaceToken) {
                            var whitespaceTokenIndexesIncludesPreviousIndex = whitespaceTokenIndexes.includes(previousIndex);
                            if (!whitespaceTokenIndexesIncludesPreviousIndex) {
                                var whitespaceToken = previousToken, whitespaceTokenContent = whitespaceToken.getContent(), whitespace = whitespaceTokenContent; ///
                                text = "".concat(whitespace).concat(text);
                                var whitespaceTokenIndex = previousIndex; ///
                                whitespaceTokenIndexes.push(whitespaceTokenIndex);
                            }
                        }
                    }
                    if (nextIndex <= lastSignificantTokenIndex) {
                        var nextToken = tokens[nextIndex], nextTokenWhitespaceToken = nextToken.isWhitespaceToken();
                        if (nextTokenWhitespaceToken) {
                            var whitespaceTokenIndexesIncludesPreviousIndex1 = whitespaceTokenIndexes.includes(nextIndex);
                            if (!whitespaceTokenIndexesIncludesPreviousIndex1) {
                                var whitespaceToken1 = nextToken, whitespaceTokenContent1 = whitespaceToken1.getContent(), whitespace1 = whitespaceTokenContent1; ///
                                text = "".concat(text).concat(whitespace1);
                                var whitespaceTokenIndex1 = nextIndex; ///
                                whitespaceTokenIndexes.push(whitespaceTokenIndex1);
                            }
                        }
                    }
                    return text;
                });
                return text;
            }
        }
    ], [
        {
            key: "fromRuleNameChildNodesAndOpacity",
            value: function fromRuleNameChildNodesAndOpacity(Class, ruleName, childNodes, opacity) {
                if (opacity === undefined) {
                    opacity = childNodes; ///
                    childNodes = ruleName; ///
                    ruleName = Class; ///
                    Class = TextMarkdownNode; ///
                }
                var textMarkdownNode = _markdown.default.fromRuleNameChildNodesAndOpacity(Class, ruleName, childNodes, opacity);
                return textMarkdownNode;
            }
        }
    ]);
    return TextMarkdownNode;
}(_markdown.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL3RleHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBNYXJrZG93bk5vZGUgZnJvbSBcIi4uLy4uL25vZGUvbWFya2Rvd25cIjtcblxuaW1wb3J0IHsgRVNDQVBFRF9UT0tFTl9UWVBFIH0gZnJvbSBcIi4uLy4uL3Rva2VuVHlwZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGV4dE1hcmtkb3duTm9kZSBleHRlbmRzIE1hcmtkb3duTm9kZSB7XG4gIHRleHQoY29udGV4dCkge1xuICAgIGNvbnN0IHRleHQgPSB0aGlzLmZyb21GaXJzdENoaWxkTm9kZSgoZmlyc3RDaGlsZE5vZGUpID0+IHtcbiAgICAgIGxldCB0ZXh0O1xuXG4gICAgICBjb25zdCB0ZXJtaW5hbE5vZGUgPSBmaXJzdENoaWxkTm9kZSwgIC8vL1xuICAgICAgICAgICAgc2lnbmlmaWNhbnRUb2tlbiA9IHRlcm1pbmFsTm9kZS5nZXRTaWduaWZpY2FudFRva2VuKCksXG4gICAgICAgICAgICBzaWduaWZpY2FudFRva2VuVHlwZSA9IHNpZ25pZmljYW50VG9rZW4uZ2V0VHlwZSgpLFxuICAgICAgICAgICAgc2lnbmlmaWNhbnRUb2tlbkNvbnRlbnQgPSBzaWduaWZpY2FudFRva2VuLmdldENvbnRlbnQoKTtcblxuICAgICAgdGV4dCA9IHNpZ25pZmljYW50VG9rZW5Db250ZW50OyAvLy9cblxuICAgICAgaWYgKHNpZ25pZmljYW50VG9rZW5UeXBlID09PSBFU0NBUEVEX1RPS0VOX1RZUEUpIHtcbiAgICAgICAgY29uc3Qgc3RhcnQgPSAxO1xuXG4gICAgICAgIHRleHQgPSB0ZXh0LnN1YnN0cmluZyhzdGFydCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHsgdG9rZW5zLCBmaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleCwgbGFzdFNpZ25pZmljYW50VG9rZW5JbmRleCwgd2hpdGVzcGFjZVRva2VuSW5kZXhlcyB9ID0gY29udGV4dCxcbiAgICAgICAgICAgIGluZGV4ID0gdG9rZW5zLmluZGV4T2Yoc2lnbmlmaWNhbnRUb2tlbiksXG4gICAgICAgICAgICBuZXh0SW5kZXggPSBpbmRleCArIDEsXG4gICAgICAgICAgICBwcmV2aW91c0luZGV4ID0gaW5kZXggLSAxO1xuXG4gICAgICBpZiAocHJldmlvdXNJbmRleCA+IGZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4KSB7XG4gICAgICAgIGNvbnN0IHByZXZpb3VzVG9rZW4gPSB0b2tlbnNbcHJldmlvdXNJbmRleF0sXG4gICAgICAgICAgICAgIHByZXZpb3VzVG9rZW5XaGl0ZXNwYWNlVG9rZW4gPSBwcmV2aW91c1Rva2VuLmlzV2hpdGVzcGFjZVRva2VuKCk7XG5cbiAgICAgICAgaWYgKHByZXZpb3VzVG9rZW5XaGl0ZXNwYWNlVG9rZW4pIHtcbiAgICAgICAgICBjb25zdCB3aGl0ZXNwYWNlVG9rZW5JbmRleGVzSW5jbHVkZXNQcmV2aW91c0luZGV4ID0gd2hpdGVzcGFjZVRva2VuSW5kZXhlcy5pbmNsdWRlcyhwcmV2aW91c0luZGV4KTtcblxuICAgICAgICAgIGlmICghd2hpdGVzcGFjZVRva2VuSW5kZXhlc0luY2x1ZGVzUHJldmlvdXNJbmRleCkge1xuICAgICAgICAgICAgY29uc3Qgd2hpdGVzcGFjZVRva2VuID0gcHJldmlvdXNUb2tlbiwgIC8vL1xuICAgICAgICAgICAgICAgICAgd2hpdGVzcGFjZVRva2VuQ29udGVudCA9IHdoaXRlc3BhY2VUb2tlbi5nZXRDb250ZW50KCksXG4gICAgICAgICAgICAgICAgICB3aGl0ZXNwYWNlID0gd2hpdGVzcGFjZVRva2VuQ29udGVudDsgIC8vL1xuXG4gICAgICAgICAgICB0ZXh0ID0gYCR7d2hpdGVzcGFjZX0ke3RleHR9YDtcblxuICAgICAgICAgICAgY29uc3Qgd2hpdGVzcGFjZVRva2VuSW5kZXggPSBwcmV2aW91c0luZGV4OyAgLy8vXG5cbiAgICAgICAgICAgIHdoaXRlc3BhY2VUb2tlbkluZGV4ZXMucHVzaCh3aGl0ZXNwYWNlVG9rZW5JbmRleCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChuZXh0SW5kZXggPD0gbGFzdFNpZ25pZmljYW50VG9rZW5JbmRleCkge1xuICAgICAgICBjb25zdCBuZXh0VG9rZW4gPSB0b2tlbnNbbmV4dEluZGV4XSxcbiAgICAgICAgICAgICAgbmV4dFRva2VuV2hpdGVzcGFjZVRva2VuID0gbmV4dFRva2VuLmlzV2hpdGVzcGFjZVRva2VuKCk7XG5cbiAgICAgICAgaWYgKG5leHRUb2tlbldoaXRlc3BhY2VUb2tlbikge1xuICAgICAgICAgIGNvbnN0IHdoaXRlc3BhY2VUb2tlbkluZGV4ZXNJbmNsdWRlc1ByZXZpb3VzSW5kZXggPSB3aGl0ZXNwYWNlVG9rZW5JbmRleGVzLmluY2x1ZGVzKG5leHRJbmRleCk7XG5cbiAgICAgICAgICBpZiAoIXdoaXRlc3BhY2VUb2tlbkluZGV4ZXNJbmNsdWRlc1ByZXZpb3VzSW5kZXgpIHtcbiAgICAgICAgICAgIGNvbnN0IHdoaXRlc3BhY2VUb2tlbiA9IG5leHRUb2tlbiwgIC8vL1xuICAgICAgICAgICAgICAgICAgd2hpdGVzcGFjZVRva2VuQ29udGVudCA9IHdoaXRlc3BhY2VUb2tlbi5nZXRDb250ZW50KCksXG4gICAgICAgICAgICAgICAgICB3aGl0ZXNwYWNlID0gd2hpdGVzcGFjZVRva2VuQ29udGVudDsgIC8vL1xuXG4gICAgICAgICAgICB0ZXh0ID0gYCR7dGV4dH0ke3doaXRlc3BhY2V9YDtcblxuICAgICAgICAgICAgY29uc3Qgd2hpdGVzcGFjZVRva2VuSW5kZXggPSBuZXh0SW5kZXg7ICAvLy9cblxuICAgICAgICAgICAgd2hpdGVzcGFjZVRva2VuSW5kZXhlcy5wdXNoKHdoaXRlc3BhY2VUb2tlbkluZGV4KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRleHQ7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGV4dDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eShDbGFzcywgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHkpIHtcbiAgICBpZiAob3BhY2l0eSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBvcGFjaXR5ID0gY2hpbGROb2RlczsgLy8vXG5cbiAgICAgIGNoaWxkTm9kZXMgPSBydWxlTmFtZTsgIC8vL1xuXG4gICAgICBydWxlTmFtZSA9IENsYXNzOyAvLy9cblxuICAgICAgQ2xhc3MgPSBUZXh0TWFya2Rvd25Ob2RlOyAvLy9cbiAgICB9XG5cbiAgICBjb25zdCB0ZXh0TWFya2Rvd25Ob2RlID0gTWFya2Rvd25Ob2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5KENsYXNzLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSk7XG5cbiAgICByZXR1cm4gdGV4dE1hcmtkb3duTm9kZTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlRleHRNYXJrZG93bk5vZGUiLCJ0ZXh0IiwiY29udGV4dCIsImZyb21GaXJzdENoaWxkTm9kZSIsImZpcnN0Q2hpbGROb2RlIiwidGVybWluYWxOb2RlIiwic2lnbmlmaWNhbnRUb2tlbiIsImdldFNpZ25pZmljYW50VG9rZW4iLCJzaWduaWZpY2FudFRva2VuVHlwZSIsImdldFR5cGUiLCJzaWduaWZpY2FudFRva2VuQ29udGVudCIsImdldENvbnRlbnQiLCJFU0NBUEVEX1RPS0VOX1RZUEUiLCJzdGFydCIsInN1YnN0cmluZyIsInRva2VucyIsImZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4IiwibGFzdFNpZ25pZmljYW50VG9rZW5JbmRleCIsIndoaXRlc3BhY2VUb2tlbkluZGV4ZXMiLCJpbmRleCIsImluZGV4T2YiLCJuZXh0SW5kZXgiLCJwcmV2aW91c0luZGV4IiwicHJldmlvdXNUb2tlbiIsInByZXZpb3VzVG9rZW5XaGl0ZXNwYWNlVG9rZW4iLCJpc1doaXRlc3BhY2VUb2tlbiIsIndoaXRlc3BhY2VUb2tlbkluZGV4ZXNJbmNsdWRlc1ByZXZpb3VzSW5kZXgiLCJpbmNsdWRlcyIsIndoaXRlc3BhY2VUb2tlbiIsIndoaXRlc3BhY2VUb2tlbkNvbnRlbnQiLCJ3aGl0ZXNwYWNlIiwid2hpdGVzcGFjZVRva2VuSW5kZXgiLCJwdXNoIiwibmV4dFRva2VuIiwibmV4dFRva2VuV2hpdGVzcGFjZVRva2VuIiwiZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkiLCJDbGFzcyIsInJ1bGVOYW1lIiwiY2hpbGROb2RlcyIsIm9wYWNpdHkiLCJ1bmRlZmluZWQiLCJ0ZXh0TWFya2Rvd25Ob2RlIiwiTWFya2Rvd25Ob2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU1xQkE7OzsrREFKSTswQkFFVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVwQixJQUFBLEFBQU1BLGlDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtlQUFOLGtCQUFNQTs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBLEtBQUtDLE9BQU87Z0JBQ1YsSUFBTUQsT0FBTyxJQUFJLENBQUNFLGtCQUFrQixDQUFDLFNBQUNDO29CQUNwQyxJQUFJSDtvQkFFSixJQUFNSSxlQUFlRCxnQkFDZkUsbUJBQW1CRCxhQUFhRSxtQkFBbUIsSUFDbkRDLHVCQUF1QkYsaUJBQWlCRyxPQUFPLElBQy9DQywwQkFBMEJKLGlCQUFpQkssVUFBVTtvQkFFM0RWLE9BQU9TLHlCQUF5QixHQUFHO29CQUVuQyxJQUFJRix5QkFBeUJJLDhCQUFrQixFQUFFO3dCQUMvQyxJQUFNQyxRQUFRO3dCQUVkWixPQUFPQSxLQUFLYSxTQUFTLENBQUNEO29CQUN4QjtvQkFFQSxJQUFRRSxTQUEwRmIsUUFBMUZhLFFBQVFDLDZCQUFrRmQsUUFBbEZjLDRCQUE0QkMsNEJBQXNEZixRQUF0RGUsMkJBQTJCQyx5QkFBMkJoQixRQUEzQmdCLHdCQUNqRUMsUUFBUUosT0FBT0ssT0FBTyxDQUFDZCxtQkFDdkJlLFlBQVlGLFFBQVEsR0FDcEJHLGdCQUFnQkgsUUFBUTtvQkFFOUIsSUFBSUcsZ0JBQWdCTiw0QkFBNEI7d0JBQzlDLElBQU1PLGdCQUFnQlIsTUFBTSxDQUFDTyxjQUFjLEVBQ3JDRSwrQkFBK0JELGNBQWNFLGlCQUFpQjt3QkFFcEUsSUFBSUQsOEJBQThCOzRCQUNoQyxJQUFNRSw4Q0FBOENSLHVCQUF1QlMsUUFBUSxDQUFDTDs0QkFFcEYsSUFBSSxDQUFDSSw2Q0FBNkM7Z0NBQ2hELElBQU1FLGtCQUFrQkwsZUFDbEJNLHlCQUF5QkQsZ0JBQWdCakIsVUFBVSxJQUNuRG1CLGFBQWFELHdCQUF5QixHQUFHO2dDQUUvQzVCLE9BQU8sQUFBQyxHQUFlQSxPQUFiNkIsWUFBa0IsT0FBTDdCO2dDQUV2QixJQUFNOEIsdUJBQXVCVCxlQUFnQixHQUFHO2dDQUVoREosdUJBQXVCYyxJQUFJLENBQUNEOzRCQUM5Qjt3QkFDRjtvQkFDRjtvQkFFQSxJQUFJVixhQUFhSiwyQkFBMkI7d0JBQzFDLElBQU1nQixZQUFZbEIsTUFBTSxDQUFDTSxVQUFVLEVBQzdCYSwyQkFBMkJELFVBQVVSLGlCQUFpQjt3QkFFNUQsSUFBSVMsMEJBQTBCOzRCQUM1QixJQUFNUiwrQ0FBOENSLHVCQUF1QlMsUUFBUSxDQUFDTjs0QkFFcEYsSUFBSSxDQUFDSyw4Q0FBNkM7Z0NBQ2hELElBQU1FLG1CQUFrQkssV0FDbEJKLDBCQUF5QkQsaUJBQWdCakIsVUFBVSxJQUNuRG1CLGNBQWFELHlCQUF5QixHQUFHO2dDQUUvQzVCLE9BQU8sQUFBQyxHQUFTNkIsT0FBUDdCLE1BQWtCLE9BQVg2QjtnQ0FFakIsSUFBTUMsd0JBQXVCVixXQUFZLEdBQUc7Z0NBRTVDSCx1QkFBdUJjLElBQUksQ0FBQ0Q7NEJBQzlCO3dCQUNGO29CQUNGO29CQUVBLE9BQU85QjtnQkFDVDtnQkFFQSxPQUFPQTtZQUNUOzs7O1lBRU9rQyxLQUFBQTttQkFBUCxTQUFPQSxpQ0FBaUNDLEtBQUssRUFBRUMsUUFBUSxFQUFFQyxVQUFVLEVBQUVDLE9BQU87Z0JBQzFFLElBQUlBLFlBQVlDLFdBQVc7b0JBQ3pCRCxVQUFVRCxZQUFZLEdBQUc7b0JBRXpCQSxhQUFhRCxVQUFXLEdBQUc7b0JBRTNCQSxXQUFXRCxPQUFPLEdBQUc7b0JBRXJCQSxRQS9FZXBDLGtCQStFVyxHQUFHO2dCQUMvQjtnQkFFQSxJQUFNeUMsbUJBQW1CQyxpQkFBWSxDQUFDUCxnQ0FBZ0MsQ0FBQ0MsT0FBT0MsVUFBVUMsWUFBWUM7Z0JBRXBHLE9BQU9FO1lBQ1Q7OztXQXJGbUJ6QztFQUF5QjBDLGlCQUFZIn0=