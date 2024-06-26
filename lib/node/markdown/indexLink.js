"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return IndexLinkMarkdownNode;
    }
});
var _markdown = /*#__PURE__*/ _interop_require_default(require("../../node/markdown"));
var _prepends = require("../../prepends");
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
var IndexLinkMarkdownNode = /*#__PURE__*/ function(MarkdownNode) {
    _inherits(IndexLinkMarkdownNode, MarkdownNode);
    var _super = _create_super(IndexLinkMarkdownNode);
    function IndexLinkMarkdownNode(ruleName, childNodes, opacity, precedence, domElement, identifier) {
        _class_call_check(this, IndexLinkMarkdownNode);
        var _this;
        _this = _super.call(this, ruleName, childNodes, opacity, precedence, domElement);
        _this.identifier = identifier;
        return _this;
    }
    _create_class(IndexLinkMarkdownNode, [
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
                var prepend = _prepends.INDEX_PREPEND, attributeValue = "#".concat(prepend, "-").concat(this.identifier);
                return attributeValue;
            }
        },
        {
            key: "clone",
            value: function clone() {
                return _get(_get_prototype_of(IndexLinkMarkdownNode.prototype), "clone", this).call(this, this.identifier);
            }
        }
    ], [
        {
            key: "fromLineReplacementAndIdentifier",
            value: function fromLineReplacementAndIdentifier(lineReplacement, identifier) {
                var lineMarkdownNode = lineReplacement.getLineMarkdownNode(), ruleName = _ruleNames.INDEX_LINK_RULE_NAME, childNodes = [
                    lineMarkdownNode
                ], opacity = null, indexLinkMarkdownNode = _markdown.default.fromRuleNameChildNodesAndOpacity(IndexLinkMarkdownNode, ruleName, childNodes, opacity, identifier);
                return indexLinkMarkdownNode;
            }
        }
    ]);
    return IndexLinkMarkdownNode;
}(_markdown.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2luZGV4TGluay5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE1hcmtkb3duTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9tYXJrZG93blwiO1xuXG5pbXBvcnQgeyBJTkRFWF9QUkVQRU5EIH0gZnJvbSBcIi4uLy4uL3ByZXBlbmRzXCI7XG5pbXBvcnQgeyBIUkVGX0FUVFJJQlVURV9OQU1FIH0gZnJvbSBcIi4uLy4uL2F0dHJpYnV0ZU5hbWVzXCI7XG5pbXBvcnQgeyBJTkRFWF9MSU5LX1JVTEVfTkFNRSB9IGZyb20gXCIuLi8uLi9ydWxlTmFtZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXhMaW5rTWFya2Rvd25Ob2RlIGV4dGVuZHMgTWFya2Rvd25Ob2RlIHtcbiAgY29uc3RydWN0b3IocnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHByZWNlZGVuY2UsIGRvbUVsZW1lbnQsIGlkZW50aWZpZXIpIHtcbiAgICBzdXBlcihydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSwgZG9tRWxlbWVudCk7XG5cbiAgICB0aGlzLmlkZW50aWZpZXIgPSBpZGVudGlmaWVyO1xuICB9XG5cbiAgZ2V0SWRlbnRpZmllcigpIHtcbiAgICByZXR1cm4gdGhpcy5pZGVudGlmaWVyO1xuICB9XG5cbiAgYXR0cmlidXRlTmFtZShjb250ZXh0KSB7XG4gICAgY29uc3QgYXR0cmlidXRlTmFtZSA9IEhSRUZfQVRUUklCVVRFX05BTUU7XG5cbiAgICByZXR1cm4gYXR0cmlidXRlTmFtZTtcbiAgfVxuXG4gIGF0dHJpYnV0ZVZhbHVlKGNvbnRleHQpIHtcbiAgICBjb25zdCBwcmVwZW5kID0gSU5ERVhfUFJFUEVORCxcbiAgICAgICAgICBhdHRyaWJ1dGVWYWx1ZSA9IGAjJHtwcmVwZW5kfS0ke3RoaXMuaWRlbnRpZmllcn1gO1xuXG4gICAgcmV0dXJuIGF0dHJpYnV0ZVZhbHVlO1xuICB9XG5cbiAgY2xvbmUoKSB7IHJldHVybiBzdXBlci5jbG9uZSh0aGlzLmlkZW50aWZpZXIpOyB9XG5cbiAgc3RhdGljIGZyb21MaW5lUmVwbGFjZW1lbnRBbmRJZGVudGlmaWVyKGxpbmVSZXBsYWNlbWVudCwgaWRlbnRpZmllcikge1xuICAgICAgY29uc3QgbGluZU1hcmtkb3duTm9kZSA9IGxpbmVSZXBsYWNlbWVudC5nZXRMaW5lTWFya2Rvd25Ob2RlKCksXG4gICAgICAgICAgICBydWxlTmFtZSA9IElOREVYX0xJTktfUlVMRV9OQU1FLFxuICAgICAgICAgICAgY2hpbGROb2RlcyA9IFtcbiAgICAgICAgICAgICAgbGluZU1hcmtkb3duTm9kZVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIG9wYWNpdHkgPSBudWxsLFxuICAgICAgICAgICAgaW5kZXhMaW5rTWFya2Rvd25Ob2RlID0gTWFya2Rvd25Ob2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5KEluZGV4TGlua01hcmtkb3duTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIGlkZW50aWZpZXIpO1xuXG4gICAgcmV0dXJuIGluZGV4TGlua01hcmtkb3duTm9kZTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkluZGV4TGlua01hcmtkb3duTm9kZSIsInJ1bGVOYW1lIiwiY2hpbGROb2RlcyIsIm9wYWNpdHkiLCJwcmVjZWRlbmNlIiwiZG9tRWxlbWVudCIsImlkZW50aWZpZXIiLCJnZXRJZGVudGlmaWVyIiwiYXR0cmlidXRlTmFtZSIsImNvbnRleHQiLCJIUkVGX0FUVFJJQlVURV9OQU1FIiwiYXR0cmlidXRlVmFsdWUiLCJwcmVwZW5kIiwiSU5ERVhfUFJFUEVORCIsImNsb25lIiwiZnJvbUxpbmVSZXBsYWNlbWVudEFuZElkZW50aWZpZXIiLCJsaW5lUmVwbGFjZW1lbnQiLCJsaW5lTWFya2Rvd25Ob2RlIiwiZ2V0TGluZU1hcmtkb3duTm9kZSIsIklOREVYX0xJTktfUlVMRV9OQU1FIiwiaW5kZXhMaW5rTWFya2Rvd25Ob2RlIiwiTWFya2Rvd25Ob2RlIiwiZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBUXFCQTs7OytEQU5JO3dCQUVLOzhCQUNNO3lCQUNDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdEIsSUFBQSxBQUFNQSxzQ0FBRCxBQUFMO2NBQU1BOytCQUFBQTthQUFBQSxzQkFDUEMsUUFBUSxFQUFFQyxVQUFVLEVBQUVDLE9BQU8sRUFBRUMsVUFBVSxFQUFFQyxVQUFVLEVBQUVDLFVBQVU7Z0NBRDFETjs7a0NBRVhDLFVBQVVDLFlBQVlDLFNBQVNDLFlBQVlDO1FBRWpELE1BQUtDLFVBQVUsR0FBR0E7OztrQkFKRE47O1lBT25CTyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNELFVBQVU7WUFDeEI7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsY0FBY0MsT0FBTztnQkFDbkIsSUFBTUQsZ0JBQWdCRSxtQ0FBbUI7Z0JBRXpDLE9BQU9GO1lBQ1Q7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsZUFBZUYsT0FBTztnQkFDcEIsSUFBTUcsVUFBVUMsdUJBQWEsRUFDdkJGLGlCQUFpQixBQUFDLElBQWMsT0FBWEMsU0FBUSxLQUFtQixPQUFoQixJQUFJLENBQUNOLFVBQVU7Z0JBRXJELE9BQU9LO1lBQ1Q7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQVUsT0FBTyx1QkF4QkVkLGtDQXdCSWMsU0FBTixJQUFLLGFBQU8sSUFBSSxDQUFDUixVQUFVO1lBQUc7Ozs7WUFFeENTLEtBQUFBO21CQUFQLFNBQU9BLGlDQUFpQ0MsZUFBZSxFQUFFVixVQUFVO2dCQUMvRCxJQUFNVyxtQkFBbUJELGdCQUFnQkUsbUJBQW1CLElBQ3REakIsV0FBV2tCLCtCQUFvQixFQUMvQmpCLGFBQWE7b0JBQ1hlO2lCQUNELEVBQ0RkLFVBQVUsTUFDVmlCLHdCQUF3QkMsaUJBQVksQ0FBQ0MsZ0NBQWdDLENBakM1RHRCLHVCQWlDb0ZDLFVBQVVDLFlBQVlDLFNBQVNHO2dCQUVwSSxPQUFPYztZQUNUOzs7V0FwQ21CcEI7RUFBOEJxQixpQkFBWSJ9