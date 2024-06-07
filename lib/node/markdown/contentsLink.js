"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ContentsLinkMarkdownNode;
    }
});
var _necessary = require("necessary");
var _markdown = /*#__PURE__*/ _interop_require_default(require("../../node/markdown"));
var _replacementNodeAndTokens = /*#__PURE__*/ _interop_require_default(require("../../replacementNodeAndTokens"));
var _attributeNames = require("../../attributeNames");
var _ruleNames = require("../../ruleNames");
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
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
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _create_super(Derived) {
    var hasNativeReflectConstruct = _is_native_reflect_construct();
    return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
    };
}
var push = _necessary.arrayUtilities.push;
var ContentsLinkMarkdownNode = /*#__PURE__*/ function(MarkdownNode) {
    _inherits(ContentsLinkMarkdownNode, MarkdownNode);
    var _super = _create_super(ContentsLinkMarkdownNode);
    function ContentsLinkMarkdownNode(ruleName, childNodes, opacity, precedence, domElement, tokens, identifier) {
        _class_call_check(this, ContentsLinkMarkdownNode);
        var _this;
        _this = _super.call(this, ruleName, childNodes, opacity, precedence, tokens, domElement);
        _this.tokens = tokens;
        _this.identifier = identifier;
        return _this;
    }
    _create_class(ContentsLinkMarkdownNode, [
        {
            key: "getTokens",
            value: function getTokens() {
                var tokens = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
                push(tokens, this.tokens);
                return tokens;
            }
        },
        {
            key: "getIdentifier",
            value: function getIdentifier() {
                return this.identifier;
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
                var attributeValue = "#".concat(this.identifier);
                return attributeValue;
            }
        },
        {
            key: "clone",
            value: function clone() {
                var tokens = this.tokens.map(function(token) {
                    token = token.clone(); ///
                    return token;
                });
                return _get(_get_prototype_of(ContentsLinkMarkdownNode.prototype), "clone", this).call(this, tokens, this.identifier);
            }
        }
    ], [
        {
            key: "fromNestedHeadingMarkdownNode",
            value: function fromNestedHeadingMarkdownNode(nestedHeadingMarkdownNode, context) {
                var contentsLinkMarkdownNode = null;
                var node = nestedHeadingMarkdownNode.getNode(), headingMarkdownNode = node; ///
                if (headingMarkdownNode !== null) {
                    var lineMarkdownNode = headingMarkdownNode.getLineMarkdownNode(), childNode = lineMarkdownNode, node1 = childNode, replacementNodeAndTokens = _replacementNodeAndTokens.default.fromNode(node1, context), ruleName = _ruleNames.CONTENTS_LINK_RULE_NAME, childNodes = [
                        childNode
                    ], opacity = null, tokens = replacementNodeAndTokens.getTokens(), identifier = headingMarkdownNode.identifier(context);
                    contentsLinkMarkdownNode = _markdown.default.fromRuleNameChildNodesAndOpacity(ContentsLinkMarkdownNode, ruleName, childNodes, opacity, tokens, identifier);
                }
                return contentsLinkMarkdownNode;
            }
        }
    ]);
    return ContentsLinkMarkdownNode;
}(_markdown.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2NvbnRlbnRzTGluay5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBNYXJrZG93bk5vZGUgZnJvbSBcIi4uLy4uL25vZGUvbWFya2Rvd25cIjtcbmltcG9ydCBSZXBsYWNlbWVudE5vZGVBbmRUb2tlbnMgZnJvbSBcIi4uLy4uL3JlcGxhY2VtZW50Tm9kZUFuZFRva2Vuc1wiO1xuXG5pbXBvcnQgeyBIUkVGX0FUVFJJQlVURV9OQU1FIH0gZnJvbSBcIi4uLy4uL2F0dHJpYnV0ZU5hbWVzXCI7XG5pbXBvcnQgeyBDT05URU5UU19MSU5LX1JVTEVfTkFNRSB9IGZyb20gXCIuLi8uLi9ydWxlTmFtZXNcIjtcblxuY29uc3QgeyBwdXNoIH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udGVudHNMaW5rTWFya2Rvd25Ob2RlIGV4dGVuZHMgTWFya2Rvd25Ob2RlIHtcbiAgY29uc3RydWN0b3IocnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHByZWNlZGVuY2UsIGRvbUVsZW1lbnQsIHRva2VucywgaWRlbnRpZmllcikge1xuICAgIHN1cGVyKHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlLCB0b2tlbnMsIGRvbUVsZW1lbnQpO1xuXG4gICAgdGhpcy50b2tlbnMgPSB0b2tlbnM7XG5cbiAgICB0aGlzLmlkZW50aWZpZXIgPSBpZGVudGlmaWVyO1xuICB9XG5cbiAgZ2V0VG9rZW5zKHRva2VucyA9IFtdKSB7XG4gICAgcHVzaCh0b2tlbnMsIHRoaXMudG9rZW5zKTtcblxuICAgIHJldHVybiB0b2tlbnM7XG4gIH1cblxuICBnZXRJZGVudGlmaWVyKCkge1xuICAgIHJldHVybiB0aGlzLmlkZW50aWZpZXI7XG4gIH1cblxuICBhdHRyaWJ1dGVOYW1lKGNvbnRleHQpIHtcbiAgICBjb25zdCBhdHRyaWJ1dGVOYW1lID0gSFJFRl9BVFRSSUJVVEVfTkFNRTtcblxuICAgIHJldHVybiBhdHRyaWJ1dGVOYW1lO1xuICB9XG5cbiAgYXR0cmlidXRlVmFsdWUoY29udGV4dCkge1xuICAgIGNvbnN0IGF0dHJpYnV0ZVZhbHVlID0gYCMke3RoaXMuaWRlbnRpZmllcn1gO1xuXG4gICAgcmV0dXJuIGF0dHJpYnV0ZVZhbHVlO1xuICB9XG5cbiAgY2xvbmUoKSB7XG4gICAgY29uc3QgdG9rZW5zID0gdGhpcy50b2tlbnMubWFwKCh0b2tlbikgPT4ge1xuICAgICAgdG9rZW4gPSB0b2tlbi5jbG9uZSgpOyAgLy8vXG5cbiAgICAgIHJldHVybiB0b2tlbjtcbiAgICB9KTtcblxuICAgIHJldHVybiBzdXBlci5jbG9uZSh0b2tlbnMsIHRoaXMuaWRlbnRpZmllcik7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGUobmVzdGVkSGVhZGluZ01hcmtkb3duTm9kZSwgY29udGV4dCkge1xuICAgIGxldCBjb250ZW50c0xpbmtNYXJrZG93bk5vZGUgPSBudWxsO1xuXG4gICAgY29uc3Qgbm9kZSA9IG5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGUuZ2V0Tm9kZSgpLFxuICAgICAgICAgIGhlYWRpbmdNYXJrZG93bk5vZGUgPSBub2RlOyAgLy8vXG5cbiAgICBpZiAoaGVhZGluZ01hcmtkb3duTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgbGluZU1hcmtkb3duTm9kZSA9IGhlYWRpbmdNYXJrZG93bk5vZGUuZ2V0TGluZU1hcmtkb3duTm9kZSgpLFxuICAgICAgICAgICAgY2hpbGROb2RlID0gbGluZU1hcmtkb3duTm9kZSwgLy8vXG4gICAgICAgICAgICBub2RlID0gY2hpbGROb2RlLCAvLy9cbiAgICAgICAgICAgIHJlcGxhY2VtZW50Tm9kZUFuZFRva2VucyA9IFJlcGxhY2VtZW50Tm9kZUFuZFRva2Vucy5mcm9tTm9kZShub2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgIHJ1bGVOYW1lID0gQ09OVEVOVFNfTElOS19SVUxFX05BTUUsXG4gICAgICAgICAgICBjaGlsZE5vZGVzID0gW1xuICAgICAgICAgICAgICBjaGlsZE5vZGVcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBvcGFjaXR5ID0gbnVsbCxcbiAgICAgICAgICAgIHRva2VucyA9IHJlcGxhY2VtZW50Tm9kZUFuZFRva2Vucy5nZXRUb2tlbnMoKSxcbiAgICAgICAgICAgIGlkZW50aWZpZXIgPSBoZWFkaW5nTWFya2Rvd25Ob2RlLmlkZW50aWZpZXIoY29udGV4dCk7XG5cbiAgICAgIGNvbnRlbnRzTGlua01hcmtkb3duTm9kZSA9IE1hcmtkb3duTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eShDb250ZW50c0xpbmtNYXJrZG93bk5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCB0b2tlbnMsIGlkZW50aWZpZXIpO1xuICAgIH1cblxuICAgIHJldHVybiBjb250ZW50c0xpbmtNYXJrZG93bk5vZGU7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJDb250ZW50c0xpbmtNYXJrZG93bk5vZGUiLCJwdXNoIiwiYXJyYXlVdGlsaXRpZXMiLCJydWxlTmFtZSIsImNoaWxkTm9kZXMiLCJvcGFjaXR5IiwicHJlY2VkZW5jZSIsImRvbUVsZW1lbnQiLCJ0b2tlbnMiLCJpZGVudGlmaWVyIiwiZ2V0VG9rZW5zIiwiZ2V0SWRlbnRpZmllciIsImF0dHJpYnV0ZU5hbWUiLCJjb250ZXh0IiwiSFJFRl9BVFRSSUJVVEVfTkFNRSIsImF0dHJpYnV0ZVZhbHVlIiwiY2xvbmUiLCJtYXAiLCJ0b2tlbiIsImZyb21OZXN0ZWRIZWFkaW5nTWFya2Rvd25Ob2RlIiwibmVzdGVkSGVhZGluZ01hcmtkb3duTm9kZSIsImNvbnRlbnRzTGlua01hcmtkb3duTm9kZSIsIm5vZGUiLCJnZXROb2RlIiwiaGVhZGluZ01hcmtkb3duTm9kZSIsImxpbmVNYXJrZG93bk5vZGUiLCJnZXRMaW5lTWFya2Rvd25Ob2RlIiwiY2hpbGROb2RlIiwicmVwbGFjZW1lbnROb2RlQW5kVG9rZW5zIiwiUmVwbGFjZW1lbnROb2RlQW5kVG9rZW5zIiwiZnJvbU5vZGUiLCJDT05URU5UU19MSU5LX1JVTEVfTkFNRSIsIk1hcmtkb3duTm9kZSIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5Il0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBWXFCQTs7O3lCQVZVOytEQUVOOytFQUNZOzhCQUVEO3lCQUNJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFeEMsSUFBTSxBQUFFQyxPQUFTQyx5QkFBYyxDQUF2QkQ7QUFFTyxJQUFBLEFBQU1ELHlDQUFELEFBQUw7Y0FBTUE7K0JBQUFBO2FBQUFBLHlCQUNQRyxRQUFRLEVBQUVDLFVBQVUsRUFBRUMsT0FBTyxFQUFFQyxVQUFVLEVBQUVDLFVBQVUsRUFBRUMsTUFBTSxFQUFFQyxVQUFVO2dDQURsRVQ7O2tDQUVYRyxVQUFVQyxZQUFZQyxTQUFTQyxZQUFZRSxRQUFRRDtRQUV6RCxNQUFLQyxNQUFNLEdBQUdBO1FBRWQsTUFBS0MsVUFBVSxHQUFHQTs7O2tCQU5EVDs7WUFTbkJVLEtBQUFBO21CQUFBQSxTQUFBQTtvQkFBVUYsU0FBQUEsaUVBQVMsRUFBRTtnQkFDbkJQLEtBQUtPLFFBQVEsSUFBSSxDQUFDQSxNQUFNO2dCQUV4QixPQUFPQTtZQUNUOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixVQUFVO1lBQ3hCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLGNBQWNDLE9BQU87Z0JBQ25CLElBQU1ELGdCQUFnQkUsbUNBQW1CO2dCQUV6QyxPQUFPRjtZQUNUOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLGVBQWVGLE9BQU87Z0JBQ3BCLElBQU1FLGlCQUFpQixBQUFDLElBQW1CLE9BQWhCLElBQUksQ0FBQ04sVUFBVTtnQkFFMUMsT0FBT007WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNUixTQUFTLElBQUksQ0FBQ0EsTUFBTSxDQUFDUyxHQUFHLENBQUMsU0FBQ0M7b0JBQzlCQSxRQUFRQSxNQUFNRixLQUFLLElBQUssR0FBRztvQkFFM0IsT0FBT0U7Z0JBQ1Q7Z0JBRUEsT0FBTyx1QkF0Q1VsQixxQ0FzQ0pnQixTQUFOLElBQUssYUFBT1IsUUFBUSxJQUFJLENBQUNDLFVBQVU7WUFDNUM7Ozs7WUFFT1UsS0FBQUE7bUJBQVAsU0FBT0EsOEJBQThCQyx5QkFBeUIsRUFBRVAsT0FBTztnQkFDckUsSUFBSVEsMkJBQTJCO2dCQUUvQixJQUFNQyxPQUFPRiwwQkFBMEJHLE9BQU8sSUFDeENDLHNCQUFzQkYsTUFBTyxHQUFHO2dCQUV0QyxJQUFJRSx3QkFBd0IsTUFBTTtvQkFDaEMsSUFBTUMsbUJBQW1CRCxvQkFBb0JFLG1CQUFtQixJQUMxREMsWUFBWUYsa0JBQ1pILFFBQU9LLFdBQ1BDLDJCQUEyQkMsaUNBQXdCLENBQUNDLFFBQVEsQ0FBQ1IsT0FBTVQsVUFDbkVWLFdBQVc0QixrQ0FBdUIsRUFDbEMzQixhQUFhO3dCQUNYdUI7cUJBQ0QsRUFDRHRCLFVBQVUsTUFDVkcsU0FBU29CLHlCQUF5QmxCLFNBQVMsSUFDM0NELGFBQWFlLG9CQUFvQmYsVUFBVSxDQUFDSTtvQkFFbERRLDJCQUEyQlcsaUJBQVksQ0FBQ0MsZ0NBQWdDLENBNUR6RGpDLDBCQTREb0ZHLFVBQVVDLFlBQVlDLFNBQVNHLFFBQVFDO2dCQUM1STtnQkFFQSxPQUFPWTtZQUNUOzs7V0FoRW1CckI7RUFBaUNnQyxpQkFBWSJ9