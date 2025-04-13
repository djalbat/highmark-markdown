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
            key: "fromRuleNameChildNodesAndOpacity",
            value: function fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) {
                return _markdown.default.fromRuleNameChildNodesAndOpacity(EmailLinkMarkdownNode, ruleName, childNodes, opacity);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2VtYWlsTGluay5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE1hcmtkb3duTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9tYXJrZG93blwiO1xuXG5pbXBvcnQgeyBFTUFJTF9BRERSRVNTX1RPS0VOX1RZUEUgfSBmcm9tIFwiLi4vLi4vdG9rZW5UeXBlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbWFpbExpbmtNYXJrZG93bk5vZGUgZXh0ZW5kcyBNYXJrZG93bk5vZGUge1xuICBlbWFpbEFkZHJlc3NGcm9tU2Vjb25kTGFzdENoaWxkTm9kZShjb250ZXh0KSB7XG4gICAgY29uc3QgZW1haWxBZGRyZXNzID0gdGhpcy5mcm9tU2Vjb25kTGFzdENoaWxkTm9kZSgoc2Vjb25kTGFzdENoaWxkTm9kZSkgPT4ge1xuICAgICAgY29uc3QgdGVybWluYWxOb2RlID0gc2Vjb25kTGFzdENoaWxkTm9kZSwgIC8vL1xuICAgICAgICAgICAgZW1haWxBZGRyZXNzID0gZW1haWxBZGRyZXNzRnJvbVRlcm1pbmFsTm9kZSh0ZXJtaW5hbE5vZGUpO1xuXG4gICAgICByZXR1cm4gZW1haWxBZGRyZXNzO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGVtYWlsQWRkcmVzcztcbiAgfVxuXG4gIGVtYWlsQWRkcmVzc0Zyb21GaXJzdExhc3RDaGlsZE5vZGUoY29udGV4dCkge1xuICAgIGNvbnN0IGVtYWlsQWRkcmVzcyA9IHRoaXMuZnJvbUZpcnN0TGFzdENoaWxkTm9kZSgoZmlyc3RMYXN0Q2hpbGROb2RlKSA9PiB7XG4gICAgICBjb25zdCB0ZXJtaW5hbE5vZGUgPSBmaXJzdExhc3RDaGlsZE5vZGUsICAvLy9cbiAgICAgICAgICAgIGVtYWlsQWRkcmVzcyA9IGVtYWlsQWRkcmVzc0Zyb21UZXJtaW5hbE5vZGUodGVybWluYWxOb2RlKTtcblxuICAgICAgcmV0dXJuIGVtYWlsQWRkcmVzcztcbiAgICB9KTtcblxuICAgIHJldHVybiBlbWFpbEFkZHJlc3M7XG4gIH1cblxuICBlbWFpbEFkZHJlc3MoY29udGV4dCkge1xuICAgIGNvbnN0IHNpbXBsZSA9IHRoaXMuaXNTaW1wbGUoKSxcbiAgICAgICAgICBlbWFpbEFkZHJlc3MgPSBzaW1wbGUgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZW1haWxBZGRyZXNzRnJvbUZpcnN0TGFzdENoaWxkTm9kZShjb250ZXh0KSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVtYWlsQWRkcmVzc0Zyb21TZWNvbmRMYXN0Q2hpbGROb2RlKGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGVtYWlsQWRkcmVzcztcbiAgfVxuXG4gIGlzU2ltcGxlKCkge1xuICAgIGNvbnN0IHNpbXBsZSA9IHRoaXMuZnJvbUZpcnN0TGFzdENoaWxkTm9kZSgoZmlyc3RMYXN0Q2hpbGROb2RlKSA9PiB7XG4gICAgICBjb25zdCB0ZXJtaW5hbE5vZGUgPSBmaXJzdExhc3RDaGlsZE5vZGUsICAvLy9cbiAgICAgICAgICAgIHR5cGUgPSB0ZXJtaW5hbE5vZGUuZ2V0VHlwZSgpLFxuICAgICAgICAgICAgdHlwZUVtYWlsQWRkcmVzc1Rva2VuVHlwZSA9ICh0eXBlID09PSBFTUFJTF9BRERSRVNTX1RPS0VOX1RZUEUpLFxuICAgICAgICAgICAgc2ltcGxlID0gdHlwZUVtYWlsQWRkcmVzc1Rva2VuVHlwZTsgLy8vXG5cbiAgICAgIHJldHVybiBzaW1wbGU7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gc2ltcGxlO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5KHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5KSB7IHJldHVybiBNYXJrZG93bk5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkoRW1haWxMaW5rTWFya2Rvd25Ob2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSk7IH1cbn1cblxuZnVuY3Rpb24gZW1haWxBZGRyZXNzRnJvbVRlcm1pbmFsTm9kZSh0ZXJtaW5hbE5vZGUpIHtcbiAgbGV0IGVtYWlsQWRkcmVzcyA9IG51bGw7XG5cbiAgY29uc3QgdHlwZSA9IHRlcm1pbmFsTm9kZS5nZXRUeXBlKCksXG4gICAgICAgIHR5cGVFbWFpbEFkZHJlc3NUb2tlblR5cGUgPSAodHlwZSA9PT0gRU1BSUxfQUREUkVTU19UT0tFTl9UWVBFKTtcblxuICBpZiAodHlwZUVtYWlsQWRkcmVzc1Rva2VuVHlwZSkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSB0ZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpO1xuXG4gICAgZW1haWxBZGRyZXNzID0gY29udGVudDsgLy8vXG4gIH1cblxuICByZXR1cm4gZW1haWxBZGRyZXNzO1xufSJdLCJuYW1lcyI6WyJFbWFpbExpbmtNYXJrZG93bk5vZGUiLCJlbWFpbEFkZHJlc3NGcm9tU2Vjb25kTGFzdENoaWxkTm9kZSIsImNvbnRleHQiLCJlbWFpbEFkZHJlc3MiLCJmcm9tU2Vjb25kTGFzdENoaWxkTm9kZSIsInNlY29uZExhc3RDaGlsZE5vZGUiLCJ0ZXJtaW5hbE5vZGUiLCJlbWFpbEFkZHJlc3NGcm9tVGVybWluYWxOb2RlIiwiZW1haWxBZGRyZXNzRnJvbUZpcnN0TGFzdENoaWxkTm9kZSIsImZyb21GaXJzdExhc3RDaGlsZE5vZGUiLCJmaXJzdExhc3RDaGlsZE5vZGUiLCJzaW1wbGUiLCJpc1NpbXBsZSIsInR5cGUiLCJnZXRUeXBlIiwidHlwZUVtYWlsQWRkcmVzc1Rva2VuVHlwZSIsIkVNQUlMX0FERFJFU1NfVE9LRU5fVFlQRSIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5IiwicnVsZU5hbWUiLCJjaGlsZE5vZGVzIiwib3BhY2l0eSIsIk1hcmtkb3duTm9kZSIsImNvbnRlbnQiLCJnZXRDb250ZW50Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU1xQkE7OzsrREFKSTswQkFFZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFMUIsSUFBQSxBQUFNQSxzQ0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7ZUFBTixrQkFBTUE7O2tCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQSxvQ0FBb0NDLE9BQU87Z0JBQ3pDLElBQU1DLGVBQWUsSUFBSSxDQUFDQyx1QkFBdUIsQ0FBQyxTQUFDQztvQkFDakQsSUFBTUMsZUFBZUQscUJBQ2ZGLGVBQWVJLDZCQUE2QkQ7b0JBRWxELE9BQU9IO2dCQUNUO2dCQUVBLE9BQU9BO1lBQ1Q7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUEsbUNBQW1DTixPQUFPO2dCQUN4QyxJQUFNQyxlQUFlLElBQUksQ0FBQ00sc0JBQXNCLENBQUMsU0FBQ0M7b0JBQ2hELElBQU1KLGVBQWVJLG9CQUNmUCxlQUFlSSw2QkFBNkJEO29CQUVsRCxPQUFPSDtnQkFDVDtnQkFFQSxPQUFPQTtZQUNUOzs7WUFFQUEsS0FBQUE7bUJBQUFBLFNBQUFBLGFBQWFELE9BQU87Z0JBQ2xCLElBQU1TLFNBQVMsSUFBSSxDQUFDQyxRQUFRLElBQ3RCVCxlQUFlUSxTQUNHLElBQUksQ0FBQ0gsa0NBQWtDLENBQUNOLFdBQ3RDLElBQUksQ0FBQ0QsbUNBQW1DLENBQUNDO2dCQUVuRSxPQUFPQztZQUNUOzs7WUFFQVMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1ELFNBQVMsSUFBSSxDQUFDRixzQkFBc0IsQ0FBQyxTQUFDQztvQkFDMUMsSUFBTUosZUFBZUksb0JBQ2ZHLE9BQU9QLGFBQWFRLE9BQU8sSUFDM0JDLDRCQUE2QkYsU0FBU0csb0NBQXdCLEVBQzlETCxTQUFTSSwyQkFBMkIsR0FBRztvQkFFN0MsT0FBT0o7Z0JBQ1Q7Z0JBRUEsT0FBT0E7WUFDVDs7OztZQUVPTSxLQUFBQTttQkFBUCxTQUFPQSxpQ0FBaUNDLFFBQVEsRUFBRUMsVUFBVSxFQUFFQyxPQUFPO2dCQUFJLE9BQU9DLGlCQUFZLENBQUNKLGdDQUFnQyxDQTdDMUdqQix1QkE2Q2tJa0IsVUFBVUMsWUFBWUM7WUFBVTs7O1dBN0NsS3BCO0VBQThCcUIsaUJBQVk7QUFnRC9ELFNBQVNkLDZCQUE2QkQsWUFBWTtJQUNoRCxJQUFJSCxlQUFlO0lBRW5CLElBQU1VLE9BQU9QLGFBQWFRLE9BQU8sSUFDM0JDLDRCQUE2QkYsU0FBU0csb0NBQXdCO0lBRXBFLElBQUlELDJCQUEyQjtRQUM3QixJQUFNTyxVQUFVaEIsYUFBYWlCLFVBQVU7UUFFdkNwQixlQUFlbUIsU0FBUyxHQUFHO0lBQzdCO0lBRUEsT0FBT25CO0FBQ1QifQ==