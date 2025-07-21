"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return AmountMarkdownStyleNode;
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
var AmountMarkdownStyleNode = /*#__PURE__*/ function(MarkdownStyleNode) {
    _inherits(AmountMarkdownStyleNode, MarkdownStyleNode);
    function AmountMarkdownStyleNode() {
        _class_call_check(this, AmountMarkdownStyleNode);
        return _call_super(this, AmountMarkdownStyleNode, arguments);
    }
    _create_class(AmountMarkdownStyleNode, [
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
                return _markdownStyle.default.fromRuleNameChildNodesOpacityAndPrecedence(AmountMarkdownStyleNode, ruleName, childNodes, opacity, precedence);
            }
        }
    ]);
    return AmountMarkdownStyleNode;
}(_markdownStyle.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duU3R5bGUvYW1vdW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTWFya2Rvd25TdHlsZU5vZGUgZnJvbSBcIi4uLy4uL25vZGUvbWFya2Rvd25TdHlsZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBbW91bnRNYXJrZG93blN0eWxlTm9kZSBleHRlbmRzIE1hcmtkb3duU3R5bGVOb2RlIHtcbiAgY29udGVudCgpIHtcbiAgICBjb25zdCBjb250ZW50ID0gdGhpcy5yZWR1Y2VDaGlsZE5vZGUoKGNvbnRlbnQsIGNoaWxkTm9kZSkgPT4ge1xuICAgICAgY29uc3QgdGVybWluYWxOb2RlID0gY2hpbGROb2RlLCAgLy8vXG4gICAgICAgICAgICB0ZXJtaW5hbE5vZGVDb250ZW50ID0gdGVybWluYWxOb2RlLmdldENvbnRlbnQoKTtcblxuICAgICAgY29udGVudCA9IChjb250ZW50ICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgIGAke2NvbnRlbnR9JHt0ZXJtaW5hbE5vZGVDb250ZW50fWAgOlxuICAgICAgICAgICAgICAgICAgICB0ZXJtaW5hbE5vZGVDb250ZW50OyAgLy8vXG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0sIG51bGwpO1xuXG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlKHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlKSB7IHJldHVybiBNYXJrZG93blN0eWxlTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UoQW1vdW50TWFya2Rvd25TdHlsZU5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlKTsgfVxufVxuIl0sIm5hbWVzIjpbIkFtb3VudE1hcmtkb3duU3R5bGVOb2RlIiwiY29udGVudCIsInJlZHVjZUNoaWxkTm9kZSIsImNoaWxkTm9kZSIsInRlcm1pbmFsTm9kZSIsInRlcm1pbmFsTm9kZUNvbnRlbnQiLCJnZXRDb250ZW50IiwiZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlIiwicnVsZU5hbWUiLCJjaGlsZE5vZGVzIiwib3BhY2l0eSIsInByZWNlZGVuY2UiLCJNYXJrZG93blN0eWxlTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFJcUJBOzs7b0VBRlM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFZixJQUFBLEFBQU1BLHdDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtRQUFOLE9BQUEsa0JBQU1BOztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUEsVUFBVSxJQUFJLENBQUNDLGVBQWUsQ0FBQyxTQUFDRCxTQUFTRTtvQkFDN0MsSUFBTUMsZUFBZUQsV0FDZkUsc0JBQXNCRCxhQUFhRSxVQUFVO29CQUVuREwsVUFBVSxBQUFDQSxZQUFZLE9BQ1osQUFBQyxHQUFZSSxPQUFWSixTQUE4QixPQUFwQkksdUJBQ1ZBLHFCQUFzQixHQUFHO29CQUV2QyxPQUFPSjtnQkFDVCxHQUFHO2dCQUVILE9BQU9BO1lBQ1Q7Ozs7WUFFT00sS0FBQUE7bUJBQVAsU0FBT0EsMkNBQTJDQyxRQUFRLEVBQUVDLFVBQVUsRUFBRUMsT0FBTyxFQUFFQyxVQUFVO2dCQUFJLE9BQU9DLHNCQUFpQixDQUFDTCwwQ0FBMEMsQ0FoQi9JUCx5QkFnQnlLUSxVQUFVQyxZQUFZQyxTQUFTQztZQUFhOzs7V0FoQnJOWDtFQUFnQ1ksc0JBQWlCIn0=