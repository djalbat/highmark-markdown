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
            key: "fromRuleNameChildNodesAndOpacity",
            value: function fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) {
                return _markdownStyle.default.fromRuleNameChildNodesAndOpacity(IdentifierMarkdownStyleNode, ruleName, childNodes, opacity);
            }
        }
    ]);
    return IdentifierMarkdownStyleNode;
}(_markdownStyle.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duU3R5bGUvaWRlbnRpZmllci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE1hcmtkb3duU3R5bGVOb2RlIGZyb20gXCIuLi8uLi9ub2RlL21hcmtkb3duU3R5bGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSWRlbnRpZmllck1hcmtkb3duU3R5bGVOb2RlIGV4dGVuZHMgTWFya2Rvd25TdHlsZU5vZGUge1xuICBjb250ZW50KCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLnJlZHVjZUNoaWxkTm9kZSgoY29udGVudCwgY2hpbGROb2RlKSA9PiB7XG4gICAgICBjb25zdCB0ZXJtaW5hbE5vZGUgPSBjaGlsZE5vZGUsICAvLy9cbiAgICAgICAgICAgIHRlcm1pbmFsTm9kZUNvbnRlbnQgPSB0ZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpO1xuXG4gICAgICBjb250ZW50ID0gKGNvbnRlbnQgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgYCR7Y29udGVudH0ke3Rlcm1pbmFsTm9kZUNvbnRlbnR9YCA6XG4gICAgICAgICAgICAgICAgICAgIHRlcm1pbmFsTm9kZUNvbnRlbnQ7ICAvLy9cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSwgbnVsbCk7XG5cbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eShydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSkgeyByZXR1cm4gTWFya2Rvd25TdHlsZU5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkoSWRlbnRpZmllck1hcmtkb3duU3R5bGVOb2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSk7IH1cbn1cbiJdLCJuYW1lcyI6WyJJZGVudGlmaWVyTWFya2Rvd25TdHlsZU5vZGUiLCJjb250ZW50IiwicmVkdWNlQ2hpbGROb2RlIiwiY2hpbGROb2RlIiwidGVybWluYWxOb2RlIiwidGVybWluYWxOb2RlQ29udGVudCIsImdldENvbnRlbnQiLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eSIsInJ1bGVOYW1lIiwiY2hpbGROb2RlcyIsIm9wYWNpdHkiLCJNYXJrZG93blN0eWxlTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFJcUJBOzs7b0VBRlM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFZixJQUFBLEFBQU1BLDRDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtlQUFOLGtCQUFNQTs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1BLFVBQVUsSUFBSSxDQUFDQyxlQUFlLENBQUMsU0FBQ0QsU0FBU0U7b0JBQzdDLElBQU1DLGVBQWVELFdBQ2ZFLHNCQUFzQkQsYUFBYUUsVUFBVTtvQkFFbkRMLFVBQVUsQUFBQ0EsWUFBWSxPQUNaLEFBQUMsR0FBWUksT0FBVkosU0FBOEIsT0FBcEJJLHVCQUNWQSxxQkFBc0IsR0FBRztvQkFFdkMsT0FBT0o7Z0JBQ1QsR0FBRztnQkFFSCxPQUFPQTtZQUNUOzs7O1lBRU9NLEtBQUFBO21CQUFQLFNBQU9BLGlDQUFpQ0MsUUFBUSxFQUFFQyxVQUFVLEVBQUVDLE9BQU87Z0JBQUksT0FBT0Msc0JBQWlCLENBQUNKLGdDQUFnQyxDQWhCL0dQLDZCQWdCNklRLFVBQVVDLFlBQVlDO1lBQVU7OztXQWhCN0tWO0VBQW9DVyxzQkFBaUIifQ==