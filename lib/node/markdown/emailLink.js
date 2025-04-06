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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2VtYWlsTGluay5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE1hcmtkb3duTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9tYXJrZG93blwiO1xuaW1wb3J0IGNvbnRlbnRNaXhpbnMgZnJvbSBcIi4uLy4uL21peGlucy9jb250ZW50XCI7XG5cbmltcG9ydCB7IEhSRUZfQVRUUklCVVRFX05BTUUgfSBmcm9tIFwiLi4vLi4vYXR0cmlidXRlTmFtZXNcIjtcblxuY2xhc3MgRW1haWxMaW5rTWFya2Rvd25Ob2RlIGV4dGVuZHMgTWFya2Rvd25Ob2RlIHtcbiAgaW5saW5lVGV4dChjb250ZXh0KSB7XG4gICAgbGV0IGlubGluZVRleHQgPSBudWxsO1xuXG4gICAgY29uc3QgbXVsdGlwbGljaXR5ID0gdGhpcy5nZXRNdWx0aXBsaWNpdHkoKTtcblxuICAgIGlmIChtdWx0aXBsaWNpdHkgPiAxKSB7XG4gICAgICBpbmxpbmVUZXh0ID0gdGhpcy5mcm9tU2Vjb25kQ2hpbGROb2RlKChzZWNvbmRDaGlsZE5vZGUpID0+IHtcbiAgICAgICAgY29uc3QgaW5kZW50ID0gbnVsbCxcbiAgICAgICAgICAgICAgaW5saW5lVGV4dE1hcmtkb3duTm9kZSA9IHNlY29uZENoaWxkTm9kZSwgLy8vXG4gICAgICAgICAgICAgIGlubGluZVRleHRNYXJrZG93bk5vZGVIVE1MID0gaW5saW5lVGV4dE1hcmtkb3duTm9kZS5hc0hUTUwoaW5kZW50LCBjb250ZXh0KTtcblxuICAgICAgICBpbmxpbmVUZXh0ID0gaW5saW5lVGV4dE1hcmtkb3duTm9kZUhUTUw7ICAvLy9cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBpbmxpbmVUZXh0O1xuICB9XG5cbiAgZW1haWxBZGRyZXNzKGNvbnRleHQpIHtcbiAgICBjb25zdCBtdWx0aXBsaWNpdHkgPSB0aGlzLmdldE11bHRpcGxpY2l0eSgpO1xuXG4gICAgbGV0IGVtYWlsQWRkcmVzc1Rlcm1pbmFsTm9kZTtcblxuICAgIGlmIChtdWx0aXBsaWNpdHkgPT09IDEpIHtcbiAgICAgIGVtYWlsQWRkcmVzc1Rlcm1pbmFsTm9kZSA9IHRoaXMuZnJvbUZpcnN0Q2hpbGROb2RlKChmaXJzdENoaWxkTm9kZSkgPT4ge1xuICAgICAgICBjb25zdCBlbWFpbEFkZHJlc3NUZXJtaW5hbE5vZGUgPSBmaXJzdENoaWxkTm9kZTsgIC8vL1xuXG4gICAgICAgIHJldHVybiBlbWFpbEFkZHJlc3NUZXJtaW5hbE5vZGU7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZW1haWxBZGRyZXNzVGVybWluYWxOb2RlID0gdGhpcy5mcm9tU2Vjb25kTGFzdENoaWxkTm9kZSgoc2Vjb25kTGFzdENoaWxkTm9kZSkgPT4ge1xuICAgICAgICBjb25zdCBlbWFpbEFkZHJlc3NUZXJtaW5hbE5vZGUgPSBzZWNvbmRMYXN0Q2hpbGROb2RlOyAgLy8vXG5cbiAgICAgICAgcmV0dXJuIGVtYWlsQWRkcmVzc1Rlcm1pbmFsTm9kZTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IGVtYWlsQWRkcmVzc1Rlcm1pbmFsTm9kZUNvbnRlbnQgPSBlbWFpbEFkZHJlc3NUZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpLFxuICAgICAgICAgIGVtYWlsQWRkcmVzcyA9IGVtYWlsQWRkcmVzc1Rlcm1pbmFsTm9kZUNvbnRlbnQ7IC8vL1xuXG4gICAgcmV0dXJuIGVtYWlsQWRkcmVzcztcbiAgfVxuXG4gIGNyZWF0ZURPTUVsZW1lbnQoY29udGV4dCkge1xuICAgIGxldCBjb250ZW50O1xuXG4gICAgY29uc3QgaW5saW5lVGV4dCA9IHRoaXMuaW5saW5lVGV4dChjb250ZXh0KTtcblxuICAgIGlmIChpbmxpbmVUZXh0ICE9PSBudWxsKSB7XG4gICAgICBjb250ZW50ID0gaW5saW5lVGV4dDsgLy8vXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRlbnQgPSB0aGlzLmNvbnRlbnQoY29udGV4dCk7XG4gICAgfVxuXG4gICAgbGV0IGRvbUVsZW1lbnQ7XG5cbiAgICBjb25zdCB0ZXh0Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNvbnRlbnQpO1xuXG4gICAgZG9tRWxlbWVudCA9IHN1cGVyLmNyZWF0ZURPTUVsZW1lbnQoY29udGV4dCk7XG5cbiAgICBjb25zdCBwYXJlbnRET01FbGVtZW50ID0gZG9tRWxlbWVudDsgIC8vL1xuXG4gICAgZG9tRWxlbWVudCA9IHRleHROb2RlOyAvLy9cblxuICAgIHBhcmVudERPTUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9tRWxlbWVudCk7XG5cbiAgICBkb21FbGVtZW50ID0gcGFyZW50RE9NRWxlbWVudDsgIC8vL1xuXG4gICAgcmV0dXJuIGRvbUVsZW1lbnQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkocnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHkpIHsgcmV0dXJuIE1hcmtkb3duTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eShFbWFpbExpbmtNYXJrZG93bk5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5KTsgfVxufVxuXG5PYmplY3QuYXNzaWduKEVtYWlsTGlua01hcmtkb3duTm9kZS5wcm90b3R5cGUsIGNvbnRlbnRNaXhpbnMpO1xuXG5leHBvcnQgZGVmYXVsdCBFbWFpbExpbmtNYXJrZG93bk5vZGU7XG4iXSwibmFtZXMiOlsiRW1haWxMaW5rTWFya2Rvd25Ob2RlIiwiaW5saW5lVGV4dCIsImNvbnRleHQiLCJtdWx0aXBsaWNpdHkiLCJnZXRNdWx0aXBsaWNpdHkiLCJmcm9tU2Vjb25kQ2hpbGROb2RlIiwic2Vjb25kQ2hpbGROb2RlIiwiaW5kZW50IiwiaW5saW5lVGV4dE1hcmtkb3duTm9kZSIsImlubGluZVRleHRNYXJrZG93bk5vZGVIVE1MIiwiYXNIVE1MIiwiZW1haWxBZGRyZXNzIiwiZW1haWxBZGRyZXNzVGVybWluYWxOb2RlIiwiZnJvbUZpcnN0Q2hpbGROb2RlIiwiZmlyc3RDaGlsZE5vZGUiLCJmcm9tU2Vjb25kTGFzdENoaWxkTm9kZSIsInNlY29uZExhc3RDaGlsZE5vZGUiLCJlbWFpbEFkZHJlc3NUZXJtaW5hbE5vZGVDb250ZW50IiwiZ2V0Q29udGVudCIsImNyZWF0ZURPTUVsZW1lbnQiLCJjb250ZW50IiwiZG9tRWxlbWVudCIsInRleHROb2RlIiwiZG9jdW1lbnQiLCJjcmVhdGVUZXh0Tm9kZSIsInBhcmVudERPTUVsZW1lbnQiLCJhcHBlbmRDaGlsZCIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5IiwicnVsZU5hbWUiLCJjaGlsZE5vZGVzIiwib3BhY2l0eSIsIk1hcmtkb3duTm9kZSIsIk9iamVjdCIsImFzc2lnbiIsInByb3RvdHlwZSIsImNvbnRlbnRNaXhpbnMiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQW9GQTs7O2VBQUE7OzsrREFsRnlCOzhEQUNDOzhCQUVVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFcEMsSUFBQSxBQUFNQSxzQ0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7ZUFBTixrQkFBTUE7O2tCQUFBQTs7WUFDSkMsS0FBQUE7bUJBQUFBLFNBQUFBLFdBQVdDLE9BQU87Z0JBQ2hCLElBQUlELGFBQWE7Z0JBRWpCLElBQU1FLGVBQWUsSUFBSSxDQUFDQyxlQUFlO2dCQUV6QyxJQUFJRCxlQUFlLEdBQUc7b0JBQ3BCRixhQUFhLElBQUksQ0FBQ0ksbUJBQW1CLENBQUMsU0FBQ0M7d0JBQ3JDLElBQU1DLFNBQVMsTUFDVEMseUJBQXlCRixpQkFDekJHLDZCQUE2QkQsdUJBQXVCRSxNQUFNLENBQUNILFFBQVFMO3dCQUV6RUQsYUFBYVEsNEJBQTZCLEdBQUc7b0JBQy9DO2dCQUNGO2dCQUVBLE9BQU9SO1lBQ1Q7OztZQUVBVSxLQUFBQTttQkFBQUEsU0FBQUEsYUFBYVQsT0FBTztnQkFDbEIsSUFBTUMsZUFBZSxJQUFJLENBQUNDLGVBQWU7Z0JBRXpDLElBQUlRO2dCQUVKLElBQUlULGlCQUFpQixHQUFHO29CQUN0QlMsMkJBQTJCLElBQUksQ0FBQ0Msa0JBQWtCLENBQUMsU0FBQ0M7d0JBQ2xELElBQU1GLDJCQUEyQkUsZ0JBQWlCLEdBQUc7d0JBRXJELE9BQU9GO29CQUNUO2dCQUNGLE9BQU87b0JBQ0xBLDJCQUEyQixJQUFJLENBQUNHLHVCQUF1QixDQUFDLFNBQUNDO3dCQUN2RCxJQUFNSiwyQkFBMkJJLHFCQUFzQixHQUFHO3dCQUUxRCxPQUFPSjtvQkFDVDtnQkFDRjtnQkFFQSxJQUFNSyxrQ0FBa0NMLHlCQUF5Qk0sVUFBVSxJQUNyRVAsZUFBZU0saUNBQWlDLEdBQUc7Z0JBRXpELE9BQU9OO1lBQ1Q7OztZQUVBUSxLQUFBQTttQkFBQUEsU0FBQUEsaUJBQWlCakIsT0FBTztnQkFDdEIsSUFBSWtCO2dCQUVKLElBQU1uQixhQUFhLElBQUksQ0FBQ0EsVUFBVSxDQUFDQztnQkFFbkMsSUFBSUQsZUFBZSxNQUFNO29CQUN2Qm1CLFVBQVVuQixZQUFZLEdBQUc7Z0JBQzNCLE9BQU87b0JBQ0xtQixVQUFVLElBQUksQ0FBQ0EsT0FBTyxDQUFDbEI7Z0JBQ3pCO2dCQUVBLElBQUltQjtnQkFFSixJQUFNQyxXQUFXQyxTQUFTQyxjQUFjLENBQUNKO2dCQUV6Q0MsYUFBYSx1QkEzRFhyQixrQ0EyRGlCbUIsb0JBQU4sSUFBSyxhQUFrQmpCO2dCQUVwQyxJQUFNdUIsbUJBQW1CSixZQUFhLEdBQUc7Z0JBRXpDQSxhQUFhQyxVQUFVLEdBQUc7Z0JBRTFCRyxpQkFBaUJDLFdBQVcsQ0FBQ0w7Z0JBRTdCQSxhQUFhSSxrQkFBbUIsR0FBRztnQkFFbkMsT0FBT0o7WUFDVDs7OztZQUVPTSxLQUFBQTttQkFBUCxTQUFPQSxpQ0FBaUNDLFFBQVEsRUFBRUMsVUFBVSxFQUFFQyxPQUFPO2dCQUFJLE9BQU9DLGlCQUFZLENBQUNKLGdDQUFnQyxDQXhFekgzQix1QkF3RWlKNEIsVUFBVUMsWUFBWUM7WUFBVTs7O1dBeEVqTDlCO0VBQThCK0IsaUJBQVk7QUEyRWhEQyxPQUFPQyxNQUFNLENBQUNqQyxzQkFBc0JrQyxTQUFTLEVBQUVDLGdCQUFhO0lBRTVELFdBQWVuQyJ9