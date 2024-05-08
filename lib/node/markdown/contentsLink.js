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
var _clonedNode = /*#__PURE__*/ _interop_require_default(require("../../clonedNode"));
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
                debugger;
                var tokens = this.tokens.map(function(token) {
                    token = token.clone(); ///
                    return token;
                }), identifier = this.identifier;
                return _get(_get_prototype_of(ContentsLinkMarkdownNode.prototype), "clone", this).call(this, tokens, identifier);
            }
        }
    ], [
        {
            key: "fromNestedHeadingMarkdownNode",
            value: function fromNestedHeadingMarkdownNode(nestedHeadingMarkdownNode, context) {
                var contentsLinkMarkdownNode = null;
                var node = nestedHeadingMarkdownNode.getNode(), headingMarkdownNode = node; ///
                if (headingMarkdownNode !== null) {
                    var node1 = headingMarkdownNode, clonedNode = _clonedNode.default.fromNode(node1, context), childNodes = clonedNode.getChildNodes(), ruleName = _ruleNames.CONTENTS_LINK_RULE_NAME, opacity = null, tokens = clonedNode.getTokens(), identifier = headingMarkdownNode.identifier(context);
                    contentsLinkMarkdownNode = _markdown.default.fromRuleNameChildNodesAndOpacity(ContentsLinkMarkdownNode, ruleName, childNodes, opacity, tokens, identifier);
                }
                return contentsLinkMarkdownNode;
            }
        }
    ]);
    return ContentsLinkMarkdownNode;
}(_markdown.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2NvbnRlbnRzTGluay5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBDbG9uZWROb2RlIGZyb20gXCIuLi8uLi9jbG9uZWROb2RlXCI7XG5pbXBvcnQgTWFya2Rvd25Ob2RlIGZyb20gXCIuLi8uLi9ub2RlL21hcmtkb3duXCI7XG5cbmltcG9ydCB7IEhSRUZfQVRUUklCVVRFX05BTUUgfSBmcm9tIFwiLi4vLi4vYXR0cmlidXRlTmFtZXNcIjtcbmltcG9ydCB7IENPTlRFTlRTX0xJTktfUlVMRV9OQU1FIH0gZnJvbSBcIi4uLy4uL3J1bGVOYW1lc1wiO1xuXG5jb25zdCB7IHB1c2ggfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250ZW50c0xpbmtNYXJrZG93bk5vZGUgZXh0ZW5kcyBNYXJrZG93bk5vZGUge1xuICBjb25zdHJ1Y3RvcihydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSwgZG9tRWxlbWVudCwgdG9rZW5zLCBpZGVudGlmaWVyKSB7XG4gICAgc3VwZXIocnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHByZWNlZGVuY2UsIHRva2VucywgZG9tRWxlbWVudCk7XG5cbiAgICB0aGlzLnRva2VucyA9IHRva2VucztcblxuICAgIHRoaXMuaWRlbnRpZmllciA9IGlkZW50aWZpZXI7XG4gIH1cblxuICBnZXRUb2tlbnModG9rZW5zID0gW10pIHtcbiAgICBwdXNoKHRva2VucywgdGhpcy50b2tlbnMpO1xuXG4gICAgcmV0dXJuIHRva2VucztcbiAgfVxuXG4gIGdldElkZW50aWZpZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuaWRlbnRpZmllcjtcbiAgfVxuXG4gIGF0dHJpYnV0ZU5hbWUoY29udGV4dCkge1xuICAgIGNvbnN0IGF0dHJpYnV0ZU5hbWUgPSBIUkVGX0FUVFJJQlVURV9OQU1FO1xuXG4gICAgcmV0dXJuIGF0dHJpYnV0ZU5hbWU7XG4gIH1cblxuICBhdHRyaWJ1dGVWYWx1ZShjb250ZXh0KSB7XG4gICAgY29uc3QgYXR0cmlidXRlVmFsdWUgPSBgIyR7dGhpcy5pZGVudGlmaWVyfWA7XG5cbiAgICByZXR1cm4gYXR0cmlidXRlVmFsdWU7XG4gIH1cblxuICBjbG9uZSgpIHtcbiAgICBkZWJ1Z2dlclxuXG4gICAgY29uc3QgdG9rZW5zID0gdGhpcy50b2tlbnMubWFwKCh0b2tlbikgPT4ge1xuICAgICAgICAgICAgdG9rZW4gPSB0b2tlbi5jbG9uZSgpOyAgLy8vXG5cbiAgICAgICAgICAgIHJldHVybiB0b2tlbjtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBpZGVudGlmaWVyID0gdGhpcy5pZGVudGlmaWVyO1xuXG4gICAgcmV0dXJuIHN1cGVyLmNsb25lKHRva2VucywgaWRlbnRpZmllcik7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGUobmVzdGVkSGVhZGluZ01hcmtkb3duTm9kZSwgY29udGV4dCkge1xuICAgIGxldCBjb250ZW50c0xpbmtNYXJrZG93bk5vZGUgPSBudWxsO1xuXG4gICAgY29uc3Qgbm9kZSA9IG5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGUuZ2V0Tm9kZSgpLFxuICAgICAgICAgIGhlYWRpbmdNYXJrZG93bk5vZGUgPSBub2RlOyAgLy8vXG5cbiAgICBpZiAoaGVhZGluZ01hcmtkb3duTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgbm9kZSA9IGhlYWRpbmdNYXJrZG93bk5vZGUsIC8vL1xuICAgICAgICAgICAgY2xvbmVkTm9kZSA9IENsb25lZE5vZGUuZnJvbU5vZGUobm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICBjaGlsZE5vZGVzID0gY2xvbmVkTm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgICBydWxlTmFtZSA9IENPTlRFTlRTX0xJTktfUlVMRV9OQU1FLFxuICAgICAgICAgICAgb3BhY2l0eSA9IG51bGwsXG4gICAgICAgICAgICB0b2tlbnMgPSBjbG9uZWROb2RlLmdldFRva2VucygpLFxuICAgICAgICAgICAgaWRlbnRpZmllciA9IGhlYWRpbmdNYXJrZG93bk5vZGUuaWRlbnRpZmllcihjb250ZXh0KTtcblxuICAgICAgY29udGVudHNMaW5rTWFya2Rvd25Ob2RlID0gTWFya2Rvd25Ob2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5KENvbnRlbnRzTGlua01hcmtkb3duTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHRva2VucywgaWRlbnRpZmllcik7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnRlbnRzTGlua01hcmtkb3duTm9kZTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkNvbnRlbnRzTGlua01hcmtkb3duTm9kZSIsInB1c2giLCJhcnJheVV0aWxpdGllcyIsInJ1bGVOYW1lIiwiY2hpbGROb2RlcyIsIm9wYWNpdHkiLCJwcmVjZWRlbmNlIiwiZG9tRWxlbWVudCIsInRva2VucyIsImlkZW50aWZpZXIiLCJnZXRUb2tlbnMiLCJnZXRJZGVudGlmaWVyIiwiYXR0cmlidXRlTmFtZSIsImNvbnRleHQiLCJIUkVGX0FUVFJJQlVURV9OQU1FIiwiYXR0cmlidXRlVmFsdWUiLCJjbG9uZSIsIm1hcCIsInRva2VuIiwiZnJvbU5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGUiLCJuZXN0ZWRIZWFkaW5nTWFya2Rvd25Ob2RlIiwiY29udGVudHNMaW5rTWFya2Rvd25Ob2RlIiwibm9kZSIsImdldE5vZGUiLCJoZWFkaW5nTWFya2Rvd25Ob2RlIiwiY2xvbmVkTm9kZSIsIkNsb25lZE5vZGUiLCJmcm9tTm9kZSIsImdldENoaWxkTm9kZXMiLCJDT05URU5UU19MSU5LX1JVTEVfTkFNRSIsIk1hcmtkb3duTm9kZSIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRP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