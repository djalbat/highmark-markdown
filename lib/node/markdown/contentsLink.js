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
var _ruleNames = require("../../ruleNames");
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
var ContentsLinkMarkdownNode = /*#__PURE__*/ function(MarkdownNode) {
    _inherits(ContentsLinkMarkdownNode, MarkdownNode);
    function ContentsLinkMarkdownNode(ruleName, childNodes, opacity, precedence, domElement, identifier) {
        _class_call_check(this, ContentsLinkMarkdownNode);
        var _this;
        _this = _call_super(this, ContentsLinkMarkdownNode, [
            ruleName,
            childNodes,
            opacity,
            precedence,
            domElement
        ]);
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
            key: "clone",
            value: function clone() {
                return _get(_get_prototype_of(ContentsLinkMarkdownNode.prototype), "clone", this).call(this, this.identifier);
            }
        }
    ], [
        {
            key: "fromLineReplacementAndIdentifier",
            value: function fromLineReplacementAndIdentifier(lineReplacement, identifier) {
                var lineMarkdownNode = lineReplacement.getLineMarkdownNode(), ruleName = _ruleNames.CONTENTS_LINK_RULE_NAME, childNodes = [
                    lineMarkdownNode
                ], opacity = null, contentsLinkMarkdownNode = _markdown.default.fromRuleNameChildNodesAndOpacity(ContentsLinkMarkdownNode, ruleName, childNodes, opacity, identifier);
                return contentsLinkMarkdownNode;
            }
        }
    ]);
    return ContentsLinkMarkdownNode;
}(_markdown.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2NvbnRlbnRzTGluay5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE1hcmtkb3duTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9tYXJrZG93blwiO1xuXG5pbXBvcnQgeyBDT05URU5UU19MSU5LX1JVTEVfTkFNRSB9IGZyb20gXCIuLi8uLi9ydWxlTmFtZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udGVudHNMaW5rTWFya2Rvd25Ob2RlIGV4dGVuZHMgTWFya2Rvd25Ob2RlIHtcbiAgY29uc3RydWN0b3IocnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHByZWNlZGVuY2UsIGRvbUVsZW1lbnQsIGlkZW50aWZpZXIpIHtcbiAgICBzdXBlcihydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSwgZG9tRWxlbWVudCk7XG5cbiAgICB0aGlzLmlkZW50aWZpZXIgPSBpZGVudGlmaWVyO1xuICB9XG5cbiAgZ2V0SWRlbnRpZmllcigpIHtcbiAgICByZXR1cm4gdGhpcy5pZGVudGlmaWVyO1xuICB9XG5cbiAgY2xvbmUoKSB7IHJldHVybiBzdXBlci5jbG9uZSh0aGlzLmlkZW50aWZpZXIpOyB9XG5cbiAgc3RhdGljIGZyb21MaW5lUmVwbGFjZW1lbnRBbmRJZGVudGlmaWVyKGxpbmVSZXBsYWNlbWVudCwgaWRlbnRpZmllcikge1xuICAgICAgY29uc3QgbGluZU1hcmtkb3duTm9kZSA9IGxpbmVSZXBsYWNlbWVudC5nZXRMaW5lTWFya2Rvd25Ob2RlKCksXG4gICAgICAgICAgICBydWxlTmFtZSA9IENPTlRFTlRTX0xJTktfUlVMRV9OQU1FLFxuICAgICAgICAgICAgY2hpbGROb2RlcyA9IFtcbiAgICAgICAgICAgICAgbGluZU1hcmtkb3duTm9kZVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIG9wYWNpdHkgPSBudWxsLFxuICAgICAgICAgICAgY29udGVudHNMaW5rTWFya2Rvd25Ob2RlID0gTWFya2Rvd25Ob2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5KENvbnRlbnRzTGlua01hcmtkb3duTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIGlkZW50aWZpZXIpO1xuXG4gICAgcmV0dXJuIGNvbnRlbnRzTGlua01hcmtkb3duTm9kZTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkNvbnRlbnRzTGlua01hcmtkb3duTm9kZSIsInJ1bGVOYW1lIiwiY2hpbGROb2RlcyIsIm9wYWNpdHkiLCJwcmVjZWRlbmNlIiwiZG9tRWxlbWVudCIsImlkZW50aWZpZXIiLCJnZXRJZGVudGlmaWVyIiwiY2xvbmUiLCJmcm9tTGluZVJlcGxhY2VtZW50QW5kSWRlbnRpZmllciIsImxpbmVSZXBsYWNlbWVudCIsImxpbmVNYXJrZG93bk5vZGUiLCJnZXRMaW5lTWFya2Rvd25Ob2RlIiwiQ09OVEVOVFNfTElOS19SVUxFX05BTUUiLCJjb250ZW50c0xpbmtNYXJrZG93bk5vZGUiLCJNYXJrZG93bk5vZGUiLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFNcUJBOzs7K0RBSkk7eUJBRWU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV6QixJQUFBLEFBQU1BLHlDQUFOO2NBQU1BO2FBQUFBLHlCQUNQQyxRQUFRLEVBQUVDLFVBQVUsRUFBRUMsT0FBTyxFQUFFQyxVQUFVLEVBQUVDLFVBQVUsRUFBRUMsVUFBVTtnQ0FEMUROOztnQkFFakIsa0JBRmlCQTtZQUVYQztZQUFVQztZQUFZQztZQUFTQztZQUFZQzs7UUFFakQsTUFBS0MsVUFBVSxHQUFHQTs7O2tCQUpETjs7WUFPbkJPLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0QsVUFBVTtZQUN4Qjs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFBVSxPQUFPLHVCQVhFUixxQ0FXSVEsU0FBTixJQUFLLGFBQU8sSUFBSSxDQUFDRixVQUFVO1lBQUc7Ozs7WUFFeENHLEtBQUFBO21CQUFQLFNBQU9BLGlDQUFpQ0MsZUFBZSxFQUFFSixVQUFVO2dCQUMvRCxJQUFNSyxtQkFBbUJELGdCQUFnQkUsbUJBQW1CLElBQ3REWCxXQUFXWSxrQ0FBdUIsRUFDbENYLGFBQWE7b0JBQ1hTO2lCQUNELEVBQ0RSLFVBQVUsTUFDVlcsMkJBQTJCQyxpQkFBWSxDQUFDQyxnQ0FBZ0MsQ0FwQi9EaEIsMEJBb0IwRkMsVUFBVUMsWUFBWUMsU0FBU0c7Z0JBRTFJLE9BQU9RO1lBQ1Q7OztXQXZCbUJkO0VBQWlDZSxpQkFBWSJ9