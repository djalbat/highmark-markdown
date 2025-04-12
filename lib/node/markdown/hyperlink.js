"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return HyperlinkLinkMarkdownNode;
    }
});
var _markdown = /*#__PURE__*/ _interop_require_default(require("../../node/markdown"));
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
var HyperlinkLinkMarkdownNode = /*#__PURE__*/ function(MarkdownNode) {
    _inherits(HyperlinkLinkMarkdownNode, MarkdownNode);
    function HyperlinkLinkMarkdownNode() {
        _class_call_check(this, HyperlinkLinkMarkdownNode);
        return _call_super(this, HyperlinkLinkMarkdownNode, arguments);
    }
    _create_class(HyperlinkLinkMarkdownNode, [
        {
            key: "url",
            value: function url(context) {
                var multiplicity = this.getMultiplicity();
                var urlTerminalNode;
                if (multiplicity === 1) {
                    urlTerminalNode = this.fromFirstChildNode(function(firstChildNode) {
                        var urlTerminalNode = firstChildNode; ///
                        return urlTerminalNode;
                    });
                } else {
                    urlTerminalNode = this.fromSecondLastChildNode(function(secondLastChildNode) {
                        var urlTerminalNode = secondLastChildNode; ///
                        return urlTerminalNode;
                    });
                }
                var urlTerminalNodeContent = urlTerminalNode.getContent(), url = urlTerminalNodeContent; ///
                return url;
            }
        }
    ], [
        {
            key: "fromRuleNameChildNodesAndOpacity",
            value: function fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) {
                return _markdown.default.fromRuleNameChildNodesAndOpacity(HyperlinkLinkMarkdownNode, ruleName, childNodes, opacity);
            }
        }
    ]);
    return HyperlinkLinkMarkdownNode;
}(_markdown.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2h5cGVybGluay5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE1hcmtkb3duTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9tYXJrZG93blwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIeXBlcmxpbmtMaW5rTWFya2Rvd25Ob2RlIGV4dGVuZHMgTWFya2Rvd25Ob2RlIHtcbiAgdXJsKGNvbnRleHQpIHtcbiAgICBjb25zdCBtdWx0aXBsaWNpdHkgPSB0aGlzLmdldE11bHRpcGxpY2l0eSgpO1xuXG4gICAgbGV0IHVybFRlcm1pbmFsTm9kZTtcblxuICAgIGlmIChtdWx0aXBsaWNpdHkgPT09IDEpIHtcbiAgICAgIHVybFRlcm1pbmFsTm9kZSA9IHRoaXMuZnJvbUZpcnN0Q2hpbGROb2RlKChmaXJzdENoaWxkTm9kZSkgPT4ge1xuICAgICAgICBjb25zdCB1cmxUZXJtaW5hbE5vZGUgPSBmaXJzdENoaWxkTm9kZTsgLy8vXG5cbiAgICAgICAgcmV0dXJuIHVybFRlcm1pbmFsTm9kZTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB1cmxUZXJtaW5hbE5vZGUgPSB0aGlzLmZyb21TZWNvbmRMYXN0Q2hpbGROb2RlKChzZWNvbmRMYXN0Q2hpbGROb2RlKSA9PiB7XG4gICAgICAgIGNvbnN0IHVybFRlcm1pbmFsTm9kZSA9IHNlY29uZExhc3RDaGlsZE5vZGU7IC8vL1xuXG4gICAgICAgIHJldHVybiB1cmxUZXJtaW5hbE5vZGU7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCB1cmxUZXJtaW5hbE5vZGVDb250ZW50ID0gdXJsVGVybWluYWxOb2RlLmdldENvbnRlbnQoKSxcbiAgICAgICAgICB1cmwgPSB1cmxUZXJtaW5hbE5vZGVDb250ZW50OyAvLy9cblxuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkocnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHkpIHsgcmV0dXJuIE1hcmtkb3duTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eShIeXBlcmxpbmtMaW5rTWFya2Rvd25Ob2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSk7IH1cbn1cbiJdLCJuYW1lcyI6WyJIeXBlcmxpbmtMaW5rTWFya2Rvd25Ob2RlIiwidXJsIiwiY29udGV4dCIsIm11bHRpcGxpY2l0eSIsImdldE11bHRpcGxpY2l0eSIsInVybFRlcm1pbmFsTm9kZSIsImZyb21GaXJzdENoaWxkTm9kZSIsImZpcnN0Q2hpbGROb2RlIiwiZnJvbVNlY29uZExhc3RDaGlsZE5vZGUiLCJzZWNvbmRMYXN0Q2hpbGROb2RlIiwidXJsVGVybWluYWxOb2RlQ29udGVudCIsImdldENvbnRlbnQiLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eSIsInJ1bGVOYW1lIiwiY2hpbGROb2RlcyIsIm9wYWNpdHkiLCJNYXJrZG93bk5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBSXFCQTs7OytEQUZJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRVYsSUFBQSxBQUFNQSwwQ0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7ZUFBTixrQkFBTUE7O2tCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQSxJQUFJQyxPQUFPO2dCQUNULElBQU1DLGVBQWUsSUFBSSxDQUFDQyxlQUFlO2dCQUV6QyxJQUFJQztnQkFFSixJQUFJRixpQkFBaUIsR0FBRztvQkFDdEJFLGtCQUFrQixJQUFJLENBQUNDLGtCQUFrQixDQUFDLFNBQUNDO3dCQUN6QyxJQUFNRixrQkFBa0JFLGdCQUFnQixHQUFHO3dCQUUzQyxPQUFPRjtvQkFDVDtnQkFDRixPQUFPO29CQUNMQSxrQkFBa0IsSUFBSSxDQUFDRyx1QkFBdUIsQ0FBQyxTQUFDQzt3QkFDOUMsSUFBTUosa0JBQWtCSSxxQkFBcUIsR0FBRzt3QkFFaEQsT0FBT0o7b0JBQ1Q7Z0JBQ0Y7Z0JBRUEsSUFBTUsseUJBQXlCTCxnQkFBZ0JNLFVBQVUsSUFDbkRWLE1BQU1TLHdCQUF3QixHQUFHO2dCQUV2QyxPQUFPVDtZQUNUOzs7O1lBRU9XLEtBQUFBO21CQUFQLFNBQU9BLGlDQUFpQ0MsUUFBUSxFQUFFQyxVQUFVLEVBQUVDLE9BQU87Z0JBQUksT0FBT0MsaUJBQVksQ0FBQ0osZ0NBQWdDLENBMUIxR1osMkJBMEJzSWEsVUFBVUMsWUFBWUM7WUFBVTs7O1dBMUJ0S2Y7RUFBa0NnQixpQkFBWSJ9