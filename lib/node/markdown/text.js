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
                    if (nextIndex < lastSignificantTokenIndex) {
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
                return _markdown.default.fromRuleNameChildNodesAndOpacity(Class, ruleName, childNodes, opacity);
            }
        }
    ]);
    return TextMarkdownNode;
}(_markdown.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL3RleHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBNYXJrZG93bk5vZGUgZnJvbSBcIi4uLy4uL25vZGUvbWFya2Rvd25cIjtcblxuaW1wb3J0IHsgRVNDQVBFRF9UT0tFTl9UWVBFIH0gZnJvbSBcIi4uLy4uL3Rva2VuVHlwZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGV4dE1hcmtkb3duTm9kZSBleHRlbmRzIE1hcmtkb3duTm9kZSB7XG4gIHRleHQoY29udGV4dCkge1xuICAgIGNvbnN0IHRleHQgPSB0aGlzLmZyb21GaXJzdENoaWxkTm9kZSgoZmlyc3RDaGlsZE5vZGUpID0+IHtcbiAgICAgIGxldCB0ZXh0O1xuXG4gICAgICBjb25zdCB0ZXJtaW5hbE5vZGUgPSBmaXJzdENoaWxkTm9kZSwgIC8vL1xuICAgICAgICAgICAgc2lnbmlmaWNhbnRUb2tlbiA9IHRlcm1pbmFsTm9kZS5nZXRTaWduaWZpY2FudFRva2VuKCksXG4gICAgICAgICAgICBzaWduaWZpY2FudFRva2VuVHlwZSA9IHNpZ25pZmljYW50VG9rZW4uZ2V0VHlwZSgpLFxuICAgICAgICAgICAgc2lnbmlmaWNhbnRUb2tlbkNvbnRlbnQgPSBzaWduaWZpY2FudFRva2VuLmdldENvbnRlbnQoKTtcblxuICAgICAgdGV4dCA9IHNpZ25pZmljYW50VG9rZW5Db250ZW50OyAvLy9cblxuICAgICAgaWYgKHNpZ25pZmljYW50VG9rZW5UeXBlID09PSBFU0NBUEVEX1RPS0VOX1RZUEUpIHtcbiAgICAgICAgY29uc3Qgc3RhcnQgPSAxO1xuXG4gICAgICAgIHRleHQgPSB0ZXh0LnN1YnN0cmluZyhzdGFydCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHsgdG9rZW5zLCBmaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleCwgbGFzdFNpZ25pZmljYW50VG9rZW5JbmRleCwgd2hpdGVzcGFjZVRva2VuSW5kZXhlcyB9ID0gY29udGV4dCxcbiAgICAgICAgICAgIGluZGV4ID0gdG9rZW5zLmluZGV4T2Yoc2lnbmlmaWNhbnRUb2tlbiksXG4gICAgICAgICAgICBuZXh0SW5kZXggPSBpbmRleCArIDEsXG4gICAgICAgICAgICBwcmV2aW91c0luZGV4ID0gaW5kZXggLSAxO1xuXG4gICAgICBpZiAocHJldmlvdXNJbmRleCA+IGZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4KSB7XG4gICAgICAgIGNvbnN0IHByZXZpb3VzVG9rZW4gPSB0b2tlbnNbcHJldmlvdXNJbmRleF0sXG4gICAgICAgICAgICAgIHByZXZpb3VzVG9rZW5XaGl0ZXNwYWNlVG9rZW4gPSBwcmV2aW91c1Rva2VuLmlzV2hpdGVzcGFjZVRva2VuKCk7XG5cbiAgICAgICAgaWYgKHByZXZpb3VzVG9rZW5XaGl0ZXNwYWNlVG9rZW4pIHtcbiAgICAgICAgICBjb25zdCB3aGl0ZXNwYWNlVG9rZW5JbmRleGVzSW5jbHVkZXNQcmV2aW91c0luZGV4ID0gd2hpdGVzcGFjZVRva2VuSW5kZXhlcy5pbmNsdWRlcyhwcmV2aW91c0luZGV4KTtcblxuICAgICAgICAgIGlmICghd2hpdGVzcGFjZVRva2VuSW5kZXhlc0luY2x1ZGVzUHJldmlvdXNJbmRleCkge1xuICAgICAgICAgICAgY29uc3Qgd2hpdGVzcGFjZVRva2VuID0gcHJldmlvdXNUb2tlbiwgIC8vL1xuICAgICAgICAgICAgICAgICAgd2hpdGVzcGFjZVRva2VuQ29udGVudCA9IHdoaXRlc3BhY2VUb2tlbi5nZXRDb250ZW50KCksXG4gICAgICAgICAgICAgICAgICB3aGl0ZXNwYWNlID0gd2hpdGVzcGFjZVRva2VuQ29udGVudDsgIC8vL1xuXG4gICAgICAgICAgICB0ZXh0ID0gYCR7d2hpdGVzcGFjZX0ke3RleHR9YDtcblxuICAgICAgICAgICAgY29uc3Qgd2hpdGVzcGFjZVRva2VuSW5kZXggPSBwcmV2aW91c0luZGV4OyAgLy8vXG5cbiAgICAgICAgICAgIHdoaXRlc3BhY2VUb2tlbkluZGV4ZXMucHVzaCh3aGl0ZXNwYWNlVG9rZW5JbmRleCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChuZXh0SW5kZXggPCBsYXN0U2lnbmlmaWNhbnRUb2tlbkluZGV4KSB7XG4gICAgICAgIGNvbnN0IG5leHRUb2tlbiA9IHRva2Vuc1tuZXh0SW5kZXhdLFxuICAgICAgICAgICAgICBuZXh0VG9rZW5XaGl0ZXNwYWNlVG9rZW4gPSBuZXh0VG9rZW4uaXNXaGl0ZXNwYWNlVG9rZW4oKTtcblxuICAgICAgICBpZiAobmV4dFRva2VuV2hpdGVzcGFjZVRva2VuKSB7XG4gICAgICAgICAgY29uc3Qgd2hpdGVzcGFjZVRva2VuSW5kZXhlc0luY2x1ZGVzUHJldmlvdXNJbmRleCA9IHdoaXRlc3BhY2VUb2tlbkluZGV4ZXMuaW5jbHVkZXMobmV4dEluZGV4KTtcblxuICAgICAgICAgIGlmICghd2hpdGVzcGFjZVRva2VuSW5kZXhlc0luY2x1ZGVzUHJldmlvdXNJbmRleCkge1xuICAgICAgICAgICAgY29uc3Qgd2hpdGVzcGFjZVRva2VuID0gbmV4dFRva2VuLCAgLy8vXG4gICAgICAgICAgICAgICAgICB3aGl0ZXNwYWNlVG9rZW5Db250ZW50ID0gd2hpdGVzcGFjZVRva2VuLmdldENvbnRlbnQoKSxcbiAgICAgICAgICAgICAgICAgIHdoaXRlc3BhY2UgPSB3aGl0ZXNwYWNlVG9rZW5Db250ZW50OyAgLy8vXG5cbiAgICAgICAgICAgIHRleHQgPSBgJHt0ZXh0fSR7d2hpdGVzcGFjZX1gO1xuXG4gICAgICAgICAgICBjb25zdCB3aGl0ZXNwYWNlVG9rZW5JbmRleCA9IG5leHRJbmRleDsgIC8vL1xuXG4gICAgICAgICAgICB3aGl0ZXNwYWNlVG9rZW5JbmRleGVzLnB1c2god2hpdGVzcGFjZVRva2VuSW5kZXgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGV4dDtcbiAgICB9KTtcblxuICAgIHJldHVybiB0ZXh0O1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5KENsYXNzLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSkgeyByZXR1cm4gTWFya2Rvd25Ob2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5KENsYXNzLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSk7IH1cbn1cbiJdLCJuYW1lcyI6WyJUZXh0TWFya2Rvd25Ob2RlIiwidGV4dCIsImNvbnRleHQiLCJmcm9tRmlyc3RDaGlsZE5vZGUiLCJmaXJzdENoaWxkTm9kZSIsInRlcm1pbmFsTm9kZSIsInNpZ25pZmljYW50VG9rZW4iLCJnZXRTaWduaWZpY2FudFRva2VuIiwic2lnbmlmaWNhbnRUb2tlblR5cGUiLCJnZXRUeXBlIiwic2lnbmlmaWNhbnRUb2tlbkNvbnRlbnQiLCJnZXRDb250ZW50IiwiRVNDQVBFRF9UT0tFTl9UWVBFIiwic3RhcnQiLCJzdWJzdHJpbmciLCJ0b2tlbnMiLCJmaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleCIsImxhc3RTaWduaWZpY2FudFRva2VuSW5kZXgiLCJ3aGl0ZXNwYWNlVG9rZW5JbmRleGVzIiwiaW5kZXgiLCJpbmRleE9mIiwibmV4dEluZGV4IiwicHJldmlvdXNJbmRleCIsInByZXZpb3VzVG9rZW4iLCJwcmV2aW91c1Rva2VuV2hpdGVzcGFjZVRva2VuIiwiaXNXaGl0ZXNwYWNlVG9rZW4iLCJ3aGl0ZXNwYWNlVG9rZW5JbmRleGVzSW5jbHVkZXNQcmV2aW91c0luZGV4IiwiaW5jbHVkZXMiLCJ3aGl0ZXNwYWNlVG9rZW4iLCJ3aGl0ZXNwYWNlVG9rZW5Db250ZW50Iiwid2hpdGVzcGFjZSIsIndoaXRlc3BhY2VUb2tlbkluZGV4IiwicHVzaCIsIm5leHRUb2tlbiIsIm5leHRUb2tlbldoaXRlc3BhY2VUb2tlbiIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5IiwiQ2xhc3MiLCJydWxlTmFtZSIsImNoaWxkTm9kZXMi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