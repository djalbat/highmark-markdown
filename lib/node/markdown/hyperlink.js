"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return HyperlinkMarkdownNode;
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
var HyperlinkMarkdownNode = /*#__PURE__*/ function(MarkdownNode) {
    _inherits(HyperlinkMarkdownNode, MarkdownNode);
    function HyperlinkMarkdownNode() {
        _class_call_check(this, HyperlinkMarkdownNode);
        return _call_super(this, HyperlinkMarkdownNode, arguments);
    }
    _create_class(HyperlinkMarkdownNode, [
        {
            key: "urlFromSecondLastChildNode",
            value: function urlFromSecondLastChildNode(context) {
                var url = this.fromSecondLastChildNode(function(secondLastChildNode) {
                    var terminalNode = secondLastChildNode, url = urlFromTerminalNode(terminalNode);
                    return url;
                });
                return url;
            }
        },
        {
            key: "urlFromFirstLastChildNode",
            value: function urlFromFirstLastChildNode(context) {
                var url = this.fromFirstLastChildNode(function(firstLastChildNode) {
                    var terminalNode = firstLastChildNode, url = urlFromTerminalNode(terminalNode);
                    return url;
                });
                return url;
            }
        },
        {
            key: "url",
            value: function url(context) {
                var simple = this.isSimple(), url = simple ? this.urlFromFirstLastChildNode(context) : this.urlFromSecondLastChildNode(context);
                return url;
            }
        },
        {
            key: "isSimple",
            value: function isSimple() {
                var simple = this.fromFirstLastChildNode(function(firstLastChildNode) {
                    var terminalNode = firstLastChildNode, type = terminalNode.getType(), typeURLTokenType = type === _tokenTypes.URL_TOKEN_TYPE, simple = typeURLTokenType; ///
                    return simple;
                });
                return simple;
            }
        }
    ], [
        {
            key: "fromRuleNameChildNodesAndOpacity",
            value: function fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) {
                return _markdown.default.fromRuleNameChildNodesAndOpacity(HyperlinkMarkdownNode, ruleName, childNodes, opacity);
            }
        }
    ]);
    return HyperlinkMarkdownNode;
}(_markdown.default);
function urlFromTerminalNode(terminalNode) {
    var url = null;
    var type = terminalNode.getType(), typeURLTokenType = type === _tokenTypes.URL_TOKEN_TYPE;
    if (typeURLTokenType) {
        var content = terminalNode.getContent();
        url = content; ///
    }
    return url;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2h5cGVybGluay5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE1hcmtkb3duTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9tYXJrZG93blwiO1xuXG5pbXBvcnQgeyBVUkxfVE9LRU5fVFlQRSB9IGZyb20gXCIuLi8uLi90b2tlblR5cGVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEh5cGVybGlua01hcmtkb3duTm9kZSBleHRlbmRzIE1hcmtkb3duTm9kZSB7XG4gIHVybEZyb21TZWNvbmRMYXN0Q2hpbGROb2RlKGNvbnRleHQpIHtcbiAgICBjb25zdCB1cmwgPSB0aGlzLmZyb21TZWNvbmRMYXN0Q2hpbGROb2RlKChzZWNvbmRMYXN0Q2hpbGROb2RlKSA9PiB7XG4gICAgICBjb25zdCB0ZXJtaW5hbE5vZGUgPSBzZWNvbmRMYXN0Q2hpbGROb2RlLCAgLy8vXG4gICAgICAgICAgICB1cmwgPSB1cmxGcm9tVGVybWluYWxOb2RlKHRlcm1pbmFsTm9kZSk7XG5cbiAgICAgIHJldHVybiB1cmw7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsRnJvbUZpcnN0TGFzdENoaWxkTm9kZShjb250ZXh0KSB7XG4gICAgY29uc3QgdXJsID0gdGhpcy5mcm9tRmlyc3RMYXN0Q2hpbGROb2RlKChmaXJzdExhc3RDaGlsZE5vZGUpID0+IHtcbiAgICAgIGNvbnN0IHRlcm1pbmFsTm9kZSA9IGZpcnN0TGFzdENoaWxkTm9kZSwgIC8vL1xuICAgICAgICAgICAgdXJsID0gdXJsRnJvbVRlcm1pbmFsTm9kZSh0ZXJtaW5hbE5vZGUpO1xuXG4gICAgICByZXR1cm4gdXJsO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybChjb250ZXh0KSB7XG4gICAgY29uc3Qgc2ltcGxlID0gdGhpcy5pc1NpbXBsZSgpLFxuICAgICAgICAgIHVybCA9IHNpbXBsZSA/XG4gICAgICAgICAgICAgICAgICB0aGlzLnVybEZyb21GaXJzdExhc3RDaGlsZE5vZGUoY29udGV4dCkgOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVybEZyb21TZWNvbmRMYXN0Q2hpbGROb2RlKGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIGlzU2ltcGxlKCkge1xuICAgIGNvbnN0IHNpbXBsZSA9IHRoaXMuZnJvbUZpcnN0TGFzdENoaWxkTm9kZSgoZmlyc3RMYXN0Q2hpbGROb2RlKSA9PiB7XG4gICAgICBjb25zdCB0ZXJtaW5hbE5vZGUgPSBmaXJzdExhc3RDaGlsZE5vZGUsICAvLy9cbiAgICAgICAgICAgIHR5cGUgPSB0ZXJtaW5hbE5vZGUuZ2V0VHlwZSgpLFxuICAgICAgICAgICAgdHlwZVVSTFRva2VuVHlwZSA9ICh0eXBlID09PSBVUkxfVE9LRU5fVFlQRSksXG4gICAgICAgICAgICBzaW1wbGUgPSB0eXBlVVJMVG9rZW5UeXBlOyAvLy9cblxuICAgICAgcmV0dXJuIHNpbXBsZTtcbiAgICB9KTtcblxuICAgIHJldHVybiBzaW1wbGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkocnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHkpIHsgcmV0dXJuIE1hcmtkb3duTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eShIeXBlcmxpbmtNYXJrZG93bk5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5KTsgfVxufVxuXG5mdW5jdGlvbiB1cmxGcm9tVGVybWluYWxOb2RlKHRlcm1pbmFsTm9kZSkge1xuICBsZXQgdXJsID0gbnVsbDtcblxuICBjb25zdCB0eXBlID0gdGVybWluYWxOb2RlLmdldFR5cGUoKSxcbiAgICAgICAgdHlwZVVSTFRva2VuVHlwZSA9ICh0eXBlID09PSBVUkxfVE9LRU5fVFlQRSk7XG5cbiAgaWYgKHR5cGVVUkxUb2tlblR5cGUpIHtcbiAgICBjb25zdCBjb250ZW50ID0gdGVybWluYWxOb2RlLmdldENvbnRlbnQoKTtcblxuICAgIHVybCA9IGNvbnRlbnQ7IC8vL1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn0iXSwibmFtZXMiOlsiSHlwZXJsaW5rTWFya2Rvd25Ob2RlIiwidXJsRnJvbVNlY29uZExhc3RDaGlsZE5vZGUiLCJjb250ZXh0IiwidXJsIiwiZnJvbVNlY29uZExhc3RDaGlsZE5vZGUiLCJzZWNvbmRMYXN0Q2hpbGROb2RlIiwidGVybWluYWxOb2RlIiwidXJsRnJvbVRlcm1pbmFsTm9kZSIsInVybEZyb21GaXJzdExhc3RDaGlsZE5vZGUiLCJmcm9tRmlyc3RMYXN0Q2hpbGROb2RlIiwiZmlyc3RMYXN0Q2hpbGROb2RlIiwic2ltcGxlIiwiaXNTaW1wbGUiLCJ0eXBlIiwiZ2V0VHlwZSIsInR5cGVVUkxUb2tlblR5cGUiLCJVUkxfVE9LRU5fVFlQRSIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5IiwicnVsZU5hbWUiLCJjaGlsZE5vZGVzIiwib3BhY2l0eSIsIk1hcmtkb3duTm9kZSIsImNvbnRlbnQiLCJnZXRDb250ZW50Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU1xQkE7OzsrREFKSTswQkFFTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVoQixJQUFBLEFBQU1BLHNDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtRQUFOLE9BQUEsa0JBQU1BOztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUEsMkJBQTJCQyxPQUFPO2dCQUNoQyxJQUFNQyxNQUFNLElBQUksQ0FBQ0MsdUJBQXVCLENBQUMsU0FBQ0M7b0JBQ3hDLElBQU1DLGVBQWVELHFCQUNmRixNQUFNSSxvQkFBb0JEO29CQUVoQyxPQUFPSDtnQkFDVDtnQkFFQSxPQUFPQTtZQUNUOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBLDBCQUEwQk4sT0FBTztnQkFDL0IsSUFBTUMsTUFBTSxJQUFJLENBQUNNLHNCQUFzQixDQUFDLFNBQUNDO29CQUN2QyxJQUFNSixlQUFlSSxvQkFDZlAsTUFBTUksb0JBQW9CRDtvQkFFaEMsT0FBT0g7Z0JBQ1Q7Z0JBRUEsT0FBT0E7WUFDVDs7O1lBRUFBLEtBQUFBO21CQUFBQSxTQUFBQSxJQUFJRCxPQUFPO2dCQUNULElBQU1TLFNBQVMsSUFBSSxDQUFDQyxRQUFRLElBQ3RCVCxNQUFNUSxTQUNFLElBQUksQ0FBQ0gseUJBQXlCLENBQUNOLFdBQzdCLElBQUksQ0FBQ0QsMEJBQTBCLENBQUNDO2dCQUVoRCxPQUFPQztZQUNUOzs7WUFFQVMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1ELFNBQVMsSUFBSSxDQUFDRixzQkFBc0IsQ0FBQyxTQUFDQztvQkFDMUMsSUFBTUosZUFBZUksb0JBQ2ZHLE9BQU9QLGFBQWFRLE9BQU8sSUFDM0JDLG1CQUFvQkYsU0FBU0csMEJBQWMsRUFDM0NMLFNBQVNJLGtCQUFrQixHQUFHO29CQUVwQyxPQUFPSjtnQkFDVDtnQkFFQSxPQUFPQTtZQUNUOzs7O1lBRU9NLEtBQUFBO21CQUFQLFNBQU9BLGlDQUFpQ0MsUUFBUSxFQUFFQyxVQUFVLEVBQUVDLE9BQU87Z0JBQUksT0FBT0MsaUJBQVksQ0FBQ0osZ0NBQWdDLENBN0MxR2pCLHVCQTZDa0lrQixVQUFVQyxZQUFZQztZQUFVOzs7V0E3Q2xLcEI7RUFBOEJxQixpQkFBWTtBQWdEL0QsU0FBU2Qsb0JBQW9CRCxZQUFZO0lBQ3ZDLElBQUlILE1BQU07SUFFVixJQUFNVSxPQUFPUCxhQUFhUSxPQUFPLElBQzNCQyxtQkFBb0JGLFNBQVNHLDBCQUFjO0lBRWpELElBQUlELGtCQUFrQjtRQUNwQixJQUFNTyxVQUFVaEIsYUFBYWlCLFVBQVU7UUFFdkNwQixNQUFNbUIsU0FBUyxHQUFHO0lBQ3BCO0lBRUEsT0FBT25CO0FBQ1QifQ==