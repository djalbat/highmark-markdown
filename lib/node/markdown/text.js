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
var _constants = require("../../constants");
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
                var tokens = context.tokens;
                var whitespaceTokenIndex = context.whitespaceTokenIndex;
                var text = this.fromFirstChildNode(function(firstChildNode) {
                    var text = _constants.EMPTY_STRING;
                    var terminalNode = firstChildNode, significantToken = terminalNode.getSignificantToken(), significantTokenIndex = tokens.indexOf(significantToken), previousTokenIndex = significantTokenIndex - 1;
                    if (previousTokenIndex > -1) {
                        var previousToken = tokens[previousTokenIndex], previousTokenWhitespaceToken = previousToken.isWhitespaceToken();
                        if (previousTokenWhitespaceToken) {
                            if (previousTokenIndex > whitespaceTokenIndex) {
                                var whitespaceToken = previousToken, whitespaceTokenContent = whitespaceToken.getContent();
                                text = "".concat(text).concat(whitespaceTokenContent);
                                whitespaceTokenIndex = previousTokenIndex; ///
                            }
                        }
                    }
                    var significantTokenContent = significantToken.getContent();
                    var significantTokenType = significantToken.getType();
                    if (significantTokenType === _tokenTypes.ESCAPED_TOKEN_TYPE) {
                        var start = 1;
                        significantTokenContent = significantTokenContent.substring(start);
                    }
                    text = "".concat(text).concat(significantTokenContent);
                    var tokensLength = tokens.length, nextTokenIndex = significantTokenIndex + 1;
                    if (nextTokenIndex < tokensLength) {
                        var nextToken = tokens[nextTokenIndex], nextTokenWhitespaceToken = nextToken.isWhitespaceToken();
                        if (nextTokenWhitespaceToken) {
                            if (nextTokenIndex > whitespaceTokenIndex) {
                                var whitespaceToken1 = nextToken, whitespaceTokenContent1 = whitespaceToken1.getContent();
                                text = "".concat(text).concat(whitespaceTokenContent1);
                                whitespaceTokenIndex = nextTokenIndex; ///
                            }
                        }
                    }
                    return text;
                });
                Object.assign(context, {
                    whitespaceTokenIndex: whitespaceTokenIndex
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL3RleHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBNYXJrZG93bk5vZGUgZnJvbSBcIi4uLy4uL25vZGUvbWFya2Rvd25cIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgRVNDQVBFRF9UT0tFTl9UWVBFIH0gZnJvbSBcIi4uLy4uL3Rva2VuVHlwZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGV4dE1hcmtkb3duTm9kZSBleHRlbmRzIE1hcmtkb3duTm9kZSB7XG4gIHRleHQoY29udGV4dCkge1xuICAgIGNvbnN0IHsgdG9rZW5zIH0gPSBjb250ZXh0O1xuXG4gICAgbGV0IHsgd2hpdGVzcGFjZVRva2VuSW5kZXggfSA9IGNvbnRleHQ7XG5cbiAgICBjb25zdCB0ZXh0ID0gdGhpcy5mcm9tRmlyc3RDaGlsZE5vZGUoKGZpcnN0Q2hpbGROb2RlKSA9PiB7XG4gICAgICBsZXQgdGV4dCA9IEVNUFRZX1NUUklORztcblxuICAgICAgY29uc3QgdGVybWluYWxOb2RlID0gZmlyc3RDaGlsZE5vZGUsICAvLy9cbiAgICAgICAgICAgIHNpZ25pZmljYW50VG9rZW4gPSB0ZXJtaW5hbE5vZGUuZ2V0U2lnbmlmaWNhbnRUb2tlbigpLFxuICAgICAgICAgICAgc2lnbmlmaWNhbnRUb2tlbkluZGV4ID0gdG9rZW5zLmluZGV4T2Yoc2lnbmlmaWNhbnRUb2tlbiksXG4gICAgICAgICAgICBwcmV2aW91c1Rva2VuSW5kZXggPSBzaWduaWZpY2FudFRva2VuSW5kZXggLSAxO1xuXG4gICAgICBpZiAocHJldmlvdXNUb2tlbkluZGV4ID4gLTEpIHtcbiAgICAgICAgY29uc3QgcHJldmlvdXNUb2tlbiA9IHRva2Vuc1twcmV2aW91c1Rva2VuSW5kZXhdLFxuICAgICAgICAgICAgICBwcmV2aW91c1Rva2VuV2hpdGVzcGFjZVRva2VuID0gcHJldmlvdXNUb2tlbi5pc1doaXRlc3BhY2VUb2tlbigpO1xuXG4gICAgICAgIGlmIChwcmV2aW91c1Rva2VuV2hpdGVzcGFjZVRva2VuKSB7XG4gICAgICAgICAgaWYgKHByZXZpb3VzVG9rZW5JbmRleCA+IHdoaXRlc3BhY2VUb2tlbkluZGV4KSB7XG4gICAgICAgICAgICBjb25zdCB3aGl0ZXNwYWNlVG9rZW4gPSBwcmV2aW91c1Rva2VuLCAgLy8vXG4gICAgICAgICAgICAgICAgICB3aGl0ZXNwYWNlVG9rZW5Db250ZW50ID0gd2hpdGVzcGFjZVRva2VuLmdldENvbnRlbnQoKTtcblxuICAgICAgICAgICAgdGV4dCA9IGAke3RleHR9JHt3aGl0ZXNwYWNlVG9rZW5Db250ZW50fWA7XG5cbiAgICAgICAgICAgIHdoaXRlc3BhY2VUb2tlbkluZGV4ID0gcHJldmlvdXNUb2tlbkluZGV4OyAgLy8vXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxldCBzaWduaWZpY2FudFRva2VuQ29udGVudCA9IHNpZ25pZmljYW50VG9rZW4uZ2V0Q29udGVudCgpO1xuXG4gICAgICBjb25zdCBzaWduaWZpY2FudFRva2VuVHlwZSA9IHNpZ25pZmljYW50VG9rZW4uZ2V0VHlwZSgpO1xuXG4gICAgICBpZiAoc2lnbmlmaWNhbnRUb2tlblR5cGUgPT09IEVTQ0FQRURfVE9LRU5fVFlQRSkge1xuICAgICAgICBjb25zdCBzdGFydCA9IDE7XG5cbiAgICAgICAgc2lnbmlmaWNhbnRUb2tlbkNvbnRlbnQgPSBzaWduaWZpY2FudFRva2VuQ29udGVudC5zdWJzdHJpbmcoc3RhcnQpO1xuICAgICAgfVxuXG4gICAgICB0ZXh0ID0gYCR7dGV4dH0ke3NpZ25pZmljYW50VG9rZW5Db250ZW50fWA7XG5cbiAgICAgIGNvbnN0IHRva2Vuc0xlbmd0aCA9IHRva2Vucy5sZW5ndGgsXG4gICAgICAgICAgICBuZXh0VG9rZW5JbmRleCA9IHNpZ25pZmljYW50VG9rZW5JbmRleCArIDE7XG5cbiAgICAgIGlmIChuZXh0VG9rZW5JbmRleCA8IHRva2Vuc0xlbmd0aCkge1xuICAgICAgICBjb25zdCBuZXh0VG9rZW4gPSB0b2tlbnNbbmV4dFRva2VuSW5kZXhdLFxuICAgICAgICAgICAgICBuZXh0VG9rZW5XaGl0ZXNwYWNlVG9rZW4gPSBuZXh0VG9rZW4uaXNXaGl0ZXNwYWNlVG9rZW4oKTtcblxuICAgICAgICBpZiAobmV4dFRva2VuV2hpdGVzcGFjZVRva2VuKSB7XG4gICAgICAgICAgaWYgKG5leHRUb2tlbkluZGV4ID4gd2hpdGVzcGFjZVRva2VuSW5kZXgpIHtcbiAgICAgICAgICAgIGNvbnN0IHdoaXRlc3BhY2VUb2tlbiA9IG5leHRUb2tlbiwgIC8vL1xuICAgICAgICAgICAgICAgICAgd2hpdGVzcGFjZVRva2VuQ29udGVudCA9IHdoaXRlc3BhY2VUb2tlbi5nZXRDb250ZW50KCk7XG5cbiAgICAgICAgICAgIHRleHQgPSBgJHt0ZXh0fSR7d2hpdGVzcGFjZVRva2VuQ29udGVudH1gO1xuXG4gICAgICAgICAgICB3aGl0ZXNwYWNlVG9rZW5JbmRleCA9IG5leHRUb2tlbkluZGV4OyAgLy8vXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0ZXh0O1xuICAgIH0pO1xuXG4gICAgT2JqZWN0LmFzc2lnbihjb250ZXh0LCB7XG4gICAgICB3aGl0ZXNwYWNlVG9rZW5JbmRleFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRleHQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkoQ2xhc3MsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5KSB7IHJldHVybiBNYXJrZG93bk5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkoQ2xhc3MsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5KTsgfVxufVxuIl0sIm5hbWVzIjpbIlRleHRNYXJrZG93bk5vZGUiLCJ0ZXh0IiwiY29udGV4dCIsInRva2VucyIsIndoaXRlc3BhY2VUb2tlbkluZGV4IiwiZnJvbUZpcnN0Q2hpbGROb2RlIiwiZmlyc3RDaGlsZE5vZGUiLCJFTVBUWV9TVFJJTkciLCJ0ZXJtaW5hbE5vZGUiLCJzaWduaWZpY2FudFRva2VuIiwiZ2V0U2lnbmlmaWNhbnRUb2tlbiIsInNpZ25pZmljYW50VG9rZW5JbmRleCIsImluZGV4T2YiLCJwcmV2aW91c1Rva2VuSW5kZXgiLCJwcmV2aW91c1Rva2VuIiwicHJldmlvdXNUb2tlbldoaXRlc3BhY2VUb2tlbiIsImlzV2hpdGVzcGFjZVRva2VuIiwid2hpdGVzcGFjZVRva2VuIiwid2hpdGVzcGFjZVRva2VuQ29udGVudCIsImdldENvbnRlbnQiLCJzaWduaWZpY2FudFRva2VuQ29udGVudCIsInNpZ25pZmljYW50VG9rZW5UeXBlIiwiZ2V0VHlwZSIsIkVTQ0FQRURfVE9LRU5fVFlQRSIsInN0YXJ0Iiwic3Vic3RyaW5nIiwidG9rZW5zTGVuZ3RoIiwibGVuZ3RoIiwibmV4dFRva2VuSW5kZXgiLCJuZXh0VG9rZW4iLCJuZXh0VG9rZW5XaGl0ZXNwYWNlVG9rZW4iLCJPYmplY3QiLCJhc3NpZ24iLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eSIsIkNsYXNzIiwicnVsZU5hbWUiLCJjaGlsZE5vZGVzIiwib3BhY2l0eSIsIk1hcmtkb3duTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFPcUJBOzs7K0RBTEk7eUJBRUk7MEJBQ007Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFcEIsSUFBQSxBQUFNQSxpQ0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7ZUFBTixrQkFBTUE7O2tCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQSxLQUFLQyxPQUFPO2dCQUNWLElBQU0sQUFBRUMsU0FBV0QsUUFBWEM7Z0JBRVIsSUFBSSxBQUFFQyx1QkFBeUJGLFFBQXpCRTtnQkFFTixJQUFNSCxPQUFPLElBQUksQ0FBQ0ksa0JBQWtCLENBQUMsU0FBQ0M7b0JBQ3BDLElBQUlMLE9BQU9NLHVCQUFZO29CQUV2QixJQUFNQyxlQUFlRixnQkFDZkcsbUJBQW1CRCxhQUFhRSxtQkFBbUIsSUFDbkRDLHdCQUF3QlIsT0FBT1MsT0FBTyxDQUFDSCxtQkFDdkNJLHFCQUFxQkYsd0JBQXdCO29CQUVuRCxJQUFJRSxxQkFBcUIsQ0FBQyxHQUFHO3dCQUMzQixJQUFNQyxnQkFBZ0JYLE1BQU0sQ0FBQ1UsbUJBQW1CLEVBQzFDRSwrQkFBK0JELGNBQWNFLGlCQUFpQjt3QkFFcEUsSUFBSUQsOEJBQThCOzRCQUNoQyxJQUFJRixxQkFBcUJULHNCQUFzQjtnQ0FDN0MsSUFBTWEsa0JBQWtCSCxlQUNsQkkseUJBQXlCRCxnQkFBZ0JFLFVBQVU7Z0NBRXpEbEIsT0FBTyxBQUFDLEdBQVNpQixPQUFQakIsTUFBOEIsT0FBdkJpQjtnQ0FFakJkLHVCQUF1QlMsb0JBQXFCLEdBQUc7NEJBQ2pEO3dCQUNGO29CQUNGO29CQUVBLElBQUlPLDBCQUEwQlgsaUJBQWlCVSxVQUFVO29CQUV6RCxJQUFNRSx1QkFBdUJaLGlCQUFpQmEsT0FBTztvQkFFckQsSUFBSUQseUJBQXlCRSw4QkFBa0IsRUFBRTt3QkFDL0MsSUFBTUMsUUFBUTt3QkFFZEosMEJBQTBCQSx3QkFBd0JLLFNBQVMsQ0FBQ0Q7b0JBQzlEO29CQUVBdkIsT0FBTyxBQUFDLEdBQVNtQixPQUFQbkIsTUFBK0IsT0FBeEJtQjtvQkFFakIsSUFBTU0sZUFBZXZCLE9BQU93QixNQUFNLEVBQzVCQyxpQkFBaUJqQix3QkFBd0I7b0JBRS9DLElBQUlpQixpQkFBaUJGLGNBQWM7d0JBQ2pDLElBQU1HLFlBQVkxQixNQUFNLENBQUN5QixlQUFlLEVBQ2xDRSwyQkFBMkJELFVBQVViLGlCQUFpQjt3QkFFNUQsSUFBSWMsMEJBQTBCOzRCQUM1QixJQUFJRixpQkFBaUJ4QixzQkFBc0I7Z0NBQ3pDLElBQU1hLG1CQUFrQlksV0FDbEJYLDBCQUF5QkQsaUJBQWdCRSxVQUFVO2dDQUV6RGxCLE9BQU8sQUFBQyxHQUFTaUIsT0FBUGpCLE1BQThCLE9BQXZCaUI7Z0NBRWpCZCx1QkFBdUJ3QixnQkFBaUIsR0FBRzs0QkFDN0M7d0JBQ0Y7b0JBQ0Y7b0JBRUEsT0FBTzNCO2dCQUNUO2dCQUVBOEIsT0FBT0MsTUFBTSxDQUFDOUIsU0FBUztvQkFDckJFLHNCQUFBQTtnQkFDRjtnQkFFQSxPQUFPSDtZQUNUOzs7O1lBRU9nQyxLQUFBQTttQkFBUCxTQUFPQSxpQ0FBaUNDLEtBQUssRUFBRUMsUUFBUSxFQUFFQyxVQUFVLEVBQUVDLE9BQU87Z0JBQUksT0FBT0MsaUJBQVksQ0FBQ0wsZ0NBQWdDLENBQUNDLE9BQU9DLFVBQVVDLFlBQVlDO1lBQVU7OztXQXZFekpyQztFQUF5QnNDLGlCQUFZIn0=