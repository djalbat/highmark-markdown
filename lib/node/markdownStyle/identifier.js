"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return IdentifierMarkdownStyleNode;
    }
});
var _markdownStyle = /*#__PURE__*/ _interop_require_default(require("../../node/markdownStyle"));
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
var IdentifierMarkdownStyleNode = /*#__PURE__*/ function(MarkdownStyleNode) {
    _inherits(IdentifierMarkdownStyleNode, MarkdownStyleNode);
    function IdentifierMarkdownStyleNode() {
        _class_call_check(this, IdentifierMarkdownStyleNode);
        return _call_super(this, IdentifierMarkdownStyleNode, arguments);
    }
    _create_class(IdentifierMarkdownStyleNode, [
        {
            key: "content",
            value: function content() {
                var content = this.reduceChildNode(function(content, childNode) {
                    var terminalNode = childNode, terminalNodeContent = terminalNode.getContent();
                    content = content !== null ? "".concat(content).concat(terminalNodeContent) : terminalNodeContent; ///
                    return content;
                }, null);
                return content;
            }
        }
    ], [
        {
            key: "fromRuleNameChildNodesOpacityAndPrecedence",
            value: function fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) {
                return _markdownStyle.default.fromRuleNameChildNodesOpacityAndPrecedence(IdentifierMarkdownStyleNode, ruleName, childNodes, opacity, precedence);
            }
        }
    ]);
    return IdentifierMarkdownStyleNode;
}(_markdownStyle.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duU3R5bGUvaWRlbnRpZmllci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE1hcmtkb3duU3R5bGVOb2RlIGZyb20gXCIuLi8uLi9ub2RlL21hcmtkb3duU3R5bGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSWRlbnRpZmllck1hcmtkb3duU3R5bGVOb2RlIGV4dGVuZHMgTWFya2Rvd25TdHlsZU5vZGUge1xuICBjb250ZW50KCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLnJlZHVjZUNoaWxkTm9kZSgoY29udGVudCwgY2hpbGROb2RlKSA9PiB7XG4gICAgICBjb25zdCB0ZXJtaW5hbE5vZGUgPSBjaGlsZE5vZGUsICAvLy9cbiAgICAgICAgICAgIHRlcm1pbmFsTm9kZUNvbnRlbnQgPSB0ZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpO1xuXG4gICAgICBjb250ZW50ID0gKGNvbnRlbnQgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgYCR7Y29udGVudH0ke3Rlcm1pbmFsTm9kZUNvbnRlbnR9YCA6XG4gICAgICAgICAgICAgICAgICAgIHRlcm1pbmFsTm9kZUNvbnRlbnQ7ICAvLy9cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSwgbnVsbCk7XG5cbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UocnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHByZWNlZGVuY2UpIHsgcmV0dXJuIE1hcmtkb3duU3R5bGVOb2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZShJZGVudGlmaWVyTWFya2Rvd25TdHlsZU5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlKTsgfVxufVxuIl0sIm5hbWVzIjpbIklkZW50aWZpZXJNYXJrZG93blN0eWxlTm9kZSIsImNvbnRlbnQiLCJyZWR1Y2VDaGlsZE5vZGUiLCJjaGlsZE5vZGUiLCJ0ZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGVDb250ZW50IiwiZ2V0Q29udGVudCIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZSIsInJ1bGVOYW1lIiwiY2hpbGROb2RlcyIsIm9wYWNpdHkiLCJwcmVjZWRlbmNlIiwiTWFya2Rvd25TdHlsZU5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBSXFCQTs7O29FQUZTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWYsSUFBQSxBQUFNQSw0Q0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7UUFBTixPQUFBLGtCQUFNQTs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1BLFVBQVUsSUFBSSxDQUFDQyxlQUFlLENBQUMsU0FBQ0QsU0FBU0U7b0JBQzdDLElBQU1DLGVBQWVELFdBQ2ZFLHNCQUFzQkQsYUFBYUUsVUFBVTtvQkFFbkRMLFVBQVUsQUFBQ0EsWUFBWSxPQUNaLEFBQUMsR0FBWUksT0FBVkosU0FBOEIsT0FBcEJJLHVCQUNWQSxxQkFBc0IsR0FBRztvQkFFdkMsT0FBT0o7Z0JBQ1QsR0FBRztnQkFFSCxPQUFPQTtZQUNUOzs7O1lBRU9NLEtBQUFBO21CQUFQLFNBQU9BLDJDQUEyQ0MsUUFBUSxFQUFFQyxVQUFVLEVBQUVDLE9BQU8sRUFBRUMsVUFBVTtnQkFBSSxPQUFPQyxzQkFBaUIsQ0FBQ0wsMENBQTBDLENBaEIvSVAsNkJBZ0I2S1EsVUFBVUMsWUFBWUMsU0FBU0M7WUFBYTs7O1dBaEJ6Tlg7RUFBb0NZLHNCQUFpQiJ9