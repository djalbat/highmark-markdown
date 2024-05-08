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
    function ContentsLinkMarkdownNode(ruleName, childNodes, opacity, precedence, domElement, identifier) {
        _class_call_check(this, ContentsLinkMarkdownNode);
        var _this;
        _this = _super.call(this, ruleName, childNodes, opacity, precedence, domElement);
        _this.identifier = identifier;
        return _this;
    }
    _create_class(ContentsLinkMarkdownNode, [
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
                return _get(_get_prototype_of(ContentsLinkMarkdownNode.prototype), "clone", this).call(this, this.identifier);
            }
        }
    ], [
        {
            key: "fromNestedHeadingMarkdownNode",
            value: function fromNestedHeadingMarkdownNode(nestedHeadingMarkdownNode, context) {
                var contentsLinkMarkdownNode = null;
                var node = nestedHeadingMarkdownNode.getNode(), headingMarkdownNode = node; ///
                if (headingMarkdownNode !== null) {
                    var tokens = context.tokens, replacementTokens = context.replacementTokens, node1 = headingMarkdownNode, clonedNode = _clonedNode.default.fromNodeAndTokens(node1, tokens), clonedNodeTokens = clonedNode.getTokens();
                    push(replacementTokens, clonedNodeTokens); ///
                    var childNodes = clonedNode.getChildNodes(), ruleName = _ruleNames.CONTENTS_LINK_RULE_NAME, opacity = null, identifier = headingMarkdownNode.identifier(context);
                    contentsLinkMarkdownNode = _markdown.default.fromRuleNameChildNodesAndOpacity(ContentsLinkMarkdownNode, ruleName, childNodes, opacity, identifier);
                }
                return contentsLinkMarkdownNode;
            }
        }
    ]);
    return ContentsLinkMarkdownNode;
}(_markdown.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2NvbnRlbnRzTGluay5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBDbG9uZWROb2RlIGZyb20gXCIuLi8uLi9jbG9uZWROb2RlXCI7XG5pbXBvcnQgTWFya2Rvd25Ob2RlIGZyb20gXCIuLi8uLi9ub2RlL21hcmtkb3duXCI7XG5cbmltcG9ydCB7IEhSRUZfQVRUUklCVVRFX05BTUUgfSBmcm9tIFwiLi4vLi4vYXR0cmlidXRlTmFtZXNcIjtcbmltcG9ydCB7IENPTlRFTlRTX0xJTktfUlVMRV9OQU1FIH0gZnJvbSBcIi4uLy4uL3J1bGVOYW1lc1wiO1xuXG5jb25zdCB7IHB1c2ggfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250ZW50c0xpbmtNYXJrZG93bk5vZGUgZXh0ZW5kcyBNYXJrZG93bk5vZGUge1xuICBjb25zdHJ1Y3RvcihydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSwgZG9tRWxlbWVudCwgaWRlbnRpZmllcikge1xuICAgIHN1cGVyKHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlLCBkb21FbGVtZW50KTtcblxuICAgIHRoaXMuaWRlbnRpZmllciA9IGlkZW50aWZpZXI7XG4gIH1cblxuICBnZXRJZGVudGlmaWVyKCkge1xuICAgIHJldHVybiB0aGlzLmlkZW50aWZpZXI7XG4gIH1cblxuICBhdHRyaWJ1dGVOYW1lKGNvbnRleHQpIHtcbiAgICBjb25zdCBhdHRyaWJ1dGVOYW1lID0gSFJFRl9BVFRSSUJVVEVfTkFNRTtcblxuICAgIHJldHVybiBhdHRyaWJ1dGVOYW1lO1xuICB9XG5cbiAgYXR0cmlidXRlVmFsdWUoY29udGV4dCkge1xuICAgIGNvbnN0IGF0dHJpYnV0ZVZhbHVlID0gYCMke3RoaXMuaWRlbnRpZmllcn1gO1xuXG4gICAgcmV0dXJuIGF0dHJpYnV0ZVZhbHVlO1xuICB9XG5cbiAgY2xvbmUoKSB7XG4gICAgZGVidWdnZXJcblxuICAgIHJldHVybiBzdXBlci5jbG9uZSh0aGlzLmlkZW50aWZpZXIpO1xuICB9XG5cbiAgc3RhdGljIGZyb21OZXN0ZWRIZWFkaW5nTWFya2Rvd25Ob2RlKG5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgY29udGVudHNMaW5rTWFya2Rvd25Ob2RlID0gbnVsbDtcblxuICAgIGNvbnN0IG5vZGUgPSBuZXN0ZWRIZWFkaW5nTWFya2Rvd25Ob2RlLmdldE5vZGUoKSxcbiAgICAgICAgICBoZWFkaW5nTWFya2Rvd25Ob2RlID0gbm9kZTsgIC8vL1xuXG4gICAgaWYgKGhlYWRpbmdNYXJrZG93bk5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHsgdG9rZW5zLCByZXBsYWNlbWVudFRva2VucyB9ID0gY29udGV4dCxcbiAgICAgICAgICAgIG5vZGUgPSBoZWFkaW5nTWFya2Rvd25Ob2RlLCAvLy9cbiAgICAgICAgICAgIGNsb25lZE5vZGUgPSBDbG9uZWROb2RlLmZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2VucyksXG4gICAgICAgICAgICBjbG9uZWROb2RlVG9rZW5zID0gY2xvbmVkTm9kZS5nZXRUb2tlbnMoKTtcblxuICAgICAgcHVzaChyZXBsYWNlbWVudFRva2VucywgY2xvbmVkTm9kZVRva2Vucyk7ICAvLy9cblxuICAgICAgY29uc3QgY2hpbGROb2RlcyA9IGNsb25lZE5vZGUuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgICAgcnVsZU5hbWUgPSBDT05URU5UU19MSU5LX1JVTEVfTkFNRSxcbiAgICAgICAgICAgIG9wYWNpdHkgPSBudWxsLFxuICAgICAgICAgICAgaWRlbnRpZmllciA9IGhlYWRpbmdNYXJrZG93bk5vZGUuaWRlbnRpZmllcihjb250ZXh0KTtcblxuICAgICAgY29udGVudHNMaW5rTWFya2Rvd25Ob2RlID0gTWFya2Rvd25Ob2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5KENvbnRlbnRzTGlua01hcmtkb3duTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIGlkZW50aWZpZXIpO1xuICAgIH1cblxuICAgIHJldHVybiBjb250ZW50c0xpbmtNYXJrZG93bk5vZGU7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJDb250ZW50c0xpbmtNYXJrZG93bk5vZGUiLCJwdXNoIiwiYXJyYXlVdGlsaXRpZXMiLCJydWxlTmFtZSIsImNoaWxkTm9kZXMiLCJvcGFjaXR5IiwicHJlY2VkZW5jZSIsImRvbUVsZW1lbnQiLCJpZGVudGlmaWVyIiwiZ2V0SWRlbnRpZmllciIsImF0dHJpYnV0ZU5hbWUiLCJjb250ZXh0IiwiSFJFRl9BVFRSSUJVVEVfTkFNRSIsImF0dHJpYnV0ZVZhbHVlIiwiY2xvbmUiLCJmcm9tTmVzdGVkSGVhZGluZ01hcmtkb3duTm9kZSIsIm5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGUiLCJjb250ZW50c0xpbmtNYXJrZG93bk5vZGUiLCJub2RlIiwiZ2V0Tm9kZSIsImhlYWRpbmdNYXJrZG93bk5vZGUiLCJ0b2tlbnMiLCJyZXBsYWNlbWVudFRva2VucyIsImNsb25lZE5vZGUiLCJDbG9uZWROb2RlIiwiZnJvbU5vZGVBbmRUb2tlbnMiLCJjbG9uZWROb2RlVG9rZW5zIiwiZ2V0VG9rZW5zIiwiZ2V0Q2hpbGROb2RlcyIsIkNPTlRFTlRTX0xJTktfUlVMRV9OQU1FIiwiTWFya2Rvd25Ob2RlIiwiZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFZcUJBOzs7eUJBVlU7aUVBRVI7K0RBQ0U7OEJBRVc7eUJBQ0k7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV4QyxJQUFNLEFBQUVDLE9BQVNDLHlCQUFjLENBQXZCRDtBQUVPLElBQUEsQUFBTUQseUNBQUQsQUFBTDtjQUFNQTsrQkFBQUE7YUFBQUEseUJBQ1BHLFFBQVEsRUFBRUMsVUFBVSxFQUFFQyxPQUFPLEVBQUVDLFVBQVUsRUFBRUMsVUFBVSxFQUFFQyxVQUFVO2dDQUQxRFI7O2tDQUVYRyxVQUFVQyxZQUFZQyxTQUFTQyxZQUFZQztRQUVqRCxNQUFLQyxVQUFVLEdBQUdBOzs7a0JBSkRSOztZQU9uQlMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRCxVQUFVO1lBQ3hCOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBLGNBQWNDLE9BQU87Z0JBQ25CLElBQU1ELGdCQUFnQkUsbUNBQW1CO2dCQUV6QyxPQUFPRjtZQUNUOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLGVBQWVGLE9BQU87Z0JBQ3BCLElBQU1FLGlCQUFpQixBQUFDLElBQW1CLE9BQWhCLElBQUksQ0FBQ0wsVUFBVTtnQkFFMUMsT0FBT0s7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxRQUFRO2dCQUVSLE9BQU8sdUJBMUJVZCxxQ0EwQkpjLFNBQU4sSUFBSyxhQUFPLElBQUksQ0FBQ04sVUFBVTtZQUNwQzs7OztZQUVPTyxLQUFBQTttQkFBUCxTQUFPQSw4QkFBOEJDLHlCQUF5QixFQUFFTCxPQUFPO2dCQUNyRSxJQUFJTSwyQkFBMkI7Z0JBRS9CLElBQU1DLE9BQU9GLDBCQUEwQkcsT0FBTyxJQUN4Q0Msc0JBQXNCRixNQUFPLEdBQUc7Z0JBRXRDLElBQUlFLHdCQUF3QixNQUFNO29CQUNoQyxJQUFRQyxTQUE4QlYsUUFBOUJVLFFBQVFDLG9CQUFzQlgsUUFBdEJXLG1CQUNWSixRQUFPRSxxQkFDUEcsYUFBYUMsbUJBQVUsQ0FBQ0MsaUJBQWlCLENBQUNQLE9BQU1HLFNBQ2hESyxtQkFBbUJILFdBQVdJLFNBQVM7b0JBRTdDMUIsS0FBS3FCLG1CQUFtQkksbUJBQW9CLEdBQUc7b0JBRS9DLElBQU10QixhQUFhbUIsV0FBV0ssYUFBYSxJQUNyQ3pCLFdBQVcwQixrQ0FBdUIsRUFDbEN4QixVQUFVLE1BQ1ZHLGFBQWFZLG9CQUFvQlosVUFBVSxDQUFDRztvQkFFbERNLDJCQUEyQmEsaUJBQVksQ0FBQ0MsZ0NBQWdDLENBaER6RC9CLDBCQWdEb0ZHLFVBQVVDLFlBQVlDLFNBQVNHO2dCQUNwSTtnQkFFQSxPQUFPUztZQUNUOzs7V0FwRG1CakI7RUFBaUM4QixpQkFBWSJ9