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
                return _get(_get_prototype_of(ContentsLinkMarkdownNode.prototype), "clone", this).call(this, this.identifier);
            }
        }
    ], [
        {
            key: "fromLineReplacementAndIdentifier",
            value: function fromLineReplacementAndIdentifier(lineReplacement, identifier) {
                var lineReplacementNode = lineReplacement.getNode(), lineMarkdownNode = lineReplacementNode, ruleName = _ruleNames.CONTENTS_LINK_RULE_NAME, childNodes = [
                    lineMarkdownNode
                ], opacity = null, contentsLinkMarkdownNode = _markdown.default.fromRuleNameChildNodesAndOpacity(ContentsLinkMarkdownNode, ruleName, childNodes, opacity, identifier);
                return contentsLinkMarkdownNode;
            }
        }
    ]);
    return ContentsLinkMarkdownNode;
}(_markdown.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2NvbnRlbnRzTGluay5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE1hcmtkb3duTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9tYXJrZG93blwiO1xuXG5pbXBvcnQgeyBIUkVGX0FUVFJJQlVURV9OQU1FIH0gZnJvbSBcIi4uLy4uL2F0dHJpYnV0ZU5hbWVzXCI7XG5pbXBvcnQgeyBDT05URU5UU19MSU5LX1JVTEVfTkFNRSB9IGZyb20gXCIuLi8uLi9ydWxlTmFtZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udGVudHNMaW5rTWFya2Rvd25Ob2RlIGV4dGVuZHMgTWFya2Rvd25Ob2RlIHtcbiAgY29uc3RydWN0b3IocnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHByZWNlZGVuY2UsIGRvbUVsZW1lbnQsIGlkZW50aWZpZXIpIHtcbiAgICBzdXBlcihydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSwgZG9tRWxlbWVudCk7XG5cbiAgICB0aGlzLmlkZW50aWZpZXIgPSBpZGVudGlmaWVyO1xuICB9XG5cbiAgZ2V0SWRlbnRpZmllcigpIHtcbiAgICByZXR1cm4gdGhpcy5pZGVudGlmaWVyO1xuICB9XG5cbiAgYXR0cmlidXRlTmFtZShjb250ZXh0KSB7XG4gICAgY29uc3QgYXR0cmlidXRlTmFtZSA9IEhSRUZfQVRUUklCVVRFX05BTUU7XG5cbiAgICByZXR1cm4gYXR0cmlidXRlTmFtZTtcbiAgfVxuXG4gIGF0dHJpYnV0ZVZhbHVlKGNvbnRleHQpIHtcbiAgICBjb25zdCBhdHRyaWJ1dGVWYWx1ZSA9IGAjJHt0aGlzLmlkZW50aWZpZXJ9YDtcblxuICAgIHJldHVybiBhdHRyaWJ1dGVWYWx1ZTtcbiAgfVxuXG4gIGNsb25lKCkgeyByZXR1cm4gc3VwZXIuY2xvbmUodGhpcy5pZGVudGlmaWVyKTsgfVxuXG4gIHN0YXRpYyBmcm9tTGluZVJlcGxhY2VtZW50QW5kSWRlbnRpZmllcihsaW5lUmVwbGFjZW1lbnQsIGlkZW50aWZpZXIpIHtcbiAgICAgIGNvbnN0IGxpbmVSZXBsYWNlbWVudE5vZGUgPSBsaW5lUmVwbGFjZW1lbnQuZ2V0Tm9kZSgpLFxuICAgICAgICAgICAgbGluZU1hcmtkb3duTm9kZSA9IGxpbmVSZXBsYWNlbWVudE5vZGUsIC8vL1xuICAgICAgICAgICAgcnVsZU5hbWUgPSBDT05URU5UU19MSU5LX1JVTEVfTkFNRSxcbiAgICAgICAgICAgIGNoaWxkTm9kZXMgPSBbXG4gICAgICAgICAgICAgIGxpbmVNYXJrZG93bk5vZGVcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBvcGFjaXR5ID0gbnVsbCxcbiAgICAgICAgICAgIGNvbnRlbnRzTGlua01hcmtkb3duTm9kZSA9IE1hcmtkb3duTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eShDb250ZW50c0xpbmtNYXJrZG93bk5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBpZGVudGlmaWVyKTtcblxuICAgIHJldHVybiBjb250ZW50c0xpbmtNYXJrZG93bk5vZGU7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJDb250ZW50c0xpbmtNYXJrZG93bk5vZGUiLCJydWxlTmFtZSIsImNoaWxkTm9kZXMiLCJvcGFjaXR5IiwicHJlY2VkZW5jZSIsImRvbUVsZW1lbnQiLCJpZGVudGlmaWVyIiwiZ2V0SWRlbnRpZmllciIsImF0dHJpYnV0ZU5hbWUiLCJjb250ZXh0IiwiSFJFRl9BVFRSSUJVVEVfTkFNRSIsImF0dHJpYnV0ZVZhbHVlIiwiY2xvbmUiLCJmcm9tTGluZVJlcGxhY2VtZW50QW5kSWRlbnRpZmllciIsImxpbmVSZXBsYWNlbWVudCIsImxpbmVSZXBsYWNlbWVudE5vZGUiLCJnZXROb2RlIiwibGluZU1hcmtkb3duTm9kZSIsIkNPTlRFTlRTX0xJTktfUlVMRV9OQU1FIiwiY29udGVudHNMaW5rTWFya2Rvd25Ob2RlIiwiTWFya2Rvd25Ob2RlIiwiZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFPcUJBOzs7K0RBTEk7OEJBRVc7eUJBQ0k7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV6QixJQUFBLEFBQU1BLHlDQUFELEFBQUw7Y0FBTUE7K0JBQUFBO2FBQUFBLHlCQUNQQyxRQUFRLEVBQUVDLFVBQVUsRUFBRUMsT0FBTyxFQUFFQyxVQUFVLEVBQUVDLFVBQVUsRUFBRUMsVUFBVTtnQ0FEMUROOztrQ0FFWEMsVUFBVUMsWUFBWUMsU0FBU0MsWUFBWUM7UUFFakQsTUFBS0MsVUFBVSxHQUFHQTs7O2tCQUpETjs7WUFPbkJPLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0QsVUFBVTtZQUN4Qjs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxjQUFjQyxPQUFPO2dCQUNuQixJQUFNRCxnQkFBZ0JFLG1DQUFtQjtnQkFFekMsT0FBT0Y7WUFDVDs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxlQUFlRixPQUFPO2dCQUNwQixJQUFNRSxpQkFBaUIsQUFBQyxJQUFtQixPQUFoQixJQUFJLENBQUNMLFVBQVU7Z0JBRTFDLE9BQU9LO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQVUsT0FBTyx1QkF2QkVaLHFDQXVCSVksU0FBTixJQUFLLGFBQU8sSUFBSSxDQUFDTixVQUFVO1lBQUc7Ozs7WUFFeENPLEtBQUFBO21CQUFQLFNBQU9BLGlDQUFpQ0MsZUFBZSxFQUFFUixVQUFVO2dCQUMvRCxJQUFNUyxzQkFBc0JELGdCQUFnQkUsT0FBTyxJQUM3Q0MsbUJBQW1CRixxQkFDbkJkLFdBQVdpQixrQ0FBdUIsRUFDbENoQixhQUFhO29CQUNYZTtpQkFDRCxFQUNEZCxVQUFVLE1BQ1ZnQiwyQkFBMkJDLGlCQUFZLENBQUNDLGdDQUFnQyxDQWpDL0RyQiwwQkFpQzBGQyxVQUFVQyxZQUFZQyxTQUFTRztnQkFFMUksT0FBT2E7WUFDVDs7O1dBcENtQm5CO0VBQWlDb0IsaUJBQVkifQ==