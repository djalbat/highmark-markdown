"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _markdown = /*#__PURE__*/ _interop_require_default(require("../../node/markdown"));
var _content = /*#__PURE__*/ _interop_require_default(require("../../mixins/content"));
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
            key: "inlineText",
            value: function inlineText(context) {
                var inlineText = null;
                var multiplicity = this.getMultiplicity();
                if (multiplicity > 1) {
                    inlineText = this.fromSecondChildNode(function(secondChildNode) {
                        var indent = null, inlineTextMarkdownNode = secondChildNode, inlineTextMarkdownNodeHTML = inlineTextMarkdownNode.asHTML(indent, context);
                        inlineText = inlineTextMarkdownNodeHTML; ///
                    });
                }
                return inlineText;
            }
        },
        {
            key: "emailAddress",
            value: function emailAddress(context) {
                var multiplicity = this.getMultiplicity();
                var emailAddressTerminalNode;
                if (multiplicity === 1) {
                    emailAddressTerminalNode = this.fromFirstChildNode(function(firstChildNode) {
                        var emailAddressTerminalNode = firstChildNode; ///
                        return emailAddressTerminalNode;
                    });
                } else {
                    emailAddressTerminalNode = this.fromSecondLastChildNode(function(secondLastChildNode) {
                        var emailAddressTerminalNode = secondLastChildNode; ///
                        return emailAddressTerminalNode;
                    });
                }
                var emailAddressTerminalNodeContent = emailAddressTerminalNode.getContent(), emailAddress = emailAddressTerminalNodeContent; ///
                return emailAddress;
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
Object.assign(EmailLinkMarkdownNode.prototype, _content.default);
var _default = EmailLinkMarkdownNode;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2VtYWlsTGluay5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE1hcmtkb3duTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9tYXJrZG93blwiO1xuaW1wb3J0IGNvbnRlbnRNaXhpbnMgZnJvbSBcIi4uLy4uL21peGlucy9jb250ZW50XCI7XG5cbmNsYXNzIEVtYWlsTGlua01hcmtkb3duTm9kZSBleHRlbmRzIE1hcmtkb3duTm9kZSB7XG4gIGlubGluZVRleHQoY29udGV4dCkge1xuICAgIGxldCBpbmxpbmVUZXh0ID0gbnVsbDtcblxuICAgIGNvbnN0IG11bHRpcGxpY2l0eSA9IHRoaXMuZ2V0TXVsdGlwbGljaXR5KCk7XG5cbiAgICBpZiAobXVsdGlwbGljaXR5ID4gMSkge1xuICAgICAgaW5saW5lVGV4dCA9IHRoaXMuZnJvbVNlY29uZENoaWxkTm9kZSgoc2Vjb25kQ2hpbGROb2RlKSA9PiB7XG4gICAgICAgIGNvbnN0IGluZGVudCA9IG51bGwsXG4gICAgICAgICAgICAgIGlubGluZVRleHRNYXJrZG93bk5vZGUgPSBzZWNvbmRDaGlsZE5vZGUsIC8vL1xuICAgICAgICAgICAgICBpbmxpbmVUZXh0TWFya2Rvd25Ob2RlSFRNTCA9IGlubGluZVRleHRNYXJrZG93bk5vZGUuYXNIVE1MKGluZGVudCwgY29udGV4dCk7XG5cbiAgICAgICAgaW5saW5lVGV4dCA9IGlubGluZVRleHRNYXJrZG93bk5vZGVIVE1MOyAgLy8vXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gaW5saW5lVGV4dDtcbiAgfVxuXG4gIGVtYWlsQWRkcmVzcyhjb250ZXh0KSB7XG4gICAgY29uc3QgbXVsdGlwbGljaXR5ID0gdGhpcy5nZXRNdWx0aXBsaWNpdHkoKTtcblxuICAgIGxldCBlbWFpbEFkZHJlc3NUZXJtaW5hbE5vZGU7XG5cbiAgICBpZiAobXVsdGlwbGljaXR5ID09PSAxKSB7XG4gICAgICBlbWFpbEFkZHJlc3NUZXJtaW5hbE5vZGUgPSB0aGlzLmZyb21GaXJzdENoaWxkTm9kZSgoZmlyc3RDaGlsZE5vZGUpID0+IHtcbiAgICAgICAgY29uc3QgZW1haWxBZGRyZXNzVGVybWluYWxOb2RlID0gZmlyc3RDaGlsZE5vZGU7ICAvLy9cblxuICAgICAgICByZXR1cm4gZW1haWxBZGRyZXNzVGVybWluYWxOb2RlO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVtYWlsQWRkcmVzc1Rlcm1pbmFsTm9kZSA9IHRoaXMuZnJvbVNlY29uZExhc3RDaGlsZE5vZGUoKHNlY29uZExhc3RDaGlsZE5vZGUpID0+IHtcbiAgICAgICAgY29uc3QgZW1haWxBZGRyZXNzVGVybWluYWxOb2RlID0gc2Vjb25kTGFzdENoaWxkTm9kZTsgIC8vL1xuXG4gICAgICAgIHJldHVybiBlbWFpbEFkZHJlc3NUZXJtaW5hbE5vZGU7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBlbWFpbEFkZHJlc3NUZXJtaW5hbE5vZGVDb250ZW50ID0gZW1haWxBZGRyZXNzVGVybWluYWxOb2RlLmdldENvbnRlbnQoKSxcbiAgICAgICAgICBlbWFpbEFkZHJlc3MgPSBlbWFpbEFkZHJlc3NUZXJtaW5hbE5vZGVDb250ZW50OyAvLy9cblxuICAgIHJldHVybiBlbWFpbEFkZHJlc3M7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkocnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHkpIHsgcmV0dXJuIE1hcmtkb3duTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eShFbWFpbExpbmtNYXJrZG93bk5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5KTsgfVxufVxuXG5PYmplY3QuYXNzaWduKEVtYWlsTGlua01hcmtkb3duTm9kZS5wcm90b3R5cGUsIGNvbnRlbnRNaXhpbnMpO1xuXG5leHBvcnQgZGVmYXVsdCBFbWFpbExpbmtNYXJrZG93bk5vZGU7XG4iXSwibmFtZXMiOlsiRW1haWxMaW5rTWFya2Rvd25Ob2RlIiwiaW5saW5lVGV4dCIsImNvbnRleHQiLCJtdWx0aXBsaWNpdHkiLCJnZXRNdWx0aXBsaWNpdHkiLCJmcm9tU2Vjb25kQ2hpbGROb2RlIiwic2Vjb25kQ2hpbGROb2RlIiwiaW5kZW50IiwiaW5saW5lVGV4dE1hcmtkb3duTm9kZSIsImlubGluZVRleHRNYXJrZG93bk5vZGVIVE1MIiwiYXNIVE1MIiwiZW1haWxBZGRyZXNzIiwiZW1haWxBZGRyZXNzVGVybWluYWxOb2RlIiwiZnJvbUZpcnN0Q2hpbGROb2RlIiwiZmlyc3RDaGlsZE5vZGUiLCJmcm9tU2Vjb25kTGFzdENoaWxkTm9kZSIsInNlY29uZExhc3RDaGlsZE5vZGUiLCJlbWFpbEFkZHJlc3NUZXJtaW5hbE5vZGVDb250ZW50IiwiZ2V0Q29udGVudCIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5IiwicnVsZU5hbWUiLCJjaGlsZE5vZGVzIiwib3BhY2l0eSIsIk1hcmtkb3duTm9kZSIsIk9iamVjdCIsImFzc2lnbiIsInByb3RvdHlwZSIsImNvbnRlbnRNaXhpbnMiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQXNEQTs7O2VBQUE7OzsrREFwRHlCOzhEQUNDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTFCLElBQUEsQUFBTUEsc0NBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO2VBQU4sa0JBQU1BOztrQkFBQUE7O1lBQ0pDLEtBQUFBO21CQUFBQSxTQUFBQSxXQUFXQyxPQUFPO2dCQUNoQixJQUFJRCxhQUFhO2dCQUVqQixJQUFNRSxlQUFlLElBQUksQ0FBQ0MsZUFBZTtnQkFFekMsSUFBSUQsZUFBZSxHQUFHO29CQUNwQkYsYUFBYSxJQUFJLENBQUNJLG1CQUFtQixDQUFDLFNBQUNDO3dCQUNyQyxJQUFNQyxTQUFTLE1BQ1RDLHlCQUF5QkYsaUJBQ3pCRyw2QkFBNkJELHVCQUF1QkUsTUFBTSxDQUFDSCxRQUFRTDt3QkFFekVELGFBQWFRLDRCQUE2QixHQUFHO29CQUMvQztnQkFDRjtnQkFFQSxPQUFPUjtZQUNUOzs7WUFFQVUsS0FBQUE7bUJBQUFBLFNBQUFBLGFBQWFULE9BQU87Z0JBQ2xCLElBQU1DLGVBQWUsSUFBSSxDQUFDQyxlQUFlO2dCQUV6QyxJQUFJUTtnQkFFSixJQUFJVCxpQkFBaUIsR0FBRztvQkFDdEJTLDJCQUEyQixJQUFJLENBQUNDLGtCQUFrQixDQUFDLFNBQUNDO3dCQUNsRCxJQUFNRiwyQkFBMkJFLGdCQUFpQixHQUFHO3dCQUVyRCxPQUFPRjtvQkFDVDtnQkFDRixPQUFPO29CQUNMQSwyQkFBMkIsSUFBSSxDQUFDRyx1QkFBdUIsQ0FBQyxTQUFDQzt3QkFDdkQsSUFBTUosMkJBQTJCSSxxQkFBc0IsR0FBRzt3QkFFMUQsT0FBT0o7b0JBQ1Q7Z0JBQ0Y7Z0JBRUEsSUFBTUssa0NBQWtDTCx5QkFBeUJNLFVBQVUsSUFDckVQLGVBQWVNLGlDQUFpQyxHQUFHO2dCQUV6RCxPQUFPTjtZQUNUOzs7O1lBRU9RLEtBQUFBO21CQUFQLFNBQU9BLGlDQUFpQ0MsUUFBUSxFQUFFQyxVQUFVLEVBQUVDLE9BQU87Z0JBQUksT0FBT0MsaUJBQVksQ0FBQ0osZ0NBQWdDLENBNUN6SG5CLHVCQTRDaUpvQixVQUFVQyxZQUFZQztZQUFVOzs7V0E1Q2pMdEI7RUFBOEJ1QixpQkFBWTtBQStDaERDLE9BQU9DLE1BQU0sQ0FBQ3pCLHNCQUFzQjBCLFNBQVMsRUFBRUMsZ0JBQWE7SUFFNUQsV0FBZTNCIn0=