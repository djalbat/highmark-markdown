"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return EmailLinkMarkdownNode;
    }
});
var _markdown = /*#__PURE__*/ _interop_require_default(require("../../../node/markdown"));
var _tokenTypes = require("../../../tokenTypes");
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
var EmailLinkMarkdownNode = /*#__PURE__*/ function(MarkdownNode) {
    _inherits(EmailLinkMarkdownNode, MarkdownNode);
    function EmailLinkMarkdownNode() {
        _class_call_check(this, EmailLinkMarkdownNode);
        return _call_super(this, EmailLinkMarkdownNode, arguments);
    }
    _create_class(EmailLinkMarkdownNode, [
        {
            key: "emailAddressFromSecondLastChildNode",
            value: function emailAddressFromSecondLastChildNode(context) {
                var emailAddress = this.fromSecondLastChildNode(function(secondLastChildNode) {
                    var terminalNode = secondLastChildNode, emailAddress = emailAddressFromTerminalNode(terminalNode);
                    return emailAddress;
                });
                return emailAddress;
            }
        },
        {
            key: "emailAddressFromFirstLastChildNode",
            value: function emailAddressFromFirstLastChildNode(context) {
                var emailAddress = this.fromFirstLastChildNode(function(firstLastChildNode) {
                    var terminalNode = firstLastChildNode, emailAddress = emailAddressFromTerminalNode(terminalNode);
                    return emailAddress;
                });
                return emailAddress;
            }
        },
        {
            key: "emailAddress",
            value: function emailAddress(context) {
                var simple = this.isSimple(), emailAddress = simple ? this.emailAddressFromFirstLastChildNode(context) : this.emailAddressFromSecondLastChildNode(context);
                return emailAddress;
            }
        },
        {
            key: "isSimple",
            value: function isSimple() {
                var simple = this.fromFirstLastChildNode(function(firstLastChildNode) {
                    var terminalNode = firstLastChildNode, type = terminalNode.getType(), typeEmailAddressTokenType = type === _tokenTypes.EMAIL_ADDRESS_TOKEN_TYPE, simple = typeEmailAddressTokenType; ///
                    return simple;
                });
                return simple;
            }
        }
    ], [
        {
            key: "fromRuleNameChildNodesOpacityAndPrecedence",
            value: function fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) {
                return _markdown.default.fromRuleNameChildNodesOpacityAndPrecedence(EmailLinkMarkdownNode, ruleName, childNodes, opacity, precedence);
            }
        }
    ]);
    return EmailLinkMarkdownNode;
}(_markdown.default);
function emailAddressFromTerminalNode(terminalNode) {
    var emailAddress = null;
    var type = terminalNode.getType(), typeEmailAddressTokenType = type === _tokenTypes.EMAIL_ADDRESS_TOKEN_TYPE;
    if (typeEmailAddressTokenType) {
        var content = terminalNode.getContent();
        emailAddress = content; ///
    }
    return emailAddress;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2xpbmsvZW1haWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBNYXJrZG93bk5vZGUgZnJvbSBcIi4uLy4uLy4uL25vZGUvbWFya2Rvd25cIjtcblxuaW1wb3J0IHsgRU1BSUxfQUREUkVTU19UT0tFTl9UWVBFIH0gZnJvbSBcIi4uLy4uLy4uL3Rva2VuVHlwZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW1haWxMaW5rTWFya2Rvd25Ob2RlIGV4dGVuZHMgTWFya2Rvd25Ob2RlIHtcbiAgZW1haWxBZGRyZXNzRnJvbVNlY29uZExhc3RDaGlsZE5vZGUoY29udGV4dCkge1xuICAgIGNvbnN0IGVtYWlsQWRkcmVzcyA9IHRoaXMuZnJvbVNlY29uZExhc3RDaGlsZE5vZGUoKHNlY29uZExhc3RDaGlsZE5vZGUpID0+IHtcbiAgICAgIGNvbnN0IHRlcm1pbmFsTm9kZSA9IHNlY29uZExhc3RDaGlsZE5vZGUsICAvLy9cbiAgICAgICAgICAgIGVtYWlsQWRkcmVzcyA9IGVtYWlsQWRkcmVzc0Zyb21UZXJtaW5hbE5vZGUodGVybWluYWxOb2RlKTtcblxuICAgICAgcmV0dXJuIGVtYWlsQWRkcmVzcztcbiAgICB9KTtcblxuICAgIHJldHVybiBlbWFpbEFkZHJlc3M7XG4gIH1cblxuICBlbWFpbEFkZHJlc3NGcm9tRmlyc3RMYXN0Q2hpbGROb2RlKGNvbnRleHQpIHtcbiAgICBjb25zdCBlbWFpbEFkZHJlc3MgPSB0aGlzLmZyb21GaXJzdExhc3RDaGlsZE5vZGUoKGZpcnN0TGFzdENoaWxkTm9kZSkgPT4ge1xuICAgICAgY29uc3QgdGVybWluYWxOb2RlID0gZmlyc3RMYXN0Q2hpbGROb2RlLCAgLy8vXG4gICAgICAgICAgICBlbWFpbEFkZHJlc3MgPSBlbWFpbEFkZHJlc3NGcm9tVGVybWluYWxOb2RlKHRlcm1pbmFsTm9kZSk7XG5cbiAgICAgIHJldHVybiBlbWFpbEFkZHJlc3M7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZW1haWxBZGRyZXNzO1xuICB9XG5cbiAgZW1haWxBZGRyZXNzKGNvbnRleHQpIHtcbiAgICBjb25zdCBzaW1wbGUgPSB0aGlzLmlzU2ltcGxlKCksXG4gICAgICAgICAgZW1haWxBZGRyZXNzID0gc2ltcGxlID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVtYWlsQWRkcmVzc0Zyb21GaXJzdExhc3RDaGlsZE5vZGUoY29udGV4dCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWFpbEFkZHJlc3NGcm9tU2Vjb25kTGFzdENoaWxkTm9kZShjb250ZXh0KTtcblxuICAgIHJldHVybiBlbWFpbEFkZHJlc3M7XG4gIH1cblxuICBpc1NpbXBsZSgpIHtcbiAgICBjb25zdCBzaW1wbGUgPSB0aGlzLmZyb21GaXJzdExhc3RDaGlsZE5vZGUoKGZpcnN0TGFzdENoaWxkTm9kZSkgPT4ge1xuICAgICAgY29uc3QgdGVybWluYWxOb2RlID0gZmlyc3RMYXN0Q2hpbGROb2RlLCAgLy8vXG4gICAgICAgICAgICB0eXBlID0gdGVybWluYWxOb2RlLmdldFR5cGUoKSxcbiAgICAgICAgICAgIHR5cGVFbWFpbEFkZHJlc3NUb2tlblR5cGUgPSAodHlwZSA9PT0gRU1BSUxfQUREUkVTU19UT0tFTl9UWVBFKSxcbiAgICAgICAgICAgIHNpbXBsZSA9IHR5cGVFbWFpbEFkZHJlc3NUb2tlblR5cGU7IC8vL1xuXG4gICAgICByZXR1cm4gc2ltcGxlO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHNpbXBsZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UocnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHByZWNlZGVuY2UpIHsgcmV0dXJuIE1hcmtkb3duTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UoRW1haWxMaW5rTWFya2Rvd25Ob2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSk7IH1cbn1cblxuZnVuY3Rpb24gZW1haWxBZGRyZXNzRnJvbVRlcm1pbmFsTm9kZSh0ZXJtaW5hbE5vZGUpIHtcbiAgbGV0IGVtYWlsQWRkcmVzcyA9IG51bGw7XG5cbiAgY29uc3QgdHlwZSA9IHRlcm1pbmFsTm9kZS5nZXRUeXBlKCksXG4gICAgICAgIHR5cGVFbWFpbEFkZHJlc3NUb2tlblR5cGUgPSAodHlwZSA9PT0gRU1BSUxfQUREUkVTU19UT0tFTl9UWVBFKTtcblxuICBpZiAodHlwZUVtYWlsQWRkcmVzc1Rva2VuVHlwZSkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSB0ZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpO1xuXG4gICAgZW1haWxBZGRyZXNzID0gY29udGVudDsgLy8vXG4gIH1cblxuICByZXR1cm4gZW1haWxBZGRyZXNzO1xufSJdLCJuYW1lcyI6WyJFbWFpbExpbmtNYXJrZG93bk5vZGUiLCJlbWFpbEFkZHJlc3NGcm9tU2Vjb25kTGFzdENoaWxkTm9kZSIsImNvbnRleHQiLCJlbWFpbEFkZHJlc3MiLCJmcm9tU2Vjb25kTGFzdENoaWxkTm9kZSIsInNlY29uZExhc3RDaGlsZE5vZGUiLCJ0ZXJtaW5hbE5vZGUiLCJlbWFpbEFkZHJlc3NGcm9tVGVybWluYWxOb2RlIiwiZW1haWxBZGRyZXNzRnJvbUZpcnN0TGFzdENoaWxkTm9kZSIsImZyb21GaXJzdExhc3RDaGlsZE5vZGUiLCJmaXJzdExhc3RDaGlsZE5vZGUiLCJzaW1wbGUiLCJpc1NpbXBsZSIsInR5cGUiLCJnZXRUeXBlIiwidHlwZUVtYWlsQWRkcmVzc1Rva2VuVHlwZSIsIkVNQUlMX0FERFJFU1NfVE9LRU5fVFlQRSIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZSIsInJ1bGVOYW1lIiwiY2hpbGROb2RlcyIsIm9wYWNpdHkiLCJwcmVjZWRlbmNlIiwiTWFya2Rvd25Ob2RlIiwiY29udGVudCIsImdldENvbnRlbnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBTXFCQTs7OytEQUpJOzBCQUVnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUxQixJQUFBLEFBQU1BLHNDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtRQUFOLE9BQUEsa0JBQU1BOztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUEsb0NBQW9DQyxPQUFPO2dCQUN6QyxJQUFNQyxlQUFlLElBQUksQ0FBQ0MsdUJBQXVCLENBQUMsU0FBQ0M7b0JBQ2pELElBQU1DLGVBQWVELHFCQUNmRixlQUFlSSw2QkFBNkJEO29CQUVsRCxPQUFPSDtnQkFDVDtnQkFFQSxPQUFPQTtZQUNUOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBLG1DQUFtQ04sT0FBTztnQkFDeEMsSUFBTUMsZUFBZSxJQUFJLENBQUNNLHNCQUFzQixDQUFDLFNBQUNDO29CQUNoRCxJQUFNSixlQUFlSSxvQkFDZlAsZUFBZUksNkJBQTZCRDtvQkFFbEQsT0FBT0g7Z0JBQ1Q7Z0JBRUEsT0FBT0E7WUFDVDs7O1lBRUFBLEtBQUFBO21CQUFBQSxTQUFBQSxhQUFhRCxPQUFPO2dCQUNsQixJQUFNUyxTQUFTLElBQUksQ0FBQ0MsUUFBUSxJQUN0QlQsZUFBZVEsU0FDRyxJQUFJLENBQUNILGtDQUFrQyxDQUFDTixXQUN0QyxJQUFJLENBQUNELG1DQUFtQyxDQUFDQztnQkFFbkUsT0FBT0M7WUFDVDs7O1lBRUFTLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNRCxTQUFTLElBQUksQ0FBQ0Ysc0JBQXNCLENBQUMsU0FBQ0M7b0JBQzFDLElBQU1KLGVBQWVJLG9CQUNmRyxPQUFPUCxhQUFhUSxPQUFPLElBQzNCQyw0QkFBNkJGLFNBQVNHLG9DQUF3QixFQUM5REwsU0FBU0ksMkJBQTJCLEdBQUc7b0JBRTdDLE9BQU9KO2dCQUNUO2dCQUVBLE9BQU9BO1lBQ1Q7Ozs7WUFFT00sS0FBQUE7bUJBQVAsU0FBT0EsMkNBQTJDQyxRQUFRLEVBQUVDLFVBQVUsRUFBRUMsT0FBTyxFQUFFQyxVQUFVO2dCQUFJLE9BQU9DLGlCQUFZLENBQUNMLDBDQUEwQyxDQTdDMUlqQix1QkE2Q2tLa0IsVUFBVUMsWUFBWUMsU0FBU0M7WUFBYTs7O1dBN0M5TXJCO0VBQThCc0IsaUJBQVk7QUFnRC9ELFNBQVNmLDZCQUE2QkQsWUFBWTtJQUNoRCxJQUFJSCxlQUFlO0lBRW5CLElBQU1VLE9BQU9QLGFBQWFRLE9BQU8sSUFDM0JDLDRCQUE2QkYsU0FBU0csb0NBQXdCO0lBRXBFLElBQUlELDJCQUEyQjtRQUM3QixJQUFNUSxVQUFVakIsYUFBYWtCLFVBQVU7UUFFdkNyQixlQUFlb0IsU0FBUyxHQUFHO0lBQzdCO0lBRUEsT0FBT3BCO0FBQ1QifQ==