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
var _replacement = /*#__PURE__*/ _interop_require_default(require("../../replacement"));
var _markdown = /*#__PURE__*/ _interop_require_default(require("../../node/markdown"));
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
            // getTokens(tokens = []) {
            //   push(tokens, this.tokens);
            //
            //   return tokens;
            // }
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
                    var lineMarkdownNode = headingMarkdownNode.getLineMarkdownNode(), childNode = lineMarkdownNode, node1 = childNode, replacement = _replacement.default.fromNode(node1, context), ruleName = _ruleNames.CONTENTS_LINK_RULE_NAME, childNodes = [
                        childNode
                    ], opacity = null, tokens = replacement.getTokens(), identifier = headingMarkdownNode.identifier(context);
                    contentsLinkMarkdownNode = _markdown.default.fromRuleNameChildNodesAndOpacity(ContentsLinkMarkdownNode, ruleName, childNodes, opacity, tokens, identifier);
                }
                return contentsLinkMarkdownNode;
            }
        }
    ]);
    return ContentsLinkMarkdownNode;
}(_markdown.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2NvbnRlbnRzTGluay5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBSZXBsYWNlbWVudCBmcm9tIFwiLi4vLi4vcmVwbGFjZW1lbnRcIjtcbmltcG9ydCBNYXJrZG93bk5vZGUgZnJvbSBcIi4uLy4uL25vZGUvbWFya2Rvd25cIjtcblxuaW1wb3J0IHsgSFJFRl9BVFRSSUJVVEVfTkFNRSB9IGZyb20gXCIuLi8uLi9hdHRyaWJ1dGVOYW1lc1wiO1xuaW1wb3J0IHsgQ09OVEVOVFNfTElOS19SVUxFX05BTUUgfSBmcm9tIFwiLi4vLi4vcnVsZU5hbWVzXCI7XG5cbmNvbnN0IHsgcHVzaCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRlbnRzTGlua01hcmtkb3duTm9kZSBleHRlbmRzIE1hcmtkb3duTm9kZSB7XG4gIGNvbnN0cnVjdG9yKHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlLCBkb21FbGVtZW50LCB0b2tlbnMsIGlkZW50aWZpZXIpIHtcbiAgICBzdXBlcihydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSwgdG9rZW5zLCBkb21FbGVtZW50KTtcblxuICAgIHRoaXMudG9rZW5zID0gdG9rZW5zO1xuICAgIHRoaXMuaWRlbnRpZmllciA9IGlkZW50aWZpZXI7XG4gIH1cblxuICAvLyBnZXRUb2tlbnModG9rZW5zID0gW10pIHtcbiAgLy8gICBwdXNoKHRva2VucywgdGhpcy50b2tlbnMpO1xuICAvL1xuICAvLyAgIHJldHVybiB0b2tlbnM7XG4gIC8vIH1cblxuICBnZXRJZGVudGlmaWVyKCkge1xuICAgIHJldHVybiB0aGlzLmlkZW50aWZpZXI7XG4gIH1cblxuICBhdHRyaWJ1dGVOYW1lKGNvbnRleHQpIHtcbiAgICBjb25zdCBhdHRyaWJ1dGVOYW1lID0gSFJFRl9BVFRSSUJVVEVfTkFNRTtcblxuICAgIHJldHVybiBhdHRyaWJ1dGVOYW1lO1xuICB9XG5cbiAgYXR0cmlidXRlVmFsdWUoY29udGV4dCkge1xuICAgIGNvbnN0IGF0dHJpYnV0ZVZhbHVlID0gYCMke3RoaXMuaWRlbnRpZmllcn1gO1xuXG4gICAgcmV0dXJuIGF0dHJpYnV0ZVZhbHVlO1xuICB9XG5cbiAgY2xvbmUoKSB7XG4gICAgY29uc3QgdG9rZW5zID0gdGhpcy50b2tlbnMubWFwKCh0b2tlbikgPT4ge1xuICAgICAgdG9rZW4gPSB0b2tlbi5jbG9uZSgpOyAgLy8vXG5cbiAgICAgIHJldHVybiB0b2tlbjtcbiAgICB9KTtcblxuICAgIHJldHVybiBzdXBlci5jbG9uZSh0b2tlbnMsIHRoaXMuaWRlbnRpZmllcik7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGUobmVzdGVkSGVhZGluZ01hcmtkb3duTm9kZSwgY29udGV4dCkge1xuICAgIGxldCBjb250ZW50c0xpbmtNYXJrZG93bk5vZGUgPSBudWxsO1xuXG4gICAgY29uc3Qgbm9kZSA9IG5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGUuZ2V0Tm9kZSgpLFxuICAgICAgICAgIGhlYWRpbmdNYXJrZG93bk5vZGUgPSBub2RlOyAgLy8vXG5cbiAgICBpZiAoaGVhZGluZ01hcmtkb3duTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgbGluZU1hcmtkb3duTm9kZSA9IGhlYWRpbmdNYXJrZG93bk5vZGUuZ2V0TGluZU1hcmtkb3duTm9kZSgpLFxuICAgICAgICAgICAgY2hpbGROb2RlID0gbGluZU1hcmtkb3duTm9kZSwgLy8vXG4gICAgICAgICAgICBub2RlID0gY2hpbGROb2RlLCAvLy9cbiAgICAgICAgICAgIHJlcGxhY2VtZW50ID0gUmVwbGFjZW1lbnQuZnJvbU5vZGUobm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICBydWxlTmFtZSA9IENPTlRFTlRTX0xJTktfUlVMRV9OQU1FLFxuICAgICAgICAgICAgY2hpbGROb2RlcyA9IFtcbiAgICAgICAgICAgICAgY2hpbGROb2RlXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgb3BhY2l0eSA9IG51bGwsXG4gICAgICAgICAgICB0b2tlbnMgPSByZXBsYWNlbWVudC5nZXRUb2tlbnMoKSxcbiAgICAgICAgICAgIGlkZW50aWZpZXIgPSBoZWFkaW5nTWFya2Rvd25Ob2RlLmlkZW50aWZpZXIoY29udGV4dCk7XG5cbiAgICAgIGNvbnRlbnRzTGlua01hcmtkb3duTm9kZSA9IE1hcmtkb3duTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eShDb250ZW50c0xpbmtNYXJrZG93bk5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCB0b2tlbnMsIGlkZW50aWZpZXIpO1xuICAgIH1cblxuICAgIHJldHVybiBjb250ZW50c0xpbmtNYXJrZG93bk5vZGU7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJDb250ZW50c0xpbmtNYXJrZG93bk5vZGUiLCJwdXNoIiwiYXJyYXlVdGlsaXRpZXMiLCJydWxlTmFtZSIsImNoaWxkTm9kZXMiLCJvcGFjaXR5IiwicHJlY2VkZW5jZSIsImRvbUVsZW1lbnQiLCJ0b2tlbnMiLCJpZGVudGlmaWVyIiwiZ2V0SWRlbnRpZmllciIsImF0dHJpYnV0ZU5hbWUiLCJjb250ZXh0IiwiSFJFRl9BVFRSSUJVVEVfTkFNRSIsImF0dHJpYnV0ZVZhbHVlIiwiY2xvbmUiLCJtYXAiLCJ0b2tlbiIsImZyb21OZXN0ZWRIZWFkaW5nTWFya2Rvd25Ob2RlIiwibmVzdGVkSGVhZGluZ01hcmtkb3duTm9kZSIsImNvbnRlbnRzTGlua01hcmtkb3duTm9kZSIsIm5vZGUiLCJnZXROb2RlIiwiaGVhZGluZ01hcmtkb3duTm9kZSIsImxpbmVNYXJrZG93bk5vZGUiLCJnZXRMaW5lTWFya2Rvd25Ob2RlIiwiY2hpbGROb2RlIiwicmVwbGFjZW1lbnQiLCJSZXBsYWNlbWVudCIsImZyb21Ob2RlIiwiQ09OVEVOVFNfTElOS19SVUxFX05BTUUiLCJnZXRUb2tlbnMiLCJNYXJrZG93bk5vZGUiLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eSJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVlxQkE7Ozt5QkFWVTtrRUFFUDsrREFDQzs4QkFFVzt5QkFDSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXhDLElBQU0sQUFBRUMsT0FBU0MseUJBQWMsQ0FBdkJEO0FBRU8sSUFBQSxBQUFNRCx5Q0FBRCxBQUFMO2NBQU1BOytCQUFBQTthQUFBQSx5QkFDUEcsUUFBUSxFQUFFQyxVQUFVLEVBQUVDLE9BQU8sRUFBRUMsVUFBVSxFQUFFQyxVQUFVLEVBQUVDLE1BQU0sRUFBRUMsVUFBVTtnQ0FEbEVUOztrQ0FFWEcsVUFBVUMsWUFBWUMsU0FBU0MsWUFBWUUsUUFBUUQ7UUFFekQsTUFBS0MsTUFBTSxHQUFHQTtRQUNkLE1BQUtDLFVBQVUsR0FBR0E7OztrQkFMRFQ7O1lBUW5CLDJCQUEyQjtZQUMzQiwrQkFBK0I7WUFDL0IsRUFBRTtZQUNGLG1CQUFtQjtZQUNuQixJQUFJO1lBRUpVLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0QsVUFBVTtZQUN4Qjs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxjQUFjQyxPQUFPO2dCQUNuQixJQUFNRCxnQkFBZ0JFLG1DQUFtQjtnQkFFekMsT0FBT0Y7WUFDVDs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxlQUFlRixPQUFPO2dCQUNwQixJQUFNRSxpQkFBaUIsQUFBQyxJQUFtQixPQUFoQixJQUFJLENBQUNMLFVBQVU7Z0JBRTFDLE9BQU9LO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTVAsU0FBUyxJQUFJLENBQUNBLE1BQU0sQ0FBQ1EsR0FBRyxDQUFDLFNBQUNDO29CQUM5QkEsUUFBUUEsTUFBTUYsS0FBSyxJQUFLLEdBQUc7b0JBRTNCLE9BQU9FO2dCQUNUO2dCQUVBLE9BQU8sdUJBckNVakIscUNBcUNKZSxTQUFOLElBQUssYUFBT1AsUUFBUSxJQUFJLENBQUNDLFVBQVU7WUFDNUM7Ozs7WUFFT1MsS0FBQUE7bUJBQVAsU0FBT0EsOEJBQThCQyx5QkFBeUIsRUFBRVAsT0FBTztnQkFDckUsSUFBSVEsMkJBQTJCO2dCQUUvQixJQUFNQyxPQUFPRiwwQkFBMEJHLE9BQU8sSUFDeENDLHNCQUFzQkYsTUFBTyxHQUFHO2dCQUV0QyxJQUFJRSx3QkFBd0IsTUFBTTtvQkFDaEMsSUFBTUMsbUJBQW1CRCxvQkFBb0JFLG1CQUFtQixJQUMxREMsWUFBWUYsa0JBQ1pILFFBQU9LLFdBQ1BDLGNBQWNDLG9CQUFXLENBQUNDLFFBQVEsQ0FBQ1IsT0FBTVQsVUFDekNULFdBQVcyQixrQ0FBdUIsRUFDbEMxQixhQUFhO3dCQUNYc0I7cUJBQ0QsRUFDRHJCLFVBQVUsTUFDVkcsU0FBU21CLFlBQVlJLFNBQVMsSUFDOUJ0QixhQUFhYyxvQkFBb0JkLFVBQVUsQ0FBQ0c7b0JBRWxEUSwyQkFBMkJZLGlCQUFZLENBQUNDLGdDQUFnQyxDQTNEekRqQywwQkEyRG9GRyxVQUFVQyxZQUFZQyxTQUFTRyxRQUFRQztnQkFDNUk7Z0JBRUEsT0FBT1c7WUFDVDs7O1dBL0RtQnBCO0VBQWlDZ0MsaUJBQVkifQ==