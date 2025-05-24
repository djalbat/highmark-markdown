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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL3RleHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBNYXJrZG93bk5vZGUgZnJvbSBcIi4uLy4uL25vZGUvbWFya2Rvd25cIjtcblxuaW1wb3J0IHsgRVNDQVBFRF9UT0tFTl9UWVBFIH0gZnJvbSBcIi4uLy4uL3Rva2VuVHlwZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGV4dE1hcmtkb3duTm9kZSBleHRlbmRzIE1hcmtkb3duTm9kZSB7XG4gIHRleHQoY29udGV4dCkge1xuICAgIGNvbnN0IHRleHQgPSB0aGlzLmZyb21GaXJzdENoaWxkTm9kZSgoZmlyc3RDaGlsZE5vZGUpID0+IHtcbiAgICAgIGxldCB0ZXh0O1xuXG4gICAgICBjb25zdCB0ZXJtaW5hbE5vZGUgPSBmaXJzdENoaWxkTm9kZSwgIC8vL1xuICAgICAgICAgICAgc2lnbmlmaWNhbnRUb2tlbiA9IHRlcm1pbmFsTm9kZS5nZXRTaWduaWZpY2FudFRva2VuKCksXG4gICAgICAgICAgICBzaWduaWZpY2FudFRva2VuVHlwZSA9IHNpZ25pZmljYW50VG9rZW4uZ2V0VHlwZSgpLFxuICAgICAgICAgICAgc2lnbmlmaWNhbnRUb2tlbkNvbnRlbnQgPSBzaWduaWZpY2FudFRva2VuLmdldENvbnRlbnQoKTtcblxuICAgICAgdGV4dCA9IHNpZ25pZmljYW50VG9rZW5Db250ZW50OyAvLy9cblxuICAgICAgaWYgKHNpZ25pZmljYW50VG9rZW5UeXBlID09PSBFU0NBUEVEX1RPS0VOX1RZUEUpIHtcbiAgICAgICAgY29uc3Qgc3RhcnQgPSAxO1xuXG4gICAgICAgIHRleHQgPSB0ZXh0LnN1YnN0cmluZyhzdGFydCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHsgdG9rZW5zLCBmaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleCwgbGFzdFNpZ25pZmljYW50VG9rZW5JbmRleCwgd2hpdGVzcGFjZVRva2VuSW5kZXhlcyB9ID0gY29udGV4dCxcbiAgICAgICAgICAgIGluZGV4ID0gdG9rZW5zLmluZGV4T2Yoc2lnbmlmaWNhbnRUb2tlbiksXG4gICAgICAgICAgICBuZXh0SW5kZXggPSBpbmRleCArIDEsXG4gICAgICAgICAgICBwcmV2aW91c0luZGV4ID0gaW5kZXggLSAxO1xuXG4gICAgICBpZiAocHJldmlvdXNJbmRleCA+IGZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4KSB7XG4gICAgICAgIGNvbnN0IHByZXZpb3VzVG9rZW4gPSB0b2tlbnNbcHJldmlvdXNJbmRleF0sXG4gICAgICAgICAgICAgIHByZXZpb3VzVG9rZW5XaGl0ZXNwYWNlVG9rZW4gPSBwcmV2aW91c1Rva2VuLmlzV2hpdGVzcGFjZVRva2VuKCk7XG5cbiAgICAgICAgaWYgKHByZXZpb3VzVG9rZW5XaGl0ZXNwYWNlVG9rZW4pIHtcbiAgICAgICAgICBjb25zdCB3aGl0ZXNwYWNlVG9rZW5JbmRleGVzSW5jbHVkZXNQcmV2aW91c0luZGV4ID0gd2hpdGVzcGFjZVRva2VuSW5kZXhlcy5pbmNsdWRlcyhwcmV2aW91c0luZGV4KTtcblxuICAgICAgICAgIGlmICghd2hpdGVzcGFjZVRva2VuSW5kZXhlc0luY2x1ZGVzUHJldmlvdXNJbmRleCkge1xuICAgICAgICAgICAgY29uc3Qgd2hpdGVzcGFjZVRva2VuID0gcHJldmlvdXNUb2tlbiwgIC8vL1xuICAgICAgICAgICAgICAgICAgd2hpdGVzcGFjZVRva2VuQ29udGVudCA9IHdoaXRlc3BhY2VUb2tlbi5nZXRDb250ZW50KCksXG4gICAgICAgICAgICAgICAgICB3aGl0ZXNwYWNlID0gd2hpdGVzcGFjZVRva2VuQ29udGVudDsgIC8vL1xuXG4gICAgICAgICAgICB0ZXh0ID0gYCR7d2hpdGVzcGFjZX0ke3RleHR9YDtcblxuICAgICAgICAgICAgY29uc3Qgd2hpdGVzcGFjZVRva2VuSW5kZXggPSBwcmV2aW91c0luZGV4OyAgLy8vXG5cbiAgICAgICAgICAgIHdoaXRlc3BhY2VUb2tlbkluZGV4ZXMucHVzaCh3aGl0ZXNwYWNlVG9rZW5JbmRleCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChuZXh0SW5kZXggPCBsYXN0U2lnbmlmaWNhbnRUb2tlbkluZGV4KSB7XG4gICAgICAgIGNvbnN0IG5leHRUb2tlbiA9IHRva2Vuc1tuZXh0SW5kZXhdLFxuICAgICAgICAgICAgICBuZXh0VG9rZW5XaGl0ZXNwYWNlVG9rZW4gPSBuZXh0VG9rZW4uaXNXaGl0ZXNwYWNlVG9rZW4oKTtcblxuICAgICAgICBpZiAobmV4dFRva2VuV2hpdGVzcGFjZVRva2VuKSB7XG4gICAgICAgICAgY29uc3Qgd2hpdGVzcGFjZVRva2VuSW5kZXhlc0luY2x1ZGVzUHJldmlvdXNJbmRleCA9IHdoaXRlc3BhY2VUb2tlbkluZGV4ZXMuaW5jbHVkZXMobmV4dEluZGV4KTtcblxuICAgICAgICAgIGlmICghd2hpdGVzcGFjZVRva2VuSW5kZXhlc0luY2x1ZGVzUHJldmlvdXNJbmRleCkge1xuICAgICAgICAgICAgY29uc3Qgd2hpdGVzcGFjZVRva2VuID0gbmV4dFRva2VuLCAgLy8vXG4gICAgICAgICAgICAgICAgICB3aGl0ZXNwYWNlVG9rZW5Db250ZW50ID0gd2hpdGVzcGFjZVRva2VuLmdldENvbnRlbnQoKSxcbiAgICAgICAgICAgICAgICAgIHdoaXRlc3BhY2UgPSB3aGl0ZXNwYWNlVG9rZW5Db250ZW50OyAgLy8vXG5cbiAgICAgICAgICAgIHRleHQgPSBgJHt0ZXh0fSR7d2hpdGVzcGFjZX1gO1xuXG4gICAgICAgICAgICBjb25zdCB3aGl0ZXNwYWNlVG9rZW5JbmRleCA9IG5leHRJbmRleDsgIC8vL1xuXG4gICAgICAgICAgICB3aGl0ZXNwYWNlVG9rZW5JbmRleGVzLnB1c2god2hpdGVzcGFjZVRva2VuSW5kZXgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGV4dDtcbiAgICB9KTtcblxuICAgIHJldHVybiB0ZXh0O1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5KENsYXNzLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSkge1xuICAgIGlmIChvcGFjaXR5ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIG9wYWNpdHkgPSBjaGlsZE5vZGVzOyAvLy9cblxuICAgICAgY2hpbGROb2RlcyA9IHJ1bGVOYW1lOyAgLy8vXG5cbiAgICAgIHJ1bGVOYW1lID0gQ2xhc3M7IC8vL1xuXG4gICAgICBDbGFzcyA9IFRleHRNYXJrZG93bk5vZGU7IC8vL1xuICAgIH1cblxuICAgIGNvbnN0IHRleHRNYXJrZG93bk5vZGUgPSBNYXJrZG93bk5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkoQ2xhc3MsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5KTtcblxuICAgIHJldHVybiB0ZXh0TWFya2Rvd25Ob2RlO1xuICB9XG59XG4iXSwibmFtZXMiOlsiVGV4dE1hcmtkb3duTm9kZSIsInRleHQiLCJjb250ZXh0IiwiZnJvbUZpcnN0Q2hpbGROb2RlIiwiZmlyc3RDaGlsZE5vZGUiLCJ0ZXJtaW5hbE5vZGUiLCJzaWduaWZpY2FudFRva2VuIiwiZ2V0U2lnbmlmaWNhbnRUb2tlbiIsInNpZ25pZmljYW50VG9rZW5UeXBlIiwiZ2V0VHlwZSIsInNpZ25pZmljYW50VG9rZW5Db250ZW50IiwiZ2V0Q29udGVudCIsIkVTQ0FQRURfVE9LRU5fVFlQRSIsInN0YXJ0Iiwic3Vic3RyaW5nIiwidG9rZW5zIiwiZmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXgiLCJsYXN0U2lnbmlmaWNhbnRUb2tlbkluZGV4Iiwid2hpdGVzcGFjZVRva2VuSW5kZXhlcyIsImluZGV4IiwiaW5kZXhPZiIsIm5leHRJbmRleCIsInByZXZpb3VzSW5kZXgiLCJwcmV2aW91c1Rva2VuIiwicHJldmlvdXNUb2tlbldoaXRlc3BhY2VUb2tlbiIsImlzV2hpdGVzcGFjZVRva2VuIiwid2hpdGVzcGFjZVRva2VuSW5kZXhlc0luY2x1ZGVzUHJldmlvdXNJbmRleCIsImluY2x1ZGVzIiwid2hpdGVzcGFjZVRva2VuIiwid2hpdGVzcGFjZVRva2VuQ29udGVudCIsIndoaXRlc3BhY2UiLCJ3aGl0ZXNwYWNlVG9rZW5JbmRleCIsInB1c2giLCJuZXh0VG9rZW4iLCJuZXh0VG9rZW5XaGl0ZXNwYWNlVG9rZW4iLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eSIsIkNsYXNzIiwicnVsZU5hbWUiLCJjaGlsZE5vZGVzIiwib3BhY2l0eSIsInVuZGVmaW5lZCIsInRleHRNYXJrZG93bk5vZGUiLCJNYXJrZG93bk5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBTXFCQTs7OytEQUpJOzBCQUVVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXBCLElBQUEsQUFBTUEsaUNBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO2VBQU4sa0JBQU1BOztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUEsS0FBS0MsT0FBTztnQkFDVixJQUFNRCxPQUFPLElBQUksQ0FBQ0Usa0JBQWtCLENBQUMsU0FBQ0M7b0JBQ3BDLElBQUlIO29CQUVKLElBQU1JLGVBQWVELGdCQUNmRSxtQkFBbUJELGFBQWFFLG1CQUFtQixJQUNuREMsdUJBQXVCRixpQkFBaUJHLE9BQU8sSUFDL0NDLDBCQUEwQkosaUJBQWlCSyxVQUFVO29CQUUzRFYsT0FBT1MseUJBQXlCLEdBQUc7b0JBRW5DLElBQUlGLHlCQUF5QkksOEJBQWtCLEVBQUU7d0JBQy9DLElBQU1DLFFBQVE7d0JBRWRaLE9BQU9BLEtBQUthLFNBQVMsQ0FBQ0Q7b0JBQ3hCO29CQUVBLElBQVFFLFNBQTBGYixRQUExRmEsUUFBUUMsNkJBQWtGZCxRQUFsRmMsNEJBQTRCQyw0QkFBc0RmLFFBQXREZSwyQkFBMkJDLHlCQUEyQmhCLFFBQTNCZ0Isd0JBQ2pFQyxRQUFRSixPQUFPSyxPQUFPLENBQUNkLG1CQUN2QmUsWUFBWUYsUUFBUSxHQUNwQkcsZ0JBQWdCSCxRQUFRO29CQUU5QixJQUFJRyxnQkFBZ0JOLDRCQUE0Qjt3QkFDOUMsSUFBTU8sZ0JBQWdCUixNQUFNLENBQUNPLGNBQWMsRUFDckNFLCtCQUErQkQsY0FBY0UsaUJBQWlCO3dCQUVwRSxJQUFJRCw4QkFBOEI7NEJBQ2hDLElBQU1FLDhDQUE4Q1IsdUJBQXVCUyxRQUFRLENBQUNMOzRCQUVwRixJQUFJLENBQUNJLDZDQUE2QztnQ0FDaEQsSUFBTUUsa0JBQWtCTCxlQUNsQk0seUJBQXlCRCxnQkFBZ0JqQixVQUFVLElBQ25EbUIsYUFBYUQsd0JBQXlCLEdBQUc7Z0NBRS9DNUIsT0FBTyxBQUFDLEdBQWVBLE9BQWI2QixZQUFrQixPQUFMN0I7Z0NBRXZCLElBQU04Qix1QkFBdUJULGVBQWdCLEdBQUc7Z0NBRWhESix1QkFBdUJjLElBQUksQ0FBQ0Q7NEJBQzlCO3dCQUNGO29CQUNGO29CQUVBLElBQUlWLFlBQVlKLDJCQUEyQjt3QkFDekMsSUFBTWdCLFlBQVlsQixNQUFNLENBQUNNLFVBQVUsRUFDN0JhLDJCQUEyQkQsVUFBVVIsaUJBQWlCO3dCQUU1RCxJQUFJUywwQkFBMEI7NEJBQzVCLElBQU1SLCtDQUE4Q1IsdUJBQXVCUyxRQUFRLENBQUNOOzRCQUVwRixJQUFJLENBQUNLLDhDQUE2QztnQ0FDaEQsSUFBTUUsbUJBQWtCSyxXQUNsQkosMEJBQXlCRCxpQkFBZ0JqQixVQUFVLElBQ25EbUIsY0FBYUQseUJBQXlCLEdBQUc7Z0NBRS9DNUIsT0FBTyxBQUFDLEdBQVM2QixPQUFQN0IsTUFBa0IsT0FBWDZCO2dDQUVqQixJQUFNQyx3QkFBdUJWLFdBQVksR0FBRztnQ0FFNUNILHVCQUF1QmMsSUFBSSxDQUFDRDs0QkFDOUI7d0JBQ0Y7b0JBQ0Y7b0JBRUEsT0FBTzlCO2dCQUNUO2dCQUVBLE9BQU9BO1lBQ1Q7Ozs7WUFFT2tDLEtBQUFBO21CQUFQLFNBQU9BLGlDQUFpQ0MsS0FBSyxFQUFFQyxRQUFRLEVBQUVDLFVBQVUsRUFBRUMsT0FBTztnQkFDMUUsSUFBSUEsWUFBWUMsV0FBVztvQkFDekJELFVBQVVELFlBQVksR0FBRztvQkFFekJBLGFBQWFELFVBQVcsR0FBRztvQkFFM0JBLFdBQVdELE9BQU8sR0FBRztvQkFFckJBLFFBL0VlcEMsa0JBK0VXLEdBQUc7Z0JBQy9CO2dCQUVBLElBQU15QyxtQkFBbUJDLGlCQUFZLENBQUNQLGdDQUFnQyxDQUFDQyxPQUFPQyxVQUFVQyxZQUFZQztnQkFFcEcsT0FBT0U7WUFDVDs7O1dBckZtQnpDO0VBQXlCMEMsaUJBQVkifQ==