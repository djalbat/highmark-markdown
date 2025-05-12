"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return SelectorMarkdownStyleNode;
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
var SelectorMarkdownStyleNode = /*#__PURE__*/ function(MarkdownStyleNode) {
    _inherits(SelectorMarkdownStyleNode, MarkdownStyleNode);
    function SelectorMarkdownStyleNode() {
        _class_call_check(this, SelectorMarkdownStyleNode);
        return _call_super(this, SelectorMarkdownStyleNode, arguments);
    }
    _create_class(SelectorMarkdownStyleNode, [
        {
            key: "markdownRuleName",
            value: function markdownRuleName() {
                var markdownRuleName = this.fromFirstChildNode(function(firstChildNode) {
                    var markdownRuleName = null;
                    var firstChildNodeTerminalNode = firstChildNode.isTerminalNode();
                    if (firstChildNodeTerminalNode) {
                        var terminalNode = firstChildNode, ruleNameTerminalNode = terminalNode, content = ruleNameTerminalNode.getContent();
                        markdownRuleName = content; ///
                    }
                    return markdownRuleName;
                });
                return markdownRuleName;
            }
        }
    ], [
        {
            key: "fromRuleNameChildNodesAndOpacity",
            value: function fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) {
                return _markdownStyle.default.fromRuleNameChildNodesAndOpacity(SelectorMarkdownStyleNode, ruleName, childNodes, opacity);
            }
        }
    ]);
    return SelectorMarkdownStyleNode;
}(_markdownStyle.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duU3R5bGUvc2VsZWN0b3IuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBNYXJrZG93blN0eWxlTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9tYXJrZG93blN0eWxlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlbGVjdG9yTWFya2Rvd25TdHlsZU5vZGUgZXh0ZW5kcyBNYXJrZG93blN0eWxlTm9kZSB7XG4gIG1hcmtkb3duUnVsZU5hbWUoKSB7XG4gICAgY29uc3QgbWFya2Rvd25SdWxlTmFtZSA9IHRoaXMuZnJvbUZpcnN0Q2hpbGROb2RlKChmaXJzdENoaWxkTm9kZSkgPT4ge1xuICAgICAgbGV0IG1hcmtkb3duUnVsZU5hbWUgPSBudWxsO1xuXG4gICAgICBjb25zdCBmaXJzdENoaWxkTm9kZVRlcm1pbmFsTm9kZSA9IGZpcnN0Q2hpbGROb2RlLmlzVGVybWluYWxOb2RlKCk7XG5cbiAgICAgIGlmIChmaXJzdENoaWxkTm9kZVRlcm1pbmFsTm9kZSkge1xuICAgICAgICBjb25zdCB0ZXJtaW5hbE5vZGUgPSBmaXJzdENoaWxkTm9kZSwgIC8vL1xuICAgICAgICAgICAgICBydWxlTmFtZVRlcm1pbmFsTm9kZSA9IHRlcm1pbmFsTm9kZSwgIC8vL1xuICAgICAgICAgICAgICBjb250ZW50ID0gcnVsZU5hbWVUZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpO1xuXG4gICAgICAgIG1hcmtkb3duUnVsZU5hbWUgPSBjb250ZW50OyAvLy9cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG1hcmtkb3duUnVsZU5hbWU7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbWFya2Rvd25SdWxlTmFtZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eShydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSkgeyByZXR1cm4gTWFya2Rvd25TdHlsZU5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkoU2VsZWN0b3JNYXJrZG93blN0eWxlTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHkpOyB9XG59XG4iXSwibmFtZXMiOlsiU2VsZWN0b3JNYXJrZG93blN0eWxlTm9kZSIsIm1hcmtkb3duUnVsZU5hbWUiLCJmcm9tRmlyc3RDaGlsZE5vZGUiLCJmaXJzdENoaWxkTm9kZSIsImZpcnN0Q2hpbGROb2RlVGVybWluYWxOb2RlIiwiaXNUZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGUiLCJydWxlTmFtZVRlcm1pbmFsTm9kZSIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwiZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkiLCJydWxlTmFtZSIsImNoaWxkTm9kZXMiLCJvcGFjaXR5IiwiTWFya2Rvd25TdHlsZU5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBSXFCQTs7O29FQUZTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWYsSUFBQSxBQUFNQSwwQ0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7ZUFBTixrQkFBTUE7O2tCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQSxtQkFBbUIsSUFBSSxDQUFDQyxrQkFBa0IsQ0FBQyxTQUFDQztvQkFDaEQsSUFBSUYsbUJBQW1CO29CQUV2QixJQUFNRyw2QkFBNkJELGVBQWVFLGNBQWM7b0JBRWhFLElBQUlELDRCQUE0Qjt3QkFDOUIsSUFBTUUsZUFBZUgsZ0JBQ2ZJLHVCQUF1QkQsY0FDdkJFLFVBQVVELHFCQUFxQkUsVUFBVTt3QkFFL0NSLG1CQUFtQk8sU0FBUyxHQUFHO29CQUNqQztvQkFFQSxPQUFPUDtnQkFDVDtnQkFFQSxPQUFPQTtZQUNUOzs7O1lBRU9TLEtBQUFBO21CQUFQLFNBQU9BLGlDQUFpQ0MsUUFBUSxFQUFFQyxVQUFVLEVBQUVDLE9BQU87Z0JBQUksT0FBT0Msc0JBQWlCLENBQUNKLGdDQUFnQyxDQXJCL0dWLDJCQXFCMklXLFVBQVVDLFlBQVlDO1lBQVU7OztXQXJCM0tiO0VBQWtDYyxzQkFBaUIifQ==