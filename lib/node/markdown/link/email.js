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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2xpbmsvZW1haWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBNYXJrZG93bk5vZGUgZnJvbSBcIi4uLy4uLy4uL25vZGUvbWFya2Rvd25cIjtcblxuaW1wb3J0IHsgRU1BSUxfQUREUkVTU19UT0tFTl9UWVBFIH0gZnJvbSBcIi4uLy4uLy4uL3Rva2VuVHlwZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW1haWxMaW5rTWFya2Rvd25Ob2RlIGV4dGVuZHMgTWFya2Rvd25Ob2RlIHtcbiAgZW1haWxBZGRyZXNzRnJvbVNlY29uZExhc3RDaGlsZE5vZGUoY29udGV4dCkge1xuICAgIGNvbnN0IGVtYWlsQWRkcmVzcyA9IHRoaXMuZnJvbVNlY29uZExhc3RDaGlsZE5vZGUoKHNlY29uZExhc3RDaGlsZE5vZGUpID0+IHtcbiAgICAgIGNvbnN0IHRlcm1pbmFsTm9kZSA9IHNlY29uZExhc3RDaGlsZE5vZGUsICAvLy9cbiAgICAgICAgICAgIGVtYWlsQWRkcmVzcyA9IGVtYWlsQWRkcmVzc0Zyb21UZXJtaW5hbE5vZGUodGVybWluYWxOb2RlKTtcblxuICAgICAgcmV0dXJuIGVtYWlsQWRkcmVzcztcbiAgICB9KTtcblxuICAgIHJldHVybiBlbWFpbEFkZHJlc3M7XG4gIH1cblxuICBlbWFpbEFkZHJlc3NGcm9tRmlyc3RMYXN0Q2hpbGROb2RlKGNvbnRleHQpIHtcbiAgICBjb25zdCBlbWFpbEFkZHJlc3MgPSB0aGlzLmZyb21GaXJzdExhc3RDaGlsZE5vZGUoKGZpcnN0TGFzdENoaWxkTm9kZSkgPT4ge1xuICAgICAgY29uc3QgdGVybWluYWxOb2RlID0gZmlyc3RMYXN0Q2hpbGROb2RlLCAgLy8vXG4gICAgICAgICAgICBlbWFpbEFkZHJlc3MgPSBlbWFpbEFkZHJlc3NGcm9tVGVybWluYWxOb2RlKHRlcm1pbmFsTm9kZSk7XG5cbiAgICAgIHJldHVybiBlbWFpbEFkZHJlc3M7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZW1haWxBZGRyZXNzO1xuICB9XG5cbiAgZW1haWxBZGRyZXNzKGNvbnRleHQpIHtcbiAgICBjb25zdCBzaW1wbGUgPSB0aGlzLmlzU2ltcGxlKCksXG4gICAgICAgICAgZW1haWxBZGRyZXNzID0gc2ltcGxlID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVtYWlsQWRkcmVzc0Zyb21GaXJzdExhc3RDaGlsZE5vZGUoY29udGV4dCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWFpbEFkZHJlc3NGcm9tU2Vjb25kTGFzdENoaWxkTm9kZShjb250ZXh0KTtcblxuICAgIHJldHVybiBlbWFpbEFkZHJlc3M7XG4gIH1cblxuICBpc1NpbXBsZSgpIHtcbiAgICBjb25zdCBzaW1wbGUgPSB0aGlzLmZyb21GaXJzdExhc3RDaGlsZE5vZGUoKGZpcnN0TGFzdENoaWxkTm9kZSkgPT4ge1xuICAgICAgY29uc3QgdGVybWluYWxOb2RlID0gZmlyc3RMYXN0Q2hpbGROb2RlLCAgLy8vXG4gICAgICAgICAgICB0eXBlID0gdGVybWluYWxOb2RlLmdldFR5cGUoKSxcbiAgICAgICAgICAgIHR5cGVFbWFpbEFkZHJlc3NUb2tlblR5cGUgPSAodHlwZSA9PT0gRU1BSUxfQUREUkVTU19UT0tFTl9UWVBFKSxcbiAgICAgICAgICAgIHNpbXBsZSA9IHR5cGVFbWFpbEFkZHJlc3NUb2tlblR5cGU7IC8vL1xuXG4gICAgICByZXR1cm4gc2ltcGxlO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHNpbXBsZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eShydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSkgeyByZXR1cm4gTWFya2Rvd25Ob2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5KEVtYWlsTGlua01hcmtkb3duTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHkpOyB9XG59XG5cbmZ1bmN0aW9uIGVtYWlsQWRkcmVzc0Zyb21UZXJtaW5hbE5vZGUodGVybWluYWxOb2RlKSB7XG4gIGxldCBlbWFpbEFkZHJlc3MgPSBudWxsO1xuXG4gIGNvbnN0IHR5cGUgPSB0ZXJtaW5hbE5vZGUuZ2V0VHlwZSgpLFxuICAgICAgICB0eXBlRW1haWxBZGRyZXNzVG9rZW5UeXBlID0gKHR5cGUgPT09IEVNQUlMX0FERFJFU1NfVE9LRU5fVFlQRSk7XG5cbiAgaWYgKHR5cGVFbWFpbEFkZHJlc3NUb2tlblR5cGUpIHtcbiAgICBjb25zdCBjb250ZW50ID0gdGVybWluYWxOb2RlLmdldENvbnRlbnQoKTtcblxuICAgIGVtYWlsQWRkcmVzcyA9IGNvbnRlbnQ7IC8vL1xuICB9XG5cbiAgcmV0dXJuIGVtYWlsQWRkcmVzcztcbn0iXSwibmFtZXMiOlsiRW1haWxMaW5rTWFya2Rvd25Ob2RlIiwiZW1haWxBZGRyZXNzRnJvbVNlY29uZExhc3RDaGlsZE5vZGUiLCJjb250ZXh0IiwiZW1haWxBZGRyZXNzIiwiZnJvbVNlY29uZExhc3RDaGlsZE5vZGUiLCJzZWNvbmRMYXN0Q2hpbGROb2RlIiwidGVybWluYWxOb2RlIiwiZW1haWxBZGRyZXNzRnJvbVRlcm1pbmFsTm9kZSIsImVtYWlsQWRkcmVzc0Zyb21GaXJzdExhc3RDaGlsZE5vZGUiLCJmcm9tRmlyc3RMYXN0Q2hpbGROb2RlIiwiZmlyc3RMYXN0Q2hpbGROb2RlIiwic2ltcGxlIiwiaXNTaW1wbGUiLCJ0eXBlIiwiZ2V0VHlwZSIsInR5cGVFbWFpbEFkZHJlc3NUb2tlblR5cGUiLCJFTUFJTF9BRERSRVNTX1RPS0VOX1RZUEUiLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eSIsInJ1bGVOYW1lIiwiY2hpbGROb2RlcyIsIm9wYWNpdHkiLCJNYXJrZG93bk5vZGUiLCJjb250ZW50IiwiZ2V0Q29udGVudCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFNcUJBOzs7K0RBSkk7MEJBRWdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTFCLElBQUEsQUFBTUEsc0NBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO1FBQU4sT0FBQSxrQkFBTUE7O2tCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQSxvQ0FBb0NDLE9BQU87Z0JBQ3pDLElBQU1DLGVBQWUsSUFBSSxDQUFDQyx1QkFBdUIsQ0FBQyxTQUFDQztvQkFDakQsSUFBTUMsZUFBZUQscUJBQ2ZGLGVBQWVJLDZCQUE2QkQ7b0JBRWxELE9BQU9IO2dCQUNUO2dCQUVBLE9BQU9BO1lBQ1Q7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUEsbUNBQW1DTixPQUFPO2dCQUN4QyxJQUFNQyxlQUFlLElBQUksQ0FBQ00sc0JBQXNCLENBQUMsU0FBQ0M7b0JBQ2hELElBQU1KLGVBQWVJLG9CQUNmUCxlQUFlSSw2QkFBNkJEO29CQUVsRCxPQUFPSDtnQkFDVDtnQkFFQSxPQUFPQTtZQUNUOzs7WUFFQUEsS0FBQUE7bUJBQUFBLFNBQUFBLGFBQWFELE9BQU87Z0JBQ2xCLElBQU1TLFNBQVMsSUFBSSxDQUFDQyxRQUFRLElBQ3RCVCxlQUFlUSxTQUNHLElBQUksQ0FBQ0gsa0NBQWtDLENBQUNOLFdBQ3RDLElBQUksQ0FBQ0QsbUNBQW1DLENBQUNDO2dCQUVuRSxPQUFPQztZQUNUOzs7WUFFQVMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1ELFNBQVMsSUFBSSxDQUFDRixzQkFBc0IsQ0FBQyxTQUFDQztvQkFDMUMsSUFBTUosZUFBZUksb0JBQ2ZHLE9BQU9QLGFBQWFRLE9BQU8sSUFDM0JDLDRCQUE2QkYsU0FBU0csb0NBQXdCLEVBQzlETCxTQUFTSSwyQkFBMkIsR0FBRztvQkFFN0MsT0FBT0o7Z0JBQ1Q7Z0JBRUEsT0FBT0E7WUFDVDs7OztZQUVPTSxLQUFBQTttQkFBUCxTQUFPQSxpQ0FBaUNDLFFBQVEsRUFBRUMsVUFBVSxFQUFFQyxPQUFPO2dCQUFJLE9BQU9DLGlCQUFZLENBQUNKLGdDQUFnQyxDQTdDMUdqQix1QkE2Q2tJa0IsVUFBVUMsWUFBWUM7WUFBVTs7O1dBN0NsS3BCO0VBQThCcUIsaUJBQVk7QUFnRC9ELFNBQVNkLDZCQUE2QkQsWUFBWTtJQUNoRCxJQUFJSCxlQUFlO0lBRW5CLElBQU1VLE9BQU9QLGFBQWFRLE9BQU8sSUFDM0JDLDRCQUE2QkYsU0FBU0csb0NBQXdCO0lBRXBFLElBQUlELDJCQUEyQjtRQUM3QixJQUFNTyxVQUFVaEIsYUFBYWlCLFVBQVU7UUFFdkNwQixlQUFlbUIsU0FBUyxHQUFHO0lBQzdCO0lBRUEsT0FBT25CO0FBQ1QifQ==