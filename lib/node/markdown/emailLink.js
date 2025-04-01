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
var _attributeNames = require("../../attributeNames");
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
function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
    } else {
        _get = function get(target, property, receiver) {
            var base = _super_prop_base(target, property);
            if (!base) return;
            var desc = Object.getOwnPropertyDescriptor(base, property);
            if (desc.get) {
                return desc.get.call(receiver || target);
            }
            return desc.value;
        };
    }
    return _get(target, property, receiver || target);
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
function _super_prop_base(object, property) {
    while(!Object.prototype.hasOwnProperty.call(object, property)){
        object = _get_prototype_of(object);
        if (object === null) break;
    }
    return object;
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
        },
        {
            key: "attributeName",
            value: function attributeName(context) {
                var attributeName = _attributeNames.HREF_ATTRIBUTE_NAME;
                return attributeName;
            }
        },
        {
            key: "attributeValue",
            value: function attributeValue(context) {
                var emailAddress = this.emailAddress(context), attributeValue = "mailto:".concat(emailAddress);
                return attributeValue;
            }
        },
        {
            key: "createDOMElement",
            value: function createDOMElement(context) {
                var content;
                var inlineText = this.inlineText(context);
                if (inlineText !== null) {
                    content = inlineText; ///
                } else {
                    content = this.content(context);
                }
                var domElement;
                var textNode = document.createTextNode(content);
                domElement = _get(_get_prototype_of(EmailLinkMarkdownNode.prototype), "createDOMElement", this).call(this, context);
                var parentDOMElement = domElement; ///
                domElement = textNode; ///
                parentDOMElement.appendChild(domElement);
                domElement = parentDOMElement; ///
                return domElement;
            }
        },
        {
            key: "childNodesAsHTML",
            value: function childNodesAsHTML(indent, context) {
                var content;
                var inlineText = this.inlineText(context);
                if (inlineText !== null) {
                    content = inlineText; ///
                } else {
                    content = this.content(context);
                }
                var childNodesHTML = content;
                return childNodesHTML;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2VtYWlsTGluay5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE1hcmtkb3duTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9tYXJrZG93blwiO1xuaW1wb3J0IGNvbnRlbnRNaXhpbnMgZnJvbSBcIi4uLy4uL21peGlucy9jb250ZW50XCI7XG5cbmltcG9ydCB7IEhSRUZfQVRUUklCVVRFX05BTUUgfSBmcm9tIFwiLi4vLi4vYXR0cmlidXRlTmFtZXNcIjtcblxuY2xhc3MgRW1haWxMaW5rTWFya2Rvd25Ob2RlIGV4dGVuZHMgTWFya2Rvd25Ob2RlIHtcbiAgaW5saW5lVGV4dChjb250ZXh0KSB7XG4gICAgbGV0IGlubGluZVRleHQgPSBudWxsO1xuXG4gICAgY29uc3QgbXVsdGlwbGljaXR5ID0gdGhpcy5nZXRNdWx0aXBsaWNpdHkoKTtcblxuICAgIGlmIChtdWx0aXBsaWNpdHkgPiAxKSB7XG4gICAgICBpbmxpbmVUZXh0ID0gdGhpcy5mcm9tU2Vjb25kQ2hpbGROb2RlKChzZWNvbmRDaGlsZE5vZGUpID0+IHtcbiAgICAgICAgY29uc3QgaW5kZW50ID0gbnVsbCxcbiAgICAgICAgICAgICAgaW5saW5lVGV4dE1hcmtkb3duTm9kZSA9IHNlY29uZENoaWxkTm9kZSwgLy8vXG4gICAgICAgICAgICAgIGlubGluZVRleHRNYXJrZG93bk5vZGVIVE1MID0gaW5saW5lVGV4dE1hcmtkb3duTm9kZS5hc0hUTUwoaW5kZW50LCBjb250ZXh0KTtcblxuICAgICAgICBpbmxpbmVUZXh0ID0gaW5saW5lVGV4dE1hcmtkb3duTm9kZUhUTUw7ICAvLy9cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBpbmxpbmVUZXh0O1xuICB9XG5cbiAgZW1haWxBZGRyZXNzKGNvbnRleHQpIHtcbiAgICBjb25zdCBtdWx0aXBsaWNpdHkgPSB0aGlzLmdldE11bHRpcGxpY2l0eSgpO1xuXG4gICAgbGV0IGVtYWlsQWRkcmVzc1Rlcm1pbmFsTm9kZTtcblxuICAgIGlmIChtdWx0aXBsaWNpdHkgPT09IDEpIHtcbiAgICAgIGVtYWlsQWRkcmVzc1Rlcm1pbmFsTm9kZSA9IHRoaXMuZnJvbUZpcnN0Q2hpbGROb2RlKChmaXJzdENoaWxkTm9kZSkgPT4ge1xuICAgICAgICBjb25zdCBlbWFpbEFkZHJlc3NUZXJtaW5hbE5vZGUgPSBmaXJzdENoaWxkTm9kZTsgIC8vL1xuXG4gICAgICAgIHJldHVybiBlbWFpbEFkZHJlc3NUZXJtaW5hbE5vZGU7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZW1haWxBZGRyZXNzVGVybWluYWxOb2RlID0gdGhpcy5mcm9tU2Vjb25kTGFzdENoaWxkTm9kZSgoc2Vjb25kTGFzdENoaWxkTm9kZSkgPT4ge1xuICAgICAgICBjb25zdCBlbWFpbEFkZHJlc3NUZXJtaW5hbE5vZGUgPSBzZWNvbmRMYXN0Q2hpbGROb2RlOyAgLy8vXG5cbiAgICAgICAgcmV0dXJuIGVtYWlsQWRkcmVzc1Rlcm1pbmFsTm9kZTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IGVtYWlsQWRkcmVzc1Rlcm1pbmFsTm9kZUNvbnRlbnQgPSBlbWFpbEFkZHJlc3NUZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpLFxuICAgICAgICAgIGVtYWlsQWRkcmVzcyA9IGVtYWlsQWRkcmVzc1Rlcm1pbmFsTm9kZUNvbnRlbnQ7IC8vL1xuXG4gICAgcmV0dXJuIGVtYWlsQWRkcmVzcztcbiAgfVxuXG4gIGF0dHJpYnV0ZU5hbWUoY29udGV4dCkge1xuICAgIGNvbnN0IGF0dHJpYnV0ZU5hbWUgPSBIUkVGX0FUVFJJQlVURV9OQU1FO1xuXG4gICAgcmV0dXJuIGF0dHJpYnV0ZU5hbWU7XG4gIH1cblxuICBhdHRyaWJ1dGVWYWx1ZShjb250ZXh0KSB7XG4gICAgY29uc3QgZW1haWxBZGRyZXNzID0gdGhpcy5lbWFpbEFkZHJlc3MoY29udGV4dCksXG4gICAgICAgICAgYXR0cmlidXRlVmFsdWUgPSBgbWFpbHRvOiR7ZW1haWxBZGRyZXNzfWA7XG5cbiAgICByZXR1cm4gYXR0cmlidXRlVmFsdWU7XG4gIH1cblxuICBjcmVhdGVET01FbGVtZW50KGNvbnRleHQpIHtcbiAgICBsZXQgY29udGVudDtcblxuICAgIGNvbnN0IGlubGluZVRleHQgPSB0aGlzLmlubGluZVRleHQoY29udGV4dCk7XG5cbiAgICBpZiAoaW5saW5lVGV4dCAhPT0gbnVsbCkge1xuICAgICAgY29udGVudCA9IGlubGluZVRleHQ7IC8vL1xuICAgIH0gZWxzZSB7XG4gICAgICBjb250ZW50ID0gdGhpcy5jb250ZW50KGNvbnRleHQpO1xuICAgIH1cblxuICAgIGxldCBkb21FbGVtZW50O1xuXG4gICAgY29uc3QgdGV4dE5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjb250ZW50KTtcblxuICAgIGRvbUVsZW1lbnQgPSBzdXBlci5jcmVhdGVET01FbGVtZW50KGNvbnRleHQpO1xuXG4gICAgY29uc3QgcGFyZW50RE9NRWxlbWVudCA9IGRvbUVsZW1lbnQ7ICAvLy9cblxuICAgIGRvbUVsZW1lbnQgPSB0ZXh0Tm9kZTsgLy8vXG5cbiAgICBwYXJlbnRET01FbGVtZW50LmFwcGVuZENoaWxkKGRvbUVsZW1lbnQpO1xuXG4gICAgZG9tRWxlbWVudCA9IHBhcmVudERPTUVsZW1lbnQ7ICAvLy9cblxuICAgIHJldHVybiBkb21FbGVtZW50O1xuICB9XG5cbiAgY2hpbGROb2Rlc0FzSFRNTChpbmRlbnQsIGNvbnRleHQpIHtcbiAgICBsZXQgY29udGVudDtcblxuICAgIGNvbnN0IGlubGluZVRleHQgPSB0aGlzLmlubGluZVRleHQoY29udGV4dCk7XG5cbiAgICBpZiAoaW5saW5lVGV4dCAhPT0gbnVsbCkge1xuICAgICAgY29udGVudCA9IGlubGluZVRleHQ7ICAvLy9cbiAgICB9IGVsc2Uge1xuICAgICAgY29udGVudCA9IHRoaXMuY29udGVudChjb250ZXh0KTtcbiAgICB9XG5cbiAgICBjb25zdCBjaGlsZE5vZGVzSFRNTCA9IGNvbnRlbnQ7XG5cbiAgICByZXR1cm4gY2hpbGROb2Rlc0hUTUw7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkocnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHkpIHsgcmV0dXJuIE1hcmtkb3duTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eShFbWFpbExpbmtNYXJrZG93bk5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5KTsgfVxufVxuXG5PYmplY3QuYXNzaWduKEVtYWlsTGlua01hcmtkb3duTm9kZS5wcm90b3R5cGUsIGNvbnRlbnRNaXhpbnMpO1xuXG5leHBvcnQgZGVmYXVsdCBFbWFpbExpbmtNYXJrZG93bk5vZGU7XG4iXSwibmFtZXMiOlsiRW1haWxMaW5rTWFya2Rvd25Ob2RlIiwiaW5saW5lVGV4dCIsImNvbnRleHQiLCJtdWx0aXBsaWNpdHkiLCJnZXRNdWx0aXBsaWNpdHkiLCJmcm9tU2Vjb25kQ2hpbGROb2RlIiwic2Vjb25kQ2hpbGROb2RlIiwiaW5kZW50IiwiaW5saW5lVGV4dE1hcmtkb3duTm9kZSIsImlubGluZVRleHRNYXJrZG93bk5vZGVIVE1MIiwiYXNIVE1MIiwiZW1haWxBZGRyZXNzIiwiZW1haWxBZGRyZXNzVGVybWluYWxOb2RlIiwiZnJvbUZpcnN0Q2hpbGROb2RlIiwiZmlyc3RDaGlsZE5vZGUiLCJmcm9tU2Vjb25kTGFzdENoaWxkTm9kZSIsInNlY29uZExhc3RDaGlsZE5vZGUiLCJlbWFpbEFkZHJlc3NUZXJtaW5hbE5vZGVDb250ZW50IiwiZ2V0Q29udGVudCIsImF0dHJpYnV0ZU5hbWUiLCJIUkVGX0FUVFJJQlVURV9OQU1FIiwiYXR0cmlidXRlVmFsdWUiLCJjcmVhdGVET01FbGVtZW50IiwiY29udGVudCIsImRvbUVsZW1lbnQiLCJ0ZXh0Tm9kZSIsImRvY3VtZW50IiwiY3JlYXRlVGV4dE5vZGUiLCJwYXJlbnRET01FbGVtZW50IiwiYXBwZW5kQ2hpbGQiLCJjaGlsZE5vZGVzQXNIVE1MIiwiY2hpbGROb2Rlc0hUTUwiLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eSIsInJ1bGVOYW1lIiwiY2hpbGROb2RlcyIsIm9wYWNpdHkiLCJNYXJrZG93bk5vZGUiLCJPYmplY3QiLCJhc3NpZ24iLCJwcm90b3R5cGUiLCJjb250ZW50TWl4aW5zIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFpSEE7OztlQUFBOzs7K0RBL0d5Qjs4REFDQzs4QkFFVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXBDLElBQUEsQUFBTUEsc0NBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO2VBQU4sa0JBQU1BOztrQkFBQUE7O1lBQ0pDLEtBQUFBO21CQUFBQSxTQUFBQSxXQUFXQyxPQUFPO2dCQUNoQixJQUFJRCxhQUFhO2dCQUVqQixJQUFNRSxlQUFlLElBQUksQ0FBQ0MsZUFBZTtnQkFFekMsSUFBSUQsZUFBZSxHQUFHO29CQUNwQkYsYUFBYSxJQUFJLENBQUNJLG1CQUFtQixDQUFDLFNBQUNDO3dCQUNyQyxJQUFNQyxTQUFTLE1BQ1RDLHlCQUF5QkYsaUJBQ3pCRyw2QkFBNkJELHVCQUF1QkUsTUFBTSxDQUFDSCxRQUFRTDt3QkFFekVELGFBQWFRLDRCQUE2QixHQUFHO29CQUMvQztnQkFDRjtnQkFFQSxPQUFPUjtZQUNUOzs7WUFFQVUsS0FBQUE7bUJBQUFBLFNBQUFBLGFBQWFULE9BQU87Z0JBQ2xCLElBQU1DLGVBQWUsSUFBSSxDQUFDQyxlQUFlO2dCQUV6QyxJQUFJUTtnQkFFSixJQUFJVCxpQkFBaUIsR0FBRztvQkFDdEJTLDJCQUEyQixJQUFJLENBQUNDLGtCQUFrQixDQUFDLFNBQUNDO3dCQUNsRCxJQUFNRiwyQkFBMkJFLGdCQUFpQixHQUFHO3dCQUVyRCxPQUFPRjtvQkFDVDtnQkFDRixPQUFPO29CQUNMQSwyQkFBMkIsSUFBSSxDQUFDRyx1QkFBdUIsQ0FBQyxTQUFDQzt3QkFDdkQsSUFBTUosMkJBQTJCSSxxQkFBc0IsR0FBRzt3QkFFMUQsT0FBT0o7b0JBQ1Q7Z0JBQ0Y7Z0JBRUEsSUFBTUssa0NBQWtDTCx5QkFBeUJNLFVBQVUsSUFDckVQLGVBQWVNLGlDQUFpQyxHQUFHO2dCQUV6RCxPQUFPTjtZQUNUOzs7WUFFQVEsS0FBQUE7bUJBQUFBLFNBQUFBLGNBQWNqQixPQUFPO2dCQUNuQixJQUFNaUIsZ0JBQWdCQyxtQ0FBbUI7Z0JBRXpDLE9BQU9EO1lBQ1Q7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsZUFBZW5CLE9BQU87Z0JBQ3BCLElBQU1TLGVBQWUsSUFBSSxDQUFDQSxZQUFZLENBQUNULFVBQ2pDbUIsaUJBQWlCLEFBQUMsVUFBc0IsT0FBYlY7Z0JBRWpDLE9BQU9VO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsaUJBQWlCcEIsT0FBTztnQkFDdEIsSUFBSXFCO2dCQUVKLElBQU10QixhQUFhLElBQUksQ0FBQ0EsVUFBVSxDQUFDQztnQkFFbkMsSUFBSUQsZUFBZSxNQUFNO29CQUN2QnNCLFVBQVV0QixZQUFZLEdBQUc7Z0JBQzNCLE9BQU87b0JBQ0xzQixVQUFVLElBQUksQ0FBQ0EsT0FBTyxDQUFDckI7Z0JBQ3pCO2dCQUVBLElBQUlzQjtnQkFFSixJQUFNQyxXQUFXQyxTQUFTQyxjQUFjLENBQUNKO2dCQUV6Q0MsYUFBYSx1QkF4RVh4QixrQ0F3RWlCc0Isb0JBQU4sSUFBSyxhQUFrQnBCO2dCQUVwQyxJQUFNMEIsbUJBQW1CSixZQUFhLEdBQUc7Z0JBRXpDQSxhQUFhQyxVQUFVLEdBQUc7Z0JBRTFCRyxpQkFBaUJDLFdBQVcsQ0FBQ0w7Z0JBRTdCQSxhQUFhSSxrQkFBbUIsR0FBRztnQkFFbkMsT0FBT0o7WUFDVDs7O1lBRUFNLEtBQUFBO21CQUFBQSxTQUFBQSxpQkFBaUJ2QixNQUFNLEVBQUVMLE9BQU87Z0JBQzlCLElBQUlxQjtnQkFFSixJQUFNdEIsYUFBYSxJQUFJLENBQUNBLFVBQVUsQ0FBQ0M7Z0JBRW5DLElBQUlELGVBQWUsTUFBTTtvQkFDdkJzQixVQUFVdEIsWUFBYSxHQUFHO2dCQUM1QixPQUFPO29CQUNMc0IsVUFBVSxJQUFJLENBQUNBLE9BQU8sQ0FBQ3JCO2dCQUN6QjtnQkFFQSxJQUFNNkIsaUJBQWlCUjtnQkFFdkIsT0FBT1E7WUFDVDs7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSxpQ0FBaUNDLFFBQVEsRUFBRUMsVUFBVSxFQUFFQyxPQUFPO2dCQUFJLE9BQU9DLGlCQUFZLENBQUNKLGdDQUFnQyxDQXJHekhoQyx1QkFxR2lKaUMsVUFBVUMsWUFBWUM7WUFBVTs7O1dBckdqTG5DO0VBQThCb0MsaUJBQVk7QUF3R2hEQyxPQUFPQyxNQUFNLENBQUN0QyxzQkFBc0J1QyxTQUFTLEVBQUVDLGdCQUFhO0lBRTVELFdBQWV4QyJ9